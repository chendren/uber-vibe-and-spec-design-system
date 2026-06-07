The brand button — primary actions (clay), accent actions (teal), and quieter secondary/ghost variants.

```jsx
<Button>Save your seat</Button>
<Button variant="accent" iconRight={<i data-lucide="arrow-right"></i>}>Start the course</Button>
<Button variant="secondary" size="sm">View syllabus</Button>
<Button variant="ghost">Cancel</Button>
```

Variants: `primary` (clay, the main CTA), `accent` (teal, the "spec" action), `secondary` (outlined on surface), `ghost` (text-only). Sizes `sm | md | lg`. Pass `iconLeft` / `iconRight` as nodes; use `as="a"` + `href` for links. Sentence case labels — never ALL CAPS.
