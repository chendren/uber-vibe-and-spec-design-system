---
name: uber-vibe-and-spec-design
description: Use this skill to generate well-branded interfaces and assets for Uber Vibe and Spec (an independent training company teaching Claude Code workshops), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `readme.md` — the full design guide: brand context, voice, visual foundations, iconography, manifest. **Start here.**
- `styles.css` — single CSS entry point; link it and you get every token + brand defaults. `@import`s `tokens/*.css`.
- `tokens/` — colors, typography, spacing/radii/shadows, fonts (Google Fonts: Newsreader / Hanken Grotesk / JetBrains Mono), base element styles.
- `assets/` — logo mark, wordmark, mono mark, and the wave / dot-grid / vibe→spec motifs (SVG).
- `components/` — React primitives (Logo, Button, Input, Badge, Card, Kbd, Callout, Terminal). Each has a `.jsx`, a `.d.ts` props contract, and a `.prompt.md` with usage.
- `ui_kits/website/` — full marketing landing page recreation (composes the components).
- `slides/` — 1280×720 teaching-deck templates (title, section, content, code demo, comparison, quote, closing).
- `artifacts/` — printable certificate and workbook page.

## The one thing to remember
The brand is a duality: **Vibe** (warm clay, serif, expressive) and **Spec** (cool teal, mono, precise), on warm sand neutrals and warm ink text. Sentence case, plain warm voice, no emoji, no hype. When in doubt, reach for the tokens and the wave-on-baseline logo.
