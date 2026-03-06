"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SignupLink } from "@/components/common/SignupLink";

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

function CheckIcon() {
  return (
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
  );
}

export function PricingCards() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const isYearly = billing === "yearly";

  return (
    <section id="plans" className="feature-overview">
      <div className="feature-overview-container">
        {/* Billing Toggle */}
        <ScrollReveal>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginBottom: "48px",
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontWeight: billing === "monthly" ? 700 : 400,
                color:
                  billing === "monthly"
                    ? "var(--text-dark)"
                    : "var(--text-gray)",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </span>

            <button
              onClick={() =>
                setBilling(isYearly ? "monthly" : "yearly")
              }
              aria-label={`Switch to ${isYearly ? "monthly" : "yearly"} billing`}
              style={{
                width: "52px",
                height: "28px",
                borderRadius: "999px",
                background: isYearly
                  ? "var(--purple-primary)"
                  : "var(--border-light)",
                border: "none",
                cursor: "pointer",
                position: "relative",
                transition: "background 0.2s",
                padding: 0,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "3px",
                  left: isYearly ? "26px" : "3px",
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: "white",
                  transition: "left 0.2s",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }}
              />
            </button>

            <span
              style={{
                fontSize: "1rem",
                fontWeight: billing === "yearly" ? 700 : 400,
                color:
                  billing === "yearly"
                    ? "var(--text-dark)"
                    : "var(--text-gray)",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </span>

            {billing === "yearly" && (
              <span
                style={{
                  background: "var(--yellow-primary)",
                  color: "var(--text-dark)",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                }}
              >
                Save 14%
              </span>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
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
                padding: "clamp(24px, 5vw, 40px) clamp(20px, 4vw, 32px)",
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
                    marginBottom: "12px",
                    textAlign: "left",
                  }}
                >
                  For the person who always plans the trip
                </p>
                <p
                  style={{
                    color: "var(--text-gray)",
                    fontSize: "0.9rem",
                    marginBottom: "24px",
                    textAlign: "left",
                    lineHeight: 1.5,
                  }}
                >
                  The best option to plan your friends trip, bachelor party, or
                  family reunion.
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
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
              </div>

              <SignupLink
                source="pricing"
                medium="pricing-starter"
                className="btn-secondary"
              >
                Get started free
              </SignupLink>

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
                    <CheckIcon />
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
                padding: "clamp(24px, 5vw, 40px) clamp(20px, 4vw, 32px)",
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
                    marginBottom: "12px",
                    textAlign: "left",
                  }}
                >
                  For the travel enthusiast ready to start a business
                </p>
                <p
                  style={{
                    color: "var(--text-gray)",
                    fontSize: "0.9rem",
                    marginBottom: "24px",
                    textAlign: "left",
                    lineHeight: 1.5,
                  }}
                >
                  The best option to launch, manage, &amp; grow your group
                  travel business.
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
                    {isYearly ? "$299" : "$29"}
                  </span>
                  <span
                    style={{
                      fontSize: "1.125rem",
                      color: "var(--text-gray)",
                      marginLeft: "4px",
                    }}
                  >
                    /{isYearly ? "year" : "month"}
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
                  {isYearly
                    ? "That’s just $24.92/month"
                    : "or $299/year (save 14%)"}
                </p>
              </div>

              <SignupLink
                source="pricing"
                medium="pricing-pro"
                className="btn-primary"
              >
                Start free trial
              </SignupLink>

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
                      <CheckIcon />
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
              This includes Stripe&apos;s 2.9% + 30&cent; credit card fee. No
              surprise charges.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
