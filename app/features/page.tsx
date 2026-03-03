import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { FeatureBentoGrid } from "@/components/sections/FeatureBentoGrid";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { FAQ } from "@/components/ui/FAQ";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BookingPageMockup } from "@/components/mockups/BookingPageMockup";
import { ShareLinkMockup } from "@/components/mockups/ShareLinkMockup";
import { PaymentPlanMockup } from "@/components/mockups/PaymentPlanMockup";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { SIGNUP_URL } from "@/lib/constants";

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

const comparisonRows = [
  { task: "Collect payments", diy: "Venmo, Zelle, spreadsheets", squadtrip: "Automated payment plans" },
  { task: "Send reminders", diy: "Manual texts & emails", squadtrip: "Auto email + SMS reminders" },
  { task: "Track who paid", diy: "Spreadsheet updates", squadtrip: "Real-time dashboard" },
  { task: "Booking page", diy: "Google Forms or DMs", squadtrip: "Professional booking page" },
  { task: "Refunds", diy: "Manual bank transfers", squadtrip: "One-click refunds" },
  { task: "Get paid", diy: "Wait for everyone", squadtrip: "Daily Stripe payouts" },
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
        layout="split"
        headline="Everything You Need to Run Group Trips"
        subheadline="Collect group travel payments online — fast, secure, and stress-free. Accept cards, offer Buy Now Pay Later, and set flexible payment plans."
        ctaText="Create your trip for free"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See pricing", href: "/pricing" }}
        eyebrow="Trusted by 2,000+ organizers"
        mockup={<DashboardMockup />}
      />

      <FeatureBentoGrid />

      <div className="feature-blocks">
        <FeatureBlock
          title="Build a Professional Booking Page"
          description="Create stunning trip pages with itineraries, packages, add-ons, and custom branding. Your travelers see a polished checkout — not a Google Form."
          mockup={<BookingPageMockup />}
          highlights={[
            { icon: "\uD83C\uDFA8", text: "Custom branding" },
            { icon: "\uD83D\uDCCB", text: "Itineraries" },
            { icon: "\uD83C\uDF81", text: "Packages & add-ons" },
            { icon: "\uD83D\uDCF1", text: "Mobile-friendly" },
          ]}
          testimonial={{
            quote: "The booking pages look so professional. My travelers trust it immediately.",
            attribution: "Chef Ahki Taylor, The Supernatural Woman Retreats",
          }}
          linkText="Create your first trip"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Share One Link, Reach Everyone"
          description="Get a short, shareable booking link for every trip. Embed it on your website, share on social media, or text it directly to travelers."
          mockup={<ShareLinkMockup />}
          reverse
          highlights={[
            { icon: "\uD83D\uDD17", text: "Short links" },
            { icon: "\uD83C\uDF10", text: "Embed on website" },
            { icon: "\uD83D\uDCE7", text: "Email campaigns" },
            { icon: "\uD83D\uDCF2", text: "Text & social" },
          ]}
          linkText="See how promotion works"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Automatic Payment Plans That Collect Themselves"
          description="Set up monthly auto-billing and let SquadTrip handle the rest. Failed payments are retried automatically, and travelers get reminders without you lifting a finger."
          mockup={<PaymentPlanMockup />}
          highlights={[
            { icon: "\uD83D\uDD04", text: "Auto-retry failed payments" },
            { icon: "\u23F0", text: "Scheduled reminders" },
            { icon: "\uD83D\uDCB3", text: "Apple Pay & cards" },
            { icon: "\uD83D\uDED2", text: "Klarna & Afterpay" },
          ]}
          bonus="Travelers can also pay in full upfront or use buy-now-pay-later options."
          testimonial={{
            quote: "Switching to SquadTrip was one of the best decisions I've made for my business.",
            attribution: "Andrew Bennett, Passport Society",
          }}
          linkText="Set up payment plans"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Manage Everything From One Dashboard"
          description="See who's paid, who hasn't, and how much you've collected — all in real time. Export data anytime for your records or suppliers."
          mockup={<DashboardMockup />}
          reverse
          highlights={[
            { icon: "\uD83D\uDCCA", text: "Real-time tracking" },
            { icon: "\uD83D\uDCE4", text: "Export to CSV" },
            { icon: "\uD83D\uDD14", text: "Payment alerts" },
            { icon: "\uD83D\uDCB0", text: "Revenue reports" },
          ]}
          linkText="See the dashboard"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Get Paid Fast With Stripe"
          description="Payments are processed securely through Stripe and deposited directly to your bank account. Set up daily or weekly payouts."
          mockup={
            <DashboardMockup
              tripName="Payout Summary"
              collected="$24,800"
              total="$28,000"
              percent={89}
              travelers={[
                { initials: "ST", name: "Stripe Payout", amount: "$4,200", status: "paid" },
                { initials: "ST", name: "Stripe Payout", amount: "$3,800", status: "paid" },
                { initials: "ST", name: "Pending", amount: "$2,400", status: "partial" },
              ]}
            />
          }
          highlights={[
            { icon: "\u26A1", text: "Daily payouts" },
            { icon: "\uD83D\uDD12", text: "Bank-level security" },
            { icon: "\uD83C\uDF0D", text: "International cards" },
            { icon: "\uD83E\uDDFE", text: "Automatic receipts" },
          ]}
          linkText="Start getting paid"
          linkHref={SIGNUP_URL}
        />
      </div>

      <ComparisonTable
        headline="Why Not Just DIY?"
        intro="You could manage everything yourself. Here's what that looks like."
        rows={comparisonRows}
      />

      <TrustSignals />

      <FAQ items={featuresFAQ} />

      <FinalCTA />
    </>
  );
}
