"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform vec2 uRes, uMouse, uRipple, uArt;
uniform float uTime, uP, uMode, uBaseA, uBaseB, uBaseMix, uZoom, uArtS, uRippleT;
#define PI 3.14159265
#define ORANGE vec3(0.925,0.085,0.0)
#define AMBER  vec3(0.91,0.34,0.0)
float hash21(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  float a=hash21(i), b=hash21(i+vec2(1.,0.)), c=hash21(i+vec2(0.,1.)), d=hash21(i+vec2(1.,1.));
  return mix(mix(a,b,f.x),mix(c,d,f.x),f.y); }
float fbm(vec2 p){ float v=0.0, a=0.5; for(int i=0;i<3;i++){ v+=a*vnoise(p); p=p*2.03+17.17; a*=0.5; } return v*1.143; }
vec3 hue2rgb(float h){ vec3 p=abs(fract(vec3(h)+vec3(0.,2./3.,1./3.))*6.-3.); return clamp(p-1.,0.,1.); }
float sdSeg(vec2 p, vec2 a, vec2 b){ vec2 pa=p-a, ba=b-a; float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0); return length(pa-ba*h); }
float sdBox(vec2 p, vec2 b){ vec2 d=abs(p)-b; return length(max(d,0.0))+min(max(d.x,d.y),0.0); }
float sdY(vec2 p, float s){ float d=sdSeg(p,vec2(0.,-0.58*s),vec2(0.,0.02*s)); d=min(d,sdSeg(p,vec2(0.,0.02*s),vec2(-0.42*s,0.58*s))); d=min(d,sdSeg(p,vec2(0.,0.02*s),vec2(0.42*s,0.58*s))); return d-0.115*s; }
float sdRing(vec2 p, float s){ return abs(length(p)-0.5*s)-0.06*s; }
float sdBars(vec2 p, float s){ return min(sdBox(p-vec2(0.,0.80*s),vec2(0.62*s,0.05*s)), sdBox(p+vec2(0.,0.80*s),vec2(0.62*s,0.05*s))); }
float sdFrame(vec2 p, float s){ return max(sdBox(p,vec2(0.78*s,0.88*s)), -sdBox(p,vec2(0.72*s,0.82*s))); }
float sdWave(vec2 p, float s){ return abs(p.y - 0.26*s*sin(p.x/(0.5*s))) - 0.10*s; }
float rev(float y, float front, float w){ return smoothstep(front-w, front+w, y); }
/* base materials, macro scale */
float mJersey(vec2 q){ float col=q.x/9.0; float stag=step(0.5,fract(col*0.5)); float row=q.y/6.5+stag*0.5;
  float cx=fract(col)-0.5, ry=fract(row)-0.5; float loop=1.0-smoothstep(0.05,0.5,abs(cx)*1.4+abs(ry)*0.9); return loop*0.8+fbm(q*0.35)*0.25; }
float mFleece(vec2 q){ return fbm(q*0.22)*0.65+fbm(q*1.1)*0.35; }
float mPique(vec2 q){ float a=cos(q.x/5.6)+cos(q.y/5.6); return smoothstep(-0.7,1.0,a)*0.85+fbm(q*0.45)*0.2; }
float mTwill(vec2 q){ float d=0.5+0.5*sin((q.x+q.y)*0.5); float th=0.5+0.5*sin(q.x*2.2); return d*0.65+th*0.15+fbm(q*0.5)*0.2; }
float mSteel(vec2 q){ return fbm(vec2(q.x*0.06,q.y*2.4))*0.55+vnoise(vec2(q.x*0.25,q.y*7.0))*0.25+0.1; }
float mLeather(vec2 q){ float c=fbm(q*0.11); float pores=smoothstep(0.58,0.92,vnoise(q*0.55)); return c*0.75-pores*0.25+0.2; }
float baseH(vec2 q, float b){
  if(b<0.5) return mJersey(q); if(b<1.5) return mFleece(q); if(b<2.5) return mPique(q); if(b<3.5) return mTwill(q);
  if(b<4.5) return mJersey(q); if(b<5.5) return mSteel(q); return mLeather(q); }
vec3 baseAlb(float b){
  if(b<0.5) return vec3(0.90,0.86,0.78); if(b<1.5) return vec3(0.012,0.012,0.014); if(b<2.5) return ORANGE; if(b<3.5) return vec3(0.80,0.77,0.70);
  if(b<4.5) return vec3(0.009,0.009,0.010); if(b<5.5) return vec3(0.055,0.06,0.07); return vec3(0.16,0.075,0.035); }
