Keyboard shortcut display with physical keycap styling — perfect for teaching Claude Code commands and shortcuts.

```jsx
<Kbd keys={['⌘','K']} />
<Kbd>Esc</Kbd>
<Kbd keys={['Ctrl','C']} />
```

Pass `keys` as an array (joined with "+") or a single child for one cap. Mono font, subtle bottom-border "depth." Inline — sits in a sentence ("press <Kbd keys={['⌘','K']}/> to search").
