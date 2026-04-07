import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { team } from "@/app/lib/site-data";

export function Team() {
  return (
    <section className="section-space px-3 md:px-6" aria-labelledby="team-heading">
      <div className="container-shell flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Team"
            title="Senior, multidisciplinary, and intentionally small."
            description="We keep the core team lean so communication stays direct and the work retains a high level of craft from kickoff to launch."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <article className="neo-panel shine-border h-full p-6 md:p-7">
                <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-[linear-gradient(160deg,#E03A3A,#C98E54)] text-2xl font-bold text-[#0E0A04] shadow-[var(--shadow-raised)]">
                  {member.initials}
                </div>
                <h3 id={index === 0 ? "team-heading" : undefined} className="mt-6 text-2xl text-[var(--foreground)]">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">{member.role}</p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">{member.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}