import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { JsonLd } from "./JsonLd";

export function SoftwareAppSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: SITE_NAME,
        url: SITE_URL,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: [
          {
            "@type": "Offer",
            name: "Starter",
            price: "0",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "Launch",
            price: "29",
            priceCurrency: "USD",
            billingDuration: "P1M",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "2000",
          bestRating: "5",
        },
      }}
    />
  );
}
