import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";

import { contact } from "@/config/site";
import { btn } from "@/lib/ui";

export function CtaBanner({
  heading = "Have You Been Advised Bypass, Valve or Aortic Surgery?",
  text = "Consult Dr. S. K. Sinha for an experienced cardiac surgical opinion and a patient-specific treatment assessment.",
  tone = "dark",
}: {
  heading?: string;
  text?: string;
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";

  return (
    <section
      className={`${dark ? "bg-primary text-primary-foreground" : "bg-surface text-foreground"} py-14 sm:py-16`}
    >
      <div className="container-page grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">{heading}</h2>
          <p className={`mt-4 text-sm leading-relaxed sm:text-base ${dark ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
            {text}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" hash="appointment" className={dark ? btn.gold : btn.primary}>
            Book Appointment
          </Link>
          <Link to="/contact" hash="second-opinion" className={dark ? btn.onDark : btn.outline}>
            Request Second Opinion
          </Link>
          <a href={contact.phoneHref} className={dark ? btn.onDark : btn.outline}>
            <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
          </a>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={dark ? btn.onDark : btn.outline}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
