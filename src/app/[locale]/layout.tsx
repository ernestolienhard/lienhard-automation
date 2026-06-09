import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Oswald } from "next/font/google";
import "../globals.css";
import { siteConfig } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Condensed display face used for the "LIENHARD" wordmark.
const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-wordmark",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const ogLocale: Record<Locale, string> = {
  de: "de_CH",
  en: "en_US",
  es: "es_ES",
  it: "it_IT",
  pt: "pt_PT",
};

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = isLocale(params.locale) ? params.locale : "de";
  const languages = Object.fromEntries(
    locales.map((l) => [l, `/${l}`]),
  ) as Record<string, string>;
  languages["x-default"] = "/de";

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.legalName} – Automation. Engineering. Weltweit.`,
      template: `%s – ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      "Automation",
      "SPS-Engineering",
      "SPS Programmierung",
      "Anlagenbau",
      "Steuerungstechnik",
      "Siemens TIA Portal",
      "WinCC Unified",
      "WinCC OA",
      "Inbetriebnahme",
      "Retrofit",
      "Zürich",
      "Schweiz",
    ],
    authors: [{ name: siteConfig.legalName }],
    creator: siteConfig.legalName,
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.legalName,
      title: `${siteConfig.legalName} – Automation. Engineering. Weltweit.`,
      description: siteConfig.description,
      images: [
        { url: "/og-image.png", width: 1200, height: 630, alt: siteConfig.legalName },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.legalName} – Automation. Engineering. Weltweit.`,
      description: siteConfig.description,
      images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
  };
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.street,
    postalCode: siteConfig.contact.postalCode,
    addressLocality: siteConfig.contact.city,
    addressCountry: "CH",
  },
  founder: { "@type": "Person", name: siteConfig.contact.person },
  areaServed: "Worldwide",
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDict(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent-600 focus:px-4 focus:py-2 focus:text-white"
        >
          {dict.common.skipToContent}
        </a>
        <Header dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
