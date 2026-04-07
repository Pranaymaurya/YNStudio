"use client";

import { AnimatePresence, motion } from "framer-motion";
import { QuoteIcon } from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { testimonials } from "@/app/lib/site-data";
import { useEffect, useState } from "react";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section id="testimonials" className="section-space px-3 md:px-6" aria-labelledby="testimonials-heading">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by teams that care about calm execution and visible results."
            description="We build long-term relationships by keeping delivery sharp, transparent, and unusually thoughtful."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="neo-panel overflow-hidden p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#FFF7EE,#F2E7D8)] text-[var(--accent-strong)] shadow-[var(--shadow-inset)]">
                    <QuoteIcon className="h-6 w-6" />
                  </span>
                  <div className="neo-inset flex gap-2 p-2">
                    {testimonials.map((item, itemIndex) => {
                      const active = itemIndex === index;

                      return (
                        <button
                          key={item.name}
                          type="button"
                          className={active ? "h-3 w-8 rounded-full bg-[var(--accent)]" : "h-3 w-3 rounded-full bg-[rgba(44,44,44,0.14)]"}
                          aria-label={`Show testimonial ${itemIndex + 1}`}
                          aria-pressed={active}
                          onClick={() => setIndex(itemIndex)}
                        />
                      );
                    })}
                  </div>
                </div>

                <h2 id="testimonials-heading" className="sr-only">
                  Client testimonials
                </h2>
                <p className="mt-8 text-2xl leading-[1.7] text-[var(--foreground)] md:text-[2rem]">
                  “{testimonial.quote}”
                </p>
                <div className="mt-8">
                  <p className="text-lg font-semibold text-[var(--foreground)]">{testimonial.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">{testimonial.role}</p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}