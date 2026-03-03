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
import { ShareLinkMockup } from "@/components/mockups/ShareLinkMockup";

export const metadata = generatePageMetadata({
  title: "Group Trip Checkout Pages",
  description:
    "Build branded checkout pages for your group trips with packages, add-ons, and itineraries. Travelers book and pay online in minutes with SquadTrip.",
  path: "/product/checkout-experience",
});

const checkoutFAQ = [
  {
    question: "How long does it take to create a checkout page?",
    answer:
      "Most organizers build their first checkout page in under 10 minutes. Add your trip details, set up packages and pricing, upload photos, and publish. Your booking link is ready to share immediately.",
  },
  {
    question: "Can I offer multiple packages on one checkout page?",
    answer:
      "Yes. You can create as many packages as you need, such as different room types, VIP upgrades, or budget-friendly options. Each package can have its own price, description, and included features.",
  },
  {
    question: "Do checkout pages work on mobile devices?",
    answer:
      "Every checkout page is fully responsive and optimized for mobile. Travelers can browse packages, view itineraries, and complete payment from their phone without pinching or zooming.",
  },
  {
    question: "Can I add optional add-ons like excursions or airport transfers?",
    answer:
      "Absolutely. Add-ons let travelers customize their booking with extras like spa treatments, excursions, airport pickups, or travel insurance. Each add-on has its own price and description.",
  },
  {
    question: "Can I preview the page before publishing?",
    answer:
      "Yes. SquadTrip gives you a full preview of your checkout page before it goes live. You can review how packages, itineraries, photos, and pricing appear to your travelers and make edits at any time.",
  },
];

export default function CheckoutExperiencePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Product", href: "/product" },
          { name: "Checkout Experience", href: "/product/checkout-experience" },
        ]}
      />
      <FAQSchema items={checkoutFAQ} />

      {/* Hero */}
      <Hero
        layout="split"
        headline="Branded Checkout Pages That Convert Travelers Into Bookings"
        subheadline="Build professional booking pages with packages, itineraries, and add-ons. Give travelers everything they need to book and pay in one place, no back-and-forth required."
        ctaText="Build your checkout page"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        eyebrow="Checkout experience"
        mockup={
          <BookingPageMockup
            tripTitle="Tulum Wellness Retreat"
            tripMeta="Mar 14-21 • 7 nights • Beachfront Resort"
            packages={[
              {
                name: "Standard Room",
                price: "$1,400",
                features: ["Shared Room", "All Meals", "Yoga Sessions", "Welcome Dinner"],
              },
              {
                name: "Private Suite",
                price: "$2,200",
                features: ["Private Suite", "All Meals", "Spa Credit", "Airport Transfer"],
              },
            ]}
            itinerary={[
              { day: "Day 1", title: "Arrival & Welcome Ceremony" },
              { day: "Day 2", title: "Morning Yoga & Beach Day" },
              { day: "Day 3", title: "Cenote Excursion" },
            ]}
            orderSummary={[
              { label: "Private Suite", value: "$2,200" },
              { label: "Processing fee", value: "$132" },
            ]}
            total="$2,332"
          />
        }
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Booking a Group Trip Shouldn't Require 50 DMs"
        subtitle="Travelers want a simple way to see what's included, pick their package, and pay. Not a chain of text messages and PDF attachments."
        stats={[
          { icon: "📱", value: 73, suffix: "%", label: "Of travelers abandon bookings without a clear checkout flow" },
          { icon: "💬", value: 25, suffix: "+", label: "Messages exchanged per traveler to finalize a booking" },
          { icon: "⏳", value: 4, suffix: " days", label: "Average time to collect payment after initial interest" },
          { icon: "📉", value: 35, suffix: "%", label: "Of interested travelers never complete their booking" },
        ]}
        caption="Based on data from group trip organizers before switching to SquadTrip"
        ctaText="See the difference"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Packages That Sell Themselves"
          description="Create tiered packages so travelers can choose the experience that fits their budget. Whether it's a shared room versus a private suite or a standard pass versus VIP, each package lists its own price, features, and availability. Travelers see exactly what they're getting before they pay."
          mockup={
            <BookingPageMockup
              tripTitle="Cancun Group Getaway"
              tripMeta="Jun 5-12 • 7 nights • All-Inclusive"
              packages={[
                {
                  name: "Budget Friendly",
                  price: "$950",
                  features: ["Shared Room", "All Meals", "Pool Access"],
                },
                {
                  name: "Premium Experience",
                  price: "$1,600",
                  features: ["Ocean View Suite", "All Meals", "Spa Access", "Excursion Credit"],
                },
              ]}
              itinerary={[
                { day: "Day 1", title: "Check-in & Pool Party" },
                { day: "Day 2", title: "Snorkeling Excursion" },
              ]}
              orderSummary={[
                { label: "Premium Experience", value: "$1,600" },
                { label: "Processing fee", value: "$96" },
              ]}
              total="$1,696"
            />
          }
          highlights={[
            { icon: "📦", text: "Unlimited packages per trip" },
            { icon: "💰", text: "Custom pricing per package" },
            { icon: "📝", text: "Feature lists for each tier" },
            { icon: "📊", text: "Real-time availability tracking" },
          ]}
          testimonial={{
            quote: "Being able to offer different packages made it easy for travelers at every budget to join. Our group size doubled.",
            attribution: "Keisha Monroe, Travel With Keisha",
          }}
          linkText="Create your packages"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Add-Ons That Boost Your Revenue"
          description="Let travelers customize their booking with optional extras. Excursions, airport transfers, travel insurance, event tickets, or spa treatments. Each add-on appears during checkout so travelers can add what they want without extra coordination from you. Organizers using add-ons see an average revenue increase of 18% per trip."
          mockup={<PaymentPlanMockup />}
          reverse
          highlights={[
            { icon: "🎟️", text: "Excursion and activity add-ons" },
            { icon: "🚐", text: "Airport transfers and logistics" },
            { icon: "🛡️", text: "Travel insurance options" },
            { icon: "✨", text: "VIP upgrades and premium extras" },
          ]}
          bonus="Add-ons are completely optional for travelers but consistently increase per-booking revenue."
          linkText="Set up add-ons"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Share One Link and Start Collecting Bookings"
          description="Every checkout page gets its own shareable link. Post it on social media, drop it in a group chat, or embed it in your website. Travelers click, browse, and book without needing to create an account or download an app. One link replaces the entire booking conversation."
          mockup={<ShareLinkMockup />}
          highlights={[
            { icon: "🔗", text: "Unique shareable link per trip" },
            { icon: "📱", text: "Social media ready" },
            { icon: "🌐", text: "Embeddable on any website" },
            { icon: "👤", text: "No traveler account required" },
          ]}
          linkText="Generate your booking link"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={checkoutFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Build Your Checkout Page in Minutes"
        subheadline="Create a professional booking experience your travelers will love. Free to start, no credit card required."
        primaryText="Create your checkout page"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
