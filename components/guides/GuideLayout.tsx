import Image from "next/image";
import type { GuideFrontmatter, GuideSummary } from "@/lib/guides";
import { getSignupUrl } from "@/lib/constants";
import { TableOfContents } from "./TableOfContents";
import { RelatedGuides } from "./RelatedGuides";
import { MidArticleCTAInjector } from "./MidArticleCTAInjector";

interface GuideLayoutProps {
  frontmatter: GuideFrontmatter;
  children: React.ReactNode;
  relatedGuides: GuideSummary[];
  wordCount?: number;
}

export function GuideLayout({
  frontmatter,
  children,
  relatedGuides,
}: GuideLayoutProps) {
  const sidebarSignupUrl = getSignupUrl("guides", "sidebar", frontmatter.slug);
  const bottomSignupUrl = getSignupUrl("guides", "bottom", frontmatter.slug);

  const showLastUpdated =
    frontmatter.lastModified &&
    frontmatter.lastModified !== frontmatter.date;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-[1fr_250px] lg:gap-12 xl:grid-cols-[1fr_280px]">
        {/* Main content */}
        <div className="max-w-3xl">
          {/* Header */}
          <header className="mb-8">
            <span className="inline-block text-sm font-semibold text-purple uppercase tracking-wide mb-3">
              {frontmatter.category.replace(/-/g, " ")}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {frontmatter.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-4 text-sm text-gray-500">
              <span>{frontmatter.author}</span>
              <span>&middot;</span>
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {showLastUpdated && (
                <>
                  <span>&middot;</span>
                  <span className="text-emerald-600 font-medium">
                    Updated{" "}
                    {new Date(frontmatter.lastModified).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </>
              )}
              <span>&middot;</span>
              <span>{frontmatter.readingTime} min read</span>
            </div>
          </header>

          {/* Featured image */}
          {frontmatter.featuredImage && (
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-10">
              <Image
                src={frontmatter.featuredImage}
                alt={frontmatter.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 720px"
              />
            </div>
          )}

          {/* Article body with mid-article CTA injected */}
          <article className="prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-headings:font-bold prose-a:text-purple prose-a:no-underline hover:prose-a:underline">
            {children}
            <MidArticleCTAInjector slug={frontmatter.slug} />
          </article>

          {/* Bottom CTA */}
          <div
            style={{
              marginTop: "3rem",
              borderRadius: "16px",
              background: "var(--bg-light)",
              padding: "2.5rem",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.5rem" }}>
              Ready to plan your group trip?
            </h3>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              Create a booking page, collect payments, and manage travelers — all in one place.
            </p>
            <a href={bottomSignupUrl} className="btn-primary">
              Create your trip for free
            </a>
          </div>

          <RelatedGuides guides={relatedGuides} />
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <TableOfContents />

          {/* Sidebar CTA */}
          <div className="sticky top-[28rem] mt-8 rounded-xl border border-purple/20 bg-purple/5 p-5">
            <p className="text-sm font-semibold text-gray-900 mb-2">
              Plan your group trip
            </p>
            <p className="text-xs text-gray-600 mb-4">
              Booking pages, payments, and guest tracking — all in one place.
            </p>
            <a
              href={sidebarSignupUrl}
              className="btn-primary block text-center text-sm"
            >
              Get started free
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
