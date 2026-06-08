# Bild- und Markenassets (vom Kunden bereitzustellen)

Legen Sie die folgenden Dateien in diesen Ordner (`/public`). Die Website
verwendet sie anschliessend automatisch – Dateinamen exakt so übernehmen.

| Datei | Verwendung | Empfohlene Grösse |
|-------|------------|-------------------|
| `logo.svg` | Firmenlogo im Header/Footer (ersetzt den Text-Schriftzug) | Vektor (SVG) |
| `og-image.png` | Vorschaubild beim Teilen (Open Graph / Social Media) | 1200 × 630 px |
| `favicon.ico` | Browser-Tab-Icon (alternativ `app/icon.png`) | 32 × 32 / 48 × 48 px |
| `team-portrait.jpg` | Porträt Ernesto Lienhard (Seite „Unternehmen") | ca. 1000 × 1250 px |
| `anlage-1.jpg` … | Projekt-/Anlagenfotos (Home, Referenzen) | ca. 1600 × 1200 px |

## Hinweise
- Fotos möglichst im Format **WebP** oder **JPG** (komprimiert).
- Next.js optimiert Bilder automatisch über die `next/image`-Komponente.
- Wo aktuell ein **Bildplatzhalter** angezeigt wird, ist im Code mit
  `ASSET PLACEHOLDER` markiert, wo das echte Bild eingesetzt wird.
- Keine urheberrechtlich geschützten Bilder ohne Nutzungsrecht verwenden.
