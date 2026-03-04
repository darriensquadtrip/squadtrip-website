/* Pure CSS/HTML mockup renderings for each feature card on /features */

const mockupBase: React.CSSProperties = {
  background: "#f5f3ff",
  padding: "20px",
  height: "220px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const card: React.CSSProperties = {
  background: "white",
  borderRadius: "10px",
  padding: "14px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  width: "100%",
};

const pill: React.CSSProperties = {
  display: "inline-block",
  padding: "3px 10px",
  borderRadius: "999px",
  fontSize: "0.65rem",
  fontWeight: 600,
};

const green: React.CSSProperties = { ...pill, background: "#dcfce7", color: "#16a34a" };
const purple: React.CSSProperties = { ...pill, background: "#f3e8ff", color: "#7c3aed" };
const yellow: React.CSSProperties = { ...pill, background: "#fef9c3", color: "#a16207" };
const gray: React.CSSProperties = { ...pill, background: "#f3f4f6", color: "#6b7280" };

const miniRow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "8px 0",
  borderBottom: "1px solid #f3f4f6",
  fontSize: "0.75rem",
};

const avatar: React.CSSProperties = {
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  background: "var(--purple-primary, #6B46C1)",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.6rem",
  fontWeight: 700,
  flexShrink: 0,
};

const progressBar = (pct: number, color = "#6B46C1") => (
  <div style={{ height: "6px", background: "#e5e7eb", borderRadius: "3px", flex: 1 }}>
    <div style={{ height: "6px", background: color, borderRadius: "3px", width: `${pct}%` }} />
  </div>
);

/* ==================== BUILD ==================== */

export function TripPagesMockup() {
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: 0, overflow: "hidden" }}>
        <div style={{ background: "linear-gradient(135deg, #a78bfa, #6B46C1)", height: "70px", position: "relative" }}>
          <div style={{ position: "absolute", bottom: "-1px", left: 0, right: 0, height: "20px", background: "white", borderRadius: "16px 16px 0 0" }} />
        </div>
        <div style={{ padding: "8px 14px 14px" }}>
          <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a1a2e" }}>Cancun Summer 2026</div>
          <div style={{ fontSize: "0.65rem", color: "#6b7280", marginTop: "2px" }}>Jun 15-22 &middot; 7 nights &middot; Beachfront Resort</div>
          <div style={{ display: "flex", gap: "6px", marginTop: "10px" }}>
            <span style={green}>&#10003; Open</span>
            <span style={purple}>12 booked</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ItinerariesMockup() {
  const days = [
    { day: "Day 1", label: "Arrival & Welcome Dinner", icon: "\u2708\uFE0F" },
    { day: "Day 2", label: "Beach & Snorkeling", icon: "\uD83C\uDFD6\uFE0F" },
    { day: "Day 3", label: "Ruins Tour & Cenote", icon: "\uD83C\uDFDB\uFE0F" },
    { day: "Day 4", label: "Free Day & Farewell", icon: "\uD83C\uDF1E" },
  ];
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "12px 14px" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "8px" }}>Itinerary</div>
        {days.map((d) => (
          <div key={d.day} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 0", borderBottom: "1px solid #f3f4f6" }}>
            <span style={{ fontSize: "1rem" }}>{d.icon}</span>
            <div>
              <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "#6B46C1" }}>{d.day}</div>
              <div style={{ fontSize: "0.7rem", color: "#374151" }}>{d.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AddOnsMockup() {
  const items = [
    { name: "Airport Transfer", price: "$45", checked: true },
    { name: "Spa Package", price: "$120", checked: true },
    { name: "Scuba Diving", price: "$85", checked: false },
    { name: "Photography", price: "$60", checked: false },
  ];
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "12px 14px" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "8px" }}>Add-ons</div>
        {items.map((item) => (
          <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid #f3f4f6" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "16px", height: "16px", borderRadius: "4px", border: item.checked ? "none" : "2px solid #d1d5db", background: item.checked ? "#6B46C1" : "white", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "0.55rem" }}>
                {item.checked && "\u2713"}
              </div>
              <span style={{ fontSize: "0.72rem", color: "#374151" }}>{item.name}</span>
            </div>
            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#1a1a2e" }}>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PackagesMockup() {
  return (
    <div style={mockupBase}>
      <div style={{ display: "flex", gap: "10px", width: "100%" }}>
        <div style={{ ...card, flex: 1, textAlign: "center", border: "2px solid #e5e7eb" }}>
          <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "#6b7280", marginBottom: "4px" }}>DOUBLE</div>
          <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1a1a2e" }}>$1,200</div>
          <div style={{ fontSize: "0.6rem", color: "#6b7280", margin: "4px 0 8px" }}>per person</div>
          <div style={{ fontSize: "0.6rem", color: "#374151", lineHeight: 1.5 }}>Shared room<br />All meals<br />Activities</div>
        </div>
        <div style={{ ...card, flex: 1, textAlign: "center", border: "2px solid #6B46C1", position: "relative" }}>
          <div style={{ position: "absolute", top: "-8px", left: "50%", transform: "translateX(-50%)", background: "#F6C744", color: "#1a1a2e", padding: "2px 10px", borderRadius: "999px", fontSize: "0.55rem", fontWeight: 700, whiteSpace: "nowrap" }}>Popular</div>
          <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "#6B46C1", marginBottom: "4px" }}>SINGLE</div>
          <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1a1a2e" }}>$1,800</div>
          <div style={{ fontSize: "0.6rem", color: "#6b7280", margin: "4px 0 8px" }}>per person</div>
          <div style={{ fontSize: "0.6rem", color: "#374151", lineHeight: 1.5 }}>Private room<br />All meals<br />Activities + spa</div>
        </div>
      </div>
    </div>
  );
}

