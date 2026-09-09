import { createFileRoute } from "@tanstack/react-router";

import consultationImage from "@/assets/placeholder-consultation.jpg";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { doctor } from "@/config/site";
import {
  associations,
  awards,
  memberships,
  qualifications,
  specialityInterests,
} from "@/content/profile";
import { card } from "@/lib/ui";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Dr. Subhash Kumar Sinha | Cardiothoracic & Vascular Surgeon" },
      {
        name: "description",
        content:
          "Dr. Subhash Kumar Sinha — senior Cardiothoracic and Vascular Surgeon with 40+ years of experience, qualifications, hospital associations, awards and philosophy of cardiac care.",
      },
      { property: "og:title", content: "About Dr. Subhash Kumar Sinha" },
      {
        property: "og:description",
        content:
          "A distinguished cardiac surgical career spanning more than four decades, with pioneering contributions to beating heart surgery.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "profile" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ),
      },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Profile"
        heading="About Dr. Subhash Kumar Sinha"
        subheading="A distinguished cardiac surgical career spanning more than four decades."
      />
      <Breadcrumbs items={[{ label: "About" }]} />

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Professional Summary</h2>
            <span className="rule-gold mt-4" aria-hidden="true" />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                {doctor.name} is a highly accomplished cardiac surgeon with over 40 years of
                experience in cardiac sciences and cardiac surgery. He currently serves as Senior
                Director – CTVS at Max Super Speciality Hospital, Saket, New Delhi, and is
                recognized worldwide for his pioneering contributions to beating heart surgery.
              </p>
              <p>
                Throughout his distinguished career, Dr. Sinha has held senior leadership positions
                across several prominent healthcare institutions, including Batra Hospital and
                Medical Research Centre, Paras Group of Hospitals and Max Healthcare.
              </p>
              <p>
                His expertise spans a comprehensive range of cardiac surgical procedures, with
                particular proficiency in beating heart coronary artery bypass grafting, minimally
                invasive cardiac surgery, aortic procedures, heart valve repair and replacement,
                multiple valve surgery and redo cardiac operations.
              </p>
              <p>
                Dr. Sinha has also trained and guided 75 medics and paramedics, contributing to the
                development of skilled cardiac-care teams and a multidisciplinary approach to cardiac
                surgery.
              </p>
            </div>
          </div>
          <figure>
            {/* PLACEHOLDER IMAGE — replace with an authentic consultation photograph. */}
            <img
              src={consultationImage}
              width={1400}
              height={1000}
              loading="lazy"
              alt="Placeholder image of a surgeon in consultation with a patient"
              className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-card)]"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
              Placeholder image — patient consultation.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
            Education and Qualifications
          </h2>
          <ol className="mt-10 space-y-4 border-l border-border pl-6">
            {qualifications.map((item) => (
              <li key={item.degree} className="relative">
                <span
                  className="absolute -left-[1.9rem] top-2 h-2.5 w-2.5 rounded-full bg-gold"
                  aria-hidden="true"
                />
                <p className="font-semibold text-primary">{item.degree}</p>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
              Career and Hospital Associations
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {associations.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className={`${card} mt-8`}>
              <h2 className="text-xl font-semibold text-primary">Areas of Special Interest</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {specialityInterests.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-6">
            <div className={card}>
              <h2 className="text-xl font-semibold text-primary">Awards and Recognition</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {awards.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className={card}>
              <h2 className="text-xl font-semibold text-primary">Memberships</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {memberships.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-primary sm:text-3xl">Philosophy of Care</h2>
          <span className="rule-gold mx-auto mt-4 block" aria-hidden="true" />
          <p className="mt-6 font-display text-xl leading-relaxed text-foreground sm:text-2xl">
            “Every cardiac patient has a different medical history, risk profile and treatment
            requirement.”
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Dr. Sinha's approach emphasizes detailed evaluation, careful surgical planning, clear
            patient communication and selection of the most appropriate surgical technique for each
            individual.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
