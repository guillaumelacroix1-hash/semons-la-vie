// Après `vite build` : écrit un HTML par route avec son titre, sa description, sa
// canonical et ses balises de partage, puis le sitemap. Vercel sert ces fichiers
// avant la réécriture SPA (cleanUrls : /naturopathie -> naturopathie.html).
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createServer } from 'vite';

const DIST = 'dist';
const BLOCK = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;

// events.js lit import.meta.env : on passe par le chargeur de Vite, pas par Node seul.
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { PAGES, SITE_URL, DEFAULT_IMAGE, eventSeo } = await vite.ssrLoadModule('/src/data/seo.js');
const { events, filterUpcoming } = await vite.ssrLoadModule('/src/data/events.js');
await vite.close();

const template = readFileSync(join(DIST, 'index.html'), 'utf8');
if (!BLOCK.test(template)) throw new Error('Bloc <!-- seo:start --> introuvable dans dist/index.html');

const esc = (s) => String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const head = ({ title, description, path, image = DEFAULT_IMAGE, type = 'website' }) => {
    const url = `${SITE_URL}${path}`;
    const size = image === DEFAULT_IMAGE
        ? '\n    <meta property="og:image:width" content="1200" />\n    <meta property="og:image:height" content="630" />'
        : '';
    return `<!-- seo:start -->
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${esc(url)}" />
    <meta property="og:type" content="${esc(type)}" />
    <meta property="og:site_name" content="Semons la Vie" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${esc(url)}" />
    <meta property="og:image" content="${esc(image)}" />${size}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${esc(image)}" />
    <!-- seo:end -->`;
};

const fileFor = (path) => join(DIST, path === '/' ? 'index.html' : `${path.slice(1)}.html`);

const pages = [
    ...Object.entries(PAGES).map(([path, meta]) => ({ ...meta, path })),
    ...events.map(eventSeo),
];

for (const page of pages) {
    const file = fileFor(page.path);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, template.replace(BLOCK, head(page)));
}

// Le sitemap ne liste que les événements à venir : les pages passées restent
// accessibles mais n'ont plus à être proposées à Google.
const sitemapPaths = [
    ...Object.keys(PAGES),
    ...filterUpcoming(events).map((e) => `/evenements/${e.id}`),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths.map((p) => `  <url><loc>${SITE_URL}${p === '/' ? '/' : p}</loc></url>`).join('\n')}
</urlset>
`;
rmSync(join(DIST, 'sitemap.xml'), { force: true });
writeFileSync(join(DIST, 'sitemap.xml'), sitemap);

console.log(`SEO : ${pages.length} pages écrites, ${sitemapPaths.length} URL dans le sitemap.`);
