const fs = require('fs');
const path = require('path');

const dir = './yoode-shopify-theme';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory() && !file.includes('node_modules')) { 
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.liquid') || file.endsWith('.json')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(dir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/\.(jpg|jpeg|png|avif)/gi, '.webp');
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
});
