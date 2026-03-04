/**
 * Crawl the Vercel staging site and check for broken links and missing images.
 *
 * Usage: npx tsx scripts/validate-links.ts
 *
 * Outputs:
 *   audit/broken-links.md   — broken internal links with source page
 *   audit/missing-images.md — broken image URLs with source page
 */

import fs from "fs";
import path from "path";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const BASE_URL =
  process.env.BASE_URL || "https://squadtrip-website.vercel.app";

const KNOWN_PAGES = [
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

const MAX_CONCURRENCY = 5;
const EXTERNAL_TIMEOUT_MS = 5_000;

const PROJECT_ROOT = path.resolve(__dirname, "..");
const GUIDES_DIR = path.join(PROJECT_ROOT, "content", "guides");
const AUDIT_DIR = path.join(PROJECT_ROOT, "audit");

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface LinkEntry {
  url: string;
  sourcePage: string;
}

interface CheckResult {
  url: string;
  sourcePage: string;
  status: number | string; // HTTP status or error message
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Resolve a URL relative to the base, returning an absolute URL string. */
function resolveUrl(href: string): string {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return href;
  }
  // Treat root-relative paths against BASE_URL
  return new URL(href, BASE_URL).toString();
}

/** True when the URL points to the staging site. */
function isInternal(url: string): boolean {
  return url.startsWith(BASE_URL);
}

/** True for URLs we should skip entirely. */
function shouldSkip(href: string): boolean {
  const lower = href.toLowerCase().trim();
  return (
    lower.startsWith("mailto:") ||
    lower.startsWith("tel:") ||
    lower.startsWith("javascript:") ||
    lower.startsWith("#") ||
    lower.startsWith("data:")
  );
}

/** Read .mdx filenames from the guides directory and derive URL paths. */
function getGuidePages(): string[] {
  if (!fs.existsSync(GUIDES_DIR)) {
    console.warn(`  [warn] Guides directory not found: ${GUIDES_DIR}`);
    return [];
  }
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => `/guides/${f.replace(/\.mdx$/, "")}`);
}

// ---------------------------------------------------------------------------
// HTML extraction (simple regex, no external parser)
// ---------------------------------------------------------------------------

function extractLinks(html: string): string[] {
  const results: string[] = [];
  // Match href="..." or href='...'
  const hrefRegex = /href\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
  let match: RegExpExecArray | null;
  while ((match = hrefRegex.exec(html)) !== null) {
    const href = (match[1] ?? match[2] ?? "").trim();
    if (href) results.push(href);
  }
  return results;
}

function extractImages(html: string): string[] {
  const results: string[] = [];
  // Match src="..." or src='...' inside <img tags
  const imgRegex = /<img[^>]+src\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
  let match: RegExpExecArray | null;
  while ((match = imgRegex.exec(html)) !== null) {
    const src = (match[1] ?? match[2] ?? "").trim();
    if (src) results.push(src);
  }
  // Also pick up srcset entries
  const srcsetRegex = /srcset\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
  while ((match = srcsetRegex.exec(html)) !== null) {
    const srcset = (match[1] ?? match[2] ?? "").trim();
    // Each srcset entry is "url descriptor, ..."
    srcset.split(",").forEach((entry) => {
      const url = entry.trim().split(/\s+/)[0];
      if (url) results.push(url);
    });
  }
  return results;
}

// ---------------------------------------------------------------------------
// Concurrency-limited runner
// ---------------------------------------------------------------------------

async function runConcurrent<T, R>(
  items: T[],
  concurrency: number,
  fn: (item: T) => Promise<R>
): Promise<R[]> {
  const results: R[] = [];
  let index = 0;

  async function worker(): Promise<void> {
    while (index < items.length) {
      const i = index++;
      results[i] = await fn(items[i]);
    }
  }

  const workers: Promise<void>[] = [];
  for (let w = 0; w < Math.min(concurrency, items.length); w++) {
    workers.push(worker());
  }
  await Promise.all(workers);
  return results;
}

// ---------------------------------------------------------------------------
// Fetching
// ---------------------------------------------------------------------------

async function fetchPage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

