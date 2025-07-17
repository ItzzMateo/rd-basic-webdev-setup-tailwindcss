# RD Basic Webdev Setup (Tailwind)

Ein modernes Webentwicklungs-Setup mit Vite, Tailwind CSS, Vitest, ESLint, Stylelint, PWA, Autoprefixer und mehr.

## Features

- Vite als Build-Tool
- Tailwind CSS für Utility-First Styling
- Vitest für Tests
- ESLint & Stylelint für Code-Qualität
- PWA-Unterstützung
- Autoprefixer für CSS
- Alias-Importe
- Umgebungsvariablen via `.env`

## Setup

```bash
npm install
```

## Entwicklung starten

```bash
npm run dev
```

## Tailwind CSS nutzen

Tailwind ist lokal installiert und wird über PostCSS eingebunden. Die Konfiguration findest du in `tailwind.config.js` und `postcss.config.js`.

Tailwind-Klassen kannst du direkt in deinen HTML- und JS-Dateien verwenden. Das generierte CSS wird als `src/css/style.css` eingebunden.

### Wichtige Content-Pfade in `tailwind.config.js`

Damit Tailwind alle Klassen findet, sollten folgende Pfade im `content`-Array stehen:

```js
content: [
  "./src/**/*.html",
  "./src/js/**/*.js",
  "./src/js/**/*.ts",
  // Optional: "./src/**/*.vue", "./src/**/*.jsx", "./src/**/*.tsx"
];
```

## Build für Produktion

```bash
npm run build
```

## Tests ausführen

```bash
npm run test
```

## Umgebungsvariablen

Alle Variablen mit `VITE_`-Prefix in `.env` werden automatisch geladen.

## Ordnerstruktur

- `src/` – Quellcode
- `src/assets/` – Statische Assets (Bilder, Fonts, etc.)
- `src/js/` – JavaScript-Dateien
- `src/css/` – Tailwind-Einstiegspunkt und generiertes CSS
- `src/index.html` – Einstiegspunkt

## Hinweise

- Für Bildoptimierung siehe DOKU.md
