The brand's signature content block — a stylized Claude Code terminal session. Use it in heroes, lesson pages, and slides to show real commands and Claude's responses.

```jsx
<Terminal
  title="claude-code — ~/auth-service"
  lines={[
    { kind: 'comment', text: '# Module 03 — spec-driven' },
    { kind: 'cmd', text: 'claude "write a spec for the login flow"' },
    { kind: 'claude', text: "I'll draft a spec with the auth states, edge cases, and tests…" },
    { kind: 'success', text: '✓ spec/login.md created' },
  ]}
  cursor
/>
```

Line `kind`s: `comment` (muted `#` notes), `cmd` (prefixed with the teal `~ ❯` prompt), `output`, `success` (green), `claude` (clay, prefixed with ●). Set `cursor` for a blinking caret, `showChrome={false}` to drop the window bar. Always dark-surfaced — don't put it on light without a frame.
