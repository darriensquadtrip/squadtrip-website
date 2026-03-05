import { generatePageMetadata } from "@/lib/metadata";
import dynamic from "next/dynamic";
import { SIGNUP_URL } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Hero } from "@/components/sections/Hero";
import { ProblemValidation } from "@/components/sections/ProblemValidation";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
const FAQ = dynamic(() => import("@/components/ui/FAQ").then((mod) => mod.FAQ));
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BookingPageMockup } from "@/components/mockups/BookingPageMockup";
import { PaymentPlanMockup } from "@/components/mockups/PaymentPlanMockup";
import { EmailMockup } from "@/components/mockups/EmailMockup";

export const metadata = generatePageMetadata({
  title: "Manage Destination Weddings Like a Pro",
  description:
    "Everything you need to plan a destination wedding stress free. Create booking pages, set up flexible payment plans, and manage your wedding guests with SquadTrip.",
  path: "/destination-wedding-planners",
});

const weddingFAQ = [
  {
    question: "How does SquadTrip help with destination weddings?",
    answer:
      "SquadTrip gives you a professional booking page where wedding guests can view travel packages, select their room type, and pay online. You can set up automatic payment plans, send reminders, and track every guest from one dashboard.",
  },
  {
    question: "Can guests pay in installments?",
    answer:
      "Yes. You can offer flexible payment plans so guests can spread the cost over several months leading up to the wedding. Payments are charged automatically each month, and guests receive email reminders before each installment.",
  },
  {
    question: "What information can I collect from guests?",
    answer:
      "You can collect passport details, dietary preferences, plus-one information, room preferences, and any custom fields you need. All information is stored securely and can be exported as a CSV at any time.",
  },
  {
    question: "How do I share the booking page with guests?",
    answer:
      "Every trip gets a short, shareable link you can text, email, or post on social media. You can also embed the booking page directly on your wedding website.",
  },
  {
    question: "What are the fees?",
    answer:
      "SquadTrip offers a free version and paid plans starting at $29 per month. The booking fee is 6%, which includes Stripe's payment processing costs. There are no hidden fees.",
  },
  {
    question: "Can I schedule a demo?",
    answer:
      "Of course! Visit our website and click the chat icon to schedule a demo with our team.",
  },
];

const weddingStats = [
  { icon: "👥", value: 85, suffix: "+", label: "Guests to coordinate for the average destination wedding" },
  { icon: "📅", value: 12, suffix: " months", label: "Of planning before the big day" },
  { icon: "💰", value: 50, suffix: "K+", label: "At stake when payments fall through" },
  { icon: "📧", value: 200, suffix: "+", label: "Emails chasing RSVPs and payments" },
];

export default function DestinationWeddingPlannersPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          {
            name: "Destination Wedding Planners",
            href: "/destination-wedding-planners",
          },
        ]}
      />
      <FAQSchema items={weddingFAQ} />

      {/* Hero */}
      <Hero
        layout="split"
        headline="Destination Weddings, Without the Spreadsheet Chaos"
        subheadline="Collect guest payments, manage room blocks, and keep every detail organized — so you can focus on the celebration, not the logistics."
        ctaText="Start planning for free"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        eyebrow="Trusted by 2,000+ trip organizers"
        mockup={
          <BookingPageMockup
            tripTitle="Jamaica Destination Wedding"
            tripMeta="Mar 15-22 • 7 nights • Beachfront Resort"
            packages={[
              {
                name: "Guest Package",
                price: "$1,800",
                features: ["Hotel", "Welcome Dinner", "Ceremony", "Reception"],
              },
            ]}
            itinerary={[
              { day: "Day 1", title: "Arrival & Welcome Dinner" },
              { day: "Day 4", title: "Beach Ceremony & Reception" },
              { day: "Day 7", title: "Farewell Brunch & Departure" },
            ]}
            orderSummary={[
              { label: "Guest Package", value: "$1,800" },
              { label: "Processing fee", value: "$108" },
            ]}
            total="$1,908"
          />
        }
      />

      {/* Problem Validation */}
      <ProblemValidation
        headline="Planning a Destination Wedding?"
        subtitle="Between guest lists, room blocks, and payment tracking, it can feel like a full-time job."
        stats={weddingStats}
        caption="Based on surveys of 500+ destination wedding planners"
        ctaText="There’s a better way ↓"
      />

      {/* Feature Blocks */}
      <div className="feature-blocks">
        {/* Feature 1: Booking Page */}
        <FeatureBlock
          title="A Beautiful Booking Page for Your Wedding"
          description="Give your guests a polished, professional page where they can browse room packages, view the wedding itinerary, and pay online. No more back-and-forth emails or confusing spreadsheets."
          mockup={
            <BookingPageMockup
              tripTitle="Jamaica Destination Wedding"
              tripMeta="Mar 15-22 • 7 nights • Beachfront Resort"
              packages={[
                {
                  name: "Guest Package",
                  price: "$1,800",
                  features: ["Hotel", "Welcome Dinner", "Ceremony", "Reception"],
                },
              ]}
              itinerary={[
                { day: "Day 1", title: "Arrival & Welcome Dinner" },
                { day: "Day 4", title: "Beach Ceremony & Reception" },
                { day: "Day 7", title: "Farewell Brunch & Departure" },
              ]}
              orderSummary={[
                { label: "Guest Package", value: "$1,800" },
                { label: "Processing fee", value: "$108" },
              ]}
              total="$1,908"
            />
          }
          highlights={[
            { icon: "💍", text: "Wedding-ready design" },
            { icon: "🏨", text: "Room block packages" },
            { icon: "📋", text: "Full itinerary" },
            { icon: "📱", text: "Mobile-friendly" },
          ]}
          testimonial={{
            quote: "Our guests loved how easy it was to book and pay. No confusion at all.",
            attribution: "Diana Wilson, Island Dream Weddings",
          }}
          linkText="Create your wedding booking page"
          linkHref={SIGNUP_URL}
        />

        {/* Feature 2: Payment Plans */}
        <FeatureBlock
          title="Payment Plans That Collect Themselves"
          description="Destination weddings are expensive. Let guests spread the cost over months with automatic installment plans. Failed payments are retried, reminders go out automatically, and you never have to chase anyone."
          mockup={
            <PaymentPlanMockup
              scheduleItems={[
                { date: "Sep 15", label: "Deposit", amount: "$600", status: "complete" },
                { date: "Nov 15", label: "2nd payment", amount: "$600", status: "complete" },
                { date: "Jan 15", label: "3rd payment", amount: "$600", status: "upcoming" },
              ]}
            />
          }
          reverse
          highlights={[
            { icon: "🔄", text: "Auto-retry failed payments" },
            { icon: "⏰", text: "Scheduled reminders" },
            { icon: "💳", text: "Apple Pay & cards" },
            { icon: "🛒", text: "Klarna & Afterpay" },
          ]}
          bonus="Guests can also pay in full upfront or use buy-now-pay-later options."
          linkText="Set up payment plans"
          linkHref={SIGNUP_URL}
        />

        {/* Feature 3: Email Communications */}
        <FeatureBlock
          title="Keep Every Guest in the Loop"
          description="Send payment reminders, travel updates, and itinerary details to your entire guest list with one click. No more mass texts or BCC nightmares."
          mockup={
            <EmailMockup
              subject="Wedding Payment Reminder"
              greeting="Hi Sarah, your next payment for the Jamaica Destination Wedding is coming up."
              paymentRows={[
                { label: "Amount due", amount: "$600.00" },
                { label: "Due date", amount: "Jan 15, 2026" },
                { label: "Payment plan", amount: "3 of 3" },
              ]}
              ctaText="Make Payment"
            />
          }
          highlights={[
            { icon: "📧", text: "Email reminders" },
            { icon: "📲", text: "SMS notifications" },
            { icon: "📆", text: "Travel updates" },
            { icon: "🔔", text: "Auto payment alerts" },
          ]}
          testimonial={{
            quote: "I used to spend hours sending individual emails. Now SquadTrip handles all of it.",
            attribution: "Megan Torres, Tropical Vows Travel",
          }}
          linkText="See communication tools"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* Testimonials */}
      <TestimonialsSection
        headline="Trusted by Wedding Planners Everywhere"
        subtitle="Here's what real destination wedding planners say about SquadTrip."
        featured={{
          quote:
            "Planning a 90-person destination wedding in Jamaica sounded impossible until I found SquadTrip. The booking page, automatic payment plans, and guest tracking saved me hundreds of hours. My couples and their guests always tell me how smooth the experience was.",
          author: "Diana Wilson",
          company: "Island Dream Weddings",
          initials: "DW",
          badge: "Wedding Planner",
          metrics: [
            { value: "90+", label: "Guests managed" },
            { value: "300+", label: "Hours saved" },
          ],
        }}
        side={[
          {
            quote:
              "Coordinating room blocks and collecting deposits for destination weddings used to be a nightmare. SquadTrip turned it into a one-link process.",
            author: "Marcus Rivera",
            company: "Coastline Wedding Co.",
            initials: "MR",
            badge: "Wedding Planner",
          },
          {
            quote:
              "My couples love that their guests can pick a package and set up a payment plan in minutes. It makes the whole wedding feel more organized from day one.",
            author: "Priya Sharma",
            company: "Wanderlust Weddings",
            initials: "PS",
            badge: "Destination Specialist",
          },
        ]}
      />

      {/* FAQ */}
      <FAQ items={weddingFAQ} />

      {/* Final CTA */}
      <FinalCTA
        headline="Ready to Simplify Your Next Destination Wedding?"
        subheadline="Create your booking page in 10 minutes. Free to start, no credit card required."
        primaryText="Start planning for free"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
