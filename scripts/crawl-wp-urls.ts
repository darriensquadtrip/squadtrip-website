/**
 * Crawl WordPress sitemaps and audit every URL against known Vercel routes.
 *
 * Usage:  npx tsx scripts/crawl-wp-urls.ts
 *
 * Outputs:
 *   audit/redirect-map.json       — full WP URL -> Vercel URL mapping
 *   audit/missing-routes.json     — WP URLs with no Vercel equivalent
 *   audit/redirects-vercel.json   — ready-to-merge vercel.json redirects array
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");
const GUIDES_DIR = path.join(PROJECT_ROOT, "content", "guides");
const AUDIT_DIR = path.join(PROJECT_ROOT, "audit");

// ---------------------------------------------------------------------------
// Known static Vercel routes (no dynamic segment)
// ---------------------------------------------------------------------------

const STATIC_ROUTES = new Set([
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
  "/best-wetravel-alternative",
  "/grouptrip",
  "/product/checkout-experience",
  "/product/payment-collection",
  "/product/messaging",
  "/product/e-sign-docs",
  "/product/registration",
  "/product/trip-pages",
  "/product/affiliate-tracking",
]);

// ---------------------------------------------------------------------------
// Known product slugs (for matching WP product pages)
// ---------------------------------------------------------------------------

const PRODUCT_SLUGS = new Set([
  "checkout-experience",
  "payment-collection",
  "messaging",
  "e-sign-docs",
  "registration",
  "trip-pages",
  "affiliate-tracking",
]);

// ---------------------------------------------------------------------------
// Build the set of guide slugs from content/guides/*.mdx
// ---------------------------------------------------------------------------

function loadGuideSlugs(): Set<string> {
  const slugs = new Set<string>();
  if (!fs.existsSync(GUIDES_DIR)) {
    console.warn("  [warn] content/guides/ directory not found – guide matching will be empty");
    return slugs;
  }
  const files = fs.readdirSync(GUIDES_DIR);
  for (const file of files) {
    if (file.endsWith(".mdx")) {
      slugs.add(file.replace(/\.mdx$/, ""));
    }
  }
  console.log(`  Loaded ${slugs.size} guide slugs from content/guides/`);
  return slugs;
}

// ---------------------------------------------------------------------------
// URL helpers
// ---------------------------------------------------------------------------

/** Normalise a URL path: lowercase, strip trailing slash, collapse doubles. */
function normalisePath(raw: string): string {
  let p = raw.trim().toLowerCase();
  // Remove trailing slash (but keep "/" itself)
  if (p.length > 1 && p.endsWith("/")) {
    p = p.slice(0, -1);
  }
  // Collapse double slashes
  p = p.replace(/\/\/+/g, "/");
  return p;
}

/** Extract the pathname from a full URL string. */
function toPathname(url: string): string {
  try {
    const u = new URL(url);
    return normalisePath(u.pathname);
  } catch {
    // Already a pathname
    return normalisePath(url);
  }
}

// ---------------------------------------------------------------------------
// Sitemap fetching & XML parsing (regex-based, no external deps)
// ---------------------------------------------------------------------------

async function fetchText(url: string): Promise<string> {
  console.log(`  Fetching: ${url}`);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  return res.text();
}

/** Extract <loc>…</loc> values from an XML string. */
function extractLocs(xml: string): string[] {
  const locs: string[] = [];
  const re = /<loc>\s*(.*?)\s*<\/loc>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    locs.push(m[1].trim());
  }
  return locs;
}

/** Return true when the XML looks like a sitemap index (contains <sitemapindex>). */
function isSitemapIndex(xml: string): boolean {
  return /<sitemapindex[\s>]/i.test(xml);
}

/**
 * Recursively fetch the root sitemap and all child sitemaps.
 * Returns every <loc> that is NOT itself a sitemap.
 */
