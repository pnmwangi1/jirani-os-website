// Production validator. Run after `npm run build` (the build runs it for you).
// It compares the generated files with the list of public routes in scripts/routes.mjs and FAILS the build when
// anything is missing or wrong. It never passes just because some index.html exists.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { allPages, guideSlugs, SITE } from './routes.mjs';

const dist = resolve('dist');
const reports = resolve('build-reports');
const routes = allPages().map(([r]) => r);
const problems = []; // { route, msg }
const fail = (route, msg) => problems.push({ route, msg });

const unescape = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, ' ')
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n))).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)));
const norm = (s) => unescape(s).replace(/\s+/g, ' ').trim();

// ---- 1. The route list itself -------------------------------------------------------------------------------------
const slugs = guideSlugs();
if (routes.length !== new Set(routes).size) fail('(routes)', 'routes.mjs lists a route twice');
if (slugs.length === 0) fail('(routes)', 'no learning guides were found');
for (const s of slugs) if (!routes.includes(`/learn/${s}`)) fail('(routes)', `guide ${s} is not in the route list`);

// ---- 2. Manifest from the prerender step ---------------------------------------------------------------------------
let manifest = null;
const manifestPath = join(reports, 'prerender-manifest.json');
if (!existsSync(manifestPath)) fail('(build)', 'prerender manifest is missing, so the prerender step did not finish');
else {
  manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  if (manifest.expected !== routes.length) fail('(build)', `prerender expected ${manifest.expected} routes but routes.mjs has ${routes.length}`);
  if (manifest.rendered !== routes.length) fail('(build)', `prerender saved ${manifest.rendered} of ${routes.length} routes`);
  if (manifest.failed?.length) fail('(build)', `prerender failures: ${manifest.failed.join(' | ')}`);
}

// ---- 3. Sitemap, robots, llms.txt ----------------------------------------------------------------------------------
const expectedUrls = routes.map((r) => `${SITE}${r === '/' ? '/' : r}`);
const sitemapPath = join(dist, 'sitemap.xml');
if (!existsSync(sitemapPath)) fail('sitemap.xml', 'missing from dist');
else {
  const xml = readFileSync(sitemapPath, 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  for (const u of expectedUrls) if (!locs.includes(u)) fail('sitemap.xml', `missing ${u}`);
  for (const u of locs) { if (!expectedUrls.includes(u)) fail('sitemap.xml', `lists ${u}, which is not a prerendered route`); if (!u.startsWith(`${SITE}/`)) fail('sitemap.xml', `wrong host in ${u}`); }
  if (locs.length !== expectedUrls.length) fail('sitemap.xml', `has ${locs.length} URLs, expected ${expectedUrls.length}`);
  if (!/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/.test(xml)) fail('sitemap.xml', 'no lastmod dates');
}
const robotsPath = join(dist, 'robots.txt');
if (!existsSync(robotsPath)) fail('robots.txt', 'missing from dist');
else {
  const robots = readFileSync(robotsPath, 'utf8');
  const group = (agent) => { const m = robots.match(new RegExp(`User-agent:\\s*${agent}\\s*\\n((?:(?!User-agent:)[^\\n]*\\n?)*)`, 'i')); return m ? m[1] : null; };
  for (const a of ['\\*', 'Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot']) {
    const g = group(a);
    const label = a.replace('\\', '');
    if (g === null) fail('robots.txt', `no rule for ${label}`);
    else if (!/^\s*Allow:\s*\/\s*$/m.test(g) || /^\s*Disallow:\s*\/\s*$/m.test(g)) fail('robots.txt', `${label} must be allowed`);
  }
  for (const a of ['GPTBot', 'Google-Extended']) {
    const g = group(a);
    if (g === null || !/^\s*Disallow:\s*\/\s*$/m.test(g)) fail('robots.txt', `${a} (model training) must be blocked`);
  }
  if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt', 'Sitemap line is missing or has the wrong host');
}
const llmsPath = join(dist, 'llms.txt');
if (!existsSync(llmsPath)) fail('llms.txt', 'missing from dist');
else for (const m of readFileSync(llmsPath, 'utf8').matchAll(/\]\((https?:\/\/[^)]+)\)/g)) { if (!expectedUrls.includes(m[1])) fail('llms.txt', `links to ${m[1]}, which is not a prerendered route`); }

// ---- 4. Every page --------------------------------------------------------------------------------------------------
const FAQ_ROUTES = new Set(['/', '/faq', '/pricing', '/properties', '/budget', '/games', '/tables']);
const banned = [
  /\bnet worth\b/i, /\be-?TIMS\b/i, /bank (sync|linking)/i, /\bcosmetic only\b/i, /does not run payroll/i, /never payroll/i,
  /24\/7/i, /\bKES\s*\d+\s*(per|a|each)\s*token/i, /1 token\s*=/i, /\btoken[s]? (is|are) worth/i, /investment tracking/i,
];
const rows = [];
const seen = { title: new Map(), canonical: new Map(), h1: new Map() };
const typesOf = (node) => { const out = []; const walk = (n) => { if (!n || typeof n !== 'object') return; if (Array.isArray(n)) return n.forEach(walk); if (n['@graph']) walk(n['@graph']); if (n['@type']) out.push(...[].concat(n['@type'])); }; walk(node); return out; };

