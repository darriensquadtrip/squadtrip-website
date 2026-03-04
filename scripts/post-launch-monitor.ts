/**
 * Post-Launch Monitor
 * Hits all key URLs on production, checks for redirect loops,
 * verifies sitemap and robots.txt accessibility.
 *
 * Usage: npx tsx scripts/post-launch-monitor.ts [base-url]
 * Default base URL: https://www.squadtrip.com
 */

import { readdir } from "fs/promises";
import { join, dirname } from "path";
import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, "..");

const BASE_URL = process.argv[2] || "https://www.squadtrip.com";

interface CheckResult {
  url: string;
  status: number | string;
  redirectChain: string[];
  pass: boolean;
  note?: string;
}

const KEY_PAGES = [
  "/",
  "/features",
  "/pricing",
  "/guides",
  "/travel-agents",
  "/travel-groups",
  "/destination-wedding-planners",
  "/about-us",
  "/press",
  "/privacy",
  "/product-updates",
];

const REDIRECT_TESTS = [
  { source: "/wp-admin", expectRedirect: true },
  { source: "/wp-login.php", expectRedirect: true },
  { source: "/xmlrpc.php", expectRedirect: true },
  { source: "/es/something", expectRedirect: true },
  { source: "/home-jan-24", expectRedirect: true },
];

const SPECIAL_FILES = ["/sitemap.xml", "/robots.txt", "/llms.txt"];

