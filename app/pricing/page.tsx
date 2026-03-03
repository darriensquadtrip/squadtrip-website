import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { FAQ } from "@/components/ui/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SIGNUP_URL } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Pricing — Simple, Transparent Plans",
  description:
    "Start free with SquadTrip. Upgrade to Launch at $29/month for advanced features. 6% processing fee includes Stripe costs.",
  path: "/pricing",
});

const pricingFAQ = [
  {
    question: "What are processing fees and how do they work?",
    answer:
      "Processing fees are 6%. This includes the merchant fee (2.9% + 30¢) that Stripe charges for processing credit card payments. You can hide fees from travelers and use a pricing calculator to adjust rates accordingly.",
  },
  {
    question: "How do I get paid?",
    answer:
      "When your customers make a payment on our website, the funds will be processed on your Stripe account and sent to your bank account. Stripe usually takes 7-14 days to release your first payment, after which you can receive payments any time you desire.",
  },
  {
    question: "What payment options are available?",
    answer:
      "Credit card, Apple Pay, or installment plans through Klarna, AfterPay, or auto-billed monthly payment plans.",
  },
  {
    question: "Do you send receipts and payment reminders?",
    answer:
      "Yes! We send receipts, confirmation emails, payment reminders, and payment failure notifications.",
  },
  {
    question: "Can travelers change credit card info & retry payments?",
    answer:
      "Yes, travelers can change their credit card, view receipts, and manage their payments through the traveler portal.",
  },
];

const starterFeatures = [
  "Unlimited trips",
  "6% processing fee",
  "Booking pages",
  "Payment plans",
  "Reporting dashboard",
  "Email reminders",
  "Chat & email support",
];

const launchFeatures = [
  "Everything in Starter, plus:",
  "Custom brand colors",
  "Scheduled email communication",
  "Unlimited text messages",
  "Social media links on trip pages",
  "Additional team members",
  "Buy-Now-Pay-Later (Affirm, Klarna, AfterPay)",
  "Custom promo codes",
  "Traveler referrals & tracking",
  "Affiliate program",
  "Priority support",
];

