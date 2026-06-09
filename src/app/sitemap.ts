import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { locales } from "@/i18n/config";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${siteConfig.url}/${locale}${route}`,
        lastModified: new Date("2024-01-01"),
        changeFrequency: route === "" ? "monthly" : "yearly",
        priority: route === "" ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteConfig.url}/${l}${route}`]),
          ),
        },
      });
    }
  }

  return entries;
}
