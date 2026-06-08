import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Visual theme of the section background. */
  tone?: "light" | "muted" | "dark";
  children: React.ReactNode;
};

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  light: "bg-white text-steel-800",
  muted: "bg-steel-50 text-steel-800",
  dark: "bg-navy-900 text-steel-100",
};

/**
 * Vertical rhythm wrapper for page sections. Handles background tone and
 * consistent top/bottom spacing, and centers content in a Container.
 */
export function Section({
  id,
  className,
  containerClassName,
  tone = "light",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-24", toneClasses[tone], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** Standard section heading block (eyebrow + title + optional lead). */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className={onDark ? "eyebrow-on-dark" : "eyebrow"}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl",
          onDark ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            onDark ? "text-steel-300" : "text-steel-600",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
