"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Project } from "@/data/projects"

type Props = {
  project: Project
  className?: string
}

export function DeviceCard({ project, className }: Props) {
  return (
    <article
      className={cn(
        "group relative rounded-xl border border-border/60 bg-card/40 p-4 transition-all",
        "hover:border-emerald-500/50 hover:shadow-[0_0_0_1px_rgba(16,185,129,.35),0_10px_30px_-10px_rgba(16,185,129,.4)]",
        "focus-within:border-emerald-500/60 focus-within:shadow-[0_0_0_1px_rgba(16,185,129,.5),0_10px_30px_-10px_rgba(16,185,129,.6)]",
        "before:absolute before:inset-0 before:rounded-xl before:pointer-events-none before:transition-opacity",
        "before:opacity-0 before:ring-1 before:ring-emerald-400/30 group-hover:before:opacity-100",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-px -left-px h-6 w-6 rounded-tr-xl bg-emerald-500"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-pretty text-base font-semibold text-foreground">{project.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{project.description}</p>
        </div>
        <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-400">
          {project.category}
        </span>
      </div>

      {/* Device preview */}
      <div className="mt-4 grid grid-cols-5 items-end gap-3">
        <div className="col-span-5 md:col-span-4">
          <div className="relative rounded-lg border border-border/60 bg-muted/20 p-2">
            <div className="mx-auto h-2 w-16 rounded bg-muted" />
            <div className="relative mt-2 overflow-hidden rounded-md bg-black">
              <Image
                src={project.desktopSrc || "/placeholder.svg"}
                alt={`${project.title} desktop preview`}
                width={960}
                height={600}
                className="h-48 w-full object-cover md:h-56"
                priority={false}
              />
            </div>
          </div>
        </div>
        <div className="col-span-5 md:col-span-1">
          <div className="relative rounded-[18px] border border-border/60 bg-muted/20 p-2">
            <div className="mx-auto h-2 w-10 rounded bg-muted" />
            <div className="relative mt-2 overflow-hidden rounded-[12px] bg-black">
              <Image
                src={project.mobileSrc || "/placeholder.svg"}
                alt={`${project.title} mobile preview`}
                width={400}
                height={800}
                className="h-32 w-full object-cover md:h-40"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 flex items-center justify-between">
        <a href="#" className="text-sm font-medium text-emerald-400 underline-offset-4 hover:underline">
          View details
        </a>
        <button
          className={cn(
            "rounded-md border border-border/60 bg-background px-3 py-1.5 text-sm text-foreground",
            "hover:bg-muted/60 hover:text-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
        >
          Use this template
        </button>
      </div>
    </article>
  )
}
