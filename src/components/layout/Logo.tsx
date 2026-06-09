"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLocale, withLocale } from "@/i18n/useLocale";

/**
 * Lienhard wordmark logotype: red "LIENHARD" (condensed display face) over the
 * "Automation Engineering" descriptor — modelled on the client's logo.
 *
 * For pixel-perfect branding, drop the official vector at /public/logo.svg
 * (and a light version at /public/logo-light.svg for dark backgrounds) and
 * swap this for a next/image <Image>. The surrounding layout stays identical.
 */
export function Logo({
  onDark = false,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  const locale = useLocale();
  return (
    <Link
      href={withLocale(locale, "/")}
      aria-label="Lienhard Automation Engineering"
      className={cn(
        "group inline-flex flex-col leading-none transition-opacity hover:opacity-90",
        className,
      )}
    >
      <span className="font-wordmark text-[26px] font-bold uppercase leading-[0.95] tracking-[0.015em] text-accent-500">
        Lienhard
      </span>
      <span
        className={cn(
          "mt-0.5 text-[11px] font-medium tracking-[0.06em]",
          onDark ? "text-steel-100" : "text-navy-900",
        )}
      >
        Automation Engineering
      </span>
    </Link>
  );
}
