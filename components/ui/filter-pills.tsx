"use client"

import { useState, useMemo } from "react"
import type { Category } from "@/data/projects"
import { cn } from "@/lib/utils"

type Props = {
  categories: Category[]
  onChange?: (value: string) => void
}

export function FilterPills({ categories, onChange }: Props) {
  const [active, setActive] = useState<string>("All")

  const options = useMemo(() => ["All", ...categories], [categories])

  return (
    <div role="tablist" aria-label="Project categories" className="flex flex-wrap items-center gap-2">
      {options.map((label) => {
        const isActive = active === label
        return (
          <button
            key={label}
            role="tab"
            aria-selected={isActive}
            onClick={() => {
              setActive(label)
              onChange?.(label)
            }}
            className={cn(
              "rounded-full px-4 py-2 text-sm transition-colors outline-none",
              "border border-border/60 bg-muted/30 hover:bg-muted/60",
              "focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isActive ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/40" : "text-foreground/80",
            )}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