export function CustomBrandingMockup() {
  const colors = ["#6B46C1", "#F6C744", "#1A1A2E", "#10B981", "#3B82F6", "#EF4444"];
  return (
    <div style={mockupBase}>
      <div style={{ ...card, textAlign: "center" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "10px" }}>Brand Colors</div>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "12px" }}>
          {colors.map((c) => (
            <div key={c} style={{ width: "28px", height: "28px", borderRadius: "50%", background: c, border: c === "#F6C744" ? "2px solid #1a1a2e" : "2px solid transparent" }} />
          ))}
        </div>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
          <div style={{ padding: "6px 16px", borderRadius: "999px", background: "#6B46C1", color: "white", fontSize: "0.65rem", fontWeight: 600 }}>Book Now</div>
          <div style={{ padding: "6px 16px", borderRadius: "999px", border: "2px solid #6B46C1", color: "#6B46C1", fontSize: "0.65rem", fontWeight: 600 }}>Learn More</div>
        </div>
      </div>
    </div>
  );
}

/* ==================== PROMOTE ==================== */

export function EmbedMockup() {
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: 0, overflow: "hidden", border: "1px solid #e5e7eb" }}>
        <div style={{ background: "#f9fafb", padding: "8px 12px", display: "flex", alignItems: "center", gap: "6px", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ display: "flex", gap: "4px" }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#FF5F57" }} />
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#FFBD2E" }} />
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#28CA41" }} />
          </div>
          <div style={{ flex: 1, background: "white", padding: "3px 8px", borderRadius: "4px", fontSize: "0.6rem", color: "#9ca3af" }}>yourwebsite.com/trips</div>
        </div>
        <div style={{ padding: "12px", background: "white" }}>
          <div style={{ fontSize: "0.6rem", color: "#9ca3af", marginBottom: "8px" }}>Your website content...</div>
          <div style={{ background: "#f5f3ff", borderRadius: "8px", padding: "10px", border: "1px dashed #6B46C1" }}>
            <div style={{ fontSize: "0.6rem", color: "#6B46C1", fontWeight: 600, marginBottom: "4px" }}>SquadTrip Embed</div>
            <div style={{ background: "#6B46C1", color: "white", padding: "5px 12px", borderRadius: "6px", fontSize: "0.6rem", textAlign: "center", fontWeight: 600 }}>Book This Trip</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ReferralsMockup() {
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "12px 14px" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "10px" }}>Referral Tracking</div>
        <div style={{ background: "#f5f3ff", borderRadius: "8px", padding: "8px 10px", fontSize: "0.65rem", color: "#6B46C1", marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>sqtrp.co/ref/jessica</span>
          <span style={{ background: "#6B46C1", color: "white", padding: "2px 8px", borderRadius: "4px", fontSize: "0.6rem" }}>Copy</span>
        </div>
        {[
          { name: "Jessica M.", referrals: 8, earned: "$240" },
          { name: "Ryan K.", referrals: 3, earned: "$90" },
        ].map((r) => (
          <div key={r.name} style={miniRow}>
            <div style={avatar}>{r.name.split(" ").map((n) => n[0]).join("")}</div>
            <span style={{ flex: 1, color: "#374151" }}>{r.name}</span>
            <span style={{ color: "#6b7280" }}>{r.referrals} refs</span>
            <span style={{ fontWeight: 600, color: "#16a34a" }}>{r.earned}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AffiliateMockup() {
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "12px 14px" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "8px" }}>Affiliate Dashboard</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "10px" }}>
          <div style={{ background: "#f5f3ff", borderRadius: "8px", padding: "8px", textAlign: "center" }}>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: "#6B46C1" }}>12</div>
            <div style={{ fontSize: "0.55rem", color: "#6b7280" }}>Affiliates</div>
          </div>
          <div style={{ background: "#dcfce7", borderRadius: "8px", padding: "8px", textAlign: "center" }}>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: "#16a34a" }}>$1.8K</div>
            <div style={{ fontSize: "0.55rem", color: "#6b7280" }}>Revenue</div>
          </div>
        </div>
        <div style={miniRow}>
          <div style={avatar}>TG</div>
          <span style={{ flex: 1, fontSize: "0.7rem", color: "#374151" }}>Travel Guru Blog</span>
          <span style={green}>$540</span>
        </div>
      </div>
    </div>
  );
}

