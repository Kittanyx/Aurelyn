// App root — nav, language, tweaks integration
const {
  useEffect: useEffA,
  useState: useStateA,
  useRef: useRefA
} = React;
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "ru",
  "accent": "#ff2a1f",
  "showCustomCursor": true,
  "marqueeSpeed": 15,
  "manifestoIntensity": 1
} /*EDITMODE-END*/;
function Nav({
  t,
  lang,
  setLang
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse"
  }), "AURELYN", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)'
    }
  }, ".")), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, t.nav.services), /*#__PURE__*/React.createElement("a", {
    href: "#cases"
  }, t.nav.work), /*#__PURE__*/React.createElement("a", {
    href: "#manifesto"
  }, t.nav.manifesto), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, t.nav.contact)), /*#__PURE__*/React.createElement("div", {
    className: "langswitch"
  }, ["ru", "en", "uz"].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    className: l === lang ? "active" : "",
    onClick: () => setLang(l)
  }, l))));
}
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = useStateA(tweaks.lang || "ru");
  useEffA(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  useEffA(() => {
    if (tweaks.accent) {
      document.documentElement.style.setProperty('--red', tweaks.accent);
      document.documentElement.style.setProperty('--accent', tweaks.accent);
    }
  }, [tweaks.accent]);
  useEffA(() => {
    document.body.classList.toggle('no-cursor', tweaks.showCustomCursor === false);
    if (tweaks.showCustomCursor === false) {
      document.body.style.cursor = 'auto';
      const dot = document.querySelector('.cursor-dot');
      const ring = document.querySelector('.cursor-ring');
      if (dot) dot.style.display = 'none';
      if (ring) ring.style.display = 'none';
    }
  }, [tweaks.showCustomCursor]);
  useEffA(() => {
    const tracks = document.querySelectorAll('.marquee-track');
    tracks.forEach(tr => {
      tr.style.animationDuration = (tweaks.marqueeSpeed || 40) + 's';
    });
  }, [tweaks.marqueeSpeed, lang]);
  const t = window.I18N[lang] || window.I18N.ru;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    t: t,
    lang: lang,
    setLang: l => {
      setLang(l);
      setTweak('lang', l);
    }
  }), /*#__PURE__*/React.createElement("div", {
    id: "top"
  }), /*#__PURE__*/React.createElement(Hero, {
    t: t,
    lang: lang
  }), /*#__PURE__*/React.createElement(Marquee, {
    items: t.marquee
  }), /*#__PURE__*/React.createElement(Services, {
    t: t
  }), /*#__PURE__*/React.createElement(Manifesto, {
    t: t,
    lang: lang
  }), /*#__PURE__*/React.createElement(Cases, {
    t: t
  }),
  /* ===== TESTIMONIALS — TEMPORARILY HIDDEN (uncomment to restore) =====
  React.createElement(Testimonials, { t: t }),
  ===== END TESTIMONIALS HIDDEN ===== */
  /*#__PURE__*/React.createElement(Contact, {
    t: t,
    lang: lang
  }), /*#__PURE__*/React.createElement(Footer, {
    t: t,
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Language"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Site language",
    value: lang,
    options: [{
      label: "RU",
      value: "ru"
    }, {
      label: "EN",
      value: "en"
    }, {
      label: "UZ",
      value: "uz"
    }],
    onChange: v => {
      setLang(v);
      setTweak('lang', v);
    }
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Brand"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Accent color",
    value: tweaks.accent,
    onChange: v => setTweak('accent', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Motion"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Custom cursor",
    value: tweaks.showCustomCursor,
    onChange: v => setTweak('showCustomCursor', v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Marquee speed",
    min: 10,
    max: 120,
    step: 2,
    unit: "s",
    value: tweaks.marqueeSpeed,
    onChange: v => setTweak('marqueeSpeed', v)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));