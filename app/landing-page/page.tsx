import { generatePageMetadata } from "@/lib/metadata";
import { SIGNUP_URL } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Hero } from "@/components/sections/Hero";
import { ProblemValidation } from "@/components/sections/ProblemValidation";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { FAQ } from "@/components/ui/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { PaymentPlanMockup } from "@/components/mockups/PaymentPlanMockup";
import { BookingPageMockup } from "@/components/mockups/BookingPageMockup";

export const metadata = generatePageMetadata({
  title: "SquadTrip: Group Trip Planning Platform",
  description:
    "SquadTrip is the all-in-one platform for group trip organizers. Create booking pages, set up payment plans, and manage travelers from one dashboard. Free to start.",
  path: "/landing-page",
});

const landingFAQ = [
  {
    question: "What is SquadTrip?",
    answer:
      "SquadTrip is the all-in-one platform for group trip organizers. It lets you create professional booking pages, set up automatic payment plans, track who has paid, and manage all your travelers from one centralized dashboard. Whether you are planning a friend group vacation or running a travel business, SquadTrip handles the logistics so you can focus on the experience.",
  },
  {
    question: "Who is SquadTrip for?",
    answer:
      "SquadTrip is built for anyone who organizes group travel. That includes travel agents, tour operators, retreat organizers, destination wedding planners, corporate event planners, and everyday people planning group vacations with friends and family. If you are collecting money from a group for travel, SquadTrip is for you.",
  },
  {
    question: "How much does SquadTrip cost?",
    answer:
      "SquadTrip offers a free plan with everything you need to create trips and collect payments. The booking fee is 6% per transaction which includes Stripe processing. Paid plans starting at $29 per month offer lower fees, custom branding, and additional features. No credit card is required to sign up.",
  },
  {
    question: "How do I get started?",
    answer:
      "Sign up for a free account, create your first trip by adding details and pricing, set up a payment plan if desired, and share your booking link with travelers. Most organizers have their first trip live and accepting bookings within 15 minutes of signing up.",
  },
  {
    question: "Is SquadTrip secure?",
    answer:
      "Yes. All payments are processed through Stripe, which is PCI Level 1 certified, the highest level of payment security certification. Your travelers' financial data is encrypted and never stored on SquadTrip servers. We also use SSL encryption across the entire platform.",
  },
  {
    question: "Can I try SquadTrip before committing?",
    answer:
      "Absolutely. The free plan lets you create trips and start collecting payments with no monthly fee and no credit card required. You only pay the booking fee when travelers actually make payments. There is no risk and no commitment to try SquadTrip.",
  },
];

