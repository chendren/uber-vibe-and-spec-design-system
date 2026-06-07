Surface container for grouped content — feature cards, module cards, pricing tiers.

```jsx
<Card eyebrow="Module 03" title="Spec-driven development">
  Write the plan, the constraints, and the tests first — then drive Claude precisely.
</Card>
<Card variant="raised" interactive>…</Card>
```

Variants: `default` (subtle shadow + border), `flat` (no shadow), `raised` (bigger shadow, no border), `sunken` (pale sand, recessed). Add `interactive` for clickable cards (hover lift). `eyebrow` renders as a mono spec label; `title` in the serif display face.
