import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { getSupabaseAdmin } from "@/lib/supabase/server";

// Always run on the server, never statically cached.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  // Authoritative server-side validation (never trust the client).
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Die übermittelten Daten sind ungültig." },
      { status: 422 },
    );
  }

  // Honeypot triggered → silently accept without storing (don't tip off bots).
  if (parsed.data.company && parsed.data.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    // Supabase not configured yet. Log so the message isn't lost in dev,
    // and return a clear error instead of pretending it was stored.
    console.error(
      "[contact] Supabase is not configured. Submission was NOT stored:",
      { name: parsed.data.name, email: parsed.data.email },
    );
    return NextResponse.json(
      {
        error:
          "Das Kontaktformular ist noch nicht vollständig konfiguriert. Bitte kontaktieren Sie uns direkt per E-Mail.",
      },
      { status: 503 },
    );
  }

  const { error } = await supabase.from("contact_submissions").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    message: parsed.data.message,
  });

  if (error) {
    console.error("[contact] Supabase insert failed:", error.message);
    return NextResponse.json(
      { error: "Die Nachricht konnte nicht gespeichert werden." },
      { status: 500 },
    );
  }

  // TODO (optional): send an email notification here via Resend.
  // See README → "E-Mail-Benachrichtigungen aktivieren".

  return NextResponse.json({ ok: true }, { status: 201 });
}
