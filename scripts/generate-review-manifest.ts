/**
 * Generates review-manifest.json for the QA Review Tool.
 *
 * Scans all MDX guides and app routes, cross-references known broken links,
 * and outputs a manifest with metadata for every reviewable page.
 *
 * Usage: npx tsx scripts/generate-review-manifest.ts
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const PROJECT_ROOT = path.resolve(__dirname, "..");
const GUIDES_DIR = path.join(PROJECT_ROOT, "content", "guides");
const APP_DIR = path.join(PROJECT_ROOT, "app");
const BROKEN_LINKS_PATH = path.join(PROJECT_ROOT, "audit", "broken-links.md");
const OUTPUT_PATH = path.join(PROJECT_ROOT, "review-manifest.json");
const BASE_URL = process.argv[2] || "https://squadtrip-website.vercel.app";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PageEntry {
  id: string;
  type: "guide" | "marketing" | "product";
  slug: string;
  path: string;
  url: string;
  title: string;
  description: string;
  category: string;
  featuredImage: string;
  readingTime: number;
  knownIssues: string[];
}

// ---------------------------------------------------------------------------
// Parse broken links report
// ---------------------------------------------------------------------------

function parseBrokenLinks(): Map<string, string[]> {
  const issuesByPage = new Map<string, string[]>();

  if (!fs.existsSync(BROKEN_LINKS_PATH)) {
    console.warn("Warning: broken-links.md not found, skipping issue cross-reference");
    return issuesByPage;
  }

  const content = fs.readFileSync(BROKEN_LINKS_PATH, "utf-8");
  const lines = content.split("\n");

  for (const line of lines) {
    // Match table rows: | URL | Status | Found On |
    const match = line.match(/^\|\s*(https?:\/\/[^\s|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|/);
    if (!match) continue;

    const brokenUrl = match[1].trim();
    const status = match[2].trim();
    const foundOnRaw = match[3].trim();

    // Extract page paths from "Found On" column
    const pagePaths = foundOnRaw
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.startsWith("/"));

    for (const pagePath of pagePaths) {
      const existing = issuesByPage.get(pagePath) || [];
      const isInternal = brokenUrl.includes("squadtrip-website.vercel.app") || brokenUrl.includes("www.squadtrip.com");
      const issueType = isInternal ? "Broken internal link" : "Broken external link";
      const issue = `${issueType} (${status}): ${brokenUrl}`;

      if (!existing.some((e) => e === issue)) {
        existing.push(issue);
      }
      issuesByPage.set(pagePath, existing);
    }
  }

  return issuesByPage;
}

// ---------------------------------------------------------------------------
// Scan guides
// ---------------------------------------------------------------------------

function scanGuides(issuesByPage: Map<string, string[]>): PageEntry[] {
  if (!fs.existsSync(GUIDES_DIR)) {
    console.warn("Warning: guides directory not found");
    return [];
  }

  const files = fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith(".mdx"));
  const entries: PageEntry[] = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(GUIDES_DIR, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);
    const pagePath = `/guides/${slug}`;

    entries.push({
      id: `guide-${slug}`,
      type: "guide",
      slug,
      path: pagePath,
      url: `${BASE_URL}${pagePath}`,
      title: data.title || slug,
      description: data.description || "",
      category: data.category || "uncategorized",
      featuredImage: data.featuredImage || "",
      readingTime: data.readingTime || Math.ceil(stats.minutes),
      knownIssues: issuesByPage.get(pagePath) || [],
    });
  }

  return entries;
}

// ---------------------------------------------------------------------------
// Scan app routes (marketing & product pages)
// ---------------------------------------------------------------------------

function scanAppRoutes(issuesByPage: Map<string, string[]>): PageEntry[] {
  const entries: PageEntry[] = [];

  function walk(dir: string, routePrefix: string) {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      if (!item.isDirectory()) continue;

      // Skip dynamic routes like [slug]
      if (item.name.startsWith("[")) continue;
      // Skip internal Next.js dirs
      if (item.name.startsWith("_") || item.name === "api") continue;

      const subDir = path.join(dir, item.name);
      const routePath = `${routePrefix}/${item.name}`;

      // Check for page.tsx
      if (fs.existsSync(path.join(subDir, "page.tsx"))) {
        const slug = item.name;
        const isProduct = routePath.startsWith("/product");
        const type = isProduct ? "product" as const : "marketing" as const;

        // Skip the guides index and individual guide pages (handled separately)
        if (routePath === "/guides") {
          entries.push({
            id: "marketing-guides-index",
            type: "marketing",
            slug: "guides",
            path: "/guides",
            url: `${BASE_URL}/guides`,
            title: "Guides Index",
            description: "Guide listing page",
            category: "index",
            featuredImage: "",
            readingTime: 0,
            knownIssues: issuesByPage.get("/guides") || [],
          });
          walk(subDir, routePath);
          continue;
        }

        entries.push({
          id: `${type}-${slug}`,
          type,
          slug,
          path: routePath,
          url: `${BASE_URL}${routePath}`,
          title: formatTitle(slug),
          description: "",
          category: isProduct ? "product" : "marketing",
          featuredImage: "",
          readingTime: 0,
          knownIssues: issuesByPage.get(routePath) || [],
        });
      }

      // Recurse into subdirectories
      walk(subDir, routePath);
    }
  }

  // Handle root page (homepage)
  if (fs.existsSync(path.join(APP_DIR, "page.tsx"))) {
    entries.push({
      id: "marketing-homepage",
      type: "marketing",
      slug: "homepage",
      path: "/",
      url: BASE_URL,
      title: "Homepage",
      description: "Main landing page",
      category: "marketing",
      featuredImage: "",
      readingTime: 0,
      knownIssues: issuesByPage.get("/") || [],
    });
  }

  walk(APP_DIR, "");

  return entries;
}

function formatTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  console.log("Generating review manifest...\n");

  const issuesByPage = parseBrokenLinks();
  console.log(`  Parsed ${issuesByPage.size} pages with known issues from broken-links.md`);

  const guides = scanGuides(issuesByPage);
  console.log(`  Found ${guides.length} guide pages`);

  const appPages = scanAppRoutes(issuesByPage);
  console.log(`  Found ${appPages.length} app route pages`);

  const manifest = {
    generatedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    totalPages: guides.length + appPages.length,
    pages: [...appPages, ...guides],
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(manifest, null, 2));
  console.log(`\nWrote ${manifest.totalPages} pages to review-manifest.json`);

  // Summary
  const withIssues = manifest.pages.filter((p) => p.knownIssues.length > 0).length;
  const categories = new Set(guides.map((g) => g.category));
  console.log(`  Pages with known issues: ${withIssues}`);
  console.log(`  Guide categories: ${[...categories].sort().join(", ")}`);
}

main();
