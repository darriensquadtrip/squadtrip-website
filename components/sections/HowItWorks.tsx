import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SIGNUP_URL } from "@/lib/constants";

interface Step {
  step: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps?: Step[];
  ctaText?: string;
  ctaHref?: string;
}

const defaultSteps: Step[] = [
  {
    step: "1",
    title: "Create Your Trip",
    description:
      "Build a beautiful booking page with your itinerary, packages, add-ons, and pricing in minutes.",
  },
  {
    step: "2",
    title: "Share With Travelers",
    description:
      "Send your booking link to travelers. They can view the trip, select packages, and pay online.",
  },
  {
    step: "3",
    title: "Track & Get Paid",
    description:
      "Monitor payments in real-time, send automated reminders, and receive payouts directly to your bank.",
  },
];

export function HowItWorks({
  steps = defaultSteps,
  ctaText = "Create your trip for free",
  ctaHref = SIGNUP_URL,
}: HowItWorksProps) {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <ScrollReveal>
          <h2>How It Works</h2>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.step} className="step-card">
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="cta-center">
          <a href={ctaHref} className="btn-primary">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
