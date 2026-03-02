import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { FeatureBentoGrid } from "@/components/sections/FeatureBentoGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhoUsesSquadTrip } from "@/components/sections/WhoUsesSquadTrip";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { FAQ } from "@/components/ui/FAQ";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { SoftwareAppSchema } from "@/components/seo/SoftwareAppSchema";
import { SIGNUP_URL } from "@/lib/constants";

const homeFAQ = [
  {
    question: "What are processing fees and how do they work?",
    answer:
      "Processing fees are 6%. This includes the merchant fee (2.9% + 30¢) that Stripe charges for processing credit card payments. You can hide fees from travelers and use a pricing calculator to adjust rates accordingly. For example, a $1,000 trip costs travelers $1,060, and the organizer receives $1,000.",
  },
  {
    question: "How do I get paid?",
    answer:
      "When your customers make a payment, the funds are processed through your Stripe account and sent directly to your bank account. Stripe usually takes 7-14 days to release your first payment, after which you can receive payments anytime. You can also set up daily payouts.",
  },
  {
    question: "What payment options are available?",
    answer:
      "Travelers can pay by credit card, Apple Pay, or sign up for installment plans through monthly auto-billing, Klarna, or AfterPay.",
  },
  {
    question: "Do you send receipts and payment reminders?",
    answer:
      "Yes! We automatically send receipts, confirmation emails, payment reminders, and payment failure notifications to your travelers.",
  },
  {
    question: "How do I view my sales?",
    answer:
      "In addition to getting email alerts when travelers make payments, you can view your sales in real-time on your SquadTrip dashboard. You can also export data anytime.",
  },
  {
    question: "Who is SquadTrip best for?",
    answer:
      "SquadTrip is best for individual group travel planners, travel agencies, tour operators, retreat organizers, and destination wedding planners who need an online booking process and payment gateway for group travel.",
  },
];

export default function HomePage() {
  return (
    <>
      <SoftwareAppSchema />
      <FAQSchema items={homeFAQ} />

      <Hero
        headline="Stop Chasing Payments for Your Group Trip"
        subheadline="Create a booking page, set up automatic payment plans, and track who paid — all in one place. So you can focus on the trip, not the spreadsheet."
        ctaText="Create your trip for free"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        trustLine="Trusted by 2,000+ trip organizers | 50,000+ travelers booked"
      />

      <SocialProof />
      <FeatureBentoGrid />
      <HowItWorks />
      <WhoUsesSquadTrip />
      <TestimonialCarousel />
      <FAQ items={homeFAQ} />
    </>
  );
}
