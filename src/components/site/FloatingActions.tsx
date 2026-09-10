import { Link } from "@tanstack/react-router";
import { ArrowUp, CalendarCheck, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { AppointmentForm } from "@/components/site/AppointmentForm";
import { contact } from "@/config/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!appointmentOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAppointmentOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [appointmentOpen]);

  return (
    <>
      {/* Floating WhatsApp / Call / Appointment / Back-to-top (desktop and tablet) */}
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
        <button
          type="button"
          onClick={() => setAppointmentOpen(true)}
          aria-label="Book an appointment"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-primary shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        </button>
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
        <button
          type="button"
          onClick={() => setAppointmentOpen(true)}
          className="flex flex-col items-center gap-1 py-3 text-xs text-accent"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          Appointment
        </button>
      </nav>
      <div className="h-16 sm:hidden" aria-hidden="true" />

      {/* Appointment popup — available on every page */}
      {appointmentOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book an appointment"
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
        >
          <button
            type="button"
            aria-label="Close appointment form"
            onClick={() => setAppointmentOpen(false)}
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
          />
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-primary sm:text-2xl">
                  Book an Appointment
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our coordinator will contact you to confirm your consultation.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setAppointmentOpen(false)}
                aria-label="Close"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-gold hover:text-accent"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <AppointmentForm withHospital />
          </div>
        </div>
      )}
    </>
  );
}
