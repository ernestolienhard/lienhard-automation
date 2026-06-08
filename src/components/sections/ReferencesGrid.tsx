"use client";

import { useMemo, useState } from "react";
import {
  categoryLabels,
  projects,
  type ProjectCategory,
} from "@/content/references";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { cn } from "@/lib/utils";

type Filter = ProjectCategory | "alle";

const filters: { value: Filter; label: string }[] = [
  { value: "alle", label: "Alle Projekte" },
  ...(Object.keys(categoryLabels) as ProjectCategory[]).map((c) => ({
    value: c,
    label: categoryLabels[c],
  })),
];

export function ReferencesGrid() {
  const [active, setActive] = useState<Filter>("alle");

  // Only show filters that actually have projects.
  const available = useMemo(() => {
    const used = new Set(projects.map((p) => p.category));
    return filters.filter((f) => f.value === "alle" || used.has(f.value));
  }, []);

  const visible = useMemo(
    () =>
      active === "alle"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Projekte filtern"
      >
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
