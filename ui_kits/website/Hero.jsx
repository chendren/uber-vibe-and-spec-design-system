window.UVS_SITE = window.UVS_SITE || {};

window.UVS_SITE.Hero = function Hero({ onEnroll }) {
  const { Button, Terminal, Badge } = window.DS;
  return (
    <section id="top" style={{ position: 'relative', paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)' }}>
      <img src="../../assets/motif-waves.svg" aria-hidden="true"
           style={{ position: 'absolute', top: -20, right: -40, width: 520, opacity: 0.5, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 22, alignItems: 'flex-start' }}>
            <Badge variant="teal" mono dot>Live cohorts · remote</Badge>
            <h1 style={{ fontSize: 'var(--text-5xl)', lineHeight: 1.02, margin: 0, letterSpacing: '-0.025em' }}>
              From vibe<br/>to spec.
            </h1>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', margin: 0, maxWidth: '42ch', lineHeight: 1.5 }}>
              Learn to build real software with Claude Code — by feel, then by spec. A hands-on workshop for developers and teams who want to ship.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
              <Button size="lg" onClick={onEnroll}>Save your seat</Button>
              <Button size="lg" variant="secondary" iconRight={<i data-lucide="arrow-right"></i>}>View syllabus</Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6, fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--color-text-subtle)', letterSpacing: '0.02em' }}>
              <i data-lucide="users" style={{ width: 16, height: 16 }}></i>
              2,400+ engineers trained · 4.9/5 average
            </div>
          </div>
          <div className="reveal" style={{ animationDelay: '90ms' }}>
            <Terminal
              title="claude-code — ~/checkout-service"
              lines={[
                { kind: 'comment', text: '# day one — your first agent loop' },
                { kind: 'cmd', text: 'claude "add a coupon code field to checkout"' },
                { kind: 'claude', text: 'Reading the checkout flow… I\'ll add the field, validation, and a test.' },
                { kind: 'output', text: '  edited  src/Checkout.tsx' },
                { kind: 'output', text: '  added   src/Checkout.test.tsx' },
                { kind: 'success', text: '✓ 3 tests passing · ready to review' },
              ]}
              cursor
            />
          </div>
        </div>
      </div>
    </section>
  );
};
