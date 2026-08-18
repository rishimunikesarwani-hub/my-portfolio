# Portfolio — Rishi Muni Kesarwani, AI Product Manager

Plain HTML, CSS and JavaScript. No build step, no dependencies, no npm.

## Open it

### 🔗 http://localhost:8899

**Easiest way: double-click `Open-Portfolio.cmd`** in this folder. It starts the
local server and opens the site in your browser. A small minimised window called
*portfolio-server* stays open while you browse — close it when you're done.

`Portfolio site (localhost).url` is a plain bookmark to the same address. It only
works while the server is running, so use the `.cmd` file if nothing loads.

To start it by hand instead:

```
cd "C:\Users\Be Flith Rich\my-portfolio"
py -m http.server 8899
```

You can also just double-click `index.html` — it works over `file://` too, because
nothing uses `fetch`. The local server is only nicer for testing links.

## Edit the content

**Everything lives in one file: `assets/js/data.js`.** Don't edit the HTML pages
to change words — they're empty shells that the JavaScript fills in.

Inside `data.js`:

| What you want to change | Where |
|---|---|
| Your name, pitch, stats, the rotating hero lines | `person` |
| The three categories and their descriptions | `categories` |
| The ten breakdowns / agents / advisory pieces | `items` |
| Blog posts | `posts` |
| Work history on the About page | `experience` |
| Skills, education, reading list | `skills`, `education`, `reading` |

Categories no longer have pages of their own. They still exist as the filter
buttons on Work, so a category link is just `work.html?cat=<slug>`.

### Adding a new breakdown

Copy an existing entry in `items`, change the `id` (it becomes the URL:
`breakdown.html?id=your-new-id`), and fill in the fields. It automatically appears
in Work, its Category page, Search, and the Compare table if its category is
`breakdowns`. Add its `id` to the `related` array of two or three other items so
it gets linked from elsewhere.

Section `type` can be:
- `prose` — array of paragraphs
- `list` — array of bullets (HTML like `<strong>` is allowed)
- `table` — needs `head: [...]` and `body: [[...], [...]]`
- `note` — a paragraph block with a cyan left rule, for the punchline
- `figure` — one or more architecture diagrams

### Adding a blog post

Posts live in `posts` in `data.js`, next to `items`. Copy an entry, change the
`id` — it becomes the URL, `post.html?id=your-id` — and write the `sections`.

```js
{
  id: "what-i-got-wrong-about-evals",
  title: "What I got wrong about evals",
  date: "2026-08-12",          // YYYY-MM-DD, or it sorts wrongly
  summary: "One line. Shown on the blog index, not on the post itself.",
  tags: ["Evals"],             // optional
  draft: false,                // true = hidden from index, search and URL
  sections: [ … ]
}
```

Sections use the same vocabulary as `items` — `prose`, `list`, `note`, `table`,
`figure` — with one difference: **`h` is optional on a post**, so a post can open
with plain paragraphs before its first heading. Work items always carry an `h`,
so their rendering is unchanged.

Ordering is by `date`, newest first, so the order inside the array does not
matter. A post appears on the blog index, in search, and in prev/next
automatically. There is nothing to register.

`draft: true` is a real gate, not just a hide — a draft is unreachable by URL,
so you can push an unfinished post without it leaking.

There is a fully worked example kept as a draft: `how-to-add-a-post`. It never
shows publicly. Read it in `data.js` rather than publishing it.

## Diagrams

Diagrams are drawn as SVG in code, not shipped as image files, so they carry the
site's own navy-and-cyan palette and stay sharp at any size.

The drawing lives in the `FIGURE` map near the top of `site.js`, keyed by name.
The words around it live in `data.js`:

```js
{ h: "The architecture, in four drawings", type: "figure", body: [
    { key: "mchq-task", tag: "Artifact 01", name: "How one task gets done",
      cap: "Caption. <b>Bold</b> is allowed." }
] }
```

Shape vocabulary, shared by every drawing: **dashed box** = a person or outside
actor, **solid box** = something the system does, **cylinder** = something stored.
Helpers are `dgBox`, `dgStore`, `dgArrow`, `dgNote` and `dgNum`.

Keep labels to one to three words. The boxes are sized for short text and a long
label will run over its own border — the edge labels on arrows are the tightest
spot, so check any new one in the browser before calling it done.

## The pages

| File | What it does |
|---|---|
| `index.html` | Home — hero, thesis, featured work, categories |
| `work.html` | All ten, with category filters and five sort options |
| `work.html?cat=…` | The same page, filtered to one category |
| `breakdown.html?id=…` | One piece, in full. Breadcrumbs, related, prev/next |
| `blog.html` | Blog index, newest first. Drafts excluded |
| `post.html?id=…` | One post. Breadcrumbs, prev/next by date |
| `search.html?q=…` | Full-text search across every page |
| `about.html` | Bio, experience timeline, skills, education |
| `contact.html` | Email, phone, LinkedIn, résumé |
| `copyright.html` | Terms of use and the AI policy — what agents may do with this |
| `projects/healthcare-agent/demo.html` | The sepsis agent's demo, mirrored here so it has a public URL |
| `projects/healthcare-agent/notes.html` | The same project's study notes |

