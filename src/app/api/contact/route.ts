import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

// Always run on the server, never statically cached.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Authoritative server-side validation (never trust the client).
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Die übermittelten Daten sind ungültig." },
      { status: 422 },
    );
  }

  // Honeypot triggered → silently accept without sending (don't tip off bots).
  if (parsed.data.company && parsed.data.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_NOTIFICATION_TO;
  // Must be an address on a domain verified in Resend.
  const from =
    process.env.CONTACT_NOTIFICATION_FROM ??
    "Lienhard Automation <onboarding@resend.dev>";

  if (!apiKey || !to) {
    // Email service not configured yet. Log so nothing is lost in dev,
    // and return a clear error instead of pretending it was sent.
    console.error(
      "[contact] Email service is not configured. Submission was NOT sent:",
      { name, email },
    );
    return NextResponse.json(
      {
        error:
          "Das Kontaktformular ist noch nicht vollständig konfiguriert. Bitte kontaktieren Sie uns direkt per E-Mail.",
      },
      { status: 503 },
    );
  }

  const subject = `Neue Projektanfrage von ${name}`;
  const text = `Neue Anfrage über das Kontaktformular\n\nName: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`;
  const html = `
    <h2>Neue Anfrage über das Kontaktformular</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-Mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Nachricht:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        html,
        // Lets you reply directly to the sender from your inbox.
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[contact] Resend send failed:", res.status, body);
      return NextResponse.json(
        { error: "Die Nachricht konnte nicht gesendet werden." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] Resend request error:", err);
    return NextResponse.json(
      { error: "Die Nachricht konnte nicht gesendet werden." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
