import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const audiences = [
  {
    icon: "\u2708\uFE0F",
    title: "Tour Operators & Travel Agencies",
    quote: "Manage group bookings, automate payments, and track inventory across multiple trips.",
    href: "/travel-agents",
  },
  {
    icon: "\uD83C\uDFD6\uFE0F",
    title: "Group Trip Organizers",
    quote: "Plan bachelor parties, family reunions, and friend trips without the spreadsheet headache.",
    href: "/travel-groups",
  },
  {
    icon: "\uD83D\uDC8D",
    title: "Destination Weddings",
    quote: "Collect payments, gather RSVPs, and manage guest communications for your big day.",
    href: "/destination-wedding-planners",
  },
  {
    icon: "\uD83E\uDDD8",
    title: "Retreat Organizers",
    quote: "Sell wellness retreats, yoga trips, and group experiences with flexible payment plans.",
    href: "/travel-groups",
  },
];

export function WhoUsesSquadTrip() {
  return (
    <section className="who-uses">
      <div className="who-uses-container">
        <ScrollReveal>
          <h2>Who Uses SquadTrip</h2>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="who-uses-grid">
            {audiences.map((a) => (
              <div key={a.title} className="who-uses-card hover-lift">
                <div className="who-uses-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>&ldquo;{a.quote}&rdquo;</p>
                <Link href={a.href}>
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