async function crawlSitemaps(rootUrl: string): Promise<string[]> {
  const allUrls: string[] = [];

  const xml = await fetchText(rootUrl);
  const locs = extractLocs(xml);

  if (isSitemapIndex(xml)) {
    console.log(`  Sitemap index with ${locs.length} child sitemaps`);
    for (const childUrl of locs) {
      try {
        const childXml = await fetchText(childUrl);
        const childLocs = extractLocs(childXml);
        // A child could theoretically also be an index, but typically isn't.
        if (isSitemapIndex(childXml)) {
          console.log(`  Nested sitemap index: ${childUrl} (${childLocs.length} entries)`);
          for (const grandchildUrl of childLocs) {
            try {
              const gcXml = await fetchText(grandchildUrl);
              allUrls.push(...extractLocs(gcXml));
            } catch (err) {
              console.warn(`  [warn] Failed to fetch grandchild sitemap: ${grandchildUrl}`, err);
            }
          }
        } else {
          console.log(`  Child sitemap: ${childUrl} -> ${childLocs.length} URLs`);
          allUrls.push(...childLocs);
        }
      } catch (err) {
        console.warn(`  [warn] Failed to fetch child sitemap: ${childUrl}`, err);
      }
    }
  } else {
    // Single flat sitemap
    console.log(`  Flat sitemap with ${locs.length} URLs`);
    allUrls.push(...locs);
  }

  return allUrls;
}

// ---------------------------------------------------------------------------
// Route matching logic
// ---------------------------------------------------------------------------

interface MatchResult {
  wpUrl: string;
  wpPath: string;
  vercelUrl: string | null;
  reason: string;
}

