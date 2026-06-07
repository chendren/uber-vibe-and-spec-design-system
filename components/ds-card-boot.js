// Shared loader for component @dsCard previews.
// Uses the compiled bundle if it's served; otherwise transpiles the component
// sources directly so cards never go blank when _ds_bundle.js isn't published.
// Each card calls: __bootCard('../../')  and defines window.__mount = function(){...}
(function () {
  var NS = 'UberVibeAndSpecDesignSystem_37e707';
  var FILES = [
    'components/brand/Logo.jsx',
    'components/forms/Button.jsx',
    'components/forms/Input.jsx',
    'components/core/Badge.jsx',
    'components/core/Card.jsx',
    'components/core/Kbd.jsx',
    'components/feedback/Callout.jsx',
    'components/content/Terminal.jsx'
  ];

  function whenReady(cb) {
    if (document.readyState !== 'loading') cb();
    else document.addEventListener('DOMContentLoaded', cb);
  }

  async function ensureNS(rootRel) {
    if (window[NS] && window[NS].Button) return;
    var ns = window[NS] || (window[NS] = {});
    for (var i = 0; i < FILES.length; i++) {
      var f = FILES[i];
      var s = await (await fetch(rootRel + f)).text();
      s = s.replace(/import\s+React\s+from\s+['"]react['"];?/g, '')
           .replace(/export\s+function/g, 'function');
      var names = [].concat.apply([], [...s.matchAll(/function\s+([A-Z]\w+)\s*\(/g)].map(m => [m[1]]));
      s += '\n' + names.map(n => 'window.' + NS + '.' + n + '=' + n + ';').join('\n');
      new Function('React', Babel.transform(s, { presets: ['react'] }).code)(React);
    }
  }

  window.__bootCard = function (rootRel) {
    ensureNS(rootRel || '../../')
      .then(function () { whenReady(function () { if (window.__mount) window.__mount(); }); })
      .catch(function (e) {
        var r = document.getElementById('root');
        if (r) r.textContent = 'Load error: ' + e.message;
        console.error(e);
      });
  };
})();
