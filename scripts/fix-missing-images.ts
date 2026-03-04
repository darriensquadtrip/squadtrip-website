/**
 * Fix missing guide featured images.
 *
 * 1. Scans all MDX frontmatter `featuredImage` fields
 * 2. Checks which files are missing from public/images/guides/
 * 3. Attempts to download from WordPress CDN (tries multiple year/month paths)
 * 4. For any that can't be found, generates a branded placeholder SVG
 *    and updates the MDX frontmatter to reference it
 * 5. Reports results
 *
 * Usage: npx tsx scripts/fix-missing-images.ts
 */

import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { Readable } from "stream";

const PROJECT_ROOT = path.resolve(__dirname, "..");
const GUIDES_DIR = path.join(PROJECT_ROOT, "content", "guides");
const IMAGES_DIR = path.join(PROJECT_ROOT, "public", "images", "guides");
const AUDIT_DIR = path.join(PROJECT_ROOT, "audit");

const WP_CDN_BASE = "https://squadtrip.com/wp-content/uploads";

// Year/month combinations to try (most likely upload periods)
const YEAR_MONTHS = [
  "2025/03", "2025/02", "2025/01",
  "2024/12", "2024/11", "2024/10", "2024/09", "2024/08",
  "2024/07", "2024/06", "2024/05", "2024/04", "2024/03",
  "2024/02", "2024/01",
  "2023/12", "2023/11", "2023/10", "2023/09", "2023/08",
  "2023/07", "2023/06", "2023/05", "2023/04", "2023/03",
  "2023/02", "2023/01",
];

interface GuideInfo {
  slug: string;
  title: string;
  featuredImage: string;
  filename: string;
  mdxPath: string;
}

/** Extract title and featuredImage from MDX frontmatter */
function parseFrontmatter(content: string): { title: string; featuredImage: string } | null {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const fm = match[1];
  const titleMatch = fm.match(/title:\s*"([^"]*)"/);
  const imageMatch = fm.match(/featuredImage:\s*"([^"]*)"/);

  if (!titleMatch || !imageMatch) return null;

  return {
    title: titleMatch[1],
    featuredImage: imageMatch[1],
  };
}

/** Find all guides with missing featured images */
function findMissingImages(): GuideInfo[] {
  const missing: GuideInfo[] = [];

  const files = fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith(".mdx"));

  for (const file of files) {
    const filePath = path.join(GUIDES_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const fm = parseFrontmatter(content);

    if (!fm || !fm.featuredImage) continue;

    // Extract filename from path
    const filename = path.basename(fm.featuredImage);
    const imagePath = path.join(IMAGES_DIR, filename);

    if (!fs.existsSync(imagePath)) {
      missing.push({
        slug: file.replace(/\.mdx$/, ""),
        title: fm.title,
        featuredImage: fm.featuredImage,
        filename,
        mdxPath: filePath,
      });
    }
  }

  return missing;
}

