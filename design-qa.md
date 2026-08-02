# Design QA

## Content update — 02 AUG 2026

- Twenty real photographs were added as Entries 002–021 and the former demo publication was removed.
- A second batch of 38 images was added as Entries 022–059, bringing the journal to 59 publications.
- A third batch of 33 images was added as Entries 060–092, bringing the journal to 92 publications.
- A fourth batch of 15 images was added as Entries 093–107, bringing the journal to 107 publications.
- A fifth batch of 22 images was added as Entries 108–129, bringing the journal to 129 publications.
- The Miami photograph remains Entry 001, published on 01 AUG 2026. Entries 002–129 share the 02 AUG 2026 publication date; the most recently added batch appears first and preserves attachment order.
- The date rail now represents unique publication dates, so multiple photographs published on the same day share one navigation marker.
- The visual measurements and interaction evidence below predate this content-only update. The updated application passes the production build and all Sites worker tests; full visual QA was not rerun.

## Comparison target

- Source visual truth: `.design-reference/selected-journal-direction.png`
- Rendered implementation: `implementation-desktop-final.png`
- Full comparison: `comparison-desktop-final.png` (source left, implementation right)
- Focused metadata comparison: `comparison-meta-focus.png` (source left, implementation right)
- Responsive evidence: `implementation-tablet.png`, `implementation-mobile.png`, `implementation-mobile-second-entry.png`
- Desktop viewport and state: 1440 x 1024 CSS px, first publication, scroll position 0
- Source pixels: 1440 x 1024
- Implementation pixels: 1440 x 1024
- Device scale factor: 1
- Density normalization: none required; source and implementation have matching pixel dimensions

## Findings

No actionable P0, P1, or P2 differences remain.

- Typography: the condensed uppercase navigation, lime date treatment, italic serif entry label, subdued utility copy, and oversized background word preserve the source hierarchy. System font fallbacks avoid a remote-font dependency.
- Spacing and layout: the photograph begins at x=363 and y=128, measures 530 x 716, and aligns with the reference's central portrait composition. Metadata, date rail, navigation, background word, and the next-photo preview preserve the source rhythm.
- Colors and tokens: the aubergine background, paper white, muted grey, electric lime, and blue/orange edge glow match the selected direction. The scrollbar was intentionally subdued after the first comparison.
- Image quality: the user-provided Miami image is used directly, with a non-destructive crop. The second publication is explicitly labelled as a demo image. Both images loaded at their natural dimensions without browser errors.
- Copy and content: publications are described as entries and ordered by publication date. No place, year, subject, or series grouping was added.
- Behavior and accessibility: navigation, archive links, the continue control, active publication date, keyboard focus states, semantic dates, alt text, reduced-motion behavior, and mobile touch targets are implemented.
- Responsiveness: desktop (1440 x 1024), tablet (820 x 1180), and mobile (390 x 844) have no horizontal overflow or overlapping primary content.

## Comparison history

### Iteration 1

- Earlier P2: the desktop photograph and metadata were shifted right and the metadata date was too low.
  - Fix: changed the desktop grid, removed the left content padding, and adjusted metadata vertical padding.
  - Post-fix evidence: `comparison-desktop-final.png`.
- Earlier P2: the large JOURNAL word sat too low and no next photograph appeared at the bottom edge.
  - Fix: moved the word upward and overlapped the following entry by 160 px on wide screens.
  - Post-fix evidence: `comparison-desktop-final.png`.

### Iteration 2

- Earlier P2: the lime browser scrollbar competed with the composition.
  - Fix: replaced it with a thin muted scrollbar.
  - Post-fix evidence: `implementation-desktop-final.png`.
- Earlier P2: the mobile display word created 84 px of document overflow.
  - Fix: reduced its responsive scale and clipped document-level horizontal overflow.
  - Post-fix evidence: `implementation-mobile.png`; measured overflow is negative because the scrollbar consumes part of the viewport.

## Primary interactions tested

- Continue from Entry 001 to Entry 002: scroll position changed to 864 px and the active desktop date changed to `24 JUL 2026`.
- Latest navigation: returned to scroll position 0 and restored `01 AUG 2026` as active.
- Archive navigation: archive section reached the top of the viewport and the heading was visible.
- About navigation: footer copy was visible at the document end.
- Mobile continue: Entry 002 aligned to the viewport top and its image was visible.
- Browser console: zero warnings or errors.

## Follow-up polish

- [P3] The reference shows four illustrative timeline dates while the implementation shows only the two existing publications. This is intentional and will fill naturally as photographs are added.
- [P3] The reference's long decorative scroll guide is simplified to a library arrow icon so the implementation remains clean and accessible.

## Implementation checklist

- [x] Source visual and implementation compared in the same image.
- [x] Focused metadata region compared.
- [x] Desktop, tablet, and mobile checked.
- [x] Primary navigation and vertical scrolling tested.
- [x] Browser console checked.
- [x] Production build and Sites worker tests passed.

final result: passed
