import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Typographic wordmark used as the logo.
 *
 * ASSET PLACEHOLDER: When the client provides a real logo file, drop it into
 * /public (e.g. /public/logo.svg) and replace the wordmark below with a
 * next/image <Image>. The layout/spacing will stay identical.
 */
export function Logo({
  onDark = false,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Lienhard Automation – zur Startseite"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-md bg-accent-600 font-bold text-white transition-colors group-hover:bg-accent-500",
        )}
      >
        LA
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[15px] font-bold tracking-tight",
            onDark ? "text-white" : "text-navy-900",
          )}
        >
          Lienhard Automation
        </span>
        <span
          className={cn(
            "text-[11px] font-medium uppercase tracking-[0.18em]",
            onDark ? "text-accent-300" : "text-accent-600",
          )}
        >
          Engineering · Weltweit
        </span>
      </span>
    </Link>
  );
}
