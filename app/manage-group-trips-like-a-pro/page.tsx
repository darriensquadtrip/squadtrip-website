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
  title: "Manage Group Trips Like a Pro",
  description:
    "Take control of every group trip with powerful management tools. Track payments, manage travelers, and keep every detail organized from one centralized dashboard.",
  path: "/manage-group-trips-like-a-pro",
});

const manageFAQ = [
  {
    question: "What tools does SquadTrip offer for managing group trips?",
    answer:
      "SquadTrip provides a centralized dashboard where you can track payments in real time, manage traveler rosters, send automated reminders, create professional booking pages, and set up flexible payment plans. Everything you need to manage group trips is in one place.",
  },
  {
    question: "How many group trips can I manage at the same time?",
    answer:
      "There is no limit to the number of trips you can manage simultaneously. Your dashboard gives you an overview of every active trip, including payment progress, traveler counts, and revenue collected across all trips.",
  },
  {
    question: "Can I track individual traveler payments?",
    answer:
      "Yes. The dashboard shows each traveler's payment status in real time, including how much they have paid, how much they owe, and whether they are on track with their payment plan. You can also export this data to CSV for your records.",
  },
  {
    question: "Do I need technical skills to use SquadTrip?",
    answer:
      "Not at all. SquadTrip is designed for trip organizers of all experience levels. Creating a trip, setting up payment plans, and managing travelers takes just a few clicks. No coding or technical expertise required.",
  },
  {
    question: "How does SquadTrip help me stay organized?",
    answer:
      "SquadTrip replaces spreadsheets, group chats, and scattered email threads with one organized dashboard. You get real-time payment tracking, automated reminders, traveler rosters, and exportable reports so nothing falls through the cracks.",
  },
  {
    question: "Is SquadTrip free to start?",
    answer:
      "Yes. SquadTrip offers a free plan that lets you create trips and start collecting payments right away. Paid plans with additional features start at $29 per month.",
  },
];

