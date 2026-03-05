import { generatePageMetadata } from "@/lib/metadata";
import dynamic from "next/dynamic";
import { SIGNUP_URL } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Hero } from "@/components/sections/Hero";
import { ProblemValidation } from "@/components/sections/ProblemValidation";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
const FAQ = dynamic(() => import("@/components/ui/FAQ").then((mod) => mod.FAQ));
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BookingPageMockup } from "@/components/mockups/BookingPageMockup";
import { ShareLinkMockup } from "@/components/mockups/ShareLinkMockup";

export const metadata = generatePageMetadata({
  title: "Public Trip Pages & Itineraries",
  description:
    "Create shareable trip pages with detailed itineraries, photos, and pricing. Let travelers see everything about the trip before they book with SquadTrip.",
  path: "/product/create-stunning-trip-landing-pages-in-5-minutes-with-squadtrip",
});

const tripPagesFAQ = [
  {
    question: "What information appears on a trip page?",
    answer:
      "Your trip page can include the destination, dates, itinerary, photos, a video embed, package options with pricing, add-ons, included amenities, and any custom details you add. Travelers see a complete picture of the experience before they book.",
  },
  {
    question: "Can I customize the look of my trip page?",
    answer:
      "Yes. You can add your logo, choose a cover photo, write a custom description, and organize your itinerary day by day. The page layout is professionally designed so your trip always looks polished regardless of how much content you add.",
  },
  {
    question: "How do I share the trip page with travelers?",
    answer:
      "Every trip page has a unique shareable link. Copy and paste it into a group chat, post it on social media, include it in an email, or embed it on your website. Travelers don't need an account to view the page.",
  },
  {
    question: "Can I update the trip page after publishing?",
    answer:
      "Yes. You can edit your trip page at any time. Add new itinerary details, update photos, adjust pricing, or change package availability. All changes are reflected immediately on the live page.",
  },
  {
    question: "Do trip pages help with SEO or social sharing?",
    answer:
      "Trip pages include Open Graph meta tags so they display a rich preview when shared on social media or in messaging apps. The preview shows the trip title, cover image, and a short description to maximize click-through rates.",
  },
  {
    question: "Is there a limit on how many trip pages I can create?",
    answer:
      "No. You can create as many trip pages as you need. Whether you run one trip a year or fifty, each trip gets its own dedicated page with its own shareable link.",
  },
];

