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
import { BookingPageMockup } from "@/components/mockups/BookingPageMockup";

export const metadata = generatePageMetadata({
  title: "Traveler Registration & Forms",
  description:
    "Collect traveler details, passport info, dietary needs, and emergency contacts during booking. SquadTrip registration forms keep all your traveler data organized.",
  path: "/product/registration",
});

const registrationFAQ = [
  {
    question: "What information can I collect from travelers?",
    answer:
      "You can collect any information you need, including full legal names, passport numbers, dates of birth, dietary restrictions, emergency contacts, T-shirt sizes, roommate preferences, medical conditions, and any custom field you create.",
  },
  {
    question: "When do travelers fill out registration forms?",
    answer:
      "Registration forms are part of the booking flow. Travelers fill in their details when they book and pay. You can also set forms to be completed after booking if you prefer to collect certain details closer to departure.",
  },
  {
    question: "Can I create custom form fields?",
    answer:
      "Yes. SquadTrip provides common fields like name, email, phone, and passport number as defaults. You can add unlimited custom fields including text inputs, dropdowns, checkboxes, date pickers, and file upload fields for documents like passport copies.",
  },
  {
    question: "Can I export the collected traveler data?",
    answer:
      "Yes. All traveler registration data can be exported to CSV or PDF. This is useful for sharing rooming lists with hotels, flight manifests with airlines, or dietary requirements with caterers.",
  },
  {
    question: "Is traveler data stored securely?",
    answer:
      "All data is encrypted in transit and at rest. SquadTrip follows industry-standard security practices to protect sensitive information like passport numbers and personal details. You control who on your team has access to traveler data.",
  },
];

