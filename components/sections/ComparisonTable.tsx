"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SIGNUP_URL } from "@/lib/constants";
import { SignupLink } from "@/components/common/SignupLink";

interface ComparisonRow {
  task: string;
  diy: string;
  squadtrip: string;
}

interface ComparisonTableProps {
  headline?: string;
  intro?: string;
  columnHeaders?: [string, string, string];
  rows: ComparisonRow[];
  ctaText?: string;
  ctaHref?: string;
  source?: string;
  medium?: string;
  campaign?: string;
}

export function ComparisonTable({
  headline = "Why Not Just DIY?",
  intro = "You could manage everything yourself. Here's what that looks like.",
  columnHeaders = ["Task", "DIY", "SquadTrip"],
  rows,
  ctaText = "Try SquadTrip free",
  ctaHref,
  source = "website",
  medium = "comparison",
  campaign,
}: ComparisonTableProps) {
  const isSignupLink = !ctaHref || ctaHref === SIGNUP_URL;

  return (
    <section className="comparison-section">
      <div className="comparison-container">
        <ScrollReveal>
          <h2>{headline}</h2>
          <p className="comparison-intro">{intro}</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>{columnHeaders[0]}</th>
                  <th>{columnHeaders[1]}</th>
                  <th>{columnHeaders[2]}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.task}>
                    <td>{row.task}</td>
                    <td>
                      <span className="compare-x">×</span>
                      {row.diy}
                    </td>
                    <td>
                      <span className="compare-check">✓</span>
                      {row.squadtrip}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <div className="cta-center">
          {isSignupLink ? (
            <SignupLink source={source} medium={medium} campaign={campaign} className="btn-primary">
              {ctaText}
            </SignupLink>
          ) : (
            <a href={ctaHref} className="btn-primary">
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
