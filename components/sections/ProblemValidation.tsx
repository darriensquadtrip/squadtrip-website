"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CountUpAnimation } from "@/components/ui/CountUpAnimation";
import { SIGNUP_URL } from "@/lib/constants";
import { SignupLink } from "@/components/common/SignupLink";

interface Stat {
  icon?: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface ProblemValidationProps {
  headline?: string;
  subtitle?: string;
  stats?: Stat[];
  caption?: string;
  ctaText?: string;
  ctaHref?: string;
  source?: string;
  medium?: string;
  campaign?: string;
}

const defaultStats: Stat[] = [
  { icon: "⏱️", value: 47, suffix: " hrs", label: "Average time spent planning a group trip" },
  { icon: "📱", value: 23, suffix: " texts", label: "Sent chasing one late payment" },
  { icon: "💸", value: 5, suffix: "K+", label: "Lost when a traveler ghosts" },
  { icon: "📋", value: 156, suffix: "+", label: "Spreadsheet updates per trip" },
];

export function ProblemValidation({
  headline = "Sound Familiar?",
  subtitle = "Group travel planning shouldn't feel like a second job.",
  stats = defaultStats,
  caption = "Based on surveys of 500+ group trip organizers",
  ctaText = "There's a better way ↓",
  ctaHref,
  source = "website",
  medium = "problem-validation",
  campaign,
}: ProblemValidationProps) {
  const isSignupLink = !ctaHref || ctaHref === SIGNUP_URL;

  return (
    <section className="problem-section">
      <div className="problem-container">
        <ScrollReveal>
          <h2>{headline}</h2>
          <p className="problem-subtitle">{subtitle}</p>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                {stat.icon && <div className="stat-icon">{stat.icon}</div>}
                <div className="stat-number">
                  <CountUpAnimation target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {caption && <p className="stats-caption">{caption}</p>}

        {isSignupLink ? (
          <SignupLink source={source} medium={medium} campaign={campaign} className="problem-cta">
            {ctaText}
          </SignupLink>
        ) : (
          <a href={ctaHref} className="problem-cta">
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
