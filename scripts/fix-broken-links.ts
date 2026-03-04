/**
 * Fix broken internal links in MDX content.
 *
 * Fixes:
 * 1. Strips trailing slashes from internal links (trailingSlash: false in next.config)
 * 2. Replaces /how-it-works and /how-it-works/ with /features
 * 3. Fixes old WordPress image paths (strips year/month dirs and size suffixes)
 * 4. Reports remaining unfixable links (external broken URLs)
 *
 * Usage: npx tsx scripts/fix-broken-links.ts
 */

import fs from "fs";
import path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "..");
const GUIDES_DIR = path.join(PROJECT_ROOT, "content", "guides");
const IMAGES_DIR = path.join(PROJECT_ROOT, "public", "images", "guides");
const AUDIT_DIR = path.join(PROJECT_ROOT, "audit");

interface FixStats {
  trailingSlashes: number;
  howItWorks: number;
  imagePaths: number;
  otherFixes: number;
}

/** Strip size suffixes like -768x768, -300x300, -150x150 from filenames */
function stripSizeSuffix(filename: string): string {
  return filename.replace(/-\d+x\d+/, "");
}

/** Strip WordPress edit hashes like -e1711994283773 from filenames */
function stripEditHash(filename: string): string {
  return filename.replace(/-e\d{10,}/, "");
}

/** Strip query params from image URLs */
function stripQueryParams(url: string): string {
  return url.split("?")[0];
}

/** Get set of actual image filenames in public/images/guides/ (lowercased for matching) */
function getExistingImages(): Map<string, string> {
  const map = new Map<string, string>();
  if (!fs.existsSync(IMAGES_DIR)) return map;
  for (const file of fs.readdirSync(IMAGES_DIR)) {
    map.set(file.toLowerCase(), file);
  }
  return map;
}

/** Try to resolve an old WordPress image path to an existing file */
function resolveImagePath(
  oldPath: string,
  existingImages: Map<string, string>
): string | null {
  // Strip year/month dirs: /images/guides/2024/01/foo.png -> foo.png
  const filename = oldPath.replace(/^\/images\/guides\/\d{4}\/\d{2}\//, "");
  if (!filename || filename === oldPath) return null;

  // Try exact match first
  const exact = existingImages.get(filename.toLowerCase());
  if (exact) return `/images/guides/${exact}`;

  // Strip size suffix and try again
  const noSize = stripSizeSuffix(filename);
  const matchNoSize = existingImages.get(noSize.toLowerCase());
  if (matchNoSize) return `/images/guides/${matchNoSize}`;

  // Strip edit hash too
  const noHash = stripEditHash(noSize);
  const matchNoHash = existingImages.get(noHash.toLowerCase());
  if (matchNoHash) return `/images/guides/${matchNoHash}`;

  // Strip query params from all
  const clean = stripQueryParams(noHash);
  const matchClean = existingImages.get(clean.toLowerCase());
  if (matchClean) return `/images/guides/${matchClean}`;

  return null;
}

function fixMdxLinks(content: string, existingImages: Map<string, string>): {
  fixed: string;
  stats: FixStats;
} {
  const stats: FixStats = {
    trailingSlashes: 0,
    howItWorks: 0,
    imagePaths: 0,
    otherFixes: 0,
  };

  // Split frontmatter from body
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return { fixed: content, stats };

  const frontmatter = fmMatch[0];
  let body = content.slice(frontmatter.length);

  // Fix 1: Replace /how-it-works/ and /how-it-works with /features
  const howItWorksPattern = /\(\/how-it-works\/?(\))/g;
  body = body.replace(howItWorksPattern, (match) => {
    stats.howItWorks++;
    return "(/features)";
  });

  // Also fix href="/how-it-works..." patterns (unlikely in MDX but just in case)
  body = body.replace(/href="\/how-it-works\/?"/g, () => {
    stats.howItWorks++;
    return 'href="/features"';
  });

  // Fix 2: Fix old WordPress image paths with year/month dirs
  const wpImagePattern =
    /\/images\/guides\/\d{4}\/\d{2}\/[^)\s"]+/g;
  body = body.replace(wpImagePattern, (match) => {
    const cleanMatch = stripQueryParams(match);
    const resolved = resolveImagePath(cleanMatch, existingImages);
    if (resolved) {
      stats.imagePaths++;
      return resolved;
    }
    return match; // Can't resolve, leave as-is
  });

  // Fix 3: Strip trailing slashes from internal links
  // Match markdown links: [text](/path/) and [text](/path/#anchor)
  const trailingSlashPattern = /\]\((\/((?:guides|product|features|pricing|about-us|press|privacy|travel-agents|travel-groups|destination-wedding-planners|product-updates)[^)]*?))\/(\)?)/g;
  body = body.replace(
    trailingSlashPattern,
    (_match, fullPath, _segment, closeParen) => {
      stats.trailingSlashes++;
      return `](${fullPath}${closeParen}`;
    }
  );

  // Also handle bare trailing slash on root-relative internal links
  // Pattern: ](/some-path/) where path starts with / but isn't an image or external
  body = body.replace(
    /\]\((\/(?!images\/|http)[a-z][a-z0-9-/]*?)\/\)/g,
    (_match, path) => {
      stats.trailingSlashes++;
      return `](${path})`;
    }
  );

  // Fix 4: Fix doubled paths like /guides/slug//guides/slug/
  body = body.replace(
    /\]\((\/guides\/[^)]+?)\/\/guides\/[^)]+\)/g,
    (_match, firstPath) => {
      stats.otherFixes++;
      return `](${firstPath})`;
    }
  );

  // Fix 5: Fix /trips/ links -> /guides (redirect exists but better to fix)
  body = body.replace(/\]\(\/trips\/?\)/g, () => {
    stats.otherFixes++;
    return "](/guides)";
  });

  // Fix 6: Fix http://squadtrip.com links to relative paths
  body = body.replace(
    /\]\(https?:\/\/(?:www\.)?squadtrip\.com(\/guides\/[^)]+)\)/g,
    (_match, path) => {
      stats.otherFixes++;
      // Strip trailing slash from the captured path too
      const cleanPath = path.replace(/\/$/, "");
      return `](${cleanPath})`;
    }
  );

  // Fix 7: Strip trailing slash from product page links with hash fragments
  body = body.replace(
    /\]\((\/product\/[^)]+?)\/#\)/g,
    (_match, path) => {
      stats.trailingSlashes++;
      return `](${path})`;
    }
  );

  return { fixed: frontmatter + body, stats };
}

