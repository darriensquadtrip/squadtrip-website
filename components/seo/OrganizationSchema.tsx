import { SITE_URL, SITE_NAME, LINKEDIN_URL, INSTAGRAM_URL } from "@/lib/constants";
import { JsonLd } from "./JsonLd";

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/images/logos/squadtrip-logo.png`,
        description:
          "Group travel booking platform for trip organizers, travel agents, and tour operators.",
        sameAs: [LINKEDIN_URL, INSTAGRAM_URL],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          url: "https://help.squadtrip.com",
        },
      }}
    />
  );
}
