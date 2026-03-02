/**
 * Download all media from WordPress and organize into public/images/
 *
 * Usage: npx tsx scripts/download-wp-images.ts
 */

import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { Readable } from "stream";

const WP_API = "https://www.squadtrip.com/wp-json/wp/v2";
const OUTPUT_BASE = path.join(process.cwd(), "public", "images");

interface WPMedia {
  id: number;
  slug: string;
  source_url: string;
  mime_type: string;
  alt_text: string;
  media_details?: {
    width: number;
    height: number;
    file: string;
  };
}

async function fetchAllMedia(): Promise<WPMedia[]> {
  const allMedia: WPMedia[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const url = `${WP_API}/media?per_page=100&page=${page}`;
    console.log(`Fetching media page ${page}...`);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        hasMore = false;
        break;
      }

      const items: WPMedia[] = await response.json();
      allMedia.push(...items);

      const totalPages = parseInt(
        response.headers.get("x-wp-totalpages") || "1"
      );
      hasMore = page < totalPages;
      page++;
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
      break;
    }
  }

  return allMedia;
}

function categorizeImage(media: WPMedia): string {
  const filePath = media.media_details?.file || media.source_url;
  const lower = filePath.toLowerCase();

  if (lower.includes("guide") || lower.includes("blog") || lower.includes("article"))
    return "guides";
  if (lower.includes("product") || lower.includes("screenshot") || lower.includes("dashboard"))
    return "product";
  if (lower.includes("logo") || lower.includes("brand"))
    return "logos";
  if (lower.includes("hero") || lower.includes("banner") || lower.includes("home"))
    return "homepage";

  return "guides"; // Default to guides since most content is guides
}

function getExtension(url: string, mimeType: string): string {
  // Try to get extension from URL
  const urlExt = path.extname(new URL(url).pathname).toLowerCase();
  if ([".webp", ".png", ".jpg", ".jpeg", ".gif", ".svg"].includes(urlExt)) {
    return urlExt;
  }

  // Fall back to mime type
  const mimeMap: Record<string, string> = {
    "image/webp": ".webp",
    "image/png": ".png",
    "image/jpeg": ".jpg",
    "image/gif": ".gif",
    "image/svg+xml": ".svg",
  };

  return mimeMap[mimeType] || ".jpg";
}

async function downloadImage(
  url: string,
  outputPath: string
): Promise<boolean> {
  try {
    const response = await fetch(url);
    if (!response.ok || !response.body) return false;

    const dir = path.dirname(outputPath);
    fs.mkdirSync(dir, { recursive: true });

    const nodeStream = Readable.fromWeb(
      response.body as import("stream/web").ReadableStream
    );
    const fileStream = fs.createWriteStream(outputPath);
    await pipeline(nodeStream, fileStream);

    return true;
  } catch (error) {
    console.error(`  Failed to download ${url}:`, error);
    return false;
  }
}

async function main() {
  console.log("SquadTrip WordPress Image Download");
  console.log("===================================\n");

  const media = await fetchAllMedia();
  console.log(`Found ${media.length} media items\n`);

  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  for (const item of media) {
    // Only download images
    if (!item.mime_type.startsWith("image/")) {
      skipped++;
      continue;
    }

    const category = categorizeImage(item);
    const ext = getExtension(item.source_url, item.mime_type);
    const filename = `${item.slug}${ext}`;
    const outputPath = path.join(OUTPUT_BASE, category, filename);

    // Skip if already downloaded
    if (fs.existsSync(outputPath)) {
      console.log(`  Skipped (exists): ${category}/${filename}`);
      skipped++;
      continue;
    }

    console.log(`  Downloading: ${category}/${filename}`);
    const success = await downloadImage(item.source_url, outputPath);

    if (success) {
      downloaded++;
    } else {
      failed++;
    }

    // Tiny delay to be polite to the server
    await new Promise((r) => setTimeout(r, 50));
  }

  console.log("\n=== Summary ===");
  console.log(`Downloaded: ${downloaded}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total: ${media.length}`);
}

main().catch(console.error);
