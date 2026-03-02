import { generatePageMetadata } from "@/lib/metadata";
import { SIGNUP_URL } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = generatePageMetadata({
  title: "Manage Destination Weddings Like a Pro",
  description:
    "Everything you need to plan a destination wedding stress free. Create booking pages, set up flexible payment plans, and manage your wedding guests with SquadTrip.",
  path: "/destination-wedding-planners",
});

const features = [
  {
    title: "Booking Pages",
    description:
      "Create beautiful booking pages where wedding guests can browse travel packages, select their room type, and pay online.",
  },
  {
    title: "Flexible Payment Plans",
    description:
      "Let guests pay over time with automatic installment plans. No more awkward payment conversations or manual tracking.",
  },
  {
    title: "Reporting Dashboard",
    description:
      "See who has paid, who owes, and your total collected at a glance. Keep everyone on track leading up to the big day.",
  },
  {
    title: "Email & SMS Communications",
    description:
      "Send payment reminders, travel updates, and itinerary details to all your wedding guests via email and SMS.",
  },
  {
    title: "Registration",
    description:
      "Collect passport details, dietary preferences, plus-one information, and any custom fields you need from guests at checkout.",
  },
];

export default function DestinationWeddingPlannersPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          {
            name: "Destination Wedding Planners",
            href: "/destination-wedding-planners",
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Manage Destination Weddings Like a Pro
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
            Built for Destination Wedding Planners
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
            &ldquo;SquadTrip streamlines the process of tracking payment plans,
            promoting the itinerary, and selling extra add-ons.&rdquo;
          </blockquote>
          <p className="text-lg font-semibold text-gray-900">
            Chef Ahki Taylor
          </p>
          <p className="text-gray-600">The Supernatural Woman Retreats</p>
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
