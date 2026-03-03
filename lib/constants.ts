export const SITE_URL = "https://www.squadtrip.com";
export const SITE_NAME = "SquadTrip";
export const SITE_DESCRIPTION =
  "Create a booking page, set up automatic payment plans, and track who paid — all in one place. So you can focus on the trip, not the spreadsheet.";

export const APP_URL = "https://dashboard.squadtrip.com";
export const HELP_URL = "https://help.squadtrip.com";
export const SIGNUP_URL = `${APP_URL}/organizer-info/0`;
export const LOGIN_URL = `${APP_URL}/organizer-login`;

// Analytics IDs
export const GA_MEASUREMENT_ID = "G-3NZKWM9L6K";
export const FB_PIXEL_ID = "1000431533341595";
export const POSTHOG_KEY = "phc_dgJAmzgSLHv1G5fhmOSpQsAMQArJMi6YJcsSqmKwThb";
export const POSTHOG_HOST = "https://us.i.posthog.com";
export const INTERCOM_APP_ID = "iq5gq02t";

// Social links
export const LINKEDIN_URL = "https://www.linkedin.com/company/squadtrip";
export const INSTAGRAM_URL = "https://www.instagram.com/squadtrip";

// Brand
export const BRAND_COLORS = {
  purple: "#6B46C1",
  purpleLight: "#9F7AEA",
  purpleDark: "#553C9A",
  yellow: "#F6C744",
  yellowHover: "#E5B93D",
  success: "#10B981",
  error: "#EF4444",
  bgLight: "#F8F7FF",
} as const;

// Navigation
export const NAV_ITEMS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Guides", href: "/guides" },
  { label: "Help Center", href: HELP_URL, external: true },
] as const;

// Footer
export const FOOTER_SECTIONS = [
  {
    title: "Built For",
    links: [
      { label: "Tour Operators", href: "/travel-agents" },
      { label: "Destination Weddings", href: "/destination-wedding-planners" },
      { label: "Travel Agencies", href: "/travel-agents" },
      { label: "Retreats", href: "/travel-groups" },
      { label: "Group Trips", href: "/travel-groups" },
    ],
  },
  {
    title: "How It Works",
    links: [
      { label: "Overview", href: "/features" },
      { label: "Professional Checkout", href: "/product/checkout-experience" },
      { label: "Flexible Payments", href: "/product/payment-collection" },
      { label: "Message Your Guests", href: "/product/messaging" },
      { label: "E-sign Docs", href: "/product/e-sign-docs" },
      { label: "Registration Info", href: "/product/registration" },
      { label: "Trip Pages", href: "/product/trip-pages" },
      { label: "Affiliate Tracking", href: "/product/affiliate-tracking" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Guides", href: "/guides" },
      { label: "Help Center", href: HELP_URL, external: true },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
] as const;

// Stats
export const SOCIAL_PROOF_STATS = [
  { value: "2,000+", label: "Organizers" },
  { value: "50,000+", label: "Travelers" },
  { value: "500+", label: "Destinations" },
  { value: "4.8/5", label: "Rating" },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    quote:
      "If it wasn't for SquadTrip, I wouldn't have been able to grow my group trips from 50 guests to 500.",
    author: "Collin D. Williams, Jr.",
    company: "CDE Antigua",
  },
  {
    quote:
      "Switching to SquadTrip was one of the best decisions I've made for my business. The platform's ability to track trip package inventory and offer payment plans has made it easier for me to manage my bookings.",
    author: "Andrew Bennett",
    company: "Passport Society",
  },
  {
    quote:
      "SquadTrip streamlines the process of tracking payment plans, promoting the itinerary, and selling extra add-ons.",
    author: "Chef Ahki Taylor",
    company: "The Supernatural Woman Retreats",
  },
] as const;
