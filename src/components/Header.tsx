"use client";

import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Use Cases" },
  { href: "#proof", label: "Proof" },
  { href: "#process", label: "Process" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2a2438]/10 bg-[#17151f]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-violet-500 text-sm font-bold text-white shadow-lg shadow-amber-900/25">
            AF
          </span>
          <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
            AgentForge <span className="text-amber-300">Labs</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-300 transition-colors hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-5 py-2.5 text-sm font-semibold text-[#17151f] shadow-lg shadow-amber-900/25 transition-all hover:shadow-amber-700/30 hover:brightness-105"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#17151f] px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-stone-300"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-amber-300 py-3 text-center text-sm font-semibold text-[#17151f]"
              onClick={() => setOpen(false)}
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
