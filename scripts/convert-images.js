import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const directoriesToProcess = [
  path.join(rootDir, 'src', 'assets'),
  // path.join(rootDir, 'public') // Uncomment if you want to process public folder too
];

const extensions = ['.png', '.jpg', '.jpeg'];

const processDirectory = async (dir) => {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        const webpPath = filePath.replace(ext, '.webp');
        
        // Skip if webp already exists and is newer
        if (fs.existsSync(webpPath)) {
            const webpStat = fs.statSync(webpPath);
            if (webpStat.mtime > stat.mtime) {
                console.log(`Skipping ${file}, WebP already up to date.`);
                continue;
            }
        }

        console.log(`Converting ${file} to WebP...`);
        try {
          await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(webpPath);
          console.log(`✓ Converted: ${webpPath}`);
        } catch (error) {
          console.error(`Error converting ${file}:`, error);
        }
      }
    }
  }
};

(async () => {
  console.log('Starting image conversion...');
  for (const dir of directoriesToProcess) {
    await processDirectory(dir);
  }
  console.log('Image conversion complete!');
})();
