"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/app/lib/site-data";
import { Reveal } from "@/app/components/reveal";

function StatNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const base = useMotionValue(0);
  const spring = useSpring(base, { stiffness: 90, damping: 24 });
  const display = useTransform(spring, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      base.set(value);
    }
  }, [base, isInView, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Stats() {
  return (
    <section className="px-3 py-6 md:px-6 md:py-10" aria-label="Agency performance metrics">
      <div className="container-shell grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08}>
            <div className="neo-panel p-6 text-center md:p-7">
              <p className="text-4xl text-[var(--foreground)] md:text-5xl">
                <StatNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}