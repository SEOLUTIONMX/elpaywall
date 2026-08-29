// Convierte public/og-default.svg en public/og-default.png (1200x630).
// Se corre solo antes de cada build. Si ya subes tu propio og-default.png
// diseñado, borra o ignora este script.
import { readFile, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const pub = fileURLToPath(new URL('../public/', import.meta.url));
const svgPath = pub + 'og-default.svg';
const pngPath = pub + 'og-default.png';

try {
  await access(svgPath);
} catch {
  console.log('[og] no hay og-default.svg, se omite');
  process.exit(0);
}

const svg = await readFile(svgPath);
const png = await sharp(svg, { density: 144 })
  .resize(1200, 630, { fit: 'cover' })
  .png()
  .toBuffer();
await writeFile(pngPath, png);
console.log('[og] og-default.png generado');
