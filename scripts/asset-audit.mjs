import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const THRESHOLD = 500 * 1024; // 500 KB
const PROJECT_ROOT = path.resolve(__dirname, "..");
const dirsToScan = [path.join(PROJECT_ROOT, "public")];

let heavyFiles = [];

function scanDirectory(dir) {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name !== "node_modules" && entry.name !== ".next") {
        scanDirectory(fullPath);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png", ".gif", ".svg"].includes(ext)) {
        const stats = fs.statSync(fullPath);
        if (stats.size > THRESHOLD) {
          heavyFiles.push({
            path: fullPath.replace(PROJECT_ROOT, ""),
            sizeMB: (stats.size / (1024 * 1024)).toFixed(2) + " MB",
          });
        }
      }
    }
  }
}

console.log("Scanning for heavy assets (>500KB)...");
dirsToScan.forEach(scanDirectory);

if (heavyFiles.length > 0) {
  console.log(`\nFound ${heavyFiles.length} heavy image(s):`);
  heavyFiles.sort((a, b) => parseFloat(b.sizeMB) - parseFloat(a.sizeMB));
  heavyFiles.forEach((file) => {
    console.log(`- ${file.path} (${file.sizeMB})`);
  });
} else {
  console.log("\nNo heavy images found over 500KB. Good job!");
}
