import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/validation";

// Always run on the server (Node.js runtime, required by nodemailer).
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

  // SMTP credentials (Microsoft 365 / Outlook). Configured in Vercel env vars.
  const host = process.env.SMTP_HOST ?? "smtp.office365.com";
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  // For Microsoft 365 the "from" must be the authenticated mailbox (or an alias
  // it is allowed to send as). Defaults to the SMTP user.
  const from =
    process.env.CONTACT_NOTIFICATION_FROM ??
    (user ? `Lienhard Automation <${user}>` : undefined);
  const to = process.env.CONTACT_NOTIFICATION_TO ?? user;

  if (!user || !pass || !from || !to) {
    console.error(
      "[contact] SMTP is not configured. Submission was NOT sent:",
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
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email, // reply goes straight to the visitor
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error(
      "[contact] SMTP send failed:",
      err instanceof Error ? err.message : err,
    );
    return NextResponse.json(
      { error: "Die Nachricht konnte nicht gesendet werden." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
