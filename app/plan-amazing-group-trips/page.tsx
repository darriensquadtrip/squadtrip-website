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
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { PaymentPlanMockup } from "@/components/mockups/PaymentPlanMockup";

export const metadata = generatePageMetadata({
  title: "Plan Amazing Group Trips",
  description:
    "Plan amazing group trips with SquadTrip. Create stunning booking pages, collect payments automatically, and manage your entire trip from one organized platform.",
  path: "/plan-amazing-group-trips",
});

const amazingFAQ = [
  {
    question: "What kind of group trips can I plan with SquadTrip?",
    answer:
      "SquadTrip works for any type of group trip including beach vacations, ski trips, bachelor and bachelorette parties, family reunions, birthday trips, wellness retreats, destination weddings, corporate getaways, cruise groups, and more. If you are organizing travel for two or more people, SquadTrip can help.",
  },
  {
    question: "How quickly can I set up a trip?",
    answer:
      "Most organizers create their first trip in under 15 minutes. Add your trip details, upload photos, set up packages and pricing, configure payment plans, and publish your booking page. Then share the link and start accepting bookings immediately.",
  },
  {
    question: "Can I offer different packages for the same trip?",
    answer:
      "Yes. You can create multiple packages with different pricing, room types, and included features. For example, you might offer a budget shared room package and a premium private suite package. Travelers choose the option that fits their budget and preferences.",
  },
  {
    question: "How do I promote my trip?",
    answer:
      "SquadTrip gives you a shareable booking link that you can post on social media, send via text or email, or embed on your website. The booking page itself is designed to convert visitors into booked travelers with professional design, clear pricing, and easy checkout.",
  },
  {
    question: "What if I need to change trip details after publishing?",
    answer:
      "You can update trip details, pricing, itinerary, and packages at any time. Changes are reflected on your booking page immediately. If you need to communicate changes to travelers who have already booked, you can send updates directly through the platform.",
  },
];

export default function PlanAmazingGroupTripsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Plan Amazing Group Trips", href: "/plan-amazing-group-trips" },
        ]}
      />
      <FAQSchema items={amazingFAQ} />

      {/* Hero (split) */}
      <Hero
        layout="split"
        headline="Plan Amazing Group Trips"
        subheadline="You have the vision for an incredible trip. SquadTrip gives you the tools to make it happen. Create professional booking pages, collect payments automatically, and manage every detail so you can focus on creating unforgettable experiences."
        ctaText="Plan your trip now"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        eyebrow="Turn your trip idea into reality"
        mockup={
          <BookingPageMockup
            tripTitle="Amalfi Coast Experience"
            tripMeta="Sep 1-8 \u2022 7 nights \u2022 Boutique hotel"
            packages={[
              {
                name: "Seaview Room",
                price: "$2,800",
                features: ["Seaview Room", "Breakfast Daily", "Boat Tour", "Wine Tasting"],
              },
            ]}
            itinerary={[
              { day: "Day 1", title: "Arrive in Naples" },
              { day: "Day 2", title: "Positano Walking Tour" },
              { day: "Day 3", title: "Capri Island Day Trip" },
            ]}
            orderSummary={[
              { label: "Seaview Room", value: "$2,800" },
              { label: "Processing fee", value: "$168" },
            ]}
            total="$2,968"
          />
        }
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Great Trip Ideas Die in Group Chats"
        subtitle="You had an amazing trip idea, but coordinating the group turned it into a logistics nightmare."
        stats={[
          { icon: "\uD83D\uDCAC", value: 200, suffix: "+", label: "Group chat messages before anyone commits" },
          { icon: "\uD83D\uDCB8", value: 35, suffix: "%", label: "Of people who say 'I'm in' never pay" },
          { icon: "\u23F1\uFE0F", value: 3, suffix: " months", label: "Average time to organize a group trip" },
          { icon: "\uD83E\uDDE9", value: 5, suffix: " tools", label: "Needed to manage logistics and payments" },
        ]}
        caption="Based on surveys of group trip organizers"
        ctaText="There's a better way"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Build a Booking Page That Gets People Excited"
          description="Transform your trip idea into a professional booking page that sells itself. Add vivid trip descriptions, day-by-day itineraries, stunning photos, multiple package options, and clear pricing. When your travelers visit the page, they see exactly what to expect and can book with a few clicks. No more explaining the same details over and over in group chats."
          mockup={
            <BookingPageMockup
              tripTitle="Mykonos Beach Getaway"
              tripMeta="Jul 15-22 \u2022 7 nights \u2022 Beachfront villa"
              packages={[
                {
                  name: "Shared Villa Room",
                  price: "$2,100",
                  features: ["Shared Room", "Pool Access", "Welcome Dinner", "Boat Party"],
                },
              ]}
              itinerary={[
                { day: "Day 1", title: "Villa Welcome Party" },
                { day: "Day 2", title: "Beach Club Day" },
                { day: "Day 3", title: "Sunset Yacht Cruise" },
              ]}
              orderSummary={[
                { label: "Shared Villa Room", value: "$2,100" },
                { label: "Processing fee", value: "$126" },
              ]}
              total="$2,226"
            />
          }
          highlights={[
            { icon: "\uD83C\uDF1F", text: "Stunning trip page design" },
            { icon: "\uD83D\uDCCB", text: "Day-by-day itinerary display" },
            { icon: "\uD83C\uDF81", text: "Multiple package options" },
            { icon: "\uD83D\uDCF1", text: "Mobile-friendly checkout" },
          ]}
          bonus="Most travelers book within 24 hours of seeing a professional booking page."
          testimonial={{
            quote: "If it wasn't for SquadTrip, I wouldn't have been able to grow my group trips from 50 guests to 500.",
            attribution: "Collin D. Williams, Jr., CDE Antigua",
          }}
          linkText="Build your booking page"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Payment Plans That Fill Your Trip Faster"
          description="The number one reason people drop out of group trips is the cost. SquadTrip's automatic payment plans let travelers spread the cost over several months, making your trip accessible to more people. Set up the installment schedule, and SquadTrip bills everyone automatically. You collect more deposits, lose fewer travelers, and fill your trip faster."
          mockup={<PaymentPlanMockup />}
          reverse
          highlights={[
            { icon: "\uD83D\uDD04", text: "Monthly auto-billing" },
            { icon: "\u23F0", text: "Automatic payment reminders" },
            { icon: "\uD83D\uDCB3", text: "All major payment methods" },
            { icon: "\uD83D\uDED2", text: "Buy-now-pay-later options" },
          ]}
          testimonial={{
            quote: "Switching to SquadTrip was one of the best decisions I've made for my business.",
            attribution: "Andrew Bennett, Passport Society",
          }}
          linkText="Set up payment plans"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Manage Every Detail From One Dashboard"
          description="Once bookings start rolling in, your SquadTrip dashboard keeps everything organized. See who has booked, track payment progress, monitor revenue, and get notified when something needs your attention. No more flipping between apps or updating spreadsheets. Everything is in one place, updated in real time."
          mockup={
            <DashboardMockup
              tripName="Amalfi Coast Experience"
              collected="$44,800"
              total="$56,000"
              percent={80}
              travelers={[
                { initials: "LM", name: "Lauren M.", amount: "$2,800", status: "paid" },
                { initials: "NW", name: "Nathan W.", amount: "$1,400", status: "partial" },
                { initials: "SB", name: "Simone B.", amount: "$2,800", status: "paid" },
                { initials: "AJ", name: "Andre J.", amount: "$700", status: "partial" },
              ]}
            />
          }
          highlights={[
            { icon: "\uD83D\uDCCA", text: "Revenue tracking in real time" },
            { icon: "\uD83D\uDC65", text: "Full traveler roster" },
            { icon: "\uD83D\uDD14", text: "Smart notifications" },
            { icon: "\uD83D\uDCE4", text: "Export data anytime" },
          ]}
          linkText="See the dashboard"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={amazingFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Your Amazing Group Trip Starts Here"
        subheadline="Create a booking page in minutes. Free to start, no credit card required."
        primaryText="Start planning your trip"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
