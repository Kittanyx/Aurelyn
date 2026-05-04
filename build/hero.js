// HERO — viewport-fit, big AURELYN wordmark bottom, headline left, rotating black cube right
const {
  useEffect: useEffectH,
  useRef: useRefH,
  useState: useStateH
} = React;
function Hero({
  t,
  lang
}) {
  const heroRef = useRefH(null);
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    ref: heroRef,
    "aria-label": "hero",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        .hero{
          height:100vh;min-height:680px;width:100%;
          background: radial-gradient(120% 80% at 70% 35%, #ff5b3a 0%, #ff2a1f 35%, #b40d05 75%, #5a0500 100%);
          color:#fff;position:relative;overflow:hidden;isolation:isolate;
          display:flex;flex-direction:column;
        }
        .hero::before{
          content:"";position:absolute;inset:0;
          background-image: repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 6vw);
          opacity:.7;mix-blend-mode:screen;pointer-events:none;
        }
        .hero::after{
          content:"";position:absolute;inset:0;
          background:
            radial-gradient(50% 50% at 50% 0%, rgba(255,255,255,.18) 0%, transparent 60%),
            radial-gradient(60% 60% at 100% 100%, rgba(0,0,0,.55) 0%, transparent 70%);
          pointer-events:none;
        }
        .hero-grain{
          position:absolute;inset:0;pointer-events:none;mix-blend-mode:overlay;opacity:.35;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
        }

        .hero-content{position:relative;z-index:2;flex:1;display:flex;flex-direction:column;min-height:0}

        .hero-top{display:flex;justify-content:space-between;align-items:center;padding:80px 4vw 0;gap:24px;flex-shrink:0}
        .hero-top .meta{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.85);display:flex;gap:24px;align-items:center}
        .hero-top .meta::before{content:"";width:36px;height:1px;background:rgba(255,255,255,.6)}

        .hero-mid{
          flex:1;min-height:0;
          padding:2vh 4vw 2vh;
          display:grid;grid-template-columns: 1.2fr 1fr;gap:3vw;align-items:center;
        }
        @media (max-width:1100px){ .hero-mid{grid-template-columns:1.4fr 1fr;gap:2vw} }
        @media (max-width:780px){ .hero-mid{grid-template-columns:1fr;gap:16px;padding:24px 4vw} }

        .hero-h1{
          font-family:var(--display);
          font-size: clamp(36px, 5.6vw, 96px);
          line-height:.86;letter-spacing:3px;text-transform:uppercase;
          margin:0;color:#fff;mix-blend-mode:plus-lighter;
        }
        .hero-h1 .stroked{color:transparent;-webkit-text-stroke:2px #fff}
        .hero-h1 .row{display:block}

        .hero-sub{max-width:480px;color:rgba(255,255,255,.92);font-size:14px;line-height:1.5;margin-top:18px;font-weight:500}
        .hero-cta-row{display:flex;gap:12px;margin-top:20px;flex-wrap:wrap}
        .hero-cta-row .mag{padding:13px 20px;font-size:11px}

        .hero-tags{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px;font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.75)}
        .hero-tags span{display:inline-flex;align-items:center;gap:8px;padding:5px 10px;border:1px solid rgba(255,255,255,.35);border-radius:999px}
        .hero-tags span::before{content:"";width:6px;height:6px;background:#fff;border-radius:50%}

        /* 3D cube */
        .hero-shape-wrap{position:relative;display:flex;align-items:center;justify-content:center;min-height:0;perspective:1400px}
        .cube-stage{
          width: clamp(180px, 30vh, 340px);
          height: clamp(180px, 30vh, 340px);
          position:relative;transform-style:preserve-3d;
          will-change:transform;
        }
        @media (max-width:780px){
          .cube-stage{ width: clamp(140px, 38vw, 200px); height: clamp(140px, 38vw, 200px); }
        }
        .cube{
          position:absolute;inset:0;
          transform-style:preserve-3d;
          animation:cubeSpin 18s linear infinite;
          will-change:transform;
        }
        @keyframes cubeSpin{
          from{transform: rotateX(-16deg) rotateY(0deg)}
          to{transform: rotateX(-16deg) rotateY(360deg)}
        }
        .cube .face{
          position:absolute;inset:0;
          background:
            linear-gradient(135deg, #1a1a1c 0%, #0a0a0b 60%, #050505 100%);
          border:1px solid rgba(255,255,255,.10);
          display:flex;align-items:center;justify-content:center;
          color:#fff;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.04), inset 0 0 60px rgba(0,0,0,.6);
        }
        .cube .face::after{
          content:"";position:absolute;inset:0;pointer-events:none;
          background: linear-gradient(135deg, rgba(255,255,255,.08) 0%, transparent 35%, transparent 65%, rgba(0,0,0,.4) 100%);
        }
        .cube .face .label{
          position:absolute;left:14px;bottom:12px;font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.85);z-index:2
        }
        .cube .face .corner{
          position:absolute;right:14px;top:12px;font-family:var(--mono);font-size:10px;letter-spacing:.18em;color:rgba(255,255,255,.4);z-index:2
        }
        .cube .face svg.icon{width:42%;height:42%;color:#fff;z-index:1;position:relative}

        .cube-glow{
          position:absolute;inset:-15%;z-index:-1;
          background: radial-gradient(closest-side, rgba(255,255,255,.22) 0%, transparent 70%);
          filter:blur(36px);
        }

        .shape-badge{
          position:absolute;right:0;top:6%;
          background:#000;color:#fff;
          padding:11px 14px;
          font-family:var(--mono);font-size:10px;line-height:1.4;letter-spacing:.16em;text-transform:uppercase;
          max-width:170px;z-index:5;transform:rotate(-2deg);
          box-shadow:0 20px 40px rgba(0,0,0,.4);
        }
        .shape-badge::before{
          content:"";position:absolute;left:-12px;top:18px;border:6px solid transparent;border-right-color:#000;
        }
        .shape-badge .red{color:var(--red)}

        .glitching{animation: glitch .22s steps(2) both}
        @keyframes glitch{
          0%,100%{filter:none}
          20%{filter:hue-rotate(20deg) contrast(1.4); transform:translate(-4px,2px)}
          40%{filter:hue-rotate(-10deg); transform:translate(4px,-2px)}
          60%{transform:translate(-2px,3px)}
          80%{transform:translate(2px,-3px)}
        }

        .hero-mark{
          position:relative;font-family:var(--display);color:#fff;
          line-height:.78;letter-spacing:-.045em;text-transform:uppercase;
          font-size: clamp(80px, 18vw, 320px);
          margin:0;padding:0 3vw;white-space:nowrap;text-align:center;
          mix-blend-mode:plus-lighter;user-select:none;flex-shrink:0;
          padding-bottom:0;
        }
        @media (max-width:780px){
          .hero-mark{ font-size: clamp(38px, 11vw, 72px); padding:0 4vw }
        }
        .hero-mark .x{display:inline-block;color:transparent;-webkit-text-stroke:2.5px #fff;margin-left:.04em}

        .hero-bottom-row{
          display:flex;justify-content:space-between;align-items:flex-end;
          padding:0 4vw 18px;flex-shrink:0;font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#fff;
        }
        .hero-bottom-row .live{display:inline-flex;align-items:center;gap:8px}
        .hero-bottom-row .live::before{content:"";width:7px;height:7px;border-radius:50%;background:#fff;box-shadow:0 0 12px #fff;animation:pulse 1.4s ease-in-out infinite}
        .hero-bottom-row .scroll-cue{display:flex;align-items:center;gap:12px}
        .hero-bottom-row .scroll-cue .line{width:50px;height:1px;background:#fff;position:relative;overflow:hidden}
        .hero-bottom-row .scroll-cue .line::after{content:"";position:absolute;left:-30%;top:0;width:30%;height:100%;background:rgba(0,0,0,.6);animation:cue 2s linear infinite}
        @keyframes cue{from{left:-30%}to{left:100%}}
        @media (max-width:780px){
          .hero-bottom-row{display:none}
          .shape-badge{display:none}
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "hero-grain"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, t.hero.eyebrow), /*#__PURE__*/React.createElement("div", {
    className: "meta",
    style: {
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", null, "UZ \xB7 TASHKENT"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-mid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "row"
  }, t.hero.title1), /*#__PURE__*/React.createElement("span", {
    className: "row stroked"
  }, t.hero.title2), /*#__PURE__*/React.createElement("span", {
    className: "row"
  }, t.hero.title3)), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, t.hero.sub), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta-row"
  }, /*#__PURE__*/React.createElement(Magnetic, {
    onClick: () => document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, t.hero.cta, " ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  })), /*#__PURE__*/React.createElement(Magnetic, {
    className: "dark",
    onClick: () => document.getElementById('cases')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, t.hero.cta2)), /*#__PURE__*/React.createElement("div", {
    className: "hero-tags"
  }, /*#__PURE__*/React.createElement("span", null, t.hero.label1), /*#__PURE__*/React.createElement("span", null, t.hero.label2), /*#__PURE__*/React.createElement("span", null, t.hero.label3))), /*#__PURE__*/React.createElement("div", {
    className: "hero-shape-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cube-glow"
  }), /*#__PURE__*/React.createElement(ServiceCube, null), /*#__PURE__*/React.createElement("div", {
    className: "shape-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "red"
  }, "\u25CF"), " BUILT FOR", /*#__PURE__*/React.createElement("br", null), "SPEED.", /*#__PURE__*/React.createElement("br", null), "ENGINEERED", /*#__PURE__*/React.createElement("br", null), "FOR HUMANS."))), /*#__PURE__*/React.createElement("h2", {
    className: "hero-mark",
    "aria-hidden": "true"
  }, "AURELYN", /*#__PURE__*/React.createElement("span", {
    className: "x"
  }, ".")), /*#__PURE__*/React.createElement("div", {
    className: "hero-bottom-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "live"
  }, ""), /*#__PURE__*/React.createElement("span", {
    className: "scroll-cue"
  }, /*#__PURE__*/React.createElement("span", null, "SCROLL"), /*#__PURE__*/React.createElement("span", {
    className: "line"
  })))));
}

