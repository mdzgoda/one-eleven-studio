// Resizes and recompresses raster images so oversized CMS uploads (camera
// photos, unedited exports) never ship to visitors at full size. Defaults to
// dist/uploads (run after `vite build`); pass a path to target another
// directory, e.g. `node scripts/optimize-images.js public/uploads` to also
// shrink the committed originals.
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const DIR = process.argv[2] || 'dist/uploads';
const MAX_DIMENSION = 1920;
const RASTER_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function optimize(filePath, ext) {
  const before = statSync(filePath).size;
  const input = readFileSync(filePath);
  const image = sharp(input).resize({
    width: MAX_DIMENSION,
    height: MAX_DIMENSION,
    fit: 'inside',
    withoutEnlargement: true,
  });

  let pipeline = image;
  if (ext === '.jpg' || ext === '.jpeg') pipeline = image.jpeg({ quality: 82, mozjpeg: true });
  else if (ext === '.png') pipeline = image.png({ compressionLevel: 9 });
  else if (ext === '.webp') pipeline = image.webp({ quality: 82 });

  const output = await pipeline.toBuffer();
  if (output.length < before) {
    writeFileSync(filePath, output);
    console.log(`[optimize-images] ${filePath}: ${(before / 1024).toFixed(0)}KB -> ${(output.length / 1024).toFixed(0)}KB`);
  } else {
    console.log(`[optimize-images] ${filePath}: already optimal, skipped`);
  }
}

async function main() {
  let files;
  try {
    files = readdirSync(DIR);
  } catch {
    console.log('[optimize-images] no uploads directory, skipping');
    return;
  }

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!RASTER_EXTS.has(ext)) continue;
    try {
      await optimize(join(DIR, file), ext);
    } catch (err) {
      console.error(`[optimize-images] failed on ${file}:`, err.message);
    }
  }
}

main();
