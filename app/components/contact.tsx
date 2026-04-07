import Link from "next/link";
import { ArrowRightIcon } from "@/app/components/icons";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { contactDetails, socialLinks } from "@/app/lib/site-data";

export function Contact() {
  return (
    <section id="contact" className="section-space px-3 md:px-6" aria-labelledby="contact-heading">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Contact"
              title="Tell us what you&apos;re building, fixing, or scaling next."
              description="Share the service you need, your timeline, and the commercial outcome you care about most. We&apos;ll reply with a focused next step."
            />

            <div className="space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a key={item.label} href={item.href} className="neo-panel shine-border flex items-center gap-4 p-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#1E1630,#0C0A18)] text-[var(--accent-strong)] shadow-[var(--shadow-inset)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm uppercase tracking-[0.16em] text-[var(--muted)]">{item.label}</span>
                      <span className="mt-1 block text-base font-medium text-[var(--foreground)]">{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="neo-inset flex h-12 w-12 items-center justify-center text-[var(--foreground)]"
                    aria-label={`Visit ${social.label}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="neo-panel shine-border p-6 md:p-8">
            <h2 id="contact-heading" className="text-2xl text-[var(--foreground)] md:text-3xl">
              Start the conversation
            </h2>
            <form className="mt-8 grid gap-5" aria-label="Contact form">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-[var(--foreground)]">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="neo-inset min-h-14 px-4 text-base text-[var(--foreground)] placeholder:text-[var(--muted)]"
                  aria-label="Your name"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-[var(--foreground)]">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="neo-inset min-h-14 px-4 text-base text-[var(--foreground)] placeholder:text-[var(--muted)]"
                  aria-label="Your email"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-[var(--foreground)]">Service</span>
                <select
                  name="service"
                  defaultValue=""
                  className="neo-inset min-h-14 px-4 text-base text-[var(--foreground)]"
                  aria-label="Select a service"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="social-media-management">Social Media Management</option>
                  <option value="app-and-web-development">App &amp; Web Development</option>
                  <option value="saas-solutions">SaaS Solutions</option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-[var(--foreground)]">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your goals, timeline, and what success looks like."
                  className="neo-inset resize-none px-4 py-4 text-base text-[var(--foreground)] placeholder:text-[var(--muted)]"
                  aria-label="Your message"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-7 text-[var(--muted)]">
                  Typical response time: within one business day.
                </p>
                <button type="submit" className="neo-button" aria-label="Send contact form">
                  Send Inquiry
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </form>

            <div className="mt-8 rounded-[20px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,rgba(30,22,48,0.72),rgba(9,10,20,0.97))] p-5">
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--accent-strong)]">Prefer email?</p>
              <p className="mt-2 text-base leading-8 text-[var(--muted)]">
                Send a short brief directly and we&apos;ll reply with scope guidance, timeline expectations, and the right engagement model.
              </p>
              <Link href="mailto:hello@A2Z Agency" className="mt-4 inline-flex text-base font-semibold text-[var(--foreground)]">
                hello@A2Z Agency
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}