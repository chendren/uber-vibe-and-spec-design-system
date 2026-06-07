window.UVS_SITE = window.UVS_SITE || {};

window.UVS_SITE.Pricing = function Pricing({ onEnroll }) {
  const { Button, Badge } = window.DS;
  const tiers = [
    { name: 'Individual', price: '$490', unit: '/ seat', blurb: 'For one developer leveling up.', cta: 'Save your seat', variant: 'secondary', featured: false,
      features: ['All 6 live modules', 'Cohort of ~20, remote', 'Lifetime access to recordings', 'Certificate of completion'] },
    { name: 'Team', price: '$390', unit: '/ seat', blurb: 'For squads adopting Claude Code together.', cta: 'Bring your team', variant: 'primary', featured: true,
      features: ['Everything in Individual', 'Private cohort for 5–20', 'Tailored to your codebase', 'Team workflow playbook', 'Slack support for 30 days'] },
    { name: 'Enterprise', price: 'Custom', unit: '', blurb: 'For org-wide rollouts and enablement.', cta: 'Talk to us', variant: 'secondary', featured: false,
      features: ['Everything in Team', 'Multiple cohorts & schedules', 'Security & procurement support', 'Dedicated success manager'] },
  ];
  return (
    <section id="pricing" className="section" style={{ background: 'var(--color-surface-sunken)' }}>
      <div className="wrap" id="teams">
        <div className="sec-head">
          <span className="eyebrow">Pricing</span>
          <h2>Pick a way in</h2>
          <p>Every cohort is live, remote, and capped so you get real coaching — not a video to watch alone.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--space-5)', alignItems: 'start' }}>
          {tiers.map((t) => (
            <div key={t.name} style={{
              position: 'relative', background: 'var(--color-surface)',
              border: t.featured ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)',
              boxShadow: t.featured ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
              transform: t.featured ? 'translateY(-8px)' : 'none',
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              {t.featured && (
                <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)' }}>
                  <Badge variant="solid" mono>Most popular</Badge>
                </div>
              )}
              <div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 18, margin: '0 0 4px', letterSpacing: '-0.01em' }}>{t.name}</h3>
                <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: 14 }}>{t.blurb}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--color-text)' }}>{t.price}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-text-subtle)' }}>{t.unit}</span>
              </div>
              <Button variant={t.variant} fullWidth onClick={onEnroll}>{t.cta}</Button>
              <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0 0', display: 'flex', flexDirection: 'column', gap: 11 }}>
                {t.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14.5, color: 'var(--color-text)' }}>
                    <i data-lucide="check" style={{ width: 17, height: 17, color: 'var(--color-accent)', flex: 'none', marginTop: 2 }}></i>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
