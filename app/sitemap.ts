import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://scaleharbor.com";
  return ["", "/services", "/pricing", "/case-studies", "/about", "/blog", "/contact", "/privacy-policy", "/terms"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
