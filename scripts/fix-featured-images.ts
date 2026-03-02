/**
 * Fix featured images in MDX frontmatter by fetching actual URLs from WordPress API.
 * Updates each guide's featuredImage to the real WordPress CDN URL.
 *
 * Usage: npx tsx scripts/fix-featured-images.ts
 */

import fs from "fs";
import path from "path";

const WP_API = "https://www.squadtrip.com/wp-json/wp/v2";
const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

interface WPGuide {
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

async function fetchAllGuides(): Promise<WPGuide[]> {
  const all: WPGuide[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const url = `${WP_API}/guides?per_page=100&page=${page}&_embed=wp:featuredmedia`;
    console.log(`Fetching page ${page}...`);

    try {
      const response = await fetch(url);
      if (!response.ok) break;

      const items: WPGuide[] = await response.json();
      all.push(...items);

      const totalPages = parseInt(response.headers.get("x-wp-totalpages") || "1");
      hasMore = page < totalPages;
      page++;
    } catch (error) {
      console.error(`Error on page ${page}:`, error);
      break;
    }
  }

  return all;
}

function main_sync(slugToImage: Map<string, string>) {
  const files = fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith(".mdx"));
  let updated = 0;

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const imageUrl = slugToImage.get(slug);

    if (!imageUrl) continue;

    const filePath = path.join(GUIDES_DIR, file);
    let content = fs.readFileSync(filePath, "utf-8");

    // Replace the featuredImage line in frontmatter
    const oldPattern = /featuredImage: "[^"]*"/;
    if (oldPattern.test(content)) {
      content = content.replace(oldPattern, `featuredImage: "${imageUrl}"`);
      fs.writeFileSync(filePath, content, "utf-8");
      updated++;
    }
  }

  return updated;
}

async function main() {
  console.log("Fixing featured images in MDX frontmatter...\n");

  const guides = await fetchAllGuides();
  console.log(`Fetched ${guides.length} guides from WordPress API\n`);

  // Build slug -> image URL map
  const slugToImage = new Map<string, string>();
  for (const guide of guides) {
    const imageUrl = guide._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    if (imageUrl) {
      slugToImage.set(guide.slug, imageUrl);
    }
  }

  console.log(`Found ${slugToImage.size} guides with featured images\n`);

  const updated = main_sync(slugToImage);
  console.log(`\nUpdated ${updated} MDX files with real image URLs.`);
}

main().catch(console.error);
