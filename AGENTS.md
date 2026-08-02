# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Durable design decisions

- The site is a minimalist vertical photo journal inspired by the selected direction in `.design-reference/selected-journal-direction.png`.
- Photographs are ordered by publication date, latest first. Do not group them by year, place, subject, or series.
- The user-provided Miami photograph is the first real publication.
- The primary experience is continuous downward scrolling without a visible archive index or publication dates.
- Publication dates remain internal ordering data and are not shown in the interface.
- Photo frames preserve each image's intrinsic aspect ratio without cropping or adding dark side bands.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
