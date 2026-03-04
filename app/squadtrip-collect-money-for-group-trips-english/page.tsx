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
import { BookingPageMockup } from "@/components/mockups/BookingPageMockup";

export const metadata = generatePageMetadata({
  title: "Collect Money for Group Trips",
  description:
    "Collect money for group trips the easy way. SquadTrip automates payment collection with payment plans, reminders, and a real-time dashboard so you never have to chase payments again.",
  path: "/squadtrip-collect-money-for-group-trips-english",
});

const collectFAQ = [
  {
    question: "How does SquadTrip help me collect money for group trips?",
    answer:
      "SquadTrip automates the entire payment collection process. You create a trip with pricing and payment plans, share the booking link, and travelers pay online. Payments are billed automatically on schedule, reminders are sent before each due date, and failed payments are retried. You track everything from your dashboard.",
  },
  {
    question: "Is it safer than collecting money through Venmo or Zelle?",
    answer:
      "Yes. SquadTrip processes all payments through Stripe, which provides PCI-compliant security, fraud detection, and encrypted transactions. Unlike Venmo or Zelle, SquadTrip gives you a clear record of every payment, automatic receipts for travelers, and professional invoicing.",
  },
  {
    question: "Can I set up different payment amounts for different travelers?",
    answer:
      "Yes. You can create multiple packages with different prices. For example, a shared room at one price and a private room at a higher price. Each traveler pays based on the package they select. You can also add optional add-ons that travelers can choose during checkout.",
  },
  {
    question: "What if someone wants a refund?",
    answer:
      "You control your refund policy. SquadTrip makes it easy to issue full or partial refunds with a few clicks. Refunds are processed back through Stripe to the original payment method. You can set clear refund terms on your booking page so travelers know what to expect.",
  },
  {
    question: "How quickly do I receive the collected money?",
    answer:
      "Payouts are deposited directly to your bank account through Stripe. Standard processing time is 2-3 business days. You start receiving money as soon as travelers begin paying. There is no need to wait until the trip is fully booked.",
  },
  {
    question: "What are the fees for collecting payments?",
    answer:
      "SquadTrip charges a 6% booking fee on each transaction, which includes Stripe payment processing. There are no hidden fees, no setup charges, and no monthly minimums on the free plan. Paid plans offer lower booking fees starting at $29 per month.",
  },
];

export default function CollectMoneyForGroupTripsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Collect Money for Group Trips", href: "/squadtrip-collect-money-for-group-trips-english" },
        ]}
      />
      <FAQSchema items={collectFAQ} />

      {/* Hero (split) */}
      <Hero
        layout="split"
        headline="Collect Money for Group Trips"
        subheadline="Tired of chasing friends and travelers for payment? SquadTrip automates payment collection for group trips with payment plans, reminders, and a real-time tracking dashboard. No more spreadsheets, Venmo requests, or awkward follow-up messages."
        ctaText="Start collecting payments"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        eyebrow="Automated payment collection for groups"
        mockup={<PaymentPlanMockup />}
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Collecting Money for Group Trips Is the Worst Part"
        subtitle="You love planning trips. You hate being the person who has to chase everyone for money."
        stats={[
          { icon: "📨", value: 45, suffix: "+", label: "Payment reminder messages per trip" },
          { icon: "💸", value: 25, suffix: "%", label: "Of travelers pay late or not at all" },
          { icon: "⏱️", value: 10, suffix: " hrs", label: "Spent tracking who paid and who owes" },
          { icon: "😓", value: 80, suffix: "%", label: "Of organizers say payments cause stress" },
        ]}
        caption="Based on surveys of group trip organizers"
        ctaText="Automate your collections"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Set It and Forget It Payment Plans"
          description="Configure your payment schedule once, and SquadTrip handles everything from there. Choose how many installments, set the due dates, and let automatic billing take over. Each traveler is charged on schedule, gets email reminders before their payment is due, and receives a receipt after each payment. If a payment fails, SquadTrip retries automatically and notifies the traveler to update their payment method."
          mockup={<PaymentPlanMockup />}
          highlights={[
            { icon: "🔄", text: "Fully automated billing cycle" },
            { icon: "⏰", text: "Pre-payment reminders sent automatically" },
            { icon: "🔁", text: "Automatic retry on failed payments" },
            { icon: "📧", text: "Payment receipts for every transaction" },
          ]}
          bonus="Organizers who use payment plans collect 95% of owed payments on time."
          testimonial={{
            quote: "The payment plans have made it so much easier for me to manage my bookings.",
            attribution: "Andrew Bennett, Passport Society",
          }}
          linkText="Set up payment plans"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="A Professional Way to Collect Trip Payments"
          description="Forget the awkward group text asking everyone to Venmo you. SquadTrip gives you a professional booking page where travelers enter their payment information and are billed automatically. Each traveler gets a clear breakdown of what they are paying for, when payments are due, and receipts for every transaction. It looks professional, builds trust, and gets people to pay on time."
          mockup={
            <BookingPageMockup
              tripTitle="Jamaica Group Vacation"
              tripMeta="Dec 15-22 • 7 nights • All-inclusive resort"
              packages={[
                {
                  name: "Deluxe Room",
                  price: "$2,100",
                  features: ["Deluxe Room", "All Meals", "Open Bar", "Water Sports"],
                },
              ]}
              itinerary={[
                { day: "Day 1", title: "Resort Check-In & Welcome" },
                { day: "Day 2", title: "Dunn's River Falls Trip" },
                { day: "Day 3", title: "Catamaran Party Cruise" },
              ]}
              orderSummary={[
                { label: "Deluxe Room", value: "$2,100" },
                { label: "Processing fee", value: "$126" },
              ]}
              total="$2,226"
            />
          }
          reverse
          highlights={[
            { icon: "🔒", text: "Secure Stripe-powered payments" },
            { icon: "💳", text: "Cards, Apple Pay, Google Pay" },
            { icon: "🛒", text: "Klarna and Afterpay available" },
            { icon: "🧾", text: "Automatic receipts for travelers" },
          ]}
          linkText="Create your booking page"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Know Exactly Where Every Dollar Stands"
          description="Your SquadTrip dashboard gives you a complete view of all money collected, outstanding balances, and individual traveler payment status. No more guessing or cross-referencing payment apps with spreadsheets. See total collected, total remaining, and each traveler's progress at a glance. Export reports whenever you need them."
          mockup={
            <DashboardMockup
              tripName="Jamaica Group Vacation"
              collected="$29,400"
              total="$42,000"
              percent={70}
              travelers={[
                { initials: "DM", name: "Destiny M.", amount: "$2,100", status: "paid" },
                { initials: "JK", name: "Jordan K.", amount: "$1,400", status: "partial" },
                { initials: "AP", name: "Aliyah P.", amount: "$2,100", status: "paid" },
                { initials: "CW", name: "Chris W.", amount: "$700", status: "partial" },
              ]}
            />
          }
          highlights={[
            { icon: "📊", text: "Real-time collection tracking" },
            { icon: "👥", text: "Per-traveler payment status" },
            { icon: "💰", text: "Total revenue at a glance" },
            { icon: "📤", text: "Export to CSV" },
          ]}
          linkText="See the payment dashboard"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={collectFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Stop Chasing Payments, Start Collecting Them"
        subheadline="Automate payment collection for your next group trip. Free to start, no credit card required."
        primaryText="Start collecting payments"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