const comparisonRows = [
  {
    task: "Platform fee",
    diy: "8-10% on other platforms",
    squadtrip: "6% all-inclusive",
  },
  {
    task: "Stripe processing",
    diy: "Extra 2.9% + 30¢ on top",
    squadtrip: "Included in 6%",
  },
  {
    task: "Monthly subscription",
    diy: "$50-99/month elsewhere",
    squadtrip: "Free plan available",
  },
  {
    task: "Payment plans",
    diy: "Manual tracking required",
    squadtrip: "Auto-billed monthly",
  },
  {
    task: "Payment reminders",
    diy: "Chase travelers yourself",
    squadtrip: "Automatic email + SMS",
  },
  {
    task: "Payouts",
    diy: "Wait days or weeks",
    squadtrip: "Direct to your Stripe",
  },
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ]}
      />
      <FAQSchema items={pricingFAQ} />

      {/* Hero */}
      <Hero
        layout="centered"
        headline="Simple, Transparent Pricing"
        subheadline="Start free. Upgrade when you need advanced features. No hidden fees — our 6% includes Stripe processing costs."
        ctaText="Start for free"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "Compare plans", href: "#plans" }}
        trustLine="No credit card required. Free forever on the Starter plan."
      />

      {/* Pricing Cards */}
      <section id="plans" className="feature-overview">
        <div className="feature-overview-container">
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "32px",
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              {/* Starter Card */}
              <div
                className="hover-lift"
                style={{
                  borderRadius: "20px",
                  border: "1px solid var(--border-light)",
                  padding: "40px 32px",
                  background: "var(--bg-white)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--text-dark)",
                      marginBottom: "8px",
                      textAlign: "left",
                    }}
                  >
                    Starter
                  </h2>
                  <p
                    style={{
                      color: "var(--text-gray)",
                      fontSize: "1rem",
                      marginBottom: "24px",
                      textAlign: "left",
                    }}
                  >
                    For the person who always plans the trip
                  </p>
                  <div style={{ marginBottom: "32px", textAlign: "left" }}>
                    <span
                      style={{
                        fontSize: "3.5rem",
                        fontWeight: 800,
                        color: "var(--text-dark)",
                        lineHeight: 1,
                      }}
                    >
                      $0
                    </span>
                    <span
                      style={{
                        fontSize: "1.125rem",
                        color: "var(--text-gray)",
                        marginLeft: "4px",
                      }}
                    >
                      /month
                    </span>
                  </div>
                </div>

                <a
                  href={SIGNUP_URL}
                  className="btn-secondary"
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    padding: "14px 24px",
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "1rem",
                    marginBottom: "32px",
                    textDecoration: "none",
                  }}
                >
                  Get started free
                </a>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
                  {starterFeatures.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        marginBottom: "14px",
                        fontSize: "0.95rem",
                        color: "var(--text-gray)",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth={2.5}
                        stroke="var(--success-green)"
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Launch Card (Most Popular) */}
              <div
                className="hover-lift"
                style={{
                  borderRadius: "20px",
                  border: "2px solid var(--purple-primary)",
                  padding: "40px 32px",
                  background: "var(--bg-white)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 8px 30px rgba(107, 70, 193, 0.12)",
                }}
              >
                {/* Most Popular Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--yellow-primary)",
                    color: "var(--text-dark)",
                    padding: "6px 20px",
                    borderRadius: "999px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </div>

                <div>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--text-dark)",
                      marginBottom: "8px",
                      textAlign: "left",
                    }}
                  >
                    Launch
                  </h2>
                  <p
                    style={{
                      color: "var(--text-gray)",
                      fontSize: "1rem",
                      marginBottom: "24px",
                      textAlign: "left",
                    }}
                  >
                    For the travel enthusiast ready to start a business
                  </p>
                  <div style={{ marginBottom: "8px", textAlign: "left" }}>
                    <span
                      style={{
                        fontSize: "3.5rem",
                        fontWeight: 800,
                        color: "var(--text-dark)",
                        lineHeight: 1,
                      }}
                    >
                      $29
                    </span>
                    <span
                      style={{
                        fontSize: "1.125rem",
                        color: "var(--text-gray)",
                        marginLeft: "4px",
                      }}
                    >
                      /month
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-gray)",
                      marginBottom: "32px",
                      textAlign: "left",
                    }}
                  >
                    or $299/year (save 14%)
                  </p>
                </div>

                <a
                  href={SIGNUP_URL}
                  className="btn-primary"
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    padding: "14px 24px",
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "1rem",
                    marginBottom: "32px",
                    textDecoration: "none",
                  }}
                >
                  Start free trial
                </a>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
                  {launchFeatures.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        marginBottom: "14px",
                        fontSize: "0.95rem",
                        color:
                          feature === "Everything in Starter, plus:"
                            ? "var(--purple-primary)"
                            : "var(--text-gray)",
                        fontWeight:
                          feature === "Everything in Starter, plus:" ? 600 : 400,
                      }}
                    >
                      {feature !== "Everything in Starter, plus:" && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth={2.5}
                          stroke="var(--success-green)"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      )}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Processing Fee Callout */}
          <ScrollReveal>
            <div
              style={{
                maxWidth: "700px",
                margin: "48px auto 0",
                textAlign: "center",
                padding: "24px 32px",
                background: "var(--bg-light)",
                borderRadius: "16px",
                border: "1px solid var(--border-light)",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-dark)",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                6% processing fee on both plans
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-gray)",
                  margin: 0,
                }}
              >
                This includes Stripe&apos;s 2.9% + 30&cent; credit card fee.
                No surprise charges.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable
        headline="How Our Pricing Compares"
        intro="SquadTrip's 6% includes what other platforms charge separately."
        columnHeaders={["", "Other Platforms", "SquadTrip"]}
        rows={comparisonRows}
        ctaText="Start collecting payments"
        ctaHref={SIGNUP_URL}
      />

      {/* Testimonials */}
      <TestimonialsSection
        headline="Organizers Trust SquadTrip With Their Business"
        subtitle="See how real organizers save time and grow revenue with transparent pricing."
        featured={{
          quote:
            "If it wasn't for SquadTrip, I wouldn't have been able to grow my group trips from 50 guests to 500.",
          author: "Collin D. Williams Jr.",
          company: "CDE Antigua",
          initials: "CW",
          badge: "Top Organizer",
          metrics: [
            { value: "50\u2192500", label: "Travelers" },
            { value: "10x", label: "Growth" },
          ],
        }}
        side={[
          {
            quote:
              "The platform's ability to track trip package inventory and offer payment plans has made it easier for me to manage my bookings.",
            author: "Andrew Bennett",
            company: "Passport Society",
            initials: "AB",
            badge: "Verified Organizer",
          },
          {
            quote:
              "SquadTrip streamlines the process of tracking payment plans, promoting the itinerary, and selling extra add-ons.",
            author: "Chef Ahki",
            company: "The Supernatural Woman",
            initials: "CA",
            badge: "Verified Organizer",
          },
        ]}
      />

      {/* Trust Signals */}
      <TrustSignals />

      {/* FAQ */}
      <FAQ items={pricingFAQ} title="Pricing Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Ready to Simplify Group Travel Payments?"
        subheadline="Create your first trip in 10 minutes. Free to start, no credit card required."
        primaryText="Create your trip for free"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
