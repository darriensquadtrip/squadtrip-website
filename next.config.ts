import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing slash handling to match WordPress URLs
  trailingSlash: false,

  // Remove X-Powered-By header for security and slightly smaller response
  poweredByHeader: false,

  // Enable gzip compression
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "squadtrip.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.squadtrip.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },

  // Redirects for old WordPress URLs not covered by vercel.json
  async redirects() {
    return [
      // WordPress admin/API paths return 410 Gone
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/xmlrpc.php",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