`assets/css/style.css` is all the styling. `assets/js/site.js` builds the header,
breadcrumbs, footer and renders each page.

## The design

Dark navy blueprint, cyan signal, Space Grotesk + Inter + JetBrains Mono.

The recurring device is the **decision gate** — every piece of work shows the real
threshold where its system stops deciding on its own (heat index > 42°C, fit score
≥ 80, shelf life < 5 days). It's in `gate: { rule, pass, fail }` on each item. If a
new item has no meaningful threshold, omit `gate` and the site just skips it.

## Replacing the résumé

Drop a new PDF at `assets/files/Rishi_Muni_Kesarwani_Resume.pdf`, or change the
`resume` path in `data.js`.

**There is deliberately only one résumé link on the whole site** — the Résumé
button in the hero on Home. It used to appear in six places (hero button, hero
icon row, footer, CTA band, About and Contact); all but the hero button were
removed on 4 Aug 2026. If you add another one, you are undoing that decision on
purpose, not fixing an oversight.

Current file is the one-page AI PM résumé exported 2 Aug 2026, copied from
`Documents\Work\AI_Product_Manager_Preparation\07_Resume_JD_Job_Tracker\Master Resume\`.

## Contact links

### Featured LinkedIn post

The Contact page embeds one LinkedIn post below the contact list. The URL is
`person.linkedinEmbed` in `data.js`. To swap it, open the post on LinkedIn →
`⋯` → **Embed this post**, and copy only the `src="…"` URL, not the whole
`<iframe>` tag.

Set `linkedinEmbed: ""` and the entire block disappears, the same way `github`
does.

It is a real third-party iframe, so it needs a connection and sets LinkedIn's
cookies for whoever visits. The height is LinkedIn's own fixed 594px — if a
shorter post leaves dead space inside the frame, change `height` on
`.embed-frame iframe` in `style.css`.

### The build notice

The amber pill in the footer — "content of this website is under active review"
— is `.build-pill`, written in `buildFooter()` in `site.js`, so it shows on
every page. The "generated with Claude Code" half came off on 18 Aug 2026.

It is deliberately the same pill as `.avail` in the hero — same size, mono type,
letterspacing and pulsing dot — recoloured amber so it reads as a caution rather
than an offer. If you restyle one, restyle both or they will drift apart.

**Delete the markup in `buildFooter()` and the `.build-pill` block in
`style.css` once the content has been reviewed.** It is meant to come down, not
to live there.

### Contact links

Email, phone, LinkedIn, GitHub and location all come from `person` in `data.js`.
GitHub is optional — set `github: ""` and it vanishes from the hero icons, the
Contact list and the footer without leaving a gap.

## Copyright, feeds and agents

Four files at the root exist for machines rather than for readers:

| File | What it is for |
|---|---|
| `robots.txt` | Crawlers are **allowed**, and the major AI ones are named individually rather than left to a wildcard, so the intent is on the record |
| `llms.txt` | The whole site as plain markdown — the emerging convention for "here is my site in the form a language model can use" |
| `feed.xml` | RSS of the blog posts, with the terms in the `<copyright>` element |
| `sitemap.xml` | Every page, including the query-string ones a crawler would not otherwise find |

The terms themselves live in one sentence in `person.legal` in `data.js`, and are
rendered into the footer, `copyright.html`, `llms.txt` and the feed from there.
`LICENSE` says the same thing for anyone reading the repository.

### Regenerating the feeds

A crawler cannot run JavaScript reliably, so those files have to exist on disk
rather than be rendered from `data.js` in the browser like everything else.

```
node tools/build-feeds.mjs
```

Run it after adding a post or a piece of work. **The site still has no build
step** — nothing on any page depends on this having been run, and a stale feed is
a stale feed rather than a broken page. That distinction matters, because "one
object, no build step" is itself one of the case studies.

## Hosting it

Any static host works — Netlify, Vercel, GitHub Pages, Cloudflare Pages. Drag the
whole folder in; there's nothing to configure.

## Known gaps

- Mobile layout is written (breakpoints at 1040px, 900px, 620px with a hamburger
  menu) but has not been checked on a real phone yet.
- Fonts load from Google Fonts, so the first paint offline falls back to system
  sans-serif. If you want it fully offline, download the three font files into
  `assets/fonts/` and swap the `<link>` for an `@font-face` block.