async function checkUrl(
  entry: LinkEntry,
  timeoutMs?: number
): Promise<CheckResult> {
  try {
    const controller = new AbortController();
    const timer = timeoutMs
      ? setTimeout(() => controller.abort(), timeoutMs)
      : undefined;

    const res = await fetch(entry.url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
    });

    if (timer) clearTimeout(timer);

    // Some servers reject HEAD; fall back to GET on 405
    if (res.status === 405) {
      const controller2 = new AbortController();
      const timer2 = timeoutMs
        ? setTimeout(() => controller2.abort(), timeoutMs)
        : undefined;

      const res2 = await fetch(entry.url, {
        redirect: "follow",
        signal: controller2.signal,
      });

      if (timer2) clearTimeout(timer2);
      // Consume body to free resources
      await res2.text().catch(() => {});
      return { url: entry.url, sourcePage: entry.sourcePage, status: res2.status };
    }

    return { url: entry.url, sourcePage: entry.sourcePage, status: res.status };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { url: entry.url, sourcePage: entry.sourcePage, status: message };
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log("=== Squadtrip Link & Image Validator ===\n");
  console.log(`Base URL: ${BASE_URL}\n`);

  // 1. Build page list
  const guidePages = getGuidePages();
  const allPages = [...KNOWN_PAGES, ...guidePages];
  console.log(
    `Pages to crawl: ${allPages.length} (${KNOWN_PAGES.length} known + ${guidePages.length} guides)\n`
  );

  // 2. Crawl each page, collecting links and images
  const internalLinkMap = new Map<string, Set<string>>(); // url -> source pages
  const imageLinkMap = new Map<string, Set<string>>();
  const externalLinkMap = new Map<string, Set<string>>();

  let crawled = 0;

  await runConcurrent(allPages, MAX_CONCURRENCY, async (pagePath) => {
    const pageUrl = `${BASE_URL}${pagePath}`;
    const html = await fetchPage(pageUrl);
    crawled++;

    if (crawled % 25 === 0 || crawled === allPages.length) {
      console.log(`  Crawled ${crawled}/${allPages.length} pages...`);
    }

    if (!html) {
      // The page itself is broken — record it as a broken internal link
      const existing = internalLinkMap.get(pageUrl) ?? new Set();
      existing.add("(seed list)");
      internalLinkMap.set(pageUrl, existing);
      return;
    }

    // Extract links
    for (const href of extractLinks(html)) {
      if (shouldSkip(href)) continue;

      const resolved = resolveUrl(href);
      if (isInternal(resolved)) {
        const existing = internalLinkMap.get(resolved) ?? new Set();
        existing.add(pagePath);
        internalLinkMap.set(resolved, existing);
      } else {
        const existing = externalLinkMap.get(resolved) ?? new Set();
        existing.add(pagePath);
        externalLinkMap.set(resolved, existing);
      }
    }

    // Extract images
    for (const src of extractImages(html)) {
      if (shouldSkip(src)) continue;

      const resolved = resolveUrl(src);
      const existing = imageLinkMap.get(resolved) ?? new Set();
      existing.add(pagePath);
      imageLinkMap.set(resolved, existing);
    }
  });

  console.log(
    `\nDiscovered: ${internalLinkMap.size} internal links, ${imageLinkMap.size} images, ${externalLinkMap.size} external links\n`
  );

  // 3. Check internal links
  console.log("Checking internal links...");
  const internalEntries: LinkEntry[] = [...internalLinkMap.entries()].map(
    ([url, sources]) => ({
      url,
      sourcePage: [...sources].join(", "),
    })
  );

  const internalResults = await runConcurrent(
    internalEntries,
    MAX_CONCURRENCY,
    async (entry) => {
      const result = await checkUrl(entry);
      if (typeof result.status === "number" && result.status >= 200 && result.status < 400) {
        // OK
      } else {
        process.stdout.write("x");
      }
      return result;
    }
  );
  console.log("");

  const brokenInternal = internalResults.filter(
    (r) => typeof r.status !== "number" || r.status < 200 || r.status >= 400
  );

  // 4. Check images
  console.log("Checking images...");
  const imageEntries: LinkEntry[] = [...imageLinkMap.entries()].map(
    ([url, sources]) => ({
      url,
      sourcePage: [...sources].join(", "),
    })
  );

  const imageResults = await runConcurrent(
    imageEntries,
    MAX_CONCURRENCY,
    async (entry) => {
      const result = await checkUrl(entry);
      if (typeof result.status === "number" && result.status >= 200 && result.status < 400) {
        // OK
      } else {
        process.stdout.write("x");
      }
      return result;
    }
  );
  console.log("");

  const brokenImages = imageResults.filter(
    (r) => typeof r.status !== "number" || r.status < 200 || r.status >= 400
  );

  // 5. Check external links
  console.log("Checking external links...");
  const externalEntries: LinkEntry[] = [...externalLinkMap.entries()].map(
    ([url, sources]) => ({
      url,
      sourcePage: [...sources].join(", "),
    })
  );

  const externalResults = await runConcurrent(
    externalEntries,
    MAX_CONCURRENCY,
    async (entry) => {
      const result = await checkUrl(entry, EXTERNAL_TIMEOUT_MS);
      if (typeof result.status === "number" && result.status >= 200 && result.status < 400) {
        // OK
      } else {
        process.stdout.write("x");
      }
      return result;
    }
  );
  console.log("");

  const brokenExternal = externalResults.filter(
    (r) => typeof r.status !== "number" || r.status < 200 || r.status >= 400
  );

  // 6. Write reports
  if (!fs.existsSync(AUDIT_DIR)) {
    fs.mkdirSync(AUDIT_DIR, { recursive: true });
  }

  // --- broken-links.md ---
  const allBrokenLinks = [...brokenInternal, ...brokenExternal];

  const brokenLinksLines = [
    "# Broken Links Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    `Base URL: ${BASE_URL}`,
    "",
    `Total broken links found: ${allBrokenLinks.length}`,
    "",
  ];

  if (brokenInternal.length > 0) {
    brokenLinksLines.push("## Broken Internal Links", "");
    brokenLinksLines.push(
      "| URL | Status | Found On |",
      "| --- | ------ | -------- |"
    );
    for (const r of brokenInternal) {
      brokenLinksLines.push(`| ${r.url} | ${r.status} | ${r.sourcePage} |`);
    }
    brokenLinksLines.push("");
  }

  if (brokenExternal.length > 0) {
    brokenLinksLines.push("## Broken External Links", "");
    brokenLinksLines.push(
      "| URL | Status | Found On |",
      "| --- | ------ | -------- |"
    );
    for (const r of brokenExternal) {
      brokenLinksLines.push(`| ${r.url} | ${r.status} | ${r.sourcePage} |`);
    }
    brokenLinksLines.push("");
  }

  if (allBrokenLinks.length === 0) {
    brokenLinksLines.push("No broken links found.");
  }

  const brokenLinksPath = path.join(AUDIT_DIR, "broken-links.md");
  fs.writeFileSync(brokenLinksPath, brokenLinksLines.join("\n"), "utf-8");

  // --- missing-images.md ---
  const missingImagesLines = [
    "# Missing Images Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    `Base URL: ${BASE_URL}`,
    "",
    `Total missing images found: ${brokenImages.length}`,
    "",
  ];

  if (brokenImages.length > 0) {
    missingImagesLines.push(
      "| Image URL | Status | Found On |",
      "| --------- | ------ | -------- |"
    );
    for (const r of brokenImages) {
      missingImagesLines.push(`| ${r.url} | ${r.status} | ${r.sourcePage} |`);
    }
    missingImagesLines.push("");
  } else {
    missingImagesLines.push("No missing images found.");
  }

  const missingImagesPath = path.join(AUDIT_DIR, "missing-images.md");
  fs.writeFileSync(missingImagesPath, missingImagesLines.join("\n"), "utf-8");

  // 7. Summary
  console.log("\n=== Summary ===");
  console.log(`Pages crawled:        ${crawled}`);
  console.log(`Internal links:       ${internalLinkMap.size} checked, ${brokenInternal.length} broken`);
  console.log(`Images:               ${imageLinkMap.size} checked, ${brokenImages.length} broken`);
  console.log(`External links:       ${externalLinkMap.size} checked, ${brokenExternal.length} broken`);
  console.log("");
  console.log(`Reports written to:`);
  console.log(`  ${brokenLinksPath}`);
  console.log(`  ${missingImagesPath}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
