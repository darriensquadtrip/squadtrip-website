import { SIGNUP_URL } from "@/lib/constants";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCta?: { text: string; href: string };
  trustLine?: string;
}

export function Hero({
  headline,
  subheadline,
  ctaText = "Create your trip for free",
  ctaHref = SIGNUP_URL,
  secondaryCta,
  trustLine,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            {headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ctaHref}
              className="w-full sm:w-auto rounded-lg bg-purple px-8 py-4 text-lg font-semibold text-white hover:bg-purple-dark transition-colors text-center"
            >
              {ctaText}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="text-purple font-semibold hover:text-purple-dark transition-colors"
              >
                {secondaryCta.text} &rarr;
              </a>
            )}
          </div>
          {trustLine && (
            <p className="mt-6 text-sm text-gray-500">{trustLine}</p>
          )}
        </div>
      </div>
    </section>
  );
}
