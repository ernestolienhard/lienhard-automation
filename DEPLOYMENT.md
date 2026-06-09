# Deployment- & Test-Checkliste

Schritt-für-Schritt-Anleitung, um die Website live zu schalten — plus eine
Prüfliste vor dem Go-Live.

---

## 1. GitHub-Repository

```bash
# Im Projektordner (bereits initialisiert):
git add .
git commit -m "Initial Lienhard Automation website"

# Repo auf GitHub anlegen (leer, ohne README) und verbinden:
git remote add origin https://github.com/<USER>/lienhard-automation.git
git branch -M main
git push -u origin main
```

---

## 2. Supabase

- [ ] Projekt auf supabase.com angelegt
- [ ] `supabase/schema.sql` im **SQL Editor** ausgeführt
- [ ] Tabelle `contact_submissions` im **Table Editor** sichtbar
- [ ] `Project URL`, `anon`-Key und `service_role`-Key notiert

---

## 3. Vercel

- [ ] Bei [vercel.com](https://vercel.com) mit GitHub angemeldet
- [ ] **New Project** → Repo `lienhard-automation` importiert
- [ ] Framework wird automatisch als **Next.js** erkannt
- [ ] **Environment Variables** gesetzt (für Production *und* Preview):

| Name | Wert |
|------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJ…` |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJ…` (geheim!) |
| `NEXT_PUBLIC_SITE_URL` | `https://lienhard-automation.com` |

- [ ] **Deploy** geklickt → Build erfolgreich
- [ ] Eigene Domain unter **Settings → Domains** verbunden

---

## 4. Funktions-Tests (nach Deployment)

- [ ] Alle Seiten laden: `/`, `/leistungen`, `/unternehmen`, `/referenzen`, `/kontakt`, `/impressum`, `/datenschutz`
- [ ] **Kontaktformular**: Testnachricht senden → Erfolgsmeldung erscheint
- [ ] Eintrag erscheint in Supabase → `contact_submissions`
- [ ] Formular-Validierung: leeres Formular zeigt Fehlermeldungen
- [ ] **Mobile**: Hamburger-Menü öffnet/schliesst, Layout korrekt
- [ ] **Tablet & Desktop**: Layout korrekt
- [ ] Referenzen-**Filter** funktioniert
- [ ] Telefon-/E-Mail-Links funktionieren (`tel:` / `mailto:`)

## 5. SEO & Qualität

- [ ] `https://<domain>/sitemap.xml` lädt
- [ ] `https://<domain>/robots.txt` lädt
- [ ] Seitentitel & Meta-Beschreibungen korrekt (Browser-Tab prüfen)
- [ ] **Lighthouse** (Chrome DevTools): Performance / SEO / A11y / Best Practices
- [ ] Open-Graph-Vorschau prüfen (z. B. [opengraph.xyz](https://www.opengraph.xyz))
- [ ] `og-image.png` in `/public` hinterlegt (sonst fehlt das Social-Vorschaubild)

## 6. Inhalte & Recht (WICHTIG vor Go-Live)

- [ ] **Impressum** durch Kunden/Anwalt geprüft und Platzhalter ersetzt
- [ ] **Datenschutzerklärung** geprüft und Platzhalter ersetzt
- [ ] UID/Handelsregister-/MWST-Nummer eingetragen
- [ ] Logo & Bilder eingesetzt (siehe `public/README-ASSETS.md`)
- [ ] Alle Referenzen/Kundennamen vom Kunden freigegeben

---

## Optional: E-Mail-Benachrichtigung (Resend)

In `app/api/contact/route.ts` an der `TODO`-Stelle einfügen:

```ts
// npm install resend  → und RESEND_API_KEY setzen
import { Resend } from "resend";

if (process.env.RESEND_API_KEY && process.env.CONTACT_NOTIFICATION_TO) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Website <noreply@lienhard-automation.ch>",
    to: process.env.CONTACT_NOTIFICATION_TO,
    subject: `Neue Kontaktanfrage von ${parsed.data.name}`,
    replyTo: parsed.data.email,
    text: `Name: ${parsed.data.name}\nE-Mail: ${parsed.data.email}\n\n${parsed.data.message}`,
  });
}
```

---

## Optional: Karte einbetten (Kontaktseite)

In `app/kontakt/page.tsx` den „Kartenplatzhalter" durch ein `<iframe>` ersetzen
(Google Maps → Teilen → Karte einbetten) oder durch eine OpenStreetMap-Einbettung.
`loading="lazy"` setzen, damit die Performance erhalten bleibt.
