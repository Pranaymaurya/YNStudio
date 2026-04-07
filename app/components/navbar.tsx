"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon, MenuIcon } from "@/app/components/icons";
import { brandStatement, navLinks } from "@/app/lib/site-data";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const Spark = brandStatement.sparkIcon;

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <nav className="container-shell neo-panel-soft px-5 py-4 backdrop-blur-xl md:px-6" aria-label="Primary navigation">
        <div className="flex items-center justify-between gap-4">
          <Link href="#top" className="flex items-center gap-3" aria-label="LumenForge Studio home">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#E0B382,#D4A574)] text-white shadow-[var(--shadow-raised)]">
              <Spark className="h-5 w-5" />
            </span>
            <span>
              <span className="heading-font block text-lg font-bold text-[var(--foreground)]">
                {brandStatement.name}
              </span>
              <span className="block text-sm text-[var(--muted)]">{brandStatement.tagline}</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="neo-button hidden md:inline-flex" aria-label="Jump to contact section">
              Let&apos;s Talk
            </Link>
            <button
              type="button"
              className="neo-inset flex h-12 w-12 items-center justify-center md:hidden"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 flex flex-col gap-3 border-t border-[var(--border-soft)] pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="neo-inset px-4 py-3 text-sm font-medium text-[var(--foreground)]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="#contact" className="neo-button" onClick={() => setIsOpen(false)}>
                  Let&apos;s Talk
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}