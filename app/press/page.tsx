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
    description:
      "Featured coverage of SquadTrip's group travel booking platform and funding round.",
  },
  {
    publication: "PhocusWire",
    description:
      "Industry analysis of SquadTrip's approach to simplifying group travel payments.",
  },
  {
    publication: "AP News",
    description:
      "National coverage of SquadTrip's mission to empower group travel organizers.",
  },
  {
    publication: "Skift",
    description:
      "Travel industry spotlight on SquadTrip's platform and growth trajectory.",
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
          </ScrollReveal>
          <ScrollReveal stagger>
            <div className="who-uses-grid">
              {pressItems.map((item) => (
                <div key={item.publication} className="who-uses-card hover-lift">
                  <h3>{item.publication}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
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
              reach out to our team.
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
