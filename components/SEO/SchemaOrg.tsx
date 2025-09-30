"use client";

import Script from "next/script";

interface SchemaOrgProps {
  /**
   * The canonical URL of the current page
   */
  url: string;
  /**
   * The title of the page or content
   */
  title: string;
  /**
   * A brief description of the page or content
   */
  description: string;
  /**
   * The URL to the primary image representing the content
   */
  imageUrl?: string;
  /**
   * The date when the content was published
   */
  datePublished?: string;
  /**
   * The date when the content was last modified
   */
  dateModified?: string;
  /**
   * The type of content (e.g., 'Person', 'WebSite', 'Article')
   */
  type?: "Person" | "WebSite" | "Article" | "Portfolio" | "Project";
}

/**
 * Schema.org structured data component for improved SEO
 *
 * This component adds JSON-LD structured data to pages, helping search engines
 * better understand the content and display rich results in search listings.
 *
 * @see https://schema.org/
 * @see https://developers.google.com/search/docs/guides/intro-structured-data
 */
export default function SchemaOrg({
  url,
  title,
  description,
  imageUrl = "https://ahmed-abd-elmohsen.tech/profile_3.jpeg",
  datePublished = new Date().toISOString(),
  dateModified = new Date().toISOString(),
  type = "Person",
}: SchemaOrgProps) {
  // Choose the appropriate schema based on page type
  let schema;

  switch (type) {
    case "WebSite":
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://ahmed-abd-elmohsen.tech",
        name: title,
        description: description,
        author: {
          "@type": "Person",
          name: "Ahmed Abd Elmohsen",
          url: "https://ahmed-abd-elmohsen.tech",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "{search_term_string}",
          "query-input": "required name=search_term_string",
        },
      };
      break;

    case "Project":
      schema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: title,
        description: description,
        url: url,
        image: imageUrl,
        author: {
          "@type": "Person",
          name: "Ahmed Abd Elmohsen",
          url: "https://ahmed-abd-elmohsen.tech",
        },
        datePublished: datePublished,
        dateModified: dateModified,
        keywords:
          "software development, project, portfolio, Ahmed Abd Elmohsen",
      };
      break;

    case "Portfolio":
      schema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
          "@type": "Person",
          name: "Ahmed Abd Elmohsen",
          url: "https://ahmed-abd-elmohsen.tech",
          image: imageUrl,
          jobTitle: "Software Engineer",
          description: description,
          sameAs: [
            "https://linkedin.com/in/ahmed-abd-elmohsen",
            "https://github.com/ahmed-abd-elmohsen",
          ],
        },
        url: url,
        name: title,
        description: description,
      };
      break;

    case "Person":
    default:
      schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ahmed Abd Elmohsen",
        jobTitle: "Software Engineer",
        description: description,
        url: url,
        image: imageUrl,
        sameAs: [
          "https://linkedin.com/in/ahmed-abd-elmohsen",
          "https://github.com/ahmed-abd-elmohsen",
        ],
        knowsAbout: [
          "Software Engineering",
          "Backend Development",
          "DevOps",
          "Node.js",
          "React",
          "Next.js",
          "Docker",
          "AWS",
          "MongoDB",
          "PostgreSQL",
          "CI/CD",
          "Cloud Infrastructure",
        ],
        workLocation: {
          "@type": "Place",
          name: "Remote",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Computer Science",
          sameAs: "https://example.edu",
        },
        nationality: {
          "@type": "Country",
          name: "Egypt",
        },
      };
  }

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
