/**
 * Content Parity Checker
 * Compares WordPress pages vs Vercel pages to catch missing content.
 *
 * Usage: npx tsx scripts/content-parity.ts
 */

import { writeFile, readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, "..");

const WP_BASE = "https://squadtrip.com";
const VERCEL_BASE = process.argv[2] || "https://squadtrip-website.vercel.app";

interface PageMetrics {
  url: string;
  title: string;
  h1: string;
  metaDescription: string;
  wordCount: number;
  internalLinkCount: number;
  imageCount: number;
  ctaCount: number;
}

interface ComparisonResult {
  wpUrl: string;
  vercelUrl: string;
  wp: PageMetrics | null;
  vercel: PageMetrics | null;
  issues: string[];
}

// URL pairs to compare (WP path → Vercel path)
const URL_PAIRS = [
  { wp: "/", vercel: "/" },
  { wp: "/features", vercel: "/features" },
  { wp: "/pricing", vercel: "/pricing" },
  { wp: "/guides", vercel: "/guides" },
  { wp: "/travel-agents", vercel: "/travel-agents" },
  { wp: "/travel-groups", vercel: "/travel-groups" },
  { wp: "/destination-wedding-planners", vercel: "/destination-wedding-planners" },
  { wp: "/about-us", vercel: "/about-us" },
  { wp: "/press", vercel: "/press" },
  { wp: "/privacy", vercel: "/privacy" },
];

function extractText(html: string): string {
  // Remove scripts and styles
  let text = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  text = text.replace(/<style[\s\S]*?<\/style>/gi, "");
  // Remove HTML tags
  text = text.replace(/<[^>]+>/g, " ");
  // Normalize whitespace
  text = text.replace(/\s+/g, " ").trim();
  return text;
}

function extractMetrics(html: string, url: string): PageMetrics {
  // Title
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/is);
  const title = titleMatch ? titleMatch[1].trim() : "";

  // H1
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/is);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, "").trim() : "";

  // Meta description
  const metaMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/is)
    || html.match(/<meta\s+content=["'](.*?)["']\s+name=["']description["']/is);
  const metaDescription = metaMatch ? metaMatch[1].trim() : "";

  // Word count
  const text = extractText(html);
  const wordCount = text.split(/\s+/).filter((w) => w.length > 0).length;

  // Internal links
  const linkMatches = html.match(/<a\s[^>]*href=["'][^"']*["'][^>]*>/gi) || [];
  const internalLinkCount = linkMatches.filter(
    (l) => !l.includes("http") || l.includes("squadtrip.com") || l.includes("vercel.app")
  ).length;

  // Images
  const imageMatches = html.match(/<img\s/gi) || [];
  const imageCount = imageMatches.length;

  // CTAs (buttons and primary links)
  const ctaMatches =
    html.match(/class=["'][^"']*btn[-_]primary[^"']*["']/gi) ||
    [];
  const ctaCount = ctaMatches.length;

  return { url, title, h1, metaDescription, wordCount, internalLinkCount, imageCount, ctaCount };
}

async function fetchPage(url: string): Promise<string | null> {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "SquadTrip-ContentParity/1.0" },
      redirect: "follow",
    });
    if (!response.ok) return null;
    return await response.text();
  } catch {
    return null;
  }
}

function compareMetrics(wp: PageMetrics, vercel: PageMetrics): string[] {
  const issues: string[] = [];

  // Title comparison
  if (!vercel.title) {
    issues.push("Missing title tag on Vercel");
  }

  // H1 comparison
  if (!vercel.h1) {
    issues.push("Missing H1 on Vercel");
  }

  // Meta description
  if (!vercel.metaDescription) {
    issues.push("Missing meta description on Vercel");
  }

  // Word count diff
  if (wp.wordCount > 0 && vercel.wordCount > 0) {
    const diff = Math.abs(wp.wordCount - vercel.wordCount) / wp.wordCount;
    if (diff > 0.2) {
      issues.push(
        `Word count differs by ${Math.round(diff * 100)}% (WP: ${wp.wordCount}, Vercel: ${vercel.wordCount})`
      );
    }
  }

  // Image count
  if (vercel.imageCount < wp.imageCount * 0.5 && wp.imageCount > 2) {
    issues.push(
      `Significantly fewer images (WP: ${wp.imageCount}, Vercel: ${vercel.imageCount})`
    );
  }

  // CTA count
  if (vercel.ctaCount === 0 && wp.ctaCount > 0) {
    issues.push("No primary CTA buttons found on Vercel page");
  }

  // Internal links
  if (vercel.internalLinkCount < wp.internalLinkCount * 0.5 && wp.internalLinkCount > 3) {
    issues.push(
      `Significantly fewer internal links (WP: ${wp.internalLinkCount}, Vercel: ${vercel.internalLinkCount})`
    );
  }

  return issues;
}

