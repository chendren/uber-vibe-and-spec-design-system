The Uber Vibe and Spec logo — use whenever the brand needs to be present (headers, footers, slide title cards, certificates).

```jsx
<Logo variant="lockup" size={36} />
<Logo variant="mark" size={48} />
<Logo variant="wordmark" theme="dark" size={28} />
```

Variants: `mark` (just the wave-on-baseline tile), `wordmark` (text only), `lockup` (mark + text, the default). Set `theme="dark"` on ink/dark backgrounds so the wordmark text flips to cream. `size` is the mark height in px; the wordmark scales from it. The mark itself is always clay + cream + teal — don't recolor it.
