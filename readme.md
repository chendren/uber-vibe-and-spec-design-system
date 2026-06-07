# Uber Vibe and Spec — Design System

> The brand system for **Uber Vibe and Spec**, an independent training company that teaches teams and individuals how to build with **Claude Code**.

This repository is a living design system: brand voice, color, type, spacing, reusable components, and full-screen UI kits. A compiler indexes these files and ships them to consuming projects, so anyone designing an Uber Vibe and Spec artifact — a slide deck, a landing page, a certificate, a workbook — starts on-brand.

---

## 1 · Company & product context

**Uber Vibe and Spec** runs workshops and courses that teach people to build real software with Claude Code (Anthropic's agentic coding tool). We are an **independent training company** — not affiliated with Anthropic. We have our own brand, voice, and visual language.

The name is the curriculum. Modern AI-assisted development swings between two modes, and great builders learn to move fluidly between them:

- **Vibe** — fast, exploratory, conversational. You feel your way toward a solution, let the model riff, and discover the shape of the thing by building it.
- **Spec** — rigorous, structured, intentional. You write the plan, the constraints, and the tests first, then drive the model precisely.

Our whole brand lives in the tension between these two. Warm and cool. Expressive and precise. A flowing serif and a disciplined monospace. The logo says it in one glyph: a **wave** (vibe) resting on a **baseline** (spec).

### Audiences we design for
- Individual developers & engineers leveling up their Claude Code practice
- Engineering teams adopting agentic workflows together
- Bootcamp students & coding beginners
- Technical-but-not-developer folks (PMs, designers, founders)

### Surfaces we produce
- **Slide decks** for live teaching sessions
- A **marketing website / landing page**
- **Certificates of completion**
- **Workbooks / curriculum** documents (print-friendly)

### Source materials
Built from scratch at the client's direction (no prior brand assets or imagery were used). There is no upstream codebase or Figma file; this design system is the source of truth.

---

## 2 · Content fundamentals (voice & tone)

Our voice is **warm, human, and plainspoken** — the same register Anthropic uses for Claude, dialed for a teacher who genuinely wants you to succeed. We are knowledgeable without being smug, and we never talk down to a beginner.

**Principles**
- **Talk to "you," speak as "we."** Address the learner directly ("you'll ship your first agent loop today"). Refer to the company as "we." Avoid the royal/passive third person.
- **Plain words over jargon.** Say "tell Claude what you want," not "issue a natural-language directive." When a technical term is the right term (spec, agent, context, diff), use it and define it once.
- **Encouraging, never hype.** We're warm and optimistic, but we don't promise 10x miracles. Confidence comes from clarity, not exclamation marks.
- **Concrete over abstract.** Lead with what you'll *do* and *build*. Show the command, the prompt, the result.
- **Sentence case everywhere.** Headlines, buttons, nav — sentence case, not Title Case and not ALL CAPS. (The one exception is our mono "spec labels," which are intentionally uppercase — see below.)
- **Short sentences. Generous whitespace.** Let ideas breathe.

**Casing & mechanics**
- Sentence case for all headings and UI labels.
- The product is **Claude Code** (two words, both capitalized). We are **Uber Vibe and Spec** in prose; the wordmark stylizes it as "Uber Vibe & Spec."
- The mono **spec label** (a.k.a. eyebrow/kicker) is UPPERCASE with wide letter-spacing — e.g. `MODULE 03 · SPEC-DRIVEN` — used sparingly as a structural marker.
- Numerals as digits for anything countable ("3 hours," "12 modules").

**Emoji & punctuation**
- **No emoji** in product or marketing surfaces. Our personality comes from words, color, and type — not 🚀.
- Em dashes for asides, the middot ( · ) as a separator in mono labels.
- The tilde `~` is a brand-friendly glyph (it's our wave, and a home-directory nod) — fine in playful mono moments.

**Voice examples**
| Don't | Do |
|---|---|
| "Revolutionize your workflow with cutting-edge AI! 🚀" | "Learn to build real software with Claude Code." |
| "Users will leverage agentic paradigms." | "You'll drive Claude through a full feature — spec, code, and tests." |
| "ENROLL NOW!!!" | "Save your seat" |
| "Our proprietary methodology…" | "Here's how we teach it." |

Tagline candidates in rotation: **"From vibe to spec."** · **"Build it by feel. Ship it by spec."**

---

## 3 · Visual foundations

The system is two-temperature: a warm **clay** (the Vibe) balanced by a cool **teal** (the Spec), grounded in warm **sand** neutrals and a warm near-black **ink**. Nothing is pure grey and nothing is pure white-on-black — every neutral carries a little warmth.

### Color
- **Clay `#C25F3C`** is the primary brand color — terracotta, hand-thrown, human. Used for primary actions, the logo tile, emphasis.
- **Teal `#117C6F`** is our distinct accent — precise and cool, the structural counterweight. Used for links, the "spec" side of things, secondary accents, success-adjacent states.
- **Sand** (`#FCFBF8 → #C4B8A3`) are the surfaces: the page is a warm off-white, cards are true white, sunken areas are pale sand.
- **Ink** (`#1B1813 → #C8BFAC`) is a warm grey ramp ending in a near-black that's brown-black, never blue-black. Body text is `--ink-900`; muted text `--ink-600`.
- Semantic states (success/warning/danger) use dedicated green/amber/red hues kept slightly warm so they sit in the family.
- **Always reference semantic aliases** (`--color-primary`, `--color-text`, `--color-surface`) in product work, not the raw ramps.

### Type
- **Display — Newsreader (serif).** Warm, editorial, optically-sized. Big headlines and slide titles. Weight 400–500, tight tracking, balanced wrapping.
- **Sans — Hanken Grotesk.** A humanist grotesk; the UI and body workhorse. 400 body, 500–600 labels/buttons, 700–800 for the wordmark.
- **Mono — JetBrains Mono.** Code, terminals, keyboard keys, and the signature **spec label** (uppercase, `0.14em` tracking).
- *Substitution note:* these are Google Fonts standing in for licensed faces — see `tokens/fonts.css`.

### Spacing & layout
- **4px base grid** (`--space-1`=4 → `--space-10`=128). Compose with `gap`, not margins.
- Content max width `--container-max` 1200px; prose measure `--container-prose` ~68ch.
- Generous whitespace is a brand feature, not empty space. Let sections breathe.

### Shape & depth
- **Soft, generous radii.** Cards `--radius-card` 18px, buttons 12px, pills 999px. The softness is part of the warmth.
- **Warm, diffuse shadows.** Every shadow is cast in ink (`rgba(27,24,19,…)`), never neutral grey, and is soft/low-opacity. Use sparingly — elevation, not drop-shadow soup.
- **Borders** are hairline (`1px`) in sand for quiet structure; `1.5px` ink for emphasis.

### Backgrounds & motifs
- Default background is flat warm sand — **no gradients as a crutch.** (A single very-soft clay→sand wash is permitted on hero moments; never bluish-purple.)
- The brand **motifs** are geometric and meaningful: flowing **wave lines** (vibe) and a precise **dot grid** (spec), and the hero **vibe-to-spec** banner where waves flatten into a structured baseline. Use them as quiet decoration at low opacity, never busy.
- No photography is required; if used, keep it warm-toned and natural-light. Terminal/code screenshots are welcome and on-brand.

### Motion
- **Calm and intentional.** Ease-out for entrances (`--ease-out`), 120–360ms. Fades and gentle rises (8–16px) — **no bounce, no spring, no infinite loops** on content.
- Respect `prefers-reduced-motion` (the base layer already neutralizes transitions).

### Interaction states
- **Hover:** primary/accent darken one step (`--color-primary-hover`); quiet/ghost elements get a faint sand fill.
- **Press/active:** darken a further step and translate down 1px — a small, physical "thunk." No scaling.
- **Focus:** a 3px soft teal focus ring (`--ring`), always visible for keyboard users.
- **Disabled:** 45% opacity, no pointer.

### Transparency & blur
- Used sparingly: sticky headers get a `backdrop-filter: blur` over a translucent sand. Overlays/scrims are ink at ~45%. Avoid frosted-glass everywhere.

---

## 4 · Iconography

- **System:** [Lucide](https://lucide.dev) — loaded from CDN. Lucide's calm, rounded, **1.75–2px stroke** outline style matches our warm-but-precise personality, and it pairs naturally with Hanken Grotesk. Default size 20–24px, `stroke-width: 1.75`, `currentColor`.
- **Why Lucide (a substitution):** we have no proprietary icon set, and Lucide is open-source, comprehensive, and CDN-available. If you adopt a licensed set later, swap the CDN link and keep the stroke weight consistent.
- **No emoji as icons.** Ever, in product surfaces.
- **The tilde `~`** and the terminal prompt chevron `›` are brand glyphs — fine to use typographically (mono) as iconographic accents.
- Keep icons monochrome (`--color-text` / `--color-text-muted`, or `--color-accent` for active). Don't multicolor them.
- Logos & motifs live in [`assets/`](assets/): `logo-mark.svg`, `logo-mark-mono.svg`, `logo-wordmark.svg`, `motif-waves.svg`, `motif-grid.svg`, `motif-vibe-to-spec.svg`.

Usage (Lucide via CDN):
```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="terminal"></i>
<script>lucide.createIcons();</script>
```

---

## 5 · Index / manifest

**Foundations**
- `styles.css` — root entry point (consumers link this). `@import`s only.
- `tokens/fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `base.css`
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand) shown in the Design System tab.

**Components** (`components/`) — reusable React primitives, namespaced on `window` (run `check_design_system` for the exact namespace):
- `brand/Logo` — wordmark & mark, sizes and themes
- `forms/Button` · `forms/Input`
- `core/Badge` · `core/Card` · `core/Kbd`
- `feedback/Callout`
- `content/Terminal` — a Claude Code session block

**UI kits** (`ui_kits/`)
- `website/` — marketing landing page (hero, curriculum, pricing, footer)

**Slides** (`slides/`) — teaching-deck templates (title, section, content, code demo, vibe-vs-spec comparison, quote, closing).

**Artifacts** (`artifacts/`) — `certificate.html` (completion certificate) and `workbook.html` (curriculum spread). Both are starting points.

**Other**
- `SKILL.md` — Agent-Skills-compatible entry so this system works inside Claude Code.
- `assets/` — logos & motifs.
