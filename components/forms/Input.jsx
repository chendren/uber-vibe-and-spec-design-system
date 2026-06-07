import React from 'react';

const CSS = `
.uvs-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-sans); }
.uvs-field__label{ font-size:13px; font-weight:600; color:var(--color-text); }
.uvs-field__req{ color:var(--color-primary); margin-left:2px; }
.uvs-input-wrap{ position:relative; display:flex; align-items:center; }
.uvs-input{
  width:100%; height:44px; padding:0 14px; font-family:var(--font-sans); font-size:15px;
  color:var(--color-text); background:var(--color-surface);
  border:1.5px solid var(--color-border); border-radius:var(--radius-md);
  transition:border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
.uvs-input::placeholder{ color:var(--color-text-subtle); }
.uvs-input:hover{ border-color:var(--color-border-strong); }
.uvs-input:focus{ outline:none; border-color:var(--color-accent); box-shadow:var(--ring); }
.uvs-input--icon{ padding-left:42px; }
.uvs-input-wrap__icon{ position:absolute; left:13px; display:flex; color:var(--color-text-subtle); pointer-events:none; }
.uvs-input-wrap__icon svg{ width:18px; height:18px; }
.uvs-field--error .uvs-input{ border-color:var(--color-danger); }
.uvs-field--error .uvs-input:focus{ box-shadow:0 0 0 3px color-mix(in srgb, var(--color-danger) 30%, transparent); }
.uvs-field__hint{ font-size:12px; color:var(--color-text-subtle); }
.uvs-field__hint--error{ color:var(--color-danger); }
.uvs-input:disabled{ opacity:0.5; cursor:not-allowed; background:var(--color-surface-sunken); }
`;

let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById('uvs-input-css')) { injected = true; return; }
    const el = document.createElement('style');
    el.id = 'uvs-input-css'; el.textContent = CSS;
    document.head.appendChild(el); injected = true;
  }, []);
}

/** Labeled text input with optional leading icon, hint, and error state. */
export function Input({
  label,
  hint,
  error = null,
  required = false,
  iconLeft = null,
  id,
  className = '',
  ...rest
}) {
  useStyles();
  const autoId = React.useId();
  const fieldId = id || autoId;
  return (
    <div className={['uvs-field', error ? 'uvs-field--error' : '', className].filter(Boolean).join(' ')}>
      {label && (
        <label className="uvs-field__label" htmlFor={fieldId}>
          {label}{required && <span className="uvs-field__req">*</span>}
        </label>
      )}
      <div className="uvs-input-wrap">
        {iconLeft && <span className="uvs-input-wrap__icon">{iconLeft}</span>}
        <input
          id={fieldId}
          className={['uvs-input', iconLeft ? 'uvs-input--icon' : ''].filter(Boolean).join(' ')}
          aria-invalid={!!error}
          {...rest}
        />
      </div>
      {(error || hint) && (
        <span className={['uvs-field__hint', error ? 'uvs-field__hint--error' : ''].filter(Boolean).join(' ')}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
