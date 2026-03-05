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
import { PaymentPlanMockup } from "@/components/mockups/PaymentPlanMockup";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { BookingPageMockup } from "@/components/mockups/BookingPageMockup";

export const metadata = generatePageMetadata({
  title: "Flexible Payment Options for Group Trips",
  description:
    "Offer flexible payment plans for your group trips. Let travelers pay in installments with automatic billing, reminders, and multiple payment methods including Klarna and Afterpay.",
  path: "/flexible-payment-options-for-group-trips",
});

const paymentFAQ = [
  {
    question: "How do payment plans work on SquadTrip?",
    answer:
      "You set a payment schedule when creating your trip, such as 4 monthly installments. Travelers are billed automatically on the dates you choose. SquadTrip handles all billing, sends reminders before each due date, and automatically retries any failed payments. You track everything from your dashboard.",
  },
  {
    question: "What payment methods can my travelers use?",
    answer:
      "Travelers can pay with credit cards, debit cards, Apple Pay, Google Pay, and buy-now-pay-later options like Klarna and Afterpay. All payments are processed securely through Stripe. The more options you offer, the more travelers you convert.",
  },
  {
    question: "Can travelers pay in full upfront instead of installments?",
    answer:
      "Yes. When payment plans are enabled, travelers can choose to either follow the installment schedule or pay the full amount upfront. This flexibility lets each traveler pick the option that works best for their budget.",
  },
  {
    question: "What happens when a payment fails?",
    answer:
      "SquadTrip automatically retries failed payments and sends the traveler a notification to update their payment method. You are also notified so you can follow up if needed. This automated retry process recovers a significant percentage of failed payments without any action from you.",
  },
  {
    question: "When do I receive the money?",
    answer:
      "Payouts are deposited directly to your bank account through Stripe. Standard payouts arrive in 2-3 business days after each payment is collected. You do not have to wait until the trip is full or until all payments are complete to start receiving funds.",
  },
  {
    question: "What are the fees for payment collection?",
    answer:
      "SquadTrip charges a 6% booking fee which includes Stripe payment processing costs. There are no hidden fees, no setup costs, and no monthly minimum. Paid plans starting at $29 per month offer lower booking fees.",
  },
];

export default function FlexiblePaymentOptionsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Flexible Payment Options", href: "/flexible-payment-options-for-group-trips" },
        ]}
      />
      <FAQSchema items={paymentFAQ} />

      {/* Hero (split) */}
      <Hero
        layout="split"
        headline="Flexible Payment Options for Group Trips"
        subheadline="Stop losing travelers because they cannot afford to pay all at once. SquadTrip lets you offer automatic payment plans, multiple payment methods, and buy-now-pay-later options so more people can join your trips."
        ctaText="Set up payment plans"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how payments work", href: "/features" }}
        eyebrow="More payment options, more bookings"
        mockup={<PaymentPlanMockup />}
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Rigid Payment Terms Kill Group Trip Bookings"
        subtitle="Requiring full payment upfront or chasing Venmo requests is costing you travelers and revenue."
        stats={[
          { icon: "💸", value: 40, suffix: "%", label: "Of travelers cannot pay full price upfront" },
          { icon: "📨", value: 25, suffix: "+", label: "Payment reminder messages per trip" },
          { icon: "⏱️", value: 8, suffix: " hrs/mo", label: "Spent manually tracking payments" },
          { icon: "📉", value: 30, suffix: "%", label: "Of bookings lost to inflexible payments" },
        ]}
        caption="Based on data from group trip organizers"
        ctaText="Offer flexible payments"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Automatic Payment Plans That Collect Themselves"
          description="Set up a payment schedule and let SquadTrip handle the rest. Choose your installment dates, amounts, and deadlines. Travelers are billed automatically each month and receive email reminders before each payment is due. Failed payments are retried automatically. You spend zero time chasing money and more time building your trip."
          mockup={<PaymentPlanMockup />}
          highlights={[
            { icon: "🔄", text: "Auto-billing on your schedule" },
            { icon: "⏰", text: "Pre-payment email reminders" },
            { icon: "🔁", text: "Automatic failed payment retry" },
            { icon: "📊", text: "Real-time payment tracking" },
          ]}
          bonus="Offering payment plans can increase your trip sign-up rate by up to 40%."
          testimonial={{
            quote: "The payment plans have made it so much easier for me to manage my bookings.",
            attribution: "Andrew Bennett, Passport Society",
          }}
          linkText="Create a payment plan"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Every Payment Method Your Travelers Want"
          description="The more ways travelers can pay, the more likely they are to book. SquadTrip supports credit cards, debit cards, Apple Pay, Google Pay, and buy-now-pay-later services like Klarna and Afterpay. Travelers choose the method that works best for them, and you collect payments seamlessly through one platform. All transactions are processed through Stripe for maximum security and reliability."
          mockup={
            <BookingPageMockup
              tripTitle="Dominican Republic Retreat"
              tripMeta="Nov 5-12 • 7 nights • Beachfront villa"
              packages={[
                {
                  name: "Villa Suite",
                  price: "$2,400",
                  features: ["Private Suite", "Chef Meals", "Pool Access", "Airport Transfer"],
                },
              ]}
              itinerary={[
                { day: "Day 1", title: "Welcome Dinner" },
                { day: "Day 2", title: "Waterfall Hike" },
                { day: "Day 3", title: "Beach & Spa Day" },
              ]}
              orderSummary={[
                { label: "Villa Suite", value: "$2,400" },
                { label: "Processing fee", value: "$144" },
              ]}
              total="$2,544"
            />
          }
          reverse
          highlights={[
            { icon: "💳", text: "Credit and debit cards" },
            { icon: "📱", text: "Apple Pay and Google Pay" },
            { icon: "🛒", text: "Klarna and Afterpay" },
            { icon: "🔒", text: "Stripe-powered security" },
          ]}
          linkText="See all payment options"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Track Every Dollar From Your Dashboard"
          description="See exactly where every payment stands across all your trips. The SquadTrip dashboard shows total collected, total outstanding, individual traveler payment status, and payment history. Know instantly who is paid up, who is behind, and how much revenue you have collected. Export reports for your records or share payment summaries with co-organizers."
          mockup={
            <DashboardMockup
              tripName="Payment Overview"
              collected="$38,400"
              total="$48,000"
              percent={80}
              travelers={[
                { initials: "RJ", name: "Rachel J.", amount: "$2,400", status: "paid" },
                { initials: "MT", name: "Marcus T.", amount: "$1,600", status: "partial" },
                { initials: "KP", name: "Keisha P.", amount: "$2,400", status: "paid" },
                { initials: "BL", name: "Brandon L.", amount: "$800", status: "partial" },
              ]}
            />
          }
          highlights={[
            { icon: "📊", text: "Real-time payment dashboard" },
            { icon: "👥", text: "Individual traveler tracking" },
            { icon: "📤", text: "Export payment reports" },
            { icon: "💰", text: "Revenue totals at a glance" },
          ]}
          linkText="See the payment dashboard"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={paymentFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Give Your Travelers Payment Flexibility"
        subheadline="Set up automatic payment plans in minutes. Free to start, no credit card required."
        primaryText="Start collecting payments"
        primaryHref={SIGNUP_URL}
        secondaryText="See pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
