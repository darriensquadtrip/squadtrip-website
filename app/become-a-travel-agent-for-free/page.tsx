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
  title: "Become a Travel Agent for Free",
  description:
    "Start your travel agent career for free with SquadTrip. Create booking pages, collect payments, and manage group trips without any upfront investment or monthly fees.",
  path: "/become-a-travel-agent-for-free",
});

const freeFAQ = [
  {
    question: "Is SquadTrip really free to use?",
    answer:
      "Yes. SquadTrip has a free plan that lets you create trips, build booking pages, set up payment plans, and collect payments from travelers. There is a 6% booking fee on transactions which includes Stripe processing costs. You pay nothing upfront and there is no monthly fee on the free plan.",
  },
  {
    question: "What do I need to start as a travel agent?",
    answer:
      "You need very little to get started. With SquadTrip, you can create a professional booking page for your first trip in minutes. You do not need a website, a business license in most states, or expensive certifications. Start with a trip idea, a group of interested travelers, and a free SquadTrip account.",
  },
  {
    question: "How do I find my first travelers?",
    answer:
      "Start with your existing network. Post on social media, tell friends and family, and share your SquadTrip booking link. Many successful travel agents started by organizing a trip for their friend group or social media following. Once you deliver a great experience, word-of-mouth referrals will grow your business.",
  },
  {
    question: "Do I need experience in the travel industry?",
    answer:
      "No prior experience is required. If you have organized a group trip for friends, you already have the core skills. SquadTrip handles the technical and financial side so you can focus on curating great travel experiences. Many of our most successful organizers started with zero industry experience.",
  },
  {
    question: "How much money can I make as a travel agent?",
    answer:
      "Earnings vary widely. New travel agents running a few group trips per year can earn $5,000 to $20,000 in markup and commissions. Full-time agents with a strong client base often earn $50,000 to $100,000 or more. Your income scales with the number of trips you run and the size of your groups.",
  },
  {
    question: "What is the difference between free and paid SquadTrip plans?",
    answer:
      "The free plan includes everything you need to create trips and collect payments. Paid plans starting at $29 per month add features like lower booking fees, custom branding, priority support, and advanced analytics. Most new agents start on the free plan and upgrade as their business grows.",
  },
];

export default function BecomeATravelAgentFreePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Become a Travel Agent for Free", href: "/become-a-travel-agent-for-free" },
        ]}
      />
      <FAQSchema items={freeFAQ} />

      {/* Hero (split) */}
      <Hero
        layout="split"
        headline="Become a Travel Agent for Free"
        subheadline="You do not need expensive courses, certifications, or startup costs to become a travel agent. With SquadTrip's free plan, you can create professional booking pages, collect payments, and run your first group trip today."
        ctaText="Sign up free"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See what's included", href: "/features" }}
        eyebrow="$0 to get started"
        mockup={
          <BookingPageMockup
            tripTitle="Punta Cana Getaway"
            tripMeta="Aug 3-9 \u2022 6 nights \u2022 All-inclusive"
            packages={[
              {
                name: "Resort Package",
                price: "$1,800",
                features: ["Ocean View Room", "All Meals", "Open Bar", "Airport Transfer"],
              },
            ]}
            itinerary={[
              { day: "Day 1", title: "Arrival & Pool Party" },
              { day: "Day 2", title: "Catamaran Cruise" },
              { day: "Day 3", title: "Saona Island Day Trip" },
            ]}
            orderSummary={[
              { label: "Resort Package", value: "$1,800" },
              { label: "Processing fee", value: "$108" },
            ]}
            total="$1,908"
          />
        }
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Most 'Become a Travel Agent' Advice Costs Too Much"
        subtitle="Expensive courses, certification programs, and software subscriptions add up before you even earn your first dollar."
        stats={[
          { icon: "\uD83D\uDCB0", value: 3, suffix: "K+", label: "Average cost of travel agent courses" },
          { icon: "\uD83D\uDCB3", value: 200, suffix: "/mo", label: "Typical software subscription costs" },
          { icon: "\u23F1\uFE0F", value: 6, suffix: " months", label: "Before most new agents earn income" },
          { icon: "\uD83D\uDCC9", value: 60, suffix: "%", label: "Of new agents quit due to upfront costs" },
        ]}
        caption="Based on industry surveys of aspiring travel agents"
        ctaText="Skip the overhead"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Create Professional Booking Pages at No Cost"
          description="Your SquadTrip free plan includes everything you need to create polished, professional booking pages for your trips. Add trip details, itineraries, package options, room selections, and photos. Share the link on social media, via text, or by email. Travelers see a professional experience that builds trust and makes them confident about booking with you, even if you are brand new."
          mockup={
            <BookingPageMockup
              tripTitle="Cabo Birthday Bash"
              tripMeta="Oct 10-15 \u2022 5 nights \u2022 Luxury resort"
              packages={[
                {
                  name: "VIP Suite",
                  price: "$2,200",
                  features: ["Suite Room", "All-Inclusive", "Spa Day", "Boat Tour"],
                },
              ]}
              itinerary={[
                { day: "Day 1", title: "Welcome Dinner at the Beach" },
                { day: "Day 2", title: "ATV Desert Tour" },
                { day: "Day 3", title: "Snorkeling Excursion" },
              ]}
              orderSummary={[
                { label: "VIP Suite", value: "$2,200" },
                { label: "Processing fee", value: "$132" },
              ]}
              total="$2,332"
            />
          }
          highlights={[
            { icon: "\uD83C\uDD93", text: "Free to create and publish" },
            { icon: "\uD83C\uDF10", text: "Shareable link for promotion" },
            { icon: "\uD83C\uDFA8", text: "Professional design out of the box" },
            { icon: "\uD83D\uDCF1", text: "Works perfectly on mobile" },
          ]}
          bonus="No website needed. Your booking page is your storefront."
          testimonial={{
            quote: "SquadTrip streamlines the process of tracking payment plans, promoting the itinerary, and selling extra add-ons.",
            attribution: "Chef Ahki Taylor, The Supernatural Woman Retreats",
          }}
          linkText="Create your free booking page"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Collect Payments Without Chasing Anyone"
          description="The free plan includes automatic payment plans so your travelers can pay in monthly installments. SquadTrip handles billing, reminders, and failed payment retries. You never have to send an awkward 'hey, did you pay?' message again. Payments are processed through Stripe, and you get paid directly to your bank account with no additional fees beyond the standard booking fee."
          mockup={<PaymentPlanMockup />}
          reverse
          highlights={[
            { icon: "\uD83D\uDD04", text: "Automatic monthly billing included free" },
            { icon: "\u23F0", text: "Email reminders at no extra cost" },
            { icon: "\uD83D\uDCB3", text: "Cards, Apple Pay, and Google Pay" },
            { icon: "\uD83C\uDFE6", text: "Direct payouts to your bank" },
          ]}
          testimonial={{
            quote: "The payment plans have made it so much easier for me to manage my bookings.",
            attribution: "Andrew Bennett, Passport Society",
          }}
          linkText="Set up free payment plans"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Manage Your Growing Business From Day One"
          description="Even on the free plan, you get access to the SquadTrip dashboard where you can track every traveler, every payment, and every trip. As your business grows and you add more trips, you will have the infrastructure to handle it. Many of our most successful travel agents started with the free plan and upgraded only after they were earning consistent income."
          mockup={
            <DashboardMockup
              tripName="My Travel Business"
              collected="$14,400"
              total="$18,000"
              percent={80}
              travelers={[
                { initials: "PG", name: "Punta Cana Trip", amount: "$9,000", status: "paid" },
                { initials: "CB", name: "Cabo Birthday", amount: "$5,400", status: "partial" },
              ]}
            />
          }
          highlights={[
            { icon: "\uD83D\uDCCA", text: "Real-time revenue tracking" },
            { icon: "\uD83D\uDC65", text: "Traveler management" },
            { icon: "\uD83D\uDD14", text: "Booking notifications" },
            { icon: "\uD83D\uDCC8", text: "Grow at your own pace" },
          ]}
          linkText="Start free today"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={freeFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Start Your Travel Agent Career for Free"
        subheadline="No credit card, no monthly fees, no risk. Create your first trip today."
        primaryText="Sign up free"
        primaryHref={SIGNUP_URL}
        secondaryText="See what's included"
        secondaryHref="/pricing"
      />
    </>
  );
}
