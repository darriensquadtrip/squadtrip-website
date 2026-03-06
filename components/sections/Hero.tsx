"use client";

import { SIGNUP_URL } from "@/lib/constants";
import { SignupLink } from "@/components/common/SignupLink";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCta?: { text: string; href: string };
  trustLine?: string;
  eyebrow?: string;
  layout?: "centered" | "split";
  mockup?: React.ReactNode;
  source?: string;
  medium?: string;
  campaign?: string;
}

export function Hero({
  headline,
  subheadline,
  ctaText = "Create your trip for free",
  ctaHref,
  secondaryCta,
  trustLine,
  eyebrow,
  layout = "centered",
  mockup,
  source = "website",
  medium = "hero",
  campaign,
}: HeroProps) {
  // If ctaHref is the signup URL or not provided, use SignupLink for tracking
  const isSignupLink = !ctaHref || ctaHref === SIGNUP_URL;

  const ctaButton = isSignupLink ? (
    <SignupLink source={source} medium={medium} campaign={campaign} className="btn-primary">
      {ctaText}
    </SignupLink>
  ) : (
    <a href={ctaHref} className="btn-primary">
      {ctaText}
    </a>
  );

  if (layout === "split" && mockup) {
    return (
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-headline">{headline}</h1>
          <p className="hero-subtitle">{subheadline}</p>
          <div className="hero-visual">{mockup}</div>
          {eyebrow && (
            <div className="hero-eyebrow">
              <span>{eyebrow}</span>
            </div>
          )}
          <div className="hero-ctas">
            {ctaButton}
            {secondaryCta && (
              <a href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.text} &rarr;
              </a>
            )}
          </div>
          {trustLine && <p className="hero-trust">{trustLine}</p>}
        </div>
      </section>
    );
  }

  return (
    <section className="hero" style={{ textAlign: "center" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        {eyebrow && (
          <div className="hero-eyebrow" style={{ justifyContent: "center", marginBottom: 16 }}>
            <span>{eyebrow}</span>
          </div>
        )}
        <h1 className="hero-headline" style={{ fontSize: "3rem", marginBottom: 16 }}>
          {headline}
        </h1>
        <p className="hero-subtitle" style={{ maxWidth: "100%", marginBottom: 32 }}>
          {subheadline}
        </p>
        <div className="hero-ctas" style={{ justifyContent: "center" }}>
          {ctaButton}
          {secondaryCta && (
            <a href={secondaryCta.href} className="btn-secondary">
              {secondaryCta.text} &rarr;
            </a>
          )}
        </div>
        {trustLine && (
          <p className="hero-trust" style={{ marginTop: 16 }}>{trustLine}</p>
        )}
      </div>
    </section>
  );
}