async function checkUrl(url: string, maxRedirects = 10): Promise<CheckResult> {
  const redirectChain: string[] = [];
  let currentUrl = url;

  for (let i = 0; i < maxRedirects; i++) {
    try {
      const response = await fetch(currentUrl, { redirect: "manual" });
      const status = response.status;

      if (status >= 300 && status < 400) {
        const location = response.headers.get("location");
        if (!location) {
          return { url, status, redirectChain, pass: false, note: "Redirect with no Location header" };
        }

        const nextUrl = location.startsWith("http") ? location : new URL(location, currentUrl).toString();

        if (redirectChain.includes(nextUrl)) {
          return { url, status: "LOOP", redirectChain: [...redirectChain, nextUrl], pass: false, note: "Redirect loop detected" };
        }

        redirectChain.push(nextUrl);
        currentUrl = nextUrl;
        continue;
      }

      return {
        url,
        status,
        redirectChain,
        pass: status === 200,
        note: status === 200 ? undefined : `Unexpected status ${status}`,
      };
    } catch (error) {
      return {
        url,
        status: "ERROR",
        redirectChain,
        pass: false,
        note: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  return { url, status: "TOO_MANY_REDIRECTS", redirectChain, pass: false, note: "Exceeded max redirects" };
}

async function getGuideSlugs(): Promise<string[]> {
  try {
    const guidesDir = join(PROJECT_ROOT, "content", "guides");
    const files = await readdir(guidesDir);
    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(/\.mdx$/, ""));
  } catch {
    console.log("  Could not read guides directory, skipping guide checks");
    return [];
  }
}

async function run() {
  console.log(`\n🚀 Post-Launch Monitor`);
  console.log(`Base URL: ${BASE_URL}\n`);

  const results: CheckResult[] = [];
  let passCount = 0;
  let failCount = 0;

  // 1. Check key pages
  console.log("📄 Checking key pages...");
  for (const path of KEY_PAGES) {
    const url = `${BASE_URL}${path}`;
    const result = await checkUrl(url);
    results.push(result);
    const icon = result.pass ? "✅" : "❌";
    console.log(`  ${icon} ${path} → ${result.status}${result.note ? ` (${result.note})` : ""}`);
    if (result.pass) passCount++;
    else failCount++;
  }

  // 2. Check sample guide pages
  console.log("\n📚 Checking sample guide pages...");
  const guideSlugs = await getGuideSlugs();
  const sampleGuides = guideSlugs.slice(0, 5);
  for (const slug of sampleGuides) {
    const url = `${BASE_URL}/guides/${slug}`;
    const result = await checkUrl(url);
    results.push(result);
    const icon = result.pass ? "✅" : "❌";
    console.log(`  ${icon} /guides/${slug} → ${result.status}`);
    if (result.pass) passCount++;
    else failCount++;
  }

  // 3. Check special files
  console.log("\n📋 Checking special files...");
  for (const path of SPECIAL_FILES) {
    const url = `${BASE_URL}${path}`;
    const result = await checkUrl(url);
    results.push(result);
    const icon = result.pass ? "✅" : "❌";
    console.log(`  ${icon} ${path} → ${result.status}`);
    if (result.pass) passCount++;
    else failCount++;
  }

  // 4. Check redirects
  console.log("\n🔀 Checking redirects...");
  for (const test of REDIRECT_TESTS) {
    const url = `${BASE_URL}${test.source}`;
    const result = await checkUrl(url);
    const isRedirected = result.redirectChain.length > 0;
    const redirectPass = test.expectRedirect ? isRedirected && result.pass : result.pass;
    const icon = redirectPass ? "✅" : "❌";
    console.log(
      `  ${icon} ${test.source} → ${isRedirected ? `redirected (${result.redirectChain.length} hops)` : `status ${result.status}`}`
    );
    if (redirectPass) passCount++;
    else failCount++;
  }

  // 5. Check for redirect loops on common paths
  console.log("\n🔄 Checking for redirect loops...");
  const loopTestPaths = ["/", "/features", "/pricing", "/guides"];
  for (const path of loopTestPaths) {
    const url = `${BASE_URL}${path}`;
    const result = await checkUrl(url);
    const hasLoop = result.status === "LOOP" || result.status === "TOO_MANY_REDIRECTS";
    const icon = hasLoop ? "❌" : "✅";
    console.log(`  ${icon} ${path} — ${hasLoop ? "LOOP DETECTED" : "no loop"}`);
    if (!hasLoop) passCount++;
    else failCount++;
  }

  // Generate report
  const overall = failCount === 0 ? "PASS" : "FAIL";
  const reportLines = [
    `# Post-Launch Monitor Report`,
    ``,
    `**Date:** ${new Date().toISOString()}`,
    `**Base URL:** ${BASE_URL}`,
    `**Overall:** ${overall === "PASS" ? "✅ PASS" : "❌ FAIL"}`,
    `**Results:** ${passCount} passed, ${failCount} failed`,
    ``,
    `## Key Pages`,
    ``,
    `| Page | Status | Pass |`,
    `|------|--------|------|`,
  ];

  for (const r of results.filter((r) => KEY_PAGES.some((p) => r.url === `${BASE_URL}${p}`))) {
    const path = r.url.replace(BASE_URL, "") || "/";
    reportLines.push(`| ${path} | ${r.status} | ${r.pass ? "✅" : "❌"} |`);
  }

  reportLines.push("", "## Special Files", "", "| File | Status | Pass |", "|------|--------|------|");
  for (const r of results.filter((r) => SPECIAL_FILES.some((p) => r.url === `${BASE_URL}${p}`))) {
    const path = r.url.replace(BASE_URL, "");
    reportLines.push(`| ${path} | ${r.status} | ${r.pass ? "✅" : "❌"} |`);
  }

  if (failCount > 0) {
    reportLines.push("", "## Failures", "");
    for (const r of results.filter((r) => !r.pass)) {
      reportLines.push(`- **${r.url}**: ${r.status}${r.note ? ` — ${r.note}` : ""}`);
      if (r.redirectChain.length > 0) {
        reportLines.push(`  Redirect chain: ${r.redirectChain.join(" → ")}`);
      }
    }
  }

  const reportPath = join(PROJECT_ROOT, "audit", "post-launch-report.md");
  await writeFile(reportPath, reportLines.join("\n"), "utf-8");

  console.log(`\n${"=".repeat(50)}`);
  console.log(`${overall === "PASS" ? "✅" : "❌"} Overall: ${overall}`);
  console.log(`${passCount} passed, ${failCount} failed`);
  console.log(`Report saved to: audit/post-launch-report.md`);
}

run().catch(console.error);
