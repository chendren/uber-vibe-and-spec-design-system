window.UVS_SITE = window.UVS_SITE || {};

window.UVS_SITE.Quote = function Quote() {
  return (
    <section className="section" style={{ position: 'relative', background: 'var(--ink-900)', overflow: 'hidden' }}>
      <img src="../../assets/motif-vibe-to-spec.svg" aria-hidden="true"
           style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative', textAlign: 'center', maxWidth: 880 }}>
        <blockquote style={{ margin: 0 }}>
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 400,
            lineHeight: 1.25, letterSpacing: '-0.015em', color: 'var(--sand-50)', textWrap: 'balance', margin: 0,
          }}>
            “I came in able to prompt my way to a demo. I left able to ship a feature to production —
            spec, tests, and review — without babysitting every line.”
          </p>
          <footer style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ color: 'var(--sand-50)', fontWeight: 600, fontSize: 15 }}>Priya N.</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, letterSpacing: '0.04em', color: 'var(--ink-400)' }}>
              Staff Engineer · Cohort 14
            </span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
