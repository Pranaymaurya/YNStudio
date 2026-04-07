"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon } from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { portfolioFilters, portfolioItems } from "@/app/lib/site-data";
import { useState } from "react";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<(typeof portfolioFilters)[number]>("All");

  const items = activeFilter === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-space px-3 md:px-6" aria-labelledby="portfolio-heading">
      <div className="container-shell flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected Work"
              title="Case studies shaped by audience insight, product thinking, and commercial clarity."
              description="Each engagement is built around a clear operational problem, then translated into systems that look polished and perform with intent."
            />
            <div className="neo-inset flex flex-wrap gap-2 p-2">
              {portfolioFilters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    className={isActive ? "neo-button !px-4 !py-3 !text-sm" : "rounded-2xl px-4 py-3 text-sm font-medium text-[var(--muted)]"}
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="neo-panel overflow-hidden p-5 md:p-6"
              >
                <div className={`rounded-[22px] bg-gradient-to-br ${item.gradient} p-5 shadow-[var(--shadow-inset)]`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                      {item.category}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                      Live case
                    </span>
                  </div>
                  <div className="mt-12 rounded-[18px] bg-white/78 p-4 shadow-[var(--shadow-raised)]">
                    <div className="h-2 w-16 rounded-full bg-[rgba(212,165,116,0.7)]" />
                    <div className="mt-3 h-2 w-24 rounded-full bg-[rgba(44,44,44,0.16)]" />
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      <div className="h-20 rounded-2xl bg-white/85" />
                      <div className="col-span-2 h-20 rounded-2xl bg-white/70" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 id={item.title === portfolioItems[0].title ? "portfolio-heading" : undefined} className="text-2xl text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                      {item.results}
                    </p>
                  </div>
                  <span className="neo-inset flex h-12 w-12 items-center justify-center text-[var(--foreground)]">
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>

                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{item.summary}</p>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}