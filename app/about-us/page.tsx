import { generatePageMetadata } from "@/lib/metadata";
import { SIGNUP_URL } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Hero } from "@/components/sections/Hero";
import { ProblemValidation } from "@/components/sections/ProblemValidation";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Learn about SquadTrip's mission to empower anyone to create amazing group travel experiences. Founded by Darrien Watson and Stevon Judd.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about-us" },
        ]}
      />

      <Hero
        layout="centered"
        headline="Empower Anyone to Create Amazing Travel Experiences"
        subheadline="SquadTrip is the group travel booking platform that makes it easy to plan, promote, and collect payments for group trips."
        ctaText="Get started for free"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See features", href: "/features" }}
      />

      <ProblemValidation
        headline="Growing Fast, Building for the Future"
        subtitle="Trusted by organizers across the country to manage group travel payments."
        stats={[
          { value: 1.5, suffix: "M", prefix: "$", label: "Pre-Seed Raised" },
          { value: 2000, suffix: "+", label: "Organizers" },
          { value: 50, suffix: "K+", prefix: "$", label: "Trips Managed" },
          { value: 4, label: "Press Features" },
        ]}
        caption="Backed by investors and recognized by TechCrunch, PhocusWire, AP News, and Skift."
      />

      {/* Founders */}
      <section className="feature-overview">
        <div className="feature-overview-container">
          <ScrollReveal>
            <h2>Our Founders</h2>
            <p className="feature-overview-subtitle">
              SquadTrip was founded by <strong>Darrien Watson</strong> and{" "}
              <strong>Stevon Judd</strong>, avid travelers and passionate
              entrepreneurs who saw firsthand how difficult it was to organize
              group trips. They set out to build the platform they wished existed
              — one that handles the logistics so organizers can focus on the
              experience.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="who-uses-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              <div className="who-uses-card hover-lift">
                <div className="who-uses-icon">{"\uD83D\uDE80"}</div>
                <h3>Darrien Watson</h3>
                <p>
                  Co-Founder &amp; CEO. Darrien leads product and strategy,
                  driven by a passion for making group travel accessible to
                  everyone.
                </p>
              </div>
              <div className="who-uses-card hover-lift">
                <div className="who-uses-icon">{"\uD83D\uDCBB"}</div>
                <h3>Stevon Judd</h3>
                <p>
                  Co-Founder &amp; CTO. Stevon leads engineering, building the
                  technology that powers thousands of group trips.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission + Dashboard */}
      <div className="feature-blocks">
        <FeatureBlock
          title="Built to Handle the Heavy Lifting"
          description="Our mission is to streamline group trip planning and execution. Whether you are organizing a destination wedding, a retreat, or a large-scale group tour, SquadTrip gives you the tools to create booking pages, automate payment plans, communicate with travelers, and track everything in real time."
          mockup={
            <DashboardMockup
              tripName="Team Retreat 2026"
              collected="$18,400"
              total="$24,000"
              percent={77}
              travelers={[
                { initials: "JM", name: "Jessica M.", amount: "$1,200", status: "paid" as const },
                { initials: "RK", name: "Ryan K.", amount: "$800", status: "partial" as const },
                { initials: "AL", name: "Aisha L.", amount: "$1,200", status: "paid" as const },
              ]}
            />
          }
          highlights={[
            { icon: "\uD83D\uDCB3", text: "Automated payments" },
            { icon: "\uD83D\uDCCA", text: "Real-time tracking" },
            { icon: "\uD83D\uDCE7", text: "Email & SMS reminders" },
            { icon: "\u26A1", text: "Fast Stripe payouts" },
          ]}
          linkText="See all features"
          linkHref="/features"
        />
      </div>

      {/* Philosophy */}
      <section className="feature-overview" style={{ background: "var(--bg-light)" }}>
        <div className="feature-overview-container">
          <ScrollReveal>
            <h2>Our Philosophy</h2>
            <blockquote
              style={{
                fontSize: "1.5rem",
                fontStyle: "italic",
                color: "var(--purple-primary)",
                fontWeight: 600,
                maxWidth: "600px",
                margin: "0 auto 1.5rem",
                lineHeight: 1.4,
              }}
            >
              &ldquo;Travel brings people together.&rdquo;
            </blockquote>
            <p className="feature-overview-subtitle">
              We believe that shared travel experiences create bonds that last a
              lifetime. SquadTrip exists to remove the friction from group travel
              so more people can experience the world together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Press logos */}
      <section className="feature-overview">
        <div className="feature-overview-container">
          <ScrollReveal>
            <h2>As Seen In</h2>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "3rem",
                flexWrap: "wrap",
                padding: "1rem 0 2rem",
              }}
            >
              {["TechCrunch", "PhocusWire", "AP News", "Skift"].map((pub) => (
                <span
                  key={pub}
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {pub}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FinalCTA
        headline="Join the Movement"
        subheadline="Start organizing your next group trip with SquadTrip today."
        primaryText="Get started for free"
        primaryHref={SIGNUP_URL}
        secondaryText="See features"
        secondaryHref="/features"
      />
    </>
  );
}
