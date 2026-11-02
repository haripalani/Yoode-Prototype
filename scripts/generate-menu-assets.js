const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const MENU_DIR = path.join(__dirname, '..', 'public', 'menu');

// Common SVGdefs: Logo, LinearGradients, DropShadows
const LOGO_HEX = `
<g id="yoode-cube" transform="scale(0.85)">
  <polygon points="16,0 32,8 32,26 16,34 0,26 0,8" fill="none" stroke="white" stroke-width="2.2" stroke-linejoin="round" />
  <line x1="16" y1="0" x2="16" y2="18" stroke="white" stroke-width="2" />
  <line x1="0" y1="8" x2="16" y2="18" stroke="white" stroke-width="2" />
  <line x1="32" y1="8" x2="16" y2="18" stroke="white" stroke-width="2" />
  <line x1="16" y1="18" x2="16" y2="34" stroke="white" stroke-width="2" />
  <polygon points="16,4 27,9.5 16,15 5,9.5" fill="none" stroke="white" stroke-width="1.2" />
  <polygon points="5,11 15,16 15,29 5,23.5" fill="none" stroke="white" stroke-width="1.2" />
  <polygon points="27,11 17,16 17,29 27,23.5" fill="none" stroke="white" stroke-width="1.2" />
</g>
`;

const SVG_WRAPPER = (content) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 500 500">
  <defs>
    ${LOGO_HEX}
    <linearGradient id="redGrad" x1="0" y1="0" x2="0.6" y2="1">
      <stop offset="0%" stop-color="#FF3838" />
      <stop offset="50%" stop-color="#EA2828" />
      <stop offset="100%" stop-color="#C51818" />
    </linearGradient>
    <linearGradient id="navyGrad" x1="0" y1="0" x2="0.6" y2="1">
      <stop offset="0%" stop-color="#2D3A4B" />
      <stop offset="50%" stop-color="#1E2836" />
      <stop offset="100%" stop-color="#141B24" />
    </linearGradient>
    <linearGradient id="chassisGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#EA2828" />
      <stop offset="100%" stop-color="#B81616" />
    </linearGradient>
  </defs>
  ${content}
