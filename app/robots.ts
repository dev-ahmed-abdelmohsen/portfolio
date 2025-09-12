import { MetadataRoute } from "next";

/**
 * Generate a professional robots.txt configuration
 * This follows the standards outlined at https://developers.google.com/search/docs/advanced/robots/create-robots-txt
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://ahmed-abd-elmohsen.vercel.app";

  return {
    // Define rules for all web crawlers
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/resume", "/projects/", "/skills", "/contact", "/blog"],
        disallow: [
          "/api/",
          "/private/",
          "/admin/",
          "/drafts/",
          "/*.json$",
          "/*.xml$",
          "/analytics/",
          "/internal/",
        ],
        // Crawl-delay directive (in seconds) - helps prevent server overload
        // Note: This is respected by Bing, Yandex, but not by Google
        crawlDelay: 2,
      },
      // Specific rules for Google's various bots
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/private/", "/admin/", "/drafts/"],
      },
      // Rules for Google's image bot
      {
        userAgent: "Googlebot-Image",
        allow: ["/projects/", "/public/projects/"],
        disallow: ["/private-images/"],
      },
      // Rules for mobile-specific crawlers
      {
        userAgent: "Googlebot-Mobile",
        allow: "/",
      },
    ],
    // Link to your sitemap
    sitemap: `${baseUrl}/sitemap.xml`,
    // Host directive helps specify the preferred domain version
    host: baseUrl,
  };
}
