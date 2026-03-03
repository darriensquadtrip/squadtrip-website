import { generatePageMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how SquadTrip collects, uses, and shares your information. Read our full Privacy Policy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const sectionHeading: React.CSSProperties = {
    fontSize: "1.75rem",
    fontWeight: 700,
    color: "var(--text-dark)",
    marginTop: "2.5rem",
    marginBottom: "1rem",
  };

  const subHeading: React.CSSProperties = {
    fontSize: "1.35rem",
    fontWeight: 600,
    color: "var(--text-dark)",
    marginTop: "1.75rem",
    marginBottom: "0.75rem",
  };

  const paragraph: React.CSSProperties = {
    color: "var(--text-muted)",
    fontSize: "1.125rem",
    lineHeight: 1.8,
    marginBottom: "1rem",
  };

  const list: React.CSSProperties = {
    color: "var(--text-muted)",
    fontSize: "1.125rem",
    lineHeight: 1.8,
    marginBottom: "1rem",
    paddingLeft: "1.5rem",
  };

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
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-dark)", marginBottom: "0.5rem" }}>
            Privacy Policy
          </h1>

          <p style={{ color: "var(--text-muted)", fontSize: "1rem", marginBottom: "2rem" }}>
            <strong>Last Updated:</strong> March 1, 2026
          </p>

          <div>
            <p style={paragraph}>
              This Privacy Policy describes how SquadTrip, Inc. (&ldquo;SquadTrip,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, discloses, and protects your personal information when you visit our website at squadtrip.com, use our mobile applications, or interact with any of our services (collectively, the &ldquo;Services&rdquo;). By accessing or using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <p style={paragraph}>
              We are committed to protecting the privacy of our users, including trip organizers, travelers, and visitors. If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
              <a
                href="mailto:support@squadtrip.com"
                style={{ color: "var(--purple-primary)", textDecoration: "underline" }}
              >
                support@squadtrip.com
              </a>.
            </p>

            {/* Information We Collect */}
            <h2 style={sectionHeading}>1. Information We Collect</h2>

            <p style={paragraph}>
              We collect information in several ways depending on how you interact with our Services. The types of information we collect include personal information you provide directly, data generated automatically when you use our platform, and payment information processed through our third-party payment provider.
            </p>

            <h3 style={subHeading}>Personal Information You Provide</h3>
            <p style={paragraph}>
              When you create an account, organize a trip, or book a trip through SquadTrip, we may collect the following personal information:
            </p>
            <ul style={list}>
              <li>Full name, email address, and phone number</li>
              <li>Profile information such as a display name or profile photo</li>
              <li>Trip details you create or participate in, including destinations, dates, and itineraries</li>
              <li>Communications you send through the platform, including messages to travelers or our support team</li>
              <li>Registration form responses, which may include passport details, dietary preferences, roommate requests, emergency contacts, and other information requested by trip organizers</li>
              <li>Documents uploaded or signed through our e-sign feature, such as waivers, contracts, and agreements</li>
              <li>Any other information you voluntarily provide to us through the Services</li>
            </ul>

            <h3 style={subHeading}>Payment Information</h3>
            <p style={paragraph}>
              SquadTrip uses Stripe as our third-party payment processor to handle all financial transactions. When you make a payment or set up a payment plan, Stripe collects and processes your payment card information, bank account details, or other financial data. SquadTrip does not directly store your full credit card number, debit card number, or bank account number on our servers. However, we do receive and store limited payment information from Stripe, such as the last four digits of your card, card brand, expiration date, billing address, and transaction history, in order to display payment status and manage trip finances within the platform.
            </p>
            <p style={paragraph}>
              If you use buy-now-pay-later options such as Klarna or Afterpay, those providers will collect and process your information according to their own privacy policies.
            </p>

            <h3 style={subHeading}>Usage Data and Automatically Collected Information</h3>
            <p style={paragraph}>
              When you access or use our Services, we automatically collect certain information, including:
            </p>
            <ul style={list}>
              <li>Device information such as your device type, operating system, browser type, and unique device identifiers</li>
              <li>Log data including your IP address, access times, pages viewed, links clicked, and the page you visited before navigating to our Services</li>
              <li>Location data derived from your IP address (we do not collect precise GPS location)</li>
              <li>Usage patterns such as features you use, trips you view, and actions you take within the platform</li>
              <li>Performance data including crash reports and system activity</li>
            </ul>

            {/* How We Use Your Information */}
            <h2 style={sectionHeading}>2. How We Use Your Information</h2>

            <p style={paragraph}>
              We use the information we collect for the following purposes:
            </p>
            <ul style={list}>
              <li><strong>Providing and maintaining our Services:</strong> To create and manage your account, process trip bookings, facilitate payments and payment plans, send payment reminders via email and SMS, and enable communication between organizers and travelers.</li>
              <li><strong>Improving our Services:</strong> To understand how users interact with our platform, identify trends and usage patterns, diagnose technical issues, and develop new features and enhancements.</li>
              <li><strong>Communicating with you:</strong> To send you transactional emails and text messages related to your trips, payments, and account activity. We may also send you marketing communications about new features, product updates, and promotional offers, which you can opt out of at any time.</li>
              <li><strong>Processing payments:</strong> To facilitate payment collection, automatic payment retries, payment plan management, and payout distribution to trip organizers through Stripe.</li>
              <li><strong>Ensuring security and preventing fraud:</strong> To detect, investigate, and prevent fraudulent transactions, unauthorized access, and other illegal activities.</li>
              <li><strong>Complying with legal obligations:</strong> To comply with applicable laws, regulations, legal processes, or enforceable governmental requests.</li>
              <li><strong>Affiliate tracking and referral management:</strong> To track referrals, manage partner commissions, and facilitate our affiliate program.</li>
            </ul>

            {/* Information Sharing and Third Parties */}
            <h2 style={sectionHeading}>3. Information Sharing and Third Parties</h2>

            <p style={paragraph}>
              We do not sell your personal information to third parties. We may share your information in the following circumstances:
            </p>

            <h3 style={subHeading}>Service Providers</h3>
            <p style={paragraph}>
              We share information with third-party service providers who perform services on our behalf, including:
            </p>
            <ul style={list}>
              <li><strong>Stripe:</strong> Our payment processing partner. Stripe processes all payments and stores payment credentials. Stripe&rsquo;s use of your information is governed by the{" "}
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--purple-primary)", textDecoration: "underline" }}>Stripe Privacy Policy</a>.</li>
              <li><strong>Klarna and Afterpay:</strong> Buy-now-pay-later providers available as alternative payment options. Their use of your data is governed by their respective privacy policies.</li>
              <li><strong>Analytics providers:</strong> We use analytics services to help us understand how users interact with our platform, measure the effectiveness of our marketing, and improve user experience.</li>
              <li><strong>Email and SMS providers:</strong> We use third-party services to deliver transactional and marketing communications.</li>
              <li><strong>Cloud hosting providers:</strong> Our platform infrastructure is hosted by reputable cloud service providers that maintain industry-standard security measures.</li>
            </ul>

            <h3 style={subHeading}>Trip Organizers and Travelers</h3>
            <p style={paragraph}>
              When you join a trip on SquadTrip, certain information such as your name, email address, payment status, and registration form responses may be visible to the trip organizer. Similarly, organizers&rsquo; profile information and trip details are visible to travelers who join their trips. This sharing is necessary for the operation of the group travel platform.
            </p>

            <h3 style={subHeading}>Legal Requirements and Protection</h3>
            <p style={paragraph}>
              We may disclose your information if required to do so by law, or if we believe in good faith that such disclosure is necessary to comply with a legal obligation, protect and defend our rights or property, prevent fraud, or protect the personal safety of users of our Services or the public.
            </p>

            <h3 style={subHeading}>Business Transfers</h3>
            <p style={paragraph}>
              If SquadTrip is involved in a merger, acquisition, asset sale, or bankruptcy, your personal information may be transferred as part of that transaction. We will notify you before your personal information becomes subject to a different privacy policy.
            </p>

            {/* Cookies and Tracking Technologies */}
            <h2 style={sectionHeading}>4. Cookies and Tracking Technologies</h2>

            <p style={paragraph}>
              We use cookies and similar tracking technologies to collect and store information when you use our Services. Cookies are small data files stored on your device that help us improve your experience, understand usage patterns, and deliver relevant content.
            </p>

            <h3 style={subHeading}>Types of Cookies We Use</h3>
            <ul style={list}>
              <li><strong>Essential cookies:</strong> Required for the operation of our Services. They enable core functionality such as account authentication, session management, and security features. You cannot opt out of these cookies.</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website by collecting information about pages visited, time spent on the site, and any errors encountered. This data is aggregated and anonymized.</li>
              <li><strong>Functional cookies:</strong> Allow us to remember your preferences, such as language settings and display options, to provide a more personalized experience.</li>
              <li><strong>Marketing cookies:</strong> Used to track visitors across websites and display relevant advertisements. These cookies may be set by our advertising partners.</li>
            </ul>

            <h3 style={subHeading}>Managing Cookies</h3>
            <p style={paragraph}>
              Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you disable cookies, some features of our Services may not function properly.
            </p>

            {/* Data Retention */}
            <h2 style={sectionHeading}>5. Data Retention</h2>

            <p style={paragraph}>
              We retain your personal information for as long as your account is active or as needed to provide you with our Services. We also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
            </p>
            <p style={paragraph}>
              When you delete your account, we will delete or anonymize your personal information within 90 days, except where we are required to retain certain data for legal, tax, audit, or regulatory purposes. Transaction records and payment history may be retained for up to seven years to comply with financial reporting requirements.
            </p>
            <p style={paragraph}>
              Trip-related data, including trip pages and booking information, may be retained in anonymized or aggregated form for analytical purposes after your account is deleted.
            </p>

            {/* Your Rights and Choices */}
            <h2 style={sectionHeading}>6. Your Rights and Choices</h2>

            <p style={paragraph}>
              Depending on your location, you may have certain rights regarding your personal information. These rights may include:
            </p>

            <h3 style={subHeading}>Access and Portability</h3>
            <p style={paragraph}>
              You have the right to request a copy of the personal information we hold about you. You may also request that we provide your data in a structured, commonly used, and machine-readable format so that you can transfer it to another service.
            </p>

            <h3 style={subHeading}>Correction</h3>
            <p style={paragraph}>
              You have the right to request that we correct any inaccurate or incomplete personal information we hold about you. You can update much of your information directly through your account settings.
            </p>

            <h3 style={subHeading}>Deletion</h3>
            <p style={paragraph}>
              You have the right to request that we delete your personal information. Please note that we may need to retain certain information for legal or legitimate business purposes as described in the Data Retention section above.
            </p>

            <h3 style={subHeading}>Opt-Out of Marketing Communications</h3>
            <p style={paragraph}>
              You can opt out of receiving marketing emails from us by clicking the &ldquo;unsubscribe&rdquo; link at the bottom of any marketing email. You can opt out of SMS marketing messages by replying STOP to any marketing text message. Please note that even after opting out of marketing communications, you will continue to receive transactional messages related to your account and trips, such as payment confirmations, payment reminders, and trip updates.
            </p>

            <h3 style={subHeading}>Do Not Track</h3>
            <p style={paragraph}>
              Some browsers include a &ldquo;Do Not Track&rdquo; (DNT) feature that signals to websites that you do not want to be tracked. Because there is no accepted standard for how to respond to DNT signals, our Services do not currently respond to DNT signals. We will continue to monitor developments around DNT browser technology and update our practices accordingly.
            </p>

            <h3 style={subHeading}>California Residents</h3>
            <p style={paragraph}>
              If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to request deletion of your personal information, and the right to opt out of the sale of your personal information. As stated above, we do not sell your personal information. To exercise your rights under the CCPA, please contact us at{" "}
              <a href="mailto:support@squadtrip.com" style={{ color: "var(--purple-primary)", textDecoration: "underline" }}>support@squadtrip.com</a>.
            </p>

            <p style={paragraph}>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:support@squadtrip.com" style={{ color: "var(--purple-primary)", textDecoration: "underline" }}>support@squadtrip.com</a>.
              We will respond to your request within 30 days.
            </p>

            {/* Children's Privacy */}
            <h2 style={sectionHeading}>7. Children&rsquo;s Privacy</h2>

            <p style={paragraph}>
              Our Services are not directed at children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without verification of parental consent, we will take steps to delete that information as quickly as possible. If you believe we may have collected information from a child under 13, please contact us immediately at{" "}
              <a href="mailto:support@squadtrip.com" style={{ color: "var(--purple-primary)", textDecoration: "underline" }}>support@squadtrip.com</a>.
            </p>
            <p style={paragraph}>
              Users between the ages of 13 and 18 may use our Services only with the involvement and consent of a parent or guardian. Trip organizers are responsible for ensuring that any minors included in their trips have appropriate parental or guardian consent.
            </p>

            {/* Security Measures */}
            <h2 style={sectionHeading}>8. Security Measures</h2>

            <p style={paragraph}>
              We take the security of your personal information seriously and implement industry-standard technical and organizational measures to protect it against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul style={list}>
              <li>Encryption of data in transit using TLS/SSL protocols</li>
              <li>Encryption of sensitive data at rest</li>
              <li>Regular security assessments and vulnerability testing</li>
              <li>Access controls that limit employee access to personal data on a need-to-know basis</li>
              <li>Secure authentication mechanisms including password hashing</li>
              <li>PCI DSS compliance through our payment processor, Stripe</li>
              <li>Regular backups and disaster recovery procedures</li>
            </ul>
            <p style={paragraph}>
              While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the internet or method of electronic storage is 100% secure. We cannot guarantee absolute security, but we are committed to promptly notifying affected users in the event of a data breach in accordance with applicable laws.
            </p>

            {/* International Data Transfers */}
            <h2 style={sectionHeading}>9. International Data Transfers</h2>

            <p style={paragraph}>
              SquadTrip is based in the United States. If you access our Services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States and other countries where our servers or service providers are located. By using our Services, you consent to the transfer of your information to the United States and other jurisdictions that may not have the same data protection laws as your home country.
            </p>

            {/* Changes to This Policy */}
            <h2 style={sectionHeading}>10. Changes to This Privacy Policy</h2>

            <p style={paragraph}>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make material changes to this Privacy Policy, we will notify you by posting the updated policy on this page with a revised &ldquo;Last Updated&rdquo; date. For significant changes, we may also notify you via email or through a prominent notice on our platform.
            </p>
            <p style={paragraph}>
              We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our Services after any changes to this Privacy Policy constitutes your acceptance of the updated policy.
            </p>

            {/* Contact Information */}
            <h2 style={sectionHeading}>11. Contact Information</h2>

            <p style={paragraph}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>

            <div
              style={{
                padding: "1.5rem",
                background: "var(--bg-light)",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                color: "var(--text-muted)",
                fontSize: "1.125rem",
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: 0 }}>
                <strong style={{ color: "var(--text-dark)" }}>SquadTrip, Inc.</strong>
              </p>
              <p style={{ margin: "0.25rem 0" }}>
                Email:{" "}
                <a
                  href="mailto:support@squadtrip.com"
                  style={{ color: "var(--purple-primary)", textDecoration: "underline" }}
                >
                  support@squadtrip.com
                </a>
              </p>
              <p style={{ margin: "0.25rem 0" }}>
                Website:{" "}
                <a
                  href="https://squadtrip.com"
                  style={{ color: "var(--purple-primary)", textDecoration: "underline" }}
                >
                  squadtrip.com
                </a>
              </p>
            </div>

            <p style={{ ...paragraph, marginTop: "1.5rem" }}>
              We will do our best to respond to all legitimate inquiries within 30 days. If you feel that your concerns have not been adequately addressed, you may have the right to lodge a complaint with your local data protection authority.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
