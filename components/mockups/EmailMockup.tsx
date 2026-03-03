import { BrowserFrame } from "./BrowserFrame";

interface PaymentRow {
  label: string;
  amount: string;
}

interface EmailMockupProps {
  subject?: string;
  greeting?: string;
  paymentRows?: PaymentRow[];
  ctaText?: string;
}

const defaultPaymentRows: PaymentRow[] = [
  { label: "Amount due", amount: "$400.00" },
  { label: "Due date", amount: "Mar 15, 2026" },
  { label: "Payment plan", amount: "3 of 3" },
];

export function EmailMockup({
  subject = "Payment Reminder",
  greeting = "Hi Jessica, your next payment for Cancun Summer 2026 is coming up.",
  paymentRows = defaultPaymentRows,
  ctaText = "Make Payment",
}: EmailMockupProps) {
  return (
    <BrowserFrame url="mail.google.com">
      <div className="email-mockup-mini">
        <div className="email-preview">
          <div className="email-preview-header">
            <h4>{subject}</h4>
            <p>from SquadTrip</p>
          </div>
          <div className="email-preview-body">
            <p className="email-preview-greeting">{greeting}</p>
            <div className="email-payment-box-mini">
              {paymentRows.map((row) => (
                <div key={row.label} className="email-payment-row">
                  <span>{row.label}</span>
                  <span className="amount">{row.amount}</span>
                </div>
              ))}
            </div>
            <a href="#" className="email-cta-mini">{ctaText}</a>
            <div className="email-auto-badge">
              \u2713 Auto-charge enabled — no action needed
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
