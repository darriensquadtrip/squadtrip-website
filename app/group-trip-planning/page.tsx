import { generatePageMetadata } from "@/lib/metadata";
import { SIGNUP_URL } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Hero } from "@/components/sections/Hero";
import { ProblemValidation } from "@/components/sections/ProblemValidation";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { FAQ } from "@/components/ui/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BookingPageMockup } from "@/components/mockups/BookingPageMockup";
import { PaymentPlanMockup } from "@/components/mockups/PaymentPlanMockup";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";

export const metadata = generatePageMetadata({
  title: "Group Trip Planning Made Easy",
  description:
    "Plan group trips from start to finish with SquadTrip. Create booking pages, collect payments, manage travelers, and handle every detail in one organized platform.",
  path: "/group-trip-planning",
});

const planningFAQ = [
  {
    question: "How does SquadTrip simplify group trip planning?",
    answer:
      "SquadTrip handles the hardest parts of group trip planning: collecting payments, tracking who has booked, and keeping everyone informed. You create a booking page, share the link, and travelers sign up and pay online. The dashboard shows you everything in real time.",
  },
  {
    question: "Can I plan different types of group trips?",
    answer:
      "Absolutely. SquadTrip works for all kinds of group trips including destination vacations, bachelor and bachelorette parties, family reunions, corporate retreats, wellness retreats, ski trips, cruises, and more. If you are organizing travel for a group, SquadTrip has you covered.",
  },
  {
    question: "How do travelers sign up for a trip?",
    answer:
      "You create a booking page with all the trip details, packages, and pricing. Then you share the link with your group via text, email, or social media. Travelers visit the page, select their package, and pay online. It takes just a few minutes.",
  },
  {
    question: "Can travelers pay in installments?",
    answer:
      "Yes. You can set up automatic payment plans so travelers pay in monthly installments instead of one lump sum. This makes trips more accessible and increases your sign-up rate. SquadTrip handles billing, reminders, and retry logic automatically.",
  },
  {
    question: "What happens if a traveler needs to cancel?",
    answer:
      "You control your own refund policy. SquadTrip makes it easy to issue full or partial refunds with just a few clicks. You can set refund deadlines and policies on your booking page so travelers know the terms upfront.",
  },
  {
    question: "Is there a limit on group size?",
    answer:
      "No. SquadTrip supports groups of any size, from a small friend group of 6 people to large organized trips with 500 or more travelers. The platform scales with you.",
  },
];

