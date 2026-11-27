// Checks every pre-rendered page: one h1, a canonical, a sensible title, parseable JSON-LD, and no claim we must not make.
// Run after `npm run build`:  node scripts/seoCheck.mjs
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const files = [];
(function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) { if (f !== 'assets') walk(p); } else if (f === 'index.html') files.push(p); } })(root);

const banned = [
  /\bnet worth\b/i, /\be-?TIMS\b/i, /bank (sync|linking)/i, /\bcosmetic only\b/i, /does not run payroll/i, /never payroll/i,
  /24\/7/i, /\bKES\s*\d+\s*(per|a|each)\s*token/i, /1 token\s*=/i, /\btoken[s]? (is|are) worth/i, /investment tracking/i,
];
// Phrases that may appear only as a denial, so they are checked separately by hand in the report.
let bad = 0;
const fail = (f, m) => { bad++; console.log('FAIL', f.replace(root, ''), m); };
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) fail(f, `h1 count ${h1}`);
  if (!/<link rel="canonical" href="https:\/\/www\.jiranios\.com\//.test(html)) fail(f, 'no canonical');
  const t = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  if (!t || t.length > 70) fail(f, `title "${t}" (${t.length})`);
  if (!/<html lang="en-KE"/.test(html)) fail(f, 'lang');
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch { fail(f, 'bad JSON-LD'); } }
  const text = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ');
  for (const re of banned) if (re.test(text)) fail(f, `banned: ${re}`);
}
console.log(`${files.length} pages checked, ${bad} problems`);
process.exit(bad ? 1 : 0);
