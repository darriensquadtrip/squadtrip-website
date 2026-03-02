import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { getAllGuides, getCategories } from "@/lib/guides";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { GuideCard } from "@/components/guides/GuideCard";

export const metadata: Metadata = generatePageMetadata({
  title: "Group Travel Guides & Resources",
  description:
    "Expert guides on group travel planning, payment collection, trip management, and growing your travel business.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  const guides = getAllGuides();
  const categories = getCategories();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Group Travel Guides
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice on planning group trips, collecting payments, and
            growing your travel business.
          </p>
        </div>
      </section>

      {/* Category filter */}
      {categories.length > 0 && (
        <section className="border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 overflow-x-auto py-4 no-scrollbar">
              <span className="shrink-0 px-4 py-2 rounded-full bg-purple text-white text-sm font-medium">
                All
              </span>
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="shrink-0 px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer capitalize"
                >
                  {cat.replace(/-/g, " ")}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Guide grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {guides.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-12">
              Guides are being migrated. Check back soon!
            </p>
          )}
        </div>
      </section>
    </>
  );
}
