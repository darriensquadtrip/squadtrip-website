import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | SquadTrip",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="hero" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="hero-container" style={{ textAlign: "center" }}>
        <h1 className="hero-headline" style={{ fontSize: "3rem" }}>404</h1>
        <p className="hero-subtitle" style={{ marginBottom: "32px" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-primary" style={{ textDecoration: "none" }}>
            Go Home
          </Link>
          <Link href="/guides" className="btn-secondary" style={{ textDecoration: "none" }}>
            Browse Guides
          </Link>
        </div>
      </div>
    </section>
  );
}
