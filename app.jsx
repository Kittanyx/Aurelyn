// App root — nav, language, tweaks integration
const { useEffect: useEffA, useState: useStateA, useRef: useRefA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "ru",
  "accent": "#ff2a1f",
  "showCustomCursor": true,
  "marqueeSpeed": 15,
  "manifestoIntensity": 1
}/*EDITMODE-END*/;

function Nav({ t, lang, setLang }){
  return (
    <header className="nav">
      <a href="#top" className="brand">
        <span className="pulse"></span>AURELYN<span style={{color:'var(--red)'}}>.</span>
      </a>
      <nav className="nav-links">
        <a href="#services">{t.nav.services}</a>
        <a href="#cases">{t.nav.work}</a>
        <a href="#manifesto">{t.nav.manifesto}</a>
        <a href="#contact">{t.nav.contact}</a>
      </nav>
      <div className="langswitch">
        {["ru","en","uz"].map(l => (
          <button key={l} className={l===lang?"active":""} onClick={()=>setLang(l)}>{l}</button>
        ))}
      </div>
    </header>
  );
}

function App(){
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = useStateA(tweaks.lang || "ru");
  useEffA(()=>{ document.documentElement.lang = lang; }, [lang]);
  useEffA(()=>{
    if(tweaks.accent){ document.documentElement.style.setProperty('--red', tweaks.accent); document.documentElement.style.setProperty('--accent', tweaks.accent); }
  }, [tweaks.accent]);
  useEffA(()=>{
    document.body.classList.toggle('no-cursor', tweaks.showCustomCursor === false);
    if(tweaks.showCustomCursor === false){
      document.body.style.cursor = 'auto';
      const dot = document.querySelector('.cursor-dot'); const ring = document.querySelector('.cursor-ring');
      if(dot) dot.style.display='none'; if(ring) ring.style.display='none';
    }
  }, [tweaks.showCustomCursor]);
  useEffA(()=>{
    const tracks = document.querySelectorAll('.marquee-track');
    tracks.forEach(tr => { tr.style.animationDuration = (tweaks.marqueeSpeed || 40) + 's'; });
  }, [tweaks.marqueeSpeed, lang]);

  const t = window.I18N[lang] || window.I18N.ru;

  return (
    <>
      <Nav t={t} lang={lang} setLang={(l)=>{ setLang(l); setTweak('lang', l); }} />
      <div id="top"></div>
      <Hero t={t} lang={lang} />
      <Marquee items={t.marquee} />
      <Services t={t} />
      <Manifesto t={t} />
      <Cases t={t} />
      <Testimonials t={t} />
      <Contact t={t} lang={lang} />
      <Footer t={t} lang={lang} setLang={setLang} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Language" />
        <TweakRadio label="Site language" value={lang} options={[{label:"RU", value:"ru"},{label:"EN",value:"en"},{label:"UZ",value:"uz"}]} onChange={(v)=>{ setLang(v); setTweak('lang', v); }} />
        <TweakSection label="Brand" />
        <TweakColor label="Accent color" value={tweaks.accent} onChange={(v)=>setTweak('accent', v)} />
        <TweakSection label="Motion" />
        <TweakToggle label="Custom cursor" value={tweaks.showCustomCursor} onChange={(v)=>setTweak('showCustomCursor', v)} />
        <TweakSlider label="Marquee speed" min={10} max={120} step={2} unit="s" value={tweaks.marqueeSpeed} onChange={(v)=>setTweak('marqueeSpeed', v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
