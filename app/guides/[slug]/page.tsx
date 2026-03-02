import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllGuideSlugs,
  getGuideBySlug,
  getRelatedGuides,
} from "@/lib/guides";
import { generatePageMetadata } from "@/lib/metadata";
import { GuideLayout } from "@/components/guides/GuideLayout";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return generatePageMetadata({
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
    path: `/guides/${slug}`,
    ogImage: guide.frontmatter.featuredImage || undefined,
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = getRelatedGuides(
    slug,
    guide.frontmatter.category
  );

  return (
    <>
      <ArticleSchema
        title={guide.frontmatter.title}
        description={guide.frontmatter.description}
        slug={slug}
        datePublished={guide.frontmatter.date}
        dateModified={guide.frontmatter.lastModified}
        featuredImage={guide.frontmatter.featuredImage}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: guide.frontmatter.title, href: `/guides/${slug}` },
        ]}
      />

      <GuideLayout frontmatter={guide.frontmatter} relatedGuides={related}>
        <MDXRemote source={guide.content} />
      </GuideLayout>
    </>
  );
}
