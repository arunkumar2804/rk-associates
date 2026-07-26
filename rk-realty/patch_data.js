const fs = require('fs');

// Read data file
let content = fs.readFileSync('src/data/properties.ts', 'utf8');

// Generate JSON
const godrejImages = fs.readdirSync('./public/assets/images/godrej_vanantara')
  .filter(f => f.endsWith('.avif'))
  .map((f, i) => ({ id: "g"+i, url: "/assets/images/godrej_vanantara/" + f }));

const sobhaImages = fs.readdirSync('./public/assets/images/sobha_one_world')
  .filter(f => f.endsWith('.avif'))
  .map((f, i) => ({ id: "s"+i, url: "/assets/images/sobha_one_world/" + f }));

// Replace godrej galleryImages
content = content.replace(
  /galleryImages:\s*\[\s*\]/g,
  (match, offset) => {
    // We only want to replace the first one for Godrej and second for Sobha
    return match;
  }
);

let parts = content.split('galleryImages: [],');
if (parts.length >= 3) {
  content = parts[0] + 'galleryImages: ' + JSON.stringify(godrejImages, null, 4) + ',' + parts[1] + 'galleryImages: ' + JSON.stringify(sobhaImages, null, 4) + ',' + parts.slice(2).join('galleryImages: [],');
  fs.writeFileSync('src/data/properties.ts', content);
  console.log('Successfully patched properties.ts');
} else {
  console.log('Could not find galleryImages: [], tags');
}
