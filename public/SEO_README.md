# SEO Configuration Files

This directory contains important SEO configuration files for the portfolio website.

## robots.txt

The `robots.txt` file provides instructions to web crawlers and search engine bots about which parts of the site they should and shouldn't crawl.

### Important Notes:

- The file references the dynamically generated sitemap at `/sitemap.xml`
- It includes specific instructions for different crawlers (Google, Bing, etc.)
- The crawl-delay directive is respected by Bing and Yandex, but not by Google

## sitemap.xml

This is a static sitemap file that serves as a fallback.

### How sitemaps work in this project:

1. The primary sitemap is dynamically generated from `app/sitemap.ts` using Next.js's built-in sitemap generation
2. Next.js automatically serves this at the `/sitemap.xml` endpoint
3. This static file serves as a backup or for testing purposes

For updating the site structure, please modify the `app/sitemap.ts` file rather than this static XML file.

## SEO Strategy

The SEO implementation uses both static files and dynamic generation:

- Static files (robots.txt, fallback sitemap.xml) in the public directory
- Dynamic generation for up-to-date content with Next.js Metadata API
- Structured data using Schema.org JSON-LD markup
- Comprehensive meta tags including Open Graph and Twitter Cards

This approach ensures good SEO practices while maintaining the dynamic nature of the site.
