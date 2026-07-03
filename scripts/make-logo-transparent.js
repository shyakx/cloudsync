const sharp = require('sharp');
const path = require('path');

const input = path.join(__dirname, '../public/images/NEWLOGO.png');
const output = path.join(__dirname, '../public/images/NEWLOGO-nobg.png');

async function removeBlackBackground() {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const pixels = Buffer.from(data);

  for (let i = 0; i < pixels.length; i += channels) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    // Keep yellow/orange logo pixels; remove dark background + fringe
    const isLogo = r > 95 && g > 70 && r > b + 35;
    if (isLogo) {
      pixels[i + 3] = 255;
      continue;
    }

    const max = Math.max(r, g, b);
    if (max < 72) {
      pixels[i + 3] = 0;
      continue;
    }

    // Soft edge on anti-aliased transition
    const alpha = Math.round(((max - 72) / 60) * 255);
    pixels[i + 3] = Math.min(255, Math.max(0, alpha));
  }

  await sharp(pixels, { raw: { width, height, channels } })
    .png()
    .toFile(output);

  console.log('Created', output, `${width}x${height}`);
}

removeBlackBackground().catch((err) => {
  console.error(err);
  process.exit(1);
});
