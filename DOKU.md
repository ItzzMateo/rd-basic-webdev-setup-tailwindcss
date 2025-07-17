# DOKU

## Bildoptimierung

Für automatische Bildoptimierung kannst du das Plugin `vite-imagetools` nutzen:

1. Installiere: `npm install --save-dev vite-imagetools`
2. In `vite.config.js` importieren und zu den Plugins hinzufügen:
   ```js
   import { imagetools } from "vite-imagetools";
   plugins: [
     // ...
     imagetools(),
   ];
   ```
3. Im Code:
   ```js
   import img from "./assets/img/pic.jpg?w=400;800&format=webp;png&as=picture";
   ```

## Bundle-Analyse

1. Installiere: `npm install --save-dev rollup-plugin-visualizer`
2. In `vite.config.js` importieren und zu den Plugins hinzufügen:
   ```js
   import { visualizer } from "rollup-plugin-visualizer";
   plugins: [
     // ...
     visualizer(),
   ];
   ```

## Umgebungsvariablen

- Lege eine `.env`-Datei im Projekt-Root an.
- Alle Variablen mit `VITE_`-Prefix sind im Code über `import.meta.env` verfügbar.
- Aber vergess nicht `NODE_ENV = "production" // production oder deployment` in deine .env rein zu packen

## Häufige Probleme

- **Dependency-Konflikte:** Prüfe die Plugin-Versionen, wenn npm Fehler meldet.
- **Sourcemaps in Produktion:** Deaktiviere Sourcemaps für Produktion, um Quellcode-Leaks zu vermeiden.
- **SVG-Loader:** Nutze den nativen SVG-Import von Vite oder ein aktuelles Plugin wie `vite-plugin-svg-icons`.