// Black rotating cube with white service icons on each face — drag to rotate
function ServiceCube() {
  const stageRef = useRefH(null);
  const cubeRef = useRefH(null);
  const [size, setSize] = useStateH(280);
  useEffectH(() => {
    const el = stageRef.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      if (r.width > 0) setSize(r.width);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Rotation state: auto-spin Y, optional drag override
  useEffectH(() => {
    const cube = cubeRef.current;
    if (!cube) return;
    let rotY = 0,
      rotX = -16;
    let velY = 60; // deg/sec auto Y
    let velX = 40; // deg/sec auto X (slight tilt drift)
    let dragging = false;
    let lastX = 0,
      lastY = 0;
    let dragVelY = velY,
      dragVelX = velX;
    let lastT = performance.now();
    let raf = 0;
    let phase = 0;
    const apply = () => {
      cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    };
    apply();
    const tick = t => {
      const dt = Math.min(0.06, (t - lastT) / 1000);
      lastT = t;
      phase += dt;
      if (!dragging) {
        // gentle wobble on X using sin so the cube tumbles slightly on both axes
        const targetX = velX + Math.sin(phase * 0.5) * 6;
        dragVelY += (velY - dragVelY) * 0.04;
        dragVelX += (targetX - dragVelX) * 0.04;
        rotY += dragVelY * dt;
        rotX += dragVelX * dt;
      }
      apply();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const stage = stageRef.current;
    const onDown = e => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      dragVelY = 0;
      dragVelX = 0;
      stage.setPointerCapture?.(e.pointerId);
      stage.style.cursor = 'grabbing';
      e.preventDefault();
    };
    const onMove = e => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      rotY += dx * 0.5;
      rotX -= dy * 0.5;
      dragVelY = dx * 30;
      dragVelX = -dy * 30;
      apply();
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      stage.style.cursor = 'grab';
    };
    stage.addEventListener('pointerdown', onDown);
    stage.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener('pointerdown', onDown);
      stage.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, []);
  const half = size / 2;
  const faces = [{
    tf: `translateZ(${half}px)`,
    label: "WEB",
    num: "01",
    icon: /*#__PURE__*/React.createElement(IconWeb, null)
  }, {
    tf: `rotateY(90deg) translateZ(${half}px)`,
    label: "SAAS",
    num: "02",
    icon: /*#__PURE__*/React.createElement(IconSaaS, null)
  }, {
    tf: `rotateY(180deg) translateZ(${half}px)`,
    label: "BOTS",
    num: "03",
    icon: /*#__PURE__*/React.createElement(IconBot, null)
  }, {
    tf: `rotateY(-90deg) translateZ(${half}px)`,
    label: "API",
    num: "04",
    icon: /*#__PURE__*/React.createElement(IconAPI, null)
  }, {
    tf: `rotateX(90deg) translateZ(${half}px)`,
    label: "AURELYN",
    num: "●",
    icon: /*#__PURE__*/React.createElement(IconMark, null)
  }, {
    tf: `rotateX(-90deg) translateZ(${half}px)`,
    label: "2026",
    num: "∞",
    icon: /*#__PURE__*/React.createElement(IconInfinity, null)
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "cube-stage",
    ref: stageRef,
    style: {
      cursor: 'grab',
      touchAction: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cube",
    ref: cubeRef,
    style: {
      animation: 'none'
    }
  }, faces.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "face",
    key: i,
    style: {
      transform: f.tf
    }
  }, f.icon, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, f.label), /*#__PURE__*/React.createElement("span", {
    className: "corner"
  }, f.num)))));
}

