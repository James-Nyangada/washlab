import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

const filesToProcess = [
  'components/innerpages/Contact1.jsx',
  'components/innerpages/CareerHero.jsx',
  'components/innerpages/About.jsx',
  'components/homes/home-8/Features.jsx',
  'components/homes/home-5/Hero.jsx',
  'components/blog/community.jsx',
  'components/blog/Kwale.jsx',
  'components/blog/Rural.jsx',
  'components/blog/Samburu.jsx',
  'components/blog/Technology.jsx',
  'components/blog/BlogDetails1.jsx',
  'data/timeline.js',
  'data/features.js',
  'data/blogs.js'
];

const replacements = [
  { from: 'hero-about-03.jpeg', to: 'hero-about-03.webp' },
  { from: 'hero-about-02.jpeg', to: 'hero-about-02.webp' },
  { from: 'hero-about-01.jpeg', to: 'hero-about-01.webp' },
  { from: 'feature-01.jpeg', to: 'feature-01.webp' },
  { from: 'hero-05.jpeg', to: 'hero-05.webp' },
];

async function updateFiles() {
  for (const relPath of filesToProcess) {
    const fullPath = path.join(PROJECT_ROOT, relPath);
    try {
      let content = await fs.readFile(fullPath, 'utf8');
      let changed = false;
      
      for (const { from, to } of replacements) {
        if (content.includes(from)) {
          content = content.replaceAll(from, to);
          changed = true;
        }
      }
      
      if (changed) {
        await fs.writeFile(fullPath, content, 'utf8');
        console.log(`Updated: ${relPath}`);
      }
    } catch (err) {
      console.error(`Error processing ${relPath}:`, err.message);
    }
  }
}

updateFiles();
