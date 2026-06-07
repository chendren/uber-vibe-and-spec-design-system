import React from 'react';

const CSS = `
.uvs-term{
  font-family:var(--font-mono); font-size:13.5px; line-height:1.7;
  background:var(--color-surface-dark); color:var(--sand-100);
  border-radius:var(--radius-lg); overflow:hidden; border:1px solid var(--color-border-dark);
  box-shadow:var(--shadow-lg);
}
.uvs-term__bar{
  display:flex; align-items:center; gap:8px; padding:11px 14px;
  background:rgba(0,0,0,0.22); border-bottom:1px solid var(--color-border-dark);
}
.uvs-term__dot{ width:11px; height:11px; border-radius:50%; flex:none; }
.uvs-term__title{
  margin-left:8px; font-size:11.5px; letter-spacing:0.04em; color:var(--ink-400);
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis; min-width:0;
}
.uvs-term__body{ padding:16px 18px; white-space:pre-wrap; word-break:break-word; }
.uvs-term__line{ display:flex; gap:8px; }
.uvs-term__prompt{ color:var(--teal-300); flex:none; }
.uvs-term__cmd{ color:var(--sand-50); }
.uvs-term__comment{ color:var(--ink-400); }
.uvs-term__output{ color:var(--sand-300); }
.uvs-term__success{ color:#7FD7A8; }
.uvs-term__claude{ color:var(--clay-300); display:flex; gap:8px; }
.uvs-term__claude::before{ content:"●"; color:var(--clay-400); }
.uvs-term__cursor{
  display:inline-block; width:8px; height:1.1em; background:var(--clay-400);
  vertical-align:text-bottom; animation:uvs-blink 1.1s steps(1) infinite;
}
@keyframes uvs-blink{ 50%{ opacity:0; } }
@media (prefers-reduced-motion: reduce){ .uvs-term__cursor{ animation:none; } }
`;

let injected = false;
function useStyles() {
  React.useEffect(() => {
    if (injected || document.getElementById('uvs-term-css')) { injected = true; return; }
    const el = document.createElement('style');
    el.id = 'uvs-term-css'; el.textContent = CSS;
    document.head.appendChild(el); injected = true;
  }, []);
}

/** Stylized Claude Code terminal session block. */
export function Terminal({
  title = 'claude-code — ~/project',
  prompt = '~ ❯',
  lines = [],
  showChrome = true,
  cursor = false,
  className = '',
  ...rest
}) {
  useStyles();
  return (
    <div className={['uvs-term', className].filter(Boolean).join(' ')} {...rest}>
      {showChrome && (
        <div className="uvs-term__bar">
          <span className="uvs-term__dot" style={{ background: 'var(--clay-400)' }} />
          <span className="uvs-term__dot" style={{ background: 'var(--amber-500)' }} />
          <span className="uvs-term__dot" style={{ background: 'var(--teal-400)' }} />
          <span className="uvs-term__title">{title}</span>
        </div>
      )}
      <div className="uvs-term__body">
        {lines.map((l, i) => {
          const kind = l.kind || 'output';
          if (kind === 'cmd' || kind === 'command') {
            return (
              <div className="uvs-term__line" key={i}>
                <span className="uvs-term__prompt">{prompt}</span>
                <span className="uvs-term__cmd">{l.text}</span>
              </div>
            );
          }
          return <div className={`uvs-term__${kind}`} key={i}>{l.text}</div>;
        })}
        {cursor && <span className="uvs-term__cursor" />}
      </div>
    </div>
  );
}
