"use client";

import { usePathname } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "./config";

/** Current locale, derived from the first path segment. */
export function useLocale(): Locale {
  const pathname = usePathname();
  const seg = pathname.split("/")[1];
  return isLocale(seg) ? seg : defaultLocale;
}

/** Prefix an internal path with the locale; leaves external/hash links alone. */
export function withLocale(locale: Locale, href: string): string {
  if (/^https?:|^mailto:|^tel:|^#/.test(href)) return href;
  if (!href.startsWith("/")) return href;
  // Already locale-prefixed?
  const seg = href.split("/")[1];
  if (isLocale(seg)) return href;
  return `/${locale}${href === "/" ? "" : href}`;
}
