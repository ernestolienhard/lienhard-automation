import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <section className="bg-navy-950 text-white">
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-7xl font-bold text-accent-400">404</p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">
          Seite nicht gefunden
        </h1>
        <p className="mt-3 max-w-md text-steel-300">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-8">
          <ButtonLink href="/" size="lg">
            Zur Startseite <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
