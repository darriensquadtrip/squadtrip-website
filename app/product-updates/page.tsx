import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Hero } from "@/components/sections/Hero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SIGNUP_URL } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Product Updates",
  description:
    "Stay up to date with the latest SquadTrip features and improvements.",
  path: "/product-updates",
});

const updates = [
  {
    date: "March 2026",
    title: "Enhanced Trip Pages",
    description:
      "Shareable trip pages just got a major upgrade. Organizers can now build rich trip pages with detailed itineraries, photo galleries, and real-time availability indicators. Travelers see exactly what the trip includes, which rooms or packages are still open, and can book their spot directly from the page. Enhanced trip pages make it easier to promote your trip on social media, in emails, or anywhere you share a link.",
    tag: "New Feature",
  },
  {
    date: "February 2026",
    title: "Affiliate Tracking",
    description:
      "Introducing built-in affiliate tracking for organizers and partners. Generate unique referral links, track which partners are driving bookings, and manage commission payouts all from your SquadTrip dashboard. Whether you work with influencers, travel bloggers, or referral partners, affiliate tracking gives you full visibility into your referral pipeline and automates the commission process.",
    tag: "New Feature",
  },
  {
    date: "January 2026",
    title: "E-Sign Documents",
    description:
      "Collect signed documents directly within SquadTrip. Upload waivers, liability agreements, travel contracts, or any other document that requires a signature, and travelers can review and sign electronically during the booking process. No more printing, scanning, or chasing down paperwork. All signed documents are stored securely and accessible from your organizer dashboard.",
    tag: "New Feature",
  },
  {
    date: "December 2025",
    title: "SMS Notifications",
    description:
      "Keep travelers in the loop with text message notifications. SquadTrip now sends SMS reminders for upcoming payment due dates, successful payments, failed payment alerts, and important trip updates. SMS notifications complement existing email reminders, ensuring that travelers never miss a deadline. Organizers can configure which notifications are sent via text for each trip.",
    tag: "Enhancement",
  },
  {
    date: "November 2025",
    title: "Registration Forms",
    description:
      "Collect important traveler details at the time of booking with customizable registration forms. Organizers can add fields for passport information, dietary preferences, T-shirt sizes, roommate requests, emergency contacts, and any other custom questions. Form responses are organized in your dashboard and can be exported for easy reference when coordinating with hotels, airlines, or other vendors.",
    tag: "New Feature",
  },
  {
    date: "October 2025",
    title: "Klarna & Afterpay Integration",
    description:
      "Travelers now have the option to pay with Klarna or Afterpay at checkout, splitting their trip cost into interest-free installments managed entirely by the buy-now-pay-later provider. This gives travelers more flexibility in how they pay, while organizers still receive the full payment upfront. Offering BNPL options can increase conversion rates and make trips accessible to a wider audience.",
    tag: "New Feature",
  },
  {
    date: "September 2025",
    title: "Multi-Trip Dashboard",
    description:
      "For organizers managing multiple trips at once, the new multi-trip dashboard provides a single overview screen showing all active trips, total collections, upcoming payment deadlines, and traveler counts across every trip. Quickly switch between trips, compare performance, and stay on top of all your group travel operations from one centralized view.",
    tag: "Enhancement",
  },
  {
    date: "August 2025",
    title: "Auto-Retry Payments",
    description:
      "Failed payments no longer require manual follow-up. SquadTrip now automatically retries failed payment attempts on a configurable schedule, and sends notifications to travelers when a payment fails and when a retry is upcoming. This reduces the number of missed payments and saves organizers hours of time that would otherwise be spent chasing down travelers with declined cards.",
    tag: "Enhancement",
  },
];

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
        subheadline="Stay up to date with the latest SquadTrip features and improvements. We are constantly building new tools to help organizers manage group travel more effectively."
      />

      <section className="feature-overview">
        <div className="feature-overview-container" style={{ maxWidth: "820px" }}>
          <ScrollReveal>
            <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", lineHeight: 1.7, textAlign: "center", marginBottom: "3rem" }}>
              Our team ships new features and improvements regularly. Here is a look at what we have released recently. Have a feature request? Let us know at{" "}
              <a
                href="mailto:support@squadtrip.com"
                style={{ color: "var(--purple-primary)", textDecoration: "underline" }}
              >
                support@squadtrip.com
              </a>.
            </p>
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {updates.map((update, index) => (
              <ScrollReveal key={update.title}>
                <div
                  style={{
                    padding: "2rem",
                    background: index % 2 === 0 ? "#fff" : "var(--bg-light)",
                    borderRadius: "16px",
                    border: "1px solid #e5e7eb",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  className="hover-lift"
                >
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "0.3rem 0.85rem",
                        background: "var(--purple-primary)",
                        color: "#fff",
                        borderRadius: "999px",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {update.date}
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "0.3rem 0.85rem",
                        background: update.tag === "New Feature" ? "rgba(16, 185, 129, 0.1)" : "rgba(59, 130, 246, 0.1)",
                        color: update.tag === "New Feature" ? "#059669" : "#2563eb",
                        borderRadius: "999px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                      }}
                    >
                      {update.tag}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--text-dark)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {update.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {update.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
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
