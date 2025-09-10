"use client"

import { useId } from "react"
import { cn } from "@/lib/utils"

type Props = {
  categories: string[]
  active: string | "All"
  onChange: (value: any) => void
}

export function CategoryFilter({ categories, active, onChange }: Props) {
  const id = useId()
  const all = ["All", ...categories]

  return (
    <div
      role="tablist"
      aria-label="Project categories"
      className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-center gap-2"
    >
      {all.map((label, idx) => {
        const selected = active === label
        return (
          <button
            key={`${id}-${label}`}
            role="tab"
            aria-selected={selected}
            aria-controls={`${id}-${label}-panel`}
            onClick={() => onChange(label as any)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault()
                const nextIdx = (idx + 1) % all.length
                onChange(all[nextIdx] as any)
              } else if (e.key === "ArrowLeft") {
                e.preventDefault()
                const prevIdx = (idx - 1 + all.length) % all.length
                onChange(all[prevIdx] as any)
              }
            }}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm transition-colors focus:outline-none focus-visible:ring-2",
              selected
                ? "border-emerald-600 bg-emerald-600/10 text-emerald-300 focus-visible:ring-emerald-600"
                : "border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900 focus-visible:ring-emerald-600",
            )}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
