/**
 * Fix MDX content that contains characters/patterns that break MDX compilation.
 *
 * Issues:
 * 1. Curly braces {} are interpreted as JSX expressions
 * 2. Raw HTML with angle brackets can cause issues
 * 3. JSON-LD blocks embedded in content
 * 4. Inline CSS/style blocks
 *
 * Usage: npx tsx scripts/fix-mdx-content.ts
 */

import fs from "fs";
import path from "path";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

function fixMdxContent(content: string): string {
  // Split frontmatter from body
  const parts = content.split("---");
  if (parts.length < 3) return content;

  const frontmatter = parts.slice(0, 2).join("---") + "---";
  let body = parts.slice(2).join("---");

  // Remove JSON-LD blocks (they contain tons of curly braces)
  body = body.replace(/\{"@context".*?\}\]?\}/gs, "");

  // Remove raw HTML style blocks
  body = body.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");

  // Remove inline style attributes that break MDX
  body = body.replace(/\s*style="[^"]*"/gi, "");

  // Remove raw HTML script tags
  body = body.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");

  // Escape remaining curly braces in body text (not in code blocks)
  // Process line by line, skipping code blocks
  let inCodeBlock = false;
  const lines = body.split("\n");
  const fixedLines = lines.map((line) => {
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      return line;
    }
    if (inCodeBlock) return line;

    // Replace ALL curly braces - our content has no MDX components
    return line
      .replace(/\{/g, "&#123;")
      .replace(/\}/g, "&#125;");
  });

  body = fixedLines.join("\n");

  // Remove HTML comments (WordPress block comments)
  body = body.replace(/<!--[\s\S]*?-->/g, "");

  // Remove empty links
  body = body.replace(/\[([^\]]*)\]\(\s*\)/g, "$1");

  // Fix broken image references with WordPress URLs
  body = body.replace(
    /!\[([^\]]*)\]\(https?:\/\/squadtrip\.com\/wp-content\/uploads\/([^)]+)\)/g,
    "![$1](/images/guides/$2)"
  );

  // Remove orphaned HTML tags that MDX can't handle
  body = body.replace(/<br\s*\/?>/gi, "\n");
  body = body.replace(/<\/?p>/gi, "\n");
  body = body.replace(/<\/?span[^>]*>/gi, "");
  body = body.replace(/<\/?div[^>]*>/gi, "");

  // Clean up excessive blank lines
  body = body.replace(/\n{4,}/g, "\n\n\n");

  return `${frontmatter}\n${body}`;
}

function main() {
  console.log("Fixing MDX content...\n");

  const files = fs.readdirSync(GUIDES_DIR).filter((f) => f.endsWith(".mdx"));
  let fixed = 0;

  for (const file of files) {
    const filePath = path.join(GUIDES_DIR, file);
    const original = fs.readFileSync(filePath, "utf-8");
    const fixedContent = fixMdxContent(original);

    if (fixedContent !== original) {
      fs.writeFileSync(filePath, fixedContent, "utf-8");
      console.log(`  Fixed: ${file}`);
      fixed++;
    }
  }

  console.log(`\nDone. Fixed ${fixed} of ${files.length} files.`);
}

main();
