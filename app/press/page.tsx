import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Hero } from "@/components/sections/Hero";
import { ProblemValidation } from "@/components/sections/ProblemValidation";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SIGNUP_URL } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Press & Media",
  description:
    "SquadTrip in the news. Read about our $1.5M pre-seed funding and coverage in TechCrunch, PhocusWire, AP News, and Skift.",
  path: "/press",
});

const pressItems = [
  {
    publication: "TechCrunch",
    headline: "SquadTrip raises $1.5M to simplify group travel payments",
    date: "September 2022",
    excerpt:
      "SquadTrip, a platform that helps group travel organizers manage bookings and collect payments, has raised $1.5M in pre-seed funding. The startup tackles the logistical nightmare of coordinating payments across large groups of travelers.",
    href: "#",
  },
  {
    publication: "PhocusWire",
    headline: "SquadTrip tackles group travel payment friction",
    date: "September 2022",
    excerpt:
      "The travel-tech startup SquadTrip is addressing one of the biggest pain points in group travel: collecting money. With automated payment plans and a purpose-built booking platform, the company is giving organizers the tools to run trips like a business.",
    href: "#",
  },
  {
    publication: "AP News",
    headline: "New platform aims to take hassle out of group trip payments",
    date: "September 2022",
    excerpt:
      "A new travel technology platform called SquadTrip is making it easier for group travel organizers to collect payments and manage bookings. Founded by Darrien Watson and Stevon Judd, the company has raised $1.5 million to scale its operations.",
    href: "#",
  },
  {
    publication: "Skift",
    headline: "Startup Watch: SquadTrip automates group travel collections",
    date: "September 2022",
    excerpt:
      "SquadTrip is a new entrant in the group travel space, offering organizers a streamlined way to create trip pages, set up payment plans, and track traveler payments in real time. The platform recently closed a $1.5M pre-seed round.",
    href: "#",
  },
];

const milestones = [
  {
    year: "2021",
    title: "SquadTrip Founded",
    description:
      "Darrien Watson and Stevon Judd founded SquadTrip after experiencing firsthand the frustration of organizing group trips. They set out to build a platform that eliminates the chaos of spreadsheets, Venmo requests, and group chat confusion.",
  },
  {
    year: "2022",
    title: "Pre-Seed Funding & National Press Coverage",
    description:
      "Raised $1.5M in pre-seed funding to accelerate product development and growth. Featured in TechCrunch, PhocusWire, AP News, and Skift, establishing SquadTrip as a rising name in travel technology.",
  },
  {
    year: "2023",
    title: "1,000+ Organizers on Platform",
    description:
      "Crossed the 1,000-organizer milestone as word spread among group travel planners, travel advisors, and event coordinators. Expanded the platform with new payment management and communication features.",
  },
  {
    year: "2024",
    title: "2,000+ Organizers & 50,000+ Travelers",
    description:
      "Doubled the organizer base and surpassed 50,000 travelers on the platform. Continued to build out features including multi-trip dashboards, registration forms, and expanded payment options.",
  },
  {
    year: "2025",
    title: "Enhanced Payment Plans & Booking Features",
    description:
      "Launched buy-now-pay-later options with Klarna and Afterpay, SMS notifications, e-sign documents, and auto-retry payments, giving organizers a more powerful and automated toolkit than ever before.",
  },
];

export default function PressPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Press & Media", href: "/press" },
        ]}
      />

      <Hero
        layout="centered"
        headline="Press & Media"
        subheadline="SquadTrip is redefining how group trips are organized and paid for. Here is what the press is saying."
      />

      <ProblemValidation
        headline="Funded & Growing"
        stats={[
          { value: 1.5, suffix: "M", prefix: "$", label: "Pre-Seed Raised" },
          { value: 4, label: "Press Features" },
          { value: 2000, suffix: "+", label: "Organizers" },
          { value: 50, suffix: "K+", label: "Trips Managed" },
        ]}
        caption="Building the future of group travel."
      />

      {/* Press Mentions */}
      <section className="feature-overview">
        <div className="feature-overview-container">
          <ScrollReveal>
            <h2>In the News</h2>
            <p className="feature-overview-subtitle">
              SquadTrip has been featured in leading technology and travel publications for its innovative approach to group travel payments and booking management.
            </p>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="who-uses-grid">
              {pressItems.map((item) => (
                <a
                  key={item.publication}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="who-uses-card hover-lift" style={{ height: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <span style={{ fontSize: "0.85rem", color: "var(--purple-primary)", fontWeight: 600, background: "rgba(124, 58, 237, 0.08)", padding: "0.25rem 0.75rem", borderRadius: "999px" }}>
                        {item.publication}
                      </span>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                        {item.date}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.15rem", marginTop: "0.75rem", marginBottom: "0.5rem" }}>{item.headline}</h3>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{item.excerpt}</p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="feature-overview" style={{ background: "var(--bg-light)" }}>
        <div className="feature-overview-container">
          <ScrollReveal>
            <h2>Company Milestones</h2>
            <p className="feature-overview-subtitle">
              From a two-person startup to a platform serving thousands of organizers and tens of thousands of travelers, here is how SquadTrip has grown.
            </p>
          </ScrollReveal>
          <ScrollReveal stagger>
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    marginBottom: index < milestones.length - 1 ? "2rem" : "0",
                    position: "relative",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "60px" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "var(--purple-primary)",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        flexShrink: 0,
                      }}
                    >
                      {milestone.year}
                    </span>
                    {index < milestones.length - 1 && (
                      <div style={{ width: "2px", flexGrow: 1, background: "rgba(124, 58, 237, 0.2)", marginTop: "0.5rem" }} />
                    )}
                  </div>
                  <div style={{ paddingTop: "0.25rem" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.5rem" }}>
                      {milestone.title}
                    </h3>
                    <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Press Kit */}
      <section className="feature-overview">
        <div className="feature-overview-container" style={{ textAlign: "center" }}>
          <ScrollReveal>
            <h2>Press Kit</h2>
            <p className="feature-overview-subtitle">
              Need SquadTrip brand assets for your story? Our press kit includes high-resolution logos, product screenshots, founder headshots, and company fact sheets. All brand assets are available on request.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="feature-overview" style={{ background: "var(--bg-light)" }}>
        <div className="feature-overview-container" style={{ textAlign: "center" }}>
          <ScrollReveal>
            <h2>Press Inquiries</h2>
            <p className="feature-overview-subtitle">
              For media inquiries, interview requests, or press kit access, please
              reach out to our team. We are happy to provide additional information, arrange interviews with our founders, or supply any assets you need for your coverage.
            </p>
            <a href="mailto:support@squadtrip.com" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
              Contact us for press inquiries
            </a>
          </ScrollReveal>
        </div>
      </section>

      <FinalCTA
        headline="Ready to see what the buzz is about?"
        subheadline="Join 2,000+ organizers using SquadTrip to manage group travel."
        primaryText="Get started for free"
        primaryHref={SIGNUP_URL}
        secondaryText="See features"
        secondaryHref="/features"
      />
    </>
  );
}
