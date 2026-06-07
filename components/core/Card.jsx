import React from 'react';

const CSS = `
.uvs-card{
  display:flex; flex-direction:column;
  background:var(--color-surface); border:1px solid var(--color-border);
  border-radius:var(--radius-card); padding:var(--space-5);
  box-shadow:var(--shadow-sm);
  transition:transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
}
.uvs-card--flat{ box-shadow:none; }
.uvs-card--raised{ box-shadow:var(--shadow-md); border-color:transparent; }
.uvs-card--interactive{ cursor:pointer; }
.uvs-card--interactive:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); border-color:var(--color-border); }
.uvs-card--sunken{ background:var(--color-surface-sunken); box-shadow:none; }
.uvs-card__eyebrow{
  font-family:var(--font-mono); font-size:11px; font-weight:500; letter-spacing:0.14em;
  text-transform:uppercase; color:var(--color-accent); margin-bottom:10px;
}
.uvs-card__title{
  font-family:var(--font-display); font-size:var(--text-lg); font-weight:500;
  letter-spacing:-0.01em; color:var(--color-text); margin:0 0 6px;
}
.uvs-card__body{ color:var(--color-text-muted); font-size:15px; line-height:1.55; }
`;

let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById('uvs-card-css')) { injected = true; return; }
    const el = document.createElement('style');
    el.id = 'uvs-card-css'; el.textContent = CSS;
    document.head.appendChild(el); injected = true;
  }, []);
}

/** Surface container with optional eyebrow + title, several elevations. */
export function Card({
  variant = 'default', // default | flat | raised | sunken
  interactive = false,
  eyebrow = null,
  title = null,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const cls = [
    'uvs-card',
    variant !== 'default' ? `uvs-card--${variant}` : '',
    interactive ? 'uvs-card--interactive' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {eyebrow && <div className="uvs-card__eyebrow">{eyebrow}</div>}
      {title && <h3 className="uvs-card__title">{title}</h3>}
      {children && <div className="uvs-card__body">{children}</div>}
    </div>
  );
}
