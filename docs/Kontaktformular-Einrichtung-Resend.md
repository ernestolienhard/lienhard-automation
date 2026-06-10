# Kontaktformular einrichten (Resend)

Diese Anleitung macht das Kontaktformular auf der Website **funktionsfähig**: Eine
abgeschickte Anfrage wird per Resend als E-Mail an dein Postfach (z. B. Outlook /
Microsoft 365) gesendet. Eine Antwort geht automatisch direkt an den Absender.

Du brauchst dafür **kein** Programmieren – nur einige Werte eintragen.
Dauer: ca. 15–20 Minuten (plus Wartezeit für die Domain-Verifizierung).

---

## Überblick: Was passiert?

1. Besucher füllt das Formular aus und klickt „Nachricht senden".
2. Die Website schickt die Daten an Resend.
3. Resend verschickt eine E-Mail an **info@lienhard-automation.ch**.
4. Du liest die E-Mail in Outlook und antwortest direkt dem Absender.

Damit Resend in deinem Namen senden darf, musst du **die Domain
`lienhard-automation.ch` bei Resend verifizieren** (einmalig, über DNS-Einträge).

---

## Schritt 1 – Resend-Konto erstellen

1. Gehe auf **https://resend.com** und klicke **Sign up**.
2. Registriere dich (E-Mail + Passwort oder „Continue with Google/GitHub").
3. Bestätige deine E-Mail-Adresse (Resend schickt dir einen Link).

> Kosten: Der Gratis-Tarif erlaubt 3 000 E-Mails pro Monat / 100 pro Tag –
> für ein Kontaktformular mehr als genug.

---

## Schritt 2 – Domain hinzufügen und verifizieren

Das ist der wichtigste (und einzige etwas technische) Teil.

1. In Resend links auf **Domains** klicken → Button **Add Domain**.
2. Domain eingeben: **`lienhard-automation.ch`** → **Add**.
3. Resend zeigt dir jetzt eine **Liste von DNS-Einträgen** an (meist 3–4 Stück):
   - ein **MX**-Eintrag (für eine „send"-Subdomain),
   - ein **TXT**-Eintrag (SPF, beginnt mit `v=spf1 …`),
   - ein **TXT**- oder **CNAME**-Eintrag für **DKIM** (`resend._domainkey …`),
   - optional ein **DMARC**-Eintrag.

   **Wichtig:** Die genauen Werte sind individuell – immer die anzeigten Werte
   von Resend **kopieren**, nicht abtippen.

4. Diese Einträge musst du dort eintragen, **wo die DNS deiner Domain verwaltet
   wird** – das ist dein **Domain-Registrar / Hoster** (z. B. Hostpoint,
   Infomaniak, Cyon, Switch, GoDaddy …). Vorgehen dort generell:
   - Beim Hoster einloggen → Bereich **„DNS"** / **„Nameserver"** /
     **„DNS-Zone bearbeiten"** öffnen.
   - Für **jeden** von Resend angezeigten Eintrag einen neuen DNS-Eintrag anlegen:
     - **Typ** (MX / TXT / CNAME) wie angegeben wählen,
     - **Name / Host** (z. B. `send`, `resend._domainkey`) einfügen,
     - **Wert / Ziel** (den langen String) einfügen,
     - bei MX zusätzlich die **Priorität** (z. B. 10) eintragen.
   - Speichern.

   > Tipp: Beim **Name/Host**-Feld unterscheiden sich Hoster: Manche wollen nur
   > `send`, andere die volle Form `send.lienhard-automation.ch`. Wenn Resend
   > `send` zeigt und dein Hoster die Domain automatisch anhängt, nur `send`
   > eintragen.

5. Zurück in Resend auf **Verify** / **Verify DNS Records** klicken.
   - Es kann **einige Minuten bis Stunden** dauern, bis die Einträge aktiv sind.
   - Wenn alle Einträge grün/„Verified" sind, ist die Domain bereit.

---

## Schritt 3 – API-Key erstellen

1. In Resend links auf **API Keys** → **Create API Key**.
2. Name z. B. `lienhard-website`, Permission **Full access** (oder „Sending access").
3. **Create** → der Schlüssel (`re_…`) wird **einmalig** angezeigt → **kopieren**
   und sicher zwischenspeichern (z. B. in einer Notiz). Danach ist er nicht mehr
   sichtbar.

---

## Schritt 4 – Werte in Vercel eintragen

1. Auf **https://vercel.com** einloggen → Projekt **lienhard-automation** öffnen.
2. Oben auf **Settings** → links auf **Environment Variables**.
3. Folgende drei Variablen anlegen (jeweils **Add**), bei jeder die Haken bei
   **Production** und **Preview** setzen:

   | Key (Name)                  | Value (Wert)                                          |
   | --------------------------- | ----------------------------------------------------- |
   | `RESEND_API_KEY`            | dein Schlüssel `re_…` aus Schritt 3                   |
   | `CONTACT_NOTIFICATION_TO`   | `info@lienhard-automation.ch`                         |
   | `CONTACT_NOTIFICATION_FROM` | `Lienhard Automation <noreply@lienhard-automation.ch>`|

   - **CONTACT_NOTIFICATION_TO** = wohin du die Anfragen bekommst (dein Postfach).
     Muss eine Adresse sein, die du wirklich liest.
   - **CONTACT_NOTIFICATION_FROM** = Absender. Die **Domain** dahinter
     (`lienhard-automation.ch`) muss in Schritt 2 verifiziert sein. `noreply@`
     existiert nicht als Postfach – das ist nur die Absenderadresse, das ist ok.

4. **Save**.

---

## Schritt 5 – Neu deployen (damit die Werte greifen)

Umgebungsvariablen werden erst nach einem neuen Deploy aktiv.

1. In Vercel oben auf **Deployments**.
2. Beim obersten (neuesten) Eintrag rechts auf das **„⋯"**-Menü → **Redeploy**
   → bestätigen.
3. Warten, bis der Status **Ready** ist.

---

## Schritt 6 – Testen

1. Website öffnen → **Kontakt** → Formular ausfüllen → **Nachricht senden**.
2. Erwartung: grüne Erfolgsmeldung „Vielen Dank für Ihre Anfrage!".
3. In deinem **Outlook-Postfach** sollte die E-Mail ankommen
   (Betreff: „Neue Projektanfrage von …"). Auf **Antworten** drücken → die Antwort
   geht direkt an den Absender.

---

## Schnelltest ohne Domain-Verifizierung (optional)

Wenn du es sofort ausprobieren willst, bevor die DNS-Einträge aktiv sind:

- Setze `CONTACT_NOTIFICATION_FROM` vorübergehend auf:
  `Lienhard Automation <onboarding@resend.dev>`
- **Einschränkung:** Im Testmodus liefert Resend nur an die **E-Mail-Adresse,
  mit der du dich bei Resend registriert hast**. Setze `CONTACT_NOTIFICATION_TO`
  also auf genau diese Adresse.
- Sobald die Domain verifiziert ist, beide Werte auf die echten
  `@lienhard-automation.ch`-Adressen zurückstellen und erneut deployen.

---

## Problembehebung

- **Formular zeigt weiterhin „konnte nicht gesendet werden":**
  - Variablen in Vercel gesetzt? Danach **Redeploy** gemacht?
  - Schreibweise der Variablennamen exakt? (Gross-/Kleinschreibung zählt.)
- **Kein E-Mail-Empfang, aber Erfolgsmeldung im Formular:**
  - In Resend unter **Logs** prüfen, ob die Mail rausging und ob ein Fehler steht.
  - Spam-/Junk-Ordner in Outlook prüfen.
  - Ist die Domain wirklich **„Verified"** und stimmt die `FROM`-Domain?
- **Resend meldet „domain not verified":**
  - DNS-Einträge nochmals kontrollieren; ggf. ist `Name/Host` falsch
    (siehe Tipp in Schritt 2).
  - DNS-Änderungen brauchen manchmal länger – später erneut **Verify** klicken.

---

## Hinweise

- Die Datenschutzerklärung der Website nennt **Resend** bereits als Dienstleister
  für den E-Mail-Versand (in allen 6 Sprachen) – das passt zu diesem Setup.
- Wenn du den **Registrar/Hoster** deiner Domain nennst, kann dir eine genauere,
  hosterspezifische Anleitung für die DNS-Einträge gegeben werden.
