import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { processSteps } from "@/app/lib/site-data";

export function Process() {
  return (
    <section id="process" className="section-space px-3 md:px-6" aria-labelledby="process-heading">
      <div className="container-shell flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="A four-step rhythm that keeps projects clear, tactile, and commercially grounded."
            description="We avoid bloated process for its own sake. Every stage exists to reduce ambiguity and accelerate quality decisions."
          />
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.08}>
              <article className="shine-border relative h-full rounded-[28px] border border-[var(--border-soft)] bg-[linear-gradient(160deg,rgba(18,24,38,0.9),rgba(8,10,18,0.88))] px-5 pb-6 pt-8 md:px-6">
                <div className="absolute left-6 top-0 hidden h-px w-[calc(100%-3rem)] bg-[linear-gradient(90deg,rgba(212,165,116,0.7),rgba(212,165,116,0.08))] xl:block" />
                <div className="neo-inset flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold text-[var(--accent-strong)]">
                  {step.step}
                </div>
                <h3 id={index === 0 ? "process-heading" : undefined} className="mt-6 text-2xl text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}