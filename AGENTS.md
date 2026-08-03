# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Durable design decisions

- The project and browser tab title are `Vestigia`; keep the provided original DRT mountain logo unchanged as the browser icon.
- The site is a minimalist vertical photo journal inspired by the selected direction in `.design-reference/selected-journal-direction.png`.
- Photographs are ordered by publication date, latest first. Do not group them by year, place, subject, or series.
- The user-provided Miami photograph is the first real publication.
- The primary experience is continuous downward scrolling without a visible archive index or publication dates.
- Publication dates remain internal ordering data and are not shown in the interface.
- Photo frames preserve each image's intrinsic aspect ratio without cropping or adding dark side bands.
- A fixed right-side progress bar uses the neon accent and fills according to page scroll position.
- The primary navigation highlights only the currently selected or visible section in neon; inactive links remain white.
- Use only the site's single neon-green accent color for every photograph glow.
- Keep photo glows uniform and very thin on the left edge only, exactly matching the image height with a soft horizontal blur; never add vertical color gradients or light the top, bottom, and right edges.
- Background photo titles respond to content: nature and memory use italic serif, city, technology, and architecture use condensed sans serif, and objects, signs, and graphic material use monospace. Size them according to word length and align them farther right so photographs do not obscure them.
- Apply film texture selectively without modifying the source images: landscapes, travel, skies, and night scenes may receive a restrained 35mm light leak; only especially atmospheric photographs receive a subtle film burn; documentary photographs receive very light animated grain. Never add effects to images that already contain strong analog treatments or to screenshots, text, illustrations, artworks, logos, and graphics.
- Light leaks appear on exactly six selected photographs, each using one distinct project-local raster texture generated from the user's analog-film reference. Do not add them elsewhere, replace them with clean CSS gradients, or apply them to entries that already contain an analog treatment. Keep their grain on a separate, much subtler layer.
- The About statement uses concise, reflective language and a vertical neon-green line as its visual anchor.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
