import Link from "next/link";
import { legalNav, mainNav, siteConfig, getLegalName } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { Mail, MapPin, Phone } from "@/components/ui/icons";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/dictionaries";

const { contact } = siteConfig;

export function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  // Founding year (Handelsregister) → current year, rendered server-side and
  // updated automatically on each deploy.
  const founded = 2013;
  const year = new Date().getFullYear();
  const href = (path: string) => `/${locale}${path}`;

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-steel-300">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + tagline */}
          <div className="lg:col-span-1">
            <Logo onDark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-400">
              {dict.footer.brandDesc} {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.navigation}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={href(item.href)}
                    className="text-steel-400 transition-colors hover:text-white"
                  >
                    {dict.nav[item.key as keyof Dict["nav"]]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.rechtliches}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={href(item.href)}
                    className="text-steel-400 transition-colors hover:text-white"
                  >
                    {dict.legal[item.key as keyof Dict["legal"]]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.kontakt}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span>
                  {getLegalName(locale)}
                  <br />
                  {contact.street}
                  <br />
                  {contact.postalCode} {contact.city}, {contact.country}
                </span>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-400" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent-400" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-navy-800 pt-6 text-xs text-steel-500 sm:flex-row sm:items-center">
          <p>
            © {founded}–{year} {getLegalName(locale)}. {dict.footer.rightsReserved}
          </p>
          <p>
            {dict.footer.madeIn} · {siteConfig.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
