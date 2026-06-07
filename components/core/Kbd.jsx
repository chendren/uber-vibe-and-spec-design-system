import React from 'react';

const CSS = `
.uvs-kbd{
  display:inline-flex; align-items:center; gap:5px; font-family:var(--font-mono);
  vertical-align:middle;
}
.uvs-kbd__key{
  display:inline-flex; align-items:center; justify-content:center;
  min-width:1.9em; height:1.9em; padding:0 0.5em; font-size:13px; font-weight:500;
  color:var(--color-text); background:var(--color-surface);
  border:1px solid var(--color-border-strong); border-bottom-width:2.5px;
  border-radius:var(--radius-sm); box-shadow:var(--shadow-xs);
}
.uvs-kbd__plus{ color:var(--color-text-subtle); font-size:12px; }
`;

let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById('uvs-kbd-css')) { injected = true; return; }
    const el = document.createElement('style');
    el.id = 'uvs-kbd-css'; el.textContent = CSS;
    document.head.appendChild(el); injected = true;
  }, []);
}

/** Keyboard shortcut display. Pass `keys` as an array, or a single child. */
export function Kbd({ keys = null, className = '', children, ...rest }) {
  useStyles();
  const items = keys || (children != null ? [children] : []);
  return (
    <span className={['uvs-kbd', className].filter(Boolean).join(' ')} {...rest}>
      {items.map((k, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="uvs-kbd__plus">+</span>}
          <kbd className="uvs-kbd__key">{k}</kbd>
        </React.Fragment>
      ))}
    </span>
  );
}
