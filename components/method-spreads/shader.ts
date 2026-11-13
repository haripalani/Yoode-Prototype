/* The fabric material shader behind every method spread: one height field + lighting per method (uMode = method index). */

export const FRAG = `
precision highp float;
varying vec2 vUv;
uniform vec2 uRes, uMouse, uRipple, uArt;
uniform float uTime, uP, uMode, uBaseA, uBaseB, uBaseMix, uZoom, uArtS, uRippleT, uTopFade;
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
  float topDist = uRes.y - px.y;
  // spreads fade in over their top 96px to blend with the section above; a hero (uTopFade = 0) starts solid
  float alpha = (m < 6.5 && uTopFade > 0.5) ? smoothstep(0.0, 96.0, topDist) : 1.0;
  gl_FragColor = vec4(col, alpha);
}`;

export const VERT = "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }";