/* ==================== SELL ==================== */

export function FeeHandlingMockup() {
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "12px 14px" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "10px" }}>Fee Settings</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", background: "#f5f3ff", borderRadius: "8px", marginBottom: "8px" }}>
          <span style={{ fontSize: "0.7rem", color: "#374151" }}>Pass fees to traveler</span>
          <div style={{ width: "32px", height: "18px", borderRadius: "9px", background: "#6B46C1", position: "relative" }}>
            <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "white", position: "absolute", right: "2px", top: "2px" }} />
          </div>
        </div>
        <div style={{ fontSize: "0.65rem", color: "#6b7280", marginBottom: "8px" }}>Traveler sees:</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", padding: "4px 0", borderBottom: "1px solid #f3f4f6" }}>
          <span style={{ color: "#374151" }}>Trip Package</span><span style={{ fontWeight: 600 }}>$1,200</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", padding: "4px 0", borderBottom: "1px solid #f3f4f6" }}>
          <span style={{ color: "#374151" }}>Processing Fee</span><span style={{ fontWeight: 600 }}>$72</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", padding: "6px 0", fontWeight: 700 }}>
          <span>Total</span><span style={{ color: "#6B46C1" }}>$1,272</span>
        </div>
      </div>
    </div>
  );
}

export function AutoBillingMockup() {
  const months = [
    { month: "Jan 15", label: "Deposit", amount: "$400", status: "Paid", done: true },
    { month: "Feb 15", label: "Payment 2", amount: "$400", status: "Paid", done: true },
    { month: "Mar 15", label: "Payment 3", amount: "$400", status: "Upcoming", done: false },
  ];
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "12px 14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e" }}>Auto-Billing</div>
          <div style={{ width: "32px", height: "18px", borderRadius: "9px", background: "#6B46C1", position: "relative" }}>
            <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "white", position: "absolute", right: "2px", top: "2px" }} />
          </div>
        </div>
        {months.map((m) => (
          <div key={m.month} style={{ ...miniRow, justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "#6B46C1" }}>{m.month}</div>
              <div style={{ fontSize: "0.6rem", color: "#6b7280" }}>{m.label}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 600 }}>{m.amount}</div>
              <span style={m.done ? green : yellow}>{m.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FlexDepositMockup() {
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "12px 14px" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "10px" }}>Deposit Amount</div>
        <div style={{ fontSize: "0.65rem", color: "#6b7280", marginBottom: "4px" }}>Minimum: $200 &middot; Total: $1,200</div>
        <div style={{ position: "relative", height: "24px", background: "#e5e7eb", borderRadius: "12px", marginBottom: "8px", marginTop: "8px" }}>
          <div style={{ position: "absolute", left: 0, top: 0, height: "24px", width: "50%", background: "linear-gradient(90deg, #6B46C1, #a78bfa)", borderRadius: "12px" }} />
          <div style={{ position: "absolute", left: "48%", top: "-2px", width: "28px", height: "28px", borderRadius: "50%", background: "white", border: "3px solid #6B46C1", boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }} />
        </div>
        <div style={{ textAlign: "center", fontSize: "1.1rem", fontWeight: 800, color: "#6B46C1", marginBottom: "4px" }}>$600</div>
        <div style={{ textAlign: "center", fontSize: "0.6rem", color: "#6b7280" }}>3 remaining payments of $200/mo</div>
      </div>
    </div>
  );
}

