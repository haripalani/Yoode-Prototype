const fs = require('fs');

async function generate() {
  const indiaMapModule = await import('./node_modules/@svg-maps/india/index.js');
  const indiaMap = indiaMapModule.default;

  let liquidContent = `<svg viewBox="${indiaMap.viewBox}" class="w-full h-full drop-shadow-2xl" id="india-svg-map">\n`;
  liquidContent += `  <defs>\n`;
  
  // Define all paths once
  indiaMap.locations.forEach(location => {
    liquidContent += `    <path id="path-${location.id}" d="${location.path}" />\n`;
  });

  liquidContent += `    <pattern id="dotPattern3" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">\n`;
  liquidContent += `      <circle cx="2" cy="2" r="1.5" fill="#CBD5E1" class="opacity-60" />\n`;
  liquidContent += `    </pattern>\n`;
  
  liquidContent += `    <mask id="indiaMask3">\n`;
  indiaMap.locations.forEach(location => {
    liquidContent += `      <use href="#path-${location.id}" fill="white" />\n`;
  });
  liquidContent += `    </mask>\n`;
  
  liquidContent += `  </defs>\n\n`;
  liquidContent += `  <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern3)" mask="url(#indiaMask3)" />\n\n`;

  // Reuse paths for strokes
  indiaMap.locations.forEach(location => {
    liquidContent += `  <use href="#path-${location.id}" fill="none" stroke="#64748B" stroke-width="0.8" class="opacity-50" />\n`;
  });

  liquidContent += `  <!-- Dynamic connecting lines and markers will be rendered by liquid loops below -->\n`;
  liquidContent += `  {{ svg_content }}\n`;
  liquidContent += `</svg>\n`;

  require('fs').writeFileSync('./yoode-shopify-theme/snippets/india-map-svg.liquid', liquidContent);
  console.log("Snippet created successfully.");
}

generate().catch(console.error);
