Inline note / aside for tips, warnings, and callouts inside lessons, docs, and workbooks.

```jsx
<Callout variant="tip" icon={<i data-lucide="lightbulb"></i>} title="Vibe first">
  Don't over-spec a throwaway prototype. Feel out the shape, then formalize.
</Callout>
<Callout variant="warning" icon={<i data-lucide="alert-triangle"></i>}>
  Always review the diff before you accept it.
</Callout>
```

Variants: `info` (teal), `tip` (clay), plus `success` / `warning` / `danger`. Soft tinted background with a full hairline border (not a left-border accent). `title` is optional bold lead-in.
