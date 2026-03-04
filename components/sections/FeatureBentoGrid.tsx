import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FeatureBentoGrid() {
  return (
    <section className="feature-overview">
      <div className="feature-overview-container">
        <ScrollReveal>
          <h2>Everything You Need to Manage Group Trips</h2>
          <p className="feature-overview-subtitle">
            From trip creation to final payout, we handle the heavy lifting.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bento-grid">
            {/* Card 1: Auto-charge (large) */}
            <div className="bento-card bento-card-autocharge tilt-card">
              <h3>Automatic Payment Plans</h3>
              <p>Set up monthly auto-billing. Travelers pay on schedule, automatically.</p>
              <div className="autocharge-visual">
                <div className="payment-bar bar-1">
                  <div className="payment-bar-fill" style={{ width: "100%" }}>Paid</div>
                  <span className="check-badge">✓</span>
                  <span className="payment-bar-label">Jan</span>
                </div>
                <div className="payment-bar bar-2">
                  <div className="payment-bar-fill" style={{ width: "100%" }}>Paid</div>
                  <span className="check-badge">✓</span>
                  <span className="payment-bar-label">Feb</span>
                </div>
                <div className="payment-bar bar-3">
                  <div className="payment-bar-fill" style={{ width: "60%" }}></div>
                  <span className="payment-bar-label">Mar</span>
                </div>
                <div className="payment-bar bar-4">
                  <div className="payment-bar-fill" style={{ width: "30%" }}></div>
                  <span className="payment-bar-label">Apr</span>
                </div>
              </div>
            </div>

            {/* Card 2: Dashboard (medium) */}
            <div className="bento-card bento-card-dashboard tilt-card">
              <h3>Real-Time Dashboard</h3>
              <p>Track who paid, who hasn&apos;t, and total revenue at a glance.</p>
              <div className="mini-dashboard-preview">
                <div className="dashboard-row">
                  <div className="dashboard-avatar">JM</div>
                  <div className="dashboard-name">Jessica M.</div>
                  <span className="dashboard-status paid">Paid</span>
                </div>
                <div className="dashboard-row">
                  <div className="dashboard-avatar">RK</div>
                  <div className="dashboard-name">Ryan K.</div>
                  <span className="dashboard-status pending">Pending</span>
                </div>
                <div className="dashboard-row">
                  <div className="dashboard-avatar">AL</div>
                  <div className="dashboard-name">Aisha L.</div>
                  <span className="dashboard-status paid">Paid</span>
                </div>
              </div>
            </div>

            {/* Card 3: One Link (small) */}
            <div className="bento-card bento-card-link tilt-card">
              <h3>One Link</h3>
              <p>Share a single booking link with all your travelers.</p>
              <div className="link-visual link-preview">
                <div className="link-url-bar">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M6.5 11.5L3 8l3.5-3.5M9.5 4.5L13 8l-3.5 3.5" />
                  </svg>
                  <span>sqtrp.co/cancun2026</span>
                </div>
                <div className="link-share-buttons">
                  <div className="link-share-btn primary">Copy</div>
                  <div className="link-share-btn">Email</div>
                  <div className="link-share-btn">Text</div>
                </div>
              </div>
            </div>

            {/* Card 4: Reminders (wide) */}
            <div className="bento-card bento-card-reminders tilt-card">
              <h3>Automated Reminders</h3>
              <p>Payment reminders, receipts, and confirmations — all automatic.</p>
              <div className="reminders-visual">
                <div className="reminder-card">
                  <div className="reminder-card-header">
                    <div className="reminder-icon email">&nbsp;✉️</div>
                    <span>Payment Reminder</span>
                  </div>
                  <div className="reminder-preview">
                    <strong>Hi Jessica,</strong> your next payment of $400 is due in 3 days...
                  </div>
                </div>
                <div className="reminder-card">
                  <div className="reminder-card-header">
                    <div className="reminder-icon sms">&nbsp;📱</div>
                    <span>SMS Alert</span>
                  </div>
                  <div className="reminder-preview">
                    <strong>SquadTrip:</strong> Payment of $400 received for Cancun 2026. Thank you!
                  </div>
                </div>
                <div className="reminder-card">
                  <div className="reminder-card-header">
                    <div className="reminder-icon receipt">&nbsp;🧾</div>
                    <span>Receipt</span>
                  </div>
                  <div className="reminder-preview">
                    <strong>Payment confirmed.</strong> $400.00 for Cancun Summer 2026.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Stats (dark) */}
            <div className="bento-card bento-card-stats tilt-card">
              <h3>Know Your Numbers</h3>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">$14.4K</span>
                  <span className="stat-label">Collected</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24</span>
                  <span className="stat-label">Travelers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">92%</span>
                  <span className="stat-label">Paid</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
