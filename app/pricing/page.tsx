import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { FAQ } from "@/components/ui/FAQ";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SIGNUP_URL } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Pricing — Simple, Transparent Plans",
  description:
    "Start free with SquadTrip. Upgrade to Launch at $29/month for advanced features. 6% processing fee includes Stripe costs.",
  path: "/pricing",
});

const pricingFAQ = [
  {
    question: "What are processing fees and how do they work?",
    answer:
      "Processing fees are 6%. This includes the merchant fee (2.9% + 30¢) that Stripe charges for processing credit card payments. You can hide fees from travelers and use a pricing calculator to adjust rates accordingly.",
  },
  {
    question: "How do I get paid?",
    answer:
      "When your customers make a payment on our website, the funds will be processed on your Stripe account and sent to your bank account. Stripe usually takes 7-14 days to release your first payment, after which you can receive payments any time you desire.",
  },
  {
    question: "What payment options are available?",
    answer:
      "Credit card, Apple Pay, or installment plans through Klarna, AfterPay, or auto-billed monthly payment plans.",
  },
  {
    question: "Do you send receipts and payment reminders?",
    answer:
      "Yes! We send receipts, confirmation emails, payment reminders, and payment failure notifications.",
  },
  {
    question: "Can travelers change credit card info & retry payments?",
    answer:
      "Yes, travelers can change their credit card, view receipts, and manage their payments through the traveler portal.",
  },
];

const starterFeatures = [
  "Unlimited trips",
  "6% processing fee",
  "Booking pages",
  "Payment plans",
  "Reporting dashboard",
  "Email reminders",
  "Chat & email support",
];

const launchFeatures = [
  "Everything in Starter, plus:",
  "Custom brand colors",
  "Scheduled email communication",
  "Unlimited text messages",
  "Social media links on trip pages",
  "Additional team members",
  "Buy-Now-Pay-Later (Affirm, Klarna, AfterPay)",
  "Custom promo codes",
  "Traveler referrals & tracking",
  "Affiliate program",
  "Priority support",
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ]}
      />
      <FAQSchema items={pricingFAQ} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Start free. Upgrade when you need advanced features. No hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 -mt-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Starter */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Starter</h2>
              <p className="mt-2 text-gray-600">
                For the person who always plans the trip
              </p>
              <div className="mt-6">
                <span className="text-5xl font-bold text-gray-900">$0</span>
                <span className="text-gray-500">/month</span>
              </div>
              <a
                href={SIGNUP_URL}
                className="mt-8 block w-full rounded-lg border-2 border-purple py-3 text-center font-semibold text-purple hover:bg-purple-50 transition-colors"
              >
                Get started free
              </a>
              <ul className="mt-8 space-y-3">
                {starterFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Launch */}
            <div className="rounded-2xl border-2 border-purple p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Launch</h2>
              <p className="mt-2 text-gray-600">
                For the travel enthusiast ready to start a business
              </p>
              <div className="mt-6">
                <span className="text-5xl font-bold text-gray-900">$29</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                or $299/year (save 14%)
              </p>
              <a
                href={SIGNUP_URL}
                className="mt-8 block w-full rounded-lg bg-purple py-3 text-center font-semibold text-white hover:bg-purple-dark transition-colors"
              >
                Start free trial
              </a>
              <ul className="mt-8 space-y-3">
                {launchFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={pricingFAQ} />
    </>
  );
}