export default function ManageGroupTripsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Manage Group Trips Like a Pro", href: "/manage-group-trips-like-a-pro" },
        ]}
      />
      <FAQSchema items={manageFAQ} />

      {/* Hero (split) */}
      <Hero
        layout="split"
        headline="Manage Group Trips Like a Pro"
        subheadline="Stop juggling spreadsheets, Venmo requests, and group chat chaos. SquadTrip gives you one dashboard to track payments, manage travelers, and run every group trip with confidence."
        ctaText="Start managing trips"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        eyebrow="Group trip management made simple"
        mockup={
          <DashboardMockup
            tripName="Cancun Squad Trip"
            collected="$18,750"
            total="$24,000"
            percent={78}
            travelers={[
              { initials: "MJ", name: "Marcus J.", amount: "$2,500", status: "paid" },
              { initials: "SR", name: "Sarah R.", amount: "$1,800", status: "partial" },
              { initials: "AK", name: "Aisha K.", amount: "$2,500", status: "paid" },
              { initials: "BT", name: "Brian T.", amount: "$0", status: "pending" },
            ]}
          />
        }
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Group Trip Management Is Harder Than It Should Be"
        subtitle="You want to create unforgettable travel experiences, but logistics keep getting in the way."
        stats={[
          { icon: "\u23F1\uFE0F", value: 15, suffix: " hrs/wk", label: "Spent tracking payments manually" },
          { icon: "\uD83D\uDCE8", value: 50, suffix: "+", label: "Messages sent chasing payments" },
          { icon: "\uD83D\uDCC9", value: 35, suffix: "%", label: "Of travelers miss payment deadlines" },
          { icon: "\uD83E\uDDE9", value: 5, suffix: " tools", label: "Used to manage a single trip" },
        ]}
        caption="Based on surveys of group trip organizers using manual methods"
        ctaText="There's a better way"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Your Command Center for Every Group Trip"
          description="The SquadTrip dashboard gives you a bird's-eye view of every trip you are running. See total revenue collected, track individual traveler payments, and identify who needs a reminder. No more digging through spreadsheets or scrolling through payment apps to figure out where things stand."
          mockup={
            <DashboardMockup
              tripName="All Trips Overview"
              collected="$67,200"
              total="$86,000"
              percent={78}
              travelers={[
                { initials: "CT", name: "Cancun Trip", amount: "$18,750", status: "paid" },
                { initials: "JR", name: "Jamaica Retreat", amount: "$24,300", status: "partial" },
                { initials: "MG", name: "Miami Getaway", amount: "$14,150", status: "partial" },
                { initials: "NV", name: "Nashville Vibes", amount: "$10,000", status: "pending" },
              ]}
            />
          }
          highlights={[
            { icon: "\uD83D\uDCCA", text: "Real-time payment tracking across all trips" },
            { icon: "\uD83D\uDC65", text: "Traveler roster with payment status" },
            { icon: "\uD83D\uDCE4", text: "Export reports to CSV" },
            { icon: "\uD83D\uDD14", text: "Automated payment alerts" },
          ]}
          bonus="Your dashboard updates in real time so you always know exactly where every trip stands."
          testimonial={{
            quote: "If it wasn't for SquadTrip, I wouldn't have been able to grow my group trips from 50 guests to 500.",
            attribution: "Collin D. Williams, Jr., CDE Antigua",
          }}
          linkText="See the dashboard"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Automated Payment Plans That Do the Work for You"
          description="Set up a payment schedule for each trip and let SquadTrip handle the rest. Travelers are billed automatically each month, failed payments are retried, and reminders go out on schedule. You spend zero time chasing money and more time building incredible travel experiences."
          mockup={<PaymentPlanMockup />}
          reverse
          highlights={[
            { icon: "\uD83D\uDD04", text: "Auto-billing on a schedule you set" },
            { icon: "\u23F0", text: "Automated email reminders" },
            { icon: "\uD83D\uDCB3", text: "Credit cards, Apple Pay, and more" },
            { icon: "\uD83D\uDED2", text: "Buy-now-pay-later options available" },
          ]}
          testimonial={{
            quote: "The payment plans have made it so much easier for me to manage my bookings.",
            attribution: "Andrew Bennett, Passport Society",
          }}
          linkText="Set up payment plans"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Professional Booking Pages That Convert"
          description="Create a polished booking page for every trip complete with itineraries, package options, room selections, and add-ons. Share the link with your group and let travelers book and pay online. No more back-and-forth emails or manual signup forms."
          mockup={
            <BookingPageMockup
              tripTitle="Cancun Squad Trip 2026"
              tripMeta="Jun 12-18 \u2022 6 nights \u2022 All-inclusive resort"
              packages={[
                {
                  name: "Standard Room",
                  price: "$2,200",
                  features: ["Ocean View", "All Meals", "Open Bar", "Airport Transfer"],
                },
              ]}
              itinerary={[
                { day: "Day 1", title: "Arrival & Welcome Dinner" },
                { day: "Day 2", title: "Beach Day & Snorkeling" },
                { day: "Day 3", title: "Chichen Itza Excursion" },
              ]}
              orderSummary={[
                { label: "Standard Room", value: "$2,200" },
                { label: "Processing fee", value: "$132" },
              ]}
              total="$2,332"
            />
          }
          highlights={[
            { icon: "\uD83C\uDF10", text: "Shareable booking link" },
            { icon: "\uD83C\uDFA8", text: "Custom branding and photos" },
            { icon: "\uD83D\uDCCB", text: "Detailed trip itinerary" },
            { icon: "\uD83D\uDCF1", text: "Mobile-friendly design" },
          ]}
          linkText="Create your booking page"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={manageFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Ready to Manage Trips Like a Pro?"
        subheadline="Create your first trip in minutes. Free to start, no credit card required."
        primaryText="Start managing trips"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
