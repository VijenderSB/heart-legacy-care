import { Link } from "@tanstack/react-router";
import { ArrowUp, CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { contact } from "@/config/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp / Call / Back-to-top (desktop and tablet) */}
      <div className="fixed right-4 bottom-24 z-40 hidden flex-col gap-3 sm:flex">
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Send a WhatsApp enquiry"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href={contact.phoneHref}
          aria-label="Call for an appointment"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
        </a>
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-primary shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Mobile bottom action bar */}
      <nav
        aria-label="Quick actions"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur sm:hidden"
      >
        <a href={contact.phoneHref} className="flex flex-col items-center gap-1 py-3 text-xs text-primary">
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call
        </a>
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 border-x border-border py-3 text-xs text-primary"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
        <Link
          to="/contact"
          hash="appointment"
          className="flex flex-col items-center gap-1 py-3 text-xs text-accent"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          Appointment
        </Link>
      </nav>
      <div className="h-16 sm:hidden" aria-hidden="true" />
    </>
  );
}
