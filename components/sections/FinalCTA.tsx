import { SIGNUP_URL } from "@/lib/constants";

interface FinalCTAProps {
  headline?: string;
  subheadline?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function FinalCTA({
  headline = "Ready to Stop Chasing Payments?",
  subheadline = "Create your first trip in 10 minutes. Free to start, no credit card required.",
  primaryText = "Create your trip for free",
  primaryHref = SIGNUP_URL,
  secondaryText = "See how it works",
  secondaryHref = "/features",
}: FinalCTAProps) {
  return (
    <section className="final-cta">
      <div className="final-cta-container">
        <h2>{headline}</h2>
        <p>{subheadline}</p>
        <div className="final-cta-buttons">
          <a href={primaryHref} className="btn-primary">
            {primaryText}
          </a>
          {secondaryText && (
            <a href={secondaryHref} className="btn-outline">
              {secondaryText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
