"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name." }),
  email: z.string().email({ message: "Enter a valid email address." }),
  service: z.enum(["website", "product", "motion", "other"], {
    message: "Pick what you need.",
  }),
  details: z
    .string()
    .min(15, { message: "A sentence or two of context helps — min 15 chars." }),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string[] | undefined>;
};

export async function submitProjectRequest(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors: z.flattenError(parsed.error).fieldErrors,
    };
  }

  // TODO: wire to email/CRM (e.g. Resend) — keys live in env, not the repo.
  // Simulated latency so the pending UI is exercised in dev.
  await new Promise((resolve) => setTimeout(resolve, 900));

  return {
    status: "success",
    message:
      "Got it — your brief is in. We'll reply from geotechsolutionsng@gmail.com within one business day.",
  };
}
