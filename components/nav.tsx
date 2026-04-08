"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#honest", label: "Thoughts" },
  { href: "/#survey", label: "Survey" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-14 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-4xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-bold tracking-tight">
          MusaToku <span className="text-teal">AI</span> Club
        </Link>

        {/* Desktop */}
        <div className="hidden gap-1 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex size-9 flex-col items-center justify-center gap-[5px] rounded-md sm:hidden hover:bg-muted"
          aria-label="Menu"
        >
          <span
            className={`block h-[1.5px] w-4 rounded-sm bg-foreground transition-transform ${open ? "translate-y-[3.25px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-4 rounded-sm bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-4 rounded-sm bg-foreground transition-transform ${open ? "-translate-y-[3.25px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-border bg-background/95 p-2 backdrop-blur-md sm:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
