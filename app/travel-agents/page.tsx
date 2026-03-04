import { generatePageMetadata } from "@/lib/metadata";
import { SIGNUP_URL } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Hero } from "@/components/sections/Hero";
import { ProblemValidation } from "@/components/sections/ProblemValidation";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { FAQ } from "@/components/ui/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { PaymentPlanMockup } from "@/components/mockups/PaymentPlanMockup";
import { BookingPageMockup } from "@/components/mockups/BookingPageMockup";

export const metadata = generatePageMetadata({
  title: "Collect Payments for Your Travel Agency Group Trips",
  description:
    "Everything you need to plan a group trip stress free. Create booking pages, set up flexible payment plans, and manage your travel agency trips with SquadTrip.",
  path: "/travel-agents",
});

const agencyFAQ = [
  {
    question: "How does SquadTrip work for travel agencies?",
    answer:
      "SquadTrip lets you create professional booking pages for each trip, set up flexible payment plans, and track all your traveler payments from one dashboard. Your clients book and pay online, and you get paid directly via Stripe.",
  },
  {
    question: "What are the costs or fees?",
    answer:
      "SquadTrip offers a free version and paid plans starting at $29 per month. The booking fee is 6%, which includes Stripe's processing costs.",
  },
  {
    question: "Can I manage multiple trips at the same time?",
    answer:
      "Yes. Your agency dashboard shows all active trips with real-time payment status, traveler counts, and revenue collected. You can manage dozens of trips simultaneously.",
  },
  {
    question: "How do payment plans work for my clients?",
    answer:
      "You set up a payment schedule for each trip and your travelers are billed automatically each month. Failed payments are retried automatically, and travelers get email reminders without you lifting a finger.",
  },
  {
    question: "Can I customize booking pages with my agency branding?",
    answer:
      "Yes. Each booking page can be customized with your agency logo, colors, trip photos, itineraries, and package options so travelers see a polished, professional experience.",
  },
  {
    question: "Can I schedule a demo?",
    answer:
      "Of course! Visit our website and click the chat icon to schedule a demo with our team.",
  },
];

const comparisonRows = [
  {
    task: "Collect client payments",
    diy: "Manual invoices, Zelle, checks",
    squadtrip: "Automated payment plans",
  },
  {
    task: "Send payment reminders",
    diy: "Manual emails and phone calls",
    squadtrip: "Auto email + SMS reminders",
  },
  {
    task: "Track who has paid",
    diy: "Spreadsheets and paper ledgers",
    squadtrip: "Real-time dashboard",
  },
  {
    task: "Trip booking page",
    diy: "PDF flyers and email threads",
    squadtrip: "Professional booking page",
  },
  {
    task: "Handle refunds",
    diy: "Manual bank transfers",
    squadtrip: "One-click refunds",
  },
  {
    task: "Receive payouts",
    diy: "Wait for all payments to clear",
    squadtrip: "Daily Stripe payouts",
  },
];

