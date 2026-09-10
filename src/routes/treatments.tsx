import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";

import { Breadcrumbs, breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { TreatmentIcon } from "@/components/site/TreatmentIcon";
import { faqs, treatments } from "@/content/treatments";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { card } from "@/lib/ui";

export const Route = createFileRoute("/treatments")({
  component: TreatmentsPage,
  head: () => ({
    meta: [
      { title: "Cardiac Surgery Treatments | Dr. S. K. Sinha" },
      {
        name: "description",
        content:
          "Explore beating heart bypass, CABG, minimally invasive cardiac surgery, valve procedures, aortic surgery and redo cardiac surgery in Delhi.",
      },
      { property: "og:title", content: "Cardiac Procedures and Surgical Expertise" },
      {
        property: "og:description",
        content:
          "Advanced evaluation and surgical care for coronary artery, valve, aortic and complex cardiac conditions.",
      },
      { property: "og:url", content: "/treatments" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cardiac Surgery Treatments | Dr. S. K. Sinha" },
      {
        name: "twitter:description",
        content: "Information about bypass, valve, minimally invasive, aortic and redo cardiac surgery.",
      },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Treatments", path: "/treatments" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Cardiac surgery treatments",
          numberOfItems: treatments.length,
          itemListElement: treatments.map((treatment, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: treatment.name,
            url: `/treatments#${treatment.slug}`,
          })),
        }),
      },
    ],
  }),
});

function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        heading="Cardiac Procedures and Surgical Expertise"
        subheading="Advanced evaluation and surgical care for coronary artery, valve, aortic and complex cardiac conditions."
      />
      <Breadcrumbs items={[{ label: "Treatments" }]} />

      <nav aria-label="Procedures" className="container-page py-10">
        <ul className="flex flex-wrap gap-2">
          {treatments.map((treatment) => (
            <li key={treatment.slug}>
              <a
                href={`#${treatment.slug}`}
                className="inline-flex rounded-full border border-border px-4 py-2 text-xs text-primary transition-colors hover:border-gold hover:text-accent"
              >
                {treatment.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {treatments.map((treatment, index) => (
        <Fragment key={treatment.slug}>
          <section
            id={treatment.slug}
            className={`${index % 2 === 1 ? "bg-surface" : "bg-background"} py-16`}
          >
            <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-accent">
                  <TreatmentIcon name={treatment.icon} className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-primary sm:text-3xl">
                  {treatment.name}
                </h2>
                <span className="rule-gold mt-4" aria-hidden="true" />
                <p className="mt-5 leading-relaxed text-muted-foreground">{treatment.intro}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {treatment.points.map((point) => (
                  <article key={point.heading} className={card}>
                    <h3 className="text-base font-semibold text-primary">{point.heading}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          {(index === 2 || index === 5) && (
            <CtaBanner
              heading="Discuss Your Reports With an Experienced Cardiac Surgeon"
              text="Share your angiography and echocardiography reports for a considered surgical opinion."
              tone={index === 2 ? "dark" : "light"}
            />
          )}
        </Fragment>
      ))}

      <section className="py-20">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-left text-base font-medium text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
