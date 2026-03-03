import { generatePageMetadata } from "@/lib/metadata";
import { SIGNUP_URL } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Hero } from "@/components/sections/Hero";
import { ProblemValidation } from "@/components/sections/ProblemValidation";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { FAQ } from "@/components/ui/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { EmailMockup } from "@/components/mockups/EmailMockup";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";

export const metadata = generatePageMetadata({
  title: "Group Trip Messaging & Reminders",
  description:
    "Send targeted emails and SMS to your travelers. Automate payment reminders, trip updates, and announcements from one place with SquadTrip.",
  path: "/product/messaging",
});

const messagingFAQ = [
  {
    question: "Can I send emails and SMS to my travelers?",
    answer:
      "Yes. SquadTrip lets you send both email and SMS messages to your travelers. You can message everyone on a trip, filter by payment status, or reach out to individual travelers directly from your dashboard.",
  },
  {
    question: "Are payment reminders sent automatically?",
    answer:
      "Yes. When you enable payment plans, SquadTrip automatically sends reminders before each scheduled payment date and follow-ups for missed payments. You do not have to write or schedule these messages yourself.",
  },
  {
    question: "Can I customize the messages that go out?",
    answer:
      "You can write custom messages for trip announcements and updates. Payment reminders use professionally written templates that include the traveler's name, amount due, and a direct payment link.",
  },
  {
    question: "How do I message only travelers who haven't paid?",
    answer:
      "Your dashboard lets you filter travelers by payment status. Select travelers with a pending or overdue status, then send a message to just that group. You never have to manually check who needs a nudge.",
  },
  {
    question: "Is there a limit on how many messages I can send?",
    answer:
      "Email messages are unlimited on all plans. SMS messages are available on paid plans and vary by your subscription tier. Check the pricing page for details on SMS credits included in each plan.",
  },
];

export default function MessagingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Product", href: "/product" },
          { name: "Messaging", href: "/product/messaging" },
        ]}
      />
      <FAQSchema items={messagingFAQ} />

      {/* Hero */}
      <Hero
        layout="split"
        headline="Keep Every Traveler in the Loop Without the Chaos"
        subheadline="Send trip updates, payment reminders, and announcements via email and SMS, all from your SquadTrip dashboard. No more group chats where messages get buried."
        ctaText="Start messaging travelers"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        eyebrow="Messaging & reminders"
        mockup={<EmailMockup />}
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Group Chats Are Not a Communication Strategy"
        subtitle="Important trip details get lost in group texts. Payment reminders feel awkward in public threads. Travelers miss deadlines because they never saw the message."
        stats={[
          { icon: "💬", value: 68, suffix: "%", label: "Of travelers say they missed a trip detail shared in a group chat" },
          { icon: "📨", value: 30, suffix: "+", label: "Individual messages sent per trip to chase down payments" },
          { icon: "😤", value: 45, suffix: "%", label: "Of organizers dread sending payment reminders manually" },
          { icon: "🕳️", value: 3, suffix: " updates", label: "Critical trip updates missed per trip on average" },
        ]}
        caption="Based on surveys of group trip organizers and their travelers"
        ctaText="See a better approach"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Automated Payment Reminders That Do the Hard Part"
          description="SquadTrip sends professional payment reminders before each due date and follows up automatically when payments are missed. Each reminder includes the traveler's name, the amount they owe, and a one-click link to pay. Your travelers stay on track and you avoid every uncomfortable conversation about money."
          mockup={<EmailMockup />}
          highlights={[
            { icon: "⏰", text: "Pre-due-date reminders" },
            { icon: "📬", text: "Automatic overdue follow-ups" },
            { icon: "🔗", text: "One-click payment link in every message" },
            { icon: "📱", text: "Email and SMS delivery" },
          ]}
          testimonial={{
            quote: "I used to spend hours every week sending payment reminders. Now SquadTrip handles all of that and my collection rate has gone through the roof.",
            attribution: "Chef Ahki Taylor, The Supernatural Woman Retreats",
          }}
          linkText="Enable auto-reminders"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Targeted Messages to the Right Travelers"
          description="Not every message needs to go to everyone. SquadTrip lets you filter your traveler list by payment status, package type, or custom tags. Send a packing list to confirmed travelers only. Nudge pending travelers with a deadline reminder. Reach out to VIP package holders about an exclusive event. You control exactly who sees what."
          mockup={
            <DashboardMockup
              tripName="Punta Cana Group"
              collected="$14,800"
              total="$22,500"
              percent={66}
              travelers={[
                { initials: "JC", name: "Jessica C.", amount: "$2,250", status: "paid" },
                { initials: "TM", name: "Tyler M.", amount: "$2,250", status: "paid" },
                { initials: "KL", name: "Kayla L.", amount: "$1,500", status: "partial" },
                { initials: "BH", name: "Brandon H.", amount: "$0", status: "pending" },
              ]}
            />
          }
          reverse
          highlights={[
            { icon: "🎯", text: "Filter by payment status" },
            { icon: "📋", text: "Filter by package type" },
            { icon: "🏷️", text: "Custom traveler tags" },
            { icon: "👥", text: "Bulk or individual messaging" },
          ]}
          bonus="Targeted messages have 3x higher engagement than blanket group announcements."
          linkText="See targeting options"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Trip Announcements That Actually Get Read"
          description="Post trip updates like itinerary changes, packing lists, meeting point details, and departure information directly from your dashboard. Each announcement is delivered as a clean, branded email so travelers can reference it later. No more scrolling through 200 messages in a group chat to find the hotel address."
          mockup={<EmailMockup />}
          highlights={[
            { icon: "📢", text: "Broadcast updates to all travelers" },
            { icon: "📎", text: "Attach files and documents" },
            { icon: "📧", text: "Professional email formatting" },
            { icon: "📖", text: "Full message history in dashboard" },
          ]}
          linkText="Send your first update"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={messagingFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Communicate With Confidence"
        subheadline="Send the right message to the right travelers at the right time. Free to start, no credit card required."
        primaryText="Start messaging for free"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
