"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, PlayIcon } from "@/app/components/icons";
import { brandStatement, heroBadges, highlights } from "@/app/lib/site-data";
import Link from "next/link";

export function Hero() {
  return (
    <section className="section-space px-3 pt-8 md:px-6 md:pt-14" aria-labelledby="hero-heading">
      <div className="container-shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="neo-panel grid-faint relative overflow-hidden p-7 md:p-10 lg:p-12"
        >
          <div className="absolute right-[-4rem] top-[-3rem] h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.25),transparent_66%)] blur-2xl" />
          <span className="eyebrow">Boutique Digital Agency</span>
          <h1 id="hero-heading" className="mt-6 max-w-3xl text-4xl leading-tight text-[var(--foreground)] md:text-6xl">
            We grow brands with social systems, premium digital products, and SaaS that scales cleanly.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            {brandStatement.description} We partner with founders, consultants, and service businesses that need calm execution and measurable outcomes.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <Link href="#contact" className="neo-button" aria-label="Start a project with LumenForge Studio">
                Start a Project
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <Link href="#portfolio" className="neo-button-secondary" aria-label="View recent portfolio work">
                <PlayIcon className="h-4 w-4" />
                View Our Work
              </Link>
            </motion.div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <span key={badge} className="neo-inset px-4 py-2 text-sm font-medium text-[var(--foreground)]">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="neo-panel-soft p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">Why teams choose us</p>
            <div className="mt-6 space-y-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="neo-inset flex items-center gap-4 px-4 py-4">
                  <span className="h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_6px_rgba(212,165,116,0.14)]" />
                  <p className="text-sm leading-7 text-[var(--foreground)] md:text-base">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="neo-panel overflow-hidden p-6 md:p-8">
            <div className="rounded-[22px] bg-[linear-gradient(135deg,#F7F1EA_0%,#FFFFFF_42%,#EBDAC7_100%)] p-6 shadow-[var(--shadow-inset)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">Growth snapshot</p>
                  <p className="mt-3 text-2xl text-[var(--foreground)] md:text-3xl">A streamlined agency model for high-value delivery.</p>
                </div>
                <div className="neo-inset px-3 py-2 text-sm font-medium text-[var(--foreground)]">2026</div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="neo-panel bg-white/80 p-5">
                  <p className="text-sm text-[var(--muted)]">Average launch window</p>
                  <p className="mt-3 text-3xl text-[var(--foreground)]">4-8 weeks</p>
                </div>
                <div className="neo-panel bg-white/80 p-5">
                  <p className="text-sm text-[var(--muted)]">Core engagement types</p>
                  <p className="mt-3 text-3xl text-[var(--foreground)]">Retainer + build</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}