for (const route of routes) {
  const file = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html');
  const row = { route, file, title: '', canonical: '', robots: '', schema: [], text: 0, ok: true, exists: existsSync(file) };
  const before = problems.length;
  if (!row.exists) { fail(route, 'no HTML file was generated'); row.ok = false; rows.push(row); continue; }
  const html = readFileSync(file, 'utf8');

  const rootStart = html.indexOf('<div id="root"');
  const body = rootStart >= 0 ? html.slice(rootStart) : '';
  const text = norm(body.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' '));
  row.text = text.length;
  if (rootStart < 0 || /<div id="root"><\/div>/.test(html)) fail(route, 'empty React shell: #root has no content');
  else if (text.length < 400) fail(route, `only ${text.length} characters of page text`);

  const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => norm(m[0].replace(/<[^>]+>/g, ' ')));
  if (h1s.length !== 1) fail(route, `${h1s.length} h1 headings (needs exactly 1)`);
  const h1 = h1s[0] || '';

  const title = norm((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  row.title = title;
  if (!title) fail(route, 'no title');
  else if (route !== '/' && !title.endsWith('— Jirani OS')) fail(route, `title "${title}" does not end with the brand`);
  if (title.length > 70) fail(route, `title is ${title.length} characters (max 70)`);
  if (title === 'Jirani OS') fail(route, 'title is the bare default');

  const canon = [...html.matchAll(/<link rel="canonical" href="([^"]*)"/g)].map((m) => m[1]);
  const expectedCanon = `${SITE}${route === '/' ? '/' : route}`;
  row.canonical = canon[0] || '';
  if (canon.length !== 1) fail(route, `${canon.length} canonical links (needs exactly 1)`);
  else if (canon[0] !== expectedCanon) fail(route, `canonical is ${canon[0]}, expected ${expectedCanon}`);

  const metaVal = (attr, name) => { const m = html.match(new RegExp(`<meta ${attr}="${name}" content="([^"]*)"`)); return m ? unescape(m[1]) : null; };
  const desc = metaVal('name', 'description');
  if (!desc) fail(route, 'no meta description');
  else if (desc.length < 50 || desc.length > 320) fail(route, `meta description is ${desc.length} characters (50 to 320)`);
  if ((html.match(/<meta name="description"/g) || []).length !== 1) fail(route, 'meta description appears more than once');
  if (metaVal('property', 'og:url') !== expectedCanon) fail(route, `og:url is ${metaVal('property', 'og:url')}`);
  if (norm(metaVal('property', 'og:title') || '') !== title) fail(route, 'og:title does not match the page title');
  if (norm(metaVal('name', 'twitter:title') || '') !== title) fail(route, 'twitter:title does not match the page title');
  if (!metaVal('property', 'og:image')) fail(route, 'no og:image');

  const robots = metaVal('name', 'robots');
  row.robots = robots || '(none)';
  if (robots === null) fail(route, 'no robots meta tag');
  else if (/noindex|nofollow/i.test(robots)) fail(route, `unexpected "${robots}"`);
  if (!/<html lang="en-KE"/.test(html)) fail(route, 'html lang is not en-KE');

  // Structured data
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const parsed = [];
  for (const b of blocks) { try { parsed.push(JSON.parse(b)); } catch { fail(route, 'invalid JSON-LD (does not parse)'); } }
  const types = parsed.flatMap(typesOf);
  row.schema = [...new Set(types)];
  const count = (t) => types.filter((x) => x === t).length;
  const need = ['Organization', 'WebSite'];
  if (route === '/') need.push('SoftwareApplication'); else need.push('BreadcrumbList');
  if (FAQ_ROUTES.has(route)) need.push('FAQPage');
  if (route.startsWith('/learn/')) need.push('Article');
  for (const t of need) if (count(t) === 0) fail(route, `missing ${t} structured data`);
  for (const t of ['Organization', 'WebSite', 'SoftwareApplication', 'FAQPage', 'Article', 'BreadcrumbList']) if (count(t) > 1) fail(route, `${count(t)} ${t} blocks (needs 1)`);
  if (!FAQ_ROUTES.has(route) && count('FAQPage')) fail(route, 'FAQPage schema on a page with no visible FAQ');
  if (!route.startsWith('/learn/') && count('Article')) fail(route, 'unexpected Article schema');

  // Structured data must match what is on the page
  for (const d of parsed) {
    for (const n of [].concat(d['@graph'] || d)) {
      if (n['@type'] === 'FAQPage') {
        if (!n.mainEntity?.length) fail(route, 'FAQPage has no questions');
        for (const q of n.mainEntity || []) {
          if (!text.includes(norm(q.name))) fail(route, `FAQ question not visible on the page: "${String(q.name).slice(0, 50)}"`);
          if (!text.includes(norm(q.acceptedAnswer?.text || ''))) fail(route, `FAQ answer not visible on the page for: "${String(q.name).slice(0, 50)}"`);
        }
      }
      if (n['@type'] === 'Article') {
        if (!text.includes(norm(n.headline || ''))) fail(route, `Article headline not visible: "${String(n.headline).slice(0, 50)}"`);
        if (n.mainEntityOfPage !== expectedCanon) fail(route, `Article mainEntityOfPage is ${n.mainEntityOfPage}`);
      }
      if (n['@type'] === 'BreadcrumbList') {
        const last = n.itemListElement?.[n.itemListElement.length - 1];
        if (last?.item !== expectedCanon) fail(route, `breadcrumb ends at ${last?.item}`);
      }
      if (n['@type'] === 'SoftwareApplication') {
        const prices = (n.offers || []).map((o) => `${o.name}:${o.price}`).join(',');
        if (prices !== 'Jirani Start:1000,Jirani Plus:2500') fail(route, `SoftwareApplication offers are "${prices}", which must match the Pricing page`);
        if (!/pay as you go/i.test(n.description || '') || !/no monthly fee/i.test(n.description || '')) fail(route, 'SoftwareApplication description does not mention Pay as you go');
        if ((n.offers || []).some((o) => /free/i.test(o.description || '') && !/trial/i.test(o.description || ''))) fail(route, 'an offer says "free" without saying it is a trial');
      }
    }
  }

  // The page must be the page for THIS route (a fallback to Home shows up here)
  if (manifest?.pages) {
    const m = manifest.pages.find((p) => p.route === route);
    if (!m) fail(route, 'not in the prerender manifest');
    else {
      if (m.h1 !== h1) fail(route, `h1 "${h1}" differs from what was rendered "${m.h1}"`);
      if (m.title !== title) fail(route, 'title differs from what was rendered');
    }
  }
  for (const [k, v] of [['title', title], ['canonical', canon[0]], ['h1', h1]]) {
    if (!v) continue;
    if (seen[k].has(v)) fail(route, `same ${k} as ${seen[k].get(v)} ("${v.slice(0, 50)}")`); else seen[k].set(v, route);
  }
  for (const re of banned) if (re.test(text)) fail(route, `banned claim: ${re}`);

  row.ok = problems.length === before;
  rows.push(row);
}

// ---- 5. Report ------------------------------------------------------------------------------------------------------
const cnt = (re) => problems.filter((p) => re.test(p.msg)).length;
const summary = [
  `Expected routes:            ${routes.length}  (${routes.length - slugs.length} pages + ${slugs.length} guides)`,
  `Generated HTML files:       ${rows.filter((r) => r.exists).length}`,
  `Prerendered by the browser: ${manifest?.rendered ?? 0}`,
  `Missing routes:             ${cnt(/no HTML file/)}`,
  `Empty or thin pages:        ${cnt(/empty React shell|characters of page text/)}`,
  `Invalid JSON-LD blocks:     ${cnt(/invalid JSON-LD/)}`,
  `Missing or wrong canonical: ${cnt(/canonical/)}`,
  `Total validation failures:  ${problems.length}`,
];
mkdirSync(reports, { recursive: true });
const md = [
  '# Route-by-route SEO validation', '',
  `Site: ${SITE}  |  Browser: ${manifest?.browser ?? 'unknown'}`, '',
  '```', ...summary, '```', '',
  '| Route | Result | Title | Canonical OK | Robots | Structured data | Text chars |', '|---|---|---|---|---|---|---|',
  ...rows.map((r) => `| ${r.route} | ${r.ok ? 'PASS' : 'FAIL'} | ${r.title.replace(/\|/g, '/')} | ${r.canonical === `${SITE}${r.route === '/' ? '/' : r.route}` ? 'yes' : 'NO'} | ${r.robots} | ${r.schema.join(', ')} | ${r.text} |`),
  '', problems.length ? '## Failures\n' + problems.map((p) => `- ${p.route}: ${p.msg}`).join('\n') : 'No failures.', '',
].join('\n');
writeFileSync(join(reports, 'seo-report.md'), md);

for (const r of rows) console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.route.padEnd(30)} ${String(r.text).padStart(6)} chars  ${r.schema.join(',')}`);
console.log('\n' + summary.join('\n'));
if (problems.length) {
  console.error('\nFAILURES:');
  for (const p of problems) console.error(`  ${p.route}: ${p.msg}`);
  console.error(`\nseoCheck: FAILED (${problems.length} problems).`);
  process.exit(1);
}
console.log('\nseoCheck: all checks passed.');
