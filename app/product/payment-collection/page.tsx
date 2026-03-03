import { generatePageMetadata } from "@/lib/metadata";
import { SIGNUP_URL } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Hero } from "@/components/sections/Hero";
import { ProblemValidation } from "@/components/sections/ProblemValidation";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { FAQ } from "@/components/ui/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PaymentPlanMockup } from "@/components/mockups/PaymentPlanMockup";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";

export const metadata = generatePageMetadata({
  title: "Group Trip Payment Collection",
  description:
    "Automate group trip payment collection with flexible payment plans, auto-billing, and Stripe payouts. Stop chasing payments and let SquadTrip handle collections.",
  path: "/product/payment-collection",
});

const paymentFAQ = [
  {
    question: "How do payment plans work?",
    answer:
      "You set a total trip price and choose a payment schedule, such as monthly installments over 3, 6, or 12 months. SquadTrip automatically charges each traveler's card on the scheduled dates. You define the amounts and due dates, and the system handles the rest.",
  },
  {
    question: "What happens when a payment fails?",
    answer:
      "SquadTrip automatically retries failed payments on a smart schedule. The traveler receives an email and SMS notification with a link to update their card. You can see the failed payment status on your dashboard in real time without needing to follow up manually.",
  },
  {
    question: "When do I receive my money?",
    answer:
      "Payments are processed through Stripe and deposited to your bank account on a rolling basis, typically within 2-3 business days. You don't have to wait until the trip is fully funded to receive payouts.",
  },
  {
    question: "What payment methods do travelers have?",
    answer:
      "Travelers can pay with credit cards, debit cards, Apple Pay, Google Pay, and buy-now-pay-later options like Klarna and Afterpay. The more options you offer, the fewer abandoned bookings you'll see.",
  },
  {
    question: "Can travelers pay the full amount upfront?",
    answer:
      "Yes. Even when a payment plan is available, travelers always have the option to pay in full at the time of booking. The system handles both scenarios automatically.",
  },
  {
    question: "Is there a limit to how many travelers I can collect from?",
    answer:
      "No. SquadTrip scales with your trip. Whether you have 5 travelers or 500, the payment collection works the same way with no per-traveler limits.",
  },
];

export default function PaymentCollectionPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Product", href: "/product" },
          { name: "Payment Collection", href: "/product/payment-collection" },
        ]}
      />
      <FAQSchema items={paymentFAQ} />

      {/* Hero */}
      <Hero
        layout="split"
        headline="Stop Chasing Payments. Start Auto-Collecting Them."
        subheadline="Set up flexible payment plans with auto-billing and let SquadTrip collect every dollar on schedule. Failed payments retry automatically, travelers get reminders, and you get paid via Stripe."
        ctaText="Set up payment plans"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        eyebrow="Payment collection"
        mockup={<PaymentPlanMockup />}
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Collecting Group Trip Payments Is a Full-Time Job"
        subtitle="You didn't sign up to be an accountant. But somehow you're spending more time chasing money than planning the actual trip."
        stats={[
          { icon: "💸", value: 62, suffix: "%", label: "Of group organizers say payment collection is their biggest headache" },
          { icon: "📧", value: 15, suffix: "+", label: "Reminder messages sent per trip to collect overdue payments" },
          { icon: "🕐", value: 8, suffix: " hrs", label: "Spent per trip tracking who paid and who still owes" },
          { icon: "❌", value: 22, suffix: "%", label: "Of travelers drop out due to confusing payment processes" },
        ]}
        caption="Based on feedback from group trip organizers managing payments manually"
        ctaText="Automate your collections"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Flexible Payment Plans Travelers Actually Appreciate"
          description="Break trip costs into manageable installments so more travelers can say yes. You set the schedule, whether it's 3 payments over 3 months or 12 monthly installments leading up to departure. Travelers are charged automatically on each due date. No manual invoicing, no awkward follow-ups."
          mockup={<PaymentPlanMockup />}
          highlights={[
            { icon: "📅", text: "Custom payment schedules" },
            { icon: "🔄", text: "Automatic monthly billing" },
            { icon: "💳", text: "Cards, Apple Pay, Google Pay" },
            { icon: "🛍️", text: "Klarna & Afterpay supported" },
          ]}
          testimonial={{
            quote: "Payment plans were the game changer. My travelers stopped hesitating because they could spread the cost over months instead of paying everything at once.",
            attribution: "Andrew Bennett, Passport Society",
          }}
          linkText="Create a payment plan"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Auto-Retry and Smart Reminders Handle the Follow-Up"
          description="When a scheduled payment fails, SquadTrip retries the charge automatically over the next few days. At the same time, the traveler receives an email and optional SMS reminder with a direct link to update their payment method. You never have to send an awkward 'hey, your payment bounced' message again."
          mockup={
            <DashboardMockup
              tripName="Jamaica Group Trip"
              collected="$18,400"
              total="$24,000"
              percent={77}
              travelers={[
                { initials: "MJ", name: "Marcus J.", amount: "$2,400", status: "paid" },
                { initials: "SL", name: "Sarah L.", amount: "$1,800", status: "paid" },
                { initials: "RW", name: "Ray W.", amount: "$800", status: "partial" },
                { initials: "AN", name: "Alicia N.", amount: "$0", status: "pending" },
              ]}
            />
          }
          reverse
          highlights={[
            { icon: "🔁", text: "Smart auto-retry on failed charges" },
            { icon: "📩", text: "Automatic email reminders" },
            { icon: "📲", text: "Optional SMS notifications" },
            { icon: "🔗", text: "One-click card update link" },
          ]}
          bonus="Organizers using auto-retry and reminders recover 94% of initially failed payments without any manual effort."
          linkText="See how reminders work"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Track Every Dollar From Your Dashboard"
          description="Your payment dashboard shows exactly who has paid, who is on a plan, who owes, and how much you've collected in total. Filter by trip, payment status, or traveler name. Export your data to CSV for your records or accounting software. No more cross-referencing Venmo, Zelle, and spreadsheets."
          mockup={
            <DashboardMockup
              tripName="All Trips Overview"
              collected="$86,200"
              total="$112,000"
              percent={77}
              travelers={[
                { initials: "TR", name: "Tulum Retreat", amount: "$32,400", status: "paid" },
                { initials: "JG", name: "Jamaica Group", amount: "$24,000", status: "partial" },
                { initials: "CR", name: "Costa Rica Crew", amount: "$18,800", status: "partial" },
                { initials: "BA", name: "Bali Adventure", amount: "$11,000", status: "pending" },
              ]}
            />
          }
          highlights={[
            { icon: "📊", text: "Real-time payment tracking" },
            { icon: "🔍", text: "Filter by status or traveler" },
            { icon: "📤", text: "One-click CSV export" },
            { icon: "💰", text: "Revenue totals across all trips" },
          ]}
          linkText="See your dashboard"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={paymentFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Collect Payments Without the Headache"
        subheadline="Set up auto-billing and let SquadTrip handle the rest. Free to start, no credit card required."
        primaryText="Start collecting payments"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
