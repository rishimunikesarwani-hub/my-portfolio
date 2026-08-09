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
| `search.html?q=…` | Full-text search across every page |
| `about.html` | Bio, experience timeline, skills, education |
| `contact.html` | Email, phone, LinkedIn, résumé |

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

Email, phone, LinkedIn, GitHub and location all come from `person` in `data.js`.
GitHub is optional — set `github: ""` and it vanishes from the hero icons, the
Contact list and the footer without leaving a gap.

## Hosting it

Any static host works — Netlify, Vercel, GitHub Pages, Cloudflare Pages. Drag the
whole folder in; there's nothing to configure.

## Known gaps

- Mobile layout is written (breakpoints at 1040px, 900px, 620px with a hamburger
  menu) but has not been checked on a real phone yet.
- Fonts load from Google Fonts, so the first paint offline falls back to system
  sans-serif. If you want it fully offline, download the three font files into
  `assets/fonts/` and swap the `<link>` for an `@font-face` block.
