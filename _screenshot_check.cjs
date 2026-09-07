const { chromium } = require('playwright');
const OUT = 'C:/Users/WEBFRI~1/AppData/Local/Temp/claude/c--Users-Webfriends-E2-Documents-puntocero-Puntocero/e49460de-3ccb-4774-983a-4af489fbf2bb/scratchpad';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 1400 } });
  const errors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', (err) => errors.push('PAGEERROR: ' + String(err)));

  // Home page + hero video check
  await page.goto('http://localhost:3000', { waitUntil: 'load', timeout: 20000 });
  await page.waitForTimeout(2000);
  const videoSrc = await page.$eval('header video source', (el) => el.src);
  console.log('Hero video src:', videoSrc);
  await page.screenshot({ path: `${OUT}/home-hero.png` });

  // Navigate to gallery via nav link
  await page.click('a[href="/galeria"], a[href="/#features"] >> nth=-1'); // fallback selector guard
  await page.waitForTimeout(200);

  await page.goto('http://localhost:3000/galeria', { waitUntil: 'load', timeout: 20000 });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${OUT}/gallery-page.png`, fullPage: true });

  // Click first photo to open lightbox
  const firstPhoto = page.locator('main button[aria-label]').first();
  await firstPhoto.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/gallery-lightbox-1.png` });

  // Navigate next
  await page.click('button[aria-label="Foto siguiente"] >> visible=true');
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/gallery-lightbox-2.png` });

  // Close
  await page.click('button[aria-label="Cerrar galería"]');
  await page.waitForTimeout(300);

  console.log('DONE');
  console.log('ERRORS:', errors);
  await browser.close();
})();
