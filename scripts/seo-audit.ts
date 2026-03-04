/**
 * Pre-launch SEO audit for the Vercel staging site.
 *
 * Crawls every page, checks essential SEO elements, and outputs
 * a Markdown report to audit/seo-audit.md.
 *
 * Usage: npx tsx scripts/seo-audit.ts
 *        npx tsx scripts/seo-audit.ts https://custom-staging-url.vercel.app
 */

import fs from "fs";
import path from "path";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const BASE_URL = process.argv[2] || "https://squadtrip-website.vercel.app";

const STATIC_PATHS = [
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

/** Pages where thin-content warnings are suppressed (guides are long-form). */
const GUIDE_PREFIX = "/guides/";

const MAX_CONCURRENT = 3;

const PROJECT_ROOT = path.resolve(__dirname, "..");

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SeoCheck {
  url: string;
  path: string;
  title: string | null;
  description: string | null;
  canonical: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  ogUrl: string | null;
  h1Tags: string[];
  imagesTotal: number;
  imagesMissingAlt: number;
  wordCount: number;
  hasStructuredData: boolean;
  structuredDataCount: number;
  issues: Issue[];
}

interface Issue {
  severity: "error" | "warning" | "info";
  message: string;
}

// ---------------------------------------------------------------------------
// Helpers – HTML extraction via regex
// ---------------------------------------------------------------------------

function extractTag(html: string, tag: string): string | null {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

function extractMetaContent(html: string, nameOrProperty: string): string | null {
  // Match both name="..." and property="..." variants
  const re = new RegExp(
    `<meta\\s+(?:[^>]*?(?:name|property)\\s*=\\s*["']${nameOrProperty}["'][^>]*?content\\s*=\\s*["']([^"']*?)["']|[^>]*?content\\s*=\\s*["']([^"']*?)["'][^>]*?(?:name|property)\\s*=\\s*["']${nameOrProperty}["'])`,
    "i"
  );
  const m = html.match(re);
  if (!m) return null;
  return (m[1] ?? m[2] ?? "").trim() || null;
}

function extractCanonical(html: string): string | null {
  const re = /<link\s+[^>]*rel\s*=\s*["']canonical["'][^>]*href\s*=\s*["']([^"']*?)["']/i;
  const m = html.match(re);
  if (m) return m[1].trim() || null;

  // href before rel
  const re2 = /<link\s+[^>]*href\s*=\s*["']([^"']*?)["'][^>]*rel\s*=\s*["']canonical["']/i;
  const m2 = html.match(re2);
  return m2 ? m2[1].trim() || null : null;
}

function extractH1Tags(html: string): string[] {
  const tags: string[] = [];
  const re = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    tags.push(stripTags(m[1]).trim());
  }
  return tags;
}

function extractImages(html: string): { total: number; missingAlt: number } {
  const imgRe = /<img\s[^>]*?\/?>/gi;
  let total = 0;
  let missingAlt = 0;
  let m: RegExpExecArray | null;
  while ((m = imgRe.exec(html)) !== null) {
    total++;
    const tag = m[0];
    const hasAlt = /\balt\s*=\s*["'][^"']+["']/i.test(tag);
    if (!hasAlt) missingAlt++;
  }
  return { total, missingAlt };
}

function countStructuredData(html: string): number {
  const re = /<script\s+[^>]*type\s*=\s*["']application\/ld\+json["']/gi;
  let count = 0;
  while (re.exec(html) !== null) count++;
  return count;
}

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

function visibleWordCount(html: string): number {
  // Remove script / style / noscript blocks, then strip tags
  let text = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "");
  text = stripTags(text);
  // Collapse whitespace and count words
  const words = text.replace(/\s+/g, " ").trim().split(" ");
  return words[0] === "" ? 0 : words.length;
}

// ---------------------------------------------------------------------------
// Page fetching
// ---------------------------------------------------------------------------

async function fetchPage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "SquadtripSEOAudit/1.0" },
      redirect: "follow",
    });
    if (!res.ok) {
      console.error(`  [${res.status}] ${url}`);
      return null;
    }
    return await res.text();
  } catch (err) {
    console.error(`  [FETCH ERROR] ${url}: ${(err as Error).message}`);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Audit a single page
// ---------------------------------------------------------------------------

function auditPage(pagePath: string, html: string): SeoCheck {
  const url = `${BASE_URL}${pagePath}`;
  const issues: Issue[] = [];

  const title = extractTag(html, "title");
  const description = extractMetaContent(html, "description");
  const canonical = extractCanonical(html);
  const ogTitle = extractMetaContent(html, "og:title");
  const ogDescription = extractMetaContent(html, "og:description");
  const ogImage = extractMetaContent(html, "og:image");
  const ogUrl = extractMetaContent(html, "og:url");
  const h1Tags = extractH1Tags(html);
  const { total: imagesTotal, missingAlt: imagesMissingAlt } = extractImages(html);
  const wordCount = visibleWordCount(html);
  const structuredDataCount = countStructuredData(html);
  const hasStructuredData = structuredDataCount > 0;

  // --- Flag issues ---

  // Title
  if (!title) {
    issues.push({ severity: "error", message: "Missing <title> tag" });
  } else if (title.length < 10) {
    issues.push({ severity: "warning", message: `Title is very short (${title.length} chars)` });
  } else if (title.length > 70) {
    issues.push({ severity: "warning", message: `Title may be truncated in SERPs (${title.length} chars)` });
  }

  // Meta description
  if (!description) {
    issues.push({ severity: "error", message: "Missing meta description" });
  } else if (description.length < 50) {
    issues.push({ severity: "warning", message: `Meta description is short (${description.length} chars)` });
  } else if (description.length > 160) {
    issues.push({ severity: "warning", message: `Meta description may be truncated (${description.length} chars)` });
  }

  // Canonical
  if (!canonical) {
    issues.push({ severity: "error", message: "Missing canonical link" });
  }

  // Open Graph
  if (!ogTitle) issues.push({ severity: "warning", message: "Missing og:title" });
  if (!ogDescription) issues.push({ severity: "warning", message: "Missing og:description" });
  if (!ogImage) issues.push({ severity: "warning", message: "Missing og:image" });
  if (!ogUrl) issues.push({ severity: "warning", message: "Missing og:url" });

  // H1 tags
  if (h1Tags.length === 0) {
    issues.push({ severity: "error", message: "Missing <h1> tag" });
  } else if (h1Tags.length > 1) {
    issues.push({ severity: "warning", message: `Multiple <h1> tags found (${h1Tags.length})` });
  }

  // Images without alt text
  if (imagesMissingAlt > 0) {
    issues.push({
      severity: "warning",
      message: `${imagesMissingAlt} image(s) missing alt text (of ${imagesTotal} total)`,
    });
  }

  // Thin content (only for non-guide pages)
  const isGuidePage = pagePath.startsWith(GUIDE_PREFIX);
  if (!isGuidePage && wordCount < 300) {
    issues.push({
      severity: "warning",
      message: `Thin content: ${wordCount} words (recommend >= 300 for main pages)`,
    });
  }

  // Structured data
  const keyPages = ["/", "/features", "/pricing", "/about-us"];
  if (keyPages.includes(pagePath) && !hasStructuredData) {
    issues.push({ severity: "info", message: "No structured data (JSON-LD) on key page" });
  }

  return {
    url,
    path: pagePath,
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    h1Tags,
    imagesTotal,
    imagesMissingAlt,
    wordCount,
    hasStructuredData,
    structuredDataCount,
    issues,
  };
}

// ---------------------------------------------------------------------------
// Concurrency-limited runner
// ---------------------------------------------------------------------------

async function runWithConcurrency<T>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<void>
): Promise<void> {
  let idx = 0;
  const workers = Array.from({ length: limit }, async () => {
    while (idx < items.length) {
      const i = idx++;
      await fn(items[i]);
    }
  });
  await Promise.all(workers);
}

