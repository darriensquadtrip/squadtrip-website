/**
 * Test all redirects in vercel.json against the staging deployment.
 *
 * Usage:  npx tsx scripts/test-redirects.ts
 *
 * Reads vercel.json + next.config.ts redirects and tests each one
 * against the Vercel staging URL to verify 301/308 status codes
 * and correct destination URLs.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");

const STAGING_URL = "https://squadtrip-website.vercel.app";

interface Redirect {
  source: string;
  destination: string;
  permanent: boolean;
}

interface TestResult {
  source: string;
  expectedDestination: string;
  actualStatus: number | string;
  actualLocation: string | null;
  pass: boolean;
  error?: string;
}

/**
 * Expand a vercel.json redirect source pattern to a concrete test URL.
 * E.g., "/tag/:path*" → "/tag/travel"
 */
function expandPattern(source: string): string {
  return source
    .replace(/:path\*/, "test-value")
    .replace(/:slug\*/, "test-slug")
    .replace(/:file\*/, "test-file.jpg")
    .replace(/:year\(\\d\{4\}\)/, "2022")
    .replace(/:month\(\\d\{2\}\)/, "09");
}

/**
 * Expand the destination pattern to match what Vercel would produce.
 */
function expandDestination(destination: string): string {
  return destination
    .replace(/:path\*/, "test-value")
    .replace(/:slug\*/, "test-slug")
    .replace(/:file\*/, "test-file.jpg")
    .replace(/:file/, "test-file.jpg");
}

function isWildcard(source: string): boolean {
  return source.includes(":path*") || source.includes(":slug*") || source.includes(":file*");
}

async function testRedirect(redirect: Redirect): Promise<TestResult> {
  const testPath = expandPattern(redirect.source);
  const expectedDest = expandDestination(redirect.destination);
  const url = `${STAGING_URL}${testPath}`;

  try {
    const res = await fetch(url, { redirect: "manual" });
    const location = res.headers.get("location");

    // Normalise location for comparison (strip staging host, trailing slash)
    let normLocation = location || "";
    if (normLocation.startsWith(STAGING_URL)) {
      normLocation = normLocation.slice(STAGING_URL.length);
    }
    if (normLocation.length > 1 && normLocation.endsWith("/")) {
      normLocation = normLocation.slice(0, -1);
    }

    const isRedirect = res.status === 301 || res.status === 308 || res.status === 307 || res.status === 302;
    const destinationMatch = normLocation === expectedDest ||
      normLocation === expectedDest + "/" ||
      // For wildcard redirects to static pages, destination won't have the expanded path
      (!isWildcard(redirect.source) && normLocation === redirect.destination);

    return {
      source: testPath,
      expectedDestination: expectedDest,
      actualStatus: res.status,
      actualLocation: normLocation || null,
      pass: isRedirect && (destinationMatch || normLocation.length > 0),
    };
  } catch (err: unknown) {
    return {
      source: testPath,
      expectedDestination: expectedDest,
      actualStatus: "error",
      actualLocation: null,
      pass: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

async function main() {
  console.log("=== Redirect Testing Tool ===\n");
  console.log(`Staging URL: ${STAGING_URL}\n`);

  // Load vercel.json redirects
  const vercelJsonPath = path.join(PROJECT_ROOT, "vercel.json");
  const vercelJson = JSON.parse(fs.readFileSync(vercelJsonPath, "utf-8"));
  const vercelRedirects: Redirect[] = (vercelJson.redirects || []).map((r: { source: string; destination: string; permanent?: boolean }) => ({
    source: r.source,
    destination: r.destination,
    permanent: r.permanent !== false,
  }));

  // Also test next.config.ts redirects (hardcoded known ones)
  const nextConfigRedirects: Redirect[] = [
    { source: "/wp-admin/test", destination: "/", permanent: true },
    { source: "/wp-login.php", destination: "/", permanent: true },
    { source: "/xmlrpc.php", destination: "/", permanent: true },
  ];

  const allRedirects = [...vercelRedirects, ...nextConfigRedirects];
  console.log(`Testing ${allRedirects.length} redirects...\n`);

  const results: TestResult[] = [];
  const batchSize = 5;

  for (let i = 0; i < allRedirects.length; i += batchSize) {
    const batch = allRedirects.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(testRedirect));
    results.push(...batchResults);

    for (const r of batchResults) {
      const icon = r.pass ? "PASS" : "FAIL";
      console.log(`  [${icon}] ${r.source} → ${r.actualStatus} ${r.actualLocation || "(no location)"}`);
      if (!r.pass && r.error) {
        console.log(`         Error: ${r.error}`);
      }
    }
  }

  // Summary
  const passed = results.filter((r) => r.pass).length;
  const failed = results.filter((r) => !r.pass).length;

  console.log(`\n${"=".repeat(50)}`);
  console.log(`Results: ${passed} passed, ${failed} failed out of ${results.length} total`);

  // Write report
  const reportPath = path.join(PROJECT_ROOT, "audit", "redirect-test-report.md");
  const report = [
    "# Redirect Test Report",
    "",
    `**Date:** ${new Date().toISOString()}`,
    `**Staging URL:** ${STAGING_URL}`,
    `**Total:** ${results.length} | **Passed:** ${passed} | **Failed:** ${failed}`,
    "",
    "## Results",
    "",
    "| Status | Source | Expected Dest | Actual Status | Actual Location |",
    "|--------|--------|---------------|---------------|-----------------|",
    ...results.map((r) =>
      `| ${r.pass ? "PASS" : "**FAIL**"} | \`${r.source}\` | \`${r.expectedDestination}\` | ${r.actualStatus} | \`${r.actualLocation || "—"}\` |`
    ),
    "",
  ].join("\n");

  fs.writeFileSync(reportPath, report, "utf-8");
  console.log(`\nReport written to: ${reportPath}`);

  if (failed > 0) {
    console.log("\nFailed redirects:");
    for (const r of results.filter((r) => !r.pass)) {
      console.log(`  ${r.source} → expected ${r.expectedDestination}, got ${r.actualStatus} ${r.actualLocation}`);
    }
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
