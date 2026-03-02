/**
 * Extract content from WordPress REST API and convert to MDX files.
 *
 * Usage: npx tsx scripts/extract-wp-content.ts
 *
 * Extracts:
 * - Pages (wp/v2/pages)
 * - Guides (wp/v2/guides - custom post type)
 * - Posts (wp/v2/posts - for press articles)
 *
 * Outputs MDX files to content/guides/ with frontmatter.
 */

import fs from "fs";
import path from "path";
import TurndownService from "turndown";

const WP_API = "https://www.squadtrip.com/wp-json/wp/v2";
const OUTPUT_DIR = path.join(process.cwd(), "content", "guides");
const PAGES_OUTPUT = path.join(process.cwd(), "content", "pages");

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

// Custom rules for better Markdown output
turndown.addRule("removeEmptyParagraphs", {
  filter: (node) =>
    node.nodeName === "P" && node.textContent?.trim() === "",
  replacement: () => "",
});

turndown.addRule("figures", {
  filter: "figure",
  replacement: (_content, node) => {
    const img = (node as HTMLElement).querySelector("img");
    if (!img) return "";
    const src = img.getAttribute("src") || "";
    const alt = img.getAttribute("alt") || "";
    return `\n\n![${alt}](${src})\n\n`;
  },
});

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  yoast_head_json?: {
    description?: string;
    og_image?: Array<{ url: string }>;
    twitter_misc?: Record<string, string>;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

async function fetchAllPaginated(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<WPPost[]> {
  const allItems: WPPost[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const searchParams = new URLSearchParams({
      per_page: "100",
      page: String(page),
      _embed: "wp:featuredmedia",
      ...params,
    });

    const url = `${WP_API}/${endpoint}?${searchParams}`;
    console.log(`Fetching: ${url}`);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 400) {
          // No more pages
          hasMore = false;
          break;
        }
        console.error(`HTTP ${response.status} for ${url}`);
        break;
      }

      const items: WPPost[] = await response.json();
      allItems.push(...items);

      const totalPages = parseInt(
        response.headers.get("x-wp-totalpages") || "1"
      );
      hasMore = page < totalPages;
      page++;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      break;
    }
  }

  return allItems;
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/<[^>]+>/g, "");
}

function htmlToMarkdown(html: string): string {
  // Clean up WordPress-specific HTML
  let cleaned = html
    // Remove Elementor wrappers
    .replace(
      /<div[^>]*class="[^"]*elementor[^"]*"[^>]*>/gi,
      ""
    )
    .replace(/<\/div>/gi, "")
    // Remove empty paragraphs
    .replace(/<p>\s*<\/p>/gi, "")
    // Remove WordPress block comments
    .replace(/<!--\s*\/?wp:[^>]+-->/g, "");

  return turndown.turndown(cleaned).trim();
}

function inferCategory(slug: string, title: string): string {
  const lower = `${slug} ${title}`.toLowerCase();
  if (lower.includes("wedding") || lower.includes("bridal"))
    return "weddings";
  if (lower.includes("retreat") || lower.includes("wellness"))
    return "retreats";
  if (lower.includes("agency") || lower.includes("travel agent"))
    return "travel-agency";
  if (lower.includes("tour") || lower.includes("operator"))
    return "tours";
  if (lower.includes("bachelor") || lower.includes("bachelorette"))
    return "group-travel";
  if (lower.includes("alternative") || lower.includes("vs") || lower.includes("software") || lower.includes("tool"))
    return "tools";
  return "group-travel";
}

function postToMdx(post: WPPost): string {
  const title = decodeHtmlEntities(post.title.rendered);
  const description =
    post.yoast_head_json?.description ||
    decodeHtmlEntities(post.excerpt.rendered).slice(0, 160);
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
  const category = inferCategory(post.slug, title);
  const content = htmlToMarkdown(post.content.rendered);

  // Calculate reading time (~200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const frontmatter = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    `slug: "${post.slug}"`,
    `description: "${description.replace(/"/g, '\\"').replace(/\n/g, " ")}"`,
    `date: "${post.date.split("T")[0]}"`,
    `lastModified: "${post.modified.split("T")[0]}"`,
    featuredImage
      ? `featuredImage: "/images/guides/${post.slug}.webp"`
      : `featuredImage: ""`,
    `category: "${category}"`,
    `author: "SquadTrip"`,
    `readingTime: ${readingTime}`,
    "---",
  ].join("\n");

  return `${frontmatter}\n\n${content}\n`;
}

async function extractGuides() {
  console.log("\n=== Extracting Guides ===\n");

  // Try custom post type first, fall back to posts with category
  let guides = await fetchAllPaginated("guides");

  if (guides.length === 0) {
    console.log("No 'guides' CPT found, trying posts...");
    guides = await fetchAllPaginated("posts");
  }

  console.log(`Found ${guides.length} guides`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const guide of guides) {
    const mdxContent = postToMdx(guide);
    const filePath = path.join(OUTPUT_DIR, `${guide.slug}.mdx`);
    fs.writeFileSync(filePath, mdxContent, "utf-8");
    console.log(`  Written: ${guide.slug}.mdx`);
  }

  return guides;
}

async function extractPages() {
  console.log("\n=== Extracting Pages ===\n");

  const pages = await fetchAllPaginated("pages");
  console.log(`Found ${pages.length} pages`);

  fs.mkdirSync(PAGES_OUTPUT, { recursive: true });

  for (const page of pages) {
    const title = decodeHtmlEntities(page.title.rendered);
    const content = htmlToMarkdown(page.content.rendered);
    const filePath = path.join(PAGES_OUTPUT, `${page.slug}.md`);
    fs.writeFileSync(
      filePath,
      `# ${title}\n\nSlug: ${page.slug}\n\n${content}\n`,
      "utf-8"
    );
    console.log(`  Written: ${page.slug}.md`);
  }

  return pages;
}

async function main() {
  console.log("SquadTrip WordPress Content Extraction");
  console.log("======================================\n");

  const guides = await extractGuides();
  const pages = await extractPages();

  console.log("\n=== Summary ===");
  console.log(`Guides extracted: ${guides.length}`);
  console.log(`Pages extracted: ${pages.length}`);
  console.log(`\nOutput directories:`);
  console.log(`  Guides: ${OUTPUT_DIR}`);
  console.log(`  Pages: ${PAGES_OUTPUT}`);
}

main().catch(console.error);
