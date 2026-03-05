import puppeteer from 'puppeteer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'guides');

const guides = [
  'how-to-start-a-tour-business',
  'tour-itinerary-template',
  'tour-operator-mistakes',
  'tour-operator-software-guide',
  'scottsdale-retreat-planning-guide',
  'host-a-memorable-wellness-retreat',
  'types-of-retreats-for-hosts',
  'wellness-retreat-planning-checklist',
  'spiritual-retreat-ideas',
  'group-trip-insurance-101',
  'event-planning-toolkit-for-coaches-and-creators',
  'squadtrip-vs-travefy',
];

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 675, deviceScaleFactor: 2 });

  const htmlPath = path.join(__dirname, 'generate-guide-images.html');
  await page.goto(`file://${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'load' });

  for (const slug of guides) {
    const card = await page.$(`#${slug}`);
    if (!card) {
      console.error(`Card not found: ${slug}`);
      continue;
    }

    const pngBuffer = await card.screenshot({ type: 'png' });

    const webpPath = path.join(OUTPUT_DIR, `${slug}.webp`);
    await sharp(pngBuffer)
      .webp({ quality: 85 })
      .toFile(webpPath);

    const stats = fs.statSync(webpPath);
    console.log(`Created: ${slug}.webp (${Math.round(stats.size / 1024)}KB)`);
  }

  // Clean up test file if it exists
  const testFile = path.join(OUTPUT_DIR, 'test-tour-business.png');
  if (fs.existsSync(testFile)) fs.unlinkSync(testFile);

  await browser.close();
  console.log(`\nDone! ${guides.length} images generated.`);
}

main().catch(console.error);
