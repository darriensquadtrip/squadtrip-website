"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Feature {
  name: string;
  description: string;
  launchOnly?: boolean;
}

interface FeatureCategory {
  title: string;
  features: Feature[];
}

const featureCategories: FeatureCategory[] = [
  {
    title: "Build & Launch",
    features: [
      {
        name: "Trip Booking Pages",
        description:
          "Create professional booking pages with itineraries, packages, add-ons, and pricing.",
      },
      {
        name: "Custom Packages & Add-Ons",
        description:
          "Offer multiple trip packages and optional add-ons like excursions or room upgrades.",
      },
      {
        name: "Shareable Trip Link",
        description:
          "Share a single link with travelers. They can view the trip, select packages, and pay online.",
      },
      {
        name: "Custom Brand Colors",
        description:
          "Match your booking pages to your brand with custom colors and styling.",
        launchOnly: true,
      },
      {
        name: "Social Media Links",
        description:
          "Add your social media links directly to your trip pages.",
        launchOnly: true,
      },
      {
        name: "Registration Info Collection",
        description:
          "Collect passport info, dietary restrictions, roommate preferences, and more at checkout.",
      },
      {
        name: "E-Sign Documents",
        description:
          "Embed e-signature processes into traveler checkout forms for waivers and agreements.",
      },
      {
        name: "Multiple Trip Packages",
        description:
          "Create different room types, experience levels, or pricing tiers for a single trip.",
      },
      {
        name: "Trip Page Gallery",
        description:
          "Showcase destination photos and trip highlights on your booking page.",
      },
    ],
  },
  {
    title: "Manage & Grow",
    features: [
      {
        name: "Reporting Dashboard",
        description:
          "Track traveler deposits, payment statuses, and registration stats in real-time.",
      },
      {
        name: "Automatic Payment Plans",
        description:
          "Set up monthly auto-billing so travelers are charged on schedule without manual follow-up.",
      },
      {
        name: "Payment Reminders",
        description:
          "Automated email and SMS reminders before each payment is due.",
      },
      {
        name: "Traveler Portal",
        description:
          "Travelers can view their balance, update payment methods, download receipts, and manage bookings.",
      },
      {
        name: "Additional Team Members",
        description:
          "Add co-organizers and team members to manage trips together.",
        launchOnly: true,
      },
      {
        name: "Export Reports",
        description:
          "Export traveler data, payment reports, and registration info in one click.",
      },
      {
        name: "Failed Payment Recovery",
        description:
          "Automatic retry for failed payments with traveler notifications to update their card.",
      },
    ],
  },
  {
    title: "Promote & Sell",
    features: [
      {
        name: "Buy Now Pay Later",
        description:
          "Offer Klarna, Affirm, and Afterpay so travelers can spread payments over time.",
        launchOnly: true,
      },
      {
        name: "Custom Promo Codes",
        description:
          "Create discount codes for early birds, repeat travelers, or special promotions.",
        launchOnly: true,
      },
      {
        name: "Traveler Referrals & Tracking",
        description:
          "Let travelers refer friends and track who brought in new bookings.",
        launchOnly: true,
      },
      {
        name: "Affiliate Program",
        description:
          "Set up affiliate tracking links so partners earn commission on referrals.",
        launchOnly: true,
      },
      {
        name: "Scheduled Email Communication",
        description:
          "Send trip updates, reminders, and marketing emails on a schedule.",
        launchOnly: true,
      },
    ],
  },
];

export function FullFeatureList() {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "var(--bg-white)",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <ScrollReveal>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--text-dark)",
              marginBottom: "16px",
            }}
          >
            Every Feature, At a Glance
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-gray)",
              fontSize: "1.125rem",
              maxWidth: "650px",
              margin: "0 auto 50px",
            }}
          >
            All the tools you need to build, manage, and grow your group travel
            business.
          </p>
        </ScrollReveal>

        {featureCategories.map((category) => (
          <ScrollReveal key={category.title}>
            <div style={{ marginBottom: "48px" }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--purple-primary)",
                  marginBottom: "24px",
                  paddingBottom: "12px",
                  borderBottom: "2px solid var(--border-light)",
                }}
              >
                {category.title}
              </h3>

              <div
                style={{
                  display: "grid",
                  gap: "16px",
                }}
              >
                {category.features.map((feature) => (
                  <div
                    key={feature.name}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      padding: "16px",
                      borderRadius: "12px",
                      background: "var(--bg-light)",
                      border: "1px solid var(--border-light)",
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
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "4px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            color: "var(--text-dark)",
                          }}
                        >
                          {feature.name}
                        </span>
                        {feature.launchOnly && (
                          <span
                            style={{
                              background: "var(--purple-primary)",
                              color: "white",
                              padding: "2px 8px",
                              borderRadius: "999px",
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              letterSpacing: "0.02em",
                            }}
                          >
                            Launch
                          </span>
                        )}
                      </div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--text-gray)",
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
