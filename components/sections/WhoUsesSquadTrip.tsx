import Link from "next/link";

const audiences = [
  {
    title: "Tour Operators & Travel Agencies",
    description:
      "Manage group bookings, automate payments, and track inventory across multiple trips.",
    href: "/travel-agents",
  },
  {
    title: "Group Trip Organizers",
    description:
      "Plan bachelor parties, family reunions, and friend trips without the spreadsheet headache.",
    href: "/travel-groups",
  },
  {
    title: "Destination Weddings & Events",
    description:
      "Collect payments, gather RSVPs, and manage guest communications for your big day.",
    href: "/destination-wedding-planners",
  },
  {
    title: "Retreat Organizers",
    description:
      "Sell wellness retreats, yoga trips, and group experiences with flexible payment plans.",
    href: "/travel-groups",
  },
];

export function WhoUsesSquadTrip() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Who Uses SquadTrip
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Built for anyone organizing group travel
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {audiences.map((audience) => (
            <Link
              key={audience.title}
              href={audience.href}
              className="group rounded-2xl border border-gray-200 p-8 hover:border-purple hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple transition-colors mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {audience.description}
              </p>
              <span className="inline-block mt-4 text-purple font-medium">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
