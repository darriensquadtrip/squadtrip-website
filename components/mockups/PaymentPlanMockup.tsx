import { BrowserFrame } from "./BrowserFrame";

interface ScheduleItem {
  date: string;
  label: string;
  amount: string;
  status: "complete" | "upcoming";
}

interface PaymentPlanMockupProps {
  scheduleItems?: ScheduleItem[];
  autoChargeEnabled?: boolean;
}

const defaultSchedule: ScheduleItem[] = [
  { date: "Jan 15", label: "Deposit", amount: "$400", status: "complete" },
  { date: "Feb 15", label: "2nd payment", amount: "$400", status: "complete" },
  { date: "Mar 15", label: "3rd payment", amount: "$400", status: "upcoming" },
];

export function PaymentPlanMockup({
  scheduleItems = defaultSchedule,
  autoChargeEnabled = true,
}: PaymentPlanMockupProps) {
  return (
    <BrowserFrame url="dashboard.squadtrip.com/payment-plan">
      <div className="payment-setup-mockup">
        <div className="setup-header">
          <span className="setup-title">Payment Schedule</span>
          <div className="setup-toggle">
            <span>Auto-charge</span>
            <div className="toggle-switch" />
          </div>
        </div>

        <div className="payment-schedule">
          {scheduleItems.map((item) => (
            <div key={item.date} className="schedule-item">
              <div className={`schedule-icon ${item.status}`}>
                {item.status === "complete" ? "\u2713" : "\u25CB"}
              </div>
              <div className="schedule-info">
                <div className="schedule-date">{item.date}</div>
                <div className="schedule-label">{item.label}</div>
              </div>
              <div className="schedule-amount">{item.amount}</div>
            </div>
          ))}
        </div>

        {autoChargeEnabled && (
          <div className="auto-features">
            <span className="auto-feature">\u2713 Auto-retry failed payments</span>
            <span className="auto-feature">\u2713 Email reminders</span>
            <span className="auto-feature">\u2713 Late fee optional</span>
          </div>
        )}
      </div>
    </BrowserFrame>
  );
}
