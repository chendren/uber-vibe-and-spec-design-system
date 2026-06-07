window.UVS_SITE = window.UVS_SITE || {};

window.UVS_SITE.EnrollModal = function EnrollModal({ onClose }) {
  const { Input, Button, Badge, Logo } = window.DS;
  const [submitted, setSubmitted] = React.useState(false);
  const [cohort, setCohort] = React.useState('Cohort 16 · Jun 23');

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const panel = {
    width: 'min(460px, 100%)', background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)',
    boxShadow: 'var(--shadow-xl)', padding: 'var(--space-7)', position: 'relative',
  };
  const closeBtn = {
    position: 'absolute', top: 16, right: 16, width: 34, height: 34, borderRadius: 'var(--radius-pill)',
    border: 'none', background: 'var(--color-surface-sunken)', cursor: 'pointer', display: 'flex',
    alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)',
  };

  const cohorts = ['Cohort 16 · Jun 23', 'Cohort 17 · Jul 14', 'Cohort 18 · Aug 4'];

  return (
    <div className="modal-scrim" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={panel} className="modal-panel" role="dialog" aria-modal="true">
        <button style={closeBtn} onClick={onClose} aria-label="Close"><i data-lucide="x" style={{ width: 18, height: 18 }}></i></button>

        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Badge variant="teal" mono dot>Saving your seat</Badge>
              <h3 style={{ fontSize: 'var(--text-2xl)', margin: '4px 0 0' }}>Join the next cohort</h3>
              <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: 15 }}>Live, remote, capped at ~20. We'll email the schedule and an invoice.</p>
            </div>
            <Input label="Full name" placeholder="Ada Lovelace" required iconLeft={<i data-lucide="user"></i>} />
            <Input label="Work email" type="email" placeholder="you@company.com" required iconLeft={<i data-lucide="mail"></i>} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text)' }}>Pick a cohort</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {cohorts.map((c) => (
                  <label key={c} style={{
                    display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', cursor: 'pointer',
                    border: `1.5px solid ${cohort === c ? 'var(--color-accent)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-md)', background: cohort === c ? 'var(--color-accent-soft)' : 'var(--color-surface)',
                    transition: 'all var(--dur-fast) var(--ease-out)',
                  }}>
                    <input type="radio" name="cohort" checked={cohort === c} onChange={() => setCohort(c)} style={{ accentColor: 'var(--color-accent)' }} />
                    <span style={{ fontSize: 14.5, fontWeight: 500 }}>{c}</span>
                  </label>
                ))}
              </div>
            </div>
            <Button type="submit" size="lg" fullWidth iconRight={<i data-lucide="arrow-right"></i>}>Save my seat</Button>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--color-text-subtle)', textAlign: 'center', margin: 0 }}>
              No payment today · 14-day refund
            </p>
          </form>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', textAlign: 'center', padding: '12px 0' }}>
            <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-pill)', background: 'var(--color-success-soft)', color: 'var(--color-success)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i data-lucide="check" style={{ width: 32, height: 32 }}></i>
            </div>
            <h3 style={{ fontSize: 'var(--text-2xl)', margin: 0 }}>You're on the list</h3>
            <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: 15, maxWidth: '34ch' }}>
              We saved your seat for <strong style={{ color: 'var(--color-text)' }}>{cohort}</strong>. Check your inbox for the schedule and next steps.
            </p>
            <Button variant="secondary" onClick={onClose}>Done</Button>
          </div>
        )}
      </div>
    </div>
  );
};
