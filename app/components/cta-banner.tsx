import Link from "next/link";
import { ArrowRightIcon } from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";

export function CtaBanner() {
  return (
    <section className="px-3 py-6 md:px-6 md:py-10" aria-labelledby="cta-heading">
      <Reveal>
        <div className="container-shell neo-panel shine-border overflow-hidden px-6 py-10 text-center md:px-10 md:py-14">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">Ready to build</span>
            <h2 id="cta-heading" className="mt-6 text-3xl leading-tight text-[var(--foreground)] md:text-5xl">
              Need a sharper digital presence or a product that feels launch-ready from day one?
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
              We take on a small number of projects each quarter so strategy, design, and delivery stay tightly aligned.
            </p>
            <div className="mt-8">
              <Link href="#contact" className="neo-button" aria-label="Book a discovery call">
                Book a Discovery Call
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}