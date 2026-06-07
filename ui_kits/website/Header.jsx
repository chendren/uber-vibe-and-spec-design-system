window.UVS_SITE = window.UVS_SITE || {};

window.UVS_SITE.Header = function Header({ onEnroll }) {
  const { Logo, Button } = window.DS;
  const headerStyle = {
    position: 'sticky', top: 0, zIndex: 30,
    background: 'color-mix(in srgb, var(--sand-50) 82%, transparent)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--color-border)',
  };
  const rowStyle = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 };
  const navStyle = { display: 'flex', alignItems: 'center', gap: 28 };
  return (
    <header style={headerStyle}>
      <div className="wrap">
        <div style={rowStyle}>
          <a href="#top" style={{ display: 'inline-flex' }}><Logo size={30} /></a>
          <nav style={navStyle}>
            <a className="navlink" href="#curriculum">Curriculum</a>
            <a className="navlink" href="#pricing">Pricing</a>
            <a className="navlink" href="#teams">For teams</a>
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button size="sm" onClick={onEnroll}>Save your seat</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
