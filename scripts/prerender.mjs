// After `vite build`: opens each public page in a real browser and saves the finished HTML to
// dist/<route>/index.html, so crawlers, link previews and slow phones get the real content and tags at once.
// React then replaces it when the app loads (the app uses createRoot, not hydration).
//
// STRICT BY DEFAULT. A production build must never ship without prerendered pages, so this script exits with
// an error (and the deploy stops, leaving the last good site live) when:
//   - no browser can be started, or
//   - any route cannot be rendered, or
//   - a page comes out wrong (default title, wrong canonical, wrong page, empty content, script errors).
// The only way past it is a development build (`npm run build:spa`) or an explicit ALLOW_SPA_BUILD=1.
//
// Browser lookup order: CHROME_PATH, a Chrome/Edge/Chromium on the machine, a Chromium installed by Playwright,
// then the Chromium bundled in the @sparticuz/chromium package (needs nothing installed on the build server).
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';
import { allPages, SITE } from './routes.mjs';

const dist = resolve('dist');
const reports = resolve('build-reports');
const strict = process.env.ALLOW_SPA_BUILD !== '1';

function stop(msg) {
  if (strict) { console.error(`prerender: FAILED. ${msg}`); process.exit(1); }
  console.warn(`prerender: ${msg} Continuing because ALLOW_SPA_BUILD=1; the site will NOT be prerendered.`);
  process.exit(0);
}

if (process.env.PRERENDER === '0') stop('PRERENDER=0 is set, which would skip prerendering.');
if (!existsSync(join(dist, 'index.html'))) stop('dist/index.html is missing. Run the Vite build first.');

let chromium;
try { ({ chromium } = await import('playwright-core')); } catch { stop('playwright-core is not installed. Run npm install.'); }

const systemCandidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

/** Every way we can try to start a browser, in order. Each returns a launched browser. */
const launchers = [];
for (const p of systemCandidates) if (existsSync(p)) launchers.push([`system browser ${p}`, () => chromium.launch({ executablePath: p, args: ['--no-sandbox'] })]);
launchers.push(['Playwright Chromium', () => chromium.launch({ args: ['--no-sandbox'] })]);
launchers.push(['bundled @sparticuz/chromium', async () => {
  const sp = (await import('@sparticuz/chromium')).default;
  return chromium.launch({ executablePath: await sp.executablePath(), args: sp.args, headless: true });
}]);
// Test hook for the build checks: skip the first N launchers to prove the fallbacks work.
const skip = Number(process.env.PRERENDER_TEST_SKIP_LAUNCHERS || 0);

let browser; let browserName = '';
const launchErrors = [];
for (const [name, fn] of launchers.slice(skip)) {
  try {
    const b = await fn();
    const probe = await b.newPage(); await probe.setContent('<h1>ok</h1>');
    if ((await probe.textContent('h1')) !== 'ok') throw new Error('browser did not render a test page');
    await probe.close();
    browser = b; browserName = `${name} (${b.version()})`; break;
  } catch (e) { launchErrors.push(`${name}: ${String(e.message).split('\n')[0]}`); }
}
if (!browser) stop(`no browser could be started. Tried:\n  ${launchErrors.join('\n  ')}`);
console.log(`prerender: browser = ${browserName}`);

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.json': 'application/json', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json' };
// The shell is read once, before any page is overwritten.
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

const routes = allPages();
const manifest = [];
const failed = [];
const ATTEMPTS = 3;

async function renderOne(route) {
  const expectedCanonical = `${SITE}${route === '/' ? '/' : route}`;
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const problems = [];
  const warnings = [];
  page.on('pageerror', (e) => problems.push(`script error: ${String(e.message).split('\n')[0]}`));
  page.on('console', (m) => { if (m.type() === 'error') warnings.push(String(m.text()).slice(0, 160)); });
  page.on('response', (r) => { if (r.url().startsWith(base) && r.status() >= 400) problems.push(`${r.status()} for ${r.url().replace(base, '')}`); });
  // Block third-party calls (fonts, analytics) so the snapshot is stable and offline-safe.
  await page.route((u) => !u.href.startsWith(base), (r) => r.abort());
  try {
    await page.goto(base + route, { waitUntil: 'networkidle' });
    await page.waitForSelector('h1', { timeout: 10000 });
    // The page's own tags are set by the app after it loads; wait until they are the right ones for THIS route.
    await page.waitForFunction((canon) => {
      const c = document.querySelector('link[rel="canonical"]');
      return !!c && c.getAttribute('href') === canon && document.title && document.title !== 'Jirani OS';
    }, expectedCanonical, { timeout: 10000 });
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
    const text = await page.evaluate(() => (document.getElementById('root')?.innerText || '').replace(/\s+/g, ' ').trim());
    const info = await page.evaluate(() => ({
      title: document.title,
      h1: (document.querySelector('h1')?.textContent || '').trim(),
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
    }));
    if (text.length < 400) problems.push(`page text is only ${text.length} characters`);
    if (problems.length) throw new Error(problems.join('; '));
    const out = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html');
    mkdirSync(join(out, '..'), { recursive: true });
    writeFileSync(out, html);
    return { route, file: out.replace(dist, 'dist').replace(/\\/g, '/'), bytes: Buffer.byteLength(html), textLength: text.length, ...info, consoleErrors: warnings.length };
  } finally { await page.close(); }
}

for (const [route] of routes) {
  let lastErr = '';
  let rec = null;
  for (let i = 1; i <= ATTEMPTS && !rec; i++) {
    try { rec = await renderOne(route); } catch (e) { lastErr = String(e.message).split('\n')[0]; }
  }
  if (rec) manifest.push(rec); else failed.push(`${route}: ${lastErr}`);
}
await browser.close();
server.close();

mkdirSync(reports, { recursive: true });
writeFileSync(join(reports, 'prerender-manifest.json'), JSON.stringify({ site: SITE, browser: browserName, expected: routes.length, rendered: manifest.length, failed, pages: manifest }, null, 2));
console.log(`prerender: ${manifest.length} of ${routes.length} pages saved${failed.length ? `, ${failed.length} FAILED` : ''}`);
if (failed.length) {
  failed.forEach((f) => console.error('  ' + f));
  if (strict) { console.error('prerender: FAILED. Not every route was prerendered, so the build stops here.'); process.exit(1); }
}
