import { Link } from "@tanstack/react-router";

import { contact, doctor, globalDisclaimer, hospital } from "@/config/site";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Treatments", to: "/treatments" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Medical Disclaimer", to: "/medical-disclaimer" },
  { label: "Terms of Use", to: "/terms-of-use" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">{doctor.shortName}</p>
          <p className="mt-2 text-sm text-primary-foreground/75">{doctor.title}</p>
          <span className="rule-gold mt-5" aria-hidden="true" />
          <p className="mt-4 text-sm text-primary-foreground/75">{doctor.positioning}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-primary-foreground/80 transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <a href={contact.phoneHref} className="hover:text-gold">
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={contact.emailHref} className="hover:text-gold">
                {contact.email}
              </a>
            </li>
            <li>{hospital.name}</li>
            <li>{hospital.addressLines.join(", ")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page py-8 text-xs leading-relaxed text-primary-foreground/65">
          <p>{globalDisclaimer}</p>
          <p className="mt-4">
            © {new Date().getFullYear()} {doctor.name}. All rights reserved.
          </p>
          <p className="mt-3">
            Powered by{" "}
            <a
              href="https://www.transess.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-gold"
            >
              Transess
            </a>{" "}
            — A Medical Digital Marketing Agency for 10X Medical Practice Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
