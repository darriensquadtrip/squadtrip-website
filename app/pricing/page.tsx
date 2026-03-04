import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { PricingCards } from "@/components/sections/PricingCards";
import { FeatureHighlights } from "@/components/sections/FeatureHighlights";
import { FullFeatureList } from "@/components/sections/FullFeatureList";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { FAQ } from "@/components/ui/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
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
      "Processing fees are 6%. This includes the merchant fee (2.9% + 30\u00a2) that Stripe charges for processing credit card payments. So if your trip costs $1,000, your traveler pays $1,060\u2014you receive $1,000, and the $60 covers Stripe and our platform fee. You can hide fees from travelers and use a pricing calculator to adjust rates accordingly.",
  },
  {
    question: "How do I get paid?",
    answer:
      "When your customers make a payment on our website, the funds will be processed on your Stripe account and sent to your bank account. You can set up daily or weekly payouts. SquadTrip never holds your money\u2014it goes directly from your traveler\u2019s card to your bank through Stripe. Stripe usually takes 7-14 days to release your first payment, after which you can receive payments any time you desire.",
  },
  {
    question: "What payment options are available?",
    answer:
      "Credit card, Apple Pay, or installment plans through Klarna, AfterPay, Affirm, or auto-billed monthly payment plans. Travelers can also pay in full upfront if they prefer. You control which payment options are available for each trip.",
  },
  {
    question: "Do you send receipts and payment reminders?",
    answer:
      "Yes! We send receipts after every payment, confirmation emails when travelers book, payment reminders before each installment is due, and payment failure notifications if a charge doesn\u2019t go through. Everything is automatic\u2014you don\u2019t have to send a single reminder manually.",
  },
  {
    question: "Can travelers change credit card info & retry payments?",
    answer:
      "Yes, travelers can change their credit card, view receipts, check their balance, and manage their payments through the traveler portal. If a payment fails, SquadTrip automatically retries and notifies the traveler to update their card if needed.",
  },
  {
    question: "What happens if I cancel my Launch subscription?",
    answer:
      "If you cancel your Launch plan, your account reverts to the free Starter plan at the end of your billing period. You\u2019ll keep all your existing trips and traveler data, but Launch-only features like custom branding, promo codes, and BNPL options will be disabled. You can re-subscribe at any time.",
  },
  {
    question: "Can I pass the processing fee to my travelers?",
    answer:
      "Yes! Many organizers build the 6% fee into their trip pricing so travelers cover the cost. We provide a pricing calculator to help you figure out the exact amount to charge so you receive the full amount you need after fees.",
  },
];

const comparisonRows = [
  {
    task: "Platform fee",
    diy: "8-10% on other platforms",
    squadtrip: "6% all-inclusive",
  },
  {
    task: "Stripe processing",
    diy: "Extra 2.9% + 30\u00a2 on top",
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

      {/* Pricing Cards with monthly/yearly toggle */}
      <PricingCards />

      {/* Feature Highlights (included in all plans) */}
      <FeatureHighlights />

      {/* Full Feature List (categorized) */}
      <FullFeatureList />

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
            "If it wasn\u2019t for SquadTrip, I wouldn\u2019t have been able to grow my group trips from 50 guests to 500.",
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
              "The platform\u2019s ability to track trip package inventory and offer payment plans has made it easier for me to manage my bookings.",
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
