import { generatePageMetadata } from "@/lib/metadata";
import { SIGNUP_URL } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = generatePageMetadata({
  title: "Collect Payments for Your Travel Group",
  description:
    "Everything you need to plan a group trip stress free. Create booking pages, set up flexible payment plans, and manage your travel group with SquadTrip.",
  path: "/travel-groups",
});

const features = [
  {
    title: "Booking Pages",
    description:
      "Create professional booking pages that let travelers browse trip details, select packages, and pay online in minutes.",
  },
  {
    title: "Flexible Payment Plans",
    description:
      "Offer automatic installment plans so travelers can pay over time. No more chasing payments or tracking spreadsheets.",
  },
  {
    title: "Reporting Dashboard",
    description:
      "See who has paid, who owes, and your total revenue at a glance. Export data anytime you need it.",
  },
  {
    title: "Email & SMS Communications",
    description:
      "Send payment reminders, trip updates, and promotional messages to your travelers via email and SMS.",
  },
];

export default function TravelGroupsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Travel Groups", href: "/travel-groups" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Collect Payments for your Travel Group
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Everything you need to plan a group trip stress free
          </p>
          <a
            href={SIGNUP_URL}
            className="inline-block rounded-lg bg-purple px-8 py-4 text-lg font-semibold text-white hover:bg-purple-dark transition-colors"
          >
            Start planning today!
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Everything You Need to Run Your Group Trip
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl sm:text-2xl font-medium text-gray-900 italic mb-6">
            &ldquo;If it wasn&apos;t for SquadTrip, I wouldn&apos;t have been
            able to grow my group trips from 50 guests to 500.&rdquo;
          </blockquote>
          <p className="text-lg font-semibold text-gray-900">
            Collin D. Williams, Jr.
          </p>
          <p className="text-gray-600">CDE Antigua</p>
        </div>
      </section>

      <CTASection
        headline="Start planning today!"
        subheadline="Create your first trip in 10 minutes. Free to start, no credit card required."
        ctaText="Create your trip for free"
        ctaHref={SIGNUP_URL}
      />
    </>
  );
}
