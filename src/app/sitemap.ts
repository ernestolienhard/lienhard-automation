import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/leistungen",
    "/unified-modernisierung",
    "/cybersecurity",
    "/unternehmen",
    "/referenzen",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2024-01-01"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7,
  }));
}