/* the height field, with each chapter's effect on the surface */
float heightAt(vec2 px){
  vec2 q = px/uZoom; float m = uMode; float h;
  if (m > 6.5){ h = uBaseMix < 0.001 ? baseH(q,uBaseA) : (uBaseMix > 0.999 ? baseH(q,uBaseB) : mix(baseH(q,uBaseA), baseH(q,uBaseB), uBaseMix));
    float r = distance(px, uRipple); h += 0.4*sin(r*0.11 - uRippleT*7.0)*exp(-r*0.006)*exp(-uRippleT*1.2); return h; }
  vec2 ap = px - uArt; float s = uArtS; float H = uRes.y;
  float pp = clamp((uP-0.1)/0.75, 0.0, 1.0); float front = H*(1.0-pp);
  if (m < 0.5){ h = mJersey(q); float d = sdBox(ap, vec2(0.62*s)) - 0.1*s; float mk = 1.0-smoothstep(-2.0,2.0,d); float ink = mk*rev(px.y,front,6.0); return h - ink*0.15; }
  if (m < 1.5){ h = mFleece(q); float d = min(sdRing(ap,s), sdY(ap,0.62*s)); float mk=1.0-smoothstep(-1.5,1.5,d);
    float film = 1.0-smoothstep(-2.0,2.0, sdBox(ap, vec2(0.85*s))-0.05*s); float p1=clamp((uP-0.05)/0.3,0.,1.), p2=clamp((uP-0.35)/0.15,0.,1.), p3=clamp((uP-0.55)/0.4,0.,1.);
    float coord = (ap.x - ap.y*0.7 + 1.5*s)/(3.0*s); float peeled = smoothstep(p3-0.03,p3+0.03,coord); float filmOn = film*p1*(1.0-peeled);
    h = mix(h, 0.5, filmOn*p2*0.85); float printed = mk*step(0.4,uP); h = mix(h, 0.62, printed*0.9) + printed*0.3; return h; }
  if (m < 3.5){ bool cr = m > 2.5; h = cr ? mTwill(q) : mPique(q);
    float d = cr ? sdWave(ap,s) : sdY(ap,s); float revl = cr ? (1.0-smoothstep(uRes.x*pp-4.0, uRes.x*pp+4.0, px.x)) : rev(px.y,front,2.0);
    float inM = (1.0-smoothstep(-1.0,1.0,d))*revl;
    float thr = cr ? (0.5+0.5*cos(px.x*2.0*PI/3.4 + vnoise(px*0.4)*0.6)) : (0.5+0.5*cos(px.y*2.0*PI/3.4 + vnoise(px*0.4)*0.6));
    float pucker = (1.0-smoothstep(0.0,9.0,d))*step(0.0,d)*revl;
    return mix(h, 0.55 + thr*0.45 + 0.3, inM) - pucker*0.22; }
  if (m < 4.5){ h = mJersey(q); float d = min(sdY(ap,s), sdBars(ap,s)); float mk=1.0-smoothstep(-1.5,1.5,d); float ink = mk*rev(px.y,front,3.0);
    float rim = (1.0-smoothstep(0.0,2.5,abs(d)))*ink; return mix(h, 0.7, ink*0.9) + ink*0.3 + rim*0.15; }
  if (m < 5.5){ h = mSteel(q); float cell = 11.0; vec2 c = (floor(ap/cell)+0.5)*cell; float dm = sdY(c,1.2*s); float cov = 1.0-smoothstep(-1.0,3.0,dm);
    float rowRev = rev(c.y+uArt.y, front, cell*0.6); float r = 4.6*cov*rowRev; float dd = length(ap-c); float dome = sqrt(max(0.0, r*r-dd*dd))/max(r,0.001);
    return h*0.6 + dome*0.9*step(0.5,r); }
  h = mLeather(q); float d = min(sdFrame(ap,0.9*s), sdY(ap,0.9*s)); float mk=1.0-smoothstep(-1.0,1.0,d); float burn = mk*rev(px.y,front,2.0); return h - burn*0.4;
}
void main(){
  vec2 px = vUv*uRes; float m = uMode; float e = 1.0;
  float h0 = heightAt(px), hx = heightAt(px+vec2(e,0.)), hy = heightAt(px+vec2(0.,e));
  vec3 alb; float rough=0.85, bump=3.0, aniso=0.0, specK=0.35; vec2 T=vec2(1.,0.); vec3 glow=vec3(0.);
  vec2 ap = px-uArt; float s = uArtS; float H = uRes.y; float pp = clamp((uP-0.1)/0.75,0.,1.); float front = H*(1.0-pp);
  float live = step(0.1,uP)*step(uP,0.85);
  if (m > 6.5){ alb = mix(baseAlb(uBaseA), baseAlb(uBaseB), uBaseMix); float b = uBaseMix<0.5 ? uBaseA : uBaseB;
    if (b>4.5&&b<5.5){ aniso=1.0; rough=0.35; specK=0.9; bump=2.0; } if (b>5.5){ rough=0.6; specK=0.5; bump=2.2; } if (b>0.5&&b<1.5){ bump=1.6; } }
  else if (m < 0.5){ alb = baseAlb(0.0); float d = sdBox(ap, vec2(0.62*s))-0.1*s; float mk = 1.0-smoothstep(-2.0,2.0,d); float ink = mk*rev(px.y,front,6.0);
    float g = clamp((ap.y+0.62*s)/(1.24*s),0.,1.); vec3 art = mix(vec3(0.02,0.015,0.012), ORANGE, smoothstep(0.0,0.45,g)); art = mix(art, AMBER*1.1, smoothstep(0.45,0.8,g)); art = mix(art, vec3(0.95,0.75,0.55), smoothstep(0.8,1.0,g));
    float sun = 1.0-smoothstep(0.16*s,0.19*s, length(ap-vec2(0.22*s,0.25*s))); art = mix(art, vec3(0.98,0.93,0.85), sun);
    float mts = 1.0-smoothstep(-0.02*s,0.02*s, ap.y + 0.1*s + 0.2*s*sin(ap.x/(0.18*s))); art = mix(art, vec3(0.02,0.018,0.015), mts);
    float valley = 1.0-h0; alb = mix(alb, art*(0.7+0.3*valley), ink*0.96);
    float wet = exp(-abs(px.y-front)/12.0)*mk*live; rough = mix(rough,0.3,wet); specK += wet*0.6; glow += wet*vec3(0.05); }
  else if (m < 1.5){ alb = baseAlb(1.0); bump = 1.6; float dr = sdRing(ap,s), dy = sdY(ap,0.62*s); float d = min(dr,dy); float mk=1.0-smoothstep(-1.5,1.5,d);
    float film = 1.0-smoothstep(-2.0,2.0, sdBox(ap, vec2(0.85*s))-0.05*s); float p1=clamp((uP-0.05)/0.3,0.,1.), p3=clamp((uP-0.55)/0.4,0.,1.);
    float coord = (ap.x-ap.y*0.7+1.5*s)/(3.0*s); float peeled = smoothstep(p3-0.03,p3+0.03,coord); float filmOn = film*p1*(1.0-peeled);
    float printed = mk*step(0.4,uP); vec3 pc = (dr < dy) ? ORANGE : vec3(0.9);
    alb = mix(alb, pc, printed); rough = mix(rough,0.35,printed); specK = mix(specK,0.7,printed); bump = mix(bump,0.5,printed);
    alb = mix(alb, vec3(0.55), filmOn*0.55); rough = mix(rough,0.25,filmOn); specK += filmOn*0.5;
    float edge = exp(-abs(coord-p3)*40.0)*film*p1*step(0.01,p3)*step(p3,0.99); glow += edge*vec3(0.45); }
  else if (m < 3.5){ bool cr = m > 2.5; alb = cr ? baseAlb(3.0) : baseAlb(2.0);
    float d = cr ? sdWave(ap,s) : sdY(ap,s); float revl = cr ? (1.0-smoothstep(uRes.x*pp-4.0, uRes.x*pp+4.0, px.x)) : rev(px.y,front,2.0);
    float inM = (1.0-smoothstep(-1.0,1.0,d))*revl;
    vec3 thread = cr ? pow(hue2rgb(fract(px.x/uRes.x*1.15)), vec3(2.2))*1.1 : vec3(0.92,0.9,0.86);
    float shade = 0.85+0.15*vnoise(px*0.7);
    alb = mix(alb, thread*shade, inM); aniso = inM; T = cr ? vec2(0.,1.) : vec2(1.,0.); rough = mix(rough,0.45,inM); specK = mix(specK,0.8,inM); bump = mix(bump,4.0,inM);
    float fpos = cr ? abs(px.x-uRes.x*pp) : abs(px.y-front); float nd = 1.0-smoothstep(-2.0,6.0,d); float needle = exp(-fpos/3.0)*nd*live;
    glow += needle*vec3(0.9,0.85,0.7); alb *= 1.0-exp(-fpos/8.0)*nd*live*0.35; }
  else if (m < 4.5){ alb = baseAlb(4.0); float d = min(sdY(ap,s), sdBars(ap,s)); float mk=1.0-smoothstep(-1.5,1.5,d); float ink = mk*rev(px.y,front,3.0);
    alb = mix(alb, ORANGE, ink); rough = mix(rough,0.8,ink); bump = mix(bump,1.2,ink);
    float band = (1.0-smoothstep(0.0,70.0, front-px.y))*step(px.y,front)*live; vec2 g = abs(fract(px/5.0)-0.5); float mesh = smoothstep(0.42,0.5,max(g.x,g.y));
    alb = mix(alb, alb*0.5 + vec3(0.02), band*mesh*0.9);
    float blade = exp(-abs(px.y-front)/2.5)*live; alb *= 1.0-blade*0.6; glow += exp(-abs(px.y-front-3.0)/2.0)*live*vec3(0.12); }
  else if (m < 5.5){ alb = baseAlb(5.0); aniso = 1.0; T = vec2(1.,0.); rough = 0.35; specK = 0.9; bump = 2.0;
    float cell = 11.0; vec2 c = (floor(ap/cell)+0.5)*cell; float dm = sdY(c,1.2*s); float cov = 1.0-smoothstep(-1.0,3.0,dm); float rowRev = rev(c.y+uArt.y,front,cell*0.6);
    float r = 4.6*cov*rowRev; float dd = length(ap-c); float dot_ = (1.0-smoothstep(r-1.0,r+0.5,dd))*step(0.5,r);
    float g = clamp((c.y+0.7*s)/(1.4*s),0.,1.); vec3 dc = mix(ORANGE, AMBER, smoothstep(0.2,0.5,g)); dc = mix(dc, vec3(0.9), smoothstep(0.55,0.9,g));
    alb = mix(alb, dc, dot_); aniso = mix(aniso,0.0,dot_); rough = mix(rough,0.12,dot_); specK = mix(specK,1.2,dot_); bump = mix(bump,5.0,dot_);
    float lamp = exp(-abs(px.y-front)/16.0)*live; glow += lamp*vec3(0.35,0.12,0.9)*0.8; }
  else { alb = baseAlb(6.0); rough = 0.6; specK = 0.45; bump = 2.2; float d = min(sdFrame(ap,0.9*s), sdY(ap,0.9*s)); float mk=1.0-smoothstep(-1.0,1.0,d); float burn = mk*rev(px.y,front,2.0);
    float scorch = (1.0-smoothstep(0.0,7.0,d))*step(0.0,d)*rev(px.y,front,4.0); alb = mix(alb, vec3(0.03,0.018,0.01), burn); alb *= 1.0-scorch*0.45; rough = mix(rough,0.95,burn); specK = mix(specK,0.05,burn);
    float nd = 1.0-smoothstep(-2.0,5.0,d); float ember = exp(-abs(px.y-front)/4.0)*nd*live*(0.8+0.3*sin(uTime*37.0)); glow += ember*vec3(1.0,0.35,0.05)*1.4;
    float sp = step(0.987, hash21(floor(px/3.0)+floor(uTime*24.0)))*exp(-abs(px.y-front)/16.0)*(1.0-smoothstep(-2.0,14.0,d))*live; glow += sp*vec3(1.0,0.8,0.3); }
  /* macro depth of field: detail softens away from the subject */
  vec2 fu = (m>6.5) ? (uMouse/uRes) : (uArt/uRes); float far = smoothstep(0.35,0.95, length((vUv-fu)*vec2(uRes.x/uRes.y,1.0)));
  bump *= 1.0-0.7*far;
  vec3 N = normalize(vec3(-(hx-h0)*bump, -(hy-h0)*bump, 1.0));
  vec3 L = normalize(vec3(0.45+0.2*sin(uTime*0.23), 0.55+0.15*cos(uTime*0.17), 0.72));
  vec3 Hh = normalize(L+vec3(0.,0.,1.));
  float diff = max(dot(N,L),0.0); float shin = mix(90.0,6.0,rough);
  float specIso = pow(max(dot(N,Hh),0.0), shin);
  float th = dot(normalize(T), Hh.xy); float specAn = pow(sqrt(max(0.0,1.0-th*th)), shin*0.6)*smoothstep(0.0,0.35,dot(N,L));
  float spec = mix(specIso, specAn, aniso)*specK*(1.0-rough*0.5);
  vec3 col = alb*(0.30+0.80*diff) + spec + glow;
  col *= 1.0-0.28*smoothstep(0.45,1.05,length((vUv-0.5)*vec2(1.3,1.0)));
  col += (hash21(px+fract(uTime))-0.5)*0.02;
  col = pow(max(col,0.0), vec3(1.0/2.2));
  gl_FragColor = vec4(col,1.0);
}`;

/* product glyphs, referenced with <use> */
const SPRITE = () => (
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <symbol id="g-tee" viewBox="0 0 100 100"><path d="M22 14 L38 8 Q50 19 62 8 L78 14 L94 32 L79 41 L79 92 L21 92 L21 41 L6 32 Z"/></symbol>
        <symbol id="g-polo" viewBox="0 0 100 100"><path d="M22 14 L38 8 Q50 19 62 8 L78 14 L94 32 L79 41 L79 92 L21 92 L21 41 L6 32 Z"/><path d="M38 8 L45 30 L50 23 L55 30 L62 8" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/><path d="M50 23 V44" stroke="#fff" strokeWidth="2"/><circle cx="50" cy="31" r="1.4" fill="#fff"/><circle cx="50" cy="38" r="1.4" fill="#fff"/></symbol>
        <symbol id="g-hoodie" viewBox="0 0 100 100"><path d="M20 22 L34 12 Q50 -2 66 12 L80 22 L95 40 L80 48 L80 94 L20 94 L20 48 L5 40 Z"/><path d="M38 16 Q50 8 62 16 Q50 30 38 16 Z" fill="#fff"/><path d="M33 70 H67 V90 H33 Z" fill="none" stroke="#fff" strokeWidth="2"/><path d="M44 30 V52 M56 30 V52" stroke="#fff" strokeWidth="2"/></symbol>
        <symbol id="g-jersey" viewBox="0 0 100 100"><path d="M22 14 L38 8 Q50 22 62 8 L78 14 L94 32 L79 41 L79 92 L21 92 L21 41 L6 32 Z"/><path d="M21 52 H79 M21 60 H79" stroke="#fff" strokeWidth="3"/><text x="50" y="84" textAnchor="middle" fontFamily="Bodoni Moda,serif" fontSize="22" fill="#fff">10</text></symbol>
        <symbol id="g-cap" viewBox="0 0 100 100"><path d="M18 60 Q18 26 50 26 Q82 26 82 60 Z"/><path d="M10 60 H92 Q100 66 90 71 H10 Q4 66 10 60 Z"/><path d="M50 26 V60" stroke="#fff" strokeWidth="2"/></symbol>
        <symbol id="g-box" viewBox="0 0 100 100"><path d="M14 40 H86 V88 H14 Z"/><path d="M10 28 H90 V40 H10 Z"/><path d="M50 28 V88" stroke="#fff" strokeWidth="3"/><path d="M40 28 Q50 10 50 28 Q50 10 60 28" fill="none" stroke="#fff" strokeWidth="2"/></symbol>
        <symbol id="g-bag" viewBox="0 0 100 100"><path d="M26 30 Q26 8 50 8 Q74 8 74 30 V88 Q74 94 68 94 H32 Q26 94 26 88 Z"/><path d="M34 40 H66 V70 H34 Z" fill="none" stroke="#fff" strokeWidth="2"/><path d="M38 30 Q38 16 50 16 Q62 16 62 30" fill="none" stroke="#fff" strokeWidth="2"/></symbol>
        <symbol id="g-bottle" viewBox="0 0 100 100"><path d="M42 6 H58 V18 Q68 26 68 38 V88 Q68 94 62 94 H38 Q32 94 32 88 V38 Q32 26 42 18 Z"/><path d="M38 48 H62 M38 56 H62" stroke="#fff" strokeWidth="2"/></symbol>
        <symbol id="g-note" viewBox="0 0 100 100"><path d="M24 10 H80 V92 H24 Z"/><path d="M20 24 H30 M20 40 H30 M20 56 H30 M20 72 H30" stroke="#fff" strokeWidth="3"/><path d="M40 34 H68 M40 46 H68 M40 58 H60" stroke="#fff" strokeWidth="2"/></symbol>
      </svg>
);

/* ---------- content ---------- */

type Tone = "light" | "dark";
type Side = "left" | "right";

const METHODS: { id: string; tag: string; side: Side; tone: Tone; chapter: string; kword: string; title: React.ReactNode; lede: string; facts: [string, string][]; prods: string[] }[] = [
  { id: "m-dtg", tag: "DTG", side: "left", tone: "light", chapter: "Direct-to-garment · 180 GSM combed cotton", kword: "DTG",
    title: <>Ink that <em>soaks in.</em></>,
    lede: "Water-based ink sprayed straight into the knit. It sinks between the loops instead of sitting on them, so a photograph prints with every gradient and the shirt still feels like a shirt.",
    facts: [["Best for", "Photos, gradients, art"], ["Fabric", "100% cotton"], ["Minimum", "1 piece"], ["Wash life", "50+ washes"]], prods: ["Tees", "Sweatshirts", "Totes"] },
  { id: "m-dtf", tag: "DTF", side: "right", tone: "dark", chapter: "Direct-to-film · 320 GSM fleece", kword: "DTF",
    title: <>A print that <em>sits on top.</em></>,
    lede: "The artwork is printed on film, pressed onto the fleece at heat, and the film peeled away cold. What stays is a bold, flat layer with white ink built in, so it works on black, on polyester, on anything.",
    facts: [["Best for", "Logos and vectors"], ["Fabric", "Any, including poly"], ["Minimum", "1 piece"], ["Wash life", "60+ washes"]], prods: ["Hoodies", "Jerseys", "Caps", "Bags"] },
  { id: "m-embroidery", tag: "Embroidery", side: "left", tone: "light", chapter: "Embroidery · Pique cotton", kword: "Embroidery",
    title: <>Thread, <em>four thousand</em> times.</>,
    lede: "Your artwork is digitised into a stitch file, then a needle lays satin thread across the pique, pass after pass. It does not print; it becomes part of the cloth, and it outlasts the garment.",
    facts: [["Best for", "Logos, monograms"], ["Fabric", "Pique, twill, fleece"], ["Minimum", "1 piece"], ["Life", "Outlasts the garment"]], prods: ["Polos", "Caps", "Jackets", "Towels"] },
  { id: "m-coloreel", tag: "Coloreel", side: "right", tone: "light", chapter: "Coloreel · Cotton twill", kword: "Coloreel",
    title: <>One thread, <em>every colour.</em></>,
    lede: "A single white thread, dyed on the machine as it feeds. Gradients and photoreal logos in embroidery, with no thread changes and no colour limit.",
    facts: [["Best for", "Gradient logos"], ["Fabric", "As embroidery"], ["Minimum", "1 piece"], ["Colours", "Unlimited"]], prods: ["Caps", "Polos", "Jackets"] },
  { id: "m-screen", tag: "Screen", side: "left", tone: "dark", chapter: "Screen printing · Cotton jersey", kword: "Screen",
    title: <>Pull once, print <em>five hundred.</em></>,
    lede: "Ink pulled through a mesh stencil, one colour per screen. Thick, matte, opaque, and once the screens are made every extra piece is cheap and fast. Built for events, uniforms and merch drops.",
    facts: [["Best for", "1–6 solid colours"], ["Fabric", "Cotton, blends"], ["Minimum", "50 pieces"], ["Wash life", "50+ washes"]], prods: ["Event tees", "Uniforms", "Totes"] },
  { id: "m-uv", tag: "UV", side: "right", tone: "dark", chapter: "UV printing · Brushed steel", kword: "UV",
    title: <>Colour that <em>cures on steel.</em></>,
    lede: "Droplets of ink land on the metal and an ultraviolet lamp sets them the instant they touch. Full colour on bottles, pens and boxes, slightly raised, glossy and scratch resistant.",
    facts: [["Best for", "Full colour, hard goods"], ["Surface", "Metal, glass, wood, plastic"], ["Minimum", "1 piece"], ["Finish", "Gloss, raised"]], prods: ["Bottles", "Pens", "Notebooks", "Phone cases"] },
  { id: "m-engraving", tag: "Engraving", side: "left", tone: "dark", chapter: "Laser engraving · Full-grain leather", kword: "Engraving",
    title: <>Burned in. <em>Never off.</em></>,
    lede: "A laser traces your artwork into leather, wood or steel and takes the surface with it. No ink, nothing to fade or peel. The finish for gifts, awards and anything meant to be kept.",
    facts: [["Best for", "Gifts, awards"], ["Surface", "Steel, wood, leather"], ["Minimum", "1 piece"], ["Finish", "Permanent"]], prods: ["Bottles", "Pens", "Plaques", "Gift boxes"] },
];

// Full class strings so Tailwind can see them.
const TONE = {
  light: { fg: "text-yoode-onyx", soft: "text-gray-700", mute: "text-gray-500", rule: "border-black/15", ruleBg: "bg-black/15",
    scrim: { left: "bg-linear-to-r from-white/90 via-white/70 via-[36%] to-white/0 to-[64%]", right: "bg-linear-to-l from-white/90 via-white/70 via-[36%] to-white/0 to-[64%]",
      narrow: "group-[.narrow]/f:bg-linear-to-t group-[.narrow]/f:from-white/95 group-[.narrow]/f:via-white/80 group-[.narrow]/f:via-[48%] group-[.narrow]/f:to-white/0 group-[.narrow]/f:to-[72%]" } },
  dark: { fg: "text-white", soft: "text-white/80", mute: "text-white/60", rule: "border-white/20", ruleBg: "bg-white/20",
    scrim: { left: "bg-linear-to-r from-[#0c0c0c]/90 via-[#0c0c0c]/70 via-[36%] to-[#0c0c0c]/0 to-[64%]", right: "bg-linear-to-l from-[#0c0c0c]/90 via-[#0c0c0c]/70 via-[36%] to-[#0c0c0c]/0 to-[64%]",
      narrow: "group-[.narrow]/f:bg-linear-to-t group-[.narrow]/f:from-[#0c0c0c]/95 group-[.narrow]/f:via-[#0c0c0c]/80 group-[.narrow]/f:via-[48%] group-[.narrow]/f:to-[#0c0c0c]/0 group-[.narrow]/f:to-[72%]" } },
};

const HERO_INDEX = ["DTG print", "DTF transfer", "Embroidery", "Coloreel", "Screen print", "UV print", "Engraving"];
const HERO_LINKS = ["m-dtg", "m-dtf", "m-embroidery", "m-coloreel", "m-screen", "m-uv", "m-engraving"];

const PILLARS = [
  { k: "Corporate", glyph: "g-polo", color: "text-yoode-onyx", title: <>Equip your team. <em>Define your brand.</em></>, text: "Onboarding kits, embroidered polos, event tees and gift boxes with your mark on every piece.",
    list: ["Bulk pricing from 25 pieces", "Dedicated account manager", "GST invoicing, pan-India dispatch"], go: "Explore corporate" },
  { k: "Sports & teams", glyph: "g-jersey", color: "text-yoode-coral", title: <>Kit your team. <em>Own the field.</em></>, text: "Sublimated jerseys, training wear and supporter merch. Official kit partner to Kombans FC.",
    list: ["Names and numbers per player", "Mockup request by sport", "Match-day turnaround on request"], go: "Explore sportswear" },
  { k: "Personalised", glyph: "g-hoodie", color: "text-amber-500", title: <>Make it yours. <em>One piece or a thousand.</em></>, text: "Hoodies, caps, bottles and notebooks. No minimum order, a free mockup within 24 hours.",
    list: ["Design online or at a centre", "Template gallery or your own art", "Pay only after you approve"], go: "Start designing" },
];

const MATRIX_COLS = ["DTG", "DTF", "Embroidery", "Coloreel", "Screen", "UV", "Engraving"];
// y = recommended, m = works with the right artwork, - = not offered
const MATRIX_ROWS: [string, string, string][] = [
  ["Cotton tees", "Round, V, oversized", "yymmy--"],
  ["Polos", "Pique and jersey", "myyym--"],
  ["Hoodies & sweatshirts", "Fleece, French terry", "myymy--"],
  ["Jerseys", "Polyester, sublimated", "-ymmm--"],
  ["Caps", "Cotton twill", "-yyy---"],
  ["Jackets", "Bomber, softshell", "-myy---"],
  ["Bags & totes", "Canvas, poly", "yyymy--"],
  ["Bottles & mugs", "Steel, ceramic", "-----yy"],
  ["Pens & desk", "Metal, wood", "-----yy"],
  ["Notebooks", "Leather, hardbound", "-----yy"],
  ["Gift boxes & awards", "Wood, acrylic, crystal", "-----yy"],
];

// [artwork, best fit, columns it points at in the matrix]
const PICKER: [string, string, number[]][] = [
  ["A photo or gradient", "DTG on cotton, UV on hard goods", [0, 5]],
  ["A logo in 1–6 colours", "DTF for small runs, screen for 50+", [1, 4]],
  ["Something premium and permanent", "Embroidery, Coloreel or engraving", [2, 3, 6]],
  ["500 pieces by Friday", "Screen printing, talk to us today", [4]],
];

type Swatch = [name: string, hex: string];
const PRODUCTS: { name: string; sub: string; glyph: string; how: string; badge?: string; was?: string; price: string; swatches: Swatch[] }[] = [
  { name: "Men's Cotton Polo", sub: "Pique cotton · S–XXL · 4.9★", glyph: "g-polo", how: "Embroidery", badge: "−50%", was: "₹1,560", price: "₹780", swatches: [["Navy", "#1B2A48"], ["Ink", "#15161B"], ["Bone", "#F1ECE2"], ["Bordeaux", "#7A1F2B"]] },
  { name: "Polo Half-Sleeve Jersey", sub: "Polyester · S–XXL · 4.9★", glyph: "g-jersey", how: "Sublimation · DTF", badge: "−20%", was: "₹875", price: "₹700", swatches: [["Signal red", "#C8102E"], ["Lagoon", "#2C9AAB"], ["Forest", "#2E7D4F"], ["Saffron", "#E5A100"]] },
  { name: "Heavyweight Hoodie", sub: "320 GSM fleece · XS–3XL", glyph: "g-hoodie", how: "DTF · Screen", price: "On request", swatches: [["Ink", "#15161B"], ["Sand", "#D2C6A8"], ["Amethyst", "#6C4AB6"], ["Walnut", "#7A5A42"]] },
  { name: "Corporate Gift Box", sub: "Curated kit · 4.7★", glyph: "g-box", how: "Engraving · UV", badge: "−11%", was: "₹2,800", price: "₹2,499", swatches: [["Walnut", "#7A5A42"], ["Navy", "#1B2A48"], ["Ink", "#15161B"], ["Terracotta", "#D8734F"]] },
  { name: "RedBolt Space Backpack", sub: "Laptop sleeve · embroidered", glyph: "g-bag", how: "Embroidery", price: "₹4,999", swatches: [["Lagoon", "#2C9AAB"], ["Ink", "#15161B"], ["Signal red", "#C8102E"], ["Navy", "#1B2A48"]] },
  { name: "Structured Cap", sub: "6-panel twill · 3D embroidery", glyph: "g-cap", how: "Coloreel · Embroidery", price: "On request", swatches: [["Saffron", "#E5A100"], ["Ink", "#15161B"], ["Bone", "#F1ECE2"], ["Forest", "#2E7D4F"]] },
  { name: "Steel Bottle", sub: "750 ml · double wall", glyph: "g-bottle", how: "UV · Engraving", price: "On request", swatches: [["Forest", "#2E7D4F"], ["Ink", "#15161B"], ["Sand", "#D2C6A8"], ["Bordeaux", "#7A1F2B"]] },
  { name: "Hardbound Notebook", sub: "A5 · leather cover", glyph: "g-note", how: "Engraving · Foil", price: "On request", swatches: [["Terracotta", "#D8734F"], ["Ink", "#15161B"], ["Navy", "#1B2A48"], ["Lagoon", "#2C9AAB"]] },
];

const CATS: [string, string][] = [
  ["Apparel", "Tees, polos, hoodies, jackets, uniforms"],
  ["Sportswear", "Jerseys, training kits, supporter wear"],
  ["Accessories", "Caps, bags, bottles, mugs"],
  ["Stationery", "Notebooks, pens, desk sets"],
  ["Gifting & Kids", "Gift boxes, awards, kids' wear"],
];

const STEPS: { day: string; title: string; text: string; tag: string; art: React.ReactNode }[] = [
  { day: "Day 0", title: "Choose the product.", text: "Tees, jerseys, polos, hoodies, gift kits. Tell us the quantity and sizes. There is no minimum.", tag: "Catalogue or brief", art: <use href="#g-tee" /> },
  { day: "Day 0", title: "Share the design.", text: "Upload artwork, a logo or a rough idea. Our studio vectorises it, places it and matches the colour.", tag: "Any file format", art: <><path d="M50 78 V26 M30 46 L50 26 L70 46" /><path d="M16 84 H84" /></> },
  { day: "Within 24 h", title: "Review the mockup.", text: "A detailed preview on the exact garment and shade. Revise as many times as you like, free.", tag: "Free, unlimited revisions", art: <><rect x="14" y="20" width="72" height="52" /><path d="M14 60 L38 40 L56 56 L68 46 L86 60" /><path d="M36 84 H64" /></> },
  { day: "Day 1–2", title: "Approve and order.", text: "Confirm the mockup, then pay. Production begins the day your approval lands.", tag: "Pay after approval", art: <><circle cx="50" cy="50" r="32" /><path d="M34 52 L46 63 L68 38" /></> },
  { day: "Day 5–10", title: "Production and delivery.", text: "Printed or stitched, quality-checked piece by piece, packed and shipped anywhere in India.", tag: "Pan-India", art: <use href="#g-box" /> },
];

const GOOD: [string, string][] = [
  ["No minimum order", "Order one, or one thousand. Same care either way."],
  ["Free 24-hour mockup", "See it on the exact product and colour before you pay."],
  ["Pay after approval", "Nothing goes to production until you've signed off."],
  ["Mix sizes and colours", "One order, any mix of sizes and shades, same price."],
  ["Bulk pricing", "Per-piece cost steps down with quantity. Ask for the tier."],
  ["Design help included", "No artwork yet? Start from our template gallery or brief the studio."],
  ["Pan-India delivery", "Dispatch from four centres, tracked to your door."],
  ["Reply within 2 hours", "WhatsApp, phone or email, on working days."],
];

const CENTRES: { city: string; state: string; address: string; status: string; soon?: boolean }[] = [
  { city: "Bengaluru", state: "Karnataka", address: "Ground Floor, #68 Transpade Tower, Jyoti Nivas College Rd, Koramangala 5th Block, 560095", status: "Open" },
  { city: "Trivandrum", state: "Kerala", address: "Ground Floor, CloudQ Towers, Service Rd, near Technopark Phase 1, Kazhakkoottam, 695582", status: "Open" },
  { city: "Marthandam", state: "Tamil Nadu", address: "1st Floor, Adhesh Tower, Eraviputhoorkadai, 629155", status: "Open" },
  { city: "Chennai", state: "Tamil Nadu", address: "Directions and hours on yoode.com", status: "Newest", soon: true },
];

const WALK: [string, string][] = [
  ["Walk in", "Bring a logo on your phone. Nothing else needed."],
  ["Design it", "Pick the blank, feel the fabric, choose the method with a designer beside you."],
  ["Wear it", "Approve the mockup on the spot. Single pieces can be ready the same day."],
];

const BRANDS = ["Meta", "Infosys", "Slack", "Samsung", "Amazon", "Netflix", "Google", "IBM", "Microsoft", "Cisco", "UST", "Kombans FC"];

const TESTIMONIALS: [string, string, string, string][] = [
  ["Ordered 500 personalised welcome kits for our new hires. They arrived ahead of schedule and the packaging was stunning.", "Rahul Verma", "People operations", "Welcome kits · 500"],
  ["The print quality on our custom team hoodies was phenomenal. Every detail was sharp and the fabric is premium.", "Maya Collins", "Team lead", "Hoodies · DTF"],
  ["Embroidered polos for our sales team. The stitching is flawless and they look incredibly professional.", "Ethan Brooks", "Sales director", "Polos · Embroidery"],
];

const NUMBERS: [string, string][] = [["10,000+", "Orders delivered"], ["500+", "Teams and brands"], ["50+", "Colours in stock"], ["18 yrs", "Of printing"]];

const FAQS: [string, string][] = [
  ["Do you offer bulk discounts?", "Yes. The per-piece price steps down with quantity, and screen printing gets cheaper the more you print. Tell us the number and we'll quote the tier the same day."],
  ["What is your typical turnaround time?", "Your free mockup lands within 24 hours. Most orders ship within 5 to 10 working days after you approve it. Single pieces at an experience centre can be ready the same day, and rush orders are possible when the stock is in."],
  ["Can I mix and match sizes and colours?", "Yes. One order can carry any mix of sizes and shades of the same product at the same price. Names and numbers per piece are fine too."],
  ["Which printing method is best for my design?", "Photos and gradients go DTG on cotton or UV on hard goods. Logos and flat-colour vectors go DTF for small runs and screen printing from 50 pieces. Anything that should feel premium and last goes to embroidery, Coloreel or engraving. Send the file and we'll recommend."],
  ["Do you have a minimum order quantity?", "No. One piece is an order. The only exception is screen printing, where the screens make sense from about 50 pieces."],
  ["How do I contact customer support?", "WhatsApp or call +91 8069 750 293, email info@yoode.com, or walk into any of the four experience centres. Replies within two hours on working days."],
];

/* ---------- shared bits (Yoode type + colour standards) ---------- */

const CONTAINER = "mx-auto w-full max-w-[1400px] px-6 md:px-12";
const EYEBROW = "text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-yoode-coral";
const H2 = "font-display font-extrabold uppercase tracking-tight text-yoode-onyx leading-[1.02] text-[clamp(30px,4.4vw,60px)] [&_em]:not-italic [&_em]:text-yoode-coral";
const CARD = "rounded-[24px] bg-[#F9F5F1]";

const BTN = {
  coral: "bg-yoode-coral text-white hover:bg-[#C13828]",
  onyx: "bg-yoode-onyx text-white hover:bg-yoode-coral",
  outline: "border border-yoode-onyx text-yoode-onyx hover:bg-yoode-onyx hover:text-white",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1DA851]",
  outlineLight: "border border-white/40 text-white hover:bg-white hover:text-yoode-onyx",
};

function Btn({ href, variant, children, external }: { href: string; variant: keyof typeof BTN; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      data-magnetic
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group/b inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider shadow-sm transition-colors will-change-transform ${BTN[variant]}`}
    >
      {children}
      <span aria-hidden className="inline-block transition-transform duration-300 group-hover/b:translate-x-1">→</span>
    </a>
  );
}

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text: string }) {
  return (
    <div className="mb-12 grid items-end gap-6 md:mb-16 md:grid-cols-[1.2fr_.8fr] md:gap-10">
      <div>
        <div className={`${EYEBROW} mb-3`}>{eyebrow}</div>
        <h2 data-split className={H2}>{title}</h2>
      </div>
      <p className="max-w-[44ch] text-sm font-medium leading-relaxed text-gray-500 md:justify-self-end md:text-base">{text}</p>
    </div>
  );
}

