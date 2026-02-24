import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// We import sharp dynamically or statically based on installation
let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (e) {
  console.error("Please install sharp by running: npm install sharp");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const THRESHOLD = 500 * 1024; // 500 KB
const PROJECT_ROOT = path.resolve(__dirname, '..');
const publicDir = path.join(PROJECT_ROOT, 'public');

async function processImage(filePath) {
  try {
    const ext = path.extname(filePath);
    const basename = path.basename(filePath, ext);
    const dir = path.dirname(filePath);
    const webpPath = path.join(dir, `${basename}.webp`);

    // Check if webp already exists
    if (existsSync(webpPath)) {
      console.log(`Skipping (already exists): ${webpPath.replace(PROJECT_ROOT, '')}`);
      return;
    }

    console.log(`Compressing: ${filePath.replace(PROJECT_ROOT, '')}`);
    
    await sharp(filePath)
      .webp({ quality: 80 }) // 80 is a good balance between size and quality
      .toFile(webpPath);
      
    console.log(`✅ Created: ${webpPath.replace(PROJECT_ROOT, '')}`);
  } catch (err) {
    console.error(`❌ Failed to compress ${filePath}:`, err.message);
  }
}

async function scanAndCompress(dir) {
  if (!existsSync(dir)) return;
  
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next') {
        await scanAndCompress(fullPath);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      // Only processing PNGs and JPEGs
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const stats = await fs.stat(fullPath);
        if (stats.size > THRESHOLD) {
          await processImage(fullPath);
        }
      }
    }
  }
}

console.log('Starting image compression (WebP)...');
await scanAndCompress(publicDir);
console.log('Finished image compression.');
