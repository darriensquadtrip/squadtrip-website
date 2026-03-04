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
                <div className="who-uses-icon">{"🚀"}</div>
                <h3>Darrien Watson</h3>
                <p style={{ fontWeight: 600, color: "var(--purple-primary)", marginBottom: "0.5rem" }}>
                  Co-Founder &amp; CEO
                </p>
                <p>
                  Darrien leads product and strategy at SquadTrip, driven by a
                  passion for making group travel accessible to everyone. Before
                  founding SquadTrip, Darrien organized dozens of group trips and
                  experienced the headaches of chasing payments, managing
                  spreadsheets, and juggling group chat threads. That frustration
                  became the spark for SquadTrip. He brings a deep understanding
                  of what organizers need because he has been one himself. Darrien
                  is focused on building a product that saves organizers time and
                  gives them confidence that every detail is handled.
                </p>
              </div>
              <div className="who-uses-card hover-lift">
                <div className="who-uses-icon">{"💻"}</div>
                <h3>Stevon Judd</h3>
                <p style={{ fontWeight: 600, color: "var(--purple-primary)", marginBottom: "0.5rem" }}>
                  Co-Founder &amp; CTO
                </p>
                <p>
                  Stevon leads engineering at SquadTrip, building the technology
                  that powers thousands of group trips. With a background in
                  software development and a love for travel, Stevon saw the
                  opportunity to apply modern technology to a space that had been
                  overlooked. He architects the systems behind automated payment
                  plans, real-time dashboards, and seamless Stripe integrations.
                  Stevon is committed to building a reliable, scalable platform
                  that organizers can trust with their most important trips.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="feature-overview" style={{ background: "var(--bg-light)" }}>
        <div className="feature-overview-container">
          <ScrollReveal>
            <h2>Our Story</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ maxWidth: "720px", margin: "0 auto", fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
              <p style={{ marginBottom: "1.25rem" }}>
                SquadTrip started the way a lot of great companies start — with a
                real problem that the founders could not ignore. Darrien and Stevon
                were planning their own group trips and kept running into the same
                wall. There was no single tool designed for the job. Instead, they
                were cobbling together spreadsheets to track who had paid, sending
                Venmo requests that went unanswered, and drowning in group chat
                threads trying to coordinate logistics.
              </p>
              <p style={{ marginBottom: "1.25rem" }}>
                Every trip was the same cycle: excitement at the start, followed by
                weeks of chasing people for money and fielding endless questions
                about dates, prices, and room assignments. The organizer always bore
                the burden, and the tools available were never built for group travel.
                They were general-purpose apps awkwardly repurposed for a very
                specific and complex use case.
              </p>
              <p style={{ marginBottom: "1.25rem" }}>
                Darrien and Stevon knew there had to be a better way. So they built
                it. SquadTrip was born out of that firsthand frustration — a platform
                purpose-built for group travel organizers, where everything from
                creating a booking page to collecting payments to sending reminders
                lives in one place. No more spreadsheets. No more chasing payments.
                No more guesswork.
              </p>
              <p>
                What started as a solution to their own problem quickly resonated
                with thousands of other organizers who were dealing with the exact
                same pain points. Today, SquadTrip serves more than 2,000 organizers
                and 50,000 travelers, and the team continues to build features that
                make group travel simpler, more transparent, and more enjoyable for
                everyone involved.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Values */}
      <section className="feature-overview">
        <div className="feature-overview-container">
          <ScrollReveal>
            <h2>Our Values</h2>
            <p className="feature-overview-subtitle">
              These are the principles that guide everything we build and every decision we make at SquadTrip.
            </p>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="who-uses-grid">
              <div className="who-uses-card hover-lift">
                <div className="who-uses-icon">{"✨"}</div>
                <h3>Simplicity</h3>
                <p>
                  We remove complexity so organizers can focus on what matters — the
                  trip itself. Every feature we build is designed to reduce steps,
                  eliminate confusion, and make group travel management feel
                  effortless. If it does not make things simpler, we do not ship it.
                </p>
              </div>
              <div className="who-uses-card hover-lift">
                <div className="who-uses-icon">{"💪"}</div>
                <h3>Empowerment</h3>
                <p>
                  We give organizers superpowers. Whether you are a first-time planner
                  coordinating a friends trip or a professional travel advisor managing
                  dozens of groups, SquadTrip gives you the tools to operate like a
                  pro. We believe anyone should be able to create amazing travel
                  experiences, regardless of experience level.
                </p>
              </div>
              <div className="who-uses-card hover-lift">
                <div className="who-uses-icon">{"🔒"}</div>
                <h3>Trust</h3>
                <p>
                  Trust is the foundation of group travel. Travelers trust organizers
                  with their money and their plans. We earn that trust through
                  transparent pricing with no hidden fees, secure payment processing
                  via Stripe, and clear communication tools that keep everyone on the
                  same page.
                </p>
              </div>
              <div className="who-uses-card hover-lift">
                <div className="who-uses-icon">{"🌍"}</div>
                <h3>Community</h3>
                <p>
                  We celebrate group travel culture. Travel is better together, and we
                  are building more than a platform — we are building a community of
                  organizers who share a passion for bringing people together through
                  travel. We support, learn from, and grow alongside the people who
                  use SquadTrip every day.
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
            { icon: "💳", text: "Automated payments" },
            { icon: "📊", text: "Real-time tracking" },
            { icon: "📧", text: "Email & SMS reminders" },
            { icon: "⚡", text: "Fast Stripe payouts" },
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
