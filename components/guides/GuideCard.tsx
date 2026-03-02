import Link from "next/link";
import Image from "next/image";
import type { GuideSummary } from "@/lib/guides";

interface GuideCardProps {
  guide: GuideSummary;
}

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group block rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow bg-white"
    >
      {guide.featuredImage && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={guide.featuredImage}
            alt={guide.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-5">
        <span className="inline-block text-xs font-semibold text-purple uppercase tracking-wide mb-2">
          {guide.category.replace(/-/g, " ")}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple transition-colors line-clamp-2">
          {guide.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {guide.description}
        </p>
        <p className="mt-3 text-xs text-gray-400">
          {guide.readingTime} min read
        </p>
      </div>
    </Link>
  );
}
