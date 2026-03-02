import { generatePageMetadata } from "@/lib/metadata";
import { SIGNUP_URL } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Learn about SquadTrip's mission to empower anyone to create amazing group travel experiences. Founded by Darrien Watson and Stevon Judd.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about-us" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Empower anyone to create amazing travel experiences
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            SquadTrip is the group travel booking platform that makes it easy to
            plan, promote, and collect payments for group trips.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Founders
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            SquadTrip was founded by{" "}
            <strong>Darrien Watson</strong> and{" "}
            <strong>Stevon Judd</strong>, avid travelers and passionate
            entrepreneurs who saw firsthand how difficult it was to organize
            group trips. They set out to build the platform they wished existed
            — one that handles the logistics so organizers can focus on the
            experience.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Our mission is to streamline group trip planning and execution.
            Whether you are organizing a destination wedding, a retreat, or a
            large-scale group tour, SquadTrip gives you the tools to create
            booking pages, automate payment plans, communicate with travelers,
            and track everything in real time.
          </p>
        </div>
      </section>

      {/* Achievement */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Backed by Investors, Recognized by Industry Leaders
          </h2>
          <p className="text-5xl font-bold text-purple-700 mb-4">$1.5M</p>
          <p className="text-lg text-gray-600 mb-8">
            secured in pre-seed funding
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our work has been covered by{" "}
            <strong>TechCrunch</strong>,{" "}
            <strong>PhocusWire</strong>,{" "}
            <strong>AP News</strong>, and{" "}
            <strong>Skift</strong> — recognized as one of the most promising
            startups in the group travel space.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Philosophy
          </h2>
          <blockquote className="text-2xl sm:text-3xl font-semibold text-purple-700 italic max-w-2xl mx-auto mb-6">
            &ldquo;Travel brings people together.&rdquo;
          </blockquote>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe that shared travel experiences create bonds that last a
            lifetime. SquadTrip exists to remove the friction from group travel
            so more people can experience the world together.
          </p>
        </div>
      </section>

      <CTASection
        headline="Join the movement"
        subheadline="Start organizing your next group trip with SquadTrip today."
        ctaText="Get started for free"
        ctaHref={SIGNUP_URL}
      />
    </>
  );
}
