import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-900/70 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="font-semibold tracking-tight text-emerald-500"
            aria-label="Home"
          >
            Catalog
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-md border border-emerald-600 px-3 py-1.5 text-sm text-emerald-400 hover:bg-emerald-600/10 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};
