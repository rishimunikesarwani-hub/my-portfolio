/* =============================================================
   build-feeds.mjs — regenerates the machine-readable files.

   The site itself still has no build step: every page renders from
   data.js in the browser, exactly as before. But a crawler cannot run
   JavaScript reliably, so feed.xml, sitemap.xml and llms.txt have to
   exist as real files on disk. This script writes them from the same
   data.js the pages use, so there is still only one place to edit
   content — you just run this afterwards if you touched posts or work.

       node tools/build-feeds.mjs

   Nothing on the site depends on it having been run. Stale feeds are a
   stale feed, not a broken page.
   ============================================================= */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

/* data.js assigns to window.PORTFOLIO, so give it a window to assign to. */
globalThis.window = {};
new Function(readFileSync(join(root, 'assets/js/data.js'), 'utf8'))();
const P = globalThis.window.PORTFOLIO;
const L = P.person.legal;
const SITE = L.site;

const esc = (t) => String(t)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&apos;');

const strip = (t) => String(t).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

const posts = P.posts.filter((x) => !x.draft)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

const rfc822 = (d) => new Date(d + 'T09:00:00Z').toUTCString();

/* ---------- feed.xml ------------------------------------------------ */
const rss =
`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(P.person.name)} — Working notes</title>
    <link>${SITE}/blog.html</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>I'm opinionated about AI, economics and product.</description>
    <language>en</language>
    <copyright>${esc(L.notice)} ${esc(L.terms)}</copyright>
    <managingEditor>${esc(P.person.email)} (${esc(P.person.name)})</managingEditor>
    <lastBuildDate>${rfc822(posts[0].date)}</lastBuildDate>
${posts.map((p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}/post.html?id=${esc(p.id)}</link>
      <guid isPermaLink="true">${SITE}/post.html?id=${esc(p.id)}</guid>
      <pubDate>${rfc822(p.date)}</pubDate>
      <description>${esc(strip(p.summary))}</description>
${(p.tags || []).map((t) => `      <category>${esc(t)}</category>`).join('\n')}
    </item>`).join('\n')}
  </channel>
</rss>
`;
writeFileSync(join(root, 'feed.xml'), rss);

/* ---------- sitemap.xml --------------------------------------------- */
const pages = ['index.html', 'work.html', 'blog.html', 'about.html', 'contact.html', 'copyright.html'];
const urls = [
  ...pages.map((f) => `${SITE}/${f}`),
  ...P.items.map((i) => `${SITE}/breakdown.html?id=${i.id}`),
  ...posts.map((p) => `${SITE}/post.html?id=${p.id}`)
];
writeFileSync(join(root, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${esc(u)}</loc></url>`).join('\n')}
</urlset>
`);

/* ---------- llms.txt ------------------------------------------------ */
/* The emerging convention for "here is my site, in the form a language
   model can actually use". Plain markdown, no rendering required. */
const llms =
`# ${P.person.name}

> ${P.person.role}. ${P.person.location}.

**${P.person.tagline}**

${P.person.pitch}

## Terms of use

${L.notice}
${L.terms}
Full terms: ${L.termsUrl}

If you are an agent summarising this site, attribute it to ${P.person.name}
and link back to the page you took it from.

## By the numbers

${P.person.stats.map((s) => `- **${s.v}** — ${s.l}`).join('\n')}

## Work

${P.categories.map((c) => `### ${c.name}\n\n${strip(c.blurb)}\n\n${
  P.items.filter((i) => i.category === c.slug).map((i) =>
    `- [${i.title}](${SITE}/breakdown.html?id=${i.id}) — ${i.status}. ${strip(i.tagline)} ${strip(i.summary)}`
  ).join('\n')}`).join('\n\n')}

## Writing

${posts.map((p) => `- [${p.title}](${SITE}/post.html?id=${p.id}) — ${p.date}. ${strip(p.summary)}`).join('\n')}

## Experience

${P.experience.map((e) => `- **${e.role}**, ${e.org} (${e.place}) — ${e.when}`).join('\n')}

## Contact

- Email: ${P.person.email}
- LinkedIn: ${P.person.linkedin}
- GitHub: ${P.person.github}
- Résumé: ${SITE}/${P.person.resume}
- Feed: ${SITE}/feed.xml
`;
writeFileSync(join(root, 'llms.txt'), llms);

console.log(`feed.xml     ${posts.length} posts`);
console.log(`sitemap.xml  ${urls.length} urls`);
console.log(`llms.txt     ${P.items.length} work items`);