function main() {
  console.log("=== Fix Broken Links in MDX Content ===\n");

  const existingImages = getExistingImages();
  console.log(
    `Found ${existingImages.size} images in public/images/guides/\n`
  );

  const files = fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith(".mdx"));
  console.log(`Scanning ${files.length} MDX files...\n`);

  const totalStats: FixStats = {
    trailingSlashes: 0,
    howItWorks: 0,
    imagePaths: 0,
    otherFixes: 0,
  };

  let filesModified = 0;
  const modifications: string[] = [];

  for (const file of files) {
    const filePath = path.join(GUIDES_DIR, file);
    const original = fs.readFileSync(filePath, "utf-8");
    const { fixed, stats } = fixMdxLinks(original, existingImages);

    const totalFileChanges =
      stats.trailingSlashes +
      stats.howItWorks +
      stats.imagePaths +
      stats.otherFixes;

    if (totalFileChanges > 0) {
      fs.writeFileSync(filePath, fixed, "utf-8");
      filesModified++;

      const changes: string[] = [];
      if (stats.trailingSlashes)
        changes.push(`${stats.trailingSlashes} trailing slashes`);
      if (stats.howItWorks)
        changes.push(`${stats.howItWorks} how-it-works → features`);
      if (stats.imagePaths)
        changes.push(`${stats.imagePaths} image paths`);
      if (stats.otherFixes) changes.push(`${stats.otherFixes} other fixes`);

      const msg = `  Fixed: ${file} (${changes.join(", ")})`;
      console.log(msg);
      modifications.push(msg);

      totalStats.trailingSlashes += stats.trailingSlashes;
      totalStats.howItWorks += stats.howItWorks;
      totalStats.imagePaths += stats.imagePaths;
      totalStats.otherFixes += stats.otherFixes;
    }
  }

  // Write report
  if (!fs.existsSync(AUDIT_DIR)) {
    fs.mkdirSync(AUDIT_DIR, { recursive: true });
  }

  const reportLines = [
    "# Broken Links Fix Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Summary",
    "",
    `- Files modified: ${filesModified} of ${files.length}`,
    `- Trailing slashes stripped: ${totalStats.trailingSlashes}`,
    `- /how-it-works → /features: ${totalStats.howItWorks}`,
    `- Image paths fixed: ${totalStats.imagePaths}`,
    `- Other fixes: ${totalStats.otherFixes}`,
    `- **Total fixes: ${totalStats.trailingSlashes + totalStats.howItWorks + totalStats.imagePaths + totalStats.otherFixes}**`,
    "",
    "## Files Modified",
    "",
    ...modifications,
    "",
    "## Notes",
    "",
    "External broken links (third-party sites returning 403/404/timeout) were not modified.",
    "These should be manually reviewed and updated or removed.",
    "",
  ];

  const reportPath = path.join(AUDIT_DIR, "fix-broken-links-report.md");
  fs.writeFileSync(reportPath, reportLines.join("\n"), "utf-8");

  console.log("\n=== Summary ===");
  console.log(`Files modified:          ${filesModified} of ${files.length}`);
  console.log(`Trailing slashes fixed:  ${totalStats.trailingSlashes}`);
  console.log(`how-it-works → features: ${totalStats.howItWorks}`);
  console.log(`Image paths fixed:       ${totalStats.imagePaths}`);
  console.log(`Other fixes:             ${totalStats.otherFixes}`);
  console.log(`\nReport: ${reportPath}`);
}

main();
