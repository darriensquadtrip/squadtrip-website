import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { FacebookPixel } from "@/components/analytics/FacebookPixel";
import { PostHogProvider } from "@/components/analytics/PostHogProvider";
import { IntercomWidget } from "@/components/analytics/IntercomWidget";
import { UTMTracker } from "@/components/analytics/UTMTracker";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Group Travel Booking Platform`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <GoogleAnalytics />
        <FacebookPixel />
        <OrganizationSchema />
      </head>
      <body className="font-sans antialiased">
        <PostHogProvider>
          <UTMTracker />
          <Header />
          <main>{children}</main>
          <Footer />
          <IntercomWidget />
        </PostHogProvider>
      </body>
    </html>
  );
}
