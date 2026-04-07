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
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="neo-panel shine-border grid-faint relative overflow-hidden p-7 md:p-10 lg:p-12"
        >
          <div className="ambient-orb absolute right-[-4rem] top-[-3rem] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(108,88,210,0.2),transparent_65%)] blur-3xl" />
          <div className="ambient-orb-delayed absolute bottom-[-6rem] left-[-2rem] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.18),transparent_64%)] blur-3xl" />
          <motion.span initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.55, ease: "easeOut" }} className="eyebrow">
             Digital Agency
          </motion.span>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.55, ease: "easeOut" }} className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent-strong)]">
            Social management, web products, and SaaS systems
          </motion.p>
          <motion.h1 id="hero-heading" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.6, ease: "easeOut" }} className="mt-5 max-w-3xl text-4xl leading-tight text-[var(--foreground)] md:text-6xl uppercase">
           We <span className="text-[var(--accent-strong)]"> design, build, and scale digital products</span> that grow businesses.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32, duration: 0.6, ease: "easeOut" }} className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            {brandStatement.description} We partner with founders, consultants, and service businesses that need calm execution and measurable outcomes.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <Link href="#contact" className="neo-button" aria-label="Start a project with A2Z Agency">
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
          </motion.div>

          {/* <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48, duration: 0.6, ease: "easeOut" }} className="mt-10 flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <motion.span
                key={badge}
                whileHover={{ y: -4, scale: 1.02 }}
                className="neo-inset px-4 py-2 text-sm font-medium text-[var(--foreground)]"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56, duration: 0.65, ease: "easeOut" }}
            className="mt-10 grid gap-4 rounded-[24px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,rgba(239,195,142,0.08),rgba(24,29,36,0.72))] p-4 md:grid-cols-3"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Launch posture</p>
              <p className="mt-2 text-lg text-[var(--foreground)]">Premium visuals, measurable delivery</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Best fit</p>
              <p className="mt-2 text-lg text-[var(--foreground)]">Founders, consultants, service brands</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Engagement</p>
              <p className="mt-2 text-lg text-[var(--foreground)]">Retainers, builds, and MVP sprints</p>
            </div>
          </motion.div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <motion.div className="neo-panel-soft shine-border p-6 md:p-8" animate={{ y: [0, -7, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">Why teams choose us</p>
            <div className="mt-6 space-y-4">
              {highlights.map((highlight) => (
                <motion.div key={highlight} whileHover={{ x: 6 }} className="neo-inset flex items-center gap-4 px-4 py-4">
                  <span className="h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_6px_rgba(212,165,116,0.14)]" />
                  <p className="text-sm leading-7 text-[var(--foreground)] md:text-base">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* <motion.div className="neo-panel overflow-hidden p-6 md:p-8" whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
            <div className="rounded-[22px] bg-[linear-gradient(135deg,#141A2E_0%,#09090F_42%,#271D12_100%)] p-6 shadow-[var(--shadow-inset)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">Growth snapshot</p>
                  <p className="mt-3 text-2xl text-[var(--foreground)] md:text-3xl">A streamlined agency model for high-value delivery.</p>
                </div>
                <div className="neo-inset px-3 py-2 text-sm font-medium text-[var(--foreground)]">2026</div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="neo-panel bg-[rgba(21,26,32,0.88)] p-5">
                  <p className="text-sm text-[var(--muted)]">Average launch window</p>
                  <p className="mt-3 text-3xl text-[var(--foreground)]">4-8 weeks</p>
                </div>
                <div className="neo-panel bg-[rgba(21,26,32,0.88)] p-5">
                  <p className="text-sm text-[var(--muted)]">Core engagement types</p>
                  <p className="mt-3 text-3xl text-[var(--foreground)]">Retainer + build</p>
                </div>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}