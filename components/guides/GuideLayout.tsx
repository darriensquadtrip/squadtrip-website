import Image from "next/image";
import type { GuideFrontmatter, GuideSummary } from "@/lib/guides";
import { getHomepageUrl } from "@/lib/constants";
import { TableOfContents } from "./TableOfContents";
import { RelatedGuides } from "./RelatedGuides";
import { MidArticleCTAInjector } from "./MidArticleCTAInjector";
import { ReadingProgress } from "./ReadingProgress";
import { MobileStickyBar } from "./MobileStickyBar";
import { MobilePopupCTA } from "./MobilePopupCTA";
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
  const sidebarUrl = getHomepageUrl("guides", "sidebar", frontmatter.slug);
  const heroUrl = getHomepageUrl("guides", "hero", frontmatter.slug);
  const bottomUrl = getHomepageUrl("guides", "bottom", frontmatter.slug);

  const showLastUpdated =
    frontmatter.lastModified &&
    frontmatter.lastModified !== frontmatter.date;

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <ReadingProgress />
      <MobileStickyBar slug={frontmatter.slug} />
      <MobilePopupCTA slug={frontmatter.slug} />
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
            <a href={heroUrl} className="btn-primary shrink-0 text-sm !py-2.5 !px-6">
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
            <a href={bottomUrl} className="btn-primary">
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
            <div className="rounded-xl overflow-hidden shadow-sm bg-[#1A1A2E]">
              {/* Gray zone: mockup + logos + copy */}
              <div className="bg-gray-100 mx-2 mt-2 rounded-lg px-3 pt-3">
                {/* Browser mockup */}
                <div className="rounded-lg bg-white shadow-sm overflow-hidden">
                  <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 border-b border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28CA41]" />
                    <span className="ml-1.5 flex-1 rounded bg-gray-100 px-2 py-0.5 text-[9px] text-gray-400 truncate">
                      dashboard.squadtrip.com
                    </span>
                  </div>
                  <div className="px-2.5 py-2">
                    <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-gray-100">
                      <span className="text-[10px] font-semibold text-gray-800">Payment Plan Settings</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[8px] text-gray-500">Auto-charge</span>
                        <div className="w-6 h-3 bg-emerald-500 rounded-full relative">
                          <div className="absolute w-2.5 h-2.5 bg-white rounded-full top-[1px] right-[1px] shadow-sm" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 rounded bg-gray-50 px-1.5 py-1">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[8px]">&#10003;</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-[9px] font-medium text-gray-700">Nov 15, 2024</div>
                          <div className="text-[7px] text-gray-400">Deposit collected</div>
                        </div>
                        <span className="text-[9px] font-semibold text-purple">$534.75</span>
                      </div>
                      <div className="flex items-center gap-1.5 rounded bg-gray-50 px-1.5 py-1">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[8px]">&#10003;</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-[9px] font-medium text-gray-700">Dec 15, 2024</div>
                          <div className="text-[7px] text-gray-400">Auto-charged</div>
                        </div>
                        <span className="text-[9px] font-semibold text-purple">$534.75</span>
                      </div>
                      <div className="flex items-center gap-1.5 rounded bg-gray-50 px-1.5 py-1">
                        <span className="w-4 h-4 rounded-full bg-purple-light text-white flex items-center justify-center text-[8px] font-bold">3</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-[9px] font-medium text-gray-700">Jan 15, 2025</div>
                          <div className="text-[7px] text-gray-400">Scheduled</div>
                        </div>
                        <span className="text-[9px] font-semibold text-purple">$534.75</span>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-2 flex-wrap">
                      <span className="text-[7px] font-medium bg-emerald-50 text-emerald-600 rounded-full px-1.5 py-0.5">&#10003; Auto-charge enabled</span>
                      <span className="text-[7px] font-medium bg-emerald-50 text-emerald-600 rounded-full px-1.5 py-0.5">&#10003; Reminders sent</span>
                      <span className="text-[7px] font-medium bg-emerald-50 text-emerald-600 rounded-full px-1.5 py-0.5">&#10003; Receipts automatic</span>
                    </div>
                  </div>
                </div>
                {/* Payment method logos — dark text on gray bg */}
                <div className="flex items-center justify-center gap-2.5 py-2.5">
                  <svg className="h-3 w-auto opacity-70" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.6 2.8C10.3 1.9 10.7 0.8 10.6 0c-1 0-2.3.7-3 1.6-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 3-1.8zM10.5 3.8c-1.7-.1-3.1 1-3.9 1s-2-.9-3.3-.9C1.4 3.9 0 5.5 0 8.5c0 1.9.7 3.8 1.6 5.1.8 1.1 1.5 2 2.5 2s1.4-.9 2.7-.9 1.6.9 2.7.9 1.7-.9 2.4-2c.5-.8.9-1.5 1.1-2-.1 0-2.1-.8-2.1-3.2 0-2 1.6-2.9 1.7-3-.9-1.4-2.4-1.6-2.6-1.6z" fill="#1A1A2E"/>
                    <text x="18" y="14" fontSize="10" fontFamily="system-ui" fontWeight="600" fill="#1A1A2E">Pay</text>
                  </svg>
                  <svg className="h-2.5 w-auto opacity-70" viewBox="0 0 60 18" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="14" fontSize="12" fontFamily="system-ui" fontWeight="700" fill="#1A1A2E">klarna</text>
                  </svg>
                  <svg className="h-2.5 w-auto opacity-70" viewBox="0 0 50 18" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="14" fontSize="11" fontFamily="system-ui" fontWeight="700" fill="#1A1A2E">affirm</text>
                  </svg>
                  <svg className="h-2.5 w-auto opacity-70" viewBox="0 0 65 18" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="14" fontSize="11" fontFamily="system-ui" fontWeight="600" fill="#1A1A2E">afterpay</text>
                  </svg>
                  <svg className="h-3 w-auto opacity-60" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="31" height="23" rx="3.5" fill="white" stroke="#D1D5DB" />
                    <rect x="0" y="5" width="32" height="5" fill="#374151" />
                    <rect x="4" y="14" width="8" height="2" rx="1" fill="#D1D5DB" />
                    <rect x="4" y="18" width="12" height="2" rx="1" fill="#D1D5DB" />
                    <rect x="22" y="14" width="6" height="6" rx="1" fill="#F59E0B" />
                    <circle cx="24" cy="17" r="2" fill="#EF4444" />
                    <circle cx="26" cy="17" r="2" fill="#F59E0B" fillOpacity="0.8" />
                  </svg>
                </div>
              </div>
              {/* Copy + button zone — dark background */}
              <div className="px-4 pt-2.5 pb-3">
                <p className="text-sm font-semibold text-white mb-1">
                  Plan your group trip
                </p>
                <p className="text-xs text-white/55 leading-relaxed mb-3">
                  Booking pages, payments, and guest tracking — all in one place.
                </p>
                <a
                  href={sidebarUrl}
                  className="block text-center text-sm font-semibold text-gray-900 bg-yellow hover:bg-yellow-hover transition-colors rounded-lg py-2.5"
                >
                  Get started free
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
