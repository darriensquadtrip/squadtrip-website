const steps = [
  {
    step: "1",
    title: "Create Your Trip",
    description:
      "Build a beautiful booking page with your itinerary, packages, add-ons, and pricing in minutes.",
  },
  {
    step: "2",
    title: "Share With Travelers",
    description:
      "Send your booking link to travelers. They can view the trip, select packages, and pay online.",
  },
  {
    step: "3",
    title: "Track & Get Paid",
    description:
      "Monitor payments in real-time, send automated reminders, and receive payouts directly to your bank.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-purple text-white flex items-center justify-center text-xl font-bold mb-6">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