function matchRoute(
  wpUrl: string,
  guideSlugs: Set<string>
): MatchResult {
  const wpPath = toPathname(wpUrl);

  const result: MatchResult = {
    wpUrl,
    wpPath,
    vercelUrl: null,
    reason: "no-match",
  };

  // 1. Exact static route match
  if (STATIC_ROUTES.has(wpPath)) {
    result.vercelUrl = wpPath;
    result.reason = "exact-match";
    return result;
  }

  // 2. Guide pages: /guides/<slug>
  const guideMatch = wpPath.match(/^\/guides\/([^/]+)$/);
  if (guideMatch) {
    const slug = guideMatch[1];
    if (guideSlugs.has(slug)) {
      result.vercelUrl = `/guides/${slug}`;
      result.reason = "guide-match";
    } else {
      result.vercelUrl = "/guides";
      result.reason = "guide-slug-missing-fallback-to-index";
    }
    return result;
  }

  // 3. Product pages: /product/<slug>
  const productMatch = wpPath.match(/^\/product\/([^/]+)$/);
  if (productMatch) {
    const slug = productMatch[1];
    if (PRODUCT_SLUGS.has(slug)) {
      result.vercelUrl = `/product/${slug}`;
      result.reason = "product-match";
    } else {
      result.vercelUrl = "/features";
      result.reason = "product-slug-unknown-fallback-to-features";
    }
    return result;
  }

  // 4. Date-based WP posts: /YYYY/MM/DD/slug -> /press/slug (already have wildcard redirect)
  const dateMatch = wpPath.match(/^\/(\d{4})\/(\d{2})\/(\d{2})\/(.+)$/);
  if (dateMatch) {
    const slug = dateMatch[4];
    result.vercelUrl = `/press/${slug}`;
    result.reason = "date-post-to-press";
    return result;
  }

  // 5. /wp-content/* -> /images/* (already handled by vercel.json)
  if (wpPath.startsWith("/wp-content/")) {
    result.vercelUrl = wpPath.replace(/^\/wp-content/, "/images");
    result.reason = "wp-content-to-images";
    return result;
  }

  // 6. WP admin / login / xmlrpc -> homepage (already handled)
  if (
    wpPath.startsWith("/wp-admin") ||
    wpPath === "/wp-login.php" ||
    wpPath === "/xmlrpc.php"
  ) {
    result.vercelUrl = "/";
    result.reason = "wp-admin-to-homepage";
    return result;
  }

  // 7. Spanish locale pages -> homepage (already handled by wildcard)
  if (wpPath.startsWith("/es/") || wpPath === "/es") {
    result.vercelUrl = "/";
    result.reason = "es-locale-to-homepage";
    return result;
  }

  // 8. Common WP artifacts -> homepage
  if (
    wpPath.startsWith("/wp-json") ||
    wpPath.startsWith("/wp-includes") ||
    wpPath.startsWith("/wp-") ||
    wpPath === "/feed" ||
    wpPath.startsWith("/feed/") ||
    wpPath === "/comments/feed" ||
    wpPath.startsWith("/author/") ||
    wpPath.startsWith("/tag/") ||
    wpPath.startsWith("/category/")
  ) {
    result.vercelUrl = "/";
    result.reason = "wp-artifact-to-homepage";
    return result;
  }

  // 9. Pagination pages like /page/2 -> index of parent
  const pageMatch = wpPath.match(/^(.*)\/page\/\d+$/);
  if (pageMatch) {
    const parent = pageMatch[1] || "/";
    if (STATIC_ROUTES.has(parent)) {
      result.vercelUrl = parent;
      result.reason = "pagination-to-parent";
      return result;
    }
  }

  // 10. Check if the slug (last segment) matches a guide
  const segments = wpPath.split("/").filter(Boolean);
  if (segments.length >= 1) {
    const lastSlug = segments[segments.length - 1];
    if (guideSlugs.has(lastSlug)) {
      result.vercelUrl = `/guides/${lastSlug}`;
      result.reason = "slug-matched-guide";
      return result;
    }
  }

  // 11. Known landing / one-off pages that WP might have
  const landingPageMap: Record<string, string> = {
    "/elementor-26525": "/",
    "/home-jan-24": "/",
    "/home2025": "/",
    "/lp-100k-group-travel-playbook": "/",
    "/lp-saas-focused": "/",
    "/sample-page": "/",
  };
  if (landingPageMap[wpPath]) {
    result.vercelUrl = landingPageMap[wpPath];
    result.reason = "landing-page-redirect";
    return result;
  }

  // No match
  return result;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("=== WordPress Sitemap Crawler & Route Auditor ===\n");

  // 1. Load guide slugs
  console.log("[1/4] Loading guide slugs...");
  const guideSlugs = loadGuideSlugs();

  // 2. Crawl sitemaps
  console.log("\n[2/4] Crawling WordPress sitemaps...");
  const SITEMAP_URL = "https://squadtrip.com/sitemap.xml";
  let allWpUrls: string[];
  try {
    allWpUrls = await crawlSitemaps(SITEMAP_URL);
  } catch (err) {
    console.error("Failed to fetch root sitemap:", err);
    process.exit(1);
  }

  // De-duplicate and normalise
  const seen = new Set<string>();
  const uniqueUrls: string[] = [];
  for (const rawUrl of allWpUrls) {
    const p = toPathname(rawUrl);
    if (!seen.has(p)) {
      seen.add(p);
      uniqueUrls.push(rawUrl);
    }
  }
  console.log(`\n  Total URLs from sitemaps: ${allWpUrls.length}`);
  console.log(`  Unique paths: ${uniqueUrls.length}`);

  // 3. Match each URL
  console.log("\n[3/4] Matching WP URLs to Vercel routes...");
  const redirectMap: Record<string, string> = {};
  const missingRoutes: string[] = [];
  const vercelRedirects: Array<{
    source: string;
    destination: string;
    permanent: boolean;
  }> = [];

  let matchCount = 0;
  let missCount = 0;

  for (const wpUrl of uniqueUrls) {
    const result = matchRoute(wpUrl, guideSlugs);

    if (result.vercelUrl) {
      redirectMap[result.wpPath] = result.vercelUrl;
      matchCount++;

      // Only produce a vercel redirect entry when source !== destination
      // (identical paths are served natively, no redirect needed)
      if (result.wpPath !== result.vercelUrl) {
        vercelRedirects.push({
          source: result.wpPath,
          destination: result.vercelUrl,
          permanent: true,
        });
      }
    } else {
      missingRoutes.push(result.wpPath);
      missCount++;
    }
  }

  console.log(`  Matched: ${matchCount}`);
  console.log(`  Missing: ${missCount}`);

  // 4. Write output files
  console.log("\n[4/4] Writing audit files...");
  if (!fs.existsSync(AUDIT_DIR)) {
    fs.mkdirSync(AUDIT_DIR, { recursive: true });
  }

  const redirectMapPath = path.join(AUDIT_DIR, "redirect-map.json");
  fs.writeFileSync(redirectMapPath, JSON.stringify(redirectMap, null, 2), "utf-8");
  console.log(`  -> ${redirectMapPath}  (${Object.keys(redirectMap).length} entries)`);

  const missingPath = path.join(AUDIT_DIR, "missing-routes.json");
  fs.writeFileSync(missingPath, JSON.stringify(missingRoutes, null, 2), "utf-8");
  console.log(`  -> ${missingPath}  (${missingRoutes.length} entries)`);

  const vercelPath = path.join(AUDIT_DIR, "redirects-vercel.json");
  fs.writeFileSync(vercelPath, JSON.stringify(vercelRedirects, null, 2), "utf-8");
  console.log(`  -> ${vercelPath}  (${vercelRedirects.length} entries)`);

  console.log("\nDone!");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
