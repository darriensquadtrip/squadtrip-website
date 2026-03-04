import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  articleDates?: { published: string; modified?: string };
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage = "/images/og-default.png",
  noIndex = false,
  articleDates,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  // If title exceeds 50 chars, skip the " | SquadTrip" suffix to stay under ~60 chars in SERPs
  const pageTitle = title.length > 50 ? { absolute: title } : title;
  const resolvedImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(articleDates
        ? {
            type: "article",
            publishedTime: articleDates.published,
            ...(articleDates.modified && { modifiedTime: articleDates.modified }),
          }
        : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      site: "@squadtrip",
      title,
      description,
      images: [resolvedImage],
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}