export default function TripPagesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Product", href: "/product" },
          { name: "Trip Pages", href: "/product/create-stunning-trip-landing-pages-in-5-minutes-with-squadtrip" },
        ]}
      />
      <FAQSchema items={tripPagesFAQ} />

      {/* Hero */}
      <Hero
        layout="split"
        headline="Trip Pages That Sell the Experience Before You Say a Word"
        subheadline="Create beautiful, shareable trip pages with itineraries, photos, packages, and pricing. One link gives travelers everything they need to get excited and book."
        ctaText="Create your trip page"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        eyebrow="Trip pages"
        mockup={
          <BookingPageMockup
            tripTitle="Amalfi Coast Experience"
            tripMeta="Oct 3-10 • 7 nights • Boutique Hotel"
            packages={[
              {
                name: "Garden View Room",
                price: "$2,100",
                features: ["Garden View", "Breakfast Daily", "Welcome Dinner", "Cooking Class"],
              },
              {
                name: "Sea View Suite",
                price: "$3,200",
                features: ["Sea View Suite", "All Meals", "Private Tour", "Boat Excursion"],
              },
            ]}
            itinerary={[
              { day: "Day 1", title: "Arrive in Positano" },
              { day: "Day 2", title: "Ravello Gardens Tour" },
              { day: "Day 3", title: "Capri Day Trip" },
              { day: "Day 4", title: "Cooking Class in Amalfi" },
            ]}
            orderSummary={[
              { label: "Sea View Suite", value: "$3,200" },
              { label: "Processing fee", value: "$192" },
            ]}
            total="$3,392"
          />
        }
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="PDF Flyers and Text Descriptions Don't Sell Trips"
        subtitle="Travelers need to see the experience to commit. A paragraph in a group chat and a blurry screenshot of a resort don't create excitement or build enough trust to collect a payment."
        stats={[
          { icon: "📄", value: 70, suffix: "%", label: "Of travelers want a detailed trip page before they commit" },
          { icon: "🖼️", value: 3, suffix: "x", label: "More bookings when trips have photos and itineraries" },
          { icon: "💬", value: 50, suffix: "+", label: "Questions answered per trip that a good trip page prevents" },
          { icon: "📉", value: 28, suffix: "%", label: "Booking drop-off from unclear trip details" },
        ]}
        caption="Based on SquadTrip booking data comparing trips with and without detailed trip pages"
        ctaText="See the difference"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Day-by-Day Itineraries That Build Anticipation"
          description="Lay out every day of the trip so travelers can visualize the full experience. Add titles, descriptions, and highlights for each day. Whether it's a sunset boat ride on Day 3 or a cooking class on Day 5, a detailed itinerary answers questions before they're asked and gets travelers excited enough to commit and pay."
          mockup={
            <BookingPageMockup
              tripTitle="Morocco Discovery Tour"
              tripMeta="Nov 15-22 • 7 nights • Guided Tour"
              packages={[
                {
                  name: "Standard",
                  price: "$1,850",
                  features: ["Shared Room", "Guided Tours", "Most Meals", "Airport Transfer"],
                },
              ]}
              itinerary={[
                { day: "Day 1", title: "Arrive in Marrakech" },
                { day: "Day 2", title: "Atlas Mountains Trek" },
                { day: "Day 3", title: "Sahara Desert Camp" },
                { day: "Day 4", title: "Fes Medina Walking Tour" },
                { day: "Day 5", title: "Chefchaouen Blue City" },
              ]}
              orderSummary={[
                { label: "Standard Package", value: "$1,850" },
                { label: "Processing fee", value: "$111" },
              ]}
              total="$1,961"
            />
          }
          highlights={[
            { icon: "📅", text: "Day-by-day layout" },
            { icon: "📝", text: "Descriptions per activity" },
            { icon: "🗺️", text: "Location and venue details" },
            { icon: "⏱️", text: "Time and duration info" },
          ]}
          testimonial={{
            quote: "Once I started posting detailed itineraries, my trips filled up faster. People could see exactly what they were paying for and that made all the difference.",
            attribution: "Collin D. Williams, Jr., CDE Antigua",
          }}
          linkText="Build your itinerary"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="One Link That Replaces Every Question"
          description="Your trip page's shareable link contains everything a traveler needs to make a decision: dates, pricing, what's included, the full itinerary, photos, and the ability to book and pay right there. Post it on Instagram, drop it in a group chat, or send it in an email. Travelers stop asking you for details because the page has it all."
          mockup={<ShareLinkMockup />}
          reverse
          highlights={[
            { icon: "🔗", text: "Unique link per trip" },
            { icon: "📱", text: "Optimized for mobile sharing" },
            { icon: "🖼️", text: "Rich social media previews" },
            { icon: "🌐", text: "Embeddable on any website" },
          ]}
          bonus="Trip pages with rich Open Graph previews get 2.5x more clicks when shared on social media."
          linkText="Get your shareable link"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Edit and Update Your Trip Anytime"
          description="Trip details change. Flights get rescheduled, activities get added, pricing gets updated. SquadTrip lets you edit every part of your trip page at any time and changes go live immediately. Add a new excursion to Day 4, swap out a photo, or open up a new package option. Travelers always see the most current version of your trip."
          mockup={
            <BookingPageMockup
              tripTitle="Updated: Bali Group Trip"
              tripMeta="Apr 12-19 • 7 nights • Villa Resort"
              packages={[
                {
                  name: "Shared Villa",
                  price: "$1,600",
                  features: ["Shared Villa", "Daily Breakfast", "Temple Tours", "Rice Terrace Visit"],
                },
                {
                  name: "Private Villa",
                  price: "$2,800",
                  features: ["Private Villa", "All Meals", "Private Guide", "Spa Package"],
                },
              ]}
              itinerary={[
                { day: "Day 1", title: "Arrive in Ubud" },
                { day: "Day 2", title: "Rice Terrace & Waterfall Hike" },
                { day: "Day 3", title: "Temple Tour" },
              ]}
              orderSummary={[
                { label: "Private Villa", value: "$2,800" },
                { label: "Processing fee", value: "$168" },
              ]}
              total="$2,968"
            />
          }
          highlights={[
            { icon: "✏️", text: "Edit any section anytime" },
            { icon: "⚡", text: "Changes publish instantly" },
            { icon: "📸", text: "Swap photos and media" },
            { icon: "🔄", text: "Update pricing or availability" },
          ]}
          linkText="Create your trip page"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={tripPagesFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Create a Trip Page That Fills Your Trip"
        subheadline="Give travelers everything they need to say yes. Free to start, no credit card required."
        primaryText="Build your trip page"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