function Glyph({ id, className, color }: { id: string; className?: string; color?: string }) {
  return <svg viewBox="0 0 100 100" aria-hidden style={color ? { color } : undefined} className={`fill-current ${className ?? ""}`}><use href={`#${id}`} /></svg>;
}

function ProductCard({ p, i }: { p: (typeof PRODUCTS)[number]; i: number }) {
  const [sel, setSel] = useState(0);
  const color = p.swatches[sel][1];
  return (
    <article data-reveal className="group/c grid w-[clamp(240px,26vw,340px)] flex-none gap-4">
      <div className={`${CARD} relative grid aspect-[4/5] place-items-center overflow-hidden`}>
        <span className="absolute left-4 top-4 text-[11px] font-semibold tracking-[0.14em] text-gray-500">{String(i + 1).padStart(2, "0")}</span>
        {p.badge && <span className="absolute right-4 top-4 rounded-full bg-yoode-coral px-3 py-1 text-[10px] font-bold tracking-wider text-white">{p.badge}</span>}
        <Glyph id={p.glyph} color={color} className="w-3/5 drop-shadow-[0_18px_24px_rgba(21,22,27,.14)] transition-[transform,color] duration-700 group-hover/c:-translate-y-1.5 group-hover/c:-rotate-3" />
        <span className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-500">{p.how}</span>
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-bold leading-tight text-yoode-onyx">{p.name}</h3>
          <div className="mt-1 text-xs text-gray-500">{p.sub}</div>
        </div>
        <span className="whitespace-nowrap text-sm font-semibold text-yoode-onyx">
          {p.was && <s className="mr-2 font-normal text-gray-400">{p.was}</s>}
          {p.price}
        </span>
      </div>
      <div className="flex gap-1.5">
        {p.swatches.map(([name, hex], s) => (
          <button
            key={name}
            type="button"
            aria-label={name}
            aria-pressed={s === sel}
            onClick={() => setSel(s)}
            style={{ backgroundColor: hex }}
            className={`size-[18px] cursor-pointer rounded-full border border-black/10 transition-transform hover:scale-125 ${s === sel ? "scale-125 ring-1 ring-yoode-onyx ring-offset-2" : ""}`}
          />
        ))}
      </div>
    </article>
  );
}

