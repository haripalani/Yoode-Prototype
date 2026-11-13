"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FRAG, VERT } from "./shader";
import { METHODS, TONE } from "./methods";

/*
  Full-screen method spreads: a live fabric (WebGL) seen at the fibre, pinned while the page scrolls past it,
  with the method's effect (ink soaking in, film peeling, thread stitching…) drawn in as you scroll.

  One fixed canvas per instance draws every visible spread into its own rectangle (viewport + scissor).
  The wrapper is `isolate`, so the canvas only ever sits behind this component's own content.
*/

type View = { el: HTMLElement; p: number; intro: number; side: string };

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const smooth = (t: number) => { t = clamp01(t); return t * t * (3 - 2 * t); };
const win = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));

export function MethodSpreads({ ids, linkable = true, hero }: {
  /** method ids to show, in page order (default: all seven) */ ids?: string[];
  /** whole-spread link to the method's page */ linkable?: boolean;
  /** use the (single) spread as a page hero: visible on load, ink starts soaking in by itself, room for a transparent header */
  hero?: { cta: { href: string; label: string } };
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const shown = ids ? METHODS.filter((m) => ids.includes(m.id)) : METHODS;

  useEffect(() => {
    const rootEl = rootRef.current;
    if (!rootEl) return;
    const root: HTMLDivElement = rootEl;
    gsap.registerPlugin(ScrollTrigger);

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isHero = root.dataset.hero === "true";
    const $$ = <T extends HTMLElement = HTMLElement>(s: string) => [...root.querySelectorAll<T>(s)];

    let cancelled = false;
    const disposers: Array<() => void> = [];
    const on = <K extends keyof WindowEventMap>(type: K, fn: (e: WindowEventMap[K]) => void, opts?: AddEventListenerOptions) => {
      window.addEventListener(type, fn as EventListener, opts);
      disposers.push(() => window.removeEventListener(type, fn as EventListener, opts));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onEl = (el: Element, type: string, fn: (e: any) => void, opts?: AddEventListenerOptions) => {
      el.addEventListener(type, fn, opts);
      disposers.push(() => el.removeEventListener(type, fn, opts));
    };
    let ctx: gsap.Context | null = null;

    // the chapter word is sized to its half of the screen, so wait for the display font first
    Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise((r) => setTimeout(r, 2500))]).then(() => { if (!cancelled) init(); });

    function init() {
      ctx = gsap.context(() => {
        /* views: one per spread, keyed by the method's index (= its shader mode) */
        const views: Record<number, View> = {};
        $$("[data-mview]").forEach((el) => { const sec = el.closest<HTMLElement>("[data-method]")!; views[+el.dataset.view!] = { el, p: 0, intro: 0, side: sec.dataset.side! }; });

        /* ---------- layout: the narrow (portrait) variant, and the chapter word fitted to its half ---------- */
        const frames = $$("[data-mframe]"), kwords = $$("[data-kword]");
        const fitKwords = () => { kwords.forEach((k) => {
          const frame = k.closest<HTMLElement>("[data-mframe]")!, nar = frame.classList.contains("narrow");
          const gut = parseFloat(getComputedStyle(frame.querySelector("[data-mcopy]")!).paddingLeft) || 24;
          const maxW = nar ? frame.clientWidth - 2 * gut : frame.clientWidth * 0.40;
          k.style.fontSize = "";
          // the text's own width (scrollWidth), not the box: the box is capped by max-w, so a long word overflows it unseen
          const w = k.scrollWidth;
          if (w > maxW && w > 0) k.style.fontSize = (parseFloat(getComputedStyle(k).fontSize) * maxW / w).toFixed(1) + "px";
        }); };
        const layout = () => { const nar = innerWidth / innerHeight < 1.0; frames.forEach((f) => f.classList.toggle("narrow", nar)); fitKwords(); };
        let layT = 0; on("resize", () => { cancelAnimationFrame(layT); layT = requestAnimationFrame(layout); }); layout();

        /* ---------- the material shader ---------- */
        let three: { render: () => void; wake: (ms: number) => void; smooth: (on: boolean) => void } | null = null;
        const canvas = root.querySelector<HTMLCanvasElement>("canvas[data-gl]")!;
        try {
          const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: "high-performance" });
          disposers.push(() => renderer.dispose());
          const isMobile = matchMedia("(pointer:coarse)").matches;
          /* Bound the expensive shader's pixel count before the first draw (including large monitors). */
          const Q = { base: isMobile ? 0.75 : 1.0, min: 0.35, max: 1, cur: 0, ema: 16.7, last: performance.now(), lastAdj: 0, lostGL: false };
          const maxRatio = () => Math.min(devicePixelRatio, Q.base, Math.sqrt(1000000 / Math.max(1, innerWidth * innerHeight)));
          Q.max = maxRatio();
          Q.cur = Math.min(Q.max, Math.sqrt(500000 / Math.max(1, innerWidth * innerHeight)));
          renderer.setPixelRatio(Q.cur);
          /* render only while something is moving; otherwise a slow idle tick keeps the light drift alive */
          let activeUntil = performance.now() + 4500, lastDraw = 0, fullRate = false;
          const wake = (ms: number) => { activeUntil = Math.max(activeUntil, performance.now() + ms); };
          onEl(canvas, "webglcontextlost", (e: Event) => { e.preventDefault(); Q.lostGL = true; });
          onEl(canvas, "webglcontextrestored", () => { Q.lostGL = false; wake(1500); });
          on("scroll", () => wake(1600), { passive: true });
          on("pointermove", () => wake(1200), { passive: true });
          on("touchmove", () => wake(1600), { passive: true });
          renderer.setClearColor(0x000000, 0); renderer.autoClear = false;
          const scene = new THREE.Scene(); const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
          const U = { uRes: { value: new THREE.Vector2(1, 1) }, uMouse: { value: new THREE.Vector2(-999, -999) }, uRipple: { value: new THREE.Vector2(-999, -999) }, uArt: { value: new THREE.Vector2(0, 0) },
            uTime: { value: 0 }, uP: { value: 0 }, uMode: { value: 0 }, uBaseA: { value: 0 }, uBaseB: { value: 0 }, uBaseMix: { value: 0 }, uZoom: { value: 1 }, uArtS: { value: 200 }, uRippleT: { value: 99 }, uTopFade: { value: isHero ? 0 : 1 } };
          const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG, depthTest: false, depthWrite: false, transparent: true });
          const geo = new THREE.PlaneGeometry(2, 2);
          scene.add(new THREE.Mesh(geo, mat));
          disposers.push(() => { geo.dispose(); mat.dispose(); });

          const secMouse = { x: -999, y: -999 };
          // listen on the frame: the whole-spread link sits above the fabric view and would swallow its events
          $$("[data-mview]").forEach((el) => onEl(el.parentElement!, "pointermove", (e: PointerEvent) => { const r = el.getBoundingClientRect(); secMouse.x = e.clientX - r.left; secMouse.y = r.height - (e.clientY - r.top); }, { passive: true }));

          const resize = () => {
            Q.max = maxRatio();
            const ratio = Math.min(Q.max, Math.max(Q.cur, Math.sqrt(200000 / Math.max(1, innerWidth * innerHeight))));
            if (ratio !== Q.cur) { Q.cur = ratio; renderer.setPixelRatio(Q.cur); }
            // the canvas's CSS box (excludes the scrollbar), not innerWidth, or the drawing is squeezed short of the right edge
            renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
          };
          let rszT = 0; on("resize", () => { cancelAnimationFrame(rszT); rszT = requestAnimationFrame(() => { resize(); wake(1500); }); }); resize();

          const clock = new THREE.Clock();
          const renderInto = (el: HTMLElement, set: (w: number, h: number) => void) => {
            const r = el.getBoundingClientRect();
            const vh = canvas.clientHeight;
            if (r.bottom <= 0 || r.top >= vh || r.width < 2 || r.height < 2) return false;
            const w = Math.round(r.width), h = Math.round(r.height), left = Math.round(r.left), bottom = Math.round(vh - r.bottom);
            renderer.setViewport(left, bottom, w, h); renderer.setScissor(left, bottom, w, h); renderer.setScissorTest(true);
            U.uRes.value.set(w, h); set(w, h); renderer.render(scene, cam); return true;
          };
          const render = () => {
            if (Q.lostGL || document.hidden) return;
            const now = performance.now(), dt = now - Q.last; Q.last = now;
            if (dt < 1000) Q.ema = Q.ema * 0.9 + Math.min(dt, 250) * 0.1;
            const active = now < activeUntil;
            // 30 fps during interaction, 8 fps at rest; text and scrolling keep the full GSAP ticker rate.
            // (while a load animation plays, every frame is drawn so it glides)
            if (!fullRate && now - lastDraw < (active ? 1000 / 30 - 1 : 125)) return;
            lastDraw = now;
            if (active && !fullRate && now - Q.lastAdj > 600) {
              const minRatio = Math.min(Q.min, Q.max, Math.sqrt(200000 / Math.max(1, innerWidth * innerHeight)));
              if (Q.ema > 26 && Q.cur > minRatio) { Q.cur = Math.max(minRatio, Q.cur - 0.1); renderer.setPixelRatio(Q.cur); Q.lastAdj = now; Q.ema = 20; }
            }
            U.uTime.value = clock.getElapsedTime();
            renderer.setScissorTest(false); renderer.clear();
            const nar = innerWidth / innerHeight < 1.0;
            for (const key of Object.keys(views)) { const k = +key, v = views[k];
              renderInto(v.el, (w, h) => { U.uMode.value = k; U.uP.value = Math.max(v.p, v.intro); U.uZoom.value = 1.0; U.uMouse.value.set(secMouse.x, secMouse.y); U.uRippleT.value = 99;
                const ax = nar ? 0.5 * w : (v.side === "left" ? 0.70 * w : 0.30 * w); const ay = nar ? 0.64 * h : (isHero ? 0.55 * h : 0.45 * h); /* gl y runs up: a hero lifts its art to match its raised copy */ U.uArt.value.set(ax, ay); U.uArtS.value = Math.min(w * 0.34, h * 0.36); }); }
            renderer.setScissorTest(false);
          };
          three = { render, wake, smooth: (on) => { fullRate = on; } };
        } catch (err) { canvas.hidden = true; console.warn("WebGL unavailable", err); }

        const tick = () => { if (three) three.render(); };
        gsap.ticker.add(tick);
        disposers.push(() => gsap.ticker.remove(tick));

        /* ---------- scroll: one pin per spread ---------- */
        if (isHero) {
          /* hero: no scroll pin. The whole effect plays once on load, with the copy and the chapter word coming in alongside it */
          $$("[data-method]").forEach((sec) => {
            const k = +sec.dataset.k!, copy = sec.querySelector<HTMLElement>("[data-mcopy]")!, bar = sec.querySelector<HTMLElement>("[data-mfill]")!, kword = sec.querySelector<HTMLElement>("[data-kword]")!;
            const dir = sec.dataset.side === "left" ? 1 : -1;
            if (reduced) { views[k].p = 0.85; bar.style.width = "100%"; kword.style.clipPath = "none"; return; }
            gsap.fromTo([...copy.children], { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: 0.07, ease: "expo.out", delay: 0.15 });
            gsap.fromTo(kword, { opacity: 0, x: `${dir * 1.5}vw` }, { opacity: 0.9, x: `${-dir * 1.5}vw`, duration: 3.6, ease: "sine.inOut", delay: 0.2 });
            gsap.fromTo(views[k], { p: 0 }, { p: 0.85, duration: 3.6, ease: "sine.inOut", delay: 0.25,
              onStart: () => three?.smooth(true),
              onUpdate: () => { bar.style.width = (views[k].p / 0.85 * 100).toFixed(1) + "%"; three?.wake(600); },
              onComplete: () => three?.smooth(false) });
          });
        } else if (!reduced) {
          $$("[data-method]").forEach((sec) => {
            const k = +sec.dataset.k!, frame = sec.querySelector<HTMLElement>("[data-mframe]")!, copy = sec.querySelector<HTMLElement>("[data-mcopy]")!, bar = sec.querySelector<HTMLElement>("[data-mfill]")!, kword = sec.querySelector<HTMLElement>("[data-kword]")!;
            const tl = gsap.timeline({ scrollTrigger: { trigger: sec, start: "top top", end: "bottom bottom", scrub: 0.8, pin: frame, pinSpacing: false, anticipatePin: 1,
              onUpdate: (st) => { const p = st.progress; views[k].p = p; bar.style.width = (p * 100).toFixed(1) + "%";
                // the chapter word: written in cleanly from its anchored edge, fully revealed during the pin
                const dir = sec.dataset.side === "left" ? 1 : -1, fromLeft = dir < 0 || frame.classList.contains("narrow");
                const hide = ((1 - smooth(win(p, 0.0, 0.08))) * 100).toFixed(1) + "%";
                kword.style.clipPath = fromLeft ? `inset(-20% ${hide} -30% 0)` : `inset(-20% 0 -30% ${hide})`;
                kword.style.transform = `translate3d(${(dir * (1.5 - 3 * p)).toFixed(2)}vw,0,0)`;
                copy.style.setProperty("--py", (6 - 12 * p).toFixed(1) + "px"); } } });
            tl.fromTo([...copy.children], { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.2, stagger: 0.022, ease: "power3.out" }, 0.02);
          });
        } else {
          Object.values(views).forEach((v) => { v.p = 0.7; });
        }

        if (three) three.wake(3200);
        ScrollTrigger.refresh();

        /* ---------- the "Read more" badge follows the pointer over each spread ---------- */
        frames.forEach((frame) => onEl(frame, "pointermove", (e: PointerEvent) => { const r = frame.getBoundingClientRect();
          frame.style.setProperty("--mx", `${e.clientX - r.left}px`); frame.style.setProperty("--my", `${e.clientY - r.top}px`); }, { passive: true }));
      }, root);
    }

    return () => {
      cancelled = true;
      disposers.forEach((d) => d());
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={rootRef} data-hero={hero ? "true" : undefined} className="relative isolate">
      <canvas data-gl aria-hidden className="pointer-events-none fixed inset-0 z-0 block size-full [contain:strict]" />

      <div className="relative z-[1]">
        {shown.map((m) => {
          const k = METHODS.indexOf(m), t = TONE[m.tone], href = linkable ? m.href : undefined;
          return (
            <section key={m.id} id={m.id} data-method data-k={k} data-side={m.side} data-tone={m.tone} className={`relative ${hero ? "h-[100svh]" : "h-[220vh] motion-reduce:h-auto"}`}>
              <div data-mframe className={`group/f relative h-[100svh] overflow-hidden ${t.fg}`}>
                <div data-mview data-view={k} aria-label={`${m.tag}, seen at the fibre`} className="absolute inset-0" />
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 ${t.scrim[m.side]} ${t.scrim.narrow} ${hero ? "" : "[mask-image:linear-gradient(to_bottom,transparent_0px,black_96px,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0px,black_96px,black_100%)]"}`}
                />

                {hero ? (
                  /* hero: a soft shade under the transparent header, in the fabric's own tone, so the header reads on it */
                  <div aria-hidden className={`pointer-events-none absolute inset-x-0 top-0 z-20 h-36 bg-linear-to-b to-transparent ${m.tone === "light" ? "from-white/60 via-white/20" : "from-black/55 via-black/20"}`} />
                ) : (
                  /* Ultra-smooth feather diffusion bar across section boundary */
                  <div
                    aria-hidden
                    className="pointer-events-none absolute top-0 inset-x-0 h-24 sm:h-28 z-20 backdrop-blur-[5px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]"
                  />
                )}
                <div
                  data-kword
                  aria-hidden
                  className={`pointer-events-none absolute bottom-[calc(clamp(16px,3vh,30px)+44px)] z-[1] select-none whitespace-nowrap font-display text-[clamp(36px,5.4vw,84px)] font-extrabold uppercase leading-none tracking-tight opacity-90 will-change-[transform,clip-path] group-[.narrow]/f:bottom-auto group-[.narrow]/f:left-6 group-[.narrow]/f:right-auto ${hero ? "group-[.narrow]/f:top-[clamp(112px,15vh,140px)]" : "group-[.narrow]/f:top-[clamp(60px,8vh,80px)]"} group-[.narrow]/f:text-left group-[.narrow]/f:text-[18vw] ${m.side === "left" ? "right-6 md:right-12 lg:right-16 text-right max-w-[46vw]" : "left-6 md:left-12 lg:left-16 text-left max-w-[46vw]"}`}
                >
                  {m.kword}
                </div>
                {/* Only methods with their own page (m.href) are clickable. The whole spread opens it, and on hover a round
                    "Read more" badge rides on the cursor, like the product gallery's Studio badge (hidden over the spread's own button) */}
                {href && <Link href={href} aria-label={`Read more about ${m.tag}`} className="group/l absolute inset-0 z-[2] cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-yoode-coral">
                  <span aria-hidden className="pointer-events-none absolute left-[var(--mx,50%)] top-[var(--my,50%)] z-40 -ml-[36px] -mt-[36px] hidden size-[72px] scale-0 flex-col items-center justify-center gap-0.5 rounded-full border border-white/20 bg-black/95 text-white opacity-0 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-[opacity,scale] duration-150 group-hover/l:scale-100 group-hover/l:opacity-100 group-has-[[data-cta]:hover]/f:scale-0 group-has-[[data-cta]:hover]/f:opacity-0 [@media(hover:hover)]:flex">
                    <ArrowUpRight className="size-[18px]" strokeWidth={2.2} />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/90">Read more</span>
                  </span>
                </Link>}
                <div
                  data-mcopy
                  className={`pointer-events-none absolute ${hero ? "top-[44%]" : "top-1/2"} z-[3] max-w-[min(50%,660px)] px-6 md:px-12 [transform:translateY(calc(-50%_+_var(--py,0px)))] group-[.narrow]/f:inset-x-0 group-[.narrow]/f:left-0 group-[.narrow]/f:right-0 group-[.narrow]/f:top-auto group-[.narrow]/f:bottom-[clamp(40px,6vh,64px)] group-[.narrow]/f:max-w-none group-[.narrow]/f:[transform:translateY(var(--py,0px))] ${m.side === "left" ? "left-0" : "right-0"}`}
                >
                  {!hero && <div className="mb-2 flex items-baseline gap-2 text-yoode-coral">
                    <b className="font-display text-[clamp(32px,3.5vw,54px)] font-extrabold leading-none tracking-tight group-[.narrow]/f:text-[34px]">{String(k + 1).padStart(2, "0")}</b>
                    <span className={`text-[10px] md:text-[11px] font-semibold tracking-[0.14em] ${t.mute}`}>/ 07</span>
                  </div>}
                  <div className={`text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] mb-1.5 ${t.mute}`}>{hero ? m.chapter : <>Chapter {String(k + 1).padStart(2, "0")} · {m.chapter}</>}</div>
                  {/* the page's main heading when used as a hero */}
                  {(() => { const Heading = hero ? "h1" : "h2"; return (
                    <Heading className="mt-2 max-w-[12ch] font-display text-[clamp(26px,3vw,48px)] font-extrabold uppercase leading-[1.04] tracking-tight group-[.narrow]/f:mt-2 group-[.narrow]/f:max-w-none group-[.narrow]/f:text-[clamp(24px,7vw,38px)] [&_em]:not-italic [&_em]:text-yoode-coral">
                      {m.title}
                    </Heading>
                  ); })()}
                  <p className={`mt-3 md:mt-4 max-w-[42ch] text-xs sm:text-sm md:text-[14.5px] font-medium leading-relaxed group-[.narrow]/f:mt-2 group-[.narrow]/f:max-w-none group-[.narrow]/f:text-xs ${t.soft}`}>{m.lede}</p>
                  <ul className={`mt-4 md:mt-5 grid max-w-[460px] list-none grid-cols-2 gap-x-6 border-t p-0 group-[.narrow]/f:mt-2.5 group-[.narrow]/f:max-w-none ${t.rule}`}>
                    {m.facts.map(([label, value]) => (
                      <li key={label} className={`grid gap-0.5 border-b py-2 md:py-2.5 group-[.narrow]/f:py-1.5 ${t.rule}`}>
                        <small className={`text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.12em] ${t.mute}`}>{label}</small>
                        <b className="text-xs md:text-[13px] font-semibold leading-snug group-[.narrow]/f:text-xs">{value}</b>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 md:mt-4 flex flex-wrap items-center gap-2.5">
                    {href && (
                      <Link
                        href={href}
                        data-cta
                        className="inline-flex items-center gap-1.5 rounded-full bg-yoode-coral px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-yoode-coral/25 transition-all hover:bg-yoode-coral/90 hover:scale-105 active:scale-95 cursor-pointer pointer-events-auto shrink-0"
                      >
                        Read more <ArrowUpRight className="size-4" />
                      </Link>
                    )}
                    {hero && (
                      <a
                        href={hero.cta.href}
                        className="inline-flex items-center gap-1.5 rounded-full bg-yoode-coral px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-yoode-coral/25 transition-all hover:bg-[#C13828] hover:scale-105 active:scale-95 cursor-pointer pointer-events-auto shrink-0"
                      >
                        {hero.cta.label} <ArrowUpRight className="size-4" />
                      </a>
                    )}
                    <div className="flex flex-wrap items-center gap-1.5 group-[.narrow]/f:hidden">
                      {m.prods.map((p) => (
                        <span key={p} className={`rounded-full border px-2.5 py-1 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.1em] ${t.rule} ${t.soft}`}>{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`absolute inset-x-6 bottom-[clamp(18px,3.5vh,34px)] z-[3] h-px md:inset-x-12 group-[.narrow]/f:hidden ${t.ruleBg}`}>
                  <i data-mfill className="block h-full w-0 bg-yoode-coral" />
                  <span className="absolute -top-5 right-0 text-[11px] font-semibold uppercase tracking-[0.16em]">{m.tag}</span>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
