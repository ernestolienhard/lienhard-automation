"use client";

import Link from "next/link";
import { useLocale, withLocale } from "@/i18n/useLocale";

/**
 * Drop-in replacement for next/link that automatically prefixes internal
 * paths with the current locale. External/hash links pass through unchanged.
 */
export function LocaleLink({
  href,
  children,
  ...rest
}: { href: string; children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const locale = useLocale();
  return (
    <Link href={withLocale(locale, href)} {...rest}>
      {children}
    </Link>
  );
}
