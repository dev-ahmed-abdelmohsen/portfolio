import { MetadataRoute } from "next";

/**
 * Generate a comprehensive sitemap for the portfolio website
 * This follows the Sitemap Protocol standards: https://www.sitemaps.org/protocol.html
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ahmed-abd-elmohsen.tech";
  const currentDate = new Date();

  // Main pages with high priority
  const mainPages = ["", "/resume"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.9,
  }));

  // Featured projects with detailed information
  const featuredProjects = [
    {
      slug: "muslim-azkar-app",
      lastModified: new Date("2023-10-15"),
      title: "Muslim Azkar Application",
      technologies: ["React Native", "Firebase", "Node.js"],
    },
    {
      slug: "real-state-website",
      lastModified: new Date("2023-08-22"),
      title: "Real Estate Marketplace",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    },
    {
      slug: "e-commerce-website",
      lastModified: new Date("2023-11-05"),
      title: "E-Commerce Platform",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      slug: "task-management-app",
      lastModified: new Date("2024-01-10"),
      title: "Task Management Application",
      technologies: ["React", "Redux", "Firebase"],
    },
    {
      slug: "healthcare-platform",
      lastModified: new Date("2024-03-18"),
      title: "Healthcare Management Platform",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    },
  ].map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Additional pages with medium priority
  const additionalPages = [
    { path: "/skills", lastMod: new Date("2024-06-15") },
    { path: "/contact", lastMod: currentDate },
    { path: "/blog", lastMod: currentDate },
  ].map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: page.lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...mainPages, ...featuredProjects, ...additionalPages];
}
