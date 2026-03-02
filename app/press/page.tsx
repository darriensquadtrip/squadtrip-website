import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata = generatePageMetadata({
  title: "Press & Media",
  description:
    "SquadTrip in the news. Read about our $1.5M pre-seed funding and coverage in TechCrunch, PhocusWire, AP News, and Skift.",
  path: "/press",
});

const pressItems = [
  {
    publication: "TechCrunch",
    description:
      "Featured coverage of SquadTrip's group travel booking platform and funding round.",
  },
  {
    publication: "PhocusWire",
    description:
      "Industry analysis of SquadTrip's approach to simplifying group travel payments.",
  },
  {
    publication: "AP News",
    description:
      "National coverage of SquadTrip's mission to empower group travel organizers.",
  },
  {
    publication: "Skift",
    description:
      "Travel industry spotlight on SquadTrip's platform and growth trajectory.",
  },
];

export default function PressPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Press & Media", href: "/press" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Press &amp; Media
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            SquadTrip is redefining how group trips are organized and paid for.
            Here is what the press is saying.
          </p>
        </div>
      </section>

      {/* Funding Achievement */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-5xl sm:text-6xl font-bold text-purple-700 mb-4">
            $1.5M
          </p>
          <p className="text-xl text-gray-600">
            raised in pre-seed funding to build the future of group travel
          </p>
        </div>
      </section>

      {/* Press Mentions */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            In the News
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {pressItems.map((item) => (
              <div
                key={item.publication}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.publication}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Press Inquiries
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            For media inquiries, interview requests, or press kit access, please
            reach out to our team.
          </p>
          <a
            href="mailto:support@squadtrip.com"
            className="inline-block rounded-lg bg-purple px-8 py-4 text-lg font-semibold text-white hover:bg-purple-dark transition-colors"
          >
            Contact us for press inquiries
          </a>
        </div>
      </section>
    </>
  );
}
