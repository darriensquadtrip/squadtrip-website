/**
 * Generate redirect map from old WordPress URLs to new Next.js URLs.
 *
 * Usage: npx tsx scripts/generate-redirects.ts
 *
 * Outputs a vercel.json-compatible redirects array.
 */

import fs from "fs";
import path from "path";

const WP_API = "https://www.squadtrip.com/wp-json/wp/v2";

interface WPPost {
  slug: string;
  link: string;
  date: string;
}

async function fetchAllPaginated(endpoint: string): Promise<WPPost[]> {
  const all: WPPost[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const url = `${WP_API}/${endpoint}?per_page=100&page=${page}`;
    try {
      const response = await fetch(url);
      if (!response.ok) break;

      const items: WPPost[] = await response.json();
      all.push(...items);

      const totalPages = parseInt(
        response.headers.get("x-wp-totalpages") || "1"
      );
      hasMore = page < totalPages;
      page++;
    } catch {
      break;
    }
  }

  return all;
}

async function main() {
  console.log("Generating redirect map...\n");

  const posts = await fetchAllPaginated("posts");
  const pages = await fetchAllPaginated("pages");

  const redirects: Array<{
    source: string;
    destination: string;
    permanent: boolean;
  }> = [];

  // Posts with date-based URLs → /press/
  for (const post of posts) {
    const url = new URL(post.link);
    const oldPath = url.pathname.replace(/\/$/, "");
    // Date-based posts go to /press/
    if (/^\/\d{4}\/\d{2}\/\d{2}\//.test(oldPath)) {
      redirects.push({
        source: oldPath,
        destination: `/press/${post.slug}`,
        permanent: true,
      });
    }
  }

  // Spanish pages → homepage
  for (const page of pages) {
    const url = new URL(page.link);
    const oldPath = url.pathname.replace(/\/$/, "");
    if (oldPath.startsWith("/es/")) {
      redirects.push({
        source: oldPath,
        destination: "/",
        permanent: true,
      });
    }
  }

  // Static redirects for known WordPress artifacts
  const staticRedirects = [
    { source: "/es/:path*", destination: "/", permanent: true },
    { source: "/elementor-26525", destination: "/", permanent: true },
    { source: "/home-jan-24", destination: "/", permanent: true },
    { source: "/home2025", destination: "/", permanent: true },
    {
      source: "/lp-100k-group-travel-playbook",
      destination: "/",
      permanent: true,
    },
    { source: "/lp-saas-focused", destination: "/", permanent: true },
  ];

  const allRedirects = [...staticRedirects, ...redirects];

  // Output as JSON
  const output = {
    redirects: allRedirects,
  };

  const outputPath = path.join(process.cwd(), "redirects-generated.json");
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf-8");

  console.log(`Generated ${allRedirects.length} redirects`);
  console.log(`Output: ${outputPath}`);
  console.log("\nCopy the redirects array into your vercel.json file.");
}

main().catch(console.error);
