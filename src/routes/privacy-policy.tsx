import { createFileRoute } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PageHero } from "@/components/site/PageHero";
import { contact } from "@/config/site";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Dr. S. K. Sinha" },
      {
        name: "description",
        content:
          "How enquiry details and medical reports shared with the practice of Dr. Subhash Kumar Sinha are collected, used and protected.",
      },
      { property: "og:title", content: "Privacy Policy | Dr. S. K. Sinha" },
      {
        property: "og:description",
        content: "How enquiry details and medical reports shared with the practice are handled.",
      },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero heading="Privacy Policy" subheading="How your information is collected and used." />
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <article className="container-page max-w-3xl space-y-6 py-16 leading-relaxed text-muted-foreground">
        {/* PLACEHOLDER: have this policy reviewed by a legal advisor before publishing. */}
        <p>
          This website collects only the information you choose to provide through the appointment and
          second-opinion forms — such as your name, age, contact details, city, cardiac concern and any
          medical reports you upload.
        </p>
        <h2 className="text-xl font-semibold text-primary">How the information is used</h2>
        <p>
          Information is used solely to respond to your consultation request, to schedule an
          appointment and to provide a surgical opinion. It is not sold or used for unrelated
          marketing purposes.
        </p>
        <h2 className="text-xl font-semibold text-primary">Medical reports</h2>
        <p>
          Uploaded medical reports are treated as confidential health information. They are stored in
          private, access-restricted storage and shared only with the clinical team involved in
          reviewing your case.
        </p>
        <h2 className="text-xl font-semibold text-primary">Retention and your rights</h2>
        <p>
          You may request access to, correction of, or deletion of the information you have submitted
          by writing to{" "}
          <a href={contact.emailHref} className="text-accent hover:underline">
            {contact.email}
          </a>
          .
        </p>
        <h2 className="text-xl font-semibold text-primary">Cookies and analytics</h2>
        <p>
          The website may use basic analytics to understand how visitors use its pages. No health
          information is used for advertising.
        </p>
      </article>
    </>
  );
}
