import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata = generatePageMetadata({
  title: "Product Updates",
  description:
    "Stay up to date with the latest SquadTrip features and improvements.",
  path: "/product-updates",
});

export default function ProductUpdatesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Product Updates", href: "/product-updates" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Product Updates
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-12">
            Stay up to date with the latest SquadTrip features and
            improvements.
          </p>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-12">
            <p className="text-lg text-gray-500">
              Check back soon for product updates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
