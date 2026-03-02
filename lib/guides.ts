import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const GUIDES_DIR = path.join(process.cwd(), "content", "guides");

export interface GuideFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  lastModified: string;
  featuredImage: string;
  category: string;
  author: string;
  readingTime: number;
}

export interface Guide {
  frontmatter: GuideFrontmatter;
  content: string;
  slug: string;
}

export interface GuideSummary {
  slug: string;
  title: string;
  description: string;
  date: string;
  featuredImage: string;
  category: string;
  readingTime: number;
}

export function getAllGuideSlugs(): string[] {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getGuideBySlug(slug: string): Guide | null {
  const filePath = path.join(GUIDES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const stats = readingTime(content);

  return {
    frontmatter: {
      title: data.title || slug,
      slug: data.slug || slug,
      description: data.description || "",
      date: data.date || "",
      lastModified: data.lastModified || data.date || "",
      featuredImage: data.featuredImage || "",
      category: data.category || "uncategorized",
      author: data.author || "SquadTrip",
      readingTime: data.readingTime || Math.ceil(stats.minutes),
    },
    content,
    slug,
  };
}

export function getAllGuides(): GuideSummary[] {
  const slugs = getAllGuideSlugs();

  return slugs
    .map((slug) => {
      const guide = getGuideBySlug(slug);
      if (!guide) return null;
      return {
        slug: guide.slug,
        title: guide.frontmatter.title,
        description: guide.frontmatter.description,
        date: guide.frontmatter.date,
        featuredImage: guide.frontmatter.featuredImage,
        category: guide.frontmatter.category,
        readingTime: guide.frontmatter.readingTime,
      };
    })
    .filter((g): g is GuideSummary => g !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getGuidesByCategory(category: string): GuideSummary[] {
  return getAllGuides().filter((g) => g.category === category);
}

export function getRelatedGuides(
  currentSlug: string,
  category: string,
  limit = 3
): GuideSummary[] {
  return getAllGuides()
    .filter((g) => g.slug !== currentSlug && g.category === category)
    .slice(0, limit);
}

export function getCategories(): string[] {
  const guides = getAllGuides();
  const categories = new Set(guides.map((g) => g.category));
  return Array.from(categories).sort();
}
