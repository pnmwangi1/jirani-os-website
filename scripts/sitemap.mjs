// Writes public/sitemap.xml from scripts/routes.mjs. Runs before every build.
import { writeFileSync } from 'node:fs';
import { sitemapXml } from './routes.mjs';
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), sitemapXml());
console.log('sitemap.xml written');
