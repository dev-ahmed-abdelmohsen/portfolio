import { FC } from 'react';
import Head from 'next/head';

interface SchemaOrgProps {
  url: string;
  title: string;
  description: string;
  imageUrl?: string;
  datePublished?: string;
  authorName?: string;
  organizationName?: string;
  organizationLogo?: string;
}

const SchemaOrg: FC<SchemaOrgProps> = ({
  url,
  title,
  description,
  imageUrl = 'https://ahmedabdelmohsen.com/og-image.jpg',
  datePublished = new Date().toISOString(),
  authorName = 'Ahmed Adb Elmohsen',
  organizationName = 'Ahmed Adb Elmohsen',
  organizationLogo = 'https://ahmedabdelmohsen.com/logo.png',
}) => {
  // الهيكل الأساسي للشخص (Person)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: authorName,
    url: 'https://ahmedabdelmohsen.com',
    image: 'https://ahmedabdelmohsen.com/profile.jpg',
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: organizationName,
    },
    sameAs: [
      'https://github.com/ahmedadb',
      'https://linkedin.com/in/ahmedadb',
      'https://twitter.com/ahmedadb',
    ],
  };

  // هيكل موقع الويب (WebSite)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://ahmedabdelmohsen.com/#website',
    url: 'https://ahmedabdelmohsen.com',
    name: title,
    description: description,
    publisher: {
      '@type': 'Person',
      name: authorName,
    },
  };

  // هيكل المنظمة (Organization)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://ahmedabdelmohsen.com/#organization',
    name: organizationName,
    url: 'https://ahmedabdelmohsen.com',
    logo: {
      '@type': 'ImageObject',
      url: organizationLogo,
    },
    sameAs: [
      'https://github.com/ahmedadb',
      'https://linkedin.com/in/ahmedadb',
      'https://twitter.com/ahmedadb',
    ],
  };

  // هيكل المقال/المحتوى (إذا كانت صفحة المشاريع)
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url: url,
    name: title,
    description: description,
    datePublished: datePublished,
    dateModified: new Date().toISOString(),
    isPartOf: {
      '@id': 'https://ahmedabdelmohsen.com/#website',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: imageUrl,
    },
    inLanguage: 'en-US',
    about: {
      '@id': 'https://ahmedabdelmohsen.com/#organization',
    },
    author: {
      '@type': 'Person',
      name: authorName,
    },
  };

  // هيكل BreadcrumbList (مسار التنقل)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ahmedabdelmohsen.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </Head>
  );
};

export default SchemaOrg; 