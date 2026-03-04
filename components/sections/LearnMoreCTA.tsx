import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CTACard {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  featured?: boolean;
}

interface LearnMoreCTAProps {
  headline?: string;
  subtitle?: string;
  cards?: CTACard[];
}

const defaultCards: CTACard[] = [
  {
    icon: "✨",
    title: "See All Features",
    description: "Everything you need to build, promote, sell, manage, and get paid.",
    linkText: "Explore features →",
    href: "/features",
    featured: true,
  },
  {
    icon: "💰",
    title: "View Pricing",
    description: "Simple, transparent pricing. Free to start, pay only when you get paid.",
    linkText: "See pricing →",
    href: "/pricing",
  },
];

export function LearnMoreCTA({
  headline = "Want to Learn More?",
  subtitle = "Discover how SquadTrip can simplify your group travel business.",
  cards = defaultCards,
}: LearnMoreCTAProps) {
  return (
    <section className="learn-more-section">
      <div className="learn-more-container">
        <ScrollReveal>
          <h2>{headline}</h2>
          <p>{subtitle}</p>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="learn-more-cards">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className={`learn-more-card${card.featured ? " featured" : ""}`}
              >
                <div className="learn-more-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className="learn-more-link">{card.linkText}</span>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
