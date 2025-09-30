import type { Metadata } from "next";
import Navbar from "../components/navbar/Navbar";
import HomeComponent from "../components/home/Home";
import Footer from "../components/home/footer";
import SchemaOrg from "../components/SEO/SchemaOrg";

export const metadata: Metadata = {
  title: "Ahmed Abd Elmohsen | Software Engineer Portfolio",
  description: "Professional portfolio showcasing my work as a Software Engineer with expertise in backend development and DevOps practices.",
  openGraph: {
    title: "Ahmed Abd Elmohsen | Software Engineer Portfolio",
    description: "Professional portfolio showcasing my work as a Software Engineer with expertise in backend development and DevOps practices.",
    url: "https://ahmed-abd-elmohsen.tech",
  },
  twitter: {
    title: "Ahmed Abd Elmohsen | Software Engineer Portfolio",
    description: "Professional portfolio showcasing my work as a Software Engineer with expertise in backend development and DevOps practices.",
  },
  alternates: {
    canonical: "https://ahmed-abd-elmohsen.tech",
  },
};

export default function Home() {
  return (
    <main>
      <SchemaOrg 
        url="https://ahmed-abd-elmohsen.tech"
        title="Ahmed Abd Elmohsen"
        description="Professional portfolio showcasing my work as a Software Engineer with expertise in backend development and DevOps practices."
      />
      <Navbar />
      <HomeComponent />
      <Footer />
    </main>
  );
}
