import { SIGNUP_URL } from "@/lib/constants";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CTASection({
  headline = "Ready to stop chasing payments?",
  subheadline = "Create your first trip in 10 minutes. Free to start, no credit card required.",
  ctaText = "Create your trip for free",
  ctaHref = SIGNUP_URL,
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-purple">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {headline}
        </h2>
        <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
          {subheadline}
        </p>
        <a
          href={ctaHref}
          className="inline-block rounded-lg bg-yellow px-8 py-4 text-lg font-semibold text-gray-900 hover:bg-yellow-hover transition-colors"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
