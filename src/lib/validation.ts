import { z } from "zod";

/**
 * Shared contact-form schema. Used on the client (instant feedback) AND on the
 * server (authoritative validation) so we never trust unvalidated input.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Bitte geben Sie Ihren Namen ein.")
    .max(120, "Der Name ist zu lang."),
  email: z
    .string()
    .trim()
    .min(1, "Bitte geben Sie Ihre E-Mail-Adresse ein.")
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein.")
    .max(180, "Die E-Mail-Adresse ist zu lang."),
  message: z
    .string()
    .trim()
    .min(10, "Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).")
    .max(4000, "Die Nachricht ist zu lang (max. 4000 Zeichen)."),
  // Honeypot field — must stay empty. Bots tend to fill every field.
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
