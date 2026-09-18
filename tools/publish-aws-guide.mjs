import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = 'C:/Users/Be Flith Rich/Documents/Work/AI_Product_Manager_Preparation/13_Adhoc_Learning/aws-agentic-ai-pm-one-day-library/aws-agentic-ai-pm-decision-guide.html';
const destination = path.join(root, 'aws-agentic-ai-pm-decision-guide.html');
const site = 'https://rishi-ships-every-day.vercel.app';

const portfolioChrome = `
<meta name="description" content="A source-linked AWS Agentic AI and enterprise RAG decision guide for AI product managers.">
<link rel="canonical" href="${site}/aws-agentic-ai-pm-decision-guide.html">
<style>
  :root { --ink:#142d3d; --cyan:#2ec5d3; --navy:#0f3142; --paper:#f7fafb; --muted:#527080; }
  body { background:var(--paper); color:var(--ink); font-family:Inter,Arial,sans-serif; font-size:17px; line-height:1.65; }
  .portfolio-bar { background:var(--navy); color:#fff; padding:14px max(24px, calc((100vw - 1120px)/2)); display:flex; align-items:center; justify-content:space-between; gap:18px; font-family:'Space Grotesk',Arial,sans-serif; }
  .portfolio-bar a { color:#fff; text-decoration:none; font-weight:700; }
  .portfolio-bar nav { display:flex; gap:18px; font-size:14px; }
  .portfolio-bar nav a { color:#cceff3; }
  .study-note { max-width:1120px; background:#fff; padding:48px max(24px, 5vw) 72px; }
  h1,h2,h3,h4 { font-family:'Space Grotesk',Arial,sans-serif; color:var(--navy); }
  h1 { font-size:clamp(36px,5vw,60px); }
  h2 .num, .eyebrow { background:var(--navy); color:#fff; }
  .kicker, .hero-deck, .source-meta, .cap, .shift, .xlink { color:var(--muted); }
  .intro, .card, .diagram, .flow-step, .dbox.plain, .toc { border-color:#91ced6; background:#f8fdfe; }
  .note, .note.blue, .note.green { border-color:var(--cyan); background:#effcff; color:var(--ink); }
  .portfolio-footer { max-width:1120px; margin:0 auto; padding:26px max(24px,5vw) 48px; color:var(--muted); font-size:14px; }
  .portfolio-footer a { color:#176b79; }
  @media (max-width:640px) { .portfolio-bar { padding:13px 18px; } .portfolio-bar nav { gap:12px; } .study-note { padding:34px 18px 52px; } }
</style>`;

const header = `<header class="portfolio-bar"><a href="/index.html">Rishi Muni Kesarwani</a><nav aria-label="Portfolio"><a href="/work.html">Work</a><a href="/blog.html">Writing</a><a href="/about.html">About</a></nav></header>`;
const footer = `<footer class="portfolio-footer"><p>Published as a portfolio learning artifact. The original source links and evidence boundaries are preserved in the guide. <a href="/blog.html">More working notes</a>.</p></footer>`;

let html = await fs.readFile(source, 'utf8');
html = html
  .replace('<title>AWS Agentic AI &amp; Enterprise RAG — PM Decision Guide — Study Notes</title>', '<title>AWS Agentic AI &amp; Enterprise RAG — Rishi Muni Kesarwani</title>')
  .replace('</head>', `${portfolioChrome}\n</head>`)
  .replace('<body>', `<body>${header}`)
  .replace('</body>', `${footer}</body>`);

await fs.writeFile(destination, html, 'utf8');
console.log(destination);
