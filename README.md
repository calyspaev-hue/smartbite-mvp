# SmartBite AI MVP

A functional bilingual (English / Kazakh) browser MVP for the BDA-2406 final exam startup project.

## Run

Open `index.html` directly in a browser, or run:

```bash
python -m http.server 4173
```

Open `http://localhost:4173/smartbite-mvp/`.

## Core journey

Photo/manual ingredients → confirmation → time/preferences → ranked recipes → recipe detail → save/feedback.

## Bilingual support

- Language toggle (EN ↔ KZ) in the header, persisted in localStorage.
- Full translation of navigation, hero, all flow screens, recipe titles/descriptions/steps, buttons, feedback options, toasts, and **error messages** in both languages.
- The core journey can be completed entirely in either language, including switching mid-flow.

## Boundary / error cases (exam requirement)

- **Empty input**: continuing with no ingredients shows a bilingual error.
- **Unknown ingredient word**: unrecognised typed ingredients are rejected with a spelling suggestion.
- **No recipe match**: ingredients with no matching recipe show a fallback empty state with guidance (e.g. add a staple).
- **Saved view empty state**: friendly bilingual message when nothing is saved.

## Technical notes

- Pure static site: HTML + CSS + vanilla JS, no dependencies, no build step.
- The photo input and preview are real browser interactions (FileReader). Recognition is an intentionally transparent demo fallback so the MVP can be tested without API keys.
- Recipes are local deterministic data (6 recipes, EN + KZ). Saved recipes and feedback remain local to the browser (localStorage).
- Language choice and saved recipes persist across visits.

## Figma mockup

See `FIGMA-MOCKUP.md` for the visual system, component list, six-screen layout, and prototype connections. It is ready to recreate in Figma with a 390 × 844 mobile frame.
