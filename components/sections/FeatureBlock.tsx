import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Highlight {
  icon: string;
  text: string;
}

interface Testimonial {
  quote: string;
  attribution: string;
}

interface FeatureBlockProps {
  title: string;
  description: string;
  mockup: React.ReactNode;
  reverse?: boolean;
  highlights?: Highlight[];
  testimonial?: Testimonial;
  bonus?: string;
  linkText?: string;
  linkHref?: string;
}

export function FeatureBlock({
  title,
  description,
  mockup,
  reverse = false,
  highlights,
  testimonial,
  bonus,
  linkText,
  linkHref,
}: FeatureBlockProps) {
  return (
    <ScrollReveal>
      <div className={`feature-block${reverse ? " reverse" : ""}`}>
        <div className="feature-block-content">
          <h3>{title}</h3>
          <p>{description}</p>

          {highlights && highlights.length > 0 && (
            <div className="feature-highlight">
              {highlights.map((h) => (
                <div key={h.text} className="highlight-item">
                  <span className="highlight-icon">{h.icon}</span>
                  {h.text}
                </div>
              ))}
            </div>
          )}

          {bonus && <div className="feature-bonus">{bonus}</div>}

          {testimonial && (
            <div className="feature-testimonial">
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <span className="attribution">&mdash; {testimonial.attribution}</span>
            </div>
          )}

          {linkText && linkHref && (
            <a href={linkHref} className="feature-block-link">
              {linkText} &rarr;
            </a>
          )}
        </div>

        <div className="feature-block-image">{mockup}</div>
      </div>
    </ScrollReveal>
  );
}
