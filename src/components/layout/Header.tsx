"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, Phone } from "@/components/ui/icons";
import { isLocale } from "@/i18n/config";
import { useLocale, withLocale } from "@/i18n/useLocale";
import type { Dict } from "@/i18n/dictionaries";

export function Header({ dict }: { dict: Dict }) {
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Path without the locale prefix, for active-state comparison.
  const seg = pathname.split("/")[1];
  const pathNoLocale = isLocale(seg)
    ? `/${pathname.split("/").slice(2).join("/")}`.replace(/\/$/, "") || "/"
    : pathname;

  const isActive = (href: string) =>
    pathNoLocale === href || pathNoLocale.startsWith(`${href}/`);

  // Solid header background once the user scrolls away from the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-steel-200 bg-white/90 backdrop-blur"
          : "border-b border-transparent bg-white",
      )}
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-5 sm:px-8 lg:h-18">
        <Logo />

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-0.5 xl:flex"
          aria-label="Hauptnavigation"
        >
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={withLocale(locale, item.href)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-md px-2 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-accent-700"
                    : "text-steel-600 hover:text-navy-900",
                )}
              >
                {dict.nav[item.key as keyof Dict["nav"]]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={siteConfig.contact.phoneHref}
            className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-steel-600 transition-colors hover:text-navy-900 2xl:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.contact.phone}
          </a>
          <LanguageSwitcher className="hidden xl:block" />
          <ButtonLink href="/kontakt" className="ml-1 hidden 2xl:inline-flex">
            {dict.cta.projektAnfragen}
          </ButtonLink>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü schliessen" : "Menü öffnen"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy-900 hover:bg-steel-100 xl:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={cn("xl:hidden", open ? "block" : "hidden")}>
        <nav
          className="space-y-1 border-t border-steel-200 bg-white px-5 pb-6 pt-3 sm:px-8"
          aria-label="Mobile Navigation"
        >
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={withLocale(locale, item.href)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block rounded-md px-3 py-3 text-base font-medium",
                  active
                    ? "bg-accent-50 text-accent-700"
                    : "text-steel-700 hover:bg-steel-100",
                )}
              >
                {dict.nav[item.key as keyof Dict["nav"]]}
              </Link>
            );
          })}
          <div className="grid gap-2 pt-3">
            <ButtonLink href="/kontakt" size="lg" className="w-full">
              {dict.cta.projektAnfragen}
            </ButtonLink>
            <ButtonLink
              href={siteConfig.contact.phoneHref}
              variant="ghost"
              size="lg"
              className="w-full"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.contact.phone}
            </ButtonLink>
          </div>
          <div className="mt-4 border-t border-steel-100 pt-4">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
