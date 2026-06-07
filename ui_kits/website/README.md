# Marketing website — UI kit

A high-fidelity recreation of the Uber Vibe and Spec marketing landing page. It composes the design-system component primitives (Button, Input, Badge, Card, Terminal, Logo) and the brand tokens — it does not re-implement them.

## Run it
Open `index.html`. It loads the compiled DS bundle (`_ds_bundle.js`); if the bundle isn't served (e.g. mid-edit), a small inline fallback transpiles the component sources directly so the page always renders.

## Structure
- `index.html` — shell: fonts, tokens, layout CSS, the DS runtime loader, and `<script>` tags for each section.
- `Header.jsx` — sticky translucent nav with logo + CTA.
- `Hero.jsx` — headline, value prop, CTAs, and a live Terminal demo.
- `Thesis.jsx` — the Vibe × Spec two-column thesis.
- `Curriculum.jsx` — 6 module cards.
- `Pricing.jsx` — three tiers (Team featured).
- `Quote.jsx` — testimonial on ink with the vibe→spec motif.
- `Footer.jsx` — final CTA band + footer.
- `EnrollModal.jsx` — interactive enroll flow (form → success state).
- `app.jsx` — composes everything and manages modal state.

## Interactions
- Any "Save your seat" / pricing CTA opens the enroll modal.
- The modal has a working form with cohort selection and a submitted success state; `Esc` or backdrop click closes it.

## Notes
This is a cosmetic recreation for prototyping — not production code. Entrance animations are gated behind `prefers-reduced-motion: no-preference` and only animate transform (never opacity), so content is always visible.