// ---------------------------------------------------------------------------
// Discover guide slugs from content/guides/
// ---------------------------------------------------------------------------

function discoverGuideSlugs(): string[] {
  const guidesDir = path.join(PROJECT_ROOT, "content", "guides");
  if (!fs.existsSync(guidesDir)) {
    console.warn("  content/guides/ not found – skipping guide pages");
    return [];
  }
  return fs
    .readdirSync(guidesDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

// ---------------------------------------------------------------------------
// Markdown report generation
// ---------------------------------------------------------------------------

function severityOrder(s: Issue["severity"]): number {
  return s === "error" ? 0 : s === "warning" ? 1 : 2;
}

function severityEmoji(s: Issue["severity"]): string {
  return s === "error" ? "ERROR" : s === "warning" ? "WARN" : "INFO";
}

function generateReport(results: SeoCheck[]): string {
  const totalPages = results.length;
  const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
  const errorCount = results.reduce(
    (sum, r) => sum + r.issues.filter((i) => i.severity === "error").length,
    0
  );
  const warningCount = results.reduce(
    (sum, r) => sum + r.issues.filter((i) => i.severity === "warning").length,
    0
  );
  const infoCount = results.reduce(
    (sum, r) => sum + r.issues.filter((i) => i.severity === "info").length,
    0
  );

  // Check for duplicate titles
  const titleMap = new Map<string, string[]>();
  for (const r of results) {
    if (r.title) {
      const key = r.title.toLowerCase();
      if (!titleMap.has(key)) titleMap.set(key, []);
      titleMap.get(key)!.push(r.path);
    }
  }
  const duplicateTitles = [...titleMap.entries()].filter(([, paths]) => paths.length > 1);

  const lines: string[] = [];

  // Header
  lines.push("# SEO Audit Report");
  lines.push("");
  lines.push(`**Site:** ${BASE_URL}`);
  lines.push(`**Date:** ${new Date().toISOString().split("T")[0]}`);
  lines.push(`**Total pages crawled:** ${totalPages}`);
  lines.push("");

  // Summary
  lines.push("## Summary");
  lines.push("");
  lines.push(`| Metric | Count |`);
  lines.push(`| --- | --- |`);
  lines.push(`| Pages crawled | ${totalPages} |`);
  lines.push(`| Total issues | ${totalIssues} |`);
  lines.push(`| Errors | ${errorCount} |`);
  lines.push(`| Warnings | ${warningCount} |`);
  lines.push(`| Info | ${infoCount} |`);
  lines.push("");

  // Duplicate titles
  if (duplicateTitles.length > 0) {
    lines.push("## Duplicate Titles");
    lines.push("");
    for (const [title, paths] of duplicateTitles) {
      lines.push(`- **\"${title}\"** found on:`);
      for (const p of paths) {
        lines.push(`  - \`${p}\``);
      }
    }
    lines.push("");
  }

  // All issues sorted by severity
  const allIssues: { severity: Issue["severity"]; path: string; message: string }[] = [];
  for (const r of results) {
    for (const issue of r.issues) {
      allIssues.push({ severity: issue.severity, path: r.path, message: issue.message });
    }
  }
  // Add duplicate-title issues
  for (const [title, paths] of duplicateTitles) {
    for (const p of paths) {
      allIssues.push({
        severity: "warning",
        path: p,
        message: `Duplicate title: "${title}"`,
      });
    }
  }

  allIssues.sort((a, b) => severityOrder(a.severity) - severityOrder(b.severity));

  lines.push("## All Issues (sorted by severity)");
  lines.push("");
  if (allIssues.length === 0) {
    lines.push("No issues found.");
  } else {
    lines.push("| Severity | Page | Issue |");
    lines.push("| --- | --- | --- |");
    for (const issue of allIssues) {
      lines.push(`| ${severityEmoji(issue.severity)} | \`${issue.path}\` | ${issue.message} |`);
    }
  }
  lines.push("");

  // Per-page breakdown
  lines.push("## Per-Page Breakdown");
  lines.push("");

  for (const r of results) {
    lines.push(`### \`${r.path}\``);
    lines.push("");
    lines.push(`| Element | Value |`);
    lines.push(`| --- | --- |`);
    lines.push(`| URL | ${r.url} |`);
    lines.push(`| Title | ${r.title ? truncate(r.title, 80) : "**MISSING**"} |`);
    lines.push(`| Meta Description | ${r.description ? truncate(r.description, 100) : "**MISSING**"} |`);
    lines.push(`| Canonical | ${r.canonical ?? "**MISSING**"} |`);
    lines.push(`| og:title | ${r.ogTitle ? truncate(r.ogTitle, 80) : "**MISSING**"} |`);
    lines.push(`| og:description | ${r.ogDescription ? truncate(r.ogDescription, 80) : "**MISSING**"} |`);
    lines.push(`| og:image | ${r.ogImage ? truncate(r.ogImage, 80) : "**MISSING**"} |`);
    lines.push(`| og:url | ${r.ogUrl ?? "**MISSING**"} |`);
    lines.push(`| H1 | ${r.h1Tags.length === 0 ? "**MISSING**" : r.h1Tags.map((h) => truncate(h, 60)).join("; ")} |`);
    lines.push(`| Images | ${r.imagesTotal} total, ${r.imagesMissingAlt} missing alt |`);
    lines.push(`| Word Count | ${r.wordCount} |`);
    lines.push(`| Structured Data | ${r.hasStructuredData ? `Yes (${r.structuredDataCount})` : "None"} |`);
    lines.push(`| Issues | ${r.issues.length === 0 ? "None" : r.issues.length} |`);

    if (r.issues.length > 0) {
      lines.push("");
      lines.push("**Issues:**");
      for (const issue of r.issues) {
        lines.push(`- [${severityEmoji(issue.severity)}] ${issue.message}`);
      }
    }

    lines.push("");
  }

  return lines.join("\n");
}

function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  return s.slice(0, max - 3) + "...";
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`\nSquadtrip SEO Audit`);
  console.log(`Base URL: ${BASE_URL}\n`);

  // Build list of paths to crawl
  const guideSlugs = discoverGuideSlugs();
  const guidePaths = guideSlugs.map((slug) => `/guides/${slug}`);
  const allPaths = [...STATIC_PATHS, ...guidePaths];

  console.log(`Pages to audit: ${allPaths.length} (${STATIC_PATHS.length} static + ${guidePaths.length} guides)\n`);

  const results: SeoCheck[] = [];
  let completed = 0;

  await runWithConcurrency(allPaths, MAX_CONCURRENT, async (pagePath) => {
    const url = `${BASE_URL}${pagePath}`;
    const html = await fetchPage(url);
    completed++;

    if (html) {
      const result = auditPage(pagePath, html);
      results.push(result);
      const issueCount = result.issues.length;
      console.log(
        `  [${completed}/${allPaths.length}] ${pagePath} — ${issueCount} issue(s)`
      );
    } else {
      console.log(
        `  [${completed}/${allPaths.length}] ${pagePath} — FAILED TO FETCH`
      );
    }
  });

  // Sort results to match the original path order
  results.sort(
    (a, b) => allPaths.indexOf(a.path) - allPaths.indexOf(b.path)
  );

  // Generate and write report
  const report = generateReport(results);
  const auditDir = path.join(PROJECT_ROOT, "audit");
  if (!fs.existsSync(auditDir)) {
    fs.mkdirSync(auditDir, { recursive: true });
  }
  const outputPath = path.join(auditDir, "seo-audit.md");
  fs.writeFileSync(outputPath, report, "utf-8");

  // Console summary
  const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
  const errors = results.reduce(
    (sum, r) => sum + r.issues.filter((i) => i.severity === "error").length,
    0
  );
  const warnings = results.reduce(
    (sum, r) => sum + r.issues.filter((i) => i.severity === "warning").length,
    0
  );

  console.log(`\n--- Audit Complete ---`);
  console.log(`Pages crawled: ${results.length}/${allPaths.length}`);
  console.log(`Total issues:  ${totalIssues} (${errors} errors, ${warnings} warnings)`);
  console.log(`Report saved:  ${outputPath}\n`);
}

main().catch((err) => {
  console.error("SEO audit failed:", err);
  process.exit(1);
});
