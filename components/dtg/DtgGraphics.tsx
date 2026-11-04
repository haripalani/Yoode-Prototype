import React from "react";

export function HeroTShirtMockup({ className = "w-full max-w-[400px] h-auto" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 410" role="img" aria-label="DTG T-shirt illustrative product mockup" className={className}>
      <defs>
        <linearGradient id="heroTeeGrad" x1="0" y1="0" x2="1" y2="0.8">
          <stop stopColor="#F6F5F0" />
          <stop offset="0.55" stopColor="#F6F5F0" />
          <stop offset="1" stopColor="#F6F5F0" />
        </linearGradient>
        <filter id="heroSoftShadow" x="-30%" y="-40%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="400" height="410" rx="22" fill="#DAE6FA" />
      <ellipse cx="204" cy="381" rx="115" ry="12" fill="#0d1f43" opacity="0.13" filter="url(#heroSoftShadow)" />
      <path
        d="M119 84 L158 59 Q178 83 201 83 Q224 83 245 59 L283 84 L331 164 L282 192 L265 164 L278 365 Q201 383 122 365 L135 164 L118 192 L69 164 Z"
        fill="url(#heroTeeGrad)"
        stroke="#C9D2DA"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M118 92Q133 150 130 180M282 92Q265 146 270 180M149 85 Q174 126 168 181M253 83Q224 125 233 180"
        stroke="#71808F"
        strokeOpacity="0.12"
        strokeWidth="3"
        fill="none"
      />
      <path d="M163 61 Q199 116 240 61 Q218 52 201 53 Q182 51 163 61Z" fill="#B6B6B6" opacity="0.8" />
      <path d="M125 353Q200 366 275 353" stroke="#75818D" strokeOpacity="0.25" strokeWidth="2" fill="none" />
      <g transform="translate(201 237) scale(0.7)">
        <circle cy="-22" r="43" fill="#FFAE38" />
        <path d="M-61 0 Q-21 -34 4 0 T61 0" fill="none" stroke="#103FC9" strokeWidth="12" strokeLinecap="round" />
        <path d="M-59 19 Q-23 -14 4 19 T59 19" fill="none" stroke="#FF4C77" strokeWidth="12" strokeLinecap="round" />
        <path d="M-54 38 Q-22 7 4 38 T53 38" fill="none" stroke="#02A9C4" strokeWidth="10" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function DtgMachineIllustration({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 590 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of DTG printing machine printing directly on a T-shirt" className={className}>
      <rect width="590" height="430" rx="16" fill="#e3e9f3" />
      <rect x="33" y="58" width="525" height="199" rx="20" fill="#25354c" />
      <rect x="53" y="82" width="482" height="126" rx="9" fill="#3D546A" />
      <rect x="65" y="92" width="452" height="66" rx="6" fill="#1C2738" />
      <rect x="84" y="107" width="65" height="35" rx="5" fill="#15C1DF" />
      <rect x="156" y="107" width="65" height="35" rx="5" fill="#FF6D88" />
      <rect x="228" y="107" width="65" height="35" rx="5" fill="#F4C85A" />
      <rect x="300" y="107" width="65" height="35" rx="5" fill="#F7F8FC" />
      <rect x="372" y="107" width="65" height="35" rx="5" fill="#11191F" />
      <rect x="163" y="191" width="267" height="105" rx="10" fill="#161F2D" />
      <rect x="55" y="228" width="481" height="24" rx="8" fill="#10192D" />
      <path d="M226 231 270 210Q296 241 328 210L371 231L410 271L375 295L360 281L370 388H223L232 281L217 295L183 271Z" fill="#fbfbfa" stroke="#c1ccd8" strokeWidth="3" />
      <g transform="translate(296 322) scale(0.4)">
        <circle cy="-22" r="43" fill="#FFAE38" />
        <path d="M-61 0 Q-21 -34 4 0 T61 0" fill="none" stroke="#103FC9" strokeWidth="12" strokeLinecap="round" />
        <path d="M-59 19 Q-23 -14 4 19 T59 19" fill="none" stroke="#FF4C77" strokeWidth="12" strokeLinecap="round" />
        <path d="M-54 38 Q-22 7 4 38 T53 38" fill="none" stroke="#02A9C4" strokeWidth="10" strokeLinecap="round" />
      </g>
      <rect x="34" y="250" width="522" height="28" rx="7" fill="#506077" />
      <rect x="51" y="277" width="492" height="12" rx="6" fill="#273447" />
      <circle cx="491" cy="190" r="9" fill="#6DEA9C" />
      <path d="M110 48H474" stroke="#b6c1d2" strokeWidth="3" strokeDasharray="8 9" />
    </svg>
  );
}

export function CustomTShirtMockup({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 410" role="img" aria-label="DTG T-shirt illustrative product mockup" className={className}>
      <defs>
        <linearGradient id="gf6f6f2sunsettf" x1="0" y1="0" x2="1" y2="0.8">
          <stop stopColor="#f6f6f2" />
          <stop offset="0.55" stopColor="#f6f6f2" />
          <stop offset="1" stopColor="#f6f6f2" />
        </linearGradient>
        <filter id="softShadow1" x="-30%" y="-40%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="400" height="410" rx="22" fill="#e8eef6" />
      <ellipse cx="204" cy="381" rx="115" ry="12" fill="#0d1f43" opacity="0.13" filter="url(#softShadow1)" />
      <path
        d="M119 84 L158 59 Q178 83 201 83 Q224 83 245 59 L283 84 L331 164 L282 192 L265 164 L278 365 Q201 383 122 365 L135 164 L118 192 L69 164 Z"
        fill="url(#gf6f6f2sunsettf)"
        stroke="#C9D2DA"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M118 92Q133 150 130 180M282 92Q265 146 270 180M149 85 Q174 126 168 181M253 83Q224 125 233 180"
        stroke="#71808F"
        strokeOpacity="0.12"
        strokeWidth="3"
        fill="none"
      />
      <path d="M163 61 Q199 116 240 61 Q218 52 201 53 Q182 51 163 61Z" fill="#B6B6B6" opacity="0.8" />
      <path d="M125 353Q200 366 275 353" stroke="#75818D" strokeOpacity="0.25" strokeWidth="2" fill="none" />
      <g transform="translate(201 237) scale(0.7)">
        <circle cy="-22" r="43" fill="#FFAE38" />
        <path d="M-61 0 Q-21 -34 4 0 T61 0" fill="none" stroke="#103FC9" strokeWidth="12" strokeLinecap="round" />
        <path d="M-59 19 Q-23 -14 4 19 T59 19" fill="none" stroke="#FF4C77" strokeWidth="12" strokeLinecap="round" />
        <path d="M-54 38 Q-22 7 4 38 T53 38" fill="none" stroke="#02A9C4" strokeWidth="10" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function OversizedTShirtMockup({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 410" role="img" aria-label="DTG T-shirt illustrative product mockup" className={className}>
      <defs>
        <linearGradient id="g252c3dfloratf" x1="0" y1="0" x2="1" y2="0.8">
          <stop stopColor="#252c3d" />
          <stop offset="0.55" stopColor="#252c3d" />
          <stop offset="1" stopColor="#252c3d" />
        </linearGradient>
        <filter id="softShadow2" x="-30%" y="-40%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="400" height="410" rx="22" fill="#eef1f2" />
      <ellipse cx="204" cy="381" rx="115" ry="12" fill="#0d1f43" opacity="0.13" filter="url(#softShadow2)" />
      <path
        d="M119 84 L158 59 Q178 83 201 83 Q224 83 245 59 L283 84 L331 164 L282 192 L265 164 L278 365 Q201 383 122 365 L135 164 L118 192 L69 164 Z"
        fill="url(#g252c3dfloratf)"
        stroke="#C9D2DA"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M118 92Q133 150 130 180M282 92Q265 146 270 180M149 85 Q174 126 168 181M253 83Q224 125 233 180"
        stroke="#71808F"
        strokeOpacity="0.12"
        strokeWidth="3"
        fill="none"
      />
      <path d="M163 61 Q199 116 240 61 Q218 52 201 53 Q182 51 163 61Z" fill="#B6B6B6" opacity="0.8" />
      <path d="M125 353Q200 366 275 353" stroke="#75818D" strokeOpacity="0.25" strokeWidth="2" fill="none" />
      <g transform="translate(201 237) scale(0.7)">
        <path d="M0 65Q-14 6 -4 -74" stroke="#37755C" strokeWidth="6" fill="none" />
        <path d="M-2 -5Q-67 -10 -43 -56Q-17 -53 -2 -5" fill="#60BEB2" />
        <path d="M1 -3Q55 -17 39 -60Q10 -50 1 -3" fill="#82D887" />
        <path d="M2 33Q-50 18 -47 -13Q-8 -17 2 33" fill="#FFAA41" />
        <circle cx="6" cy="-68" r="27" fill="#FF567E" />
        <circle cx="6" cy="-68" r="14" fill="#FCB75A" />
        <path d="M-17 -90L-25 -107M25 -90L34 -108" stroke="#FF567E" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function HoodieMockup({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 410" role="img" aria-label="DTG T-shirt illustrative product mockup" className={className}>
      <defs>
        <linearGradient id="gd8d5d0orbithf" x1="0" y1="0" x2="1" y2="0.8">
          <stop stopColor="#d8d5d0" />
          <stop offset="0.55" stopColor="#d8d5d0" />
          <stop offset="1" stopColor="#d8d5d0" />
        </linearGradient>
        <filter id="softShadow3" x="-30%" y="-40%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="400" height="410" rx="22" fill="#eaf0f7" />
      <ellipse cx="204" cy="381" rx="115" ry="12" fill="#0d1f43" opacity="0.13" filter="url(#softShadow3)" />
      <path
        d="M122 99 L162 77 Q174 100 201 99 Q228 100 242 77 L281 99 L330 177 L278 201 L265 170 L277 371 Q200 389 123 371 L136 170 L123 201 L72 177 Z"
        fill="url(#gd8d5d0orbithf)"
        stroke="#C9D2DA"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M118 92Q133 150 130 180M282 92Q265 146 270 180M149 85 Q174 126 168 181M253 83Q224 125 233 180"
        stroke="#71808F"
        strokeOpacity="0.12"
        strokeWidth="3"
        fill="none"
      />
      <path d="M165 72 Q199 21 238 72 L254 93Q203 115 149 93Z" fill="#CBD0D7" opacity="0.9" />
      <path d="M165 80Q200 110 238 80" stroke="#9AABB5" strokeWidth="3" fill="none" />
      <path d="M125 353Q200 366 275 353" stroke="#75818D" strokeOpacity="0.25" strokeWidth="2" fill="none" />
      <g transform="translate(201 237) scale(0.72)">
        <circle r="54" fill="#F2CF7B" />
        <circle r="30" fill="#1449C6" />
        <ellipse rx="78" ry="29" stroke="#F4605E" strokeWidth="10" fill="none" transform="rotate(-25)" />
        <circle cx="48" cy="-48" r="13" fill="#F4605E" />
      </g>
    </svg>
  );
}

export function SweatshirtMockup({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 410" role="img" aria-label="DTG T-shirt illustrative product mockup" className={className}>
      <defs>
        <linearGradient id="gd0dcddletterhf" x1="0" y1="0" x2="1" y2="0.8">
          <stop stopColor="#d0dcdd" />
          <stop offset="0.55" stopColor="#d0dcdd" />
          <stop offset="1" stopColor="#d0dcdd" />
        </linearGradient>
        <filter id="softShadow4" x="-30%" y="-40%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="400" height="410" rx="22" fill="#eff2f4" />
      <ellipse cx="204" cy="381" rx="115" ry="12" fill="#0d1f43" opacity="0.13" filter="url(#softShadow4)" />
      <path
        d="M122 99 L162 77 Q174 100 201 99 Q228 100 242 77 L281 99 L330 177 L278 201 L265 170 L277 371 Q200 389 123 371 L136 170 L123 201 L72 177 Z"
        fill="url(#gd0dcddletterhf)"
        stroke="#C9D2DA"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M118 92Q133 150 130 180M282 92Q265 146 270 180M149 85 Q174 126 168 181M253 83Q224 125 233 180"
        stroke="#71808F"
        strokeOpacity="0.12"
        strokeWidth="3"
        fill="none"
      />
      <path d="M165 72 Q199 21 238 72 L254 93Q203 115 149 93Z" fill="#CBD0D7" opacity="0.9" />
      <path d="M165 80Q200 110 238 80" stroke="#9AABB5" strokeWidth="3" fill="none" />
      <path d="M125 353Q200 366 275 353" stroke="#75818D" strokeOpacity="0.25" strokeWidth="2" fill="none" />
      <g transform="translate(201 237) scale(0.72)">
        <rect x="-59" y="-55" width="118" height="112" rx="17" fill="#1F55DB" />
        <text y="-3" fontFamily="Arial" fontSize="33" fontWeight="900" textAnchor="middle" fill="#fff" letterSpacing="2">
          GO
        </text>
        <text y="28" fontFamily="Arial" fontSize="18" fontWeight="900" textAnchor="middle" fill="#BAFF8D" letterSpacing="3">
          BOLD
        </text>
        <path d="M-35 36H36" stroke="#BAFF8D" strokeWidth="4" />
      </g>
    </svg>
  );
}

export function ArtworkBefore({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 410" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="400" height="410" fill="#EDF2F9" />
      <rect x="47" y="54" width="306" height="306" rx="17" fill="white" stroke="#d8dfe9" strokeWidth="4" />
      <g transform="translate(200 202) scale(1.24)">
        <circle cy="-22" r="43" fill="#FFAE38" />
        <path d="M-61 0 Q-21 -34 4 0 T61 0" fill="none" stroke="#103FC9" strokeWidth="12" strokeLinecap="round" />
        <path d="M-59 19 Q-23 -14 4 19 T59 19" fill="none" stroke="#FF4C77" strokeWidth="12" strokeLinecap="round" />
        <path d="M-54 38 Q-22 7 4 38 T53 38" fill="none" stroke="#02A9C4" strokeWidth="10" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function ArtworkAfter({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 410" role="img" aria-label="DTG T-shirt illustrative product mockup" className={className}>
      <defs>
        <linearGradient id="gf8f8f6sunsettf" x1="0" y1="0" x2="1" y2="0.8">
          <stop stopColor="#f8f8f6" />
          <stop offset="0.55" stopColor="#f8f8f6" />
          <stop offset="1" stopColor="#f8f8f6" />
        </linearGradient>
        <filter id="softShadowAfter" x="-30%" y="-40%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="400" height="410" rx="22" fill="#e4ebfa" />
      <ellipse cx="204" cy="381" rx="115" ry="12" fill="#0d1f43" opacity="0.13" filter="url(#softShadowAfter)" />
      <path
        d="M119 84 L158 59 Q178 83 201 83 Q224 83 245 59 L283 84 L331 164 L282 192 L265 164 L278 365 Q201 383 122 365 L135 164 L118 192 L69 164 Z"
        fill="url(#gf8f8f6sunsettf)"
        stroke="#C9D2DA"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M118 92Q133 150 130 180M282 92Q265 146 270 180M149 85 Q174 126 168 181M253 83Q224 125 233 180"
        stroke="#71808F"
        strokeOpacity="0.12"
        strokeWidth="3"
        fill="none"
      />
      <path d="M163 61 Q199 116 240 61 Q218 52 201 53 Q182 51 163 61Z" fill="#B6B6B6" opacity="0.8" />
      <path d="M125 353Q200 366 275 353" stroke="#75818D" strokeOpacity="0.25" strokeWidth="2" fill="none" />
      <g transform="translate(201 237) scale(0.7)">
        <circle cy="-22" r="43" fill="#FFAE38" />
        <path d="M-61 0 Q-21 -34 4 0 T61 0" fill="none" stroke="#103FC9" strokeWidth="12" strokeLinecap="round" />
        <path d="M-59 19 Q-23 -14 4 19 T59 19" fill="none" stroke="#FF4C77" strokeWidth="12" strokeLinecap="round" />
        <path d="M-54 38 Q-22 7 4 38 T53 38" fill="none" stroke="#02A9C4" strokeWidth="10" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function VideoPosterGraphic({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 450" role="img" aria-label="Illustration of a direct-to-garment printer applying colourful artwork to a T-shirt" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <linearGradient id="videoBg" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#142b50" />
          <stop offset="0.55" stopColor="#18478a" />
          <stop offset="1" stopColor="#3670d4" />
        </linearGradient>
        <linearGradient id="videoMachine" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#394e70" />
          <stop offset="1" stopColor="#15263d" />
        </linearGradient>
        <linearGradient id="videoShirt" x1="0" x2="0.8" y1="0" y2="1">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#dce9f7" />
        </linearGradient>
        <filter id="videoShadow">
          <feGaussianBlur stdDeviation="13" />
        </filter>
        <pattern id="videoGrid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="#ffffff" strokeOpacity="0.07" />
        </pattern>
      </defs>
      <rect width="800" height="450" fill="url(#videoBg)" />
      <rect width="800" height="450" fill="url(#videoGrid)" />
      <circle cx="640" cy="108" r="190" fill="#5c86df" opacity="0.15" />
      <ellipse cx="405" cy="379" rx="300" ry="31" fill="#030b18" opacity="0.4" filter="url(#videoShadow)" />
      <path d="M154 136L237 105H646L708 140V256L677 296H171L132 267V181Z" fill="url(#videoMachine)" stroke="#7492c0" strokeWidth="3" />
      <path d="M168 150L241 127H644L692 149V180H168Z" fill="#071426" stroke="#697f9f" strokeWidth="2" />
      <path d="M185 190H658V250H185Z" fill="#101e34" stroke="#5176b8" strokeWidth="2" />
      <path d="M192 215H650" stroke="#758fb9" strokeWidth="5" strokeLinecap="round" />
      <g transform="translate(302 177)">
        <rect width="160" height="71" rx="7" fill="#273f65" stroke="#6487d2" strokeWidth="3" />
        <rect x="25" y="10" width="108" height="19" rx="4" fill="#131f32" />
        <text x="79" y="25" fill="#e9f6ff" fontSize="11" fontFamily="Arial" fontWeight="800" textAnchor="middle" letterSpacing="1">
          DTG PRINT HEAD
        </text>
        <path d="M38 47H123" stroke="#73c5ff" strokeWidth="3" strokeLinecap="round" />
      </g>
      <path d="M190 264H650L678 336H164Z" fill="#0a1b30" stroke="#8aa3c7" strokeWidth="3" />
      <path d="M234 293H603L623 359H212Z" fill="#7694bc" stroke="#c6d9f2" strokeWidth="3" />
      <path d="M301 279L334 272Q349 287 382 287Q412 287 431 272L471 279L509 314L484 337L465 319L474 369Q384 382 294 369L300 318L281 337L257 314Z" fill="url(#videoShirt)" stroke="#c4d5e9" strokeWidth="3" />
      <g transform="translate(381 333)">
        <circle cx="0" cy="0" r="26" fill="#f4b63a" />
        <path d="M-18 -8Q0 -32 17 -12Q-17 -2 7 19Q-17 7 -18 -8" fill="#ed497d" />
        <path d="M-8 5Q0 -16 26 -7Q9 1 14 18" fill="#23aedc" />
        <path d="M-20 23Q-3 5 23 20" stroke="#2351c7" strokeWidth="6" fill="none" />
      </g>
      <rect x="229" y="131" width="46" height="8" rx="4" fill="#4ccbd7" />
      <circle cx="645" cy="151" r="6" fill="#7cdb91" />
      <circle cx="664" cy="151" r="6" fill="#f4bc55" />
      <path d="M169 298H677" stroke="#6a82a8" strokeWidth="2" opacity="0.4" />
    </svg>
  );
}

export function FrontPrintMockup({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 410" role="img" aria-label="DTG T-shirt illustrative product mockup" className={className}>
      <defs>
        <linearGradient id="gf8f7f2sunsettf" x1="0" y1="0" x2="1" y2="0.8">
          <stop stopColor="#F8F7F2" />
          <stop offset="0.55" stopColor="#F8F7F2" />
          <stop offset="1" stopColor="#F8F7F2" />
        </linearGradient>
        <filter id="softShadowFront" x="-30%" y="-40%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="400" height="410" rx="22" fill="#EEF1F6" />
      <ellipse cx="204" cy="381" rx="115" ry="12" fill="#0d1f43" opacity="0.13" filter="url(#softShadowFront)" />
      <path
        d="M119 84 L158 59 Q178 83 201 83 Q224 83 245 59 L283 84 L331 164 L282 192 L265 164 L278 365 Q201 383 122 365 L135 164 L118 192 L69 164 Z"
        fill="url(#gf8f7f2sunsettf)"
        stroke="#C9D2DA"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M118 92Q133 150 130 180M282 92Q265 146 270 180M149 85 Q174 126 168 181M253 83Q224 125 233 180"
        stroke="#71808F"
        strokeOpacity="0.12"
        strokeWidth="3"
        fill="none"
      />
      <path d="M163 61 Q199 116 240 61 Q218 52 201 53 Q182 51 163 61Z" fill="#B6B6B6" opacity="0.8" />
      <path d="M125 353Q200 366 275 353" stroke="#75818D" strokeOpacity="0.25" strokeWidth="2" fill="none" />
      <g transform="translate(201 237) scale(0.7)">
        <circle cy="-22" r="43" fill="#FFAE38" />
        <path d="M-61 0 Q-21 -34 4 0 T61 0" fill="none" stroke="#103FC9" strokeWidth="12" strokeLinecap="round" />
        <path d="M-59 19 Q-23 -14 4 19 T59 19" fill="none" stroke="#FF4C77" strokeWidth="12" strokeLinecap="round" />
        <path d="M-54 38 Q-22 7 4 38 T53 38" fill="none" stroke="#02A9C4" strokeWidth="10" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function BackPrintMockup({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 410" role="img" aria-label="DTG T-shirt illustrative product mockup" className={className}>
      <defs>
        <linearGradient id="gf8f7f2floratb" x1="0" y1="0" x2="1" y2="0.8">
          <stop stopColor="#F8F7F2" />
          <stop offset="0.55" stopColor="#F8F7F2" />
          <stop offset="1" stopColor="#F8F7F2" />
        </linearGradient>
        <filter id="softShadowBack" x="-30%" y="-40%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="400" height="410" rx="22" fill="#EEF1F6" />
      <ellipse cx="204" cy="381" rx="115" ry="12" fill="#0d1f43" opacity="0.13" filter="url(#softShadowBack)" />
      <path
        d="M119 84 L158 59 Q178 83 201 83 Q224 83 245 59 L283 84 L331 164 L282 192 L265 164 L278 365 Q201 383 122 365 L135 164 L118 192 L69 164 Z"
        fill="url(#gf8f7f2floratb)"
        stroke="#C9D2DA"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M118 92Q133 150 130 180M282 92Q265 146 270 180M149 85 Q174 126 168 181M253 83Q224 125 233 180"
        stroke="#71808F"
        strokeOpacity="0.12"
        strokeWidth="3"
        fill="none"
      />
      <path d="M160 61 Q200 90 243 61" fill="none" stroke="#8998a9" strokeWidth="10" />
      <path d="M125 353Q200 366 275 353" stroke="#75818D" strokeOpacity="0.25" strokeWidth="2" fill="none" />
      <g transform="translate(201 226) scale(0.95)">
        <path d="M0 65Q-14 6 -4 -74" stroke="#37755C" strokeWidth="6" fill="none" />
        <path d="M-2 -5Q-67 -10 -43 -56Q-17 -53 -2 -5" fill="#60BEB2" />
        <path d="M1 -3Q55 -17 39 -60Q10 -50 1 -3" fill="#82D887" />
        <path d="M2 33Q-50 18 -47 -13Q-8 -17 2 33" fill="#FFAA41" />
        <circle cx="6" cy="-68" r="27" fill="#FF567E" />
        <circle cx="6" cy="-68" r="14" fill="#FCB75A" />
        <path d="M-17 -90L-25 -107M25 -90L34 -108" stroke="#FF567E" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function SmallChestPrintMockup({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 410" role="img" aria-label="DTG T-shirt illustrative product mockup" className={className}>
      <defs>
        <linearGradient id="gf8f7f2lettertf" x1="0" y1="0" x2="1" y2="0.8">
          <stop stopColor="#F8F7F2" />
          <stop offset="0.55" stopColor="#F8F7F2" />
          <stop offset="1" stopColor="#F8F7F2" />
        </linearGradient>
        <filter id="softShadowChest" x="-30%" y="-40%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="400" height="410" rx="22" fill="#EEF1F6" />
      <ellipse cx="204" cy="381" rx="115" ry="12" fill="#0d1f43" opacity="0.13" filter="url(#softShadowChest)" />
      <path
        d="M119 84 L158 59 Q178 83 201 83 Q224 83 245 59 L283 84 L331 164 L282 192 L265 164 L278 365 Q201 383 122 365 L135 164 L118 192 L69 164 Z"
        fill="url(#gf8f7f2lettertf)"
        stroke="#C9D2DA"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M118 92Q133 150 130 180M282 92Q265 146 270 180M149 85 Q174 126 168 181M253 83Q224 125 233 180"
        stroke="#71808F"
        strokeOpacity="0.12"
        strokeWidth="3"
        fill="none"
      />
      <path d="M163 61 Q199 116 240 61 Q218 52 201 53 Q182 51 163 61Z" fill="#B6B6B6" opacity="0.8" />
      <path d="M125 353Q200 366 275 353" stroke="#75818D" strokeOpacity="0.25" strokeWidth="2" fill="none" />
      <g transform="translate(150 175) scale(0.24)">
        <rect x="-59" y="-55" width="118" height="112" rx="17" fill="#1F55DB" />
        <text y="-3" fontFamily="Arial" fontSize="33" fontWeight="900" textAnchor="middle" fill="#fff" letterSpacing="2">
          GO
        </text>
        <text y="28" fontFamily="Arial" fontSize="18" fontWeight="900" textAnchor="middle" fill="#BAFF8D" letterSpacing="3">
          BOLD
        </text>
        <path d="M-35 36H36" stroke="#BAFF8D" strokeWidth="4" />
      </g>
    </svg>
  );
}

export function LightGarmentMockup({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 410" role="img" aria-label="DTG light garment mockup" className={className}>
      <defs>
        <linearGradient id="gf7f7f4floratf" x1="0" y1="0" x2="1" y2="0.8">
          <stop stopColor="#f7f7f4" />
          <stop offset="0.55" stopColor="#f7f7f4" />
          <stop offset="1" stopColor="#f7f7f4" />
        </linearGradient>
        <filter id="softShadowLight" x="-30%" y="-40%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="400" height="410" rx="22" fill="#EEF1F6" />
      <ellipse cx="204" cy="381" rx="115" ry="12" fill="#0d1f43" opacity="0.13" filter="url(#softShadowLight)" />
      <path
        d="M119 84 L158 59 Q178 83 201 83 Q224 83 245 59 L283 84 L331 164 L282 192 L265 164 L278 365 Q201 383 122 365 L135 164 L118 192 L69 164 Z"
        fill="url(#gf7f7f4floratf)"
        stroke="#C9D2DA"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M118 92Q133 150 130 180M282 92Q265 146 270 180M149 85 Q174 126 168 181M253 83Q224 125 233 180"
        stroke="#71808F"
        strokeOpacity="0.12"
        strokeWidth="3"
        fill="none"
      />
      <path d="M163 61 Q199 116 240 61 Q218 52 201 53 Q182 51 163 61Z" fill="#B6B6B6" opacity="0.8" />
      <path d="M125 353Q200 366 275 353" stroke="#75818D" strokeOpacity="0.25" strokeWidth="2" fill="none" />
      <g transform="translate(201 237) scale(0.7)">
        <path d="M0 65Q-14 6 -4 -74" stroke="#37755C" strokeWidth="6" fill="none" />
        <path d="M-2 -5Q-67 -10 -43 -56Q-17 -53 -2 -5" fill="#60BEB2" />
        <path d="M1 -3Q55 -17 39 -60Q10 -50 1 -3" fill="#82D887" />
        <path d="M2 33Q-50 18 -47 -13Q-8 -17 2 33" fill="#FFAA41" />
        <circle cx="6" cy="-68" r="27" fill="#FF567E" />
        <circle cx="6" cy="-68" r="14" fill="#FCB75A" />
        <path d="M-17 -90L-25 -107M25 -90L34 -108" stroke="#FF567E" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function DarkGarmentMockup({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 410" role="img" aria-label="DTG dark garment mockup" className={className}>
      <defs>
        <linearGradient id="g252c3dfloratfDark" x1="0" y1="0" x2="1" y2="0.8">
          <stop stopColor="#252c3d" />
          <stop offset="0.55" stopColor="#252c3d" />
          <stop offset="1" stopColor="#252c3d" />
        </linearGradient>
        <filter id="softShadowDark" x="-30%" y="-40%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="400" height="410" rx="22" fill="#EEF1F6" />
      <ellipse cx="204" cy="381" rx="115" ry="12" fill="#0d1f43" opacity="0.13" filter="url(#softShadowDark)" />
      <path
        d="M119 84 L158 59 Q178 83 201 83 Q224 83 245 59 L283 84 L331 164 L282 192 L265 164 L278 365 Q201 383 122 365 L135 164 L118 192 L69 164 Z"
        fill="url(#g252c3dfloratfDark)"
        stroke="#C9D2DA"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M118 92Q133 150 130 180M282 92Q265 146 270 180M149 85 Q174 126 168 181M253 83Q224 125 233 180"
        stroke="#71808F"
        strokeOpacity="0.12"
        strokeWidth="3"
        fill="none"
      />
      <path d="M163 61 Q199 116 240 61 Q218 52 201 53 Q182 51 163 61Z" fill="#B6B6B6" opacity="0.8" />
      <path d="M125 353Q200 366 275 353" stroke="#75818D" strokeOpacity="0.25" strokeWidth="2" fill="none" />
      <g transform="translate(201 237) scale(0.7)">
        <path d="M0 65Q-14 6 -4 -74" stroke="#37755C" strokeWidth="6" fill="none" />
        <path d="M-2 -5Q-67 -10 -43 -56Q-17 -53 -2 -5" fill="#60BEB2" />
        <path d="M1 -3Q55 -17 39 -60Q10 -50 1 -3" fill="#82D887" />
        <path d="M2 33Q-50 18 -47 -13Q-8 -17 2 33" fill="#FFAA41" />
        <circle cx="6" cy="-68" r="27" fill="#FF567E" />
        <circle cx="6" cy="-68" r="14" fill="#FCB75A" />
        <path d="M-17 -90L-25 -107M25 -90L34 -108" stroke="#FF567E" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function QuoteYellowTShirtMockup({ className = "w-full max-w-[340px] h-auto" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 410" role="img" aria-label="DTG T-shirt quote mockup" className={className}>
      <defs>
        <linearGradient id="gf7f8f6floratf" x1="0" y1="0" x2="1" y2="0.8">
          <stop stopColor="#f7f8f6" />
          <stop offset="0.55" stopColor="#f7f8f6" />
          <stop offset="1" stopColor="#f7f8f6" />
        </linearGradient>
        <filter id="softShadowQuote" x="-30%" y="-40%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="400" height="410" rx="22" fill="#FBF879" />
      <ellipse cx="204" cy="381" rx="115" ry="12" fill="#0d1f43" opacity="0.13" filter="url(#softShadowQuote)" />
      <path
        d="M119 84 L158 59 Q178 83 201 83 Q224 83 245 59 L283 84 L331 164 L282 192 L265 164 L278 365 Q201 383 122 365 L135 164 L118 192 L69 164 Z"
        fill="url(#gf7f8f6floratf)"
        stroke="#C9D2DA"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M118 92Q133 150 130 180M282 92Q265 146 270 180M149 85 Q174 126 168 181M253 83Q224 125 233 180"
        stroke="#71808F"
        strokeOpacity="0.12"
        strokeWidth="3"
        fill="none"
      />
      <path d="M163 61 Q199 116 240 61 Q218 52 201 53 Q182 51 163 61Z" fill="#B6B6B6" opacity="0.8" />
      <path d="M125 353Q200 366 275 353" stroke="#75818D" strokeOpacity="0.25" strokeWidth="2" fill="none" />
      <g transform="translate(201 237) scale(0.7)">
        <path d="M0 65Q-14 6 -4 -74" stroke="#37755C" strokeWidth="6" fill="none" />
        <path d="M-2 -5Q-67 -10 -43 -56Q-17 -53 -2 -5" fill="#60BEB2" />
        <path d="M1 -3Q55 -17 39 -60Q10 -50 1 -3" fill="#82D887" />
        <path d="M2 33Q-50 18 -47 -13Q-8 -17 2 33" fill="#FFAA41" />
        <circle cx="6" cy="-68" r="27" fill="#FF567E" />
        <circle cx="6" cy="-68" r="14" fill="#FCB75A" />
        <path d="M-17 -90L-25 -107M25 -90L34 -108" stroke="#FF567E" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
