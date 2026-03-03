"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CountUpAnimation } from "@/components/ui/CountUpAnimation";
import { SIGNUP_URL } from "@/lib/constants";

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
}

const defaultStats: Stat[] = [
  { icon: "\u23F1\uFE0F", value: 47, suffix: " hrs", label: "Average time spent planning a group trip" },
  { icon: "\uD83D\uDCF1", value: 23, suffix: " texts", label: "Sent chasing one late payment" },
  { icon: "\uD83D\uDCB8", value: 5, suffix: "K+", label: "Lost when a traveler ghosts" },
  { icon: "\uD83D\uDCCB", value: 156, suffix: "+", label: "Spreadsheet updates per trip" },
];

export function ProblemValidation({
  headline = "Sound Familiar?",
  subtitle = "Group travel planning shouldn\u2019t feel like a second job.",
  stats = defaultStats,
  caption = "Based on surveys of 500+ group trip organizers",
  ctaText = "There\u2019s a better way \u2193",
  ctaHref = SIGNUP_URL,
}: ProblemValidationProps) {
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

        <p className="problem-familiar">{ctaText.split(" \u2193")[0]}</p>
        <a href={ctaHref} className="problem-cta">
          {ctaText} &darr;
        </a>
      </div>
    </section>
  );
}
