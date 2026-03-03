import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Hero } from "@/components/sections/Hero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SIGNUP_URL } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Product Updates",
  description:
    "Stay up to date with the latest SquadTrip features and improvements.",
  path: "/product-updates",
});

export default function ProductUpdatesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Product Updates", href: "/product-updates" },
        ]}
      />

      <Hero
        layout="centered"
        headline="Product Updates"
        subheadline="Stay up to date with the latest SquadTrip features and improvements."
      />

      <section className="feature-overview">
        <div className="feature-overview-container" style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "3rem",
              background: "var(--bg-light)",
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
            }}
          >
            <p style={{ fontSize: "1.125rem", color: "var(--text-muted)" }}>
              Check back soon for product updates.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA
        headline="Want to try the latest features?"
        subheadline="Create your first trip for free and see what SquadTrip can do."
        primaryText="Get started for free"
        primaryHref={SIGNUP_URL}
        secondaryText="See all features"
        secondaryHref="/features"
      />
    </>
  );
}
