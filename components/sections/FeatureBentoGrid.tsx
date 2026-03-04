import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FeatureBentoGrid() {
  return (
    <section className="feature-overview" id="features">
      <div className="feature-overview-container">
        <ScrollReveal>
          <h2>Everything you need to collect payments and manage your group trip</h2>
          <p className="feature-overview-subtitle">
            Set it up once. Watch payments roll in automatically.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bento-grid">
            {/* Card 1: Auto-charge (large) */}
            <div className="bento-card bento-card-autocharge tilt-card">
              <h3>Payments on autopilot</h3>
              <p>Enable auto-charge and travelers are billed automatically on schedule. No more chasing.</p>
              <div className="autocharge-visual">
                <div className="payment-bar bar-1">
                  <div className="payment-bar-fill" style={{ width: "100%" }}>$250</div>
                  <span className="check-badge">✓</span>
                  <span className="payment-bar-label">Jan 15</span>
                </div>
                <div className="payment-bar bar-2">
                  <div className="payment-bar-fill" style={{ width: "100%" }}>$250</div>
                  <span className="check-badge">✓</span>
                  <span className="payment-bar-label">Feb 15</span>
                </div>
                <div className="payment-bar bar-3">
                  <div className="payment-bar-fill" style={{ width: "60%" }}></div>
                  <span className="payment-bar-label">Mar 15</span>
                </div>
                <div className="payment-bar bar-4">
                  <div className="payment-bar-fill" style={{ width: "30%" }}></div>
                  <span className="payment-bar-label">Apr 15</span>
                </div>
              </div>
            </div>

            {/* Card 2: Dashboard (medium) */}
            <div className="bento-card bento-card-dashboard tilt-card">
              <h3>See who paid at a glance</h3>
              <p>Real-time dashboard shows payment status for every traveler.</p>
              <div className="mini-dashboard-preview">
                <div className="dashboard-row">
                  <div className="dashboard-avatar">MJ</div>
                  <div className="dashboard-name">Maria J.</div>
                  <span className="dashboard-status paid">Paid in full</span>
                </div>
                <div className="dashboard-row">
                  <div className="dashboard-avatar">TK</div>
                  <div className="dashboard-name">Tyler K.</div>
                  <span className="dashboard-status pending">3 of 4 paid</span>
                </div>
                <div className="dashboard-row">
                  <div className="dashboard-avatar">SL</div>
                  <div className="dashboard-name">Sarah L.</div>
                  <span className="dashboard-status pending">Due tomorrow</span>
                </div>
              </div>
            </div>

            {/* Card 3: One Link (small) */}
            <div className="bento-card bento-card-link tilt-card">
              <h3>One link does it all</h3>
              <p>Share your trip page anywhere.</p>
              <div className="link-visual link-preview">
                <div className="link-url-bar">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M6.5 11.5L3 8l3.5-3.5M9.5 4.5L13 8l-3.5 3.5" />
                  </svg>
                  <span>sqtrp.co/cancun2025</span>
                </div>
                <div className="link-share-buttons">
                  <div className="link-share-btn primary">Copy</div>
                  <div className="link-share-btn">Text</div>
                  <div className="link-share-btn">Email</div>
                </div>
              </div>
            </div>

            {/* Card 4: Reminders (wide) */}
            <div className="bento-card bento-card-reminders tilt-card">
              <h3>Automatic emails & reminders</h3>
              <p>Confirmation emails, payment reminders, and receipts—all sent automatically.</p>
              <div className="reminders-visual">
                <div className="reminder-card">
                  <div className="reminder-card-header">
                    <div className="reminder-icon email">✉️</div>
                    <span>Payment Reminder</span>
                  </div>
                  <div className="reminder-preview">
                    <strong>Hi Jessica,</strong> your next payment of $400 is due in 3 days...
                  </div>
                </div>
                <div className="reminder-card">
                  <div className="reminder-card-header">
                    <div className="reminder-icon receipt">🧾</div>
                    <span>Receipt</span>
                  </div>
                  <div className="reminder-preview">
                    <strong>Payment confirmed.</strong> $400.00 for Cancun Summer 2026.
                  </div>
                </div>
                <div className="reminder-card">
                  <div className="reminder-card-header">
                    <div className="reminder-icon sms">📱</div>
                    <span>SMS Alert</span>
                  </div>
                  <div className="reminder-preview">
                    <strong>New booking!</strong> Tyler K. just signed up for Cancun 2025.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Stats (dark) */}
            <div className="bento-card bento-card-stats tilt-card">
              <h3>Trusted by organizers worldwide</h3>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">2,000+</span>
                  <span className="stat-label">Organizers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Travelers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Destinations</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
