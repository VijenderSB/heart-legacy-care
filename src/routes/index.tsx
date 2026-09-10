import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import aboutPortraitAsset from "@/assets/dr-sinha-about-cropped.png.asset.json";
import heroPortraitAsset from "@/assets/dr-subhash-kumar-sinha.png.asset.json";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { CtaBanner } from "@/components/site/CtaBanner";
import { TreatmentIcon } from "@/components/site/TreatmentIcon";
import { contact, doctor } from "@/config/site";
import { qualifications, trustStats, whyConsult } from "@/content/profile";
import { treatments } from "@/content/treatments";
import { btn, card } from "@/lib/ui";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Cardiac Surgeon in Delhi | Dr. Subhash K. Sinha" },
      {
        name: "description",
        content:
          "Consult Dr. Subhash Kumar Sinha, cardiac surgeon in Delhi with 40+ years of experience in bypass, valve, minimally invasive and aortic surgery.",
      },
      { property: "og:title", content: "Cardiac Surgeon in Delhi | Dr. Subhash K. Sinha" },
      {
        property: "og:description",
        content:
          "40+ years of excellence in advanced cardiac surgery — beating heart bypass, valve, minimally invasive and complex aortic procedures.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cardiac Surgeon in Delhi | Dr. Subhash K. Sinha" },
      {
        name: "twitter:description",
        content: "Consult Dr. Subhash Kumar Sinha for experienced cardiac surgical care in New Delhi.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  return (
    <>
      {/* SECTION 2 — HERO */}
      <section className="relative overflow-hidden bg-surface">
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Pioneer in Beating Heart Surgery
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] text-primary sm:text-5xl">
              Dr. Subhash Kumar Sinha — Cardiac Surgeon in Delhi
            </h1>
            <span className="rule-gold mt-6" aria-hidden="true" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {doctor.name} is a senior Cardiothoracic and Vascular Surgeon with more than 40 years of
              experience in cardiac sciences and cardiac surgery. His expertise includes beating heart
              bypass surgery, minimally invasive cardiac surgery, heart valve procedures and complex
              aortic surgery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" hash="appointment" className={btn.primary}>
                Book an Appointment
              </Link>
              <Link to="/treatments" className={btn.outline}>Explore Treatments</Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-5 text-sm">
              <a href={contact.phoneHref} className="inline-flex items-center gap-2 text-primary hover:text-accent">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>

          <figure className="relative">
            <img
              src={heroPortraitAsset.url}
              width={1154}
              height={887}
              alt="Dr. Subhash Kumar Sinha, Senior Cardiothoracic and Vascular Surgeon, in surgical scrubs"
              className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-elegant)]"
            />
          </figure>
        </div>
      </section>

      {/* SECTION 3 — TRUST HIGHLIGHTS */}
      <section className="border-y border-border bg-background py-12">
        <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-3xl font-semibold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — ABOUT INTRODUCTION */}
      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              A Distinguished Career Dedicated to Cardiac Care
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {doctor.name} is a highly accomplished Cardiothoracic and Vascular Surgeon serving as
              Senior Director – CTVS at Max Super Speciality Hospital, Saket, New Delhi. Over a
              career spanning more than four decades, he has held senior leadership positions at
              several renowned healthcare institutions.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              He is particularly recognized for his contributions to beating heart surgery. His
              clinical expertise covers coronary artery bypass grafting, minimally invasive cardiac
              surgery, valve repair and replacement, aortic root procedures, multiple valve surgery
              and redo cardiac operations.
            </p>
            <Link to="/about" className={`${btn.outline} mt-8`}>
              Know More About Dr. Sinha <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <figure>
            <img
              src={aboutPortraitAsset.url}
              width={1086}
              height={768}
              loading="lazy"
              alt="Dr. Subhash Kumar Sinha, Senior Cardiothoracic and Vascular Surgeon"
              className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-card)]"
            />
          </figure>
        </div>
      </section>

      {/* SECTION 5 — FEATURED EXPERTISE */}
      <section className="bg-surface py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Expertise</p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Major Cardiac Procedures
            </h2>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((treatment) => (
              <li key={treatment.slug}>
                <article className={`${card} h-full hover:-translate-y-1 hover:border-gold/60`}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-accent">
                    <TreatmentIcon name={treatment.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-primary">{treatment.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {treatment.shortDescription}
                  </p>
                  <Link
                    to="/treatments"
                    hash={treatment.slug}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2"
                  >
                    Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 6 — BEATING HEART SURGERY */}
      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Signature Expertise
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Pioneering Expertise in Beating Heart Surgery
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Beating heart bypass surgery is an advanced form of coronary artery bypass grafting
              performed without intentionally stopping the heart or routinely using a heart-lung
              machine. Where clinically appropriate, it may offer important advantages for selected
              patients.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Dr. Sinha is widely recognized for his contributions to this field and brings extensive
              experience to the evaluation and surgical management of patients requiring coronary
              bypass surgery.
            </p>
            <p className="mt-6 flex gap-3 rounded-xl border border-gold/40 bg-secondary p-4 text-sm leading-relaxed text-muted-foreground">
              <ShieldCheck className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              The appropriate surgical approach depends on the patient's medical condition, coronary
              anatomy and individual risk profile.
            </p>
            <Link to="/treatments" hash="beating-heart-bypass-surgery" className={`${btn.primary} mt-8`}>
              Explore Beating Heart Bypass Surgery
            </Link>
          </div>

          {/* SECTION 7 — WHY CONSULT DR. SINHA */}
          <div className={`${card} bg-primary text-primary-foreground`}>
            <h3 className="text-xl font-semibold">Why Consult Dr. Sinha</h3>
            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/85">
              {whyConsult.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 8 — QUALIFICATIONS */}
      <section className="bg-surface py-20">
        <div className="container-page">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Education and Qualifications
          </h2>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {qualifications.map((item) => (
              <li key={item.degree} className={card}>
                <p className="text-base font-semibold text-primary">{item.degree}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.institution}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 10 — CONSULTATION CTA */}
      <CtaBanner />

      {/* SECTION 11 — APPOINTMENT FORM */}
      <section id="appointment" className="py-20">
        <div className="container-page max-w-4xl">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">Request a Consultation</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Share a few details and the clinic coordinator will get in touch to confirm your
            appointment.
          </p>
          <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-10">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
