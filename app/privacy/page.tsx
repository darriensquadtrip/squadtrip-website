import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how SquadTrip collects, uses, and shares your information. Read our full Privacy Policy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              This Privacy Policy describes how SquadTrip collects, uses, and
              shares information. For questions, contact us at{" "}
              <a
                href="mailto:support@squadtrip.com"
                className="text-purple-700 hover:text-purple-900 underline"
              >
                support@squadtrip.com
              </a>
              .
            </p>

            <p className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-500 italic">
              The full privacy policy is currently being migrated. A
              comprehensive version will be published here shortly. In the
              meantime, if you have any questions about how we handle your data,
              please reach out to our support team.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
