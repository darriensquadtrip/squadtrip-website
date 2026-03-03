import type { Metadata } from "next";
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
import { FAQ } from "@/components/ui/FAQ";
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
      "Yes\u2014that\u2019s exactly why we built SquadTrip. Instead of chasing Venmo payments and tracking everything in a spreadsheet, you create one booking page, set up automatic payment plans, and let the platform handle reminders and tracking. Most organizers say it saves them 10+ hours per trip.",
  },
  {
    question:
      "How is this different from just using Venmo or a spreadsheet?",
    answer:
      "Venmo is great for splitting a dinner tab, but group trips involve thousands of dollars, multiple payments over months, and detailed traveler information. SquadTrip gives you automatic payment plans, a real-time dashboard showing who paid, professional booking pages, and automatic reminders\u2014so you\u2019re not chasing people or updating spreadsheets for months.",
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
      "SquadTrip is free to start. We offer a free plan plus paid plans starting at $29/month with additional features. Booking fees are 6%, which includes the credit card processing fee (2.9% + 30\u00a2) that Stripe charges. So if your trip costs $1,000, your traveler pays $1,060\u2014you receive $1,000, and the $60 covers Stripe and our platform fee. No hidden fees, no surprises.",
  },
  {
    question: "Is it complicated for my travelers to pay?",
    answer:
      "Not at all. Your travelers see a clean booking page, select their package, enter their info, and pay with a credit card or Apple Pay. If they choose a payment plan, their card is charged automatically each month. They can also log into a traveler portal to update their payment method, view receipts, and see their balance. Most travelers find it easier than receiving Venmo requests.",
  },
  {
    question: "What happens if someone\u2019s payment fails?",
    answer:
      "SquadTrip automatically retries failed payments and sends the traveler a notification to update their card. You get an alert so you know what\u2019s happening, but you don\u2019t have to chase anyone down. The platform handles it.",
  },
  {
    question: "Can I try it before committing?",
    answer:
      "Absolutely. You can create your first trip for free\u2014no credit card required. You\u2019ll only pay a payment processing fee, which can be passed on to your travelers.",
  },
  {
    question: "How do I get my money?",
    answer:
      "When travelers pay, the money goes to your connected Stripe account and is deposited into your bank account. You can set up daily or weekly payouts. SquadTrip never holds your money\u2014it goes directly from your traveler\u2019s card to your bank through Stripe.",
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
        subheadline="Create a booking page, set up automatic payment plans, and track who paid\u2014all in one place. So you can focus on the trip, not the spreadsheet."
        ctaText="Create your trip for free"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        trustLine="No credit card required \u2022 Free to use"
        eyebrow="Trusted by 2,000+ trip organizers \u2014 50,000+ travelers booked"
        mockup={<DashboardMockup />}
      />

      {/* Problem Validation */}
      <ProblemValidation
        headline="Planning a group trip? Here\u2019s the part nobody warns you about."
        subtitle="The real cost of DIY group trip planning:"
        stats={[
          {
            icon: "\u23F0",
            value: 47,
            label: "hours spent chasing payments",
          },
          {
            icon: "\uD83D\uDE2C",
            value: 23,
            label: 'awkward "did you pay?" texts',
          },
          {
            icon: "\uD83D\uDCB3",
            value: 5,
            prefix: "$",
            suffix: "K",
            label: "fronted on your credit card",
          },
          {
            icon: "\uD83D\uDCCA",
            value: 156,
            label: "spreadsheet updates (still wrong)",
          },
        ]}
        caption="* Based on average 15-person group trip over 4 months"
        ctaText="There\u2019s a better way"
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
              "Send one link to your group. Travelers book and pay online\u2014no back and forth.",
          },
          {
            step: "3",
            title: "Track everything",
            description:
              "Watch payments come in, send updates, and export reports. All from one dashboard.",
          },
        ]}
        ctaText="Create your first trip \u2192"
        ctaHref={SIGNUP_URL}
      />

      {/* Who Uses SquadTrip */}
      <WhoUsesSquadTrip />

      {/* Feature Block 1: Automatic Payments */}
      <section className="feature-blocks">
        <FeatureBlock
          title="Sick of chasing payments for 3 months?"
          description={`"Hey, did you pay yet?" is the worst text to send\u2014and worse to send 12 times. Set up payment plans once, enable auto-charge, and you\u2019re done. Travelers\u2019 cards are charged automatically on schedule. They get reminders before each payment and receipts after. You get notified when money hits your account.`}
          highlights={[
            { icon: "\u26A1", text: "Auto-charge on schedule" },
            { icon: "\uD83D\uDD14", text: "Automatic reminders" },
            { icon: "\uD83E\uDDFE", text: "Receipts sent instantly" },
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
          title="Finally see who paid\u2014without checking a spreadsheet"
          description={`Your group chat says "I paid!" but your spreadsheet says otherwise. Sound familiar? SquadTrip shows you exactly who paid, who\u2019s on track, and who needs a nudge\u2014updated in real-time. No more guessing, no more "let me check," no more 30 minutes updating cells.`}
          reverse
          highlights={[
            { icon: "\uD83D\uDCCA", text: "Real-time payment status" },
            { icon: "\uD83D\uDC40", text: "See who\u2019s behind at a glance" },
            { icon: "\uD83D\uDCE5", text: "Export reports in one click" },
          ]}
          testimonial={{
            quote:
              "I used to spend 30 minutes a week updating my spreadsheet and still got it wrong. Now I just open my dashboard and it\u2019s all there\u2014who paid, who hasn\u2019t, how much I\u2019ve collected.",
            attribution: "Repeat organizer",
          }}
          linkText="See the dashboard"
          linkHref="/features#manage"
          mockup={<DashboardMockup />}
        />

        {/* Feature Block 3: Booking Pages */}
        <FeatureBlock
          title="Give travelers a page that sells the trip for you"
          description="Stop sending group chat messages with trip details that get buried. Create a professional booking page with your itinerary, packages, photos, and pricing. Travelers can browse, choose their room, and pay\u2014all in one place."
          bonus="Plus, collect traveler details (passport info, dietary restrictions, roommate preferences) right at checkout\u2014no more copying from screenshots."
          testimonial={{
            quote:
              "My booking page looks so professional that travelers think I hired a web designer. It literally sells the trip for me.",
            attribution: "Travel agent",
          }}
          linkText="See example booking page"
          linkHref="/product/build-a-professional-checkout-experience-for-your-group-trips"
          mockup={<BookingPageMockup />}
        />

        {/* Feature Block 4: Emails & Reminders */}
        <FeatureBlock
          title="Never send another \u201Cjust checking in\u201D text"
          description="SquadTrip handles all the follow-up so you don\u2019t have to. Payment reminders go out before each installment. Receipts are sent automatically. Failed payment? We retry and notify the traveler. You get updates without lifting a finger."
          reverse
          highlights={[
            { icon: "\u2709\uFE0F", text: "Email reminders & receipts" },
            { icon: "\uD83D\uDCF1", text: "SMS payment alerts" },
            { icon: "\uD83D\uDD04", text: "Auto-retry failed payments" },
          ]}
          testimonial={{
            quote:
              "I used to dread the \u2018Hey, your payment is late\u2019 conversation. Now I don\u2019t even have to think about it\u2014SquadTrip handles all the reminders.",
            attribution: "Retreat organizer",
          }}
          linkText="Get started"
          linkHref={SIGNUP_URL}
          mockup={<EmailMockup />}
        />
      </section>

      {/* Testimonials */}
      <TestimonialsSection
        headline="Trusted by over 2,000 group trip creators"
        subtitle="Used for trips to: Cancun \u2022 Jamaica \u2022 Costa Rica \u2022 Bali \u2022 Greece \u2022 500+ destinations"
        featured={{
          quote:
            "If it wasn\u2019t for SquadTrip, I wouldn\u2019t have been able to grow my group trips from 50 guests to 500. Before, I was using spreadsheets, collecting money individually across a number of platforms. I was struggling to identify an efficient solution for traveler receipts, reminders, and invoices. SquadTrip changed the game completely.",
          author: "Collin D. Williams Jr.",
          company: "CDE Antigua",
          initials: "CW",
          badge: "Tour Operator",
          metrics: [
            { value: "50\u2192500", label: "Travelers" },
            { value: "10x", label: "Growth" },
          ],
        }}
        side={[
          {
            quote:
              "Switching to SquadTrip was one of the best decisions I\u2019ve made for my business. The platform\u2019s ability to track trip package inventory and offer payment plans has made it easier for me to manage my bookings.",
            author: "Andrew Bennett",
            company: "Passport Society",
            initials: "AB",
            badge: "Travel Business",
          },
          {
            quote:
              "I\u2019m not a travel agent\u2014I\u2019m just trying to get 60 people to my wedding. SquadTrip let me set up room blocks, collect deposits, and track everything without losing my mind.",
            author: "Danielle W.",
            company: "Destination Wedding",
            initials: "DW",
            badge: "Wedding Coordinator",
          },
        ]}
        bottom={[
          {
            quote:
              "I was nervous about planning my first group trip, but SquadTrip made it so easy. I thought software like this was only for travel professionals, but it\u2019s actually perfect for someone like me.",
            author: "Michelle L.",
            company: "First Group Trip",
            initials: "ML",
            badge: "First-Time Organizer",
          },
          {
            quote:
              "Managing payments for my yoga retreats used to be a nightmare. Now I set up payment plans, and everything runs on autopilot. My guests appreciate the professional experience.",
            author: "Sarah K.",
            company: "Wellness Retreats",
            initials: "SK",
            badge: "Retreat Leader",
          },
        ]}
      />

      {/* Trust Signals */}
      <TrustSignals />

      {/* Learn More CTA */}
      <LearnMoreCTA
        headline="Want to see everything SquadTrip can do?"
        subtitle="Discover how SquadTrip can simplify your group travel business."
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