async function run() {
  console.log("🔍 Content Parity Checker");
  console.log(`WordPress: ${WP_BASE}`);
  console.log(`Vercel: ${VERCEL_BASE}\n`);

  // Try to load redirect map for additional URL pairs
  let additionalPairs: { wp: string; vercel: string }[] = [];
  try {
    const mapPath = join(PROJECT_ROOT, "audit", "redirect-map.json");
    const mapData = JSON.parse(await readFile(mapPath, "utf-8"));
    for (const [wpUrl, vercelUrl] of Object.entries(mapData)) {
      const wpPath = new URL(wpUrl as string).pathname;
      const vercelPath = vercelUrl as string;
      if (!URL_PAIRS.some((p) => p.wp === wpPath)) {
        additionalPairs.push({ wp: wpPath, vercel: vercelPath });
      }
    }
    console.log(`Found ${additionalPairs.length} additional URL pairs from redirect map\n`);
  } catch {
    console.log("No redirect map found, using default URL pairs only\n");
  }

  const allPairs = [...URL_PAIRS, ...additionalPairs.slice(0, 20)]; // Limit additional pairs
  const results: ComparisonResult[] = [];

  for (const pair of allPairs) {
    const wpUrl = `${WP_BASE}${pair.wp}`;
    const vercelUrl = `${VERCEL_BASE}${pair.vercel}`;

    console.log(`Comparing: ${pair.wp}`);

    const [wpHtml, vercelHtml] = await Promise.all([
      fetchPage(wpUrl),
      fetchPage(vercelUrl),
    ]);

    const result: ComparisonResult = {
      wpUrl,
      vercelUrl,
      wp: null,
      vercel: null,
      issues: [],
    };

    if (!wpHtml) {
      result.issues.push("Could not fetch WordPress page");
    } else {
      result.wp = extractMetrics(wpHtml, wpUrl);
    }

    if (!vercelHtml) {
      result.issues.push("Could not fetch Vercel page");
    } else {
      result.vercel = extractMetrics(vercelHtml, vercelUrl);
    }

    if (result.wp && result.vercel) {
      result.issues = compareMetrics(result.wp, result.vercel);
    }

    const icon = result.issues.length === 0 ? "✅" : "⚠️";
    console.log(`  ${icon} ${result.issues.length === 0 ? "Match" : result.issues.join(", ")}`);

    results.push(result);
  }

  // Generate report
  const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
  const pagesWithIssues = results.filter((r) => r.issues.length > 0).length;

  const lines = [
    "# Content Parity Report",
    "",
    `**Date:** ${new Date().toISOString()}`,
    `**WordPress:** ${WP_BASE}`,
    `**Vercel:** ${VERCEL_BASE}`,
    "",
    `## Summary`,
    "",
    `- **Pages checked:** ${results.length}`,
    `- **Pages with issues:** ${pagesWithIssues}`,
    `- **Total issues:** ${totalIssues}`,
    "",
    "## Per-Page Comparison",
    "",
  ];

  for (const r of results) {
    const wpPath = r.wpUrl.replace(WP_BASE, "") || "/";
    const status = r.issues.length === 0 ? "✅ Match" : "⚠️ Issues";
    lines.push(`### ${wpPath} ${status}`);
    lines.push("");

    if (r.wp && r.vercel) {
      lines.push("| Metric | WordPress | Vercel |");
      lines.push("|--------|-----------|--------|");
      lines.push(`| Title | ${r.wp.title.substring(0, 60)} | ${r.vercel.title.substring(0, 60)} |`);
      lines.push(`| H1 | ${r.wp.h1.substring(0, 60)} | ${r.vercel.h1.substring(0, 60)} |`);
      lines.push(`| Word Count | ${r.wp.wordCount} | ${r.vercel.wordCount} |`);
      lines.push(`| Images | ${r.wp.imageCount} | ${r.vercel.imageCount} |`);
      lines.push(`| Internal Links | ${r.wp.internalLinkCount} | ${r.vercel.internalLinkCount} |`);
      lines.push(`| CTAs | ${r.wp.ctaCount} | ${r.vercel.ctaCount} |`);
    }

    if (r.issues.length > 0) {
      lines.push("");
      lines.push("**Issues:**");
      for (const issue of r.issues) {
        lines.push(`- ${issue}`);
      }
    }
    lines.push("");
  }

  // Issues summary
  if (totalIssues > 0) {
    lines.push("## All Issues");
    lines.push("");
    for (const r of results.filter((r) => r.issues.length > 0)) {
      const path = r.wpUrl.replace(WP_BASE, "") || "/";
      for (const issue of r.issues) {
        lines.push(`- **${path}**: ${issue}`);
      }
    }
  }

  const reportPath = join(PROJECT_ROOT, "audit", "content-parity-report.md");
  await writeFile(reportPath, lines.join("\n"), "utf-8");

  console.log(`\n${"=".repeat(50)}`);
  console.log(`📊 ${results.length} pages compared`);
  console.log(`${pagesWithIssues === 0 ? "✅" : "⚠️"} ${pagesWithIssues} pages with issues, ${totalIssues} total issues`);
  console.log(`Report saved to: audit/content-parity-report.md`);
}

run().catch(console.error);
