import { generatePageMetadata } from "@/lib/metadata";
import { SIGNUP_URL } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Hero } from "@/components/sections/Hero";
import { ProblemValidation } from "@/components/sections/ProblemValidation";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { FAQ } from "@/components/ui/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { ShareLinkMockup } from "@/components/mockups/ShareLinkMockup";

export const metadata = generatePageMetadata({
  title: "Affiliate & Referral Tracking",
  description:
    "Track referrals, manage affiliate commissions, and grow your group trips through word of mouth. SquadTrip's affiliate tracking makes referral programs easy.",
  path: "/product/track-affiliate-sales-for-your-group-trip-with-squadtrip",
});

const affiliateFAQ = [
  {
    question: "How does affiliate tracking work?",
    answer:
      "Each affiliate or ambassador gets a unique referral link. When a traveler books through that link, the referral is automatically tracked. You can see which affiliate referred the booking and their commission owed, all from your dashboard.",
  },
  {
    question: "Can I set custom commission rates?",
    answer:
      "Yes. You can set commission rates as a flat fee per booking or as a percentage of the trip price. Different affiliates can have different rates, giving you full control over your referral program economics.",
  },
  {
    question: "How do affiliates get their unique referral link?",
    answer:
      "You invite affiliates through SquadTrip and they receive a unique tracking link. They can share this link on social media, in emails, or directly with friends. Every booking made through the link is attributed to them automatically.",
  },
  {
    question: "Can affiliates see their own referral dashboard?",
    answer:
      "Yes. Affiliates get access to their own dashboard where they can see how many clicks their link generated, how many bookings were made, and their total commissions earned. This transparency keeps affiliates motivated.",
  },
  {
    question: "How do I pay out commissions?",
    answer:
      "SquadTrip tracks all commissions owed. You can review and approve payouts from your dashboard. Commission payments are handled outside SquadTrip through your preferred payment method, giving you full control over payout timing.",
  },
  {
    question: "Is there a limit on how many affiliates I can have?",
    answer:
      "No. Add as many affiliates as you want. Whether you have 3 brand ambassadors or 100 referral partners, SquadTrip tracks every referral and commission automatically.",
  },
];

export default function AffiliateTrackingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Product", href: "/product" },
          { name: "Affiliate Tracking", href: "/product/track-affiliate-sales-for-your-group-trip-with-squadtrip" },
        ]}
      />
      <FAQSchema items={affiliateFAQ} />

      {/* Hero */}
      <Hero
        layout="split"
        headline="Turn Your Travelers Into Your Best Sales Channel"
        subheadline="Give ambassadors and affiliates unique referral links, track every booking they drive, and manage commissions from your dashboard. Grow your trips through word of mouth without the spreadsheet chaos."
        ctaText="Launch your referral program"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        eyebrow="Affiliate tracking"
        mockup={
          <DashboardMockup
            tripName="Referral Program"
            collected="$8,400"
            total="$12,000"
            percent={70}
            travelers={[
              { initials: "JM", name: "Jasmine M.", amount: "12 referrals", status: "paid" },
              { initials: "CK", name: "Chris K.", amount: "8 referrals", status: "paid" },
              { initials: "RD", name: "Rachel D.", amount: "5 referrals", status: "partial" },
              { initials: "TW", name: "Tony W.", amount: "2 referrals", status: "pending" },
            ]}
          />
        }
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Word of Mouth Is Powerful, But Only If You Can Track It"
        subtitle="Your best travelers tell their friends about your trips. But without tracking, you have no idea who's driving bookings or how to reward them."
        stats={[
          { icon: "🗣️", value: 83, suffix: "%", label: "Of travelers say a friend's recommendation influenced their booking" },
          { icon: "📊", value: 0, suffix: "%", label: "Of group organizers have formal referral tracking in place" },
          { icon: "💰", value: 25, suffix: "%", label: "Average booking increase when a referral program is active" },
          { icon: "📉", value: 60, suffix: "%", label: "Of referral efforts go unrewarded due to lack of tracking" },
        ]}
        caption="Based on group travel industry surveys and SquadTrip organizer data"
        ctaText="Start tracking referrals"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Unique Referral Links With Automatic Attribution"
          description="Every affiliate and ambassador gets their own unique tracking link. When a traveler clicks the link and books, the referral is attributed automatically. No promo codes to manage, no honor system, no manual tracking in spreadsheets. The link does all the work and you see every referral in your dashboard in real time."
          mockup={<ShareLinkMockup />}
          highlights={[
            { icon: "🔗", text: "Unique link per affiliate" },
            { icon: "📈", text: "Click and conversion tracking" },
            { icon: "⚡", text: "Instant booking attribution" },
            { icon: "📱", text: "Works on any platform" },
          ]}
          testimonial={{
            quote: "I gave referral links to my top travelers and bookings started coming in from people I'd never reached before. It's the easiest growth channel I've found.",
            attribution: "Chef Ahki Taylor, The Supernatural Woman Retreats",
          }}
          linkText="Generate referral links"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Commission Management Without the Headache"
          description="Set commission rates as a flat fee or percentage and SquadTrip calculates what you owe each affiliate automatically. View total commissions earned by each partner, approve payouts, and maintain a complete history of all referral earnings. No more manual calculations, no disputes over who brought in which traveler, and no errors in commission amounts."
          mockup={
            <DashboardMockup
              tripName="Commission Tracker"
              collected="$2,640"
              total="$3,600"
              percent={73}
              travelers={[
                { initials: "JM", name: "Jasmine M.", amount: "$1,200 earned", status: "paid" },
                { initials: "CK", name: "Chris K.", amount: "$800 earned", status: "paid" },
                { initials: "RD", name: "Rachel D.", amount: "$640 earned", status: "partial" },
                { initials: "TW", name: "Tony W.", amount: "$200 pending", status: "pending" },
              ]}
            />
          }
          reverse
          highlights={[
            { icon: "💵", text: "Flat fee or percentage rates" },
            { icon: "🧮", text: "Automatic commission calculation" },
            { icon: "✅", text: "Approve payouts from dashboard" },
            { icon: "📜", text: "Complete payout history" },
          ]}
          bonus="Affiliates with clear commission visibility refer 40% more travelers than those without a tracking dashboard."
          linkText="Set up commissions"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Affiliate Dashboards That Keep Partners Motivated"
          description="Each affiliate gets access to their own dashboard where they can track their performance. They see how many people clicked their link, how many booked, and how much commission they've earned. This transparency keeps affiliates engaged and motivated to keep sharing. You don't have to send manual reports or answer questions about referral status."
          mockup={
            <DashboardMockup
              tripName="Jasmine's Dashboard"
              collected="$14,400"
              total="$14,400"
              percent={100}
              travelers={[
                { initials: "LC", name: "Link Clicks", amount: "342 clicks", status: "paid" },
                { initials: "BK", name: "Bookings Made", amount: "12 bookings", status: "paid" },
                { initials: "CE", name: "Commission Earned", amount: "$1,200", status: "paid" },
              ]}
            />
          }
          highlights={[
            { icon: "📊", text: "Personal performance metrics" },
            { icon: "👁️", text: "Click and booking visibility" },
            { icon: "💰", text: "Commission earnings tracker" },
            { icon: "🔔", text: "New referral notifications" },
          ]}
          linkText="Invite your first affiliate"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={affiliateFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Grow Your Trips Through Referrals"
        subheadline="Launch a referral program that tracks itself. Free to start, no credit card required."
        primaryText="Start tracking referrals"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
