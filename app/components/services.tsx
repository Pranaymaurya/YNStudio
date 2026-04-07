import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { services } from "@/app/lib/site-data";

export function Services() {
  return (
    <section id="services" className="section-space px-3 md:px-6" aria-labelledby="services-heading">
      <div className="container-shell flex flex-col gap-10">
        <Reveal>
          <div>
            <SectionHeading
              eyebrow="Services"
              title="A focused delivery stack for brands that need momentum, not noise."
              description="We combine strategy, execution, and systems thinking to produce work that feels premium and performs in the real world."
            />
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="neo-panel h-full p-6 md:p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[linear-gradient(180deg,#FFF7EE,#F2E7D8)] text-[var(--accent-strong)] shadow-[var(--shadow-inset)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 id={index === 0 ? "services-heading" : undefined} className="mt-6 text-2xl text-[var(--foreground)]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)]">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.offerings.map((offering) => (
                      <li key={offering} className="neo-inset px-4 py-3 text-sm font-medium text-[var(--foreground)]">
                        {offering}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}