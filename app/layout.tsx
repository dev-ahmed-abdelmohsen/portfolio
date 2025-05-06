import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { mainKeywords } from "../utils/seoKeywords";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Adb Elmohsen | Software Engineer",
  description: "Professional portfolio showcasing my work as a Software Engineer with expertise in frontend and backend technologies. Specialized in React, Next.js, Node.js, and more.",
  keywords: mainKeywords.join(", "),
  authors: [{ name: "Ahmed Adb Elmohsen", url: "https://ahmed-abd-elmohsen.vercel.app" }],
  creator: "Ahmed Adb Elmohsen",
  publisher: "Ahmed Adb Elmohsen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmedabdelmohsen.com",
    title: "Ahmed Adb Elmohsen | Software Engineer",
    description: "Professional portfolio showcasing my work as a Software Engineer with expertise in frontend and backend technologies.",
    siteName: "Ahmed Adb Elmohsen Portfolio",
    images: [
      {
        url: "https://ahmedabdelmohsen.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Adb Elmohsen - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Adb Elmohsen | Software Engineer",
    description: "Professional portfolio showcasing my work as a Software Engineer with expertise in frontend and backend technologies.",
    creator: "@ahmedadb",
    images: ["https://ahmedabdelmohsen.com/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  metadataBase: new URL("https://ahmedabdelmohsen.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': "/",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_ID", // قم بتغييره بعد التحقق من Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
