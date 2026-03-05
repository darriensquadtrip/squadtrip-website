import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { JsonLd } from "./JsonLd";

export function WebSiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logos/squad-trip-logo-05.png`,
          },
        },
      }}
    />
  );
}
