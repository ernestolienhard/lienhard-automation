"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLocale, withLocale } from "@/i18n/useLocale";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-600 text-white shadow-sm hover:bg-accent-500 active:bg-accent-700",
  secondary: "bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950",
  ghost: "bg-transparent text-navy-900 hover:bg-steel-100",
  "outline-light":
    "border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base py-3.5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

/** Link-styled button. Internal hrefs are automatically locale-prefixed. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const locale = useLocale();
  const classes = cn(base, variants[variant], sizes[size], className);
  const isExternal = /^https?:|^mailto:|^tel:/.test(href);

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={withLocale(locale, href)} className={classes} {...rest}>
      {children}
    </Link>
  );
}

/** Native button element with the same styling. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
