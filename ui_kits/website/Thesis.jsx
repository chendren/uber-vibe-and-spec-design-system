window.UVS_SITE = window.UVS_SITE || {};

window.UVS_SITE.Thesis = function Thesis() {
  const { Badge } = window.DS;

  const Side = ({ accent, badgeVariant, kicker, title, body, points, icon }) => (
    <div style={{
      flex: 1, background: 'var(--color-surface)', border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-xl)', padding: 'var(--space-7)', display: 'flex', flexDirection: 'column', gap: 16,
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `var(--color-${accent}-soft)`, color: `var(--color-${accent})`,
      }}>
        <i data-lucide={icon} style={{ width: 26, height: 26 }}></i>
      </div>
      <Badge variant={badgeVariant} mono>{kicker}</Badge>
      <h3 style={{ fontSize: 'var(--text-2xl)', margin: 0 }}>{title}</h3>
      <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: 'var(--text-md)', lineHeight: 1.55 }}>{body}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {points.map((p, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: 'var(--color-text)' }}>
            <i data-lucide="check" style={{ width: 18, height: 18, color: `var(--color-${accent})`, flex: 'none', marginTop: 2 }}></i>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="section" style={{ background: 'var(--color-surface-sunken)' }}>
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">The two modes of building with AI</span>
          <h2>Great builders move fluidly between them.</h2>
          <p>Our whole curriculum lives in the tension between feeling your way forward and engineering with intent.</p>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'stretch' }}>
          <Side
            accent="primary" badgeVariant="clay" kicker="Vibe" icon="waves"
            title="Build it by feel"
            body="Fast, exploratory, conversational. Discover the shape of the thing by building it with Claude at your side."
            points={['Prompt your way to a working prototype', 'Read and steer the diff in real time', 'Know when good enough is good enough']}
          />
          <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-subtle)' }}>
            <i data-lucide="arrow-right" style={{ width: 28, height: 28 }}></i>
          </div>
          <Side
            accent="accent" badgeVariant="teal" kicker="Spec" icon="ruler"
            title="Ship it by spec"
            body="Rigorous, structured, intentional. Write the plan, the constraints, and the tests — then drive Claude precisely."
            points={['Turn a fuzzy idea into a clear spec', 'Constrain the agent with tests and types', 'Review, refactor, and ship with confidence']}
          />
        </div>
      </div>
    </section>
  );
};
