import type { GuideSummary } from "@/lib/guides";
import { GuideCard } from "./GuideCard";

interface RelatedGuidesProps {
  guides: GuideSummary[];
}

export function RelatedGuides({ guides }: RelatedGuidesProps) {
  if (guides.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Related Guides
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </section>
  );
}
