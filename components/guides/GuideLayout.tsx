import Image from "next/image";
import type { GuideFrontmatter, GuideSummary } from "@/lib/guides";
import { getSignupUrl } from "@/lib/constants";
import { TableOfContents } from "./TableOfContents";
import { RelatedGuides } from "./RelatedGuides";
import { MidArticleCTAInjector } from "./MidArticleCTAInjector";
import { ReadingProgress } from "./ReadingProgress";
import { MobileStickyBar } from "./MobileStickyBar";
import { GuideFAQ } from "./GuideFAQ";

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
  const heroSignupUrl = getSignupUrl("guides", "hero", frontmatter.slug);
  const bottomSignupUrl = getSignupUrl("guides", "bottom", frontmatter.slug);

  const showLastUpdated =
    frontmatter.lastModified &&
    frontmatter.lastModified !== frontmatter.date;

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <ReadingProgress />
      <MobileStickyBar slug={frontmatter.slug} />
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
            {frontmatter.description && (
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {frontmatter.description}
              </p>
            )}
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

          {/* Hero CTA */}
          <div className="mb-10 flex flex-col sm:flex-row items-center gap-4 rounded-xl bg-purple/5 border border-purple/10 px-6 py-4">
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm font-semibold text-gray-900">Organizing a group trip?</p>
              <p className="text-xs text-gray-500 mt-0.5">Create a booking page and start collecting payments in minutes.</p>
            </div>
            <a href={heroSignupUrl} className="btn-primary shrink-0 text-sm !py-2.5 !px-6">
              Start for free
            </a>
          </div>

          {/* Article body with mid-article CTA injected */}
          <article aria-label={frontmatter.title} className="prose prose-lg prose-headings:scroll-mt-28 prose-headings:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-8 prose-a:text-purple prose-a:no-underline hover:prose-a:underline prose-blockquote:border-purple prose-blockquote:bg-purple/5 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:pr-4 prose-img:rounded-xl">
            {children}
            <MidArticleCTAInjector slug={frontmatter.slug} />
          </article>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-2xl bg-bg-light p-10 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to plan your group trip?</h3>
            <p className="text-gray-500 mb-6">Create a booking page, collect payments, and manage travelers — all in one place.</p>
            <a href={bottomSignupUrl} className="btn-primary">
              Create your trip for free
            </a>
          </div>

          {frontmatter.faq && frontmatter.faq.length > 0 && (
            <GuideFAQ items={frontmatter.faq} />
          )}

          <RelatedGuides guides={relatedGuides} />
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents />
            <div className="mt-6 rounded-xl border border-purple/20 bg-purple/5 p-5">
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
          </div>
        </aside>
      </div>
    </main>
  );
}
