import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { ProblemValidation } from "@/components/sections/ProblemValidation";
import { FeatureBentoGrid } from "@/components/sections/FeatureBentoGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhoUsesSquadTrip } from "@/components/sections/WhoUsesSquadTrip";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { LearnMoreCTA } from "@/components/sections/LearnMoreCTA";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { SoftwareAppSchema } from "@/components/seo/SoftwareAppSchema";
import {
  PaymentPlanMockup,
  DashboardMockup,
  BookingPageMockup,
  EmailMockup,
} from "@/components/mockups";
import { SIGNUP_URL } from "@/lib/constants";

// Lazy-load client components below the fold
const FAQ = dynamic(() => import("@/components/ui/FAQ").then((mod) => mod.FAQ));

export const metadata: Metadata = generatePageMetadata({
  title: "Stop Chasing Payments for Group Trips | SquadTrip",
  description:
    "Create a booking page, collect payments automatically, and track everything in one dashboard. Trusted by 2,000+ trip organizers. Free to start.",
  path: "",
});

const homepageFAQ = [
  {
    question: "Is there an easier way to collect money for a group trip?",
    answer:
      "Yes—that’s exactly why we built SquadTrip. Instead of chasing Venmo payments and tracking everything in a spreadsheet, you create one booking page, set up automatic payment plans, and let the platform handle reminders and tracking. Most organizers say it saves them 10+ hours per trip.",
  },
  {
    question:
      "How is this different from just using Venmo or a spreadsheet?",
    answer:
      "Venmo is great for splitting a dinner tab, but group trips involve thousands of dollars, multiple payments over months, and detailed traveler information. SquadTrip gives you automatic payment plans, a real-time dashboard showing who paid, professional booking pages, and automatic reminders—so you’re not chasing people or updating spreadsheets for months.",
  },
  {
    question:
      "Can I use this for a small friends trip, or is it only for businesses?",
    answer:
      "SquadTrip works for trips of any size. Planning a bachelorette for 8 people? Perfect. Running a travel business with 500 guests per trip? Also perfect. The free plan works great for smaller trips, and you can upgrade as your needs grow.",
  },
  {
    question: "What does it cost? Are there hidden fees?",
    answer:
      "SquadTrip is free to start. We offer a free plan plus paid plans starting at $29/month with additional features. Booking fees are 6%, which includes the credit card processing fee (2.9% + 30¢) that Stripe charges. So if your trip costs $1,000, your traveler pays $1,060—you receive $1,000, and the $60 covers Stripe and our platform fee. No hidden fees, no surprises.",
  },
  {
    question: "Is it complicated for my travelers to pay?",
    answer:
      "Not at all. Your travelers see a clean booking page, select their package, enter their info, and pay with a credit card or Apple Pay. If they choose a payment plan, their card is charged automatically each month. They can also log into a traveler portal to update their payment method, view receipts, and see their balance. Most travelers find it easier than receiving Venmo requests.",
  },
  {
    question: "What happens if someone’s payment fails?",
    answer:
      "SquadTrip automatically retries failed payments and sends the traveler a notification to update their card. You get an alert so you know what’s happening, but you don’t have to chase anyone down. The platform handles it.",
  },
  {
    question: "Can I try it before committing?",
    answer:
      "Absolutely. You can create your first trip for free—no credit card required. You’ll only pay a payment processing fee, which can be passed on to your travelers.",
  },
  {
    question: "How do I get my money?",
    answer:
      "When travelers pay, the money goes to your connected Stripe account and is deposited into your bank account. You can set up daily or weekly payouts. SquadTrip never holds your money—it goes directly from your traveler’s card to your bank through Stripe.",
  },
];

