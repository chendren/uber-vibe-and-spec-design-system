import React from 'react';

const CSS = `
.uvs-btn{
  --_bg: var(--color-primary); --_fg: var(--color-on-primary); --_bdr: transparent;
  -webkit-appearance:none; appearance:none;
  display:inline-flex; align-items:center; justify-content:center; gap:0.55em;
  font-family:var(--font-sans); font-weight:600; letter-spacing:-0.005em;
  border:1.5px solid var(--_bdr); background:var(--_bg); color:var(--_fg);
  border-radius:var(--radius-md); cursor:pointer; text-decoration:none;
  transition:background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
  white-space:nowrap; user-select:none;
}
.uvs-btn:focus-visible{ outline:none; box-shadow:var(--ring); }
.uvs-btn:active{ transform:translateY(1px); }
.uvs-btn[disabled]{ opacity:0.45; pointer-events:none; }
.uvs-btn--md{ height:44px; padding:0 20px; font-size:15px; }
.uvs-btn--sm{ height:34px; padding:0 14px; font-size:13px; border-radius:var(--radius-sm); }
.uvs-btn--lg{ height:54px; padding:0 28px; font-size:17px; border-radius:var(--radius-lg); }
.uvs-btn--full{ width:100%; }

.uvs-btn--primary{ --_bg:var(--color-primary); --_fg:var(--color-on-primary); }
.uvs-btn--primary:hover{ background:var(--color-primary-hover); }
.uvs-btn--primary:active{ background:var(--color-primary-active); }

.uvs-btn--accent{ --_bg:var(--color-accent); --_fg:var(--color-on-accent); }
.uvs-btn--accent:hover{ background:var(--color-accent-hover); }
.uvs-btn--accent:active{ background:var(--color-accent-active); }

.uvs-btn--secondary{ --_bg:var(--color-surface); --_fg:var(--color-text); --_bdr:var(--color-border-strong); }
.uvs-btn--secondary:hover{ background:var(--color-surface-sunken); }

.uvs-btn--ghost{ --_bg:transparent; --_fg:var(--color-text); --_bdr:transparent; }
.uvs-btn--ghost:hover{ background:var(--color-surface-sunken); }

.uvs-btn svg{ width:1.15em; height:1.15em; }
`;

let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById('uvs-btn-css')) { injected = true; return; }
    const el = document.createElement('style');
    el.id = 'uvs-btn-css'; el.textContent = CSS;
    document.head.appendChild(el); injected = true;
  }, []);
}

/** Primary call-to-action button with brand variants and sizes. */
export function Button({
  variant = 'primary',  // primary | accent | secondary | ghost
  size = 'md',          // sm | md | lg
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const Tag = as;
  const cls = [
    'uvs-btn', `uvs-btn--${variant}`, `uvs-btn--${size}`,
    fullWidth ? 'uvs-btn--full' : '', className,
  ].filter(Boolean).join(' ');
  return (
    <Tag className={cls} {...rest}>
      {iconLeft}
      {children && <span>{children}</span>}
      {iconRight}
    </Tag>
  );
}