function Matrix({ hot, onHot }: { hot: number[]; onHot: (cols: number[]) => void }) {
  const lit = (col: number) => (hot.includes(col) ? "bg-yoode-coral/10" : "");
  return (
    <div data-matrix className="overflow-x-auto rounded-[24px] border border-gray-200 bg-white">
      <table onPointerLeave={() => onHot([])} className="w-full min-w-[640px] border-collapse text-[13px]">
        <thead>
          <tr>
            <th className="sticky left-0 bg-white px-5 py-3.5 text-left text-xs font-semibold text-gray-500">Product</th>
            {MATRIX_COLS.map((c, i) => (
              <th key={c} onPointerEnter={() => onHot([i])} className={`px-2 py-3.5 text-center text-xs font-semibold text-yoode-onyx transition-colors ${lit(i)}`}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MATRIX_ROWS.map(([name, sub, codes]) => (
            <tr key={name} className="group/r">
              <td className="sticky left-0 whitespace-nowrap border-t border-gray-100 bg-white px-5 py-2.5 font-semibold text-yoode-onyx group-hover/r:bg-[#F9FAFB]">
                {name}
                <small className="ml-2 hidden text-xs font-normal text-gray-400 xl:inline">{sub}</small>
              </td>
              {[...codes].map((c, i) => (
                <td key={i} onPointerEnter={() => onHot([i])} className={`border-t border-gray-100 px-2 py-2.5 text-center transition-colors group-hover/r:bg-[#F9FAFB] ${lit(i)}`}>
                  {c === "y" && <i aria-label="Recommended" className="inline-block size-3 rounded-full bg-yoode-coral" />}
                  {c === "m" && <i aria-label="Works with the right artwork" className="inline-block size-3 rounded-full border-[1.5px] border-yoode-onyx" />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MethodGuide() {
  const [hot, setHot] = useState<number[]>([]);
  return (
    <section id="guide" className="bg-[#F9FAFB] py-14 lg:flex lg:min-h-[100svh] lg:items-center lg:py-10">
      <div className={`${CONTAINER} grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-12`}>
        <div>
          <h2 data-split className={`${H2} text-[clamp(26px,2.5vw,36px)]!`}>Which method for which product.</h2>
          <p className="mt-4 max-w-[40ch] text-sm font-medium leading-relaxed text-gray-500">
            Hover a method to compare. Or skip this and send us the file, we&apos;ll pick.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-gray-500">
            <span className="flex items-center gap-2"><i className="size-3 rounded-full bg-yoode-coral" />Recommended</span>
            <span className="flex items-center gap-2"><i className="size-3 rounded-full border-[1.5px] border-yoode-onyx" />Works with the right artwork</span>
          </div>
          <div className="mt-7">
            <div className="mb-2.5 font-display text-sm font-bold text-yoode-onyx">Not sure? Start from your artwork</div>
            <div className="grid gap-2">
              {PICKER.map(([art, fit, cols]) => (
                <a
                  key={art}
                  href="#quote"
                  data-reveal
                  onPointerEnter={() => setHot(cols)}
                  onPointerLeave={() => setHot([])}
                  onFocus={() => setHot(cols)}
                  onBlur={() => setHot([])}
                  className="group/pk flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-3 transition-colors hover:border-yoode-coral focus-visible:border-yoode-coral focus-visible:outline-none"
                >
                  <span>
                    <b className="block text-[13px] font-semibold text-yoode-onyx">{art}</b>
                    <span className="text-xs text-gray-500">{fit}</span>
                  </span>
                  <span aria-hidden className="text-yoode-coral transition-transform duration-300 group-hover/pk:translate-x-1">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <Matrix hot={hot} onHot={setHot} />
      </div>
    </section>
  );
}

const VERT = "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";

type View = { el: HTMLElement; p: number; mode: number; side: string };

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const smooth = (t: number) => { t = clamp01(t); return t * t * (3 - 2 * t); };
const win = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));

export function ServicesClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rootEl = rootRef.current;
    if (!rootEl) return;
    const root: HTMLDivElement = rootEl;
    gsap.registerPlugin(ScrollTrigger);

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(hover:hover)").matches;
    const $ = <T extends HTMLElement = HTMLElement>(s: string) => root.querySelector<T>(s)!;
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

    const fontsReady = document.fonts && document.fonts.load
      ? Promise.all(['600 40px "Bodoni Moda"', '400 40px "Bodoni Moda"', 'italic 400 40px "Bodoni Moda"', "400 16px Manrope", "600 16px Manrope", '400 12px "IBM Plex Mono"'].map((f) => document.fonts.load(f).catch(() => {})))
      : Promise.resolve();
    Promise.race([fontsReady, new Promise((r) => setTimeout(r, 2500))]).then(() => { if (!cancelled) init(); });

    function init() {
      ctx = gsap.context(() => {
        const hframe = $("#hframe");
        /* views: the hero (mode 7) and one per spread (mode = chapter index) */
        const wide: View = { el: $("[data-hview]"), p: 0, mode: 7, side: "left" };
        const views: Record<number, View> = {};
        $$("[data-mview]").forEach((el) => { const sec = el.closest<HTMLElement>("[data-method]")!; views[+el.dataset.view!] = { el, p: 0, mode: +el.dataset.view!, side: sec.dataset.side! }; });

        /* ---------- layout: the narrow (portrait) variant, and the chapter word fitted to its half ---------- */
        const frames = $$("[data-mframe]"), kwords = $$("[data-kword]");
        const fitKwords = () => { kwords.forEach((k) => {
          const frame = k.closest<HTMLElement>("[data-mframe]")!, nar = frame.classList.contains("narrow");
          const gut = parseFloat(getComputedStyle(frame.querySelector("[data-mcopy]")!).paddingLeft) || 24;
          const maxW = nar ? frame.clientWidth - 2 * gut : frame.clientWidth * 0.40;
          k.style.fontSize = "";
          const w = k.getBoundingClientRect().width;
          if (w > maxW && w > 0) k.style.fontSize = (parseFloat(getComputedStyle(k).fontSize) * maxW / w).toFixed(1) + "px";
        }); };
        const layout = () => { const nar = innerWidth / innerHeight < 1.0; hframe.classList.toggle("narrow", nar); frames.forEach((f) => f.classList.toggle("narrow", nar)); fitKwords(); };
        let layT = 0; on("resize", () => { cancelAnimationFrame(layT); layT = requestAnimationFrame(layout); }); layout();
        document.fonts?.ready.then(() => { if (!cancelled) fitKwords(); });

        /* ---------- the material shader ---------- */
        let three: { render: () => void; heroZoom: { v: number }; wake: (ms: number) => void } | null = null;
        const canvas = $<HTMLCanvasElement>("#gl");
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
          let activeUntil = performance.now() + 4500, lastDraw = 0;
          const wake = (ms: number) => { activeUntil = Math.max(activeUntil, performance.now() + ms); };
          onEl(canvas, "webglcontextlost", (e: Event) => { e.preventDefault(); Q.lostGL = true; });
          onEl(canvas, "webglcontextrestored", () => { Q.lostGL = false; wake(1500); });
          on("scroll", () => wake(1600), { passive: true });
          on("pointermove", () => wake(1200), { passive: true });
          on("touchmove", () => wake(1600), { passive: true });
          renderer.setClearColor(0x000000, 0); renderer.autoClear = false;
          const scene = new THREE.Scene(); const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
          const U = { uRes: { value: new THREE.Vector2(1, 1) }, uMouse: { value: new THREE.Vector2(-999, -999) }, uRipple: { value: new THREE.Vector2(-999, -999) }, uArt: { value: new THREE.Vector2(0, 0) },
            uTime: { value: 0 }, uP: { value: 0 }, uMode: { value: 7 }, uBaseA: { value: 0 }, uBaseB: { value: 0 }, uBaseMix: { value: 0 }, uZoom: { value: 1 }, uArtS: { value: 200 }, uRippleT: { value: 99 } };
          const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG, depthTest: false, depthWrite: false });
          const geo = new THREE.PlaneGeometry(2, 2);
          scene.add(new THREE.Mesh(geo, mat));
          disposers.push(() => { geo.dispose(); mat.dispose(); });

          /* hero material crossfade + pointer touch */
          const heroBase = { a: 0, b: 0, mix: 0 }; const rip = { x: -999, y: -999, t0: -99, lx: 0, ly: 0 };
          const heroZoom = { v: 0.7 };
          $$("#hindex a").forEach((a) => { onEl(a, "pointerenter", () => { const nb = +a.dataset.base!; if (nb === (heroBase.mix > 0.5 ? heroBase.b : heroBase.a)) return;
            heroBase.a = heroBase.mix > 0.5 ? heroBase.b : heroBase.a; heroBase.b = nb; heroBase.mix = 0; wake(1400); gsap.to(heroBase, { mix: 1, duration: 0.9, ease: "power2.inOut", overwrite: true }); }); });
          const heroMouse = { x: -999, y: -999 };
          onEl(wide.el, "pointermove", (e: PointerEvent) => { const r = wide.el.getBoundingClientRect(); const x = e.clientX - r.left, y = r.height - (e.clientY - r.top);
            heroMouse.x = x; heroMouse.y = y; const now = performance.now() / 1000;
            if (Math.hypot(x - rip.lx, y - rip.ly) > 90 || now - rip.t0 > 0.9) { rip.x = x; rip.y = y; rip.t0 = now; rip.lx = x; rip.ly = y; wake(2500); } }, { passive: true });
          onEl(wide.el, "pointerleave", () => { heroMouse.x = -999; heroMouse.y = -999; });
          const secMouse = { x: -999, y: -999 };
          $$("[data-mview]").forEach((el) => onEl(el, "pointermove", (e: PointerEvent) => { const r = el.getBoundingClientRect(); secMouse.x = e.clientX - r.left; secMouse.y = r.height - (e.clientY - r.top); }, { passive: true }));

          const resize = () => {
            Q.max = maxRatio();
            const ratio = Math.min(Q.max, Math.max(Q.cur, Math.sqrt(200000 / Math.max(1, innerWidth * innerHeight))));
            if (ratio !== Q.cur) { Q.cur = ratio; renderer.setPixelRatio(Q.cur); }
            renderer.setSize(innerWidth, innerHeight, false);
          };
          let rszT = 0; on("resize", () => { cancelAnimationFrame(rszT); rszT = requestAnimationFrame(() => { resize(); wake(1500); }); }); resize();

          const clock = new THREE.Clock();
          const renderInto = (el: HTMLElement, set: (w: number, h: number) => void) => {
            const r = el.getBoundingClientRect();
            if (r.bottom <= 0 || r.top >= innerHeight || r.width < 2 || r.height < 2) return false;
            const w = Math.round(r.width), h = Math.round(r.height), left = Math.round(r.left), bottom = Math.round(innerHeight - r.bottom);
            renderer.setViewport(left, bottom, w, h); renderer.setScissor(left, bottom, w, h); renderer.setScissorTest(true);
            U.uRes.value.set(w, h); set(w, h); renderer.render(scene, cam); return true;
          };
          const render = () => {
            if (Q.lostGL || document.hidden) return;
            const now = performance.now(), dt = now - Q.last; Q.last = now;
            if (dt < 1000) Q.ema = Q.ema * 0.9 + Math.min(dt, 250) * 0.1;
            const active = now < activeUntil;
            // 30 fps during interaction, 8 fps at rest; text and scrolling keep the full GSAP ticker rate.
            if (now - lastDraw < (active ? 1000 / 30 - 1 : 125)) return;
            lastDraw = now;
            if (active && now - Q.lastAdj > 600) {
              const minRatio = Math.min(Q.min, Q.max, Math.sqrt(200000 / Math.max(1, innerWidth * innerHeight)));
              if (Q.ema > 26 && Q.cur > minRatio) { Q.cur = Math.max(minRatio, Q.cur - 0.1); renderer.setPixelRatio(Q.cur); Q.lastAdj = now; Q.ema = 20; }
            }
            const t = clock.getElapsedTime(); U.uTime.value = t;
            renderer.setScissorTest(false); renderer.clear();
            const nar = innerWidth / innerHeight < 1.0;
            renderInto(wide.el, () => { U.uMode.value = 7; U.uP.value = wide.p; U.uBaseA.value = heroBase.a; U.uBaseB.value = heroBase.b; U.uBaseMix.value = heroBase.mix;
              U.uZoom.value = heroZoom.v * (1.0 + 0.8 * smooth(wide.p)); U.uMouse.value.set(heroMouse.x, heroMouse.y); U.uRipple.value.set(rip.x, rip.y); U.uRippleT.value = performance.now() / 1000 - rip.t0; });
            for (let k = 0; k < 7; k++) { const v = views[k]; if (!v) continue;
              renderInto(v.el, (w, h) => { U.uMode.value = k; U.uP.value = v.p; U.uZoom.value = 1.0; U.uMouse.value.set(secMouse.x, secMouse.y); U.uRippleT.value = 99;
                const ax = nar ? 0.5 * w : (v.side === "left" ? 0.70 * w : 0.30 * w); const ay = nar ? 0.64 * h : 0.45 * h; U.uArt.value.set(ax, ay); U.uArtS.value = Math.min(w * 0.34, h * 0.36); }); }
            renderer.setScissorTest(false);
          };
          three = { render, heroZoom, wake };
        } catch (err) { canvas.hidden = true; console.warn("WebGL unavailable", err); }

        /* ---------- text splitting ---------- */
        const linesOf = (el: HTMLElement): HTMLElement[] => {
          return [el];
        };
        const splits = new Map<Element, HTMLElement[]>(); $$("[data-split]").forEach((el) => splits.set(el, linesOf(el)));
        const itemsOf = (block: Element): HTMLElement[] => [...block.children].flatMap((ch) => splits.get(ch) || [ch as HTMLElement]);

        const tick = () => { if (three) three.render(); };
        gsap.ticker.add(tick);
        disposers.push(() => gsap.ticker.remove(tick));

        /* ---------- scroll: the hero pin, then one pin per spread ---------- */
        const heroCopy = $("#heroCopy"), hindex = $("#hindex");
        const heroItems = itemsOf(heroCopy);
        if (!reduced) {
          gsap.set(heroItems, { opacity: 0 }); gsap.set(hindex, { opacity: 0, y: 20 });
          ScrollTrigger.create({ trigger: $("[data-hero]"), start: "top top", end: "bottom bottom", scrub: 0.8, pin: hframe, pinSpacing: false, anticipatePin: 1,
            onUpdate: (st) => { wide.p = st.progress; const f = 1 - smooth(win(st.progress, 0.1, 0.65)); heroCopy.style.opacity = String(f); heroCopy.style.transform = `translateY(calc(${hframe.classList.contains("narrow") ? "0%" : "-52%"} - ${(50 * (1 - f)).toFixed(1)}px))`; hindex.style.opacity = (1 - smooth(win(st.progress, 0.3, 0.8))).toFixed(2); } });

          $$("[data-method]").forEach((sec) => {
            const k = +sec.dataset.k!, frame = sec.querySelector<HTMLElement>("[data-mframe]")!, copy = sec.querySelector<HTMLElement>("[data-mcopy]")!, bar = sec.querySelector<HTMLElement>("[data-mfill]")!, kword = sec.querySelector<HTMLElement>("[data-kword]")!;
            const items = itemsOf(copy);
            const tl = gsap.timeline({ scrollTrigger: { trigger: sec, start: "top top", end: "bottom bottom", scrub: 0.8, pin: frame, pinSpacing: false, anticipatePin: 1,
              onUpdate: (st) => { const p = st.progress; views[k].p = p; bar.style.width = (p * 100).toFixed(1) + "%";
                // the chapter word: written in from its anchored edge, then a slow 6vw drift
                const dir = sec.dataset.side === "left" ? 1 : -1, fromLeft = dir > 0 || frame.classList.contains("narrow");
                const hide = ((1 - smooth(win(p, 0.04, 0.42))) * 100).toFixed(1) + "%";
                kword.style.clipPath = fromLeft ? `inset(-20% ${hide} -30% 0)` : `inset(-20% 0 -30% ${hide})`;
                kword.style.transform = `translate3d(${(dir * (3 - 6 * p)).toFixed(2)}vw,0,0)`;
                copy.style.setProperty("--py", (12 - 24 * p).toFixed(1) + "px"); } } });
            tl.fromTo(items, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.2, stagger: 0.022, ease: "power3.out" }, 0.02);
          });

          // horizontal strips (wide screens)
          const mm = gsap.matchMedia();
          mm.add("(min-width: 901px)", () => {
            ([["#lookTrack", "[data-look]"], ["#procTrack", "[data-process]"]] as const).forEach(([id, sec]) => {
              const track = $(id);
              const dist = () => Math.max(0, track.scrollWidth - document.documentElement.clientWidth);
              gsap.to(track, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: $(sec), start: "top top", end: () => "+=" + dist(), pin: true, scrub: 0.7, invalidateOnRefresh: true, anticipatePin: 1 } });
            });
          });

          $$("[data-split]").forEach((el) => { if (el.closest("[data-hero]") || el.closest("[data-method]")) return;
            gsap.from(splits.get(el)!, { yPercent: 110, duration: 1, stagger: 0.08, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } }); });
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
            gsap.from(el, { y: 30, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 93%", once: true } }); });
          gsap.from(root.querySelectorAll("[data-matrix] tbody tr"), { opacity: 0, x: -14, duration: 0.6, stagger: 0.05, ease: "power2.out", scrollTrigger: { trigger: $("[data-matrix]"), start: "top 85%", once: true } });
        } else {
          $$("[data-method]").forEach((sec) => { views[+sec.dataset.k!].p = 0.7; });
          if (three) three.heroZoom.v = 1;
        }

        /* ---------- hero entrance on load ---------- */
        const hero = () => {
          if (reduced) return;
          gsap.fromTo(heroItems, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.06, ease: "power4.out", delay: 0.1 });
          gsap.to(hindex, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.5 });
          if (three) { three.wake(3200); gsap.to(three.heroZoom, { v: 1, duration: 2.2, ease: "power3.out" }); }
        };
        hero();
        ScrollTrigger.refresh();

        /* ---------- cursor, magnetism, chips, matrix, anchors ---------- */
        if (fine && !reduced) {
          const cur = $("#cursor"), lab = $("#cursorLabel"); const pos = { x: innerWidth / 2, y: innerHeight / 2 }, tgt = { x: pos.x, y: pos.y };
          on("pointermove", (e) => { tgt.x = e.clientX; tgt.y = e.clientY; cur.style.opacity = "1"; }, { passive: true });
          on("pointerdown", () => cur.setAttribute("data-down", "")); on("pointerup", () => cur.removeAttribute("data-down"));
          const curTick = () => { pos.x = lerp(pos.x, tgt.x, 0.22); pos.y = lerp(pos.y, tgt.y, 0.22); cur.style.transform = `translate(${pos.x}px,${pos.y}px)`; };
          gsap.ticker.add(curTick); disposers.push(() => gsap.ticker.remove(curTick));
          $$("[data-cursor]").forEach((el) => {
            onEl(el, "pointerenter", () => { lab.textContent = el.dataset.cursor!; cur.setAttribute("data-label", ""); });
            onEl(el, "pointerleave", () => cur.removeAttribute("data-label"));
          });
          $$("[data-magnetic]").forEach((el) => {
            const x = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" }), y = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
            onEl(el, "pointermove", (e: PointerEvent) => { const r = el.getBoundingClientRect(); x((e.clientX - (r.left + r.width / 2)) * 0.3); y((e.clientY - (r.top + r.height / 2)) * 0.3); });
            onEl(el, "pointerleave", () => { x(0); y(0); });
          });
        }
        $$('a[href^="#"]').forEach((a) => {
          onEl(a, "click", (e: Event) => { const id = a.getAttribute("href")!.slice(1); const el = id && document.getElementById(id); if (!el) return; e.preventDefault();
            el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" }); });
        });
      }, root);
    }

    return () => {
      cancelled = true;
      disposers.forEach((d) => d());
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="relative min-h-screen overflow-x-clip bg-white font-sans text-yoode-onyx antialiased">
      <SPRITE />

      {/* custom cursor (fine pointers only) */}
      <div id="cursor" aria-hidden className="group/c pointer-events-none fixed left-0 top-0 z-[90] text-white opacity-0 [filter:drop-shadow(0_0_1px_rgba(0,0,0,.65))] [@media(hover:none)]:hidden">
        <div className="absolute -left-[3px] -top-[3px] size-1.5 rounded-full bg-white" />
        <div className="absolute -left-[22px] -top-[22px] grid size-11 place-items-center rounded-full border border-white/70 text-[10px] font-semibold uppercase tracking-[0.12em] transition-[transform,background-color] duration-300 group-data-[label]/c:scale-[1.9] group-data-[label]/c:bg-white/15 group-data-[down]/c:scale-75">
          <span id="cursorLabel" className="opacity-0 transition-opacity duration-200 group-data-[label]/c:opacity-100">Drag</span>
        </div>
      </div>

      <canvas id="gl" aria-hidden className="pointer-events-none fixed inset-0 z-0 block size-full [contain:strict]" />

      <div className="relative z-[1]">
        {/* ================= HERO: LOOK CLOSER ================= */}
        <section data-hero id="top" aria-label="Look closer at the fabric" className="relative h-[160vh] motion-reduce:h-auto">
          <div id="hframe" className="group/h relative h-[100svh] overflow-hidden">
            <div data-hview data-view="wide" data-cursor="Touch" aria-hidden className="absolute inset-0 cursor-crosshair" />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/90 via-white/70 via-[34%] to-white/0 to-[68%] group-[.narrow]/h:bg-linear-to-b group-[.narrow]/h:via-[45%] group-[.narrow]/h:to-[80%]" />
            <div id="heroCopy" className="pointer-events-none absolute inset-x-0 top-1/2 z-[3] max-w-[min(60%,900px)] px-6 [transform:translateY(-52%)] md:px-12 *:pointer-events-auto group-[.narrow]/h:top-[clamp(84px,12vh,120px)] group-[.narrow]/h:max-w-none group-[.narrow]/h:[transform:none]">
              <div className={`${EYEBROW} mb-4`}>Custom apparel, merchandise &amp; gifting · India</div>
              <h1 data-split className="max-w-[9ch] font-display text-[clamp(44px,7vw,120px)] font-extrabold uppercase leading-[0.95] tracking-tight text-yoode-onyx group-[.narrow]/h:max-w-none group-[.narrow]/h:text-[clamp(38px,11vw,60px)] [&_em]:not-italic [&_em]:text-yoode-coral">
                Look <em>closer.</em>
              </h1>
              <p className="mt-6 max-w-[44ch] text-[clamp(14px,1.15vw,18px)] font-medium leading-relaxed text-gray-700 group-[.narrow]/h:mt-3.5">
                Anything you can wear, carry or gift, made yours seven ways. Scroll in to the fibre and watch what each one does to the cloth. Move across the fabric to touch it.
              </p>
            </div>
            <ol id="hindex" aria-label="The seven methods" className="absolute inset-x-0 bottom-0 z-[3] m-0 grid list-none grid-cols-7 border-t border-black/10 bg-white/90 p-0 group-[.narrow]/h:grid-cols-4">
              {HERO_INDEX.map((label, i) => (
                <li key={label} className={`border-r border-black/10 last:border-r-0 ${i >= 4 ? "group-[.narrow]/h:border-t" : ""}`}>
                  <a href={`#${HERO_LINKS[i]}`} data-base={i} className="group/a relative grid gap-1 overflow-hidden px-[18px] pb-[18px] pt-4 text-[13px] font-semibold text-yoode-onyx group-[.narrow]/h:p-3 group-[.narrow]/h:text-xs">
                    <small className="text-[10px] tracking-[0.14em] text-gray-500">{String(i + 1).padStart(2, "0")}</small>
                    {label}
                    <span aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-yoode-coral transition-transform duration-500 group-hover/a:scale-x-100" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================= SEVEN SPREADS ================= */}
        {METHODS.map((m, k) => {
          const t = TONE[m.tone];
          return (
            <section key={m.id} id={m.id} data-method data-k={k} data-side={m.side} data-tone={m.tone} className="relative h-[220vh] motion-reduce:h-auto">
              <div data-mframe className={`group/f relative h-[100svh] overflow-hidden ${t.fg}`}>
                <div data-mview data-view={k} aria-label={`${m.tag}, seen at the fibre`} className="absolute inset-0 cursor-crosshair" />
                <div aria-hidden className={`pointer-events-none absolute inset-0 ${t.scrim[m.side]} ${t.scrim.narrow}`} />
                <div
                  data-kword
                  aria-hidden
                  className={`pointer-events-none absolute bottom-[calc(clamp(18px,3.5vh,34px)+44px)] z-[1] select-none whitespace-nowrap font-display text-[clamp(64px,10.5vw,180px)] font-extrabold uppercase leading-none tracking-tighter opacity-90 will-change-[transform,clip-path] group-[.narrow]/f:bottom-auto group-[.narrow]/f:left-6 group-[.narrow]/f:right-auto group-[.narrow]/f:top-[clamp(70px,9vh,90px)] group-[.narrow]/f:text-left group-[.narrow]/f:text-[22vw] ${m.side === "left" ? "left-[53%]" : "right-[53%] text-right"}`}
                >
                  {m.kword}
                </div>
                <div
                  data-mcopy
                  className={`pointer-events-none absolute top-1/2 z-[3] max-w-[min(50%,720px)] px-6 [transform:translateY(calc(-50%_+_var(--py,0px)))] md:px-12 *:pointer-events-auto group-[.narrow]/f:inset-x-0 group-[.narrow]/f:left-0 group-[.narrow]/f:right-0 group-[.narrow]/f:top-auto group-[.narrow]/f:bottom-[clamp(44px,7vh,70px)] group-[.narrow]/f:max-w-none group-[.narrow]/f:[transform:translateY(var(--py,0px))] ${m.side === "left" ? "left-0" : "right-0"}`}
                >
                  <div className="mb-3 flex items-baseline gap-2.5 text-yoode-coral">
                    <b className="font-display text-[clamp(40px,4.4vw,72px)] font-extrabold leading-[0.9] tracking-tighter group-[.narrow]/f:text-[40px]">{String(k + 1).padStart(2, "0")}</b>
                    <span className={`text-[11px] font-semibold tracking-[0.14em] ${t.mute}`}>/ 07</span>
                  </div>
                  <div className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${t.mute}`}>Chapter {String(k + 1).padStart(2, "0")} · {m.chapter}</div>
                  <h2 data-split className="mt-3.5 max-w-[11ch] font-display text-[clamp(32px,4.4vw,72px)] font-extrabold uppercase leading-[0.98] tracking-tight group-[.narrow]/f:mt-2 group-[.narrow]/f:max-w-none group-[.narrow]/f:text-[clamp(28px,8vw,42px)] [&_em]:not-italic [&_em]:text-yoode-coral">
                    {m.title}
                  </h2>
                  <p className={`mt-5 max-w-[42ch] text-[clamp(14px,1.1vw,17px)] font-medium leading-relaxed group-[.narrow]/f:mt-2.5 group-[.narrow]/f:max-w-none group-[.narrow]/f:text-sm ${t.soft}`}>{m.lede}</p>
                  <ul className={`mt-6 grid max-w-[480px] list-none grid-cols-2 gap-x-7 border-t p-0 group-[.narrow]/f:mt-3 group-[.narrow]/f:max-w-none ${t.rule}`}>
                    {m.facts.map(([label, value]) => (
                      <li key={label} className={`grid gap-0.5 border-b py-3 group-[.narrow]/f:py-2 ${t.rule}`}>
                        <small className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${t.mute}`}>{label}</small>
                        <b className="text-[13px] font-semibold leading-snug group-[.narrow]/f:text-xs">{value}</b>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2 group-[.narrow]/f:hidden">
                    {m.prods.map((p) => (
                      <span key={p} className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] ${t.rule} ${t.soft}`}>{p}</span>
                    ))}
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

        <section className="relative z-[2] bg-white py-[clamp(70px,10vw,140px)]">
          <div className={`${CONTAINER} grid justify-items-center gap-5 text-center`}>
            <div className={EYEBROW}>Walk in. Design it. Wear it.</div>
            <h2 data-split className={`${H2} max-w-[18ch]`}>That&apos;s the whole counter. Bring the artwork and we&apos;ll pick the method.</h2>
            <div data-reveal className="mt-2 flex flex-wrap justify-center gap-3">
              <Btn href="#quote" variant="coral">Start your order</Btn>
              <Btn href="#guide" variant="outline">See the method guide</Btn>
            </div>
          </div>
        </section>

        {/* ================= WHO IT'S FOR ================= */}
        <section id="who" className="py-[clamp(70px,9vw,130px)]">
          <div className={CONTAINER}>
            <SectionHead eyebrow="Who it's for" title={<>Made for the team, the field, <em>or just you.</em></>} text="Everything is customised. What changes is who it's for, how many you need, and how fast you need them." />
            <div className="grid gap-6 md:grid-cols-3">
              {PILLARS.map((p, i) => (
                <a key={p.k} href="#" data-reveal data-cursor="View" className={`group/p relative grid min-h-[420px] grid-rows-[auto_1fr_auto] gap-7 overflow-hidden p-8 transition-colors duration-500 hover:bg-[#F3EBE3] ${CARD}`}>
                  <div className="relative z-[1] flex justify-between text-xs font-bold uppercase tracking-[0.2em] text-gray-500"><span>{p.k}</span><span>{String(i + 1).padStart(2, "0")}</span></div>
                  <div className="relative z-[1]">
                    <h3 className="font-display text-[clamp(22px,2.2vw,32px)] font-extrabold uppercase leading-[1.05] tracking-tight [&_em]:not-italic [&_em]:text-yoode-coral">{p.title}</h3>
                    <p className="mt-3.5 max-w-[30ch] text-sm font-medium leading-relaxed text-gray-500">{p.text}</p>
                    <ul className="mt-4 grid list-none gap-1.5 p-0 text-[13px] font-medium text-yoode-onyx">
                      {p.list.map((l) => <li key={l} className="before:mr-1.5 before:text-yoode-coral before:content-['—']">{l}</li>)}
                    </ul>
                  </div>
                  <span className="relative z-[1] inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider">
                    {p.go} <span aria-hidden className="transition-transform duration-300 group-hover/p:translate-x-1.5">→</span>
                  </span>
                  <Glyph id={p.glyph} className={`pointer-events-none absolute -bottom-[8%] -right-[10%] w-3/5 opacity-90 transition-transform duration-700 group-hover/p:-translate-x-[6%] group-hover/p:-translate-y-[6%] group-hover/p:-rotate-[4deg] ${p.color}`} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================= METHOD GUIDE ================= */}
        <MethodGuide />

        {/* ================= PRODUCTS ================= */}
        <section id="shop" data-look className="overflow-hidden py-[clamp(70px,9vw,130px)]">
          <div className={CONTAINER}>
            <SectionHead eyebrow="Most loved" title={<>The pieces teams <em>come back for.</em></>} text="Pick a colour on any card. Every piece ships in bulk, customised with the method noted on it. Prices are per piece before customisation." />
          </div>
          <div id="lookTrack" className="flex gap-5 px-6 will-change-transform md:px-12">
            {PRODUCTS.map((p, i) => <ProductCard key={p.name} p={p} i={i} />)}
          </div>
          <div className={`${CONTAINER} mt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider text-gray-500`}>
            <span>Prices per piece before customisation · bulk pricing on request</span>
            <Btn href="#" variant="outline">Shop all</Btn>
          </div>
        </section>

        <section className={`${CONTAINER} pb-[clamp(70px,9vw,130px)]`}>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
            {CATS.map(([name, text]) => (
              <a key={name} href="#" data-reveal className={`grid content-start gap-2 p-5 transition-colors hover:bg-[#F3EBE3] ${CARD}`}>
                <b className="font-display text-lg font-bold">{name}</b>
                <span className="text-[13px] text-gray-500">{text}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section id="process" data-process className="overflow-hidden bg-[#F9FAFB] py-[clamp(70px,9vw,130px)]">
          <div className={CONTAINER}>
            <SectionHead eyebrow="How it works" title={<>Idea to delivery in <em>five</em> steps.</>} text="You pay only after you approve the mockup. From there, production and quality checks are on us." />
          </div>
          <div id="procTrack" className="flex gap-5 px-6 will-change-transform md:px-12 max-[900px]:flex-col">
            {STEPS.map((s, i) => (
              <article key={s.title} data-reveal className="grid min-h-[420px] w-[min(80vw,540px)] flex-none grid-rows-[auto_1fr_auto] gap-7 rounded-[24px] border border-gray-100 bg-white p-7 max-[900px]:min-h-0 max-[900px]:w-auto">
                <div className="flex items-start justify-between font-display text-[72px] font-extrabold leading-[0.85] tracking-tighter text-yoode-coral">
                  {String(i + 1).padStart(2, "0")}
                  <small className="pt-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">{s.day}</small>
                </div>
                <div>
                  <h3 className="font-display text-[clamp(22px,2.2vw,32px)] font-extrabold uppercase leading-[1.05] tracking-tight">{s.title}</h3>
                  <p className="mt-3 max-w-[34ch] text-sm font-medium leading-relaxed text-gray-500">{s.text}</p>
                </div>
                <div className="flex h-[110px] items-end justify-between border-t border-gray-100 pt-4">
                  <svg viewBox="0 0 100 100" aria-hidden className="h-[84px] w-auto fill-none stroke-yoode-onyx stroke-[3] [&_use]:fill-yoode-onyx [&_use]:stroke-none">{s.art}</svg>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">{s.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#F9FAFB] pb-[clamp(70px,9vw,130px)]">
          <div className={`${CONTAINER} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
            {GOOD.map(([b, text]) => (
              <div key={b} data-reveal className="grid content-start gap-2 rounded-[20px] bg-white p-6">
                <b className="font-display text-lg font-bold leading-tight">{b}</b>
                <span className="max-w-[26ch] text-sm text-gray-500">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CENTRES ================= */}
        <section id="centres" className="py-[clamp(70px,9vw,130px)]">
          <div className={CONTAINER}>
            <SectionHead eyebrow="Experience centres" title={<>See it. Touch it. <em>Make it yours.</em></>} text="Most merch is bought off a screen. Ours has four front doors. Walk in for fabric swatches, samples and a mockup on the spot." />
            <div className="grid gap-5 md:grid-cols-2">
              {CENTRES.map((c) => (
                <div key={c.city} data-reveal className={`grid items-start gap-3 p-7 md:grid-cols-[auto_1fr_auto] md:gap-6 ${CARD}`}>
                  <div>
                    <div className="font-display text-[clamp(24px,2.4vw,36px)] font-extrabold uppercase leading-none tracking-tight">{c.city}</div>
                    <div className="mt-1.5 text-sm text-gray-500">{c.state}</div>
                  </div>
                  <address className="max-w-[30ch] text-sm not-italic text-gray-500">{c.address}</address>
                  <div className="flex items-center gap-2 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.12em]">
                    <i className={`size-[7px] rounded-full ${c.soon ? "bg-gray-300" : "bg-[#25D366]"}`} />{c.status}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {WALK.map(([b, text]) => (
                <div key={b} className="border-t border-gray-200 pt-4 text-sm text-gray-500">
                  <b className="mb-1 block font-semibold text-yoode-onyx">{b}</b>{text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROOF ================= */}
        <div aria-label="Trusted by" className="overflow-hidden border-y border-gray-200 py-5">
          <div className="animate-marquee gap-16 whitespace-nowrap">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <span key={i} className="font-display text-[clamp(20px,2.4vw,32px)] font-bold text-yoode-onyx after:ml-16 after:text-yoode-coral after:content-['·']">{b}</span>
            ))}
          </div>
        </div>
        <section className="py-[clamp(70px,9vw,130px)]">
          <div className={CONTAINER}>
            <SectionHead eyebrow="From the order book" title={<>Loved by people who <em>care</em> about quality.</>} text="Real orders from teams who turned an idea into something people actually wear." />
            <div className="grid gap-5 lg:grid-cols-3">
              {TESTIMONIALS.map(([quote, who, role, order]) => (
                <div key={who} data-reveal className={`grid min-h-[300px] grid-rows-[auto_1fr_auto] gap-5 p-8 ${CARD}`}>
                  <div className="text-[13px] tracking-[0.2em] text-yoode-coral">★★★★★</div>
                  <blockquote className="m-0 font-display text-[clamp(18px,1.5vw,22px)] font-semibold leading-snug">{quote}</blockquote>
                  <div className="flex justify-between gap-3 text-[13px] text-gray-500"><span><b className="font-semibold text-yoode-onyx">{who}</b> · {role}</span><span>{order}</span></div>
                </div>
              ))}
            </div>
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-gray-200 pt-7 tabular-nums lg:grid-cols-4">
              {NUMBERS.map(([n, label]) => (
                <div key={label} data-reveal>
                  <b className="block font-display text-[clamp(36px,5vw,72px)] font-extrabold leading-[0.95] tracking-tight text-yoode-onyx">{n}</b>
                  <small className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section id="faq" className="bg-[#F9FAFB] py-[clamp(70px,9vw,130px)]">
          <div className={`${CONTAINER} grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]`}>
            <aside className="lg:sticky lg:top-28">
              <div className={`${EYEBROW} mb-3`}>Before you order</div>
              <h2 data-split className={H2}>Answers to the <em>usual</em> questions.</h2>
              <p className="mt-5 max-w-[36ch] text-sm font-medium leading-relaxed text-gray-500 md:text-base">Still have one? A real person replies within two hours on working days.</p>
              <div className="mt-5"><Btn href="#quote" variant="onyx">Ask us</Btn></div>
            </aside>
            <div>
              {FAQS.map(([q, a], i) => (
                <details key={q} open={i === 0} data-reveal className="group/d border-t border-gray-200 last:border-b">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-display text-base font-bold leading-snug md:text-xl [&::-webkit-details-marker]:hidden">
                    {q}
                    <i className="grid size-9 flex-none place-items-center rounded-full border border-gray-300 text-base font-normal not-italic transition-[transform,background-color] duration-300 group-open/d:rotate-45 group-open/d:bg-yoode-onyx group-open/d:text-white">+</i>
                  </summary>
                  <div className="max-w-[56ch] pb-6 text-sm font-medium leading-relaxed text-gray-500 md:text-base">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================= END ================= */}
        <section id="quote" className="relative overflow-hidden bg-yoode-onyx py-[clamp(90px,12vw,170px)] text-white">
          <svg aria-hidden className="pointer-events-none absolute -bottom-[10%] -right-[4%] w-[42%] fill-current text-white/5"><use href="#g-tee" /></svg>
          <div className={`${CONTAINER} relative`}>
            <div className={`${EYEBROW} mb-5`}>Ready when you are</div>
            <h2 data-split className="max-w-[12ch] font-display text-[clamp(38px,7vw,112px)] font-extrabold uppercase leading-[0.95] tracking-tight [&_em]:not-italic [&_em]:text-yoode-coral">
              Your brand deserves more than <em>ordinary.</em>
            </h2>
            <p className="mt-7 max-w-[44ch] text-sm font-medium leading-relaxed text-white/70 md:text-base">Tell us what you need. A real person replies within two hours on working days, and your free mockup lands within twenty-four.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Btn href="https://wa.me/918069750293" variant="whatsapp" external>Chat on WhatsApp</Btn>
              <Btn href="#shop" variant="outlineLight">Browse the catalogue</Btn>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
