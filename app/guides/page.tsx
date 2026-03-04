import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { getAllGuides, getCategories } from "@/lib/guides";
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

      <Hero
        layout="centered"
        headline="Group Travel Guides"
        subheadline="Expert advice on planning group trips, collecting payments, and growing your travel business."
      />

      {/* Category filter */}
      {categories.length > 0 && (
        <section style={{ borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                overflowX: "auto",
                padding: "1rem 0",
              }}
            >
              <span className="btn-primary" style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}>
                All
              </span>
              {categories.map((cat) => (
                <span
                  key={cat}
                  style={{
                    flexShrink: 0,
                    padding: "0.5rem 1.25rem",
                    borderRadius: "9999px",
                    background: "var(--bg-light)",
                    color: "var(--text-muted)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    textTransform: "capitalize",
                    transition: "background 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cat.replace(/-/g, " ")}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Guide grid */}
      <section className="feature-overview">
        <div className="feature-overview-container">
          {guides.length > 0 ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {guides.map((guide) => (
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
