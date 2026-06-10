"use client";

import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";
import { useLocale } from "@/i18n/useLocale";

const C = {
  de: {
    title: "Seite nicht gefunden",
    text: "Die angeforderte Seite existiert nicht oder wurde verschoben.",
    home: "Zur Startseite",
  },
  en: {
    title: "Page not found",
    text: "The requested page does not exist or has been moved.",
    home: "Back to home",
  },
  es: {
    title: "Página no encontrada",
    text: "La página solicitada no existe o se ha movido.",
    home: "Volver al inicio",
  },
  fr: {
    title: "Page introuvable",
    text: "La page demandée n'existe pas ou a été déplacée.",
    home: "Retour à l'accueil",
  },
  it: {
    title: "Pagina non trovata",
    text: "La pagina richiesta non esiste o è stata spostata.",
    home: "Torna alla home",
  },
  pt: {
    title: "Página não encontrada",
    text: "A página solicitada não existe ou foi movida.",
    home: "Voltar ao início",
  },
};

export default function NotFound() {
  const locale = useLocale();
  const t = C[locale as keyof typeof C] ?? C.de;
  return (
    <section className="bg-navy-950 text-white">
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-7xl font-bold text-accent-400">404</p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">{t.title}</h1>
        <p className="mt-3 max-w-md text-steel-300">{t.text}</p>
        <div className="mt-8">
          <ButtonLink href="/" size="lg">
            {t.home} <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
