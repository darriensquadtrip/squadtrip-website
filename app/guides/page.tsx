import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { getAllGuides } from "@/lib/guides";
import { GUIDE_CLICKS } from "@/lib/guide-rankings";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { GuideCard } from "@/components/guides/GuideCard";
import { Hero } from "@/components/sections/Hero";
import { LearnMoreCTA } from "@/components/sections/LearnMoreCTA";


export const metadata: Metadata = generatePageMetadata({
  title: "Group Travel Guides & Resources",
  description:
    "Expert guides on group travel planning, payment collection, trip management, and growing your travel business.",
  path: "/guides",
});

const HIDDEN_SLUGS = new Set([
  "top-black-travel-groups",
  "black-music-festivals-2025",
  "affordable-all-inclusive-wellness-retreats",
]);

export default function GuidesIndexPage() {
  const guides = getAllGuides();

  // Filter out hidden guides, sort by Search Console clicks then by date
  const sortedGuides = guides
    .filter((g) => !HIDDEN_SLUGS.has(g.slug))
    .sort((a, b) => {
      const aClicks = GUIDE_CLICKS[a.slug] ?? 0;
      const bClicks = GUIDE_CLICKS[b.slug] ?? 0;
      if (aClicks !== bClicks) return bClicks - aClicks;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
        ]}
      />

      <Hero
        layout="centered"
        headline="Group Travel Guides"
        subheadline="Expert advice on planning group trips, collecting payments, and growing your travel business."
      />

      {/* Guide grid */}
      <section className="feature-overview">
        <div className="feature-overview-container">
          {sortedGuides.length > 0 ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))",
                  gap: "1.5rem",
                }}
              >
                {sortedGuides.map((guide) => (
                  <div key={guide.slug} className="hover-lift">
                    <GuideCard guide={guide} />
                  </div>
                ))}
              </div>
          ) : (
            <p style={{ textAlign: "center", color: "var(--text-muted)", padding: "3rem 0" }}>
              Guides are being migrated. Check back soon!
            </p>
          )}
        </div>
      </section>

      <LearnMoreCTA />
    </>
  );
}
