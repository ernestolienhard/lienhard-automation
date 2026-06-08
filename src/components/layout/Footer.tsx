import Link from "next/link";
import { legalNav, mainNav, siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { Mail, MapPin, Phone } from "@/components/ui/icons";

const { contact } = siteConfig;

export function Footer() {
  const year = "2024"; // Updated on deploy; kept static to avoid hydration drift.

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-steel-300">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + tagline */}
          <div className="lg:col-span-1">
            <Logo onDark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-400">
              Automatisierungslösungen für den industriellen Maschinen- und
              Anlagenbau. {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-steel-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-steel-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span>
                  {siteConfig.legalName}
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
            © {year} {siteConfig.legalName}. Alle Rechte vorbehalten.
          </p>
          <p>Hergestellt in der Schweiz · {siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