export default function LandingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "SquadTrip", href: "/landing-page" },
        ]}
      />
      <FAQSchema items={landingFAQ} />

      {/* Hero (split) */}
      <Hero
        layout="split"
        headline="Group Trips, Organized and Paid For"
        subheadline="SquadTrip is the all-in-one platform that helps you create booking pages, collect payments automatically, and manage every group trip from one dashboard. Stop chasing payments and start creating amazing travel experiences."
        ctaText="Get started free"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        eyebrow="The #1 platform for group trip organizers"
        mockup={
          <DashboardMockup
            tripName="My Trips Dashboard"
            collected="$84,200"
            total="$108,000"
            percent={78}
            travelers={[
              { initials: "BC", name: "Bali Crew Trip", amount: "$32,400", status: "paid" },
              { initials: "MR", name: "Mexico Retreat", amount: "$24,600", status: "partial" },
              { initials: "GI", name: "Greek Islands", amount: "$18,200", status: "partial" },
              { initials: "SK", name: "Ski Aspen", amount: "$9,000", status: "pending" },
            ]}
          />
        }
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Organizing Group Trips Is Harder Than It Needs to Be"
        subtitle="Between collecting money, tracking bookings, and coordinating details, group trips can feel like a second job."
        stats={[
          { icon: "\u23F1\uFE0F", value: 15, suffix: " hrs", label: "Average time spent organizing one trip" },
          { icon: "\uD83D\uDCE8", value: 50, suffix: "+", label: "Messages sent chasing payments" },
          { icon: "\uD83D\uDCC9", value: 30, suffix: "%", label: "Of travelers miss a payment deadline" },
          { icon: "\uD83E\uDDE9", value: 5, suffix: " apps", label: "Used to manage a single group trip" },
        ]}
        caption="Based on surveys of group trip organizers"
        ctaText="There's a better way"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Create Professional Booking Pages"
          description="Build beautiful booking pages for every trip with itineraries, photos, packages, room types, add-ons, and clear pricing. Share the link with your group and let travelers book themselves online. No coding, no design skills needed. Each page is mobile-friendly and designed to convert visitors into booked travelers."
          mockup={
            <BookingPageMockup
              tripTitle="Bali Crew Trip 2026"
              tripMeta="Oct 5-14 \u2022 9 nights \u2022 Luxury villa"
              packages={[
                {
                  name: "Villa Room",
                  price: "$2,700",
                  features: ["Private Room", "All Meals", "Pool & Spa", "Cultural Tours"],
                },
              ]}
              itinerary={[
                { day: "Day 1", title: "Arrive in Bali" },
                { day: "Day 2", title: "Ubud Temple Tour" },
                { day: "Day 3", title: "Rice Terrace Trek" },
              ]}
              orderSummary={[
                { label: "Villa Room", value: "$2,700" },
                { label: "Processing fee", value: "$162" },
              ]}
              total="$2,862"
            />
          }
          highlights={[
            { icon: "\uD83C\uDF10", text: "Shareable booking link" },
            { icon: "\uD83C\uDFA8", text: "Professional design" },
            { icon: "\uD83D\uDCCB", text: "Itinerary and package display" },
            { icon: "\uD83D\uDCF1", text: "Mobile-optimized" },
          ]}
          bonus="Most organizers set up their first booking page in under 15 minutes."
          testimonial={{
            quote: "SquadTrip streamlines the process of tracking payment plans, promoting the itinerary, and selling extra add-ons.",
            attribution: "Chef Ahki Taylor, The Supernatural Woman Retreats",
          }}
          linkText="Create your booking page"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Collect Payments on Autopilot"
          description="Set up automatic payment plans and let SquadTrip handle the billing. Travelers are charged on schedule, get email reminders before each payment, and receive receipts automatically. Failed payments are retried without any action from you. Accept credit cards, debit cards, Apple Pay, Google Pay, Klarna, and Afterpay."
          mockup={<PaymentPlanMockup />}
          reverse
          highlights={[
            { icon: "\uD83D\uDD04", text: "Automatic monthly billing" },
            { icon: "\u23F0", text: "Smart payment reminders" },
            { icon: "\uD83D\uDCB3", text: "All major payment methods" },
            { icon: "\uD83D\uDED2", text: "Buy-now-pay-later options" },
          ]}
          testimonial={{
            quote: "The payment plans have made it so much easier for me to manage my bookings.",
            attribution: "Andrew Bennett, Passport Society",
          }}
          linkText="Set up payment plans"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Manage Everything From One Dashboard"
          description="Your SquadTrip dashboard is the central hub for all your trips. See real-time payment data, traveler rosters, booking notifications, and revenue totals. Manage multiple trips simultaneously, export data for your records, and always know exactly where every trip stands. No more spreadsheets, no more guesswork."
          mockup={
            <DashboardMockup
              tripName="Organizer Overview"
              collected="$84,200"
              total="$108,000"
              percent={78}
              travelers={[
                { initials: "BC", name: "Bali Trip", amount: "$32,400", status: "paid" },
                { initials: "MR", name: "Mexico Retreat", amount: "$24,600", status: "partial" },
                { initials: "GI", name: "Greek Islands", amount: "$18,200", status: "partial" },
                { initials: "SK", name: "Ski Aspen", amount: "$9,000", status: "pending" },
              ]}
            />
          }
          highlights={[
            { icon: "\uD83D\uDCCA", text: "Real-time analytics" },
            { icon: "\uD83D\uDC65", text: "Traveler management" },
            { icon: "\uD83D\uDD14", text: "Booking notifications" },
            { icon: "\uD83D\uDCE4", text: "CSV data export" },
          ]}
          testimonial={{
            quote: "If it wasn't for SquadTrip, I wouldn't have been able to grow my group trips from 50 guests to 500.",
            attribution: "Collin D. Williams, Jr., CDE Antigua",
          }}
          linkText="See the dashboard"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={landingFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Ready to Organize Your Next Group Trip?"
        subheadline="Create your first trip in minutes. Free to start, no credit card required."
        primaryText="Get started free"
        primaryHref={SIGNUP_URL}
        secondaryText="See pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
