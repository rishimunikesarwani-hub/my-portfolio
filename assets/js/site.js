/* =============================================================
   site.js — shared chrome + every page renderer.
   Pages declare what they are via <body data-page="..."> and
   this file builds the header, breadcrumbs, footer and content.
   ============================================================= */
(function () {
  "use strict";

  var P = window.PORTFOLIO;
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- tiny helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function param(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : "";
  }
  /* "https://github.com/foo" -> "foo", for display next to the icon */
  function ghHandle(url) {
    var m = /github\.com\/([^\/?#]+)/i.exec(url || "");
    return m ? m[1] : "GitHub";
  }
  function itemById(id) {
    for (var i = 0; i < P.items.length; i++) if (P.items[i].id === id) return P.items[i];
    return null;
  }
  function catBySlug(slug) {
    for (var i = 0; i < P.categories.length; i++) if (P.categories[i].slug === slug) return P.categories[i];
    return null;
  }
  function itemsIn(slug) {
    return P.items.filter(function (it) { return it.category === slug; });
  }
  function catName(slug) { var c = catBySlug(slug); return c ? c.name : slug; }

  /* ---------- icons ---------- */
  var ICON = {
    arrow:  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 8h11M9 3.5 13.5 8 9 12.5"/></svg>',
    back:   '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 8h-11M7 3.5 2.5 8 7 12.5"/></svg>',
    search: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="8.6" cy="8.6" r="5.6"/><path d="m13 13 4 4"/></svg>',
    doc:    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 1.5H4a1.5 1.5 0 0 0-1.5 1.5v10A1.5 1.5 0 0 0 4 14.5h8a1.5 1.5 0 0 0 1.5-1.5V6z"/><path d="M9 1.5V6h4.5"/></svg>',
    mail:   '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="16" height="12" rx="2"/><path d="m2.6 5.2 7.4 5.6 7.4-5.6"/></svg>',
    phone:  '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 14.1v2.2a1.5 1.5 0 0 1-1.6 1.5 14.6 14.6 0 0 1-6.4-2.3 14.4 14.4 0 0 1-4.4-4.4A14.6 14.6 0 0 1 2.8 4.6 1.5 1.5 0 0 1 4.3 3h2.2a1.5 1.5 0 0 1 1.5 1.3c.1.8.3 1.5.5 2.2a1.5 1.5 0 0 1-.3 1.6l-1 1a11.7 11.7 0 0 0 4.4 4.4l1-1a1.5 1.5 0 0 1 1.6-.3c.7.3 1.4.4 2.2.5a1.5 1.5 0 0 1 1.3 1.5z"/></svg>',
    li:     '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M5.4 17H2.5V7.4h2.9V17ZM3.9 6.1a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM17.5 17h-2.9v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V17H8.3V7.4h2.8v1.3h.1a3.1 3.1 0 0 1 2.8-1.5c3 0 3.5 2 3.5 4.5V17Z"/></svg>',
    gh:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',
    loc:    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16.2 8.5c0 4.4-6.2 9.4-6.2 9.4s-6.2-5-6.2-9.4a6.2 6.2 0 1 1 12.4 0Z"/><circle cx="10" cy="8.4" r="2.2"/></svg>',
    logo:   '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><path d="M14 4 24.5 23H3.5z" stroke="#2EC5D3"/><path d="M9.2 17.6h9.6" stroke="#2EC5D3" opacity=".55"/></svg>'
  };

  /* =============================================================
     DIAGRAMS
     Architecture drawings are generated as inline SVG rather than
     shipped as images, so they carry the site's own navy/cyan
     palette instead of fighting it, and stay sharp at any size.

     Shape vocabulary, same as the source drawings:
       dashed box = actor    solid box = process    cylinder = store
     ============================================================= */
  var DG = {
    cyan:   "#2EC5D3",
    blue:   "#5B9BF5",
    violet: "#A78BFA",
    amber:  "#F2994A",
    face:   "#141F36"   /* one solid node fill — tints would stack badly */
  };

  function dgOpen(w, h, alt) {
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" xmlns="http://www.w3.org/2000/svg">' +
      '<title>' + esc(alt) + '</title>' +
      '<defs>' +
        '<marker id="dgA" viewBox="0 0 10 10" refX="9.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">' +
          '<path d="M0 0 10 5 0 10z" fill="#3A4C6B"/></marker>' +
        '<marker id="dgB" viewBox="0 0 10 10" refX="0.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">' +
          '<path d="M10 0 0 5 10 10z" fill="#3A4C6B"/></marker>' +
      '</defs>';
  }

  function dgNum(cx, cy, n, a) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="#0B1120" stroke="' + a + '" stroke-width="1.5"/>' +
           '<text class="dg-num" x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle" fill="' + a + '">' + n + '</text>';
  }

  /* label may be a string or an array of lines — the drawings use
     short labels on purpose, long ones do not survive the width */
  function dgText(cx, y, lines, sub) {
    var s = "", lh = 17;
    lines.forEach(function (t, i) {
      s += '<text class="dg-label" x="' + cx + '" y="' + (y + i * lh) + '" text-anchor="middle">' + esc(t) + '</text>';
    });
    if (sub) s += '<text class="dg-sub" x="' + cx + '" y="' + (y + lines.length * lh + 1) + '" text-anchor="middle">' + esc(sub) + '</text>';
    return s;
  }

  function dgBox(x, y, w, h, o) {
    o = o || {};
    var a = o.accent || DG.cyan;
    var lines = [].concat(o.label);
    var block = lines.length * 17 + (o.sub ? 15 : 0);
    var s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="10" fill="' + DG.face +
            '" stroke="' + a + '" stroke-width="1.5"' + (o.dashed ? ' stroke-dasharray="6 4"' : '') + '/>' +
            dgText(x + w / 2, y + (h - block) / 2 + 13, lines, o.sub);
    if (o.n) s += dgNum(x + 19, y, o.n, a);
    return s;
  }

  function dgStore(x, y, w, h, o) {
    o = o || {};
    var a = o.accent || DG.violet;
    var ry = 12, cx = x + w / 2, rx = w / 2;
    var lines = [].concat(o.label);
    var block = lines.length * 17 + (o.sub ? 15 : 0);
    /* body: down the left, round the bottom, up the right — the lid
       is a separate ellipse drawn last so it sits on top */
    return '<path d="M' + x + ' ' + (y + ry) + 'V' + (y + h - ry) +
             'a' + rx + ' ' + ry + ' 0 0 0 ' + w + ' 0V' + (y + ry) + '" fill="' + DG.face +
             '" stroke="' + a + '" stroke-width="1.5"/>' +
           '<ellipse cx="' + cx + '" cy="' + (y + ry) + '" rx="' + rx + '" ry="' + ry +
             '" fill="' + DG.face + '" stroke="' + a + '" stroke-width="1.5"/>' +
           dgText(cx, y + ry + (h - 2 * ry - block) / 2 + 14, lines, o.sub);
  }

  function dgArrow(pts, label, o) {
    o = o || {};
    var d = "M" + pts.map(function (p) { return p[0] + " " + p[1]; }).join("L");
    var s = '<path class="dg-line" d="' + d + '"' +
      (o.plain ? '' : ' marker-end="url(#dgA)"') +
      (o.both ? ' marker-start="url(#dgB)"' : '') +
      (o.dashed ? ' stroke-dasharray="5 4"' : '') + '/>';
    if (label) {
      var a = pts[0], b = pts[pts.length - 1];
      var lx = o.lx == null ? (a[0] + b[0]) / 2 : o.lx;
      var ly = o.ly == null ? (a[1] + b[1]) / 2 - 9 : o.ly;
      s += '<text class="dg-edge" x="' + lx + '" y="' + ly + '" text-anchor="middle">' + esc(label) + '</text>';
    }
    return s;
  }

  function dgNote(x, y, w, h, text, a) {
    a = a || DG.cyan;
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="9" fill="' + DG.face +
             '" fill-opacity=".55" stroke="' + a + '" stroke-width="1.2" stroke-opacity=".45"/>' +
           '<rect x="' + (x + 1) + '" y="' + (y + 10) + '" width="3" height="' + (h - 20) + '" rx="1.5" fill="' + a + '"/>' +
           '<text class="dg-note" x="' + (x + 22) + '" y="' + (y + h / 2 + 4) + '">' + esc(text) + '</text>';
  }

  /* ---------- the drawings themselves ---------- */
  var FIGURE = {

    /* 1 — one task, end to end */
    "mchq-task": function (alt) {
      var y = 72, h = 86, w = 118, step = 194, mid = y + h / 2;
      var x = function (i) { return 16 + i * step; };
      var c = function (i) { return x(i) + w / 2; };
      var nodes = [
        { label: ["You"],                   sub: "founder",      accent: DG.cyan,   dashed: true },
        { label: ["Chat bot"],              sub: "Telegram",     accent: DG.blue },
        { label: ["Coordination", "core"],  sub: "tracks tasks", accent: DG.cyan },
        { label: ["Your cloud", "machine"], sub: "agent works",  accent: DG.violet },
        { label: ["Tool", "connector"],     sub: "email · CRM",  accent: DG.amber },
        { label: ["You approve"],           sub: "if needed",    accent: DG.cyan,   dashed: true }
      ];
      var edges = ["asks", "new task", "assign", "use tools", "approve?"];

      var s = dgOpen(1120, 420, alt);
      nodes.forEach(function (o, i) { o.n = i + 1; s += dgBox(x(i), y, w, h, o); });
      edges.forEach(function (lbl, i) {
        s += dgArrow([[x(i) + w, mid], [x(i + 1), mid]], lbl, { ly: mid - 10 });
      });
      /* the result travels back up to the board */
      s += dgArrow([[c(3), y], [c(3), 42], [c(2), 42], [c(2), y]], "status + result", { lx: (c(3) + c(2)) / 2, ly: 34 });
      /* what gets written down */
      s += dgStore(401, 250, 124, 76, { label: ["Task board"],            accent: DG.cyan });
      s += dgStore(595, 250, 124, 76, { label: ["Memory"],                accent: DG.violet });
      s += dgStore(789, 250, 124, 76, { label: ["Activity +", "cost log"], accent: DG.amber });
      s += dgArrow([[c(2), y + h], [c(2), 250]], "saves",   { lx: c(2) + 36, ly: 205 });
      s += dgArrow([[c(3), y + h], [c(3), 250]], "recalls", { lx: c(3) + 40, ly: 205 });
      s += dgArrow([[c(3) + 34, y + h], [851, 250]], "run + cost", { lx: 790, ly: 200 });
      s += dgNote(16, 352, 1088, 52,
        "The key idea: the board coordinates, the agent executes, and you only handle the exceptions.");
      return s + "</svg>";
    },

    /* 2 — a squad, not one assistant */
    "mchq-squad": function (alt) {
      var s = dgOpen(1120, 430, alt);
      s += dgBox(30, 175, 140, 80,  { label: ["Founder"],    sub: "one messy ask",  accent: DG.cyan, dashed: true });
      s += dgBox(230, 175, 150, 80, { label: ["Lead agent"], sub: "splits the work", accent: DG.blue });
      s += dgStore(440, 140, 160, 150, { label: ["Shared", "board"], sub: "id · status · owner", accent: DG.cyan });
      var agents = [
        { label: ["Research agent"], y: 50 },
        { label: ["Build agent"],    y: 172 },
        { label: ["Review agent"],   y: 294 }
      ];
      agents.forEach(function (a) {
        s += dgBox(760, a.y, 170, 76, { label: a.label, sub: "claims a row", accent: DG.violet });
      });
      s += dgArrow([[170, 215], [230, 215]], "asks",  { ly: 206 });
      s += dgArrow([[380, 215], [440, 215]], "tasks", { ly: 206 });
      /* work is pulled off the board and reported back to it */
      s += dgArrow([[600, 200], [760, 96]],  null, { both: true });
      s += dgArrow([[600, 215], [760, 215]], "claims / reports", { lx: 680, ly: 206, both: true });
      s += dgArrow([[600, 235], [760, 328]], null, { both: true });
      /* and the human is only pulled in when it stalls */
      s += dgArrow([[520, 290], [520, 398], [100, 398], [100, 255]], "blocked → you", { lx: 310, ly: 390 });
      return s + "</svg>";
    },

    /* 3 — the front door, and whose money pays */
    "mchq-providers": function (alt) {
      var s = dgOpen(1120, 400, alt);
      s += dgBox(30, 50, 140, 76,  { label: ["Founder"],    sub: "on their phone", accent: DG.cyan, dashed: true });
      s += dgBox(240, 50, 150, 76, { label: ["Telegram"],   sub: "the front door", accent: DG.blue });
      s += dgBox(450, 50, 150, 76, { label: ["Lead agent"], sub: "makes tasks",    accent: DG.cyan });
      s += dgStore(660, 38, 160, 100, { label: ["Task board"], sub: "id · status", accent: DG.cyan });
      s += dgArrow([[170, 88], [240, 88]], "chats",   { ly: 79 });
      s += dgArrow([[390, 88], [450, 88]], "creates", { ly: 79 });
      s += dgArrow([[600, 88], [660, 88]], "posts",   { ly: 79 });

      s += dgBox(240, 220, 180, 76, { label: ["Agent claims it"], sub: "on your machine", accent: DG.violet });
      s += dgArrow([[740, 138], [740, 180], [330, 180], [330, 220]], "claimed", { lx: 535, ly: 172 });

      var plans = [
        { label: ["Your ChatGPT"], sub: "plan 1", x: 560 },
        { label: ["Your Claude"],  sub: "plan 2", x: 765 },
        { label: ["Copilot"],      sub: "plan 3", x: 970 }
      ];
      plans.forEach(function (p) { s += dgBox(p.x, 220, 118, 76, { label: p.label, sub: p.sub, accent: DG.amber }); });
      s += dgArrow([[420, 258], [560, 258]], "borrows",   { ly: 249 });
      s += dgArrow([[678, 258], [765, 258]], "limit hit", { ly: 249 });
      s += dgArrow([[883, 258], [970, 258]], "limit hit", { ly: 249 });
      s += dgNote(30, 330, 1060, 48,
        "They run no model of their own. Every token is billed to the founder's existing subscription.", DG.amber);
      return s + "</svg>";
    },

    /* 4 — one machine each */
    "mchq-isolation": function (alt) {
      var s = dgOpen(1120, 430, alt);
      s += dgBox(430, 30, 260, 72, { label: ["Coordination core"], sub: "shared by everyone", accent: DG.cyan });
      s += dgArrow([[560, 102], [560, 128]], null, { plain: true });
      s += dgArrow([[195, 128], [925, 128]], "run this task", { lx: 700, ly: 120, plain: true });
      [195, 560, 925].forEach(function (cx) { s += dgArrow([[cx, 128], [cx, 150]]); });

      ["Customer A", "Customer B", "Customer C"].forEach(function (name, i) {
        var X = 25 + i * 365;
        s += '<rect x="' + X + '" y="150" width="340" height="210" rx="14" fill="none" stroke="' + DG.violet +
             '" stroke-width="1.5" stroke-dasharray="7 5" stroke-opacity=".75"/>';
        s += '<text class="dg-label" x="' + (X + 170) + '" y="180" text-anchor="middle">' + esc(name) + '</text>';
        s += dgBox(X + 22, 198, 296, 62, { label: ["Agent machine"], sub: "sleeps when idle", accent: DG.violet });
        s += dgStore(X + 22, 276, 140, 60,  { label: ["Files"],    accent: DG.blue });
        s += dgStore(X + 178, 276, 140, 60, { label: ["Settings"], accent: DG.blue });
      });
      s += dgNote(25, 372, 1070, 46,
        "Nothing crosses a dashed line. The catch: an idle machine still costs them money.", DG.violet);
      return s + "</svg>";
    }
  };

  /* ---------- nav definition (home is always reachable) ---------- */
  var NAV = [
    { href: "index.html",      label: "Home",         page: "home" },
    { href: "work.html",       label: "Work",         page: "work" },
    { href: "blog.html",       label: "Blog",         page: "blog" },
    { href: "about.html",      label: "About",        page: "about" },
    { href: "contact.html",    label: "Contact",      page: "contact" }
  ];

  /* Categories no longer have their own pages — they survive as filters
     on the work page, so every old category link becomes work.html?cat= */
  function catHref(slug) { return "work.html?cat=" + slug; }

  /* =============================================================
     HEADER
     ============================================================= */
  function buildHeader(page) {
    var head = document.createElement("header");
    head.className = "site-head";
    head.innerHTML =
      '<div class="wrap">' +
        '<nav class="nav" id="nav" aria-label="Main">' +
          '<form class="nav-search" role="search" action="search.html" method="get">' +
            ICON.search +
            '<input type="search" name="q" placeholder="Search" aria-label="Search the site">' +
          '</form>' +
          NAV.map(function (n) {
            return '<a href="' + n.href + '"' + (n.page === page ? ' class="current" aria-current="page"' : '') + '>' + n.label + '</a>';
          }).join("") +
        '</nav>' +
        '<button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="nav"><span></span></button>' +
      '</div>';
    document.body.insertBefore(head, document.body.firstChild);

    var burger = $("#burger"), nav = $("#nav");
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) burger.click();
    });
    window.addEventListener("scroll", function () {
      head.classList.toggle("scrolled", window.scrollY > 8);
    }, { passive: true });
  }

  /* =============================================================
     BREADCRUMBS + BACK
     ============================================================= */
  function buildCrumbs(trail) {
    if (!trail || !trail.length) return;
    var bar = document.createElement("div");
    bar.className = "crumbs-bar";

    var parts = [ '<a href="index.html">Home</a>' ];
    trail.forEach(function (c, i) {
      parts.push('<span class="sep" aria-hidden="true">/</span>');
      parts.push(i === trail.length - 1 || !c.href
        ? '<span class="here" aria-current="page">' + esc(c.label) + '</span>'
        : '<a href="' + c.href + '">' + esc(c.label) + '</a>');
    });

    bar.innerHTML =
      '<div class="wrap">' +
        '<nav class="crumbs" aria-label="Breadcrumb">' + parts.join("") + '</nav>' +
        '<button class="btn-back" id="goBack">' + ICON.back + 'Back</button>' +
      '</div>';

    var head = $(".site-head");
    head.parentNode.insertBefore(bar, head.nextSibling);

    $("#goBack").addEventListener("click", function () {
      // Fall back to the parent page when there is no history to go back to.
      if (window.history.length > 1 && document.referrer) window.history.back();
      else {
        var up = trail.length > 1 ? trail[trail.length - 2].href : "index.html";
        window.location.href = up || "index.html";
      }
    });
  }

  /* =============================================================
     FOOTER
     ============================================================= */
  function buildFooter() {
    var f = document.createElement("footer");
    f.className = "site-foot";
    f.innerHTML =
      '<div class="wrap">' +
        '<div class="foot-grid">' +
          '<div>' +
            '<a class="brand" href="index.html" style="margin-bottom:.9rem">' +
              '<span class="brand-name">Rishi<span>.</span></span></a>' +
            '<p class="foot-blurb">' + esc(P.person.role) + '. I design where the machine stops and a person takes over.</p>' +
          '</div>' +
          '<div><h4>Navigate</h4><ul>' +
            NAV.map(function (n) { return '<li><a href="' + n.href + '">' + n.label + '</a></li>'; }).join("") +
          '</ul></div>' +
          '<div><h4>Browse</h4><ul>' +
            P.categories.map(function (c) {
              return '<li><a href="' + catHref(c.slug) + '">' + esc(c.name) + '</a></li>';
            }).join("") +
            (P.person.github ? '<li><a href="' + P.person.github + '" target="_blank" rel="noopener">GitHub</a></li>' : '') +
          '</ul></div>' +
        '</div>' +
        '<p class="build-pill">' +
          '<span class="dot" aria-hidden="true"></span>' +
          'Under active build' +
          '<span class="sep" aria-hidden="true">·</span>' +
          'Generated with Claude Code' +
          '<span class="sep" aria-hidden="true">·</span>' +
          'Content under review' +
        '</p>' +
        '<div class="foot-bot">' +
          '<span>© 2026 ' + esc(P.person.name) + '</span>' +
          '<span>' + esc(P.person.location) + '</span>' +
        '</div>' +
      '</div>';
    document.body.appendChild(f);
  }

  function ctaBand() {
    return '<section class="cta-band"><div class="wrap">' +
      '<p class="eyebrow plain" style="justify-content:center">Open to AI Product Manager roles</p>' +
      '<h2>Want the decision log behind one of these?</h2>' +
      '<div class="hero-cta">' +
        '<a class="btn btn-primary" href="contact.html">Let\'s talk' + ICON.arrow + '</a>' +
      '</div>' +
    '</div></section>';
  }

  /* =============================================================
     CARD
     ============================================================= */
  function cardHTML(it) {
    var href = "breakdown.html?id=" + encodeURIComponent(it.id);
    return '<article class="card">' +
      '<div class="card-top">' +
        '<span class="card-org">' + esc(it.org) + '</span>' +
        '<span class="tag-status" data-s="' + esc(it.status) + '">' + esc(it.status) + '</span>' +
      '</div>' +
      '<h3><a href="' + href + '">' + esc(it.title) + '</a></h3>' +
      '<p class="card-tagline">' + esc(it.tagline) + '</p>' +
      '<p class="card-sum">' + esc(it.summary) + '</p>' +
      '<ul class="tags">' + it.tags.slice(0, 4).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join("") + '</ul>' +
      (it.gate ? '<div class="gate-mini"><b>Gate</b> · ' + esc(it.gate.rule) + '</div>' : '') +
      '<a class="card-link" href="' + href + '">Read the breakdown' + ICON.arrow + '</a>' +
    '</article>';
  }

  /* =============================================================
     PAGE: HOME
     ============================================================= */
  function renderHome() {
    var p = P.person;

    $("#hero").innerHTML =
      '<div class="wrap"><div class="hero-grid">' +
        '<div class="hero-copy stagger">' +
          '<p class="avail"><span class="dot" aria-hidden="true"></span>Open to AI Product Manager roles</p>' +
          '<p class="hello">Hello <span class="wave">👋</span></p>' +
          '<p class="iam">I am ' + esc(p.name) + '</p>' +
          '<h1 class="role-line"><span id="typed"></span><span class="caret" aria-hidden="true"></span></h1>' +
          '<p class="hero-pitch">' + esc(p.pitch) + '</p>' +
          '<ul class="socials">' +
            '<li><a href="' + p.linkedin + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + ICON.li + '</a></li>' +
            (p.github ? '<li><a href="' + p.github + '" target="_blank" rel="noopener" aria-label="GitHub">' + ICON.gh + '</a></li>' : '') +
          '</ul>' +
          '<div class="hero-cta">' +
            /* The only résumé link on the site — see README. */
            '<a class="btn" href="' + p.resume + '" target="_blank" rel="noopener">' + ICON.doc + 'Résumé</a>' +
            '<a class="btn btn-primary" href="contact.html">Let\'s talk' + ICON.arrow + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="portrait">' +
          '<div class="portrait-frame">' +
            '<img src="' + p.photo + '" alt="' + esc(p.name) + ', ' + esc(p.role) + '">' +
          '</div>' +
          '<span class="portrait-chip chip-1"><b>2</b> agents shipped</span>' +
          '<span class="portrait-chip chip-2"><b>6</b> product breakdowns</span>' +
          '<span class="portrait-chip chip-3"><b>9</b> yrs B2B revenue</span>' +
        '</div>' +
      '</div></div>';

    typeLoop($("#typed"), p.rotating);

    /* featured work */
    var featured = ["mission-control-hq", "investor-agent", "swiggy-instamart", "mckinsey-lilli", "zomato-ops", "job-qualifier"];
    $("#featured").innerHTML = '<div class="wrap">' +
      '<div class="section-head reveal">' +
        '<p class="eyebrow">Selected work</p>' +
        '<h2>Shipped, torn down, or advised</h2>' +
        '<p>Six AI products taken apart, three agents built and evaluated, one company advised. Each one opens its own page with the decision, the trade-off, and the number it turned on.</p>' +
      '</div>' +
      '<div class="card-grid reveal">' + featured.map(function (id) { return cardHTML(itemById(id)); }).join("") + '</div>' +
      '<p style="margin-top:1.8rem"><a class="btn" href="work.html">All work, filterable' + ICON.arrow + '</a></p>' +
    '</div>';

    /* categories */
    $("#cats").innerHTML = '<div class="wrap">' +
      '<div class="section-head reveal"><p class="eyebrow">Browse by type</p><h2>Three kinds of evidence</h2></div>' +
      '<div class="card-grid reveal">' + P.categories.map(catCardHTML).join("") + '</div>' +
    '</div>';

    $("#cta").innerHTML = ctaBand();
  }

  function catCardHTML(c) {
    var n = itemsIn(c.slug).length;
    return '<article class="card cat-card">' +
      '<div class="count">' + n + '</div>' +
      '<h3><a href="' + catHref(c.slug) + '">' + esc(c.name) + '</a></h3>' +
      '<p class="card-sum">' + esc(c.blurb) + '</p>' +
      '<p class="lens">' + esc(c.lens) + '</p>' +
      '<a class="card-link" href="' + catHref(c.slug) + '">See these' + ICON.arrow + '</a>' +
    '</article>';
  }

  /* typewriter for the hero role line */
  function typeLoop(el, lines) {
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = lines[0]; return; }
    var li = 0, ci = 0, deleting = false;
    (function tick() {
      var full = lines[li];
      ci += deleting ? -1 : 1;
      el.textContent = full.slice(0, ci);
      var wait = deleting ? 32 : 62;
      if (!deleting && ci === full.length) { deleting = true; wait = 2100; }
      else if (deleting && ci === 0) { deleting = false; li = (li + 1) % lines.length; wait = 320; }
      setTimeout(tick, wait);
    })();
  }

  /* =============================================================
     PAGE: WORK — filter + sort
     ============================================================= */
  function renderWork() {
    var state = { cat: param("cat") || "all", sort: "featured" };
    var order = P.items.map(function (i) { return i.id; });

    var toolbar = '<div class="toolbar">' +
      '<div class="filters" role="group" aria-label="Filter by category">' +
        '<button class="chip" data-cat="all">All work <span>(' + P.items.length + ')</span></button>' +
        P.categories.map(function (c) {
          return '<button class="chip" data-cat="' + c.slug + '">' + esc(c.name) + ' <span>(' + itemsIn(c.slug).length + ')</span></button>';
        }).join("") +
      '</div>' +
      '<div class="sort-wrap">' +
        '<label for="sortBy">Sort</label>' +
        '<select id="sortBy">' +
          '<option value="featured">Featured order</option>' +
          '<option value="az">Title A–Z</option>' +
          '<option value="org">Organisation A–Z</option>' +
          '<option value="effort">Fastest to ship first</option>' +
          '<option value="status">Status</option>' +
        '</select>' +
      '</div>' +
    '</div>' +
    '<p class="result-count" id="count" role="status"></p>' +
    '<div class="card-grid" id="results"></div>';

    $("#workBody").innerHTML = toolbar;

    function draw() {
      var list = P.items.filter(function (it) { return state.cat === "all" || it.category === state.cat; });

      if (state.sort === "az")     list.sort(function (a, b) { return a.title.localeCompare(b.title); });
      if (state.sort === "org")    list.sort(function (a, b) { return a.org.localeCompare(b.org); });
      if (state.sort === "status") list.sort(function (a, b) { return a.status.localeCompare(b.status); });
      if (state.sort === "effort") list.sort(function (a, b) { return a.effortDays - b.effortDays; });
      if (state.sort === "featured") list.sort(function (a, b) { return order.indexOf(a.id) - order.indexOf(b.id); });

      $("#results").innerHTML = list.length
        ? list.map(cardHTML).join("")
        : '<div class="empty"><h3>Nothing in that filter yet</h3><p>Try another category, or <a href="work.html">show all work</a>.</p></div>';

      $("#count").innerHTML = 'Showing <b>' + list.length + '</b> of ' + P.items.length +
        (state.cat === "all" ? ' pieces' : ' — ' + esc(catName(state.cat)));

      $$(".chip").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.dataset.cat === state.cat));
      });
    }

    $$(".chip").forEach(function (b) {
      b.addEventListener("click", function () {
        state.cat = b.dataset.cat;
        history.replaceState(null, "", state.cat === "all" ? "work.html" : "work.html?cat=" + state.cat);
        draw();
      });
    });
    $("#sortBy").addEventListener("change", function () { state.sort = this.value; draw(); });

    draw();
  }

  /* =============================================================
     SECTION RENDERER — shared by breakdowns and blog posts

     `h` is optional. Work items always carry one, so their output is
     unchanged; posts use headless sections to open with plain prose.
     ============================================================= */
  function sectionsHTML(sections) {
    if (!sections || !sections.length) return "";
    return sections.map(function (s) {
      var inner = "";
      if (s.type === "prose") inner = s.body.map(function (t) { return "<p>" + t + "</p>"; }).join("");
      else if (s.type === "list") inner = "<ul>" + s.body.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>";
      else if (s.type === "note") inner = '<div class="note-block">' + s.body.map(function (t) { return "<p>" + t + "</p>"; }).join("") + "</div>";
      else if (s.type === "figure") {
        inner = s.body.map(function (f) {
          var draw = FIGURE[f.key];
          if (!draw) return "";
          var alt = f.name + ". " + String(f.cap).replace(/<[^>]+>/g, "");
          return '<figure class="figure">' +
            '<div class="figure-head">' +
              '<span class="figure-tag">' + esc(f.tag) + '</span>' +
              '<span class="figure-name">' + esc(f.name) + '</span>' +
            '</div>' +
            '<div class="figure-canvas">' + draw(alt) + '</div>' +
            (f.cap ? '<figcaption class="figure-cap">' + f.cap + '</figcaption>' : '') +
          '</figure>';
        }).join("");
      }
      else if (s.type === "table") {
        inner = '<div class="tbl-scroll"><table><thead><tr>' +
          s.head.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") +
          '</tr></thead><tbody>' +
          s.body.map(function (row) {
            return "<tr>" + row.map(function (cell) { return "<td>" + esc(cell) + "</td>"; }).join("") + "</tr>";
          }).join("") +
          "</tbody></table></div>";
      }
      return "<section>" + (s.h ? "<h2>" + esc(s.h) + "</h2>" : "") + inner + "</section>";
    }).join("");
  }

  /* =============================================================
     BLOG helpers
     ============================================================= */

  /* Published posts, newest first. Drafts never leave data.js. */
  function allPosts() {
    return (P.posts || [])
      .filter(function (p) { return p.draft !== true; })
      .slice()
      .sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });
  }

  function postById(id) {
    return allPosts().filter(function (p) { return p.id === id; })[0] || null;
  }

  /* "12 August 2026". Returns "" rather than "Invalid Date" on a bad date. */
  function postDate(iso) {
    if (!iso) return "";
    var d = new Date(iso + "T00:00:00Z");
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-GB", {
      day: "numeric", month: "long", year: "numeric", timeZone: "UTC"
    });
  }

  /* Rough reading time from the words actually rendered. */
  function postMinutes(p) {
    var words = (p.sections || []).reduce(function (n, s) {
      var text;
      if (s.type === "table")       text = s.head.join(" ") + " " + s.body.map(function (r) { return r.join(" "); }).join(" ");
      else if (s.type === "figure") text = s.body.map(function (f) { return f.name + " " + f.cap; }).join(" ");
      else                          text = s.body.join(" ");
      return n + String(text).replace(/<[^>]+>/g, " ").split(/\s+/).length;
    }, 0);
    return Math.max(1, Math.round(words / 200));
  }

  function postCard(p) {
    return '<li class="post-item reveal">' +
      '<a class="post-link" href="post.html?id=' + encodeURIComponent(p.id) + '">' +
        '<div class="post-meta">' +
          '<span>' + esc(postDate(p.date)) + '</span>' +
          '<span class="sep" aria-hidden="true">/</span>' +
          '<span>' + postMinutes(p) + ' min read</span>' +
        '</div>' +
        '<h3 class="post-title">' + esc(p.title) + '</h3>' +
        '<p class="post-sum">' + esc(p.summary) + '</p>' +
        (p.tags && p.tags.length
          ? '<div class="post-tags">' + p.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("") + '</div>'
          : '') +
      '</a>' +
    '</li>';
  }

  /* =============================================================
     PAGE: BLOG index
     ============================================================= */
  function renderBlog() {
    var posts = allPosts();
    document.title = "Blog — " + P.person.name;

    $("#blogBody").innerHTML =
      '<section class="section tight"><div class="wrap">' +
        '<p class="eyebrow">Working notes</p>' +
        '<h1 class="page-h1">Blog</h1>' +
        '<p class="page-lede">The case studies are conclusions. This is the thinking before it settled — build notes, decision logs, and the things I got wrong.</p>' +
        (posts.length
          ? '<ul class="post-list">' + posts.map(postCard).join("") + '</ul>'
          : '<div class="empty"><h3>Nothing published yet</h3>' +
            '<p>Posts live in <code>posts</code> in <code>assets/js/data.js</code>. Add one and it appears here.</p></div>') +
      '</div></section>';
  }

  /* =============================================================
     PAGE: BLOG post
     ============================================================= */
  function renderPost() {
    var p = postById(param("id"));

    if (!p) {
      document.title = "Not found — " + P.person.name;
      buildCrumbs([{ label: "Blog", href: "blog.html" }, { label: "Not found" }]);
      $("#postBody").innerHTML = '<div class="wrap"><div class="empty">' +
        '<h3>That post does not exist</h3>' +
        '<p>The link may be out of date, or the post is still a draft. Browse <a href="blog.html">all posts</a> or start from the <a href="index.html">home page</a>.</p>' +
        '</div></div>';
      return;
    }

    document.title = p.title + " — Blog — " + P.person.name;
    buildCrumbs([{ label: "Blog", href: "blog.html" }, { label: p.title }]);

    var posts = allPosts();
    var idx   = posts.findIndex(function (x) { return x.id === p.id; });
    var newer = idx > 0 ? posts[idx - 1] : null;
    var older = idx < posts.length - 1 ? posts[idx + 1] : null;

    $("#postBody").innerHTML =
      '<section class="post-hero"><div class="wrap">' +
        '<div class="post-meta">' +
          '<span>' + esc(postDate(p.date)) + '</span>' +
          '<span class="sep" aria-hidden="true">/</span>' +
          '<span>' + postMinutes(p) + ' min read</span>' +
        '</div>' +
        '<h1>' + esc(p.title) + '</h1>' +
        '<p class="post-hero-sum">' + esc(p.summary) + '</p>' +
        (p.tags && p.tags.length
          ? '<div class="post-tags">' + p.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("") + '</div>'
          : '') +
      '</div></section>' +

      '<section class="section tight"><div class="wrap">' +
        '<article class="post-prose">' + sectionsHTML(p.sections) + '</article>' +

        ((newer || older)
          ? '<nav class="post-nav" aria-label="More posts">' +
              (older
                ? '<a class="post-nav-link" href="post.html?id=' + encodeURIComponent(older.id) + '">' +
                    '<span class="post-nav-dir">Older</span>' +
                    '<span class="post-nav-title">' + esc(older.title) + '</span></a>'
                : '<span></span>') +
              (newer
                ? '<a class="post-nav-link align-right" href="post.html?id=' + encodeURIComponent(newer.id) + '">' +
                    '<span class="post-nav-dir">Newer</span>' +
                    '<span class="post-nav-title">' + esc(newer.title) + '</span></a>'
                : '<span></span>') +
            '</nav>'
          : '') +

        '<p style="margin-top:2.4rem"><a class="btn" href="blog.html">All posts' + ICON.arrow + '</a></p>' +
      '</div></section>';
  }

  /* =============================================================
     PAGE: BREAKDOWN detail
     ============================================================= */
  function renderDetail() {
    var it = itemById(param("id"));

    if (!it) {
      document.title = "Not found — " + P.person.name;
      buildCrumbs([{ label: "Work", href: "work.html" }, { label: "Not found" }]);
      $("#detailBody").innerHTML = '<div class="wrap"><div class="empty">' +
        '<h3>That page does not exist</h3>' +
        '<p>The link may be out of date. Browse <a href="work.html">all work</a> or start from the <a href="index.html">home page</a>.</p>' +
        '</div></div>';
      return;
    }

    document.title = it.org + " — " + it.title + " — " + P.person.name;
    var c = catBySlug(it.category);
    buildCrumbs([
      { label: "Work", href: "work.html" },
      { label: c.name, href: catHref(c.slug) },
      { label: it.org }
    ]);

    /* neighbours within the same category, for prev/next */
    var sibs = itemsIn(it.category);
    var idx  = sibs.findIndex(function (x) { return x.id === it.id; });
    var prev = idx > 0 ? sibs[idx - 1] : null;
    var next = idx < sibs.length - 1 ? sibs[idx + 1] : null;

    var sections = sectionsHTML(it.sections);

    $("#detailBody").innerHTML =
      '<section class="detail-hero"><div class="wrap">' +
        '<div class="detail-meta">' +
          '<span class="org">' + esc(it.org) + '</span>' +
          '<span>' + esc(it.industry) + '</span>' +
          '<span>' + esc(it.year) + '</span>' +
          '<span>' + esc(it.status) + '</span>' +
        '</div>' +
        '<h1>' + esc(it.title) + '</h1>' +
        '<p class="detail-tagline">' + esc(it.tagline) + '</p>' +
        '<p class="detail-sum">' + esc(it.summary) + '</p>' +
      '</div></section>' +

      '<section class="section tight"><div class="wrap"><div class="detail-body">' +
        '<div class="detail-main">' +
          (it.gate ?
            '<section><h2>The decision gate</h2>' +
              '<div class="gate">' +
                '<p class="gate-label">Where the system stops deciding</p>' +
                '<p class="gate-rule">' + esc(it.gate.rule) + '</p>' +
                '<div class="gate-rail"></div>' +
                '<div class="gate-outcomes">' +
                  '<div class="gate-pass"><span class="k">Passes the gate</span>' + esc(it.gate.pass) + '</div>' +
                  '<div class="gate-fail"><span class="k">Stopped at the gate</span>' + esc(it.gate.fail) + '</div>' +
                '</div>' +
              '</div>' +
            '</section>' : '') +
          sections +
          '<div class="pager">' +
            (prev ? '<a href="breakdown.html?id=' + prev.id + '"><span class="k">' + ICON.back + ' Previous in ' + esc(c.name) + '</span><strong>' + esc(prev.org) + ' — ' + esc(prev.title) + '</strong></a>' : '<span class="spacer"></span>') +
            (next ? '<a class="next" href="breakdown.html?id=' + next.id + '"><span class="k">Next in ' + esc(c.name) + ' ' + ICON.arrow + '</span><strong>' + esc(next.org) + ' — ' + esc(next.title) + '</strong></a>' : '<span class="spacer"></span>') +
          '</div>' +
        '</div>' +

        '<aside class="detail-side">' +
          '<div class="side-box"><h4>At a glance</h4><ul class="side-stats">' +
            it.stats.map(function (s) { return '<li><span>' + esc(s.l) + '</span><b>' + esc(s.v) + '</b></li>'; }).join("") +
            '<li><span>Effort to ship</span><b>' + esc(it.effortLabel) + '</b></li>' +
          '</ul></div>' +
          /* Source repo. Private repos render as plain text, because a link
             to a private repo is a 404 for everyone but me. Flip `public`
             to true in data.js and it becomes a real link. */
          (it.repo ?
            '<div class="side-box"><h4>Source</h4><ul class="side-links">' +
              '<li>' + (it.repo.public
                ? '<a href="' + esc(it.repo.url) + '" target="_blank" rel="noopener"><span class="k">GitHub</span>' + esc(it.repo.name) + '</a>'
                : '<span class="side-flat"><span class="k">GitHub · private repo</span>' + esc(it.repo.name) + '</span>') +
              '</li>' +
              (it.repo.note ? '<li><span class="side-flat"><span class="k">Note</span>' + esc(it.repo.note) + '</span></li>' : '') +
            '</ul></div>' : '') +
          '<div class="side-box"><h4>Tagged</h4><ul class="tags" style="margin:0">' +
            it.tags.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join("") +
          '</ul></div>' +
          '<div class="side-box"><h4>Related work</h4><ul class="side-links">' +
            it.related.map(function (rid) {
              var r = itemById(rid);
              if (!r) return "";
              return '<li><a href="breakdown.html?id=' + r.id + '"><span class="k">' + esc(r.org) + '</span>' + esc(r.title) + '</a></li>';
            }).join("") +
            '<li><a href="' + catHref(c.slug) + '"><span class="k">Category</span>All ' + esc(c.name) + '</a></li>' +
          '</ul></div>' +
        '</aside>' +
      '</div></div></section>' +
      ctaBand();
  }

  /* =============================================================
     PAGE: SEARCH
     ============================================================= */
  function searchIndex() {
    var idx = [];

    P.items.forEach(function (it) {
      var text = [it.title, it.org, it.tagline, it.summary, it.industry, it.status]
        .concat(it.tags)
        .concat(it.gate ? [it.gate.rule, it.gate.pass, it.gate.fail] : [])
        .concat(it.sections.map(function (s) {
          var b;
          if (s.type === "table")       b = s.head.join(" ") + " " + s.body.map(function (r) { return r.join(" "); }).join(" ");
          else if (s.type === "figure") b = s.body.map(function (f) { return f.name + " " + f.cap; }).join(" ");
          else                          b = s.body.join(" ");
          return s.h + " " + b;
        }))
        .join(" ")
        .replace(/<[^>]+>/g, " ");
      idx.push({ kind: catName(it.category), title: it.org + " — " + it.title, blurb: it.summary,
                 href: "breakdown.html?id=" + it.id, text: text });
    });

    P.categories.forEach(function (c) {
      idx.push({ kind: "Category", title: c.name, blurb: c.blurb,
                 href: catHref(c.slug), text: c.name + " " + c.blurb + " " + c.lens });
    });

    P.experience.forEach(function (e) {
      idx.push({ kind: "Experience", title: e.role + " · " + e.org, blurb: e.points[0],
                 href: "about.html#experience", text: [e.role, e.org, e.place, e.when].concat(e.points).join(" ") });
    });

    P.skills.forEach(function (s) {
      idx.push({ kind: "Skills", title: s.group, blurb: s.items.join(" · "),
                 href: "about.html#skills", text: s.group + " " + s.items.join(" ") });
    });

    P.education.forEach(function (e) {
      idx.push({ kind: "Education", title: e.title, blurb: e.org,
                 href: "about.html#education", text: [e.title, e.org, e.when, e.note].join(" ") });
    });

    allPosts().forEach(function (p) {
      var body = (p.sections || []).map(function (s) {
        var b;
        if (s.type === "table")       b = s.head.join(" ") + " " + s.body.map(function (r) { return r.join(" "); }).join(" ");
        else if (s.type === "figure") b = s.body.map(function (f) { return f.name + " " + f.cap; }).join(" ");
        else                          b = s.body.join(" ");
        return (s.h || "") + " " + b;
      }).join(" ");
      idx.push({ kind: "Blog", title: p.title, blurb: p.summary,
                 href: "post.html?id=" + encodeURIComponent(p.id),
                 text: [p.title, p.summary, (p.tags || []).join(" "), body].join(" ").replace(/<[^>]+>/g, " ") });
    });

    idx.push({ kind: "Page", title: "Blog", blurb: "Build notes, decision logs and corrections.",
               href: "blog.html", text: "blog writing notes posts articles journal" });

    idx.push({ kind: "Page", title: "Contact", blurb: "Email, phone, LinkedIn and résumé.",
               href: "contact.html", text: "contact email phone linkedin resume hire available remote" });

    return idx;
  }

  function renderSearch() {
    var idx = searchIndex();
    var input = $("#q");
    var out = $("#searchOut");
    var initial = param("q");

    function highlight(str, terms) {
      var safe = esc(str);
      terms.forEach(function (t) {
        if (t.length < 2) return;
        safe = safe.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>");
      });
      return safe;
    }

    function run(q) {
      q = (q || "").trim();
      if (!q) {
        out.innerHTML = '<p class="result-count">Type to search across every page — breakdowns, agents, experience and skills.</p>' +
          '<div class="suggest"><span>Try</span>' +
          ["evals", "guardrail", "pricing", "shelf life", "concept drift", "Fincantieri", "autonomy"]
            .map(function (s) { return '<button class="chip" data-s="' + s + '">' + s + '</button>'; }).join("") +
          '</div>';
        $$("[data-s]", out).forEach(function (b) {
          b.addEventListener("click", function () { input.value = b.dataset.s; run(b.dataset.s); input.focus(); });
        });
        return;
      }

      var terms = q.toLowerCase().split(/\s+/);
      var hits = idx.map(function (r) {
        var hay = (r.title + " " + r.blurb + " " + r.text).toLowerCase();
        var score = 0;
        terms.forEach(function (t) {
          if (r.title.toLowerCase().indexOf(t) > -1) score += 10;
          if (r.blurb.toLowerCase().indexOf(t) > -1) score += 4;
          var m = hay.split(t).length - 1;
          score += Math.min(m, 6);
        });
        return { r: r, score: score };
      }).filter(function (x) { return x.score > 0; })
        .sort(function (a, b) { return b.score - a.score; });

      history.replaceState(null, "", "search.html?q=" + encodeURIComponent(q));

      if (!hits.length) {
        out.innerHTML = '<div class="empty"><h3>No matches for “' + esc(q) + '”</h3>' +
          '<p>Try a broader word — <em>evals</em>, <em>pricing</em>, <em>drift</em> — or browse <a href="work.html">all work</a>.</p></div>';
        return;
      }

      out.innerHTML = '<p class="result-count"><b>' + hits.length + '</b> ' +
        (hits.length === 1 ? 'result' : 'results') + ' for “' + esc(q) + '”</p>' +
        '<ul class="res-list">' + hits.map(function (h) {
          return '<li><a class="res" href="' + h.r.href + '">' +
            '<p class="k">' + esc(h.r.kind) + '</p>' +
            '<h3>' + highlight(h.r.title, terms) + '</h3>' +
            '<p>' + highlight(h.r.blurb, terms) + '</p></a></li>';
        }).join("") + '</ul>';
    }

    var t;
    input.addEventListener("input", function () {
      clearTimeout(t);
      var v = this.value;
      t = setTimeout(function () { run(v); }, 140);
    });
    input.value = initial;
    run(initial);
    if (!initial) input.focus();
  }

  /* =============================================================
     PAGE: ABOUT
     ============================================================= */
  function renderAbout() {
    var p = P.person;

    $("#aboutBody").innerHTML =
      '<div class="wrap"><div class="about-grid">' +
        '<div class="about-photo">' +
          '<img src="' + p.photo + '" alt="' + esc(p.name) + ', ' + esc(p.role) + '">' +
        '</div>' +
        '<div>' +
          '<section style="margin-bottom:3rem">' +
            '<p class="eyebrow">The short version</p>' +
            '<p style="font-size:1.12rem;color:#c3d2e4">' + esc(p.pitch) + '</p>' +
            '<p>' + esc(p.thesis) + '</p>' +
            '<p>The AI work is deliberately hands-on. I build the agents, choose the retrieval strategy, write the evaluation suites, and find out where they break before a user does. That means I can defend a model choice, a cost and latency budget, a failure taxonomy and an escalation rule — not just describe them.</p>' +
            '<p>The nine years before that were spent between an engineering team and a buyer who each thought the other was being unreasonable — NTPC, Siemens, Fincantieri, Solar Turbines. Translation under constraint, with revenue attached to getting it right. It turns out to be most of product management, and it is why I care more about what a wrong answer costs than about how impressive the demo looked.</p>' +
            '<div class="hero-cta" style="margin-top:1.5rem">' +
              '<a class="btn btn-primary" href="work.html">See the work' + ICON.arrow + '</a>' +
            '</div>' +
          '</section>' +

          '<section id="experience" style="margin-bottom:3rem">' +
            '<p class="eyebrow">Experience</p><h2>Where the judgement came from</h2>' +
            '<div class="timeline">' + P.experience.map(function (e) {
              return '<div class="tl-item">' +
                '<p class="tl-when">' + esc(e.when) + '</p>' +
                '<h3>' + esc(e.role) + '</h3>' +
                '<p class="tl-org">' + esc(e.org) + ' · ' + esc(e.place) + '</p>' +
                '<ul>' + e.points.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul>' +
              '</div>';
            }).join("") + '</div>' +
          '</section>' +

          '<section id="skills" style="margin-bottom:3rem">' +
            '<p class="eyebrow">Skills</p><h2>What I actually do</h2>' +
            P.skills.map(function (s) {
              return '<div class="skill-block"><h4>' + esc(s.group) + '</h4>' +
                '<ul class="tags">' + s.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + '</ul></div>';
            }).join("") +
          '</section>' +

          '<section id="education">' +
            '<p class="eyebrow">Education & learning</p><h2>Still reading</h2>' +
            '<div class="timeline">' + P.education.map(function (e) {
              return '<div class="tl-item">' +
                '<p class="tl-when">' + esc(e.when) + '</p>' +
                '<h3>' + esc(e.title) + '</h3>' +
                '<p class="tl-org">' + esc(e.org) + '</p>' +
                (e.note ? '<p style="font-size:.93rem">' + esc(e.note) + '</p>' : '') +
              '</div>';
            }).join("") + '</div>' +
            '<div class="side-box" style="margin-top:1.5rem"><h4>On the desk right now</h4>' +
              '<ul style="margin:0;padding-left:1.1em">' + P.reading.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + '</ul>' +
            '</div>' +
          '</section>' +
        '</div>' +
      '</div></div>';
  }

  /* =============================================================
     PAGE: CONTACT
     ============================================================= */
  function renderContact() {
    var p = P.person;
    $("#contactBody").innerHTML = '<div class="wrap"><div class="contact-grid">' +
      '<div>' +
        '<p class="eyebrow">Get in touch</p>' +
        '<h2 style="max-width:16ch">The fastest route is email</h2>' +
        '<p>I read everything. If you are hiring an AI product manager, or you want a second pair of eyes on an agent design, an eval suite or an autonomy boundary, say what the problem is and I will tell you honestly whether I am the right person for it.</p>' +
        '<p>Based in Greater Noida, working remote-first across time zones — the export years were all US and Europe hours, so that part is not new.</p>' +
      '</div>' +
      '<div>' +
        '<ul class="contact-list">' +
          '<li><a href="mailto:' + p.email + '">' + ICON.mail + '<span><span class="k">Email</span><span class="v">' + esc(p.email) + '</span></span></a></li>' +
          '<li><a href="tel:' + p.phone.replace(/\s/g, "") + '">' + ICON.phone + '<span><span class="k">Phone</span><span class="v">' + esc(p.phone) + '</span></span></a></li>' +
          '<li><a href="' + p.linkedin + '" target="_blank" rel="noopener">' + ICON.li + '<span><span class="k">LinkedIn</span><span class="v">imrishirich93</span></span></a></li>' +
          (p.github ? '<li><a href="' + p.github + '" target="_blank" rel="noopener">' + ICON.gh + '<span><span class="k">GitHub</span><span class="v">' + esc(ghHandle(p.github)) + '</span></span></a></li>' : '') +
          '<li><div class="row">' + ICON.loc + '<span><span class="k">Location</span><span class="v">' + esc(p.location) + '</span></span></div></li>' +
        '</ul>' +
        '<div class="hero-cta" style="margin-top:1.6rem">' +
          '<a class="btn btn-primary" href="mailto:' + p.email + '">' + ICON.mail + 'Start an email</a>' +
          '<a class="btn" href="work.html">Browse the work</a>' +
        '</div>' +
      '</div>' +
    '</div>' +

    /* Featured post. Omitted entirely when linkedinEmbed is empty. */
    (p.linkedinEmbed
      ? '<section class="social-embed">' +
          '<p class="eyebrow">On LinkedIn</p>' +
          '<h2 class="social-embed-h">Most recent post</h2>' +
          '<div class="embed-frame">' +
            '<iframe src="' + esc(p.linkedinEmbed) + '" ' +
              'title="Recent LinkedIn post by ' + esc(p.name) + '" ' +
              'loading="lazy" allowfullscreen></iframe>' +
          '</div>' +
          '<p class="embed-note">Loaded directly from LinkedIn, so it needs a connection and follows their cookie rules. ' +
            '<a href="' + p.linkedin + '" target="_blank" rel="noopener">See the full profile</a>.</p>' +
        '</section>'
      : '') +
    '</div>';
  }

  /* =============================================================
     scroll reveal
     ============================================================= */
  function initReveal() {
    var els = $$(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(function (e) { e.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .08 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* =============================================================
     BOOT
     ============================================================= */
  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.dataset.page;
    buildHeader(page);

    var crumbs = {
      work:       [{ label: "Work" }],
      blog:       [{ label: "Blog" }],
      about:      [{ label: "About" }],
      contact:    [{ label: "Contact" }],
      search:     [{ label: "Search" }]
    };
    if (crumbs[page]) buildCrumbs(crumbs[page]);

    if (page === "home")       renderHome();
    if (page === "work")       renderWork();
    if (page === "breakdown")  renderDetail();       // builds its own crumbs
    if (page === "blog")       renderBlog();
    if (page === "post")       renderPost();         // builds its own crumbs
    if (page === "search")     renderSearch();
    if (page === "about")      renderAbout();
    if (page === "contact")    renderContact();

    buildFooter();
    initReveal();
  });
})();
