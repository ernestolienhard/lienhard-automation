"use client";

import { useState } from "react";
import { contactSchema } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check, Spinner } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
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

    // Client-side validation for instant feedback.
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
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

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Unbekannter Fehler");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error
          ? err.message
          : "Die Nachricht konnte nicht gesendet werden.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-xl2 border border-accent-200 bg-accent-50 px-6 py-12 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-600 text-white">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-navy-900">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="mt-2 max-w-sm text-steel-600">
          Wir haben Ihre Nachricht erhalten und melden uns so rasch wie möglich
          bei Ihnen.
        </p>
        <Button
          variant="ghost"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Weitere Nachricht senden
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from users, visible to bots. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Firma (nicht ausfüllen)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Field
        id="name"
        label="Name"
        error={errors.name}
        autoComplete="name"
        required
      />
      <Field
        id="email"
        type="email"
        label="E-Mail"
        error={errors.email}
        autoComplete="email"
        required
      />

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy-900"
        >
          Nachricht <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Beschreiben Sie kurz Ihr Projekt oder Anliegen…"
          className={cn(
            "mt-1.5 w-full rounded-lg border bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-steel-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500",
            errors.message
              ? "border-red-400 focus:ring-red-400"
              : "border-steel-300",
          )}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      {serverError ? (
        <p
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {serverError} Bitte versuchen Sie es erneut oder schreiben Sie uns
          direkt per E-Mail.
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Spinner className="h-4 w-4" /> Wird gesendet…
          </>
        ) : (
          <>
            Nachricht senden <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-steel-500">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben gemäss
        unserer{" "}
        <a href="/datenschutz" className="underline hover:text-accent-600">
          Datenschutzerklärung
        </a>{" "}
        zu.
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
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
