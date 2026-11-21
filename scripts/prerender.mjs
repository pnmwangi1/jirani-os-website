// After `vite build`: opens each public page in a real browser and saves the finished
// HTML to dist/<route>/index.html, so crawlers, link previews and slow phones get the
// real content and tags straight away. React then takes over as before.
//
// Needs Chrome or Chromium. It looks for one in CHROME_PATH and the usual places.
// If none is found (some build servers), it prints a warning and leaves the normal
// single-page build untouched, so deploys never fail because of this step.
// Set PRERENDER=0 to skip it.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';
import { allPages } from './routes.mjs';

const dist = resolve('dist');
if (process.env.PRERENDER === '0') { console.log('prerender: skipped (PRERENDER=0)'); process.exit(0); }

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);
const chrome = candidates.find((p) => existsSync(p));
let chromium;
try { ({ chromium } = await import('playwright-core')); } catch { /* not installed */ }
if (!chrome || !chromium) {
  console.warn('prerender: no Chrome/Chromium or playwright-core found. Skipping; the site still works as a normal single-page app.');
  process.exit(0);
}

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.json': 'application/json', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json' };
const shell = readFileSync(join(dist, 'index.html'));
const server = createServer((req, res) => {
  const path = decodeURIComponent((req.url || '/').split('?')[0]);
  const file = join(dist, path);
  if (file.startsWith(dist) && existsSync(file) && extname(file)) {
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
    res.end(readFileSync(file));
  } else { res.writeHead(200, { 'Content-Type': 'text/html' }); res.end(shell); }
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}`;

const browser = await chromium.launch({ executablePath: chrome, args: ['--no-sandbox'] });
let done = 0;
const failed = [];
for (const [route] of allPages()) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  // Block third-party calls (fonts, analytics) so the snapshot is stable and offline-safe.
  await page.route((u) => !u.href.startsWith(base), (r) => r.abort());
  try {
    await page.goto(base + route, { waitUntil: 'networkidle' });
    await page.waitForSelector('h1', { timeout: 8000 });
    // Scroll through so scroll-reveal sections reach their final state.
    await page.evaluate(async () => {
      const h = document.body.scrollHeight;
      for (let y = 0; y < h; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(400);
    let html = await page.evaluate(() => {
      document.documentElement.classList.remove('dark');
      return '<!doctype html>\n' + document.documentElement.outerHTML;
    });
    // Real people without JavaScript still see the content.
    html = html.replace('</head>', '<noscript><style>*{opacity:1!important;transform:none!important}</style></noscript></head>');
    const out = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html');
    mkdirSync(join(out, '..'), { recursive: true });
    writeFileSync(out, html);
    done++;
  } catch (e) {
    failed.push(`${route}: ${e.message.split('\n')[0]}`);
  }
  await page.close();
}
await browser.close();
server.close();
console.log(`prerender: ${done} pages saved${failed.length ? `, ${failed.length} failed` : ''}`);
failed.forEach((f) => console.warn('  ' + f));
