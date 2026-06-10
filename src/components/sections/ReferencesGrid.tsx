"use client";

import { useMemo, useState } from "react";
import {
  getCategoryLabels,
  getProjects,
  type ProjectCategory,
} from "@/content/references";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/useLocale";

type Filter = ProjectCategory | "alle";

const ui = {
  de: { all: "Alle Projekte", filter: "Projekte filtern" },
  en: { all: "All projects", filter: "Filter projects" },
  es: { all: "Todos los proyectos", filter: "Filtrar proyectos" },
};

export function ReferencesGrid() {
  const locale = useLocale();
  const t = locale === "en" ? ui.en : locale === "es" ? ui.es : ui.de;
  const projects = getProjects(locale);
  const categoryLabels = getCategoryLabels(locale);
  const [active, setActive] = useState<Filter>("alle");

  const filters: { value: Filter; label: string }[] = [
    { value: "alle", label: t.all },
    ...(Object.keys(categoryLabels) as ProjectCategory[]).map((c) => ({
      value: c,
      label: categoryLabels[c],
    })),
  ];

  const available = useMemo(() => {
    const used = new Set(projects.map((p) => p.category));
    return filters.filter((f) => f.value === "alle" || used.has(f.value as ProjectCategory));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const visible = active === "alle" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label={t.filter}>
        {available.map((f) => {
          const isActive = active === f.value;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setActive(f.value)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-accent-600 bg-accent-600 text-white"
                  : "border-steel-300 bg-white text-steel-600 hover:border-accent-300 hover:text-navy-900",
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <ProjectCard key={`${project.title}-${i}`} project={project} />
        ))}
      </div>
    </div>
  );
}
