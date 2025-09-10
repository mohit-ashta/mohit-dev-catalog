"use client";

import Image from "next/image";
import { Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  tag: string;
  imageUrl: string;
  imageAlt: string;
  link:string
};

export function CategoryCard({
  title,
  subtitle,
  tag,
  imageUrl,
  link,
  imageAlt,
}: Props) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-sm transition-transform",
        "hover:-translate-y-1 hover:shadow-[0_10px_30px_-12px_rgba(16,185,129,0.35)] focus-within:shadow-[0_10px_30px_-12px_rgba(16,185,129,0.5)]",
        "focus-within:outline-none focus-within:ring-2 focus-within:ring-emerald-600/60"
      )}
    >
      <div className="pointer-events-none text-[10px] font-medium uppercase tracking-wide text-emerald-300 px-3 py-2 flex gap-1 items-center">
        <span
          className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"
          aria-hidden="true"
        />
        {tag}
      </div>
      <div className="px-4">
        <div className="relative mx-auto w-full overflow-hidden rounded-lg border border-zinc-800 bg-black">
          <div className="flex items-center gap-1 border-b border-zinc-800 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-zinc-700" />
            <span className="h-2 w-2 rounded-full bg-zinc-700" />
            <span className="h-2 w-2 rounded-full bg-zinc-700" />
            <span className="ml-auto inline-flex items-center gap-1 text-[10px] text-zinc-500">
              <Monitor size={12} aria-hidden="true" />
              Desktop
            </span>
          </div>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={imageAlt}
            width={1120}
            height={640}
            className="h-44 w-full object-cover sm:h-48 object-top"
            priority={false}
          />
        </div>
        {/* Phone overlay */}
        {/* <div className="pointer-events-none absolute right-4 top-10 hidden translate-x-2 rounded-xl border border-zinc-800 bg-black/90 p-2 shadow-sm ring-1 ring-black/10 backdrop-blur md:block">
          <div className="mb-1 flex items-center justify-between text-[10px] text-zinc-500">
            <span className="inline-flex items-center gap-1">
              <Smartphone size={12} aria-hidden="true" />
              Mobile
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
          </div>
          <div className="h-24 w-14 overflow-hidden rounded-md border border-zinc-800 bg-zinc-950">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt=""
              width={320}
              height={640}
              className="h-full w-full scale-105 object-cover opacity-90"
            />
          </div>
        </div> */}
      </div>
      <div className="flex items-start justify-between gap-3 px-4 pb-4 pt-4">
        <div>
          <h3 className="text-pretty text-base font-semibold text-zinc-100">
            {title}
          </h3>
          {subtitle ? (
            <p className="mt-1 line-clamp-2 text-sm text-zinc-400">
              {subtitle}
            </p>
          ) : null}
        </div>
        <Link
          href={link}
          className="mt-1 inline-flex shrink-0 items-center rounded-md border border-emerald-700/50 bg-emerald-600/10 px-2 py-1 text-xs text-emerald-300 transition-colors hover:bg-emerald-600/20 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          aria-label={`View ${title} details`}
        >
          View
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-emerald-600/30 transition-[box-shadow,transform] group-hover:ring-2" />
    </article>
  );
}
