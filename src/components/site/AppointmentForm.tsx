import { CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Field, inputClass } from "@/components/site/FormFields";
import { submitEnquiry } from "@/lib/enquiry";
import { btn } from "@/lib/ui";

/** Appointment request form. Submissions go through submitEnquiry() (placeholder API). */
export function AppointmentForm({ withHospital = false }: { withHospital?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};

    if (!String(data.get("name") ?? "").trim()) nextErrors.name = "Please enter the patient's name.";
    if (!/^[0-9+\-\s]{8,16}$/.test(String(data.get("mobile") ?? "")))
      nextErrors.mobile = "Please enter a valid mobile number.";
    if (!/^\S+@\S+\.\S+$/.test(String(data.get("email") ?? "")))
      nextErrors.email = "Please enter a valid email address.";
    if (!data.get("consent")) nextErrors.consent = "Please provide consent to be contacted.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    const result = await submitEnquiry({
      type: "appointment",
      fields: Object.fromEntries(data.entries()) as Record<string, string>,
    });
    if (result.ok) {
      setStatus("done");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-gold/40 bg-card p-8 text-center shadow-[var(--shadow-card)]">
        <CheckCircle2 className="mx-auto h-10 w-10 text-gold" aria-hidden="true" />
        <p className="mt-4 text-base font-medium text-foreground">
          Thank you. Your consultation request has been received. Our coordinator will contact you
          shortly.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className={`${btn.outline} mt-6`}>
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field id="name" label="Patient's full name" required error={errors.name}>
        <input id="name" name="name" className={inputClass} autoComplete="name" />
      </Field>
      <Field id="age" label="Age">
        <input id="age" name="age" type="number" min="0" max="120" className={inputClass} />
      </Field>
      <Field id="mobile" label="Mobile number" required error={errors.mobile}>
        <input id="mobile" name="mobile" type="tel" className={inputClass} autoComplete="tel" />
      </Field>
      <Field id="email" label="Email address" required error={errors.email}>
        <input id="email" name="email" type="email" className={inputClass} autoComplete="email" />
      </Field>
      <Field id="city" label="City and country">
        <input id="city" name="city" className={inputClass} />
      </Field>
      {withHospital && (
        <Field id="hospital" label="Preferred hospital">
          {/* PLACEHOLDER hospital options — update once associations are confirmed. */}
          <input id="hospital" name="hospital" className={inputClass} />
        </Field>
      )}
      <Field id="concern" label="Diagnosis or main cardiac concern" className="sm:col-span-2">
        <input id="concern" name="concern" className={inputClass} />
      </Field>
      <Field id="mode" label="Preferred consultation mode">
        <select id="mode" name="mode" className={inputClass} defaultValue="In person">
          <option>In person</option>
          <option>Online / video</option>
          <option>Telephone</option>
        </select>
      </Field>
      <Field id="date" label="Preferred appointment date">
        <input id="date" name="date" type="date" className={inputClass} />
      </Field>
      <Field id="message" label="Message" className="sm:col-span-2">
        <textarea id="message" name="message" rows={4} className={inputClass} />
      </Field>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[var(--accent)]" />
          <span>
            I consent to being contacted about this consultation request and understand that the
            information provided will be used only for that purpose.
          </span>
        </label>
        {errors.consent && (
          <p role="alert" className="mt-1 text-xs text-destructive">
            {errors.consent}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-destructive sm:col-span-2">
          Something went wrong. Please try again or call the clinic directly.
        </p>
      )}

      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "loading"} className={btn.primary}>
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
          {status === "loading" ? "Sending…" : "Book an Appointment"}
        </button>
      </div>
    </form>
  );
}
