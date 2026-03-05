import type { Metadata } from "next";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
const FAQ = dynamic(() => import("@/components/ui/FAQ").then((mod) => mod.FAQ));
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SIGNUP_URL } from "@/lib/constants";
import {
  TripPagesMockup,
  ItinerariesMockup,
  AddOnsMockup,
  PackagesMockup,
  CustomBrandingMockup,
  EmbedMockup,
  ReferralsMockup,
  AffiliateMockup,
  FeeHandlingMockup,
  AutoBillingMockup,
  FlexDepositMockup,
  TravelerPortalMockup,
  InventoryMockup,
  ScheduledEmailsMockup,
  RegistrationMockup,
  DataExportsMockup,
  DisputeMockup,
  PaymentProcessingMockup,
  DailyPayoutsMockup,
} from "@/components/mockups/FeatureCardMockups";

export const metadata: Metadata = generatePageMetadata({
  title: "How It Works — Features",
  description:
    "Collect group travel payments online — fast, secure, and stress-free. Accept cards, offer Buy Now Pay Later, and set flexible payment plans.",
  path: "/features",
});

const featuresFAQ = [
  {
    question: "What are the costs or fees?",
    answer:
      "SquadTrip offers a free version and paid plans starting at $29 per month. The booking fee is 6%, which includes Stripe's processing costs.",
  },
  {
    question: "How do Payment Options work?",
    answer:
      "You can offer 2 Payment Options: either pay in full via credit card or Apple Pay, or sign up for a monthly payment plan with auto billing. Payment plans are charged automatically each month.",
  },
  {
    question: "How do I build Trip Options?",
    answer:
      "Use Trip Options to set up the travel itinerary and the different trip packages and room types available, such as Single vs Double Occupancy, 4-day stay vs 5-day stay, or Premium Room vs Ocean View Room.",
  },
  {
    question: "How do I advertise my trip?",
    answer:
      "Use the trip page that's automatically created when you publish your page. Have a custom website? Add a button or embed the trip options directly onto your website.",
  },
  {
    question: "Can I schedule a demo?",
    answer:
      "Of course! Visit our website and click the chat icon to schedule a demo with our team.",
  },
];

interface FeatureCard {
  title: string;
  description: string;
  mockup: ReactNode;
}

interface FeatureSection {
  tab: string;
  headline: string;
  description: string;
  features: FeatureCard[];
}

