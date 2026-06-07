import React from 'react';

/**
 * Uber Vibe and Spec logo — the wave-on-baseline mark, optionally with wordmark.
 * Self-contained inline SVG so it never depends on asset paths.
 */
export function Logo({
  variant = 'lockup',   // 'mark' | 'wordmark' | 'lockup'
  size = 32,            // mark height in px
  theme = 'light',      // 'light' | 'dark' — wordmark text color
  className = '',
  style = {},
  ...rest
}) {
  const textColor = theme === 'dark' ? 'var(--sand-50)' : 'var(--ink-900)';
  const accentColor = 'var(--teal-500)';

  const Mark = (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden={variant !== 'mark'}>
      <rect width="64" height="64" rx="16" fill="var(--clay-500)" />
      <path d="M15 25 q 8.5 -11 17 0 t 17 0" stroke="var(--sand-50)" strokeWidth="5.5" strokeLinecap="round" fill="none" />
      <line x1="17" y1="42" x2="47" y2="42" stroke="var(--teal-200)" strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  );

  if (variant === 'mark') {
    return (
      <span className={className} style={{ display: 'inline-flex', lineHeight: 0, ...style }} role="img" aria-label="Uber Vibe and Spec" {...rest}>
        {Mark}
      </span>
    );
  }

  const Word = (
    <span style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1, justifyContent: 'center' }}>
      <span style={{
        fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: size * 0.62,
        letterSpacing: '-0.01em', color: textColor, whiteSpace: 'nowrap',
      }}>Uber Vibe</span>
      <span style={{
        fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: size * 0.40,
        letterSpacing: '0.14em', color: accentColor, marginTop: size * 0.06, whiteSpace: 'nowrap',
      }}>&amp; SPEC</span>
    </span>
  );

  if (variant === 'wordmark') {
    return (
      <span className={className} style={{ display: 'inline-flex', ...style }} role="img" aria-label="Uber Vibe and Spec" {...rest}>
        {Word}
      </span>
    );
  }

  // lockup
  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.4, ...style }} role="img" aria-label="Uber Vibe and Spec" {...rest}>
      {Mark}
      {Word}
    </span>
  );
}