/** Try to download an image from WordPress CDN */
async function downloadFromWordPress(filename: string): Promise<boolean> {
  const outputPath = path.join(IMAGES_DIR, filename);

  for (const ym of YEAR_MONTHS) {
    const url = `${WP_CDN_BASE}/${ym}/${filename}`;

    try {
      const response = await fetch(url, { redirect: "follow" });

      if (response.ok && response.body) {
        const contentType = response.headers.get("content-type") || "";
        if (!contentType.startsWith("image/")) {
          await response.text().catch(() => {});
          continue;
        }

        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        const nodeStream = Readable.fromWeb(
          response.body as import("stream/web").ReadableStream
        );
        const fileStream = fs.createWriteStream(outputPath);
        await pipeline(nodeStream, fileStream);

        console.log(`    Downloaded from ${ym}/${filename}`);
        return true;
      }

      await response.text().catch(() => {});
    } catch {
      // Network error, try next year/month
    }
  }

  return false;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Generate a branded placeholder SVG and update MDX frontmatter */
function generatePlaceholderAndUpdateMdx(guide: GuideInfo): void {
  // Create SVG filename from slug
  const svgFilename = `placeholder-${guide.slug}.svg`;
  const svgPath = path.join(IMAGES_DIR, svgFilename);
  const newImageRef = `/images/guides/${svgFilename}`;

  // Wrap title text
  const maxCharsPerLine = 32;
  const words = guide.title.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    if ((currentLine + " " + word).trim().length > maxCharsPerLine) {
      if (currentLine) lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine = currentLine ? currentLine + " " + word : word;
    }
  }
  if (currentLine) lines.push(currentLine.trim());

  const displayLines = lines.slice(0, 4);
  if (lines.length > 4) {
    displayLines[3] = displayLines[3] + "...";
  }

  const lineHeight = 30;
  const startY = 210 - (displayLines.length * lineHeight) / 2;

  const titleSvg = displayLines
    .map(
      (line, i) =>
        `    <text x="400" y="${startY + i * lineHeight}" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="600" fill="#1a1a1a">${escapeXml(line)}</text>`
    )
    .join("\n");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f0f4ff"/>
      <stop offset="100%" stop-color="#e8eeff"/>
    </linearGradient>
  </defs>
  <rect width="800" height="400" fill="url(#bg)"/>
  <rect x="0" y="0" width="800" height="4" fill="#6C5CE7"/>
${titleSvg}
  <text x="400" y="${startY + displayLines.length * lineHeight + 24}" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#6C5CE7" font-weight="500">squadtrip.com</text>
</svg>`;

  fs.writeFileSync(svgPath, svg, "utf-8");

  // Update MDX frontmatter to reference the SVG
  const mdxContent = fs.readFileSync(guide.mdxPath, "utf-8");
  const updatedContent = mdxContent.replace(
    `featuredImage: "${guide.featuredImage}"`,
    `featuredImage: "${newImageRef}"`
  );
  fs.writeFileSync(guide.mdxPath, updatedContent, "utf-8");
}

async function main() {
  console.log("=== Fix Missing Guide Featured Images ===\n");

  // Clean up any previously generated bad placeholders (SVG content in non-SVG files)
  const badPlaceholders = [
    "Are-Cooking-Retreats-Worth-the-Price-A-Breakdown-of-Costs-and-Benefits.png",
    "Best-App-for-Wellness-Retreats.jpg",
    "Best-Health-and-Wellness-Retreats.webp",
    "Best-Manifestation-Retreats.webp",
    "Best-New-Years-Eve-Retreats.webp",
    "Best-Self-Improvement-Retreats-1.webp",
    "Escape-to-Arizona-A-Flagstaff-Retreats-Planning-Guide.webp",
    "task_01kev2p2q5e53b1hbmmmh15nxt_1768287865_img_1-1.webp",
    "How-Coaches-Can-Design-Unforgettable-Wellness-Retreats.webp",
    "How-to-Choose-a-Culinary-Retreat-That-Matches-Your-Skill-Level-and-Budget.png",
    "How-to-Choose-the-Right-Retreat-Venue-for-Your-Next-Event.webp",
    "The-Wandering-Compass-Your-Groups-Guide-to-Navigating-Travel-Decisions-Together.png",
    "How-to-Optimize-Your-Operations-with-Retreat-Management-Software.webp",
    "How-to-Prepare-for-a-Reiki-Retreat.webp",
    "F385F102-6704-4923-A137-C553751B9B73-1.jpg",
    "Luxury-Wellness-Retreat-Themes-for-Hosts-and-Guides.webp",
    "Retreat-Booking-Sites.webp",
    "Retreat-Planning-Templates-1.webp",
    "Tips-for-Tour-Guides.webp",
    "Top-Photography-Retreats.webp",
    "Tour-Planning.webp",
    "TravelJoy-Payment-Issues.webp",
  ];

  for (const bad of badPlaceholders) {
    const badPath = path.join(IMAGES_DIR, bad);
    if (fs.existsSync(badPath)) {
      // Check if it's SVG content in a non-SVG file
      const content = fs.readFileSync(badPath, "utf-8");
      if (content.startsWith("<svg")) {
        fs.unlinkSync(badPath);
        console.log(`  Cleaned up bad placeholder: ${bad}`);
      }
    }
  }

  const missing = findMissingImages();
  console.log(`\nFound ${missing.length} guides with missing featured images:\n`);

  for (const guide of missing) {
    console.log(`  - ${guide.filename} (${guide.slug})`);
  }

  if (missing.length === 0) {
    console.log("No missing images found!");
    return;
  }

  console.log("\n--- Attempting downloads from WordPress CDN ---\n");

  let downloaded = 0;
  let placeholders = 0;
  const results: Array<{ filename: string; title: string; status: string }> = [];

  for (const guide of missing) {
    console.log(`  Processing: ${guide.filename}`);

    const success = await downloadFromWordPress(guide.filename);

    if (success) {
      downloaded++;
      results.push({ filename: guide.filename, title: guide.title, status: "downloaded" });
    } else {
      console.log(`    Not found on WordPress CDN, generating placeholder SVG...`);
      generatePlaceholderAndUpdateMdx(guide);
      placeholders++;
      results.push({
        filename: `placeholder-${guide.slug}.svg`,
        title: guide.title,
        status: "placeholder (MDX updated)",
      });
    }

    // Be polite to the server
    await new Promise((r) => setTimeout(r, 100));
  }

  // Write report
  if (!fs.existsSync(AUDIT_DIR)) {
    fs.mkdirSync(AUDIT_DIR, { recursive: true });
  }

  const reportLines = [
    "# Missing Images Fix Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Summary",
    "",
    `- Total missing: ${missing.length}`,
    `- Downloaded from WordPress: ${downloaded}`,
    `- Placeholder generated: ${placeholders}`,
    "",
    "## Details",
    "",
    "| Filename | Guide Title | Status |",
    "| -------- | ----------- | ------ |",
    ...results.map((r) => `| ${r.filename} | ${r.title} | ${r.status} |`),
    "",
    "## Notes",
    "",
    "Placeholder SVGs are branded with the guide title and SquadTrip branding.",
    "For production, consider replacing them with real featured images.",
    "",
  ];

  const reportPath = path.join(AUDIT_DIR, "fix-missing-images-report.md");
  fs.writeFileSync(reportPath, reportLines.join("\n"), "utf-8");

  console.log("\n=== Summary ===");
  console.log(`Total missing:     ${missing.length}`);
  console.log(`Downloaded:        ${downloaded}`);
  console.log(`Placeholders:      ${placeholders}`);
  console.log(`\nReport: ${reportPath}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
