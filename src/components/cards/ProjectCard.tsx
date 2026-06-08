import { categoryLabels, type Project } from "@/content/references";
import { MapPin } from "@/components/ui/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
          {categoryLabels[project.category]}
        </span>
        <span className="text-sm font-bold text-steel-400">{project.year}</span>
      </div>

      <h3 className="mt-4 text-lg font-bold leading-snug text-navy-900">
        {project.title}
      </h3>

      <p className="mt-1.5 flex items-center gap-1.5 text-sm text-steel-500">
        <MapPin className="h-3.5 w-3.5 shrink-0" />
        {project.location}
      </p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-600">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((t) => (
          <li
            key={t}
            className="rounded-md border border-steel-200 bg-steel-50 px-2.5 py-1 text-xs font-medium text-steel-600"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
