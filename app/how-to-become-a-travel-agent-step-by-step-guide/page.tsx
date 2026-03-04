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
import { BookingPageMockup } from "@/components/mockups/BookingPageMockup";
import { PaymentPlanMockup } from "@/components/mockups/PaymentPlanMockup";

export const metadata = generatePageMetadata({
  title: "How to Become a Travel Agent: Guide",
  description:
    "Learn how to become a travel agent step by step. From choosing your niche to booking your first group trip, this guide covers everything you need to launch your travel business.",
  path: "/how-to-become-a-travel-agent-step-by-step-guide",
});

const guideFAQ = [
  {
    question: "Do I need a license or certification to become a travel agent?",
    answer:
      "In most US states, you do not need a license to become a travel agent. However, some states like California, Florida, Hawaii, Iowa, and Washington have registration requirements. Certifications from organizations like The Travel Institute or ASTA can boost your credibility but are not required to get started.",
  },
  {
    question: "How much does it cost to start a travel agency?",
    answer:
      "You can start a travel business for very little. A host agency affiliation typically costs $0-$500 to join. SquadTrip offers a free plan to create booking pages and collect payments. Your main investments will be a website, business cards, and marketing. Many successful travel agents started with under $1,000.",
  },
  {
    question: "How do travel agents make money?",
    answer:
      "Travel agents earn money through commissions from suppliers like hotels, airlines, and tour operators, typically ranging from 10-16%. Group trip organizers can also add a markup to trip packages. With SquadTrip, you set your own pricing and keep the difference between what you charge travelers and what you pay suppliers.",
  },
  {
    question: "Do I need to join a host agency?",
    answer:
      "Joining a host agency is optional but recommended for beginners. A host agency gives you access to higher commission rates, supplier relationships, booking systems, and mentorship. You operate under their accreditation while building your own brand and client base.",
  },
  {
    question: "Can I be a travel agent part-time?",
    answer:
      "Absolutely. Many successful travel agents start part-time while keeping their full-time job. Group trip planning with SquadTrip is especially well-suited to part-time work because the platform automates payment collection and traveler management, reducing the hours you need to spend on admin tasks.",
  },
  {
    question: "How does SquadTrip help new travel agents?",
    answer:
      "SquadTrip gives new travel agents professional tools from day one. You can create branded booking pages, set up automatic payment plans, track traveler payments, and manage multiple trips from one dashboard. It makes you look established even when you are just getting started.",
  },
];

export default function HowToBecomeATravelAgentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "How to Become a Travel Agent", href: "/how-to-become-a-travel-agent-step-by-step-guide" },
        ]}
      />
      <FAQSchema items={guideFAQ} />

      {/* Hero (split) */}
      <Hero
        layout="split"
        headline="How to Become a Travel Agent"
        subheadline="Ready to turn your love of travel into a business? This step-by-step guide walks you through everything from choosing your niche and finding suppliers to booking your first group trip and collecting payments with SquadTrip."
        ctaText="Start your travel business"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "Learn more", href: "/features" }}
        eyebrow="Step-by-step guide"
        mockup={
          <DashboardMockup
            tripName="My First Group Trip"
            collected="$8,400"
            total="$12,000"
            percent={70}
            travelers={[
              { initials: "AF", name: "Ashley F.", amount: "$2,100", status: "paid" },
              { initials: "MR", name: "Mike R.", amount: "$1,400", status: "partial" },
              { initials: "TG", name: "Tina G.", amount: "$2,100", status: "paid" },
              { initials: "JB", name: "Jason B.", amount: "$0", status: "pending" },
            ]}
          />
        }
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Starting a Travel Business Feels Overwhelming"
        subtitle="There is so much conflicting advice out there. You need a clear roadmap and the right tools."
        stats={[
          { icon: "📚", value: 100, suffix: "+", label: "Hours researching how to get started" },
          { icon: "💰", value: 5, suffix: "K+", label: "Spent on unnecessary courses and fees" },
          { icon: "🧩", value: 8, suffix: " steps", label: "To launch but most guides skip half" },
          { icon: "📉", value: 60, suffix: "%", label: "Of new agents quit in the first year" },
        ]}
        caption="Based on industry data from travel agent communities"
        ctaText="Follow the proven path"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Step 1: Choose Your Niche and Plan Your First Trip"
          description="The most successful travel agents specialize. Whether it is destination weddings, group vacations, wellness retreats, or adventure travel, picking a niche helps you stand out and attract the right clients. Once you have your niche, plan your first trip. With SquadTrip, you can create a professional booking page with itineraries, packages, and pricing in minutes, even before you have a website."
          mockup={
            <BookingPageMockup
              tripTitle="Tulum Girls Trip 2026"
              tripMeta="May 1-7 • 6 nights • Boutique resort"
              packages={[
                {
                  name: "Shared Room",
                  price: "$1,400",
                  features: ["Beachfront Room", "All Meals", "Spa Access", "Airport Shuttle"],
                },
              ]}
              itinerary={[
                { day: "Day 1", title: "Arrival & Beach Welcome" },
                { day: "Day 2", title: "Cenote Swimming Tour" },
                { day: "Day 3", title: "Mayan Ruins Excursion" },
              ]}
              orderSummary={[
                { label: "Shared Room", value: "$1,400" },
                { label: "Processing fee", value: "$84" },
              ]}
              total="$1,484"
            />
          }
          highlights={[
            { icon: "🎯", text: "Pick a profitable niche" },
            { icon: "📋", text: "Create a detailed trip itinerary" },
            { icon: "🎁", text: "Set up packages and pricing" },
            { icon: "🌐", text: "Launch a booking page instantly" },
          ]}
          bonus="You do not need a website to start selling trips. A SquadTrip booking page is all you need."
          testimonial={{
            quote: "SquadTrip streamlines the process of tracking payment plans, promoting the itinerary, and selling extra add-ons.",
            attribution: "Chef Ahki Taylor, The Supernatural Woman Retreats",
          }}
          linkText="Create your first trip"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Step 2: Set Up Payment Collection"
          description="One of the biggest challenges for new travel agents is collecting money professionally. Asking friends to Venmo you for a trip does not scale, and it does not look professional. SquadTrip lets you set up automatic payment plans so travelers can pay in monthly installments. Payments are processed through Stripe, and you get paid directly to your bank account."
          mockup={<PaymentPlanMockup />}
          reverse
          highlights={[
            { icon: "💳", text: "Accept credit cards and debit cards" },
            { icon: "🔄", text: "Automatic monthly installments" },
            { icon: "⏰", text: "Automated payment reminders" },
            { icon: "🏦", text: "Direct bank payouts via Stripe" },
          ]}
          testimonial={{
            quote: "The payment plans have made it so much easier for me to manage my bookings.",
            attribution: "Andrew Bennett, Passport Society",
          }}
          linkText="Set up payments"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Step 3: Grow Your Business With the Right Tools"
          description="Once your first trip is live and travelers are booking, use your SquadTrip dashboard to manage everything. Track who has paid, send updates to your group, and monitor your revenue in real time. As you grow, you can run multiple trips simultaneously, build a reputation with successful trips under your belt, and scale your travel business with confidence."
          mockup={
            <DashboardMockup
              tripName="Agent Dashboard"
              collected="$24,600"
              total="$36,000"
              percent={68}
              travelers={[
                { initials: "TG", name: "Tulum Girls Trip", amount: "$12,600", status: "paid" },
                { initials: "NV", name: "Nashville Vacay", amount: "$8,200", status: "partial" },
                { initials: "PR", name: "Puerto Rico Fam", amount: "$3,800", status: "partial" },
              ]}
            />
          }
          highlights={[
            { icon: "📊", text: "Track revenue across all trips" },
            { icon: "👥", text: "Manage all travelers in one place" },
            { icon: "🔔", text: "Get notified when someone books" },
            { icon: "📈", text: "Scale from 1 trip to 50+" },
          ]}
          linkText="Launch your travel business"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={guideFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Ready to Become a Travel Agent?"
        subheadline="Create your first trip in minutes. Free to start, no credit card required."
        primaryText="Start your free account"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
