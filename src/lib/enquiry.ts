/**
 * Enquiry submission layer (PLACEHOLDER).
 *
 * All appointment and second-opinion submissions pass through this single
 * function so that a real backend can be connected in one place later:
 *   - Lovable Cloud database table (appointments / second_opinions)
 *   - Email notification to the clinic coordinator
 *   - CRM webhook
 *   - WhatsApp notification
 *
 * File uploads: DO NOT use a public storage bucket. When backend integration is
 * enabled, store medical reports in PRIVATE storage with restricted access and
 * signed, time-limited download links for the clinic team only.
 */

export type EnquiryType = "appointment" | "second-opinion";

export type EnquiryPayload = {
  type: EnquiryType;
  fields: Record<string, string | boolean>;
  files?: { name: string; size: number; type: string }[];
};

export type EnquiryResult = { ok: true } | { ok: false; error: string };

export const ACCEPTED_FILE_TYPES = ".pdf,.jpg,.jpeg,.png";
const ACCEPTED_MIME = ["application/pdf", "image/jpeg", "image/png"];
const MAX_FILE_BYTES = 10 * 1024 * 1024;

export function validateFile(file: File): string | null {
  if (!ACCEPTED_MIME.includes(file.type)) {
    return "Only PDF, JPG, JPEG and PNG files are accepted.";
  }
  if (file.size > MAX_FILE_BYTES) {
    return "Each file must be smaller than 10 MB.";
  }
  return null;
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  // PLACEHOLDER: replace with a real server function / database insert.
  // Example (once Lovable Cloud is enabled):
  //   const { error } = await supabase.from("enquiries").insert({ ... });
  await new Promise((resolve) => setTimeout(resolve, 900));

  if (import.meta.env.DEV) {
    console.info("[enquiry placeholder] submission received", payload);
  }

  return { ok: true };
}
