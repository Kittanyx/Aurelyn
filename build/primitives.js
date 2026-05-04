function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Primitives: Magnetic, Reveal, SplitChars, Tilt, useScrollY
const {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useMemo
} = React;

// Magnetic button — pulls toward cursor on hover
function Magnetic({
  children,
  strength = 22,
  className = "",
  style,
  onClick,
  type,
  as = "button",
  href,
  ...rest
}) {
  const ref = useRef(null);
  const innerRef = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    let raf = 0;
    let tx = 0,
      ty = 0,
      ix = 0,
      iy = 0;
    const onMove = e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      const max = strength;
      tx = Math.max(-max, Math.min(max, x * 0.35));
      ty = Math.max(-max, Math.min(max, y * 0.35));
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    function tick() {
      ix += (tx - ix) * 0.18;
      iy += (ty - iy) * 0.18;
      el.style.transform = `translate3d(${ix}px, ${iy}px, 0)`;
      inner.style.transform = `translate3d(${ix * 0.45}px, ${iy * 0.45}px, 0)`;
      if (Math.abs(ix - tx) > 0.1 || Math.abs(iy - ty) > 0.1) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }
    }
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength]);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: "mag " + className,
    style: style,
    onClick: onClick,
    type: type,
    href: href
  }, rest), /*#__PURE__*/React.createElement("span", {
    ref: innerRef,
    className: "mag-inner"
  }, children));
}

// Reveal: shows children with class change. Defaults to .reveal.
function Reveal({
  children,
  as: Tag = "div",
  className = "",
  stagger = false,
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.__reveal) window.__reveal(ref.current);
  }, []);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: (stagger ? "reveal-stagger " : "reveal ") + className
  }, rest), children);
}

// SplitChars — splits a word into per-char spans for staggered animations
function SplitChars({
  text,
  className = "",
  baseDelay = 0,
  step = 22
}) {
  const chars = useMemo(() => Array.from(text || ""), [text]);
  return /*#__PURE__*/React.createElement("span", {
    className: "split " + className,
    "aria-label": text
  }, chars.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "split-char",
    style: {
      display: "inline-block",
      transitionDelay: baseDelay + i * step + "ms"
    }
  }, c === " " ? "\u00A0" : c)));
}

// useScrollY hook
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY || window.pageYOffset || 0);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return y;
}

// useElementProgress: 0..1 based on element entering then leaving viewport
function useElementProgress(ref) {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (!el) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when element top hits bottom of viewport, 1 when element bottom hits top.
      const total = r.height + vh;
      const passed = vh - r.top;
      const v = Math.max(0, Math.min(1, passed / total));
      setP(v);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ref]);
  return p;
}
Object.assign(window, {
  Magnetic,
  Reveal,
  SplitChars,
  useScrollY,
  useElementProgress
});