export default function GroupTripPlanningPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Group Trip Planning", href: "/group-trip-planning" },
        ]}
      />
      <FAQSchema items={planningFAQ} />

      {/* Hero (split) */}
      <Hero
        layout="split"
        headline="Group Trip Planning Made Easy"
        subheadline="From the first idea to the final headcount, SquadTrip gives you everything you need to plan, promote, and manage group trips. Create a booking page, collect payments, and track every traveler from one platform."
        ctaText="Start planning your trip"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "Explore features", href: "/features" }}
        eyebrow="End-to-end group trip planning"
        mockup={
          <BookingPageMockup
            tripTitle="Costa Rica Adventure"
            tripMeta="Mar 15-22 \u2022 7 nights \u2022 All-inclusive"
            packages={[
              {
                name: "Jungle Lodge",
                price: "$1,950",
                features: ["Private Room", "All Meals", "Guided Tours", "Airport Transfer"],
              },
            ]}
            itinerary={[
              { day: "Day 1", title: "Arrive in San Jose" },
              { day: "Day 2", title: "Arenal Volcano Hike" },
              { day: "Day 3", title: "White Water Rafting" },
            ]}
            orderSummary={[
              { label: "Jungle Lodge", value: "$1,950" },
              { label: "Processing fee", value: "$117" },
            ]}
            total="$2,067"
          />
        }
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Planning a Group Trip Shouldn't Be This Stressful"
        subtitle="Coordinating schedules, collecting deposits, and answering the same questions over and over takes the fun out of planning."
        stats={[
          { icon: "\u23F1\uFE0F", value: 20, suffix: " hrs", label: "Spent planning before the trip even starts" },
          { icon: "\uD83D\uDCE8", value: 60, suffix: "+", label: "Messages answering 'how do I pay?'" },
          { icon: "\uD83D\uDCC9", value: 25, suffix: "%", label: "Of interested people never actually book" },
          { icon: "\uD83E\uDDE9", value: 4, suffix: " apps", label: "Used to coordinate one trip" },
        ]}
        caption="Based on feedback from group trip organizers"
        ctaText="There's a better way"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Create a Booking Page in Minutes"
          description="Build a professional booking page with all the details your travelers need. Add your trip description, itinerary, photos, package options, room types, and pricing. Then share the link and let travelers book themselves. No more manual sign-ups, spreadsheet tracking, or endless back-and-forth in group chats."
          mockup={
            <BookingPageMockup
              tripTitle="Tulum Wellness Retreat"
              tripMeta="Apr 5-11 \u2022 6 nights \u2022 Boutique resort"
              packages={[
                {
                  name: "Shared Suite",
                  price: "$1,600",
                  features: ["Shared Room", "Daily Yoga", "Spa Credit", "All Meals"],
                },
              ]}
              itinerary={[
                { day: "Day 1", title: "Welcome Ceremony" },
                { day: "Day 2", title: "Cenote Meditation" },
                { day: "Day 3", title: "Sound Healing Session" },
              ]}
              orderSummary={[
                { label: "Shared Suite", value: "$1,600" },
                { label: "Processing fee", value: "$96" },
              ]}
              total="$1,696"
            />
          }
          highlights={[
            { icon: "\uD83C\uDF10", text: "Shareable link for easy distribution" },
            { icon: "\uD83D\uDCCB", text: "Full itinerary display" },
            { icon: "\uD83C\uDF81", text: "Multiple packages and add-ons" },
            { icon: "\uD83D\uDCF1", text: "Mobile-optimized for all devices" },
          ]}
          bonus="Travelers can browse packages, read the itinerary, and book in under five minutes."
          testimonial={{
            quote: "SquadTrip streamlines the process of tracking payment plans, promoting the itinerary, and selling extra add-ons.",
            attribution: "Chef Ahki Taylor, The Supernatural Woman Retreats",
          }}
          linkText="Create your booking page"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Flexible Payment Plans That Fill Your Trip"
          description="Offering payment plans is the single best way to increase bookings for your group trip. SquadTrip lets you set up automatic monthly installments so travelers can spread the cost over time. More people can afford to join, and you collect money on autopilot without chasing anyone down."
          mockup={<PaymentPlanMockup />}
          reverse
          highlights={[
            { icon: "\uD83D\uDD04", text: "Automatic monthly billing" },
            { icon: "\u23F0", text: "Payment reminders sent automatically" },
            { icon: "\uD83D\uDCB3", text: "Cards, Apple Pay, Google Pay" },
            { icon: "\uD83D\uDED2", text: "Klarna and Afterpay supported" },
          ]}
          testimonial={{
            quote: "Switching to SquadTrip was one of the best decisions I've made for my business.",
            attribution: "Andrew Bennett, Passport Society",
          }}
          linkText="Set up payment plans"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Track Everything From One Dashboard"
          description="Once your trip is live, the SquadTrip dashboard becomes your planning headquarters. See who has booked, who has paid, who is behind on payments, and how much total revenue you have collected. Get notified when someone new books or a payment comes in. Export data anytime for your own records or to share with vendors."
          mockup={
            <DashboardMockup
              tripName="Costa Rica Adventure"
              collected="$31,200"
              total="$39,000"
              percent={80}
              travelers={[
                { initials: "JM", name: "Jessica M.", amount: "$1,950", status: "paid" },
                { initials: "RT", name: "Ryan T.", amount: "$1,300", status: "partial" },
                { initials: "NL", name: "Nina L.", amount: "$1,950", status: "paid" },
                { initials: "CS", name: "Carlos S.", amount: "$650", status: "partial" },
              ]}
            />
          }
          highlights={[
            { icon: "\uD83D\uDCCA", text: "Real-time revenue tracking" },
            { icon: "\uD83D\uDC65", text: "Full traveler roster" },
            { icon: "\uD83D\uDD14", text: "Instant booking notifications" },
            { icon: "\uD83D\uDCE4", text: "CSV export for records" },
          ]}
          linkText="See the dashboard"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={planningFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Start Planning Your Group Trip Today"
        subheadline="Create a booking page in minutes. Free to start, no credit card required."
        primaryText="Plan your trip for free"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
