import React from 'react';

const CSS = `
.uvs-badge{
  display:inline-flex; align-items:center; gap:6px;
  font-family:var(--font-sans); font-weight:600; font-size:12px; line-height:1;
  padding:5px 10px; border-radius:var(--radius-pill); white-space:nowrap;
  border:1px solid transparent;
}
.uvs-badge--mono{ font-family:var(--font-mono); font-weight:500; letter-spacing:0.06em; }
.uvs-badge__dot{ width:6px; height:6px; border-radius:50%; background:currentColor; }
.uvs-badge--clay{    color:var(--clay-700);  background:var(--clay-100);  border-color:var(--clay-200); }
.uvs-badge--teal{    color:var(--teal-700);  background:var(--teal-100);  border-color:var(--teal-200); }
.uvs-badge--neutral{ color:var(--ink-700);   background:var(--sand-100);  border-color:var(--sand-300); }
.uvs-badge--success{ color:var(--green-500); background:var(--color-success-soft); border-color:transparent; }
.uvs-badge--warning{ color:#8a5e10;          background:var(--color-warning-soft); border-color:transparent; }
.uvs-badge--danger{  color:var(--red-500);   background:var(--color-danger-soft); border-color:transparent; }
.uvs-badge--solid{   color:var(--color-on-primary); background:var(--color-primary); border-color:transparent; }
`;

let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById('uvs-badge-css')) { injected = true; return; }
    const el = document.createElement('style');
    el.id = 'uvs-badge-css'; el.textContent = CSS;
    document.head.appendChild(el); injected = true;
  }, []);
}

/** Small status / category label. */
export function Badge({
  variant = 'neutral', // clay | teal | neutral | success | warning | danger | solid
  dot = false,
  mono = false,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const cls = ['uvs-badge', `uvs-badge--${variant}`, mono ? 'uvs-badge--mono' : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot && <span className="uvs-badge__dot" />}
      {children}
    </span>
  );
}
