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
  title: "Trip Planning Software for Groups",
  description:
    "The all-in-one trip planning software built for group travel. Booking pages, payment collection, traveler management, and automated reminders in one platform.",
  path: "/trip-planning-software",
});

const softwareFAQ = [
  {
    question: "What makes SquadTrip different from other trip planning software?",
    answer:
      "Most trip planning tools focus on itinerary building or budget splitting. SquadTrip is built specifically for group trip organizers who need to collect payments, manage bookings, and handle the business side of group travel. It combines booking pages, payment plans, traveler management, and automated communications in one platform.",
  },
  {
    question: "Can SquadTrip replace my current tools?",
    answer:
      "Yes. SquadTrip replaces the patchwork of spreadsheets, Venmo, PayPal, Google Forms, and email threads that most organizers use. Everything from trip promotion to payment collection to traveler communication happens in one place.",
  },
  {
    question: "Is SquadTrip available on mobile?",
    answer:
      "SquadTrip is fully web-based and works on any device with a browser. Your booking pages are mobile-optimized so travelers can book from their phone. You can manage your dashboard from any device as well.",
  },
  {
    question: "How secure are payments on SquadTrip?",
    answer:
      "All payments are processed through Stripe, one of the most trusted payment processors in the world. Stripe handles PCI compliance, fraud detection, and encryption. Your travelers' financial data is never stored on SquadTrip servers.",
  },
  {
    question: "Does SquadTrip integrate with other tools?",
    answer:
      "SquadTrip is designed to be your all-in-one solution so you do not need other tools. However, you can export data to CSV for use in spreadsheets or accounting software. Payouts go directly to your bank via Stripe.",
  },
  {
    question: "What kind of support does SquadTrip offer?",
    answer:
      "SquadTrip offers live chat support, email support, and a comprehensive help center with guides and tutorials. Paid plans include priority support with faster response times.",
  },
];

export default function TripPlanningSoftwarePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Trip Planning Software", href: "/trip-planning-software" },
        ]}
      />
      <FAQSchema items={softwareFAQ} />

      {/* Hero (split) */}
      <Hero
        layout="split"
        headline="Trip Planning Software for Groups"
        subheadline="Ditch the spreadsheets and scattered tools. SquadTrip is the all-in-one software built for group trip organizers who need to collect payments, manage bookings, and keep every traveler on track."
        ctaText="Try it free"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See all features", href: "/features" }}
        eyebrow="The all-in-one platform for group travel"
        mockup={
          <DashboardMockup
            tripName="Summer Europe Tour"
            collected="$56,800"
            total="$72,000"
            percent={79}
            travelers={[
              { initials: "KM", name: "Kelly M.", amount: "$3,600", status: "paid" },
              { initials: "JP", name: "James P.", amount: "$2,400", status: "partial" },
              { initials: "LH", name: "Laura H.", amount: "$3,600", status: "paid" },
              { initials: "DW", name: "Derek W.", amount: "$1,200", status: "partial" },
            ]}
          />
        }
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Cobbling Together Tools Is Costing You"
        subtitle="Using spreadsheets, Venmo, Google Forms, and group chats to run a trip wastes time and loses money."
        stats={[
          { icon: "🧩", value: 6, suffix: " tools", label: "Average tools used for one group trip" },
          { icon: "⏱️", value: 10, suffix: " hrs/wk", label: "Lost to manual coordination" },
          { icon: "💸", value: 20, suffix: "%", label: "Of payments collected late or never" },
          { icon: "📉", value: 15, suffix: "%", label: "Of sign-ups lost to confusing process" },
        ]}
        caption="Based on surveys of group trip organizers"
        ctaText="See the solution"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="One Dashboard to Run Every Trip"
          description="SquadTrip gives you a centralized command center for all your group trips. See real-time payment data, traveler rosters, and trip metrics at a glance. No more switching between spreadsheets, payment apps, and email to figure out where things stand. Everything updates in real time as travelers book and pay."
          mockup={
            <DashboardMockup
              tripName="All Trips"
              collected="$142,500"
              total="$180,000"
              percent={79}
              travelers={[
                { initials: "EU", name: "Europe Tour", amount: "$56,800", status: "paid" },
                { initials: "MR", name: "Mexico Retreat", amount: "$38,200", status: "partial" },
                { initials: "BC", name: "Bali Conference", amount: "$29,500", status: "partial" },
                { initials: "SK", name: "Ski Colorado", amount: "$18,000", status: "pending" },
              ]}
            />
          }
          highlights={[
            { icon: "📊", text: "Real-time analytics and reporting" },
            { icon: "👥", text: "Complete traveler management" },
            { icon: "🔔", text: "Automated alerts and notifications" },
            { icon: "📤", text: "Data export to CSV" },
          ]}
          bonus="Manage unlimited trips from a single dashboard with no per-trip limits."
          testimonial={{
            quote: "If it wasn't for SquadTrip, I wouldn't have been able to grow my group trips from 50 guests to 500.",
            attribution: "Collin D. Williams, Jr., CDE Antigua",
          }}
          linkText="See the dashboard"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Built-In Payment Collection"
          description="Stop chasing payments with Venmo requests and awkward reminder texts. SquadTrip processes payments through Stripe, supports automatic payment plans, and handles failed payment retries. Travelers can pay with credit cards, debit cards, Apple Pay, Google Pay, and buy-now-pay-later options like Klarna and Afterpay."
          mockup={<PaymentPlanMockup />}
          reverse
          highlights={[
            { icon: "🔄", text: "Automatic recurring billing" },
            { icon: "💳", text: "All major payment methods" },
            { icon: "🛒", text: "Buy-now-pay-later support" },
            { icon: "⏰", text: "Smart payment reminders" },
          ]}
          testimonial={{
            quote: "The payment plans have made it so much easier for me to manage my bookings.",
            attribution: "Andrew Bennett, Passport Society",
          }}
          linkText="Explore payment features"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Professional Booking Pages Without Code"
          description="Create beautiful, conversion-optimized booking pages for every trip without writing a single line of code. Add trip details, itineraries, photos, packages, room types, add-ons, and pricing. Share the link anywhere and let travelers book in minutes. Each page is mobile-friendly and designed to convert browsers into booked travelers."
          mockup={
            <BookingPageMockup
              tripTitle="Summer Europe Tour 2026"
              tripMeta="Jul 10-24 • 14 nights • Multi-city"
              packages={[
                {
                  name: "Explorer Package",
                  price: "$3,600",
                  features: ["Hotels", "Guided Tours", "Train Passes", "Welcome Dinner"],
                },
              ]}
              itinerary={[
                { day: "Day 1", title: "Arrive in Paris" },
                { day: "Day 4", title: "Train to Barcelona" },
                { day: "Day 8", title: "Fly to Rome" },
              ]}
              orderSummary={[
                { label: "Explorer Package", value: "$3,600" },
                { label: "Processing fee", value: "$216" },
              ]}
              total="$3,816"
            />
          }
          highlights={[
            { icon: "🌐", text: "No-code page builder" },
            { icon: "🎨", text: "Custom branding and design" },
            { icon: "📋", text: "Itinerary and package display" },
            { icon: "📱", text: "Mobile-first responsive design" },
          ]}
          linkText="Build your booking page"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={softwareFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="The Only Software You Need for Group Trips"
        subheadline="Create your first trip in minutes. Free to start, no credit card required."
        primaryText="Get started free"
        primaryHref={SIGNUP_URL}
        secondaryText="See all features"
        secondaryHref="/features"
      />
    </>
  );
}
