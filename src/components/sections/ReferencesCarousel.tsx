"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ArrowRight } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { Project } from "@/content/references";

/**
 * Horizontally scrolling references carousel with prev/next arrows and gentle
 * auto-rotation. Pauses while the pointer is over it. Responsive: shows ~1
 * card on mobile, 2 on tablet, 3 on desktop.
 */
export function ReferencesCarousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollByCards = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const atStart = el.scrollLeft <= 4;

    if (dir === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (dir === -1 && atStart) {
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * amount, behavior: "smooth" });
    }
  }, []);

  // Auto-rotate every few seconds unless paused.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => scrollByCards(1), 3000);
    return () => clearInterval(id);
  }, [paused, scrollByCards]);

  const arrowClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-steel-200 bg-white text-navy-900 shadow-sm transition-colors hover:border-accent-300 hover:text-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500";

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, i) => (
          <div
            key={`${project.title}-${i}`}
            data-card
            className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          aria-label="Vorheriges Projekt"
          className={arrowClass}
        >
          <ArrowRight className={cn("h-5 w-5 rotate-180")} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          aria-label="Nächstes Projekt"
          className={arrowClass}
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
