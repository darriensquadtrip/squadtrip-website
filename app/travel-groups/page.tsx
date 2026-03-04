import { generatePageMetadata } from "@/lib/metadata";
import { SIGNUP_URL } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Hero } from "@/components/sections/Hero";
import { ProblemValidation } from "@/components/sections/ProblemValidation";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BookingPageMockup } from "@/components/mockups/BookingPageMockup";
import { PaymentPlanMockup } from "@/components/mockups/PaymentPlanMockup";
import { EmailMockup } from "@/components/mockups/EmailMockup";

export const metadata = generatePageMetadata({
  title: "Collect Payments for Your Travel Group",
  description:
    "Everything you need to plan a group trip stress free. Create booking pages, set up flexible payment plans, and manage your travel group with SquadTrip.",
  path: "/travel-groups",
});

export default function TravelGroupsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Travel Groups", href: "/travel-groups" },
        ]}
      />

      {/* Hero (split) */}
      <Hero
        layout="split"
        headline="Collect Payments for Your Travel Group"
        subheadline="Create a booking page, set up automatic payment plans, and track every dollar — so you can focus on the trip, not the spreadsheet."
        ctaText="Start planning today"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        eyebrow="Trusted by 2,000+ group trip organizers"
        mockup={<BookingPageMockup />}
      />

      {/* ProblemValidation — reuse homepage stats */}
      <ProblemValidation />

      {/* HowItWorks — 3 steps */}
      <HowItWorks
        steps={[
          {
            step: "1",
            title: "Create Your Trip",
            description:
              "Build a professional booking page with your itinerary, packages, add-ons, and pricing in minutes.",
          },
          {
            step: "2",
            title: "Share With Your Group",
            description:
              "Send your booking link to travelers. They can view the trip, select their package, and pay online.",
          },
          {
            step: "3",
            title: "Track & Get Paid",
            description:
              "Monitor payments in real-time, send automated reminders, and receive payouts directly to your bank.",
          },
        ]}
      />

      {/* FeatureBlock — Payment Plans */}
      <div className="feature-blocks">
        <FeatureBlock
          title="Automatic Payment Plans That Collect Themselves"
          description="Set up monthly auto-billing and let SquadTrip handle the rest. Failed payments are retried automatically, and travelers get reminders without you lifting a finger."
          mockup={<PaymentPlanMockup />}
          highlights={[
            { icon: "🔄", text: "Auto-retry failed payments" },
            { icon: "⏰", text: "Scheduled reminders" },
            { icon: "💳", text: "Apple Pay & cards" },
            { icon: "🛒", text: "Klarna & Afterpay" },
          ]}
          bonus="Travelers can also pay in full upfront or use buy-now-pay-later options."
          linkText="Set up payment plans"
          linkHref={SIGNUP_URL}
        />

        {/* FeatureBlock — Email & SMS */}
        <FeatureBlock
          title="Keep Your Group in the Loop"
          description="Send payment reminders, trip updates, and promotional emails to your entire group. Automated notifications mean no one misses a deadline."
          mockup={<EmailMockup />}
          reverse
          highlights={[
            { icon: "📧", text: "Payment reminders" },
            { icon: "📲", text: "SMS notifications" },
            { icon: "📣", text: "Trip announcements" },
            { icon: "✅", text: "Confirmation emails" },
          ]}
          testimonial={{
            quote:
              "SquadTrip streamlines the process of tracking payment plans, promoting the itinerary, and selling extra add-ons.",
            attribution: "Chef Ahki Taylor, The Supernatural Woman Retreats",
          }}
          linkText="See communication tools"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* TestimonialsSection — Collin D. Williams featured */}
      <TestimonialsSection
        headline="Trusted by 2,000+ Trip Organizers"
        subtitle="Here's what real organizers say about SquadTrip."
        featured={{
          quote:
            "If it wasn't for SquadTrip, I wouldn't have been able to grow my group trips from 50 guests to 500.",
          author: "Collin D. Williams Jr.",
          company: "CDE Antigua",
          initials: "CW",
          badge: "Group Trip Organizer",
          metrics: [
            { value: "50→500", label: "Travelers" },
            { value: "10x", label: "Growth" },
          ],
        }}
        side={[
          {
            quote:
              "SquadTrip streamlines the process of tracking payment plans, promoting the itinerary, and selling extra add-ons.",
            author: "Chef Ahki",
            company: "The Supernatural Woman Retreats",
            initials: "CA",
            badge: "Retreat Organizer",
          },
          {
            quote:
              "Switching to SquadTrip was one of the best decisions I've made for my business. The platform's ability to track trip package inventory and offer payment plans has made it easier for me to manage my bookings.",
            author: "Andrew Bennett",
            company: "Passport Society",
            initials: "AB",
            badge: "Travel Agent",
          },
        ]}
      />

      {/* FinalCTA */}
      <FinalCTA
        headline="Ready to Grow Your Travel Group?"
        subheadline="Create your first trip in 10 minutes. Free to start, no credit card required."
        primaryText="Create your trip for free"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
