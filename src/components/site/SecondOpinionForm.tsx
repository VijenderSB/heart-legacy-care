import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Field, inputClass } from "@/components/site/FormFields";
import { ACCEPTED_FILE_TYPES, submitEnquiry, validateFile } from "@/lib/enquiry";
import { btn } from "@/lib/ui";

/** Second-opinion request form with private medical-report upload (placeholder API). */
export function SecondOpinionForm() {
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
    if (!data.get("consent")) nextErrors.consent = "Please provide consent to share these details.";

    const files: File[] = [];
    for (const key of ["reports", "angiography"]) {
      const value = data.get(key);
      if (value instanceof File && value.size > 0) {
        const fileError = validateFile(value);
        if (fileError) nextErrors[key] = fileError;
        else files.push(value);
      }
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    const result = await submitEnquiry({
      type: "second-opinion",
      fields: Object.fromEntries(
        [...data.entries()].filter(([, v]) => typeof v === "string"),
      ) as Record<string, string>,
      files: files.map((file) => ({ name: file.name, size: file.size, type: file.type })),
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
      <Field id="so-name" label="Patient's name" required error={errors.name}>
        <input id="so-name" name="name" className={inputClass} />
      </Field>
      <Field id="so-age" label="Age">
        <input id="so-age" name="age" type="number" min="0" max="120" className={inputClass} />
      </Field>
      <Field id="so-mobile" label="Mobile number" required error={errors.mobile}>
        <input id="so-mobile" name="mobile" type="tel" className={inputClass} />
      </Field>
      <Field id="so-city" label="City and country">
        <input id="so-city" name="city" className={inputClass} />
      </Field>
      <Field id="so-diagnosis" label="Current diagnosis" className="sm:col-span-2">
        <input id="so-diagnosis" name="diagnosis" className={inputClass} />
      </Field>
      <Field id="so-procedure" label="Recommended procedure">
        <input id="so-procedure" name="procedure" className={inputClass} />
      </Field>
      <Field id="so-previous" label="Previous cardiac surgery">
        <select id="so-previous" name="previousSurgery" className={inputClass} defaultValue="No">
          <option>No</option>
          <option>Yes</option>
          <option>Not sure</option>
        </select>
      </Field>
      <Field id="so-message" label="Message" className="sm:col-span-2">
        <textarea id="so-message" name="message" rows={4} className={inputClass} />
      </Field>
      <Field id="so-reports" label="Medical report upload (PDF, JPG, JPEG, PNG)" error={errors.reports}>
        <input
          id="so-reports"
          name="reports"
          type="file"
          accept={ACCEPTED_FILE_TYPES}
          className={inputClass}
        />
      </Field>
      <Field
        id="so-angio"
        label="Angiography / echo report upload (PDF, JPG, JPEG, PNG)"
        error={errors.angiography}
      >
        <input
          id="so-angio"
          name="angiography"
          type="file"
          accept={ACCEPTED_FILE_TYPES}
          className={inputClass}
        />
      </Field>

      <p className="flex gap-3 rounded-xl bg-secondary p-4 text-xs leading-relaxed text-muted-foreground sm:col-span-2">
        <ShieldCheck className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
        Medical reports and personal information will be used only to respond to the consultation
        request and must be handled securely. Files are never stored in a publicly accessible
        location.
      </p>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[var(--accent)]" />
          <span>
            I consent to sharing these medical details for the purpose of obtaining a surgical second
            opinion.
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
        <button type="submit" disabled={status === "loading"} className={btn.accent}>
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
          {status === "loading" ? "Sending…" : "Request a Second Opinion"}
        </button>
      </div>
    </form>
  );
}
