import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmed-abd-elmohsen.vercel.app"),
  title: {
    default: "Ahmed Abd Elmohsen - Portfolio",
    template: "%s | Ahmed Abd Elmohsen",
  },
  description: "Software Engineer specializing in backend development and DevOps practices",
  keywords: ["Software Engineer", "Backend Developer", "DevOps", "Node.js", "React", "Next.js", "Ahmed Abd Elmohsen"],
  authors: [{ name: "Ahmed Abd Elmohsen", url: "https://ahmed-abd-elmohsen.vercel.app" }],
  creator: "Ahmed Abd Elmohsen",
  publisher: "Ahmed Abd Elmohsen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmed-abd-elmohsen.vercel.app",
    title: "Ahmed Abd Elmohsen - Portfolio",
    description: "Software Engineer specializing in backend development and DevOps practices",
    siteName: "Ahmed Abd Elmohsen Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Abd Elmohsen - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Abd Elmohsen - Portfolio",
    description: "Software Engineer specializing in backend development and DevOps practices",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ahmed-abd-elmohsen.vercel.app",
  },
  verification: {
    google: "_M7xG8pu4J-Nmb8PGYCF829JndamEAV4ksXjX6nzCjw",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="_M7xG8pu4J-Nmb8PGYCF829JndamEAV4ksXjX6nzCjw" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/test-face.jpg" as="image" />
      </head>
      <body className="font-inter antialiased">
        {children}
        <Script
          id="font-display-swap"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.fonts.ready.then(() => {
                document.documentElement.classList.add('fonts-loaded');
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
