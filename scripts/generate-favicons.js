const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const src = path.join(__dirname, '../public/images/NEWLOGO-nobg.png');
const publicDir = path.join(__dirname, '../public');

async function generate() {
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'logo192.png', size: 192 },
    { name: 'logo512.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
  ];

  for (const { name, size } of sizes) {
    await sharp(src)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(publicDir, name));
    console.log('Created', name);
  }

  // Google Search reads /favicon.ico — use 48px PNG (widely accepted)
  await sharp(src)
    .resize(48, 48, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));

  console.log('Created favicon.ico (48px PNG)');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
