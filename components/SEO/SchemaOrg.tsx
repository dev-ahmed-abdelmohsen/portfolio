'use client';

import Script from 'next/script';

interface SchemaOrgProps {
  url: string;
  title: string;
  description: string;
}

export default function SchemaOrg({ url, title, description }: SchemaOrgProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ahmed Abd Elmohsen',
    jobTitle: 'Software Engineer',
    description: description,
    url: url,
    sameAs: [
      'https://linkedin.com/in/ahmed-abd-elmohsen',
      'https://github.com/ahmed-abd-elmohsen',
    ],
    knowsAbout: [
      'Software Engineering',
      'Backend Development',
      'DevOps',
      'Node.js',
      'React',
      'Next.js',
      'Docker',
      'AWS',
    ],
    workLocation: {
      '@type': 'Place',
      name: 'Remote',
    },
  };

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