/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.squadtrip.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Homepage gets highest priority
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Core pages get high priority
    if (
      ["/features", "/pricing", "/guides"].includes(path) ||
      path.startsWith("/travel-") ||
      path.startsWith("/destination-") ||
      path.startsWith("/product/")
    ) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Guides get medium priority
    if (path.startsWith("/guides/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: new Date().toISOString(),
      };
    }

    // Default
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