export function TravelerPortalMockup() {
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "12px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
          <div style={avatar}>JM</div>
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e" }}>Jessica M.</div>
            <div style={{ fontSize: "0.6rem", color: "#6b7280" }}>Cancun Summer 2026</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "6px", marginBottom: "10px" }}>
          <span style={purple}>Itinerary</span>
          <span style={green}>Payments</span>
          <span style={gray}>Add-ons</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.7rem", marginBottom: "6px" }}>
          <span style={{ color: "#374151" }}>Paid</span>
          <span style={{ fontWeight: 600 }}>$800 / $1,200</span>
        </div>
        {progressBar(67)}
      </div>
    </div>
  );
}

export function InventoryMockup() {
  const items = [
    { name: "Double Room", booked: 8, total: 10 },
    { name: "Single Room", booked: 4, total: 5 },
    { name: "Scuba Add-on", booked: 12, total: 15 },
  ];
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "12px 14px" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "10px" }}>Inventory</div>
        {items.map((item) => (
          <div key={item.name} style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.68rem", marginBottom: "4px" }}>
              <span style={{ color: "#374151" }}>{item.name}</span>
              <span style={{ color: "#6b7280" }}>{item.booked}/{item.total}</span>
            </div>
            {progressBar((item.booked / item.total) * 100, item.booked === item.total ? "#ef4444" : "#6B46C1")}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==================== MANAGE ==================== */

export function ScheduledEmailsMockup() {
  const emails = [
    { label: "Welcome Email", time: "On booking", status: "Active" },
    { label: "Payment Reminder", time: "3 days before", status: "Active" },
    { label: "Trip Details", time: "1 week before", status: "Draft" },
  ];
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "12px 14px" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "10px" }}>Email Workflows</div>
        {emails.map((e) => (
          <div key={e.label} style={{ ...miniRow, justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#374151" }}>{e.label}</div>
              <div style={{ fontSize: "0.6rem", color: "#6b7280" }}>{e.time}</div>
            </div>
            <span style={e.status === "Active" ? green : gray}>{e.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RegistrationMockup() {
  const fields = [
    { label: "Full Legal Name", type: "text" },
    { label: "Passport Number", type: "text" },
    { label: "Flight Arrival", type: "date" },
    { label: "Dietary Restrictions", type: "select" },
  ];
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "12px 14px" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "10px" }}>Registration Form</div>
        {fields.map((f) => (
          <div key={f.label} style={{ marginBottom: "8px" }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "#374151", marginBottom: "3px" }}>{f.label}</div>
            <div style={{ height: "24px", background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "6px", display: "flex", alignItems: "center", paddingLeft: "8px" }}>
              <span style={{ fontSize: "0.6rem", color: "#9ca3af" }}>{f.type === "date" ? "mm/dd/yyyy" : f.type === "select" ? "Select..." : ""}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DataExportsMockup() {
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "12px 14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e" }}>Reports</div>
          <div style={{ background: "#6B46C1", color: "white", padding: "3px 10px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 600 }}>Export CSV</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "4px", fontSize: "0.6rem", fontWeight: 600, color: "#6b7280", marginBottom: "6px", padding: "0 0 6px", borderBottom: "1px solid #e5e7eb" }}>
          <span>Traveler</span><span>Package</span><span>Status</span>
        </div>
        {[
          { name: "Jessica M.", pkg: "Single", status: "Paid" },
          { name: "Ryan K.", pkg: "Double", status: "Partial" },
          { name: "Aisha L.", pkg: "Single", status: "Paid" },
        ].map((r) => (
          <div key={r.name} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "4px", fontSize: "0.65rem", padding: "5px 0", borderBottom: "1px solid #f3f4f6" }}>
            <span style={{ color: "#374151" }}>{r.name}</span>
            <span style={{ color: "#6b7280" }}>{r.pkg}</span>
            <span style={r.status === "Paid" ? green : yellow}>{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DisputeMockup() {
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "12px 14px" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "10px" }}>Disputes</div>
        <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "8px", padding: "10px", marginBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#374151" }}>Marcus T.</span>
            <span style={{ ...pill, background: "#fecaca", color: "#dc2626" }}>Open</span>
          </div>
          <div style={{ fontSize: "0.6rem", color: "#6b7280" }}>Dispute for $400 &middot; Opened Feb 12</div>
        </div>
        <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "8px", padding: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#374151" }}>Lisa R.</span>
            <span style={green}>Resolved</span>
          </div>
          <div style={{ fontSize: "0.6rem", color: "#6b7280" }}>Dispute for $200 &middot; Won Jan 28</div>
        </div>
      </div>
    </div>
  );
}

/* ==================== GET PAID ==================== */

export function PaymentProcessingMockup() {
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "14px", textAlign: "center" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "12px" }}>Payment Methods</div>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "14px" }}>
          <div style={{ background: "black", color: "white", borderRadius: "8px", padding: "6px 14px", fontSize: "0.7rem", fontWeight: 600 }}> Pay</div>
          <div style={{ background: "#635bff", color: "white", borderRadius: "8px", padding: "6px 14px", fontSize: "0.7rem", fontWeight: 600 }}>Stripe</div>
        </div>
        <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginBottom: "14px" }}>
          {["Visa", "MC", "Amex"].map((c) => (
            <div key={c} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "6px", padding: "4px 10px", fontSize: "0.6rem", fontWeight: 600, color: "#374151" }}>{c}</div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "0.6rem", color: "#16a34a" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          Bank-level encryption
        </div>
      </div>
    </div>
  );
}

export function DailyPayoutsMockup() {
  return (
    <div style={mockupBase}>
      <div style={{ ...card, padding: "12px 14px" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "10px" }}>Stripe Payouts</div>
        <div style={{ background: "#f0fdf4", borderRadius: "8px", padding: "10px", textAlign: "center", marginBottom: "10px" }}>
          <div style={{ fontSize: "0.6rem", color: "#16a34a", fontWeight: 600 }}>Next Payout</div>
          <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#16a34a" }}>$4,200</div>
          <div style={{ fontSize: "0.6rem", color: "#6b7280" }}>Tomorrow &middot; Bank of America ****4821</div>
        </div>
        {[
          { date: "Feb 28", amount: "$3,800", status: "Completed" },
          { date: "Feb 27", amount: "$2,100", status: "Completed" },
        ].map((p) => (
          <div key={p.date} style={{ ...miniRow, justifyContent: "space-between" }}>
            <span style={{ color: "#6b7280" }}>{p.date}</span>
            <span style={{ fontWeight: 600, color: "#374151" }}>{p.amount}</span>
            <span style={green}>{p.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
