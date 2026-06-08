import { cn } from "@/lib/utils";

/** Centered max-width wrapper with consistent horizontal padding. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-container px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