const featureSections: FeatureSection[] = [
  {
    tab: "Build",
    headline: "Build",
    description:
      "Create a sell-out trip page with stunning photos, detailed itineraries, add-ons, and packages.",
    features: [
      {
        title: "Trip pages",
        description:
          "Design beautiful and user-friendly trip pages with eye-catching images and icons.",
        mockup: <TripPagesMockup />,
      },
      {
        title: "Itineraries",
        description:
          "Showcase the activity schedule for each day of the trip.",
        mockup: <ItinerariesMockup />,
      },
      {
        title: "Add-ons",
        description:
          "Offer à la carte trip add-ons for your travelers to purchase at checkout.",
        mockup: <AddOnsMockup />,
      },
      {
        title: "Packages",
        description:
          "Build the right packages for your trips, from Double vs Single to Basic vs Premium.",
        mockup: <PackagesMockup />,
      },
      {
        title: "Custom branding",
        description:
          "Let your brand stand out with custom colors on trip pages.",
        mockup: <CustomBrandingMockup />,
      },
    ],
  },
  {
    tab: "Promote",
    headline: "Promote",
    description:
      "Use our built-in marketing tools to share and promote your trip with ease.",
    features: [
      {
        title: "Embeddable booking pages",
        description:
          "Use your own website and embed our checkout options directly on your page.",
        mockup: <EmbedMockup />,
      },
      {
        title: "Traveler referrals & tracking",
        description:
          "Pay travelers to share your trip with unique links to track their referrals.",
        mockup: <ReferralsMockup />,
      },
      {
        title: "Affiliate program",
        description:
          "Invite affiliates to promote your trip and track their sales from your dashboard.",
        mockup: <AffiliateMockup />,
      },
    ],
  },
  {
    tab: "Sell",
    headline: "Sell",
    description:
      "Get more bookings with less effort using our flexible auto-billing payment plans and automatic inventory management.",
    features: [
      {
        title: "Flexible fee handling",
        description:
          "Pass processing fees on to the customer or hide the fees and show an all-in rate.",
        mockup: <FeeHandlingMockup />,
      },
      {
        title: "Monthly auto-billing",
        description:
          "Save time and make trips more affordable with auto-billing on monthly payment plans.",
        mockup: <AutoBillingMockup />,
      },
      {
        title: "Flexible deposit amounts",
        description:
          "Set a minimum and allow travelers to make as large of a deposit as they want.",
        mockup: <FlexDepositMockup />,
      },
      {
        title: "Traveler portal",
        description:
          "Allow guests to purchase add-ons, manage payments, and review the itinerary.",
        mockup: <TravelerPortalMockup />,
      },
      {
        title: "Inventory management",
        description:
          "Set quantity limits for bookings, packages, and add-ons.",
        mockup: <InventoryMockup />,
      },
    ],
  },
  {
    tab: "Manage",
    headline: "Manage",
    description:
      "Streamline your traveler experience with simplified data and communication management tools.",
    features: [
      {
        title: "Custom scheduled emails",
        description:
          "Set up automated email workflows for hands-off communication management.",
        mockup: <ScheduledEmailsMockup />,
      },
      {
        title: "Registration questions",
        description:
          "Collect valuable data from your travelers, like flight info or passport uploads.",
        mockup: <RegistrationMockup />,
      },
      {
        title: "Data reports & exports",
        description:
          "Track who’s paid and what they booked then export data to share with suppliers.",
        mockup: <DataExportsMockup />,
      },
      {
        title: "Dispute management",
        description: "Monitor disputes from your dashboard.",
        mockup: <DisputeMockup />,
      },
    ],
  },
  {
    tab: "Get Paid",
    headline: "Get paid",
    description:
      "Quickly and securely process payments through Stripe and receive daily payouts sent to your bank account.",
    features: [
      {
        title: "Secure payment processing",
        description:
          "Process payments quickly and securely with Apple Pay, Credit/Debit cards through Stripe.",
        mockup: <PaymentProcessingMockup />,
      },
      {
        title: "Daily payouts via Stripe",
        description:
          "Set up payouts through Stripe and get funds sent straight to your bank account daily.",
        mockup: <DailyPayoutsMockup />,
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
        ]}
      />
      <FAQSchema items={featuresFAQ} />

      <Hero
        layout="centered"
        headline="Collect Group Travel Payments Online&#x2014;Fast, Secure, and Stress-Free"
        subheadline="Accept cards, offer Buy Now Pay Later, and set flexible payment plans&#x2014;so travelers pay their way and you get paid on time, automatically."
        ctaText="Create your trip for free"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See pricing", href: "/pricing" }}
      />

      {/* Feature Sections */}
      {featureSections.map((section) => (
        <section
          key={section.tab}
          className="feature-overview"
          style={{
            background:
              section.tab === "Promote" || section.tab === "Manage"
                ? "var(--bg-light)"
                : "var(--bg-white)",
          }}
        >
          <div className="feature-overview-container">
            <ScrollReveal>
              <h2>{section.headline}</h2>
              <p className="feature-overview-subtitle">
                {section.description}
              </p>
            </ScrollReveal>

            <ScrollReveal stagger>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
                  gap: "24px",
                  marginTop: "2rem",
                }}
              >
                {section.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="hover-lift"
                    style={{
                      background: "var(--bg-white)",
                      borderRadius: "16px",
                      border: "1px solid rgba(101, 87, 125, 0.4)",
                      overflow: "hidden",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                  >
                    {feature.mockup}
                    <div style={{ padding: "24px" }}>
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          color: "var(--text-dark)",
                          marginBottom: "8px",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <FinalCTA
        headline="Collect money and manage your group trips with ease."
        subheadline="Streamline trip operations so you can focus on creating unforgettable travel experiences."
        primaryText="Create your trip for free"
        primaryHref={SIGNUP_URL}
        secondaryText="See pricing"
        secondaryHref="/pricing"
      />

      <FAQ items={featuresFAQ} />
    </>
  );
}
