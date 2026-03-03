import { BrowserFrame } from "./BrowserFrame";

interface Package {
  name: string;
  price: string;
  features: string[];
}

interface ItineraryDay {
  day: string;
  title: string;
}

interface OrderSummaryRow {
  label: string;
  value: string;
}

interface BookingPageMockupProps {
  tripTitle?: string;
  tripMeta?: string;
  packages?: Package[];
  itinerary?: ItineraryDay[];
  orderSummary?: OrderSummaryRow[];
  total?: string;
}

const defaultPackages: Package[] = [
  {
    name: "All-Inclusive Package",
    price: "$1,200",
    features: ["Hotel", "Flights", "Excursions", "Meals"],
  },
];

const defaultItinerary: ItineraryDay[] = [
  { day: "Day 1", title: "Arrival & Beach Welcome Party" },
  { day: "Day 2", title: "Catamaran Cruise & Snorkeling" },
  { day: "Day 3", title: "City Tour & Shopping" },
];

const defaultSummary: OrderSummaryRow[] = [
  { label: "All-Inclusive Package", value: "$1,200" },
  { label: "Processing fee", value: "$72" },
];

export function BookingPageMockup({
  tripTitle = "Cancun Summer 2026",
  tripMeta = "Jun 15-20 \u2022 5 nights \u2022 All-inclusive",
  packages = defaultPackages,
  itinerary = defaultItinerary,
  orderSummary = defaultSummary,
  total = "$1,272",
}: BookingPageMockupProps) {
  return (
    <BrowserFrame url={`squadtrip.com/book/${tripTitle.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="booking-mockup-mini">
        <div className="booking-hero-mini">
          <h4>{tripTitle}</h4>
          <p>{tripMeta}</p>
        </div>

        <div className="booking-two-col">
          <div className="booking-left-col">
            {packages.map((pkg) => (
              <div key={pkg.name} className="package-mini">
                <div className="package-mini-header">
                  <span className="package-mini-name">{pkg.name}</span>
                  <span className="package-mini-price">{pkg.price}</span>
                </div>
                <div className="package-mini-features">
                  {pkg.features.map((f) => (
                    <span key={f} className="package-mini-feature">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {itinerary.length > 0 && (
              <div className="itinerary-mini">
                <div className="itinerary-mini-header">Itinerary</div>
                {itinerary.map((day) => (
                  <div key={day.day} className="itinerary-mini-day">
                    <span className="day-label">{day.day}</span>
                    <span className="day-title">{day.title}</span>
                  </div>
                ))}
                <div className="itinerary-mini-more">View full itinerary &rarr;</div>
              </div>
            )}
          </div>

          <div className="booking-right-col">
            <div className="booking-summary-mini">
              {orderSummary.map((row) => (
                <div key={row.label} className="summary-mini-row">
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                </div>
              ))}
              <div className="summary-mini-row total">
                <span>Total</span>
                <span>{total}</span>
              </div>
              <button className="book-btn-mini">Book Now</button>
              <div className="payment-plan-hint">or pay in 3 installments</div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
