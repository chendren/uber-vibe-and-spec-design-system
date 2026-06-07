(function () {
  function App() {
    const S = window.UVS_SITE;
    const [enroll, setEnroll] = React.useState(false);
    const open = React.useCallback(() => setEnroll(true), []);
    const close = React.useCallback(() => setEnroll(false), []);

    React.useEffect(() => {
      if (window.lucide) window.lucide.createIcons();
    });

    return (
      <div className="site">
        <S.Header onEnroll={open} />
        <S.Hero onEnroll={open} />
        <S.Thesis />
        <S.Curriculum />
        <S.Pricing onEnroll={open} />
        <S.Quote />
        <S.Footer onEnroll={open} />
        {enroll && <S.EnrollModal onClose={close} />}
      </div>
    );
  }

  window.__dsReady(function () {
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    setTimeout(function () { if (window.lucide) window.lucide.createIcons(); }, 60);
  });
})();
