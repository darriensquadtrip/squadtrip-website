"use client";

import { SIGNUP_URL } from "@/lib/constants";
import { SignupLink } from "@/components/common/SignupLink";

interface FinalCTAProps {
  headline?: string;
  subheadline?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  source?: string;
  medium?: string;
  campaign?: string;
}

export function FinalCTA({
  headline = "Ready to Stop Chasing Payments?",
  subheadline = "Create your first trip in 10 minutes. Free to start, no credit card required.",
  primaryText = "Create your trip for free",
  primaryHref,
  secondaryText = "See how it works",
  secondaryHref = "/features",
  source = "website",
  medium = "final-cta",
  campaign,
}: FinalCTAProps) {
  const isSignupLink = !primaryHref || primaryHref === SIGNUP_URL;

  return (
    <section className="final-cta">
      <div className="final-cta-container">
        <h2>{headline}</h2>
        <p>{subheadline}</p>
        <div className="final-cta-buttons">
          {isSignupLink ? (
            <SignupLink source={source} medium={medium} campaign={campaign} className="btn-primary">
              {primaryText}
            </SignupLink>
          ) : (
            <a href={primaryHref} className="btn-primary">
              {primaryText}
            </a>
          )}
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
