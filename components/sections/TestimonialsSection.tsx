import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  initials: string;
  badge?: string;
}

interface FeaturedMetric {
  value: string;
  label: string;
}

interface TestimonialsSectionProps {
  headline?: string;
  subtitle?: string;
  featured: Testimonial & { metrics?: FeaturedMetric[] };
  side: Testimonial[];
  bottom?: Testimonial[];
}

export function TestimonialsSection({
  headline = "Trusted by 2,000+ Trip Organizers",
  subtitle = "Here’s what real organizers say about SquadTrip.",
  featured,
  side,
  bottom,
}: TestimonialsSectionProps) {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <ScrollReveal>
          <h2>{headline}</h2>
          <p className="testimonials-subtitle">{subtitle}</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="testimonials-featured">
            {/* Featured card */}
            <div className="testimonial-card-featured">
              {featured.badge && (
                <div className="featured-badge">{featured.badge}</div>
              )}
              <div className="featured-stars">★★★★★</div>
              <p className="testimonial-quote">&ldquo;{featured.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{featured.initials}</div>
                <div className="testimonial-info">
                  <h4>{featured.author}</h4>
                  <p>{featured.company}</p>
                </div>
              </div>
              {featured.metrics && featured.metrics.length > 0 && (
                <div className="featured-metric">
                  {featured.metrics.map((m) => (
                    <div key={m.label} className="metric-item">
                      <div className="metric-value">{m.value}</div>
                      <div className="metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Side cards */}
            <div className="testimonials-side">
              {side.map((t) => (
                <div key={t.author} className="testimonial-card-side">
                  {t.badge && <div className="side-badge">{t.badge}</div>}
                  <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initials}</div>
                    <div className="testimonial-info">
                      <h4>{t.author}</h4>
                      <p>{t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom row */}
        {bottom && bottom.length > 0 && (
          <ScrollReveal stagger>
            <div className="testimonials-bottom">
              {bottom.map((t) => (
                <div key={t.author} className="testimonial-card-bottom">
                  {t.badge && <div className="bottom-badge">{t.badge}</div>}
                  <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initials}</div>
                    <div className="testimonial-info">
                      <h4>{t.author}</h4>
                      <p>{t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
