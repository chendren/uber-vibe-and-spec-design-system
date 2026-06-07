window.UVS_SITE = window.UVS_SITE || {};

window.UVS_SITE.Footer = function Footer({ onEnroll }) {
  const { Logo, Button } = window.DS;
  const col = (title, links) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-subtle)' }}>{title}</span>
      {links.map((l) => <a key={l} className="navlink" href="#" style={{ fontSize: 14 }}>{l}</a>)}
    </div>
  );
  return (
    <footer>
      {/* final CTA band */}
      <section className="section" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
        <div className="wrap">
          <div style={{
            background: 'var(--clay-500)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-8) var(--space-7)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
            position: 'relative', overflow: 'hidden',
          }}>
            <img src="../../assets/motif-grid.svg" aria-hidden="true" style={{ position: 'absolute', right: -10, top: -10, height: '160%', opacity: 0.25, filter: 'brightness(0) invert(1)' }} />
            <div style={{ position: 'relative' }}>
              <h2 style={{ color: 'var(--sand-50)', margin: '0 0 8px', fontSize: 'var(--text-2xl)' }}>Ready to build with Claude Code?</h2>
              <p style={{ color: 'color-mix(in srgb, var(--sand-50) 88%, transparent)', margin: 0, fontSize: 16 }}>Next cohort starts soon. Seats are limited to keep coaching personal.</p>
            </div>
            <div style={{ position: 'relative', display: 'flex', gap: 12 }}>
              <Button variant="secondary" size="lg" onClick={onEnroll}>Save your seat</Button>
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)' }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 280, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Logo size={28} />
              <p style={{ color: 'var(--color-text-muted)', fontSize: 14, margin: 0, lineHeight: 1.55 }}>
                Independent, hands-on workshops that teach you to build real software with Claude Code.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
              {col('Course', ['Curriculum', 'Pricing', 'For teams', 'Schedule'])}
              {col('Company', ['About', 'Instructors', 'Blog', 'Contact'])}
              {col('Legal', ['Privacy', 'Terms', 'Refunds'])}
            </div>
          </div>
          <div style={{ marginTop: 'var(--space-7)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-subtle)', letterSpacing: '0.02em' }}>
              © 2026 Uber Vibe and Spec · Not affiliated with Anthropic.
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-subtle)' }}>~ &amp; spec</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
