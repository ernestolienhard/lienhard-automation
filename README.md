# Lienhard Automation GmbH — Website

Moderne, mehrsprachenfähige Unternehmenswebsite für **Lienhard Automation GmbH**
(industrielle Automation, Maschinen- und Anlagenbau).

Gebaut mit **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** und
**Supabase** (Kontaktformular). Deployment über **Vercel**.

---

## 🧱 Tech-Stack

| Bereich | Technologie |
|---------|-------------|
| Framework | Next.js 14 (App Router) |
| Sprache | TypeScript |
| Styling | Tailwind CSS (custom Design-Tokens) |
| Animation | Framer Motion (dezent, nur Scroll-Fade) |
| Datenbank | Supabase (Postgres) – Kontaktanfragen |
| Validierung | Zod (Client **und** Server) |
| Hosting | Vercel |
| Icons | Inline-SVG (keine Icon-Library → kleines Bundle) |

---

## 📁 Projektstruktur

```
src/
├─ app/                  # Seiten (App Router)
│  ├─ layout.tsx         # Root-Layout, Metadaten, Header/Footer, JSON-LD
│  ├─ page.tsx           # Startseite
│  ├─ leistungen/        # Leistungen
│  ├─ unternehmen/       # Unternehmen / Über uns
│  ├─ referenzen/        # Referenzen (mit Filter)
│  ├─ kontakt/           # Kontakt + Formular
│  ├─ impressum/         # Impressum (Platzhalter)
│  ├─ datenschutz/       # Datenschutz (Platzhalter)
│  ├─ api/contact/       # Server-Route: speichert Anfragen in Supabase
│  ├─ sitemap.ts         # sitemap.xml
│  └─ robots.ts          # robots.txt
├─ components/
│  ├─ layout/            # Header, Footer, Logo, LegalPage
│  ├─ sections/          # Hero, ContactCta, ReferencesGrid
│  ├─ cards/             # ServiceCard, ProjectCard
│  ├─ forms/             # ContactForm
│  └─ ui/                # Container, Section, Button, Reveal, icons
├─ content/              # ⭐ Inhalte als typisierte Daten (hier Texte pflegen)
│  ├─ services.ts        # Leistungen + Vorteile
│  ├─ technologies.ts    # Unterstützte Systeme
│  ├─ partners.ts        # Partner + Kunden
│  └─ references.ts      # Projekte / Referenzen
└─ lib/                  # site.ts (Konfig), validation.ts, supabase/
supabase/
└─ schema.sql            # Datenbank-Schema (in Supabase ausführen)
```

> **Inhalte ändern?** In den meisten Fällen genügt es, die Dateien unter
> `src/content/` und `src/lib/site.ts` zu bearbeiten. Kein Layout-Code nötig.

---

## 🚀 Lokale Entwicklung

Voraussetzung: **Node.js 18.18+** (empfohlen 20+).

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Umgebungsvariablen anlegen
cp .env.example .env.local
#   …und Werte eintragen (siehe unten)

# 3. Entwicklungsserver starten
npm run dev
#   → http://localhost:3000
```

Weitere Befehle:

```bash
npm run build   # Produktions-Build (führt Vercel automatisch aus)
npm run start   # Produktions-Build lokal starten
npm run lint    # ESLint
```

---

## 🔑 Umgebungsvariablen

In `.env.local` (lokal) bzw. in den **Vercel Project Settings → Environment
Variables** (Produktion):

| Variable | Zweck | Geheim? |
|----------|-------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Projekt-URL | nein |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Anon-Key | nein |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-seitiges Speichern der Anfragen | **JA – nie öffentlich!** |
| `NEXT_PUBLIC_SITE_URL` | Basis-URL für SEO/Sitemap | nein |

> ⚠️ Der `SUPABASE_SERVICE_ROLE_KEY` hat **kein** `NEXT_PUBLIC_`-Präfix und
> wird daher **nie** an den Browser ausgeliefert. Nur in der Server-Route
> `app/api/contact/route.ts` verwendet.

---

## 🗄️ Supabase einrichten

1. Projekt auf [supabase.com](https://supabase.com) öffnen.
2. **SQL Editor → New query** öffnen, Inhalt von [`supabase/schema.sql`](supabase/schema.sql)
   einfügen und ausführen. Das erstellt die Tabelle `contact_submissions`
   inkl. aktivierter Row Level Security.
3. **Project Settings → API**: `Project URL`, `anon public` key und
   `service_role` key kopieren und als Umgebungsvariablen hinterlegen.

**Anfragen ansehen:** Supabase → **Table Editor → contact_submissions**.

### Sicherheitsmodell
- RLS ist aktiv; der **anon**-Key kann die Tabelle **weder lesen noch
  schreiben**.
- Inserts laufen ausschliesslich server-seitig über den **service_role**-Key
  (umgeht RLS) in der API-Route.
- Ein **Honeypot-Feld** + Zod-Validierung (Client & Server) schützen vor Spam
  und ungültigen Daten.

---

## ✉️ (Optional) E-Mail-Benachrichtigungen aktivieren

Aktuell werden Anfragen in Supabase gespeichert. Für eine E-Mail-Benachrichtigung:

1. Account bei [Resend](https://resend.com) erstellen, Domain verifizieren.
2. `RESEND_API_KEY` und `CONTACT_NOTIFICATION_TO` als Env-Vars setzen.
3. In `app/api/contact/route.ts` an der mit `TODO` markierten Stelle den
   Versand ergänzen (Beispielcode im DEPLOYMENT-Guide).

---

## 🌐 Deployment auf Vercel

Kurzfassung (Details siehe [`DEPLOYMENT.md`](DEPLOYMENT.md)):

1. Code zu GitHub pushen.
2. In Vercel **„New Project"** → GitHub-Repo importieren.
3. Umgebungsvariablen eintragen (siehe oben).
4. **Deploy** – Vercel erkennt Next.js automatisch.

---

## 🖼️ Bilder & Logo

Platzhalter sind im Code mit `ASSET PLACEHOLDER` markiert. Die benötigten
Dateien sind in [`public/README-ASSETS.md`](public/README-ASSETS.md) gelistet.
Dateien in `/public` legen → erscheinen automatisch.

---

## 📝 Inhalte weiter pflegen

Siehe [`CLAUDE-EDITING-GUIDE.md`](CLAUDE-EDITING-GUIDE.md) – eine Anleitung, wie
der Kunde die Website mit Claude AI eigenständig weiterentwickeln kann.

---

## ⚖️ Rechtliches

Die Seiten **Impressum** und **Datenschutz** enthalten **Platzhaltertexte** und
sind deutlich als „vom Kunden/Anwalt zu prüfen" markiert. Sie stellen **keine
Rechtsberatung** dar und müssen vor dem Live-Gang geprüft werden.
