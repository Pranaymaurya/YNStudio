import Link from "next/link";
import { brandStatement, navLinks, services, socialLinks } from "@/app/lib/site-data";

export function Footer() {
  const Spark = brandStatement.sparkIcon;

  return (
    <footer className="px-3 pb-6 pt-8 md:px-6 md:pb-8" aria-label="Footer">
      <div className="container-shell neo-panel-soft shine-border p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.6fr_0.8fr_0.55fr]">
          <div>
            <div className="flex items-center gap-3">
              {/* <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,#F2CA8C,#C98E54)] text-[#0E0A04] shadow-[var(--shadow-raised)]"> */}
                <Spark className="h-5 w-5" />
              {/* </span> */}
              <div>
                <p className="heading-font text-lg font-bold text-[var(--foreground)]">{brandStatement.name}</p>
                <p className="text-sm text-[var(--muted)]">{brandStatement.tagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-base leading-8 text-[var(--muted)]">
              Social media management, app and web development, and SaaS systems for modern brands that want polished execution without agency sprawl.
            </p>
          </div>

          <div>
            <h2 className="text-lg text-[var(--foreground)]">Navigation</h2>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg text-[var(--foreground)]">Services</h2>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.title} className="text-sm text-[var(--muted)]">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg text-[var(--foreground)]">Social</h2>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="neo-inset flex h-11 w-11 items-center justify-center text-[var(--foreground)]"
                    aria-label={`Visit ${social.label}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border-soft)] pt-5 text-sm text-[var(--muted)]">
          © 2026 RP Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}