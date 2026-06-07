import React from 'react';

const CSS = `
.uvs-callout{
  display:flex; gap:12px; padding:16px 18px; border-radius:var(--radius-md);
  font-family:var(--font-sans); border:1px solid transparent;
}
.uvs-callout__icon{ flex:none; width:20px; height:20px; display:flex; margin-top:1px; }
.uvs-callout__icon svg{ width:20px; height:20px; }
.uvs-callout__body{ font-size:14.5px; line-height:1.55; color:var(--color-text); }
.uvs-callout__title{ font-weight:600; margin:0 0 3px; }
.uvs-callout__title + *{ color:var(--color-text-muted); }

.uvs-callout--info{ background:var(--color-info-soft); border-color:var(--teal-200); }
.uvs-callout--info .uvs-callout__icon{ color:var(--color-accent); }
.uvs-callout--tip{ background:var(--clay-100); border-color:var(--clay-200); }
.uvs-callout--tip .uvs-callout__icon{ color:var(--color-primary); }
.uvs-callout--success{ background:var(--color-success-soft); border-color:transparent; }
.uvs-callout--success .uvs-callout__icon{ color:var(--color-success); }
.uvs-callout--warning{ background:var(--color-warning-soft); border-color:transparent; }
.uvs-callout--warning .uvs-callout__icon{ color:#8a5e10; }
.uvs-callout--danger{ background:var(--color-danger-soft); border-color:transparent; }
.uvs-callout--danger .uvs-callout__icon{ color:var(--color-danger); }
`;

let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById('uvs-callout-css')) { injected = true; return; }
    const el = document.createElement('style');
    el.id = 'uvs-callout-css'; el.textContent = CSS;
    document.head.appendChild(el); injected = true;
  }, []);
}

/** Inline note / aside with intent color and optional icon + title. */
export function Callout({
  variant = 'info',  // info | tip | success | warning | danger
  icon = null,
  title = null,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  return (
    <div className={['uvs-callout', `uvs-callout--${variant}`, className].filter(Boolean).join(' ')} {...rest}>
      {icon && <span className="uvs-callout__icon">{icon}</span>}
      <div className="uvs-callout__body">
        {title && <p className="uvs-callout__title">{title}</p>}
        <div>{children}</div>
      </div>
    </div>
  );
}
