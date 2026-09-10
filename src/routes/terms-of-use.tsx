import { createFileRoute } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms-of-use")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Use | Dr. S. K. Sinha" },
      {
        name: "description",
        content:
          "Terms governing the use of the website of Dr. Subhash Kumar Sinha, Senior Cardiothoracic and Vascular Surgeon.",
      },
      { property: "og:title", content: "Terms of Use | Dr. S. K. Sinha" },
      { property: "og:description", content: "Terms governing the use of this website." },
      { property: "og:url", content: "/terms-of-use" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Terms of Use | Dr. S. K. Sinha" },
      { name: "twitter:description", content: "Conditions governing the use of this website." },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-use" }],
  }),
});

function TermsPage() {
  return (
    <>
      <PageHero heading="Terms of Use" subheading="Conditions for using this website." />
      <Breadcrumbs items={[{ label: "Terms of Use" }]} />
      <article className="container-page max-w-3xl space-y-6 py-16 leading-relaxed text-muted-foreground">
        {/* PLACEHOLDER: have these terms reviewed by a legal advisor before publishing. */}
        <h2 className="text-xl font-semibold text-primary">Use of content</h2>
        <p>
          All text, images and material on this website are provided for general information about the
          practice and may not be reproduced without written permission.
        </p>
        <h2 className="text-xl font-semibold text-primary">Accuracy</h2>
        <p>
          Content is reviewed periodically, but medical practice evolves. Information should not be
          relied upon in place of a consultation.
        </p>
        <h2 className="text-xl font-semibold text-primary">Enquiries</h2>
        <p>
          Enquiry forms should not be used to report emergencies. Responses are provided during clinic
          working hours.
        </p>
        <h2 className="text-xl font-semibold text-primary">External links</h2>
        <p>
          Links to hospital or third-party websites are provided for convenience; their content is not
          controlled by this practice.
        </p>
      </article>
    </>
  );
}
