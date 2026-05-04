// Custom cursor + scroll progress + reveal observer + curtain
(function(){
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  const isFine = matchMedia('(hover:hover) and (pointer:fine)').matches;

  // Scroll progress
  const sp = document.getElementById('scrollProgress');
  const onScroll = () => {
    const h = document.documentElement;
    const total = h.scrollHeight - h.clientHeight;
    const pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
    if(sp) sp.style.width = pct + '%';
  };
  document.addEventListener('scroll', onScroll, {passive:true});

  // Reveal-on-scroll observer
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
  window.__reveal = (el) => { if(el && !el.__rev){ el.__rev=true; io.observe(el); } };
  // Auto-attach to existing .reveal nodes after each frame
  const sweep = () => {
    document.querySelectorAll('.reveal:not(.in), .reveal-stagger:not(.in)').forEach(el=>window.__reveal(el));
  };
  const mo = new MutationObserver(sweep);
  mo.observe(document.documentElement, {childList:true, subtree:true});

  if(!isFine){ dot.style.display='none'; ring.style.display='none'; return; }

  // Smooth follow
  let mx = window.innerWidth/2, my = window.innerHeight/2;
  let rx = mx, ry = my;
  let dx = mx, dy = my;
  document.addEventListener('mousemove', (e)=>{ mx = e.clientX; my = e.clientY; });
  document.addEventListener('mousedown', ()=>document.body.classList.add('cursor-press'));
  document.addEventListener('mouseup', ()=>document.body.classList.remove('cursor-press'));

  // Hover detection (delegated)
  const hoverSel = 'a, button, [data-cursor="hover"], .mag, input[type="submit"]';
  const textSel = 'input[type="text"], input[type="email"], textarea, [data-cursor="text"]';
  document.addEventListener('mouseover', (e)=>{
    const t = e.target;
    if(!(t instanceof Element)) return;
    if(t.closest(textSel)){ document.body.classList.add('cursor-text'); document.body.classList.remove('cursor-hover'); }
    else if(t.closest(hoverSel)){ document.body.classList.add('cursor-hover'); document.body.classList.remove('cursor-text'); }
    else { document.body.classList.remove('cursor-hover','cursor-text'); }
  });

function tick(){
    // Убираем инерцию у кольца (второй части)
    rx = mx;
    ry = my;
    
    // Точка внутри все еще имеет легкое сглаживание (0.55). 
    // Если хочешь, чтобы и она была моментальной, сделай dx = mx; dy = my;
    dx += (mx - dx) * 0.55;
    dy += (my - dy) * 0.55;
    
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    dot.style.transform  = `translate3d(${dx}px, ${dy}px, 0)`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  // Curtain reveal
  window.addEventListener('load', ()=>{
    const c = document.getElementById('curtain');
    setTimeout(()=>{ if(c) c.dataset.state='hidden'; }, 600);
  });
})();
