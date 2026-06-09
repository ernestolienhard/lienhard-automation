"use client";

import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, Mail, Phone } from "@/components/ui/icons";
import { useLocale } from "@/i18n/useLocale";
import { getDict } from "@/i18n/dictionaries";

/** Reusable call-to-action band used at the bottom of most pages. */
export function ContactCta({
  title,
  lead,
}: {
  title?: string;
  lead?: string;
}) {
  const dict = getDict(useLocale());
  return (
    <section className="bg-navy-900">
      <Container className="py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-xl2 border border-navy-700 bg-navy-800 px-7 py-12 sm:px-12 sm:py-16">
          {/* Subtle technical grid backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:32px_32px] opacity-60"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr,1fr]">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title ?? dict.cta.defaultTitle}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-steel-300">
                {lead ?? dict.cta.defaultLead}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/kontakt" size="lg">
                  {dict.cta.projektAnfragen}
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink
                  href="/kontakt"
                  variant="outline-light"
                  size="lg"
                >
                  {dict.cta.beratungVereinbaren}
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-3 rounded-lg border border-navy-700 bg-navy-900/50 px-5 py-4 text-steel-200 transition-colors hover:border-accent-500 hover:text-white"
              >
                <Phone className="h-5 w-5 text-accent-400" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-steel-400">
                    {dict.contact.phoneLabel}
                  </span>
                  {siteConfig.contact.phone}
                </span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 rounded-lg border border-navy-700 bg-navy-900/50 px-5 py-4 text-steel-200 transition-colors hover:border-accent-500 hover:text-white"
              >
                <Mail className="h-5 w-5 text-accent-400" />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-steel-400">
                    {dict.contact.emailLabel}
                  </span>
                  {siteConfig.contact.email}
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
