"use client"

type Props = {
  categories: string[]
  active: string
  onChange: (value: string) => void
}

export function CategoryFilter({ categories, active, onChange }: Props) {
  return (
    <nav
      aria-label="Filter templates by category"
      className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
    >
      {categories.map((c) => {
        const isActive = c === active
        return (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            className={[
              "rounded-full px-3 py-1.5 text-sm font-medium transition-colors border",
              isActive
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-muted text-foreground/85 border-border hover:bg-accent hover:text-accent-foreground",
            ].join(" ")}
            aria-pressed={isActive}
          >
            {c}
          </button>
        )
      })}
    </nav>
  )
}
