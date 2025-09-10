import Link from "next/link"
import { DevicePreview } from "./device-preview"

type Project = {
  id: string
  title: string
  category: string
  tags: string[]
  href: string
}

export function CategoryCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-md bg-muted px-2 py-1 text-xs font-semibold text-foreground/90">
          {project.category}
        </span>
        <span className="text-xs text-accent">Template</span>
      </div>
      <DevicePreview title={project.title} />
      <div className="mt-4">
        <h3 className="text-pretty text-lg font-semibold text-foreground">{project.title}</h3>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[11px] text-primary"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Link
          href={project.href}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          View Template
        </Link>
        <button
          type="button"
          className="text-sm text-foreground/80 underline-offset-4 hover:underline"
          aria-label={`Save ${project.title} to favorites`}
        >
          Save
        </button>
      </div>
    </article>
  )
}
