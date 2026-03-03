import { BrowserFrame } from "./BrowserFrame";

interface Traveler {
  initials: string;
  name: string;
  amount: string;
  status: "paid" | "partial" | "pending";
}

interface DashboardMockupProps {
  tripName?: string;
  collected?: string;
  total?: string;
  percent?: number;
  travelers?: Traveler[];
}

const defaultTravelers: Traveler[] = [
  { initials: "JM", name: "Jessica M.", amount: "$1,200", status: "paid" },
  { initials: "RK", name: "Ryan K.", amount: "$800", status: "partial" },
  { initials: "AL", name: "Aisha L.", amount: "$0", status: "pending" },
  { initials: "MT", name: "Marcus T.", amount: "$1,200", status: "paid" },
];

export function DashboardMockup({
  tripName = "Cancun Summer 2026",
  collected = "$14,400",
  total = "$18,000",
  percent = 80,
  travelers = defaultTravelers,
}: DashboardMockupProps) {
  return (
    <BrowserFrame url={`dashboard.squadtrip.com/trips/${tripName.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="mini-dashboard">
        <div className="mini-stats-row">
          <div className="mini-stat">
            <div className="mini-stat-value">{travelers.length}</div>
            <div className="mini-stat-label">Travelers</div>
          </div>
          <div className="mini-stat">
            <div className="mini-stat-value green">{collected}</div>
            <div className="mini-stat-label">Collected</div>
          </div>
          <div className="mini-stat">
            <div className="mini-stat-value">{total}</div>
            <div className="mini-stat-label">Total</div>
          </div>
        </div>

        <div className="mini-progress">
          <div className="mini-progress-header">
            <span>{tripName}</span>
            <span>{percent}% collected</span>
          </div>
          <div className="mini-progress-bar">
            <div className="mini-progress-fill" style={{ width: `${percent}%` }} />
          </div>
        </div>

        <div className="mini-table">
          <div className="mini-table-header">
            <span>Traveler</span>
            <span>Paid</span>
            <span>Status</span>
            <span>Next</span>
          </div>
          {travelers.map((t) => (
            <div key={t.initials} className="mini-table-row">
              <span>
                <span className="mini-avatar">{t.initials}</span>
                {t.name}
              </span>
              <span>{t.amount}</span>
              <span>
                <span className={`mini-badge ${t.status}`}>
                  {t.status === "paid" ? "Paid" : t.status === "partial" ? "Partial" : "Pending"}
                </span>
              </span>
              <span>{t.status === "paid" ? "-" : "Jun 1"}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}
