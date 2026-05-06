// Sections: Marquee, Services, Manifesto, Cases, Testimonials, Contact, Footer
const {
  useEffect: useEffS,
  useRef: useRefS,
  useState: useStateS
} = React;
function Marquee({
  items,
  accent = true
}) {
  const items2 = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    className: "marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track",
    "aria-hidden": "true"
  }, items2.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: i % 3 === 1 ? "o" : ""
  }, it), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })))));
}
function Services({
  t
}) {
  const [open, setOpen] = useStateS(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "services"
  }, /*#__PURE__*/React.createElement("style", null, `
        .services{background:#0a0a0b;color:#fff}
        .services-head{display:grid;grid-template-columns:1fr 2fr;gap:6vw;align-items:end;margin-bottom:80px}
        @media (max-width:900px){ .services-head{grid-template-columns:1fr} }
        .services-head h2{font-family:var(--display);font-size:clamp(40px, 6.2vw, 110px);line-height:.92;letter-spacing:3px;text-transform:uppercase;margin:24px 0 0}
        .services-head h2 .stroked{color:transparent;-webkit-text-stroke:1.5px #fff}
        .svc-list{border-top:1px solid var(--line)}
        .svc-row{
          display:grid;grid-template-columns:80px 1.2fr 2fr auto;gap:24px;
          padding:36px 12px;border-bottom:1px solid var(--line);align-items:center;
          cursor:pointer;position:relative;transition:padding .35s cubic-bezier(.2,.8,.2,1)
        }
        .svc-row::before{
          content:"";position:absolute;left:0;right:0;top:0;height:0;background:#fff;z-index:0;
          transition:height .4s cubic-bezier(.2,.8,.2,1)
        }
        .svc-row:hover::before{height:100%}
        .svc-row > *{position:relative;z-index:1;transition:color .25s}
        .svc-row:hover, .svc-row:hover *{ color:#0a0a0b !important }
        .svc-row:hover .svc-tag{ background:#0a0a0b; color:#fff !important; border-color:#0a0a0b }
        .svc-num{font-family:var(--mono);color:var(--ink-dim);font-size:13px;letter-spacing:.16em}
        .svc-name{font-family:var(--display);font-size:clamp(28px, 4vw, 64px);line-height:.95;text-transform:uppercase;letter-spacing:-.02em}
        .svc-desc{color:var(--ink-dim);font-size:15px;line-height:1.55;max-width:560px}
        .svc-tags{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}
        .svc-tag{font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;padding:6px 10px;border:1px solid rgba(255,255,255,.18);border-radius:999px;color:rgba(255,255,255,.8)}
        .svc-arrow{display:inline-block;width:22px;height:22px;border-right:2px solid currentColor;border-top:2px solid currentColor;transform:rotate(45deg);margin-left:12px;transition:transform .35s}
        .svc-row:hover .svc-arrow{transform:rotate(45deg) translate(4px,-4px)}
        @media (max-width:900px){
          .svc-row{grid-template-columns:60px 1fr;gap:8px 16px}
          .svc-name{grid-column:2}
          .svc-desc{grid-column:1/-1;padding-left:60px}
          .svc-tags{grid-column:1/-1;justify-content:flex-start;padding-left:60px}
          .svc-row .svc-arrow{display:none}
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "services-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, t.services.eyebrow), /*#__PURE__*/React.createElement("h2", null, t.services.title, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "stroked"
  }, t.services.title2))), /*#__PURE__*/React.createElement("div", {
    className: "svc-list reveal-stagger"
  }, t.services.items.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "svc-row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "svc-num"
  }, s.num), /*#__PURE__*/React.createElement("span", {
    className: "svc-name"
  }, s.name), /*#__PURE__*/React.createElement("span", {
    className: "svc-desc"
  }, s.desc), /*#__PURE__*/React.createElement("span", {
    className: "svc-tags"
  }, s.tags.map((g, j) => /*#__PURE__*/React.createElement("span", {
    className: "svc-tag",
    key: j
  }, g)), /*#__PURE__*/React.createElement("span", {
    className: "svc-arrow"
  })))))));
}
function Manifesto({
  t,
  lang
}) {
  const sectionRef = useRefS(null);
  const p = useElementProgress(sectionRef);
  return /*#__PURE__*/React.createElement("section", {
    id: "manifesto",
    className: "manifesto",
    ref: sectionRef
  }, /*#__PURE__*/React.createElement("style", null, `
        .manifesto{background:#fff;color:#0a0a0b;padding-top:180px;padding-bottom:180px;overflow:hidden}
        .manifesto .eyebrow{color:#0a0a0b}
        .manifesto .eyebrow::before{background:var(--red)}
        .mani-head{margin-bottom:60px}
        .mani-grid{
          font-family:var(--display);
          font-size:clamp(48px, 9vw, 180px);
          line-height:.88;
          letter-spacing:-.035em;
          text-transform:uppercase;
          display:flex;
          flex-wrap:wrap;
          gap:.04em .35em;
          align-items:baseline;
          word-break:break-word;
          hyphens:none;
        }
        .mani-grid span{display:inline-block;will-change:transform;max-width:100%}
        .mani-grid .red{color:var(--red)}
        .mani-grid .stroked{color:transparent;-webkit-text-stroke:2.5px #0a0a0b}
        .mani-body{margin-top:80px;display:grid;grid-template-columns: 1fr 2fr;gap:6vw;align-items:start}
        @media (max-width:900px){
          .mani-grid{font-size:clamp(40px, 12vw, 96px)}
          .mani-body{grid-template-columns:1fr}
        }
        .mani-body p{font-size:21px;line-height:1.5;max-width:720px;font-weight:500}
        .mani-stat{font-family:var(--mono);font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#0a0a0b}
        .mani-stat strong{display:block;font-family:var(--display);font-size:60px;letter-spacing:-.02em;color:var(--red);margin-bottom:8px}
      `), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mani-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, t.manifesto.eyebrow)), /*#__PURE__*/React.createElement("div", {
    className: "mani-grid reveal"
  }, t.manifesto.lines.map((w, i) => {
    if (!w) return null;
    const cls = i % 3 === 1 ? "red" : i % 4 === 2 ? "stroked" : "";
    const offset = i % 3 * 20 - 20; // subtle parallax
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: cls,
      style: {
        transform: `translateY(${(p - .5) * offset}px)`
      }
    }, w);
  })), /*#__PURE__*/React.createElement("div", {
    className: "mani-body reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mani-stat"
  }, /*#__PURE__*/React.createElement("strong", null, "72", /*#__PURE__*/React.createElement("span", { style: { fontSize: '60%', letterSpacing: '0' } }, lang === 'ru' ? '\u0447' : lang === 'uz' ? 's' : 'h')), t.manifesto.stat.split('\n').map((line, i) => /*#__PURE__*/React.createElement(React.Fragment, { key: i }, line, i === 0 && /*#__PURE__*/React.createElement("br", null)))), /*#__PURE__*/React.createElement("p", null, t.manifesto.body))));
}
function Cases({
  t
}) {
  const [hover, setHover] = useStateS(-1);
  return /*#__PURE__*/React.createElement("section", {
    id: "cases",
    className: "cases"
  }, /*#__PURE__*/React.createElement("style", null, `
        .cases{background:#0a0a0b;color:#fff}
        .cases-head{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:24px;margin-bottom:60px}
        .cases-head h2{font-family:var(--display);font-size:clamp(40px, 6vw, 110px);line-height:.92;letter-spacing:3px;text-transform:uppercase;margin:14px 0 0}
        .case-grid{display:grid;grid-template-columns: repeat(12, 1fr);gap:24px}
        .case{
          position:relative;background:#101012;border:1px solid var(--line);overflow:hidden;
          padding:32px;display:flex;flex-direction:column;justify-content:space-between;
          min-height:420px;transition:transform .5s cubic-bezier(.2,.8,.2,1), border-color .3s, background .3s
        }
        .case:hover{ transform:translateY(-6px); border-color:var(--red); background:#15080a }
        .case-1{grid-column: span 7}
        .case-2{grid-column: span 5}
        .case-3{grid-column: span 5}
        .case-4{grid-column: span 7}
        @media (max-width:900px){
          .case{grid-column: 1 / -1 !important;min-height:340px}
        }
        .case-meta{display:flex;justify-content:space-between;font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-dim)}
        .case-meta .tag{color:var(--red)}
        .case-name{font-family:var(--display);font-size:clamp(40px, 5vw, 84px);line-height:.92;letter-spacing:-.025em;text-transform:uppercase;margin:24px 0 8px}
        .case-brief{color:rgba(255,255,255,.78);font-size:15px;line-height:1.55;max-width:520px;margin:0 0 24px}
        .case-foot{display:flex;justify-content:space-between;align-items:flex-end;gap:16px}
        .case-metric{font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#fff;padding:8px 12px;border:1px solid var(--red);border-radius:999px;color:var(--red)}
        .case-open{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;display:inline-flex;align-items:center;gap:8px;color:#fff}
        .case-open::after{content:"→";transition:transform .3s}
        .case:hover .case-open::after{transform:translateX(6px)}

        .case-canvas{
          position:absolute;inset:0;z-index:0;opacity:.55;pointer-events:none;
          background:
            repeating-linear-gradient(0deg, rgba(255,255,255,.04) 0 1px, transparent 1px 12px),
            repeating-linear-gradient(90deg, rgba(255,255,255,.04) 0 1px, transparent 1px 12px);
        }
        .case > *{position:relative;z-index:1}
        .case-art{
          position:absolute;right:-20px;bottom:-20px;width:62%;aspect-ratio:1.4/1;border-radius:6px;
          background: linear-gradient(135deg, #1a1a1c 0%, #0a0a0b 60%);
          border:1px solid var(--line);overflow:hidden;
          z-index:0
        }
        .case-art::before{
          content:"";position:absolute;inset:0;
          background-image: repeating-linear-gradient(45deg, rgba(255,42,31,.25) 0 2px, transparent 2px 14px);
          mask-image: linear-gradient(135deg, #000 30%, transparent 70%);
        }
        .case-art .label{position:absolute;left:12px;top:10px;font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.45)}
      `), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cases-head reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, t.cases.eyebrow), /*#__PURE__*/React.createElement("h2", null, t.cases.title)), /*#__PURE__*/React.createElement("div", {
    className: "h-mono",
    style: {
      color: 'var(--ink-dim)'
    }
  }, "04 / 04")), /*#__PURE__*/React.createElement("div", { className: "case-grid reveal-stagger" }, t.cases.items.map((c, i) => /*#__PURE__*/React.createElement("div", { key: i, className: `case case-${i + 1}`, style: { cursor: 'default' } }, /*#__PURE__*/React.createElement("div", { className: "case-canvas" }), /*#__PURE__*/React.createElement("div", { className: "case-art" }, /*#__PURE__*/React.createElement("span", { className: "label" }, i === 0 ? '01' : `0${i + 1}`)), /*#__PURE__*/React.createElement("div", { style: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' } }, i === 0 ? /*#__PURE__*/React.createElement("p", { className: "case-brief", style: { textAlign: 'center', maxWidth: '100%', opacity: .78, fontStyle: 'italic' } }, t.cases.empty1) : /*#__PURE__*/React.createElement("h3", { className: "case-name", style: { opacity: .35, textAlign: 'center', width: '100%' } }, t.cases.emptySoon))))))); 
}
function Testimonials({
  t
}) {
  const [idx, setIdx] = useStateS(0);
  useEffS(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % t.testimonials.items.length), 6000);
    return () => clearInterval(id);
  }, [t.testimonials.items.length]);
  const cur = t.testimonials.items[idx];
  return /*#__PURE__*/React.createElement("section", {
    id: "testimonials",
    className: "tst"
  }, /*#__PURE__*/React.createElement("style", null, `
        .tst{background:#fff;color:#0a0a0b}
        .tst .eyebrow{color:#0a0a0b}
        .tst-grid{display:grid;grid-template-columns: 1fr 2.4fr;gap:6vw;align-items:start}
        @media (max-width:900px){ .tst-grid{grid-template-columns:1fr} }
        .tst-quote{font-family:var(--display);font-size:clamp(34px, 4.6vw, 80px);line-height:1;letter-spacing:-.02em;text-transform:uppercase;margin:24px 0 32px}
        .tst-author{font-family:var(--mono);font-size:12px;letter-spacing:.18em;text-transform:uppercase;display:flex;gap:18px;align-items:center}
        .tst-author .avatar{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg, var(--red), #5a0500);display:inline-block;flex-shrink:0;border:1px solid #0a0a0b}
        .tst-nav{display:flex;gap:8px;margin-top:48px}
        .tst-dot{width:36px;height:4px;background:rgba(0,0,0,.15);border:0;cursor:pointer;transition:background .3s}
        .tst-dot.active{background:var(--red)}
        .tst-fade{transition:opacity .5s}
      `), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tst-grid reveal"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, t.testimonials.eyebrow), /*#__PURE__*/React.createElement("div", {
    className: "tst-nav"
  }, t.testimonials.items.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "tst-dot " + (i === idx ? "active" : ""),
    onClick: () => setIdx(i),
    "aria-label": `Quote ${i + 1}`
  })))), /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "tst-fade",
    style: {
      animation: 'fadeIn .6s ease'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "tst-quote"
  }, "\"", cur.quote, "\""), /*#__PURE__*/React.createElement("div", {
    className: "tst-author"
  }, /*#__PURE__*/React.createElement("span", {
    className: "avatar"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, cur.author), " \xA0\xB7\xA0 ", cur.role))))), /*#__PURE__*/React.createElement("style", null, `@keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`));
}
function Contact({
  t,
  lang
}) {
  const [budget, setBudget] = useStateS(0);
  const [sent, setSent] = useStateS(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "contact"
  }, /*#__PURE__*/React.createElement("style", null, `
        .contact{background:var(--red);color:#fff;overflow:hidden;position:relative}
        .contact::before{
          content:"";position:absolute;inset:0;
          background-image: repeating-linear-gradient(90deg, rgba(255,255,255,.07) 0 1px, transparent 1px 6vw);
          pointer-events:none
        }
        .contact .eyebrow{color:#fff}
        .contact .eyebrow::before{background:#fff;box-shadow:0 0 12px #fff}
        .contact-h{font-family:var(--display);font-size:clamp(60px, 11vw, 220px);line-height:.85;letter-spacing:3px;text-transform:uppercase;margin:24px 0 0}
        .contact-h .stroked{color:transparent;-webkit-text-stroke:2px #fff}
        .contact-grid{display:grid;grid-template-columns: 1.4fr 1fr;gap:6vw;margin-top:80px;align-items:start;position:relative}
        @media (max-width:900px){ .contact-grid{grid-template-columns:1fr} }
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:18px}
        @media (max-width:600px){ .form-row{grid-template-columns:1fr} }
        .field{display:flex;flex-direction:column;gap:8px}
        .field label{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;opacity:.85}
        .field input, .field textarea{
          background:transparent;color:#fff;border:0;border-bottom:1px solid rgba(255,255,255,.4);
          padding:12px 0;font-family:var(--sans);font-size:18px;outline:none;
          transition:border-color .25s
        }
        .field input::placeholder, .field textarea::placeholder{color:rgba(255,255,255,.55)}
        .field input:focus, .field textarea:focus{border-bottom-color:#fff}
        .field textarea{min-height:96px;resize:vertical}
        .budgets{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 24px}
        .budget-chip{
          padding:10px 14px;border:1px solid rgba(255,255,255,.4);border-radius:999px;
          font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;
          color:#fff;background:transparent;transition:background .2s, color .2s, border-color .2s
        }
        .budget-chip.active{ background:#fff;color:var(--red);border-color:#fff }
        .contact-side{font-family:var(--mono);font-size:13px;line-height:1.7;letter-spacing:.04em}
        .contact-side strong{font-family:var(--display);font-size:24px;letter-spacing:-.01em;text-transform:uppercase;display:block;margin-bottom:4px}
        .contact-side a{display:block;border-bottom:1px solid rgba(255,255,255,.3);padding:14px 0;transition:padding-left .25s}
        .contact-side a:hover{padding-left:8px}
        .send-row{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:18px}
        .ok{font-family:var(--mono);font-size:12px;letter-spacing:.18em;text-transform:uppercase}
      `), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, t.contact.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "contact-h"
  }, t.contact.title1, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "stroked"
  }, t.contact.title2), /*#__PURE__*/React.createElement("br", null), t.contact.title3)), /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("form", {
    className: "reveal",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, t.contact.name), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "\u2014",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, t.contact.email), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "\u2014",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("label", null, t.contact.brief), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "\u2014",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "send-row"
  }, /*#__PURE__*/React.createElement(Magnetic, {
    className: "dark",
    type: "submit",
    as: "button"
  }, sent ? t.contact.sent : t.contact.send, " ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  })), sent && /*#__PURE__*/React.createElement("span", {
    className: "ok"
  }, t.contact.reply))), /*#__PURE__*/React.createElement("div", {
    className: "contact-side reveal"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      opacity: .85,
      marginTop: 0
    }
  }, t.contact.direct), /*#__PURE__*/React.createElement("a", {
    href: "mailto:submit@aurelyn.uz"
  }, /*#__PURE__*/React.createElement("strong", null, "submit@aurelyn.uz"), "email"), /*#__PURE__*/React.createElement("a", {
    href: "https://t.me/AurelynStudio"
  }, /*#__PURE__*/React.createElement("strong", null, "@AurelynStudio"), "telegram"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+998908244434"
  }, /*#__PURE__*/React.createElement("strong", null, "+998 90 824 44 34"), "phone"), /*#__PURE__*/React.createElement("p", {
    style: {
      opacity: .7,
      marginTop: 24
    }
  }, t.contact.location.split('\\n').map((line, i) => /*#__PURE__*/React.createElement(React.Fragment, { key: i }, line, i === 0 && /*#__PURE__*/React.createElement("br", null))))))));
}
function Footer({
  t,
  lang,
  setLang
}) {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("style", null, `
        footer{background:#0a0a0b;color:#fff;border-top:1px solid var(--line)}
        .ft-top{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:32px}
        .ft-cols{display:flex;gap:48px;flex-wrap:wrap}
        .ft-col h4{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-dim);margin:0 0 16px;font-weight:500}
        .ft-col a{display:block;padding:6px 0;font-family:var(--mono);font-size:13px;letter-spacing:.04em}
        .ft-col a:hover{color:var(--red)}
        .ft-bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;margin-top:60px;padding-top:24px;border-top:1px solid var(--line);font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-dim)}
        .footer-mark-wrap{position:relative;overflow:hidden;margin-top:60px;line-height:.78;width:100%}
        .footer-mark-wrap .footer-mark{display:block;text-align:center;font-family:var(--display);font-size:clamp(64px, 18vw, 320px);letter-spacing:-.045em;line-height:.82;text-transform:uppercase;color:#fff;margin:0;user-select:none}
        .footer-mark-wrap .footer-mark .red{color:var(--red)}
      `), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h-display",
    style: {
      fontSize: 32,
      color: '#fff',
      marginBottom: 8
    }
  }, "AURELYN", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)'
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 380,
      color: 'var(--ink-dim)',
      fontSize: 14,
      lineHeight: 1.55
    }
  }, t.footer.tag)), /*#__PURE__*/React.createElement("div", {
    className: "ft-cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-col"
  }, /*#__PURE__*/React.createElement("h4", null, t.nav.services), /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "Web"), /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "SaaS"), /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "Bots"), /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "Integrations")), /*#__PURE__*/React.createElement("div", {
    className: "ft-col"
  }, /*#__PURE__*/React.createElement("h4", null, t.footer.channels || "Channels"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:submit@aurelyn.uz"
  }, "submit@aurelyn.uz"), /*#__PURE__*/React.createElement("a", {
    href: "https://t.me/AurelynStudio"
  }, "Telegram")), /*#__PURE__*/React.createElement("div", {
    className: "ft-col"
  }, /*#__PURE__*/React.createElement("h4", null, "CONTACT US"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@aurelyn.uz"
  }, "info@aurelyn.uz"), /*#__PURE__*/React.createElement("a", {
    href: "https://t.me/AurelynStudio"
  }, "Telegram-Bot"), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "via web-site"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+998908244434"
  }, "Call"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-mark-wrap",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-mark"
  }, "AURELYN", /*#__PURE__*/React.createElement("span", {
    className: "red"
  }, "."))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-bottom"
  }, /*#__PURE__*/React.createElement("span", null, t.footer.rights), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "hover"
  }, t.footer.sitemap), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "hover"
  }, t.footer.legal)))));
}
Object.assign(window, {
  Marquee,
  Services,
  Manifesto,
  Cases,
  Testimonials,
  Contact,
  Footer
});