</svg>
`;

const ASSETS = {
  // 1. CRICKET JERSEY
  'cricket-jersey-color.png': SVG_WRAPPER(`
    <!-- Body & Sleeves in 3/4 perspective -->
    <path d="M 160 90 L 330 90 L 436 160 L 386 244 L 350 216 L 350 430 L 140 430 L 140 216 L 104 244 L 54 160 Z" fill="url(#redGrad)" />
    <!-- Navy Contrast Raglan / Shoulder Slash Panels -->
    <polygon points="160,90 245,120 330,90 295,150 195,150" fill="url(#navyGrad)" />
    <!-- Tipped Polo Collar -->
    <path d="M 160 90 L 212 155 L 245 120 L 278 155 L 330 90" stroke="white" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <path d="M 164 94 L 212 151 L 245 120 L 278 151 L 326 94" stroke="#1E2836" stroke-width="2.5" fill="none" />
    <!-- Button Placket -->
    <rect x="232" y="120" width="28" height="110" rx="4" fill="url(#navyGrad)" stroke="white" stroke-width="3" />
    <circle cx="246" cy="148" r="5" fill="white" />
    <circle cx="246" cy="180" r="5" fill="white" />
    <circle cx="246" cy="212" r="5" fill="white" />
    <!-- Athletic Contrast Shoulder Slash Striations -->
    <line x1="140" y1="260" x2="350" y2="330" stroke="url(#navyGrad)" stroke-width="12" />
    <line x1="140" y1="278" x2="350" y2="348" stroke="white" stroke-width="5" />
    <!-- Sleeve Seams & Ribbed Cuffs -->
    <line x1="68" y1="180" x2="102" y2="236" stroke="white" stroke-width="6" />
    <line x1="422" y1="180" x2="388" y2="236" stroke="white" stroke-width="6" />
    <line x1="160" y1="90" x2="140" y2="216" stroke="white" stroke-width="3.5" stroke-dasharray="8 5" />
    <line x1="330" y1="90" x2="350" y2="216" stroke="white" stroke-width="3.5" stroke-dasharray="8 5" />
    <!-- Hem Stitching -->
    <line x1="140" y1="412" x2="350" y2="412" stroke="white" stroke-width="4" stroke-dasharray="10 5" />
    <!-- Chest Logo -->
    <use href="#yoode-cube" x="290" y="150" />
  `),

  // 2. FOOTBALL JERSEY
  'football-jersey-color.png': SVG_WRAPPER(`
    <!-- Body & Sleeves in 3/4 perspective -->
    <path d="M 165 85 L 325 85 L 430 155 L 380 240 L 350 210 L 350 430 L 140 430 L 140 210 L 110 240 L 60 155 Z" fill="url(#redGrad)" />
    <!-- Navy Vertical Club Stripes -->
    <rect x="180" y="140" width="30" height="290" fill="url(#navyGrad)" />
    <rect x="235" y="140" width="30" height="290" fill="url(#navyGrad)" />
    <rect x="290" y="140" width="30" height="290" fill="url(#navyGrad)" />
    <!-- Sharp V-Neck Ribbed Collar -->
    <polygon points="165,85 245,140 325,85 245,110" fill="url(#navyGrad)" stroke="white" stroke-width="3" />
    <!-- Sleeve Contrast Cuffs -->
    <line x1="72" y1="175" x2="105" y2="230" stroke="url(#navyGrad)" stroke-width="12" />
    <line x1="72" y1="175" x2="105" y2="230" stroke="white" stroke-width="4" stroke-dasharray="6 4" />
    <line x1="418" y1="175" x2="385" y2="230" stroke="url(#navyGrad)" stroke-width="12" />
    <line x1="418" y1="175" x2="385" y2="230" stroke="white" stroke-width="4" stroke-dasharray="6 4" />
    <!-- Double-needle Seam Lines -->
    <line x1="165" y1="85" x2="140" y2="210" stroke="white" stroke-width="3.5" stroke-dasharray="8 5" />
    <line x1="325" y1="85" x2="350" y2="210" stroke="white" stroke-width="3.5" stroke-dasharray="8 5" />
    <line x1="140" y1="412" x2="350" y2="412" stroke="white" stroke-width="4" stroke-dasharray="10 5" />
    <!-- Sponsor Chest Box & Logo -->
    <use href="#yoode-cube" x="290" y="150" />
  `),

  // 3. CYCLING JERSEY
  'cycling-jersey-color.png': SVG_WRAPPER(`
    <!-- Body & Sleeves in Aero 3/4 perspective -->
    <path d="M 175 80 C 205 65 285 65 315 80 L 430 150 L 380 230 L 345 205 L 345 430 L 145 430 L 145 205 L 110 230 L 60 150 Z" fill="url(#redGrad)" />
    <!-- Stand Aero Collar -->
    <path d="M 175 80 C 205 65 285 65 315 80 L 310 100 C 280 85 210 85 180 100 Z" fill="url(#navyGrad)" stroke="white" stroke-width="2.5" />
    <!-- Full-Length Center Zipper -->
    <line x1="245" y1="100" x2="245" y2="430" stroke="white" stroke-width="5" />
    <circle cx="245" cy="130" r="6" fill="#EA2828" stroke="white" stroke-width="2" />
    <!-- Dark Navy Aerodynamic Side Panels -->
    <path d="M 145 205 L 175 300 L 175 430 L 145 430 Z" fill="url(#navyGrad)" />
    <path d="M 345 205 L 315 300 L 315 430 L 345 430 Z" fill="url(#navyGrad)" />
    <!-- Triple Rear Cargo Pocket Stitching -->
    <rect x="165" y="330" width="160" height="85" rx="4" fill="none" stroke="white" stroke-width="3.5" stroke-dasharray="8 5" />
    <line x1="218" y1="330" x2="218" y2="415" stroke="white" stroke-width="3.5" stroke-dasharray="8 5" />
    <line x1="272" y1="330" x2="272" y2="415" stroke="white" stroke-width="3.5" stroke-dasharray="8 5" />
    <!-- Chest Logo -->
    <use href="#yoode-cube" x="280" y="140" />
  `),

  // 4. ESPORTS JERSEY
  'esports-jersey-color.png': SVG_WRAPPER(`
    <!-- Body & Sleeves -->
    <path d="M 165 85 L 325 85 L 430 155 L 380 240 L 350 210 L 350 430 L 140 430 L 140 210 L 110 240 L 60 155 Z" fill="url(#navyGrad)" />
    <!-- Electric Angular Red Geometric Cyber Panels -->
    <polygon points="165,85 220,160 245,130" fill="url(#redGrad)" />
    <polygon points="325,85 270,160 245,130" fill="url(#redGrad)" />
    <polygon points="140,210 210,300 140,330" fill="url(#redGrad)" />
    <polygon points="350,210 280,300 350,330" fill="url(#redGrad)" />
    <polygon points="200,360 245,320 290,360 245,400" fill="url(#redGrad)" />
    <!-- White Neon Cyber Circuit Lines -->
    <polyline points="140,260 190,290 190,360 245,410 300,360 300,290 350,260" fill="none" stroke="white" stroke-width="3.5" stroke-dasharray="8 4" />
    <!-- V-Neck Collar -->
    <polygon points="165,85 245,140 325,85 245,110" fill="#EA2828" stroke="white" stroke-width="2.5" />
    <!-- Chest Emblem -->
    <use href="#yoode-cube" x="285" y="150" />
  `),

  // 5. FULL SLEEVE TEE
  'fullsleeve-tee-color.png': SVG_WRAPPER(`
    <!-- Full Sleeve Body in 3/4 perspective -->
    <path d="M 165 85 C 195 110 295 110 325 85 L 435 170 L 400 400 L 355 395 L 345 220 L 345 430 L 145 430 L 145 220 L 135 395 L 90 400 L 55 170 Z" fill="url(#redGrad)" />
    <!-- Navy Crewneck Ribbed Collar -->
    <path d="M 165 85 C 195 120 295 120 325 85" stroke="url(#navyGrad)" stroke-width="18" fill="none" />
    <path d="M 165 85 C 195 120 295 120 325 85" stroke="white" stroke-width="2.5" fill="none" />
    <!-- Navy Wrist Cuffs -->
    <polygon points="90,400 135,395 132,420 87,425" fill="url(#navyGrad)" stroke="white" stroke-width="2" />
    <polygon points="400,400 355,395 358,420 403,425" fill="url(#navyGrad)" stroke="white" stroke-width="2" />
    <!-- Double-needle Seam Lines -->
    <line x1="165" y1="85" x2="145" y2="220" stroke="white" stroke-width="3" stroke-dasharray="8 5" />
    <line x1="325" y1="85" x2="345" y2="220" stroke="white" stroke-width="3" stroke-dasharray="8 5" />
    <line x1="145" y1="412" x2="345" y2="412" stroke="white" stroke-width="3.5" stroke-dasharray="8 5" />
    <!-- Chest Logo -->
    <use href="#yoode-cube" x="285" y="150" />
  `),

  // 6. PANTS / JOGGERS
  'pants-color.png': SVG_WRAPPER(`
    <!-- Waistband & Articulated Jogger Silhouette -->
    <path d="M 135 70 L 355 70 L 385 440 L 310 440 L 245 220 L 180 440 L 105 440 Z" fill="url(#navyGrad)" />
    <!-- Red Elastic Waistband with White Drawstrings -->
    <rect x="135" y="70" width="220" height="35" rx="6" fill="url(#redGrad)" stroke="white" stroke-width="3" />
    <line x1="245" y1="70" x2="245" y2="180" stroke="white" stroke-width="3.5" stroke-dasharray="6 4" />
    <circle cx="230" cy="90" r="4" fill="white" />
    <circle cx="260" cy="90" r="4" fill="white" />
    <path d="M 230 90 Q 220 130 225 150 M 260 90 Q 270 130 265 150" stroke="white" stroke-width="3.5" stroke-linecap="round" fill="none" />
    <!-- Red Side Cargo Pockets with Flap -->
    <rect x="110" y="240" width="70" height="85" rx="6" fill="url(#redGrad)" stroke="white" stroke-width="3" />
    <line x1="110" y1="260" x2="180" y2="260" stroke="white" stroke-width="3" />
    <rect x="310" y="240" width="70" height="85" rx="6" fill="url(#redGrad)" stroke="white" stroke-width="3" />
    <line x1="310" y1="260" x2="380" y2="260" stroke="white" stroke-width="3" />
    <!-- Ankle Ribbed Cuffs -->
    <rect x="105" y="420" width="75" height="20" rx="3" fill="url(#redGrad)" stroke="white" stroke-width="2" />
    <rect x="310" y="420" width="75" height="20" rx="3" fill="url(#redGrad)" stroke="white" stroke-width="2" />
  `),

  // 7. BUCKET HAT
  'bucket-hat-color.png': SVG_WRAPPER(`
    <!-- Crown Top Oval -->
    <ellipse cx="250" cy="130" rx="115" ry="45" fill="url(#navyGrad)" stroke="white" stroke-width="3.5" />
    <!-- Crown Wall in Red -->
    <path d="M 135 130 L 110 250 C 190 285 310 285 390 250 L 365 130 Z" fill="url(#redGrad)" stroke="white" stroke-width="3.5" />
    <!-- Downward Sloped Brim in Navy -->
    <path d="M 110 250 C 55 305 45 345 70 365 C 160 415 340 415 430 365 C 455 345 445 305 390 250 Z" fill="url(#navyGrad)" stroke="white" stroke-width="3.5" />
    <!-- 360-degree Stitch Rings on Brim -->
    <path d="M 85 295 C 170 345 330 345 415 295" stroke="white" stroke-width="3" stroke-dasharray="8 5" fill="none" />
    <path d="M 75 325 C 165 375 335 375 425 325" stroke="white" stroke-width="3" stroke-dasharray="8 5" fill="none" />
    <!-- Front Embroidered Hexagon Patch -->
    <rect x="210" y="175" width="80" height="50" rx="8" fill="url(#navyGrad)" stroke="white" stroke-width="2.5" />
    <use href="#yoode-cube" x="235" y="180" />
  `),

  // 8. SERVICE: EMBROIDERY DIGITIZING
  'service-embroidery-color.png': SVG_WRAPPER(`
    <!-- Multi-Needle Commercial Embroidery Head Casting -->
    <path d="M 160 80 L 340 80 L 340 200 L 295 200 L 295 270 L 205 270 L 205 200 L 160 200 Z" fill="url(#navyGrad)" stroke="white" stroke-width="4" />
    <!-- Thread Spool Cones at Top -->
    <polygon points="180,45 205,45 200,80 185,80" fill="url(#redGrad)" stroke="white" stroke-width="2" />
    <polygon points="235,45 260,45 255,80 240,80" fill="url(#redGrad)" stroke="white" stroke-width="2" />
    <polygon points="290,45 315,45 310,80 295,80" fill="url(#redGrad)" stroke="white" stroke-width="2" />
    <!-- Needle Bars & Presser Foot -->
    <line x1="230" y1="270" x2="230" y2="330" stroke="white" stroke-width="6" />
    <line x1="250" y1="270" x2="250" y2="345" stroke="white" stroke-width="6" />
    <line x1="270" y1="270" x2="270" y2="330" stroke="white" stroke-width="6" />
    <path d="M 235 340 L 265 340 M 250 345 L 250 365" stroke="white" stroke-width="4" />
    <!-- Large Circular Embroidery Hoop Ring -->
    <ellipse cx="250" cy="390" rx="140" ry="60" fill="none" stroke="url(#redGrad)" stroke-width="12" />
    <ellipse cx="250" cy="390" rx="140" ry="60" fill="none" stroke="white" stroke-width="2.5" />
    <!-- Dense 3D Puff Satin Stitch Yoode Emblem inside Hoop -->
    <use href="#yoode-cube" x="235" y="370" />
  `),

  // 9. SERVICE: COLOREEL DIGITIZING
  'service-coloreel-color.png': SVG_WRAPPER(`
    <!-- Coloreel Dyeing Unit Enclosure in Red -->
    <rect x="130" y="90" width="240" height="220" rx="16" fill="url(#chassisGrad)" stroke="white" stroke-width="4" />
    <!-- Thread Supply Spool at Top -->
    <ellipse cx="250" cy="70" rx="70" ry="25" fill="url(#navyGrad)" stroke="white" stroke-width="3" />
    <!-- Multi-Spectrum Continuous Dye Cartridges -->
    <rect x="160" y="125" width="35" height="105" rx="6" fill="#00C2FF" stroke="white" stroke-width="2.5" />
    <rect x="205" y="125" width="35" height="105" rx="6" fill="#FF00A0" stroke="white" stroke-width="2.5" />
    <rect x="250" y="125" width="35" height="105" rx="6" fill="#FFD600" stroke="white" stroke-width="2.5" />
    <rect x="295" y="125" width="35" height="105" rx="6" fill="url(#navyGrad)" stroke="white" stroke-width="2.5" />
    <!-- Live Continuous Dyed Thread exiting Unit -->
    <line x1="250" y1="310" x2="250" y2="420" stroke="url(#redGrad)" stroke-width="6" />
    <line x1="250" y1="310" x2="250" y2="420" stroke="white" stroke-width="2" stroke-dasharray="6 3" />
    <!-- Machine Base & Needle Piercing Fabric -->
    <rect x="110" y="420" width="280" height="30" rx="6" fill="url(#navyGrad)" stroke="white" stroke-width="3" />
    <use href="#yoode-cube" x="300" y="240" />
  `),

  // 10. SERVICE: SCREEN PRINTING
  'service-screen-printing-color.png': SVG_WRAPPER(`
    <!-- Aluminum Screen Printing Frame -->
    <rect x="90" y="95" width="320" height="310" rx="10" fill="none" stroke="url(#navyGrad)" stroke-width="26" />
    <rect x="103" y="108" width="294" height="284" fill="#FFE58F" opacity="0.9" />
    <!-- White Technical Stencil Cutout -->
    <use href="#yoode-cube" x="220" y="170" />
    <!-- Red Rubber Squeegee Blade & Wooden Handle pulled across mesh -->
    <rect x="115" y="215" width="270" height="55" rx="8" fill="url(#navyGrad)" stroke="white" stroke-width="3" />
    <rect x="120" y="270" width="260" height="20" rx="4" fill="url(#redGrad)" stroke="white" stroke-width="2" />
    <!-- Spreading Plastisol Ink Pool -->
    <path d="M 130 290 Q 250 320 370 290" stroke="url(#redGrad)" stroke-width="10" fill="none" stroke-linecap="round" />
  `),

  // 11. SERVICE: UV PRINTING
  'service-uv-printing-color.png': SVG_WRAPPER(`
    <!-- Vacuum Flatbed Chassis -->
    <rect x="85" y="225" width="330" height="185" rx="14" fill="url(#navyGrad)" stroke="white" stroke-width="4" />
    <!-- Grid Alignment Marks -->
    <line x1="85" y1="315" x2="415" y2="315" stroke="#334155" stroke-width="2" stroke-dasharray="10 10" />
    <line x1="250" y1="225" x2="250" y2="410" stroke="#334155" stroke-width="2" stroke-dasharray="10 10" />
    <!-- Rigid Product on Bed being UV cured -->
    <rect x="190" y="255" width="120" height="130" rx="12" fill="url(#redGrad)" stroke="white" stroke-width="3" />
    <use href="#yoode-cube" x="235" y="295" />
    <!-- UV-LED Carriage Scanning Gantry -->
    <rect x="135" y="110" width="230" height="70" rx="10" fill="url(#chassisGrad)" stroke="white" stroke-width="4" />
    <circle cx="170" cy="145" r="10" fill="#93C5FD" stroke="white" stroke-width="2" />
    <circle cx="210" cy="145" r="10" fill="#93C5FD" stroke="white" stroke-width="2" />
    <circle cx="250" cy="145" r="10" fill="#93C5FD" stroke="white" stroke-width="2" />
    <circle cx="290" cy="145" r="10" fill="#93C5FD" stroke="white" stroke-width="2" />
    <circle cx="330" cy="145" r="10" fill="#93C5FD" stroke="white" stroke-width="2" />
    <!-- High Energy UV Curing Light Beam Rays -->
    <polygon points="145,180 355,180 400,285 100,285" fill="#60A5FA" opacity="0.35" />
  `),

  // 12. SERVICE: LASER ENGRAVING
  'service-engraving-color.png': SVG_WRAPPER(`
    <!-- Galvo Scanner Head Housing in Red -->
    <polygon points="190,75 310,75 285,160 215,160" fill="url(#chassisGrad)" stroke="white" stroke-width="4" />
    <ellipse cx="250" cy="160" rx="35" ry="10" fill="url(#navyGrad)" stroke="white" stroke-width="2" />
    <!-- Focused Coherent Laser Beam -->
    <line x1="250" y1="170" x2="250" y2="330" stroke="#FF2222" stroke-width="6" />
    <line x1="250" y1="170" x2="250" y2="330" stroke="white" stroke-width="2" />
    <!-- Focal Point Spark & Etching Burst -->
    <polygon points="250,315 258,328 270,330 258,332 250,345 242,332 230,330 242,328" fill="#FACC15" stroke="#EA2828" stroke-width="1.5" />
    <!-- Stainless Steel Tumbler / Flask Substrate being engraved -->
    <path d="M 170 330 L 330 330 L 315 455 L 185 455 Z" fill="url(#navyGrad)" stroke="white" stroke-width="4" />
    <!-- Crisp Vector Laser-Etched Emblem on Steel -->
    <use href="#yoode-cube" x="235" y="365" />
  `),

  // 13. DRINKWARE (Thermal Tumbler)
  'drinkware-color.png': SVG_WRAPPER(`
    <!-- Insulated Drinkware Lid with Flip-Cap -->
    <rect x="170" y="70" width="160" height="45" rx="10" fill="url(#navyGrad)" stroke="white" stroke-width="4" />
    <rect x="220" y="55" width="60" height="20" rx="5" fill="url(#redGrad)" stroke="white" stroke-width="2" />
    <!-- Tumbler Body in Dark Navy -->
    <path d="M 180 115 L 320 115 L 295 435 L 205 435 Z" fill="url(#navyGrad)" stroke="white" stroke-width="4" />
    <!-- Red Silicone Ergonomic Grip Band -->
    <rect x="183" y="190" width="134" height="85" fill="url(#redGrad)" stroke="white" stroke-width="3" />
    <line x1="184" y1="220" x2="316" y2="220" stroke="white" stroke-width="2.5" stroke-dasharray="8 5" />
    <line x1="184" y1="245" x2="316" y2="245" stroke="white" stroke-width="2.5" stroke-dasharray="8 5" />
    <!-- Laser Etched Yoode Emblem -->
    <use href="#yoode-cube" x="235" y="315" />
  `),

  // 14. BACKPACK (Executive Travel Laptop Bag)
  'backpack-color.png': SVG_WRAPPER(`
    <!-- Top Grab Handle -->
    <path d="M 200 85 C 200 50 300 50 300 85" stroke="white" stroke-width="10" stroke-linecap="round" fill="none" />
    <!-- Dome Backpack Body in Navy -->
    <path d="M 145 140 C 145 90 355 90 355 140 L 380 420 L 120 420 Z" fill="url(#navyGrad)" stroke="white" stroke-width="5" />
    <!-- Red Front Organizer Tech Pocket -->
    <rect x="155" y="240" width="190" height="165" rx="20" fill="url(#redGrad)" stroke="white" stroke-width="4" />
    <line x1="155" y1="280" x2="345" y2="280" stroke="white" stroke-width="4" />
    <!-- Dual White Zippers -->
    <circle cx="205" cy="280" r="6" fill="white" />
    <circle cx="295" cy="280" r="6" fill="white" />
    <!-- Side Water Bottle Pockets -->
    <path d="M 120 305 L 145 305 L 145 405 L 120 395 Z" fill="url(#redGrad)" stroke="white" stroke-width="2.5" />
    <path d="M 380 305 L 355 305 L 355 405 L 380 395 Z" fill="url(#redGrad)" stroke="white" stroke-width="2.5" />
    <!-- Chest Emblem on Pocket -->
    <use href="#yoode-cube" x="235" y="315" />
  `),

  // 15. GIFT HAMPER (Luxury Rigid Gift Box)
  'gift-hamper-color.png': SVG_WRAPPER(`
    <!-- Box Base in Red -->
    <rect x="105" y="210" width="290" height="220" rx="14" fill="url(#redGrad)" stroke="white" stroke-width="5" />
    <!-- Box Lid in Navy (Wider Overhang) -->
    <rect x="90" y="170" width="320" height="55" rx="10" fill="url(#navyGrad)" stroke="white" stroke-width="5" />
    <!-- Satin Ribbon Cross -->
    <line x1="250" y1="170" x2="250" y2="430" stroke="white" stroke-width="12" />
    <line x1="90" y1="197" x2="410" y2="197" stroke="white" stroke-width="10" />
    <!-- Ribbon Bow Loops at Top -->
    <path d="M 250 170 C 205 115 160 135 205 170 C 230 170 250 170 250 170" stroke="white" stroke-width="8" fill="none" />
    <path d="M 250 170 C 295 115 340 135 295 170 C 270 170 250 170 250 170" stroke="white" stroke-width="8" fill="none" />
    <circle cx="250" cy="170" r="11" fill="url(#redGrad)" stroke="white" stroke-width="3" />
    <!-- Front Emblem -->
    <use href="#yoode-cube" x="235" y="275" />
  `),

  // 16. PROMO PRODUCTS
  'promo-products-color.png': SVG_WRAPPER(`
    <!-- Metal Business Card Case in Navy -->
    <rect x="115" y="215" width="190" height="185" rx="14" fill="url(#navyGrad)" stroke="white" stroke-width="5" />
    <line x1="115" y1="260" x2="305" y2="260" stroke="white" stroke-width="3.5" />
    <use href="#yoode-cube" x="195" y="295" />
    <!-- Luxury Rollerball Metal Pen in Red angled beside case -->
    <g transform="rotate(32, 350, 275)">
      <rect x="340" y="115" width="25" height="240" rx="10" fill="url(#redGrad)" stroke="white" stroke-width="4" />
      <polygon points="340,355 365,355 352.5,390" fill="#E2E8F0" stroke="white" stroke-width="2.5" />
      <line x1="352.5" y1="140" x2="352.5" y2="195" stroke="white" stroke-width="6" stroke-linecap="round" />
    </g>
  `),

  // 17. ECO GIFTS
  'eco-gifts-color.png': SVG_WRAPPER(`
    <!-- Kraft Eco Notebook -->
    <rect x="110" y="150" width="190" height="245" rx="14" fill="#D97706" stroke="white" stroke-width="5" />
    <!-- Spiral Wire Rings -->
    <circle cx="120" cy="185" r="8" fill="url(#navyGrad)" stroke="white" stroke-width="2.5" />
    <circle cx="120" cy="235" r="8" fill="url(#navyGrad)" stroke="white" stroke-width="2.5" />
    <circle cx="120" cy="285" r="8" fill="url(#navyGrad)" stroke="white" stroke-width="2.5" />
    <circle cx="120" cy="335" r="8" fill="url(#navyGrad)" stroke="white" stroke-width="2.5" />
    <!-- Green Eco Leaf Badge -->
    <path d="M 205 250 C 185 220 220 195 235 230 C 235 255 205 270 205 250 Z" fill="#15803D" stroke="white" stroke-width="3" />
    <!-- Bamboo Thermo Coffee Tumbler in Red beside notebook -->
    <path d="M 315 210 L 395 210 L 380 385 L 330 385 Z" fill="url(#redGrad)" stroke="white" stroke-width="5" />
    <rect x="310" y="185" width="90" height="30" rx="8" fill="url(#navyGrad)" stroke="white" stroke-width="3.5" />
    <use href="#yoode-cube" x="337" y="260" />
  `),

  // 18. 3D CONFIGURATOR
  'configurator-3d-color.png': SVG_WRAPPER(`
    <!-- 360-Degree Orbit Axis Rings -->
    <ellipse cx="250" cy="250" rx="190" ry="80" fill="none" stroke="url(#redGrad)" stroke-width="5" stroke-dasharray="12 8" />
    <ellipse cx="250" cy="250" rx="80" ry="190" fill="none" stroke="white" stroke-width="4" stroke-dasharray="12 8" />
    <!-- 3D Coordinate Orbit Nodes -->
    <circle cx="440" cy="250" r="12" fill="url(#redGrad)" stroke="white" stroke-width="3.5" />
    <circle cx="250" cy="60" r="12" fill="white" stroke="url(#navyGrad)" stroke-width="3.5" />
    <circle cx="60" cy="250" r="12" fill="url(#navyGrad)" stroke="white" stroke-width="3.5" />
    <!-- Wireframe Fashion Torso in Center -->
    <path d="M 200 160 L 300 160 L 340 215 L 310 340 L 190 340 L 160 215 Z" fill="url(#navyGrad)" stroke="white" stroke-width="5" />
    <line x1="250" y1="160" x2="250" y2="340" stroke="white" stroke-width="3.5" stroke-dasharray="8 5" />
    <line x1="190" y1="250" x2="310" y2="250" stroke="white" stroke-width="3.5" stroke-dasharray="8 5" />
    <use href="#yoode-cube" x="235" y="210" />
  `)
};

async function generateAll() {
  console.log('Rendering 18 missing CAD assets to 1024x1024 PNGs...');

  for (const [filename, svg] of Object.entries(ASSETS)) {
    const colorPath = path.join(MENU_DIR, filename);
    const greyName = filename.replace('-color.png', '-grey.png');
    const greyPath = path.join(MENU_DIR, greyName);

    try {
      // 1. Render 1024x1024 Color PNG
      await sharp(Buffer.from(svg))
        .resize(1024, 1024)
        .png({ compressionLevel: 9 })
        .toFile(colorPath);

      // 2. Generate matching Grey PNG
      await sharp(colorPath)
        .grayscale()
        .png({ compressionLevel: 9 })
        .toFile(greyPath);

      console.log(`✓ Rendered: ${filename} and ${greyName}`);
    } catch (err) {
      console.error(`✗ Error generating ${filename}:`, err);
    }
  }

  // Also make sure newly generated ones have grey versions
  const extraItems = [
    'basketball-jersey',
    'oversized-tee',
    'service-dtg',
    'service-dtf'
  ];

  for (const item of extraItems) {
    const colorPath = path.join(MENU_DIR, `${item}-color.png`);
    const greyPath = path.join(MENU_DIR, `${item}-grey.png`);
    if (fs.existsSync(colorPath) && !fs.existsSync(greyPath)) {
      try {
        await sharp(colorPath).grayscale().toFile(greyPath);
        console.log(`✓ Created grey counterpart: ${item}-grey.png`);
      } catch (e) {
        console.error(`Error creating grey for ${item}:`, e);
      }
    }
  }

  console.log('All menu assets generated successfully!');
}

generateAll();

