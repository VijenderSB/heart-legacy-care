import { createFileRoute } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/PageHero";
import { globalDisclaimer } from "@/config/site";

export const Route = createFileRoute("/medical-disclaimer")({
  component: MedicalDisclaimerPage,
  head: () => ({
    meta: [
      { title: "Medical Disclaimer | Dr. S. K. Sinha" },
      {
        name: "description",
        content:
          "The medical information on this website is educational and does not replace an individual clinical consultation with a qualified cardiac surgeon.",
      },
      { property: "og:title", content: "Medical Disclaimer | Dr. S. K. Sinha" },
      {
        property: "og:description",
        content: "Educational information only — not a substitute for individual medical advice.",
      },
      { property: "og:url", content: "/medical-disclaimer" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/medical-disclaimer" }],
  }),
});

function MedicalDisclaimerPage() {
  return (
    <>
      <PageHero heading="Medical Disclaimer" subheading="Educational information, not individual medical advice." />
      <Breadcrumbs items={[{ label: "Medical Disclaimer" }]} />
      <article className="container-page max-w-3xl space-y-6 py-16 leading-relaxed text-muted-foreground">
        <p>{globalDisclaimer}</p>
        <h2 className="text-xl font-semibold text-primary">No doctor–patient relationship</h2>
        <p>
          Submitting an enquiry through this website does not by itself create a doctor–patient
          relationship. A clinical relationship begins only after a formal consultation.
        </p>
        <h2 className="text-xl font-semibold text-primary">Individual variation</h2>
        <p>
          Surgical suitability, technique and outcome depend on each patient's diagnosis, investigation
          findings, anatomy and overall health. No outcome is promised or implied anywhere on this
          website.
        </p>
        <h2 className="text-xl font-semibold text-primary">Emergencies</h2>
        <p>
          If you experience chest pain, breathlessness, fainting or other acute symptoms, contact the
          nearest emergency department immediately rather than using this website.
        </p>
      </article>
    </>
  );
}
