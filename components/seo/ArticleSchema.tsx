import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { JsonLd } from "./JsonLd";

interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  featuredImage?: string;
  author?: string;
}

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  featuredImage,
  author = SITE_NAME,
}: ArticleSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url: `${SITE_URL}/guides/${slug}`,
        datePublished,
        dateModified,
        author: {
          "@type": "Organization",
          name: author,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logos/squadtrip-logo.png`,
          },
        },
        ...(featuredImage && {
          image: featuredImage.startsWith("http")
            ? featuredImage
            : `${SITE_URL}${featuredImage}`,
        }),
      }}
    />
  );
}
