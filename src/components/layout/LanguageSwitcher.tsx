"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  locales,
  localeShort,
  localeNames,
  isLocale,
  defaultLocale,
  type Locale,
} from "@/i18n/config";
import { Globe } from "@/components/ui/icons";

/** Language dropdown that switches locale while keeping the current path. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const parts = pathname.split("/");
  const current: Locale = isLocale(parts[1]) ? parts[1] : defaultLocale;
  const rest = isLocale(parts[1]) ? `/${parts.slice(2).join("/")}` : pathname;
  const restPath = rest === "/" ? "" : rest.replace(/\/$/, "");

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={localeNames[current]}
        className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-steel-600 transition-colors hover:text-navy-900"
      >
        <Globe className="h-4 w-4" />
        {localeShort[current]}
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default"
          />
          <ul className="absolute right-0 z-50 mt-2 min-w-[10rem] overflow-hidden rounded-lg border border-steel-200 bg-white py-1 shadow-card">
            {locales.map((loc) => (
              <li key={loc}>
                <Link
                  href={`/${loc}${restPath}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between gap-3 px-4 py-2 text-sm transition-colors hover:bg-steel-50",
                    loc === current
                      ? "font-semibold text-accent-600"
                      : "text-steel-700",
                  )}
                >
                  {localeNames[loc]}
                  <span className="text-xs text-steel-400">
                    {localeShort[loc]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}
