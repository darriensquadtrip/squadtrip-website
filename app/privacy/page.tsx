import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how SquadTrip collects, uses, and shares your information. Read our full Privacy Policy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <section className="feature-overview">
        <div className="feature-overview-container" style={{ maxWidth: "800px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-dark)", marginBottom: "2rem" }}>
            Privacy Policy
          </h1>

          <div style={{ color: "var(--text-muted)", fontSize: "1.125rem", lineHeight: 1.8 }}>
            <p>
              This Privacy Policy describes how SquadTrip collects, uses, and
              shares information. For questions, contact us at{" "}
              <a
                href="mailto:support@squadtrip.com"
                style={{ color: "var(--purple-primary)", textDecoration: "underline" }}
              >
                support@squadtrip.com
              </a>
              .
            </p>

            <p
              style={{
                marginTop: "1.5rem",
                padding: "1.5rem",
                background: "var(--bg-light)",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                fontStyle: "italic",
                color: "var(--text-muted)",
              }}
            >
              The full privacy policy is currently being migrated. A
              comprehensive version will be published here shortly. In the
              meantime, if you have any questions about how we handle your data,
              please reach out to our support team.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
