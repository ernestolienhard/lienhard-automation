"use client";

import { useState } from "react";
import { contactSchema } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check, Spinner } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/useLocale";

type Status = "idle" | "submitting" | "success" | "error";
type FieldKey = "name" | "email" | "message";
type FieldErrors = Partial<Record<FieldKey, string>>;

const C = {
  de: {
    company: "Firma (nicht ausfüllen)",
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    messagePlaceholder: "Beschreiben Sie kurz Ihr Projekt oder Anliegen…",
    submit: "Nachricht senden",
    submitting: "Wird gesendet…",
    successTitle: "Vielen Dank für Ihre Anfrage!",
    successText: "Ich habe Ihre Nachricht erhalten und melde mich so rasch wie möglich bei Ihnen.",
    successAgain: "Weitere Nachricht senden",
    serverError: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt per E-Mail.",
    consentPre: "Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben gemäss meiner ",
    consentLink: "Datenschutzerklärung",
    consentPost: " zu.",
    errors: {
      name: "Bitte geben Sie Ihren Namen ein.",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      message: "Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).",
    } as Record<FieldKey, string>,
  },
  en: {
    company: "Company (do not fill in)",
    name: "Name",
    email: "Email",
    message: "Message",
    messagePlaceholder: "Briefly describe your project or request…",
    submit: "Send message",
    submitting: "Sending…",
    successTitle: "Thank you for your enquiry!",
    successText: "I have received your message and will get back to you as soon as possible.",
    successAgain: "Send another message",
    serverError: "The message could not be sent. Please try again or write to me directly by email.",
    consentPre: "By submitting you agree to the processing of your data in accordance with my ",
    consentLink: "privacy policy",
    consentPost: ".",
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      message: "Please describe your request (at least 10 characters).",
    } as Record<FieldKey, string>,
  },
  es: {
    company: "Empresa (no rellenar)",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Mensaje",
    messagePlaceholder: "Describa brevemente su proyecto o consulta…",
    submit: "Enviar mensaje",
    submitting: "Enviando…",
    successTitle: "¡Gracias por su consulta!",
    successText: "He recibido su mensaje y me pondré en contacto con usted lo antes posible.",
    successAgain: "Enviar otro mensaje",
    serverError: "No se pudo enviar el mensaje. Inténtelo de nuevo o escríbame directamente por correo electrónico.",
    consentPre: "Al enviar, acepta el tratamiento de sus datos de acuerdo con mi ",
    consentLink: "política de privacidad",
    consentPost: ".",
    errors: {
      name: "Introduzca su nombre.",
      email: "Introduzca una dirección de correo electrónico válida.",
      message: "Describa su consulta (mín. 10 caracteres).",
    } as Record<FieldKey, string>,
  },
};

export function ContactForm() {
  const locale = useLocale();
  const t = locale === "en" ? C.en : locale === "es" ? C.es : C.de;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);
    setErrors({});

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
    };

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as FieldKey;
        if (key && !fieldErrors[key]) fieldErrors[key] = t.errors[key];
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setServerError(t.serverError);
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center rounded-xl2 border border-accent-200 bg-accent-50 px-6 py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-600 text-white">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-navy-900">{t.successTitle}</h3>
        <p className="mt-2 max-w-sm text-steel-600">{t.successText}</p>
        <Button variant="ghost" className="mt-6" onClick={() => setStatus("idle")}>
          {t.successAgain}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">{t.company}</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Field id="name" label={t.name} error={errors.name} autoComplete="name" required />
      <Field id="email" type="email" label={t.email} error={errors.email} autoComplete="email" required />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-900">
          {t.message} <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder={t.messagePlaceholder}
          className={cn(
            "mt-1.5 w-full rounded-lg border bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-steel-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500",
            errors.message ? "border-red-400 focus:ring-red-400" : "border-steel-300",
          )}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-red-600">{errors.message}</p>
        ) : null}
      </div>

      {serverError ? (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Spinner className="h-4 w-4" /> {t.submitting}
          </>
        ) : (
          <>
            {t.submit} <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-steel-500">
        {t.consentPre}
        <a href={`/${locale}/datenschutz`} className="underline hover:text-accent-600">
          {t.consentLink}
        </a>
        {t.consentPost}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  type = "text",
  required,
  autoComplete,
}: {
  id: "name" | "email";
  label: string;
  error?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy-900">
        {label} {required ? <span className="text-accent-600">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "mt-1.5 w-full rounded-lg border bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-steel-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500",
          error ? "border-red-400 focus:ring-red-400" : "border-steel-300",
        )}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">{error}</p>
      ) : null}
    </div>
  );
}
