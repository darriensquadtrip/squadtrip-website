import { generatePageMetadata } from "@/lib/metadata";
import dynamic from "next/dynamic";
import { SIGNUP_URL } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Hero } from "@/components/sections/Hero";
import { ProblemValidation } from "@/components/sections/ProblemValidation";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
const FAQ = dynamic(() => import("@/components/ui/FAQ").then((mod) => mod.FAQ));
import { FinalCTA } from "@/components/sections/FinalCTA";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { EmailMockup } from "@/components/mockups/EmailMockup";

export const metadata = generatePageMetadata({
  title: "E-Sign Docs & Waivers",
  description:
    "Collect signed waivers, contracts, and travel agreements before departure. SquadTrip's built-in e-sign makes document collection effortless for group trips.",
  path: "/product/embed-e-signature-process-into-your-traveler-checkout-forms",
});

const esignFAQ = [
  {
    question: "What types of documents can I collect signatures on?",
    answer:
      "You can upload any document that needs a signature, including liability waivers, travel agreements, terms and conditions, cancellation policies, health declarations, or custom contracts. Upload a PDF and SquadTrip handles the signing flow.",
  },
  {
    question: "Are the electronic signatures legally binding?",
    answer:
      "Yes. SquadTrip's e-signatures comply with the ESIGN Act and UETA, making them legally enforceable in the United States. Each signed document includes a timestamp, the signer's IP address, and a unique signature ID for your records.",
  },
  {
    question: "How do travelers sign the documents?",
    answer:
      "Travelers receive an email with a direct link to review and sign. They can read the full document, type or draw their signature, and submit it from any device. The entire process takes under two minutes.",
  },
  {
    question: "Can I require signatures before travelers can complete their booking?",
    answer:
      "Yes. You can set documents as required during the booking flow, so travelers must sign before completing their payment. This ensures you have every signature collected before the trip without chasing anyone down later.",
  },
  {
    question: "How do I track who has signed and who hasn't?",
    answer:
      "Your dashboard shows the signature status for every traveler on every document. You can filter by unsigned travelers and send reminder emails with one click. Automatic reminders can also be enabled to follow up without any manual effort.",
  },
  {
    question: "Can I download copies of signed documents?",
    answer:
      "Yes. Every signed document is stored securely in your SquadTrip account. You can download individual signed PDFs or export all signatures for a trip in bulk at any time.",
  },
];

export default function ESignDocsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Product", href: "/product" },
          { name: "E-Sign Docs", href: "/product/embed-e-signature-process-into-your-traveler-checkout-forms" },
        ]}
      />
      <FAQSchema items={esignFAQ} />

      {/* Hero */}
      <Hero
        layout="split"
        headline="Collect Signed Waivers and Contracts Before Anyone Boards"
        subheadline="Upload your documents, attach them to a trip, and let travelers sign electronically during booking. No printing, no scanning, no chasing signatures the night before departure."
        ctaText="Set up e-sign docs"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        eyebrow="E-sign documents"
        mockup={
          <DashboardMockup
            tripName="Waiver Tracking"
            collected="18"
            total="24"
            percent={75}
            travelers={[
              { initials: "MC", name: "Maria C.", amount: "Signed", status: "paid" },
              { initials: "DK", name: "Derek K.", amount: "Signed", status: "paid" },
              { initials: "LT", name: "Laura T.", amount: "Pending", status: "pending" },
              { initials: "JP", name: "James P.", amount: "Pending", status: "pending" },
            ]}
          />
        }
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Unsigned Documents Are a Liability Waiting to Happen"
        subtitle="Every unsigned waiver is a risk you're carrying. Every missing contract is a conversation you'll have to have at the worst possible time."
        stats={[
          { icon: "📄", value: 40, suffix: "%", label: "Of group travelers show up without signed waivers" },
          { icon: "⏰", value: 5, suffix: "+ hrs", label: "Spent collecting signatures for a 20-person trip" },
          { icon: "🖨️", value: 60, suffix: "%", label: "Of organizers still rely on print-and-scan for signatures" },
          { icon: "⚠️", value: 1, suffix: " in 4", label: "Organizers face liability issues from missing docs" },
        ]}
        caption="Based on data from group travel organizers and event planners"
        ctaText="Eliminate the risk"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Require Signatures During the Booking Flow"
          description="Attach waivers, contracts, or agreements directly to your trip's checkout page. When a traveler books, they must review and sign each required document before completing their payment. By the time they've paid, you already have their signature on file. No separate emails, no follow-ups, no gaps in your records."
          mockup={
            <DashboardMockup
              tripName="Costa Rica Adventure"
              collected="14"
              total="18"
              percent={78}
              travelers={[
                { initials: "AR", name: "Aisha R.", amount: "Signed", status: "paid" },
                { initials: "BN", name: "Brian N.", amount: "Signed", status: "paid" },
                { initials: "CW", name: "Carla W.", amount: "Signed", status: "paid" },
                { initials: "DM", name: "David M.", amount: "Unsigned", status: "pending" },
              ]}
            />
          }
          highlights={[
            { icon: "✅", text: "Required before payment completes" },
            { icon: "📑", text: "Multiple documents per trip" },
            { icon: "📱", text: "Sign from any device" },
            { icon: "⚡", text: "Under 2 minutes to complete" },
          ]}
          testimonial={{
            quote: "We used to chase waivers for weeks after people booked. Now we get every signature at checkout. It's one less thing to worry about.",
            attribution: "Collin D. Williams, Jr., CDE Antigua",
          }}
          linkText="Attach your first document"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Track Every Signature From Your Dashboard"
          description="See exactly who has signed and who hasn't across all your trip documents. Your dashboard shows the signature status for each traveler, so you always know where things stand. Filter by unsigned travelers and send a one-click reminder to get the last few signatures collected without writing a single email yourself."
          mockup={<EmailMockup />}
          reverse
          highlights={[
            { icon: "📊", text: "Real-time signature tracking" },
            { icon: "🔍", text: "Filter by signing status" },
            { icon: "📩", text: "One-click reminder emails" },
            { icon: "🔔", text: "Auto-reminders for unsigned docs" },
          ]}
          bonus="Organizers using required e-sign at checkout achieve a 98% signature completion rate before departure."
          linkText="See the tracking dashboard"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Secure Storage and Instant Downloads"
          description="Every signed document is stored securely in your SquadTrip account with a full audit trail. Each signature includes a timestamp, IP address, and unique identifier for legal compliance. Download individual signed PDFs whenever you need them, or export all signed documents for a trip in one bulk download. Your records are always organized and accessible."
          mockup={
            <DashboardMockup
              tripName="Document Archive"
              collected="142"
              total="142"
              percent={100}
              travelers={[
                { initials: "WV", name: "Waivers", amount: "48 signed", status: "paid" },
                { initials: "TC", name: "Travel Contracts", amount: "48 signed", status: "paid" },
                { initials: "HD", name: "Health Decl.", amount: "46 signed", status: "paid" },
              ]}
            />
          }
          highlights={[
            { icon: "🔒", text: "Encrypted document storage" },
            { icon: "📥", text: "Individual PDF downloads" },
            { icon: "📦", text: "Bulk export per trip" },
            { icon: "🕵️", text: "Full audit trail per signature" },
          ]}
          linkText="Upload your documents"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={esignFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Protect Your Trips With Signed Documents"
        subheadline="Collect every waiver and contract before departure. Free to start, no credit card required."
        primaryText="Set up e-sign today"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