export default function RegistrationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Product", href: "/product" },
          { name: "Registration", href: "/product/registration" },
        ]}
      />
      <FAQSchema items={registrationFAQ} />

      {/* Hero */}
      <Hero
        layout="split"
        headline="Collect Traveler Details at Booking, Not the Night Before"
        subheadline="Build custom registration forms that capture passport info, dietary needs, emergency contacts, and anything else you need. All data is organized on your dashboard and ready to export."
        ctaText="Build your registration form"
        ctaHref={SIGNUP_URL}
        secondaryCta={{ text: "See how it works", href: "/features" }}
        eyebrow="Traveler registration"
        mockup={
          <DashboardMockup
            tripName="Traveler Info"
            collected="16"
            total="20"
            percent={80}
            travelers={[
              { initials: "NW", name: "Nicole W.", amount: "Complete", status: "paid" },
              { initials: "RS", name: "Ricky S.", amount: "Complete", status: "paid" },
              { initials: "AJ", name: "Aaliyah J.", amount: "Partial", status: "partial" },
              { initials: "MT", name: "Mike T.", amount: "Missing", status: "pending" },
            ]}
          />
        }
      />

      {/* ProblemValidation */}
      <ProblemValidation
        headline="Scrambling for Passport Numbers at the Last Minute Is Not a Plan"
        subtitle="Hotels need rooming lists. Airlines need legal names. You need emergency contacts. Getting this info from 20 travelers via text message is a nightmare."
        stats={[
          { icon: "🛂", value: 55, suffix: "%", label: "Of travelers submit passport details late or incorrectly" },
          { icon: "📱", value: 40, suffix: "+", label: "Messages exchanged per trip collecting traveler info" },
          { icon: "❗", value: 3, suffix: " travelers", label: "Per trip arrive without providing required documents" },
          { icon: "📋", value: 6, suffix: " hours", label: "Spent manually compiling rooming and flight lists" },
        ]}
        caption="Based on feedback from organizers running group trips of 15 or more travelers"
        ctaText="See a better way"
        ctaHref="#features"
      />

      {/* Feature Blocks */}
      <div id="features" className="feature-blocks">
        <FeatureBlock
          title="Custom Forms That Capture Exactly What You Need"
          description="Start with built-in fields like legal name, date of birth, phone number, and passport info. Then add any custom fields your trip requires, from dietary restrictions and T-shirt sizes to roommate preferences and medical conditions. Use dropdowns, text fields, checkboxes, date pickers, or file uploads for passport photos and travel documents."
          mockup={
            <BookingPageMockup
              tripTitle="Registration Preview"
              tripMeta="Traveler Information Form"
              packages={[
                {
                  name: "Required Fields",
                  price: "",
                  features: ["Full Legal Name", "Passport Number", "Date of Birth", "Emergency Contact"],
                },
              ]}
              itinerary={[
                { day: "Step 1", title: "Personal Details" },
                { day: "Step 2", title: "Travel Documents" },
                { day: "Step 3", title: "Preferences" },
              ]}
              orderSummary={[]}
              total=""
            />
          }
          highlights={[
            { icon: "🛂", text: "Passport and ID fields" },
            { icon: "🍽️", text: "Dietary restriction options" },
            { icon: "🏨", text: "Roommate preference matching" },
            { icon: "📎", text: "File upload for documents" },
          ]}
          testimonial={{
            quote: "I used to spend days collecting traveler info over text. Now it's all captured during booking and I can export it whenever I need it.",
            attribution: "Andrew Bennett, Passport Society",
          }}
          linkText="Build your form"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="All Traveler Data in One Place"
          description="Every piece of information your travelers submit is organized on your dashboard. View individual traveler profiles or see a bird's-eye view of completion status across the whole group. Quickly identify who still needs to submit their details and send a targeted reminder in one click. No more searching through email threads or text conversations for a single passport number."
          mockup={
            <DashboardMockup
              tripName="Traveler Roster"
              collected="22"
              total="28"
              percent={79}
              travelers={[
                { initials: "KP", name: "Kim P.", amount: "All fields complete", status: "paid" },
                { initials: "JR", name: "Jamal R.", amount: "All fields complete", status: "paid" },
                { initials: "SD", name: "Sara D.", amount: "Missing passport", status: "partial" },
                { initials: "WL", name: "Will L.", amount: "Not started", status: "pending" },
              ]}
            />
          }
          reverse
          highlights={[
            { icon: "📊", text: "Completion status at a glance" },
            { icon: "👤", text: "Individual traveler profiles" },
            { icon: "📩", text: "One-click reminders for missing info" },
            { icon: "🔍", text: "Search and filter by any field" },
          ]}
          bonus="Organizers using SquadTrip registration forms collect 95% of traveler details before the first payment is due."
          linkText="See the traveler dashboard"
          linkHref={SIGNUP_URL}
        />

        <FeatureBlock
          title="Export-Ready Data for Hotels, Airlines, and Vendors"
          description="When it's time to share rooming lists with the hotel, flight manifests with the airline, or dietary requirements with the caterer, export everything in one click. SquadTrip generates clean CSV files organized exactly how vendors need them. No more manually typing names into spreadsheets or reformatting data from screenshots."
          mockup={
            <DashboardMockup
              tripName="Export Center"
              collected="28"
              total="28"
              percent={100}
              travelers={[
                { initials: "RL", name: "Rooming List", amount: "28 travelers", status: "paid" },
                { initials: "FM", name: "Flight Manifest", amount: "28 travelers", status: "paid" },
                { initials: "DR", name: "Dietary Report", amount: "28 travelers", status: "paid" },
              ]}
            />
          }
          highlights={[
            { icon: "📤", text: "One-click CSV export" },
            { icon: "🏨", text: "Hotel rooming list format" },
            { icon: "✈️", text: "Airline manifest format" },
            { icon: "📄", text: "PDF export for records" },
          ]}
          linkText="Start collecting info"
          linkHref={SIGNUP_URL}
        />
      </div>

      {/* FAQ */}
      <FAQ items={registrationFAQ} title="Frequently Asked Questions" />

      {/* Final CTA */}
      <FinalCTA
        headline="Get Traveler Info Collected and Organized"
        subheadline="Build registration forms that work. Free to start, no credit card required."
        primaryText="Create your registration form"
        primaryHref={SIGNUP_URL}
        secondaryText="See how it works"
        secondaryHref="/features"
      />
    </>
  );
}
