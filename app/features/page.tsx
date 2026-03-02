import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { FAQ } from "@/components/ui/FAQ";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { CTASection } from "@/components/sections/CTASection";
import { SIGNUP_URL } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "How It Works — Features",
  description:
    "Collect group travel payments online — fast, secure, and stress-free. Accept cards, offer Buy Now Pay Later, and set flexible payment plans.",
  path: "/features",
});

const tabs = [
  {
    id: "build",
    label: "Build",
    headline:
      "Create a sell-out trip page with stunning photos, detailed itineraries, add-ons, and packages.",
    features: [
      { title: "Trip Pages", description: "Design beautiful and user-friendly trip pages with eye-catching images and icons." },
      { title: "Itineraries", description: "Showcase the activity schedule for each day of the trip." },
      { title: "Add-ons", description: "Offer a la carte trip add-ons for your travelers to purchase at checkout." },
      { title: "Packages", description: "Build the right packages for your trips, from Double vs Single to Basic vs Premium." },
      { title: "Custom Branding", description: "Let your brand stand out with custom colors on trip pages." },
    ],
  },
  {
    id: "promote",
    label: "Promote",
    headline: "Use our built-in marketing tools to share and promote your trip with ease.",
    features: [
      { title: "Embeddable Booking Pages", description: "Use your own website and embed our checkout options directly." },
      { title: "Traveler Referrals & Tracking", description: "Pay travelers to share your trip with unique links to track referrals." },
      { title: "Affiliate Program", description: "Invite affiliates to promote your trip and track their sales from your dashboard." },
    ],
  },
  {
    id: "sell",
    label: "Sell",
    headline:
      "Get more bookings with less effort using our flexible auto-billing payment plans and automatic inventory management.",
    features: [
      { title: "Flexible Fee Handling", description: "Pass processing fees to customer or hide fees and show an all-in rate." },
      { title: "Monthly Auto-Billing", description: "Save time and make trips more affordable with auto-billing on monthly plans." },
      { title: "Flexible Deposit Amounts", description: "Set a minimum and allow travelers to deposit as much as they want." },
      { title: "Traveler Portal", description: "Allow guests to purchase add-ons, manage payments, and review the itinerary." },
      { title: "Inventory Management", description: "Set quantity limits for bookings, packages, and add-ons." },
    ],
  },
  {
    id: "manage",
    label: "Manage",
    headline: "Streamline your traveler experience with simplified data and communication management tools.",
    features: [
      { title: "Custom Scheduled Emails", description: "Set up automated email workflows for hands-off communication management." },
      { title: "Registration Questions", description: "Collect valuable data from travelers, like flight info or passport uploads." },
      { title: "Data Reports & Exports", description: "Track who's paid and what they booked, then export data to suppliers." },
      { title: "Dispute Management", description: "Monitor disputes from your dashboard." },
    ],
  },
  {
    id: "get-paid",
    label: "Get Paid",
    headline:
      "Quickly and securely process payments through Stripe and receive daily payouts sent to your bank account.",
    features: [
      { title: "Secure Payment Processing", description: "Process payments quickly and securely with Apple Pay, Credit/Debit cards through Stripe." },
      { title: "Daily Payouts via Stripe", description: "Set up payouts through Stripe and get funds sent straight to your bank account daily." },
    ],
  },
];

const featuresFAQ = [
  {
    question: "What are the costs or fees?",
    answer:
      "SquadTrip offers a free version and paid plans starting at $29 per month. The booking fee is 6%, which includes Stripe's processing costs.",
  },
  {
    question: "How do Payment Options work?",
    answer:
      "You can offer 2 Payment Options: either pay in full via credit card or Apple Pay, or sign up for a monthly payment plan with auto billing. Payment plans are charged automatically each month.",
  },
  {
    question: "How do I build Trip Options?",
    answer:
      "Use Trip Options to set up the travel itinerary and the different trip packages and room types available, such as Single vs Double Occupancy, 4-day stay vs 5-day stay, or Premium Room vs Ocean View Room.",
  },
  {
    question: "How do I advertise my trip?",
    answer:
      "Use the trip page that's automatically created when you publish your page. Have a custom website? Add a button or embed the trip options directly onto your website.",
  },
  {
    question: "Can I schedule a demo?",
    answer:
      "Of course! Visit our website and click the chat icon to schedule a demo with our team.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
        ]}
      />
      <FAQSchema items={featuresFAQ} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            How It Works
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Collect group travel payments online — fast, secure, and stress-free.
            Accept cards, offer Buy Now Pay Later, and set flexible payment plans
            — so travelers pay their way and you get paid on time, automatically.
          </p>
          <div className="mt-8">
            <a
              href={SIGNUP_URL}
              className="inline-block rounded-lg bg-purple px-8 py-4 text-lg font-semibold text-white hover:bg-purple-dark transition-colors"
            >
              Create your trip for free
            </a>
          </div>
        </div>
      </section>

      {/* Feature Tabs */}
      {tabs.map((tab) => (
        <section
          key={tab.id}
          id={tab.id}
          className={`py-16 sm:py-20 ${
            tabs.indexOf(tab) % 2 === 0 ? "bg-white" : "bg-bg-light"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="inline-block bg-purple-100 text-purple text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                {tab.label}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 max-w-3xl">
                {tab.headline}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tab.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-gray-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <FAQ items={featuresFAQ} />
      <CTASection />
    </>
  );
}