// Icons — minimal stroked white SVG
const IconWeb = () => /*#__PURE__*/React.createElement("svg", {
  className: "icon",
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "square"
}, /*#__PURE__*/React.createElement("rect", {
  x: "6",
  y: "12",
  width: "52",
  height: "40",
  rx: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "22",
  x2: "58",
  y2: "22"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "17",
  r: "1.4",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17",
  cy: "17",
  r: "1.4",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "22",
  cy: "17",
  r: "1.4",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("line", {
  x1: "14",
  y1: "32",
  x2: "34",
  y2: "32"
}), /*#__PURE__*/React.createElement("line", {
  x1: "14",
  y1: "38",
  x2: "44",
  y2: "38"
}), /*#__PURE__*/React.createElement("line", {
  x1: "14",
  y1: "44",
  x2: "28",
  y2: "44"
}));
const IconSaaS = () => /*#__PURE__*/React.createElement("svg", {
  className: "icon",
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "square"
}, /*#__PURE__*/React.createElement("rect", {
  x: "6",
  y: "14",
  width: "22",
  height: "14",
  rx: "1"
}), /*#__PURE__*/React.createElement("rect", {
  x: "32",
  y: "14",
  width: "26",
  height: "14",
  rx: "1"
}), /*#__PURE__*/React.createElement("rect", {
  x: "6",
  y: "32",
  width: "26",
  height: "18",
  rx: "1"
}), /*#__PURE__*/React.createElement("rect", {
  x: "36",
  y: "32",
  width: "22",
  height: "18",
  rx: "1"
}), /*#__PURE__*/React.createElement("line", {
  x1: "11",
  y1: "42",
  x2: "11",
  y2: "46"
}), /*#__PURE__*/React.createElement("line", {
  x1: "16",
  y1: "38",
  x2: "16",
  y2: "46"
}), /*#__PURE__*/React.createElement("line", {
  x1: "21",
  y1: "40",
  x2: "21",
  y2: "46"
}), /*#__PURE__*/React.createElement("line", {
  x1: "26",
  y1: "36",
  x2: "26",
  y2: "46"
}));
const IconBot = () => /*#__PURE__*/React.createElement("svg", {
  className: "icon",
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "square"
}, /*#__PURE__*/React.createElement("rect", {
  x: "12",
  y: "18",
  width: "40",
  height: "30",
  rx: "4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "32",
  y1: "10",
  x2: "32",
  y2: "18"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "32",
  cy: "9",
  r: "2",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "24",
  cy: "30",
  r: "2.2",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "40",
  cy: "30",
  r: "2.2",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("line", {
  x1: "24",
  y1: "40",
  x2: "40",
  y2: "40"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "28",
  x2: "6",
  y2: "38"
}), /*#__PURE__*/React.createElement("line", {
  x1: "58",
  y1: "28",
  x2: "58",
  y2: "38"
}));
const IconAPI = () => /*#__PURE__*/React.createElement("svg", {
  className: "icon",
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "square"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "14",
  cy: "32",
  r: "6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "50",
  cy: "18",
  r: "6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "50",
  cy: "46",
  r: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "20",
  y1: "32",
  x2: "44",
  y2: "20"
}), /*#__PURE__*/React.createElement("line", {
  x1: "20",
  y1: "32",
  x2: "44",
  y2: "44"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "6 22 14 26 14 38 6 42"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "58 12 50 8 42 12"
}));
const IconMark = () => /*#__PURE__*/React.createElement("svg", {
  className: "icon",
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "square"
}, /*#__PURE__*/React.createElement("polygon", {
  points: "32 8 56 50 8 50"
}), /*#__PURE__*/React.createElement("line", {
  x1: "20",
  y1: "50",
  x2: "32",
  y2: "28"
}), /*#__PURE__*/React.createElement("line", {
  x1: "44",
  y1: "50",
  x2: "32",
  y2: "28"
}));
const IconInfinity = () => /*#__PURE__*/React.createElement("svg", {
  className: "icon",
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M14 32 C14 22, 26 22, 32 32 C38 42, 50 42, 50 32 C50 22, 38 22, 32 32 C26 42, 14 42, 14 32 Z"
}));
window.Hero = Hero;