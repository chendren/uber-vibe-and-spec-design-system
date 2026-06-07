window.UVS_SITE = window.UVS_SITE || {};

window.UVS_SITE.Curriculum = function Curriculum() {
  const { Card, Badge } = window.DS;
  const modules = [
    { n: '01', t: 'Your first agent loop', d: 'Set up Claude Code, give it context, and ship a real change to a real codebase on day one.', tag: 'Vibe', tv: 'clay' },
    { n: '02', t: 'Reading & steering diffs', d: 'Stay in control. Learn to review, accept, and redirect the agent without losing the thread.', tag: 'Vibe', tv: 'clay' },
    { n: '03', t: 'Spec-driven development', d: 'Write the plan, constraints, and tests first — then let Claude implement against them.', tag: 'Spec', tv: 'teal' },
    { n: '04', t: 'Context engineering', d: 'CLAUDE.md, subagents, and the art of giving the model exactly what it needs.', tag: 'Spec', tv: 'teal' },
    { n: '05', t: 'Testing & refactoring', d: 'Drive large refactors safely. Use tests as guardrails for autonomous work.', tag: 'Spec', tv: 'teal' },
    { n: '06', t: 'Shipping to production', d: 'Reviews, CI, and team workflows. Bring agentic coding to your whole team.', tag: 'Team', tv: 'neutral' },
  ];
  return (
    <section id="curriculum" className="section">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">The curriculum · 6 modules · ~12 hours</span>
          <h2>What you'll learn</h2>
          <p>Hands-on from the first minute. You build, we coach, and you leave with workflows you'll use the next day.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          {modules.map((m) => (
            <Card key={m.n} interactive eyebrow={`Module ${m.n}`} title={m.t}>
              <p style={{ margin: '0 0 16px' }}>{m.d}</p>
              <Badge variant={m.tv} mono>{m.tag}</Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
