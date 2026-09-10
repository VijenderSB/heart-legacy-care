import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, Clock, MapPin, MessageCircle, Phone } from "lucide-react";

import { AppointmentForm } from "@/components/site/AppointmentForm";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/PageHero";

import { contact, hospital } from "@/config/site";
import { btn, card } from "@/lib/ui";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Book an Appointment | Consult Dr. S. K. Sinha, Cardiac Surgeon" },
      {
        name: "description",
        content:
          "Request an appointment with Dr. Subhash Kumar Sinha, senior Cardiothoracic and Vascular Surgeon. Call, WhatsApp or book an OPD consultation online.",
      },
      { property: "og:title", content: "Consult Dr. S. K. Sinha" },
      {
        property: "og:description",
        content:
          "Request an appointment or an experienced second opinion for a cardiac surgical condition.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Dr. S. K. Sinha — Cardiothoracic & Vascular Surgery Consultation",
          medicalSpecialty: "Cardiovascular",
          url: "/contact",
          telephone: contact.phoneDisplay,
          email: contact.email,
          address: {
            "@type": "PostalAddress",
            name: hospital.name,
            streetAddress: hospital.addressLines.slice(0, -1).join(", "),
            addressLocality: "New Delhi",
            addressRegion: "Delhi",
            postalCode: "110017",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        heading="Consult Dr. S. K. Sinha"
        subheading="Request an appointment or an experienced second opinion for a cardiac surgical condition."
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="py-16">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a href={contact.phoneHref} className={`${card} hover:-translate-y-1 hover:border-gold/60`}>
            <Phone className="h-6 w-6 text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-primary">Call for Appointment</h2>
            <p className="mt-2 text-sm text-muted-foreground">{contact.phoneDisplay}</p>
          </a>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={`${card} hover:-translate-y-1 hover:border-gold/60`}
          >
            <MessageCircle className="h-6 w-6 text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-primary">WhatsApp Enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">{contact.whatsappDisplay}</p>
          </a>
          <a href="#appointment" className={`${card} hover:-translate-y-1 hover:border-gold/60`}>
            <CalendarCheck className="h-6 w-6 text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-primary">In-Person Consultation</h2>
            <p className="mt-2 text-sm text-muted-foreground">Book an OPD appointment</p>
          </a>
        </div>
      </section>

      {/* HOSPITAL DETAILS — all values are editable placeholders in src/config/site.ts */}
      <section className="bg-surface py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Hospital Details</h2>
            <dl className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <dt className="font-medium text-foreground">{hospital.name}</dt>
                  <dd>{hospital.addressLines.join(", ")}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <dt className="font-medium text-foreground">OPD schedule</dt>
                  <dd>
                    {hospital.opdDays} · {hospital.opdTimings}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <dt className="font-medium text-foreground">Appointment telephone</dt>
                  <dd>
                    <a href={hospital.appointmentPhoneHref} className="hover:text-accent">
                      {hospital.appointmentPhoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
            <a href={hospital.directionsUrl} target="_blank" rel="noreferrer" className={`${btn.outline} mt-6`}>
              Get Directions
            </a>
            <p className="mt-6 rounded-xl border border-dashed border-gold/60 bg-background p-4 text-xs text-muted-foreground">
              Developer note: all hospital names, addresses, OPD days, timings, phone numbers and the
              map location are placeholders and must be confirmed before launch.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            {/* PLACEHOLDER map — update the embed source with the verified hospital address. */}
            <iframe
              title="Hospital location map (placeholder)"
              src={hospital.mapsEmbedSrc}
              loading="lazy"
              className="h-80 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="appointment" className="py-16">
        <div className="container-page max-w-4xl">
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Appointment Request</h2>
          <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-10">
            <AppointmentForm withHospital />
          </div>
        </div>
      </section>

    </>
  );
}
