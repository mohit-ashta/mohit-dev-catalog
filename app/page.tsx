"use client";

import { useMemo, useState } from "react";
import { CategoryFilter } from "@/components/category-filter";
import { CategoryCard } from "@/components/category-card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Layout } from "@/components/layout";

type Category =
  | "Hospital"
  | "Travel"
  | "Car Service"
  | "Education"
  | "Finance"
  | "Food"
  | "Real Estate"
  | "Fashion"
  | "Management"
  | "E-commerce";

type Item = {
  id: string;
  title: string;
  category: Category;
  subtitle?: string;
  imageAlt: string;
  imageUrl: string;
  link: string;
};

const ALL_CATEGORIES: Category[] = [
  "Hospital",
  "Travel",
  "Car Service",
  "Education",
  "Finance",
  "Food",
  "E-commerce",
  "Real Estate",
  "Fashion",
  "Management",
];

const ITEMS: Item[] = [
  {
    id: "hosp-01",
    title: "Athera",
    subtitle: "Appointment & telehealth",
    category: "Hospital",
    imageAlt: "Hospital website mockup",
    imageUrl: "image9.webp",
    link: "https://athera-v2.vercel.app/",
  },
  {
    id: "hosp-02",
    title: "Medi Plus",
    subtitle: "Appointment & telehealth",
    category: "Hospital",
    imageAlt: "Hospital website mockup",
    imageUrl: "image8.webp",
    link: "#",
  },
  {
    id: "hosp-03",
    title: "wellness wise",
    subtitle: "Appointment & telehealth",
    category: "Hospital",
    imageAlt: "Hospital website mockup",
    imageUrl: "image15.webp",
    link: "https://docter-site.vercel.app/",
  },
  {
    id: "fin-04",
    title: "Secure Life",
    subtitle: "Finance & teleInsurance",
    category: "Finance",
    imageAlt: "Finance website mockup",
    imageUrl: "image12.webp",
    link: "https://site-insurance-v2.vercel.app/",
  },
  {
    id: "mana-01",
    title: "EventHub",
    subtitle: "Event Seating & booking",
    category: "Management",
    imageAlt: "Event booking website mockup",
    imageUrl: "image2.webp",
    link: "https://event-manage-v2.vercel.app/",
  },
  {
    id: "car-01",
    title: "CarHub",
    subtitle: "New Car sale, service & repairs",
    category: "Car Service",
    imageAlt: "Car service website mockup",
    imageUrl: "image16.webp",
    link: "https://car-hub-v2.vercel.app/",
  },
  {
    id: "car-03",
    title: "Autocare Pro",
    subtitle: "New Car sale, service & repairs",
    category: "Car Service",
    imageAlt: "Car service website mockup",
    imageUrl: "image3.webp",
    link: "https://car-service-v2.vercel.app/",
  },
  {
    id: "edu-01",
    title: "EduSmart",
    subtitle: "Courses & LMS",
    category: "Education",
    imageAlt: "Education LMS website mockup",
    imageUrl: "image7.webp",
    link: "https://edu-v2.vercel.app/",
  },
  {
    id: "food-01",
    title: "EpicSlice",
    subtitle: "Restaurant ordering",
    category: "Food",
    imageAlt: "Restaurant ordering website mockup",
    imageUrl: "image11.webp",
    link: "https://pizza-site-drab.vercel.app/",
  },
  {
    id: "food-02",
    title: "WakeUp & Brew",
    subtitle: "Restaurant ordering snacks and coffee",
    category: "Food",
    imageAlt: "Restaurant ordering website mockup",
    imageUrl: "image17.webp",
    link: "https://cafe-site-zeta.vercel.app/",
  },
  {
    id: "shop-01",
    title: "Crafet & Comforts",
    subtitle: "Modern Furniture",
    category: "E-commerce",
    imageAlt: "E-commerce website mockup",
    imageUrl: "image14.webp",
    link: "https://craft-v2.vercel.app/",
  },
  {
    id: "trav-02",
    title: "Tour & Travel",
    subtitle: "Flights & hotels",
    category: "Travel",
    imageAlt: "Travel flights website mockup",
    imageUrl: "image18.webp",
    link: "https://travel-v2-seven.vercel.app/",
  },
  {
    id: "home-02",
    title: "RealHome",
    subtitle: "Dream home",
    category: "Real Estate",
    imageAlt: "realEstate site mockup",
    imageUrl: "image10.webp",
    link: "https://home-build.vercel.app/",
  },
  // {
  //   id: "e-com-02",
  //   title: "GlamourGems",
  //   subtitle: "luxury jwellery",
  //   category: "E-commerce",
  //   imageAlt: "E-commerce site mockup",
  //   imageUrl: "image13.webp",
  //   link:"/"
  // },
  {
    id: "e-com-03",
    title: "Admin Dashboard",
    subtitle: "Dashboard for constructors",
    category: "E-commerce",
    imageAlt: "E-commerce site mockup",
    imageUrl: "image5.webp",
    link: "https://innovative-builds-5bjc.vercel.app/dashboard",
  },
  {
    id: "fash-02",
    title: "Fashion & Beauty",
    subtitle: "luxury Cloth and Products",
    category: "Fashion",
    imageAlt: "fashion site mockup",
    imageUrl: "image6.webp",
    link: "https://fashion-v2.vercel.app/",
  },
  {
    id: "fash-03",
    title: "Blade & Fade",
    subtitle: "Unique Cut and hair color",
    category: "Fashion",
    imageAlt: "fashion site mockup",
    imageUrl: "image4.webp",
    link: "https://barber-website-beryl.vercel.app/",
  },
];

export default function Page() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const base =
      active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active);
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.subtitle?.toLowerCase().includes(q)
    );
  }, [active, query]);

  return (
    <Layout>
      <section className="bg-black text-foreground pb-16">
        <div className="mx-auto max-w-6xl px-4 pb-4 pt-12 md:pt-16">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-emerald-400">
            Our Projects
          </p>
          <h1 className="text-balance pb-6 pt-2 text-center text-2xl font-semibold tracking-tight md:text-2xl">
            Our completed projects and ready-to-use templates available for
            purchase
          </h1>

          <div className="mx-auto mb-6 flex w-full max-w-lg items-center">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search templates..."
              aria-label="Search templates"
              className="w-full rounded-md border border-zinc-800 bg-zinc-950/80 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/60"
            />
          </div>

          <CategoryFilter
            categories={ALL_CATEGORIES}
            active={active}
            onChange={setActive}
          />

          <div
            className={cn(
              "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            )}
          >
            {items.map((item) => (
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
        </div>
      </section>
    </Layout>
  );
}
