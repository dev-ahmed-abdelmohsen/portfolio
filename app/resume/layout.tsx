import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Professional Resume - Ahmed Abd Elmohsen",
  description:
    "Professional resume of Ahmed Abd Elmohsen - Software Engineer specializing in backend development and DevOps practices. ATS-optimized and ready for applications.",
  keywords: [
    "resume",
    "CV",
    "Software Engineer",
    "Backend Developer",
    "DevOps",
    "Ahmed Abd Elmohsen",
  ],
  openGraph: {
    title: "Professional Resume - Ahmed Abd Elmohsen",
    description:
      "Professional resume of Ahmed Abd Elmohsen - Software Engineer specializing in backend development and DevOps practices.",
    url: "https://ahmed-abd-elmohsen.tech/resume",
  },
  twitter: {
    title: "Professional Resume - Ahmed Abd Elmohsen",
    description:
      "Professional resume of Ahmed Abd Elmohsen - Software Engineer specializing in backend development and DevOps practices.",
  },
  alternates: {
    canonical: "https://ahmed-abd-elmohsen.tech/resume",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
