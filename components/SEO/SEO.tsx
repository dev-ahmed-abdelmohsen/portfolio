"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";
import SchemaOrg from "./SchemaOrg";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  publishedAt?: string;
  updatedAt?: string;
  schemaType?: "Person" | "WebSite" | "Article" | "Portfolio" | "Project";
  keywords?: string[];
  noindex?: boolean;
}

/**
 * SEO component to improve search engine optimization for all pages
 * Handles meta tags, Open Graph, Twitter Cards, and Schema.org structured data
 */
const SEO = ({
  title = "Ahmed Abd Elmohsen | Software Engineer",
  description = "Professional portfolio showcasing my work as a Software Engineer with expertise in backend development and DevOps practices.",
  canonicalUrl,
  ogType = "website",
  ogImage = "/profile_3.jpeg",
  publishedAt,
  updatedAt,
  schemaType = "Person",
  keywords = [
    "Software Engineer",
    "Backend Developer",
    "DevOps Engineer",
    "AWS",
    "Node.js",
    "React",
    "Next.js",
    "Docker",
    "Cloud Infrastructure",
  ],
  noindex = false,
}: SEOProps) => {
  const pathname = usePathname();
  const siteUrl = "https://ahmed-abd-elmohsen.vercel.app";
  const fullUrl = canonicalUrl || `${siteUrl}${pathname}`;
  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${siteUrl}${ogImage}`;
  const formattedKeywords = keywords.join(", ");

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={formattedKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={fullUrl} />

        {/* Robots directives */}
        {noindex ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
        )}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={fullOgImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Ahmed Abd Elmohsen Portfolio" />
        <meta property="og:locale" content="en_US" />
        {publishedAt && (
          <meta property="article:published_time" content={publishedAt} />
        )}
        {updatedAt && (
          <meta property="article:modified_time" content={updatedAt} />
        )}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={fullUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullOgImage} />
        <meta name="twitter:creator" content="@ahmedabd" />

        {/* Apple Touch */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Alternate Languages if needed */}
        <link rel="alternate" href={fullUrl} hrefLang="en" />
        <link rel="alternate" href={fullUrl} hrefLang="x-default" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="_M7xG8pu4J-Nmb8PGYCF829JndamEAV4ksXjX6nzCjw"
        />
      </Head>

      {/* Structured Data */}
      <SchemaOrg
        url={fullUrl}
        title={title}
        description={description}
        imageUrl={fullOgImage}
        datePublished={publishedAt}
        dateModified={updatedAt}
        type={schemaType}
      />
    </>
  );
};

export default SEO;
