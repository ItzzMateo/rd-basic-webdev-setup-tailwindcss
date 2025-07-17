# RD Basic Webdev Setup

Ein modernes Webentwicklungs-Setup mit Vite, Vitest, ESLint, Stylelint, PWA, Autoprefixer und mehr.

## Features

- Vite als Build-Tool
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

## SaSS Compilen

```bash
sass ./scss/style.sass ./scss/style.css
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
- `src/scss/variables.sass` – SASS-Variablen
- `src/scss/style.sass` – SASS-Main-Datei
- `public/` – Statische Assets

## Hinweise

- Für Bildoptimierung siehe DOKU.md