export default function HomePage() {
  return (
    <>
      <SoftwareAppSchema />
      <FAQSchema items={homepageFAQ} />

      {/* Hero */}
      <Hero
        layout="split"
        headline="Stop Chasing Payments for Your Group Trip"
        subheadline="Create a booking page, set up automatic payment plans, and track who paid—all in one place. So you can focus on the trip, not the spreadsheet."
        ctaText="Create your trip for free"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        trustLine="No credit card required • Free to use"
        eyebrow="Trusted by 2,000+ trip organizers — 50,000+ travelers booked"
        mockup={<DashboardMockup />}
      />

      {/* Problem Validation */}
      <ProblemValidation
        headline="Planning a group trip? Here’s the part nobody warns you about."
        subtitle="The real cost of DIY group trip planning:"
        stats={[
          {
            icon: "⏰",
            value: 47,
            label: "hours spent chasing payments",
          },
          {
            icon: "😬",
            value: 23,
            label: 'awkward "did you pay?" texts',
          },
          {
            icon: "💳",
            value: 5,
            prefix: "$",
            suffix: "K",
            label: "fronted on your credit card",
          },
          {
            icon: "📊",
            value: 156,
            label: "spreadsheet updates (still wrong)",
          },
        ]}
        caption="* Based on average 15-person group trip over 4 months"
        ctaText="There’s a better way"
        ctaHref="#features"
      />

      {/* Feature Bento Grid */}
      <FeatureBentoGrid />

      {/* How It Works */}
      <HowItWorks
        steps={[
          {
            step: "1",
            title: "Create your trip",
            description:
              "Add your packages, rooms, pricing, and trip details. Takes about 10 minutes.",
          },
          {
            step: "2",
            title: "Share your link",
            description:
              "Send one link to your group. Travelers book and pay online—no back and forth.",
          },
          {
            step: "3",
            title: "Track everything",
            description:
              "Watch payments come in, send updates, and export reports. All from one dashboard.",
          },
        ]}
        ctaText="Create your first trip →"
        ctaHref={SIGNUP_URL}
      />

      {/* Who Uses SquadTrip */}
      <WhoUsesSquadTrip />

      {/* Feature Block 1: Automatic Payments */}
      <section className="feature-blocks">
        <FeatureBlock
          title="Sick of chasing payments for 3 months?"
          description={`"Hey, did you pay yet?" is the worst text to send—and worse to send 12 times. Set up payment plans once, enable auto-charge, and you’re done. Travelers’ cards are charged automatically on schedule. They get reminders before each payment and receipts after. You get notified when money hits your account.`}
          highlights={[
            { icon: "⚡", text: "Auto-charge on schedule" },
            { icon: "🔔", text: "Automatic reminders" },
            { icon: "🧾", text: "Receipts sent instantly" },
          ]}
          testimonial={{
            quote:
              "I used to front $15K on my credit card and pray everyone paid me back. Now I set up the payment plan, enable auto-charge, and the money just shows up in my account.",
            attribution: "First-time organizer",
          }}
          linkText="See how auto-charge works"
          linkHref="/product/squadtrip-simplifies-payments-for-group-travel-organizers"
          mockup={<PaymentPlanMockup />}
        />

        {/* Feature Block 2: Dashboard */}
        <FeatureBlock
          title="Finally see who paid—without checking a spreadsheet"
          description={`Your group chat says "I paid!" but your spreadsheet says otherwise. Sound familiar? SquadTrip shows you exactly who paid, who’s on track, and who needs a nudge—updated in real-time. No more guessing, no more "let me check," no more 30 minutes updating cells.`}
          reverse
          highlights={[
            { icon: "📊", text: "Real-time payment status" },
            { icon: "👀", text: "See who’s behind at a glance" },
            { icon: "📥", text: "Export reports in one click" },
          ]}
          testimonial={{
            quote:
              "I used to spend 30 minutes a week updating my spreadsheet and still got it wrong. Now I just open my dashboard and it’s all there—who paid, who hasn’t, how much I’ve collected.",
            attribution: "Repeat organizer",
          }}
          linkText="See the dashboard"
          linkHref="/features#manage"
          mockup={<DashboardMockup />}
        />

        {/* Feature Block 3: Booking Pages */}
        <FeatureBlock
          title="Tired of explaining 'what's included?' in 47 DMs?"
          description="When trip details live in your head (or scattered across texts), you become a full-time FAQ machine. Create a beautiful booking page with packages, rooms, pricing, and itinerary—shareable with one link."
          bonus="Plus, collect traveler details (passport info, dietary restrictions, roommate preferences) right at checkout—no more copying from screenshots."
          testimonial={{
            quote:
              "I used to spend hours answering the same questions. Now I send my SquadTrip link and they have everything—and I get all their info automatically.",
            attribution: "Group trip organizer",
          }}
          linkText="See example booking page"
          linkHref="/product/build-a-professional-checkout-experience-for-your-group-trips"
          mockup={<BookingPageMockup />}
        />

        {/* Feature Block 4: Emails & Reminders */}
        <FeatureBlock
          title={`Send reminders without being “that person”`}
          description={`Nobody wants to be the friend who’s always asking about money. But someone has to. Let SquadTrip be the bad guy. Automatic payment reminders go out before each due date—professional, friendly, and not from your personal number.`}
          reverse
          highlights={[
            { icon: "✉️", text: "Email reminders & receipts" },
            { icon: "📱", text: "SMS payment alerts" },
            { icon: "🔄", text: "Auto-retry failed payments" },
          ]}
          testimonial={{
            quote:
              "The automatic reminders are a lifesaver. I don’t have to nag anyone, and everyone still pays on time. When a card fails, SquadTrip handles it—I just get an alert.",
            attribution: "Community trip leader",
          }}
          linkText="Get started"
          linkHref={SIGNUP_URL}
          mockup={<EmailMockup />}
        />
      </section>

      {/* Comparison Table */}
      <ComparisonTable
        headline="Can't I just use Venmo and a spreadsheet?"
        intro="You could. Here's what that looks like:"
        columnHeaders={["Task", "DIY Approach", "With SquadTrip"]}
        rows={[
          { task: "Collecting payments", diy: "Chase people for months", squadtrip: "Automatic payment plans" },
          { task: "Tracking who paid", diy: "Spreadsheet (always outdated)", squadtrip: "Real-time dashboard" },
          { task: "Sending reminders", diy: 'Awkward texts ("hey, did you...?")', squadtrip: "Automatic emails they expect" },
          { task: "Payment failures", diy: "You find out when they tell you", squadtrip: "Auto-retry + instant alerts" },
          { task: "Professional look", diy: "Venmo request screenshots", squadtrip: "Branded booking page" },
          { task: "Your time", diy: "10+ hours of admin per trip", squadtrip: "Set it up once, done" },
        ]}
        ctaText="Start your free trip →"
        ctaHref={SIGNUP_URL}
      />

      {/* Testimonials */}
      <TestimonialsSection
        headline="Trusted by over 2,000 group trip creators"
        subtitle="Used for trips to: Cancun • Jamaica • Costa Rica • Bali • Greece • 500+ destinations"
        featured={{
          quote:
            "If it wasn’t for SquadTrip, I wouldn’t have been able to grow my group trips from 50 guests to 500. Before, I was using spreadsheets, collecting money individually across a number of platforms. I was struggling to identify an efficient solution for traveler receipts, reminders, and invoices. SquadTrip changed the game completely.",
          author: "Collin D. Williams Jr.",
          company: "CDE Antigua",
          initials: "CW",
          badge: "Tour Operator",
          metrics: [
            { value: "50→500", label: "Travelers" },
            { value: "10x", label: "Growth" },
          ],
        }}
        side={[
          {
            quote:
              "Switching to SquadTrip was one of the best decisions I’ve made for my business. The platform’s ability to track trip package inventory and offer payment plans has made it easier for me to manage my bookings.",
            author: "Andrew Bennett",
            company: "Passport Society",
            initials: "AB",
            badge: "Travel Business",
          },
          {
            quote:
              "I’m not a travel agent—I’m just trying to get 60 people to my wedding. SquadTrip let me set up room blocks, collect deposits, and track everything without losing my mind.",
            author: "Diana Wilson",
            company: "Riviera Maya Wedding",
            initials: "DW",
            badge: "Wedding Coordinator",
          },
        ]}
        bottom={[
          {
            quote:
              "I was nervous about planning my first group trip, but SquadTrip made it so easy. I thought software like this was only for travel professionals, but it’s actually perfect for someone like me.",
            author: "Michelle L.",
            company: "Friends Trip to Cancun",
            initials: "ML",
            badge: "First-Time Organizer",
          },
          {
            quote:
              "Managing payments for my yoga retreats used to be a nightmare. Now I set up payment plans, and everything runs on autopilot. My guests appreciate the professional experience.",
            author: "Michelle L.",
            company: "Serenity Retreats",
            initials: "ML",
            badge: "Retreat Leader",
          },
        ]}
      />

      {/* Trust Signals */}
      <TrustSignals />

      {/* Learn More CTA */}
      <LearnMoreCTA
        headline="Want to see everything SquadTrip can do?"
        subtitle="Explore our full feature set and transparent pricing."
      />

      {/* FAQ */}
      <FAQ items={homepageFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Ready to stop chasing payments?"
        subheadline="Create your first trip in 10 minutes. Free to start, no credit card required."
        primaryText="Create your trip for free"
        primaryHref={SIGNUP_URL}
      />
    </>
  );
}
