import { cn } from "@/lib/utils";
import { Check } from "@/components/ui/icons";

export function ServiceCard({
  icon,
  title,
  tagline,
  description,
  features,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  tagline?: string;
  description: string;
  features?: string[];
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-card-hover",
        className,
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-bold text-navy-900">{title}</h3>
      {tagline ? (
        <p className="mt-1 text-sm font-medium text-accent-600">{tagline}</p>
      ) : null}
      {/* Reserve a consistent height so the divider below aligns across cards
          that sit side by side, even when descriptions differ in length. */}
      <p className="mt-3 text-sm leading-relaxed text-steel-600 md:min-h-[4.5rem]">
        {description}
      </p>

      {features && features.length > 0 ? (
        <ul className="mt-5 space-y-2.5 border-t border-steel-100 pt-5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-steel-700">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