export default function TravelAgentsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Travel Agents", href: "/travel-agents" },
        ]}
      />
      <FAQSchema items={agencyFAQ} />

      {/* Hero (split) */}
      <Hero
        layout="split"
        headline="Collect Payments for Your Travel Agency Group Trips"
        subheadline="Create booking pages, set up flexible payment plans, and manage all your agency trips from one dashboard. Stop chasing invoices and start scaling."
        ctaText="Start planning today"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        eyebrow="Built for travel agencies"
        mockup={
          <DashboardMockup
            tripName="Bali Retreat 2026"
            collected="$42,600"
            total="$54,000"
            percent={79}
            travelers={[
              { initials: "LR", name: "Lisa R.", amount: "$2,400", status: "paid" },
              { initials: "DP", name: "David P.", amount: "$1,600", status: "partial" },
              { initials: "KW", name: "Karen W.", amount: "$2,400", status: "paid" },
              { initials: "TJ", name: "Tanya J.", amount: "$0", status: "pending" },
            ]}
          />
        }
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Running a Travel Agency Shouldn't Feel Like This"
        subtitle="You started an agency to create amazing experiences, not to chase payments."
        stats={[
          { icon: "⏱️", value: 12, suffix: " hrs/wk", label: "Spent billing and invoicing clients" },
          { icon: "📨", value: 40, suffix: "+", label: "Payment reminder emails sent monthly" },
          { icon: "📉", value: 30, suffix: "%", label: "Of travelers miss a payment deadline" },
          { icon: "📋", value: 8, suffix: " trips", label: "Managed in spreadsheets at once" },
        ]}
        caption="Based on surveys of travel agency owners using manual billing"
        ctaText="There's a better way"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Automatic Payment Plans That Collect Themselves"
          description="Set up monthly auto-billing for every trip and let SquadTrip handle collections. Failed payments are retried automatically, and your travelers get reminders without you making a single phone call."
          mockup={<PaymentPlanMockup />}
          highlights={[
            { icon: "🔄", text: "Auto-retry failed payments" },
            { icon: "⏰", text: "Scheduled email reminders" },
            { icon: "💳", text: "Apple Pay & cards accepted" },
            { icon: "🛒", text: "Klarna & Afterpay available" },
          ]}
          bonus="Travelers can also pay in full upfront or use buy-now-pay-later options."
          testimonial={{
            quote: "The payment plans have made it so much easier for me to manage my bookings.",
            attribution: "Andrew Bennett, Passport Society",
          }}
          linkText="Set up payment plans"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Build Professional Booking Pages for Every Trip"
          description="Create polished trip pages with itineraries, packages, room types, and add-ons. Your travelers see a branded checkout experience that builds trust and converts."
          mockup={
            <BookingPageMockup
              tripTitle="Greek Islands Cruise"
              tripMeta="Sep 8-15 • 7 nights • All-inclusive"
              packages={[
                {
                  name: "Interior Cabin",
                  price: "$1,800",
                  features: ["Cabin", "Meals", "Entertainment", "Port Excursions"],
                },
              ]}
              itinerary={[
                { day: "Day 1", title: "Embark from Athens" },
                { day: "Day 2", title: "Mykonos Beach Day" },
                { day: "Day 3", title: "Santorini Sunset Tour" },
              ]}
              orderSummary={[
                { label: "Interior Cabin", value: "$1,800" },
                { label: "Processing fee", value: "$108" },
              ]}
              total="$1,908"
            />
          }
          reverse
          highlights={[
            { icon: "🎨", text: "Custom agency branding" },
            { icon: "📋", text: "Detailed itineraries" },
            { icon: "🎁", text: "Packages & add-ons" },
            { icon: "📱", text: "Mobile-friendly checkout" },
          ]}
          linkText="Create your first trip"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Manage All Your Trips From One Dashboard"
          description="See every trip your agency is running, who has paid, who owes, and how much you've collected across all trips in real time. Export data for your records or share with suppliers."
          mockup={
            <DashboardMockup
              tripName="Agency Overview"
              collected="$127,400"
              total="$162,000"
              percent={79}
              travelers={[
                { initials: "BR", name: "Bali Retreat", amount: "$42,600", status: "paid" },
                { initials: "GC", name: "Greek Cruise", amount: "$38,200", status: "partial" },
                { initials: "CR", name: "Costa Rica", amount: "$28,800", status: "partial" },
                { initials: "SK", name: "Ski Whistler", amount: "$17,800", status: "pending" },
              ]}
            />
          }
          highlights={[
            { icon: "📊", text: "Real-time payment tracking" },
            { icon: "📤", text: "Export to CSV" },
            { icon: "🔔", text: "Payment alerts" },
            { icon: "💰", text: "Revenue reports" },
          ]}
          linkText="See the dashboard"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* Testimonials */}
      <TestimonialsSection
        headline="Trusted by Travel Agencies Nationwide"
        subtitle="Here's what agency owners say about running trips with SquadTrip."
        featured={{
          quote:
            "Switching to SquadTrip was one of the best decisions I've made for my business. The platform's ability to track trip package inventory and offer payment plans has made it easier for me to manage my bookings.",
          author: "Andrew Bennett",
          company: "Passport Society",
          initials: "AB",
          badge: "Featured Agency",
          metrics: [
            { value: "3x", label: "Booking efficiency" },
            { value: "90%", label: "Collection rate" },
          ],
        }}
        side={[
          {
            quote:
              "SquadTrip streamlines the process of tracking payment plans, promoting the itinerary, and selling extra add-ons.",
            author: "Chef Ahki Taylor",
            company: "The Supernatural Woman Retreats",
            initials: "CA",
          },
          {
            quote:
              "If it wasn't for SquadTrip, I wouldn't have been able to grow my group trips from 50 guests to 500.",
            author: "Collin D. Williams, Jr.",
            company: "CDE Antigua",
            initials: "CW",
          },
        ]}
      />

      {/* Comparison Table */}
      <ComparisonTable
        headline="Manual Agency Billing vs. SquadTrip"
        intro="You could keep managing payments yourself. Here's what that looks like compared to SquadTrip."
        columnHeaders={["Task", "Manual Billing", "SquadTrip"]}
        rows={comparisonRows}
        ctaText="Try SquadTrip free"
        ctaHref={SIGNUP_URL}
      />

      {/* FAQ */}
      <FAQ items={agencyFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Ready to Streamline Your Agency?"
        subheadline="Create your first trip in 10 minutes. Free to start, no credit card required."
        primaryText="Create your trip for free"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
