"use client"

import { useMemo, useState } from "react"
import { CategoryFilter } from "@/components/category-filter"
import { CategoryCard } from "@/components/category-card"

export type GalleryItem = {
  id: string
  title: string
  subtitle?: string
  category: string
  imageUrl: string
  imageAlt: string
  link: string
}

type Props = {
  categories: string[]
  items: GalleryItem[]
  initial?: "All" | string
  className?: string
}

export function CategoryGallery({ categories, items, initial = "All" }: Props) {
  const [active, setActive] = useState<"All" | string>(initial)

  const filtered = useMemo(() => {
    if (active === "All") return items
    return items.filter((i) => i.category === active)
  }, [active, items])

  return (
    <section className="space-y-6 ">
      <CategoryFilter categories={categories} active={active} onChange={setActive} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            tag={item.category}
            imageUrl={item.imageUrl}
            link={item.link}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>
    </section>
  )
}

export default CategoryGallery
