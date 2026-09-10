import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { contact, doctor, navLinks } from "@/config/site";
import { btn } from "@/lib/ui";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="w-full border-b border-border/60 bg-primary text-primary-foreground">
        <div className="container-page flex h-9 items-center justify-end gap-4">
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold"
            aria-label={`Call ${doctor.shortName} at ${contact.phoneDisplay}`}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{contact.phoneDisplay}</span>
          </a>
        </div>
      </div>

      <div
        className={`w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/95 backdrop-blur shadow-[var(--shadow-card)]"
            : "border-border/40 bg-background"
        }`}
      >
        <div className="container-page flex h-20 items-center justify-between gap-4">
          <Link
            to="/"
            className="flex max-w-[16rem] flex-col leading-tight sm:max-w-md"
            aria-label={`${doctor.shortName} — home`}
          >
            <span className="font-display text-lg font-semibold text-primary sm:text-xl">
              Dr S K Sinha
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-wide text-foreground/80 sm:text-[0.7rem]">
              Senior Director - CTVS, Cardiac Sciences, Cardiac Surgery (CTVS)
            </span>
            <span className="hidden text-[0.65rem] leading-snug text-muted-foreground sm:inline sm:text-[0.68rem]">
              Max Super Speciality Hospital, Saket, New Delhi.
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={contact.phoneHref}
              aria-label={`Call ${doctor.shortName} at ${contact.phoneDisplay}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-gold hover:text-accent"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link to="/contact" hash="appointment" className={`${btn.primary} hidden sm:inline-flex`}>
              Book Appointment
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary lg:hidden"
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
            <ul className="container-page flex flex-col py-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium text-foreground hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="py-3">
                <Link
                  to="/contact"
                  hash="appointment"
                  onClick={() => setOpen(false)}
                  className={`${btn.primary} w-full`}
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
