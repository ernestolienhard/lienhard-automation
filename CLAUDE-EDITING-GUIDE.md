# Website mit Claude AI weiter bearbeiten

Diese Website ist so aufgebaut, dass Sie Inhalte einfach selbst – oder mit Hilfe
von **Claude** (z. B. in Claude Code oder im Web) – anpassen können. Hier die
wichtigsten Stellen und ein paar Beispiel-Anweisungen.

---

## Wo welche Inhalte stehen

| Was Sie ändern möchten | Datei |
|------------------------|-------|
| Firmenname, Adresse, Telefon, E-Mail | `src/lib/site.ts` |
| Navigationspunkte | `src/lib/site.ts` (`mainNav`) |
| Leistungen & Vorteile | `src/content/services.ts` |
| Unterstützte Systeme/Technologien | `src/content/technologies.ts` |
| Partner & Kundennamen | `src/content/partners.ts` |
| Projekte / Referenzen | `src/content/references.ts` |
| Farben / Design-Tokens | `tailwind.config.ts` |
| Rechtstexte | `src/app/impressum/page.tsx`, `src/app/datenschutz/page.tsx` |

> Die meisten Textänderungen brauchen **kein** Programmierwissen – es sind
> einfache Listen in den `content/`-Dateien.

---

## Ein neues Projekt zu den Referenzen hinzufügen

Öffnen Sie `src/content/references.ts` und ergänzen Sie einen Eintrag im Array
`projects`:

```ts
{
  year: "2024",
  title: "Neue Anlage XY",
  location: "Musterstadt, Schweiz",
  category: "abwasser", // abwasser | pharma | stahl | druck | retrofit
  technologies: ["TIA Portal", "WinCC OA"],
  description: "Kurze Beschreibung des Projekts.",
},
```

Speichern → die Karte erscheint automatisch (inkl. Filter).

---

## Beispiel-Anweisungen an Claude

Kopieren Sie eine dieser Anweisungen und geben Sie sie Claude:

- *„Füge in `src/content/references.ts` ein neues Projekt für 2024 hinzu: ARA
  Musterstadt, Steuerung mit TIA Portal, Kategorie abwasser."*
- *„Ändere die Telefonnummer im ganzen Projekt auf +41 44 123 45 67."*
- *„Ersetze den Text-Schriftzug im Header durch das Logo `public/logo.svg`."*
- *„Füge eine neue Seite `/jobs` mit einer Stellenausschreibung hinzu, im
  gleichen Stil wie die anderen Seiten."*
- *„Übersetze die gesamte Website zusätzlich ins Englische (i18n)."*

Claude kennt durch die saubere Projektstruktur die richtigen Dateien.

---

## Änderungen veröffentlichen

1. Datei(en) bearbeiten und speichern.
2. Lokal testen: `npm run dev` → http://localhost:3000
3. Veröffentlichen:
   ```bash
   git add .
   git commit -m "Inhalt aktualisiert"
   git push
   ```
4. Vercel deployt automatisch innerhalb ~1 Minute.

> **Tipp:** Jeder `git push` auf einen Branch erzeugt in Vercel eine
> **Preview-URL** – ideal, um Änderungen vor dem Live-Gang zu prüfen.

---

## Gut zu wissen

- **Sicherheit:** Geheime Schlüssel stehen nur in den Vercel-Umgebungsvariablen,
  nie im Code.
- **Performance:** Bilder über `next/image` einbinden lassen – Claude kennt das
  Muster.
- **Kein Risiko:** Dank Git und Vercel-Previews lässt sich jede Änderung
  rückgängig machen.
