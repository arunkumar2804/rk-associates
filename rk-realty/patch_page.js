const fs = require('fs');
let content = fs.readFileSync('src/app/(public)/properties/page.tsx', 'utf8');

const brigadeImages = fs.readdirSync('./public/assets/images/brigade')
  .filter(f => f.endsWith('.avif'))
  .map((f, i) => "/assets/images/brigade/" + f);

content = content.replace(
  /slug:\s*"brigade-gateway",\s*image:\s*"\/assets\/images\/placeholder.avif",/,
  `slug: "brigade-gateway",
      image: "/assets/images/placeholder.avif",
      galleryImages: ${JSON.stringify(brigadeImages, null, 6)},`
);

fs.writeFileSync('src/app/(public)/properties/page.tsx', content);
console.log('Successfully patched page.tsx');
