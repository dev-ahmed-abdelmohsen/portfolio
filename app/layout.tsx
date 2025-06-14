import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Abd Elmohsen - Portfolio",
  description: "Software Engineer specializing in backend development and DevOps practices",
  keywords: ["Software Engineer", "Backend Developer", "DevOps", "Node.js", "React", "Next.js"],
  authors: [{ name: "Ahmed Abd Elmohsen" }],
  creator: "Ahmed Abd Elmohsen",
  openGraph: {
    title: "Ahmed Abd Elmohsen - Portfolio",
    description: "Software Engineer specializing in backend development and DevOps practices",
    url: "https://ahmed-abd-elmohsen.vercel.app",
    siteName: "Ahmed Abd Elmohsen Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Abd Elmohsen - Portfolio",
    description: "Software Engineer specializing in backend development and DevOps practices",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
