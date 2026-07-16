import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:5173/semons-la-vie/', { waitUntil: 'networkidle2', timeout: 15000 });
await page.waitForSelector('.hero-card', { timeout: 5000 });

// Screenshot the hero section (wider area to catch the icon)
await page.screenshot({ path: 'screenshot-hero.png', clip: { x: 0, y: 50, width: 700, height: 650 } });
console.log('Screenshot saved: screenshot-hero.png');

await browser.close();
