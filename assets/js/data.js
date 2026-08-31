/* =============================================================
   data.js — single source of truth for the whole site.
   Loaded as a plain script so the site works over file:// too.
   Every page (work, category, compare, search, detail) renders
   from this object. Edit content here, nowhere else.
   ============================================================= */

window.PORTFOLIO = {

  person: {
    name: "Rishi Muni Kesarwani",
    short: "Rishi",
    role: "Agentic AI Product Manager",
    location: "Greater Noida, India · Open to Remote",
    email: "rishi.rte@gmail.com",
    phone: "+91 87078 92507",
    linkedin: "https://linkedin.com/in/imrishirich93",

    /* Featured LinkedIn posts, embedded on the Contact page. Newest first —
       they render left to right in this order.
       Get each one from the post's ⋯ menu → Embed this post, and paste only
       the src="…" URL, not the whole <iframe> tag. Keep the ?collapsed=1 on
       the end: it makes long posts open short with a "…more" link.
       Add or remove lines freely. Empty the list and the whole block
       disappears, the same way github does. */
    linkedinEmbeds: [
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7494456792471642112?collapsed=1",
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7493221021253058560?collapsed=1"
    ],
    /* Set to "" to hide the GitHub link everywhere it appears. */
    github: "https://github.com/rishimunikesarwani-hub",
    /* Same — set to "" and X vanishes from the hero, Contact and footer. */
    x: "https://x.com/rishimuni_k",
    resume: "assets/files/Rishi_Muni_Kesarwani_Resume.pdf",
    photo: "assets/img/rishi.jpg",
    photoCaption: "Networking Mixer, Delhi — “The AI was agentic, the vibe was organic.”",
    rotating: [
      "I write the evals before the demo.",
      "I’ve carried a P&L. It shows in what I cut.",
      "Building is commodity. Keeping it alive isn’t.",
      "If you can't see it fail, you don’t own it."
    ],
    /* The identity line, and the shortest true sentence about the job.
       It sits under the rotating headline where the pitch paragraph used
       to be. "Sales guy" is doing deliberate work here — it is the
       self-deprecating half that lets "builds" land as a claim rather
       than as a boast, and it is a description nobody else in the pile
       can use. Added 18 Aug 2026. */
    tagline: "Self-taught in everything, mentored by curiosity.",

    /* No longer rendered in the hero — the tagline and the stat bar took
       that slot on 18 Aug 2026. Kept because llms.txt still describes the
       site with it, and a crawler has room for a paragraph where a
       thirty-second reader does not.
       Rewritten 18 Aug 2026 to agree with the stat bar. The old copy said
       "two shipped agents" directly above a tile reading "6 shipped", and
       two numbers that disagree make a reader doubt all of them. Employer
       names came out at the same time — the nine years is the claim, not
       the logos. */
    pitch:
      "I build agentic AI products and design the point where they stop deciding. Six shipped — " +
      "grounded retrieval, evaluation suites, human-approval gates — with twenty more in build. " +
      "Nine years owning B2B revenue taught me the part most AI teams skip: what it actually " +
      "costs when the system is wrong.",
    /* Replaces "The short version" on the About page. */
    tribute: [
      "They say a father's role in a life is the one thing that cannot be replaced. God, they got that right.",
      "Everything I am — and everything I will be, when I look back on it — carries the imprint of my dad's teaching. He was a man measured in his words. He used fewer of them than anyone else in the room and was still the one people leaned in to hear. An excellent public speaker. Always hungry for knowledge. He taught me never to claim what I cannot prove.",
      "I have long ground to cover to be like you, dad. I still turn to you when I have to write my speeches.",
      "Since you left us I have become self-critical, adaptable to change. But I inherited your measure and not your voice.",
      "That's the part I'm still building."
    ],
    thesis:
      "Every AI system worth trusting has a line drawn through it: the point where the machine stops " +
      "and a person takes over. Most teams draw that line by accident, after something breaks. " +
      "I draw it on purpose, before.",
    /* The stat bar under the hero. Numbers first, because a recruiter
       decides in thirty seconds and prose does not survive thirty seconds.
       Order is deliberate: the nine years anchors credibility, and
       everything after it then reads as velocity on a real base rather
       than as a career-switcher's activity log.
       Returned to the home page 18 Aug 2026. */
    stats: [
      { v: "9 yrs",     l: "owning B2B revenue" },
      { v: "7 shipped", l: "from 1,100 hrs AI learning" },
      { v: "1 of 2",    l: "hackathons entered, won" },
      { v: "100",       l: "AI builders interviewed · 60 days" }
    ],

    /* Copyright and machine-readable terms. Rendered into the footer,
       robots.txt, llms.txt and the RSS <copyright> element so the same
       sentence appears everywhere a human or an agent might look. */
    legal: {
      holder: "Rishi Muni Kesarwani",
      year: "2026",
      notice: "© 2026 Rishi Muni Kesarwani. All rights reserved.",
      terms: "Read it, quote it, cite it — with attribution and a link back. " +
             "Do not republish it whole, and do not train a model on it without asking first.",
      termsUrl: "https://rishi-ships-every-day.vercel.app/copyright.html",
      site: "https://rishi-ships-every-day.vercel.app"
    }
  },

  /* ---------------------------------------------------------------
     Categories — every item belongs to exactly one.
     --------------------------------------------------------------- */
  /* Order here is the order everywhere: the home page cards, the Work
     filter chips and the footer. Built things lead, analysis follows.

     Advisory was removed on 2026-08-12 — the Aayo App work it held is
     covered by the experience timeline on the About page, and having it
     in both places said the same thing twice. */
  categories: [
    {
      slug: "builds",
      name: "Tools I've Built",
      blurb:
        "Software I build to make my own work better, and kept. Each entry says plainly whether it " +
        "is shipped or still on paper — the Strategy Room is a locked design with no code in it yet, " +
        "and it says so."
    },
    {
      slug: "agents",
      name: "Agents I've Built",
      blurb:
        "Grounded retrieval, anti-fabrication guardrails, evaluation suites, and human-approval gates " +
        "that fire on a threshold rather than on vibes. Where does this system earn autonomy, and " +
        "where does it hand control back?"
    },
    {
      slug: "breakdowns",
      name: "Case studies",
      blurb:
        "A shipped AI product taken apart from its own source rather than from its marketing — what " +
        "it actually does, what it charges for, and where the cost really sits. The product-sense " +
        "exercises that used to live here are now on the blog, where they read as thinking rather " +
        "than as shipped work."
    }
  ],

  /* ---------------------------------------------------------------
     Items. Section `type` is one of: prose | list | table | note
     --------------------------------------------------------------- */
  items: [

    /* ============ 0. HEALTHCARE INTELLIGENCE AGENT ============
       Added 18 Aug 2026. Sits first because it is the only item on the
       site that carries a measured failure rate rather than a claim. */
    {
      id: "healthcare-agent",
      title: "Healthcare Intelligence Agent — Sepsis, Before It Announces Itself",
      org: "Built from Chapter 13",
      category: "agents",
      industry: "Clinical decision support · Evaluation design",
      year: "2026",
      status: "Shipped",
      effortDays: 6,
      effortLabel: "Built in 6 days, 94 tests passing",
      tagline: "The demo is not the product. The eval is.",
      summary:
        "A sepsis early-warning agent that catches 65% of the subtle cases — the ones a ward misses — " +
        "while raising zero false alarms across 400 mimics. It also refuses to treat an empty field as a " +
        "normal one, which is the difference between a patient who is fine and a patient nobody tested.",
      tags: ["Evaluation design", "Safety gates", "Unknown vs normal", "Grounded evidence", "Clinical AI"],
      links: [
        { k: "Live demo",   t: "Three scripted beds, fully interactive", url: "projects/healthcare-agent/demo.html" },
        { k: "Study notes", t: "The specification, the priors, the arguments", url: "projects/healthcare-agent/notes.html" }
      ],
      stats: [
        { v: "65%",     l: "subtle sepsis caught (98/150)" },
        { v: "0",       l: "false alarms across 400 mimics" },
        { v: "20 vs 0", l: "synonym cases escalated — ours vs a name-matching gate" },
        { v: "1.6",     l: "alerts per shift — qSOFA ran at 43" }
      ],
      gate: {
        rule: "Evidence completeness, checked before the score is trusted",
        pass: "Full evidence · the agent scores, explains and escalates on its own",
        fail: "A feed missing · it says which one, and what the answer is worth without it"
      },
      sections: [
        {
          h: "What it does",
          type: "prose",
          body: [
            "It watches eight routine bedside values and answers one question: is this patient sliding into sepsis six hours before anyone would notice by looking at them? Six parts run in order — ingest, scoreboard, safety gate, explain, audit, deliver — and the engine never once mentions sepsis by name. That is enforced by a test, because a condition hard-coded into an engine is a condition you cannot swap out later.",
            "No LLM, no GPU, no API key. <code>pytest</code> is the only third-party package in the project. The judgement is in the priors and the gate, not in a model."
          ]
        },
        {
          h: "The number worth arguing with",
          type: "table",
          head: ["What was measured", "Result", "Why it matters"],
          body: [
            ["Obvious sepsis caught", "100% (30/30)", "Any tool catches these. Not a differentiator."],
            ["Subtle sepsis caught", "65% (98/150)", "This is the product. Everything else is table stakes."],
            ["Subtle sepsis, one feed down", "17% (5/30)", "Missing bloods cost more than anything else measured."],
            ["False alarms, 400 mimics + well patients", "0", "Alert fatigue kills adoption faster than a miss does."],
            ["Alert volume on a real ED case mix", "1.6 per shift", "Budget was 12. qSOFA ran at 43."]
          ]
        },
        {
          h: "The failure that only showed up in the eval",
          type: "prose",
          body: [
            "Twenty patients, identical physiology, identical scoreboard, identical confidence. The only difference was the <em>name</em> the condition was written under.",
            "A safety check built on matching condition names as free text escalated 0 of 20. Ours escalated 20 of 20. The name-matching gate did not error, did not warn, did not write a log line — it went quietly silent on every single one. It fails <strong>open</strong>, which is the worst direction a safety component can fail in, and no demo would ever have surfaced it."
          ]
        },
        {
          h: "Empty is not normal",
          type: "note",
          body: [
            "An empty cell means <strong>unknown</strong>, never normal. A patient with no bloods drawn and a patient whose bloods came back clean get different answers, and the output says which one it is looking at. Most systems collapse those two into the same silence — and the silence reads as reassurance."
          ]
        },
        {
          h: "What is still unsigned",
          type: "note",
          body: [
            "The base rates. Building the thing did not resolve them and shipping it would not either — they need a clinician's signature, not another sprint. It is written down as open and unowned rather than quietly assumed, because a prior nobody signed is a prior nobody can defend when the system is wrong."
          ]
        }
      ],
      related: ["eval-framework", "job-qualifier", "investor-agent"]
    },






    /* ============ 6. MISSION CONTROL HQ ============ */
    {
      id: "mission-control-hq",
      title: "Mission Control HQ — What They're Actually Selling",
      org: "MissionControlHQ",
      category: "breakdowns",
      industry: "Dev Tools · Multi-Agent · Unit Economics",
      year: "2026",
      status: "Breakdown",
      effortDays: 2,
      effortLabel: "a weekend of reading their code",
      tagline: "The AI turned out to be the least interesting part.",
      summary:
        "An AI agent product for solo founders that runs no models of its own — you connect the " +
        "ChatGPT or Claude plan you already pay for. What's being sold isn't intelligence. It's " +
        "coordination. Four decisions make it work, and every one of them costs something.",
      tags: ["Architecture teardown", "Multi-agent", "Unit economics", "Cost observability", "Human-in-the-loop"],
      stats: [
        { v: "0",    l: "models they run themselves" },
        { v: "215",  l: "backend functions, 38 modules" },
        { v: "~100", l: "pre-built tool connectors" }
      ],
      gate: {
        rule: "Agent needs to act outside the board — send, post or spend",
        pass: "Runs on the customer's own machine, comments the result back to the board",
        fail: "Becomes an escalation ticket; one tap on the founder's phone releases it"
      },
      sections: [
        {
          h: "What the product actually is",
          type: "prose",
          body: [
            "A hosted coordination layer for a squad of AI agents working a shared task board. The founder talks to a lead agent on Telegram; the squad works a persistent board, runs on schedules, and escalates to the human only when a decision is genuinely needed.",
            "Their own homepage line is the giveaway: <em>your AI agents are working, you just can't see them</em>. The product is not the agents. It is the seeing."
          ]
        },
        {
          h: "The verified stack",
          type: "table",
          head: ["Layer", "What they actually use"],
          body: [
            ["Frontend", "React + Vite single-page app, React Router, Tailwind"],
            ["Backend", "Convex — 215 functions across 38 modules"],
            ["Auth", "Convex Auth — password, Google, GitHub"],
            ["Billing", "Paddle + ProfitWell; credits with auto-top-up"],
            ["Agent runtime", "One cloud machine per customer, nicknamed a “sprite”"],
            ["Agent CLIs", "Claude Code, Codex, OpenClaw, GitHub Copilot"],
            ["Integrations", "Composio — roughly 100 toolkits"],
            ["Memory", "Supermemory"],
            ["Channels", "Telegram bots, Discord bots"],
            ["Analytics", "PostHog + Plausible (both self-proxied), Dub, Sentry"]
          ]
        },
        {
          h: "How I read it",
          type: "prose",
          body: [
            "Everything in that table is confirmed — read from their public site and the JavaScript their site ships to browsers. One thing I deliberately did <strong>not</strong> establish: who hosts the per-customer machines. They confirm the machines exist and can be snapshotted, never the host, so neither do I.",
            "The four-layer framing below is <strong>mine, not theirs</strong>. They don't publish it this way. Their own pieces map into it with nothing dropped, and it makes the trade-offs legible."
          ]
        },
        {
          h: "Four layers, and the line each one refuses to cross",
          type: "table",
          head: ["Layer", "The question it answers", "What it deliberately does not do"],
          body: [
            ["The Board — coordination", "Where does work live so it outlives the conversation?", "Holds the work and decides who's next; doesn't do the work"],
            ["The Workshop — execution", "Where does work get done, and whose money pays for it?", "Where autonomy lives; also where the money burns"],
            ["The Hands — connection", "How do agents touch the tools the business runs on?", "Enables action; doesn't decide to act"],
            ["Mission Control — oversight", "How does one person stay in charge of eight agents?", "You stop being the doer; you become the exception handler"]
          ]
        },
        {
          h: "The architecture, in four drawings",
          type: "figure",
          body: [
            {
              key: "mchq-task",
              tag: "Artifact 01",
              name: "How one task gets done",
              cap: "From a chat message to completed work. The founder asks in plain English, a chat bot creates a task, the coordination core tracks it, a cloud machine runs an agent, tool connectors reach email and CRM, and the founder approves only when needed. <b>Task board, memory and cost log sit underneath</b> — that is the part that makes it a product rather than a chat window."
            },
            {
              key: "mchq-squad",
              tag: "Artifact 02",
              name: "A squad, not one assistant",
              cap: "A lead agent breaks work into rows on a shared board; research, build and review agents claim rows and comment back. <b>Because every task has an ID, a second agent can pick it up tomorrow.</b> The founder is pulled in only when something is blocked."
            },
            {
              key: "mchq-providers",
              tag: "Artifact 03",
              name: "Telegram as the front door",
              cap: "The founder chats, a lead agent creates tasks on the board, and agents draw on the founder's own ChatGPT, Claude or Copilot plans — falling through to the next one when a daily limit is hit. <b>Borrowing the customer's subscription keeps their cost flat as usage grows.</b> The price is that failover chain."
            },
            {
              key: "mchq-isolation",
              tag: "Artifact 04",
              name: "One private workspace per customer",
              cap: "Each customer gets an isolated agent machine with its own files and settings, able to sleep when idle and be snapshotted, so customer data never mixes. <b>You pay for that machine whether or not they ever log in</b> — which is where the margin gets decided."
            }
          ]
        },
        {
          h: "Four decisions, and what each one costs",
          type: "list",
          body: [
            "<strong>1. Work lives in a table, not a chat.</strong> Every task is a row with an ID and a status. Sounds mundane — it's the entire product. The moment work has an ID, another agent can pick it up tomorrow, a second can comment on it, and you can watch it move. Memory stops being a transcript.",
            "<strong>2. Every customer gets their own machine.</strong> Agents need somewhere to actually run commands, not just produce text, and one customer's logins can't sit beside another's. <em>The cost:</em> you pay for that machine whether or not they ever log in.",
            "<strong>3. The customer's own AI subscription pays for the tokens.</strong> Eight agents working all day burn an enormous amount of usage. Resell it and you price yourself out; borrow it and your cost stays flat as usage grows. <em>The cost:</em> consumer plans have daily limits, so they built failover across several just to survive a workday.",
            "<strong>4. Spend is visible per agent, per task, per day.</strong> This looks like an accounting feature. It's the reason anyone will leave the system running overnight — if you can't see that one agent burned forty dollars re-reading the same page, you won't trust it, so you'll switch it off."
          ]
        },
        {
          h: "What I'd watch if I were their PM",
          type: "list",
          body: [
            "<strong>Idle-machine ratio.</strong> Machines per paying customer versus machines that saw a command this week. This single number decides gross margin, and it is invisible from the outside.",
            "<strong>Failover depth per workday.</strong> How often a customer drops to their second and third provider. Two is a design choice; three every afternoon means the value promise quietly depends on the customer buying more subscriptions.",
            "<strong>Escalations per completed task.</strong> Too high and the founder is still the doer. Too low and nobody is checking the work. The healthy band is the actual product metric, and it is not a number they publish.",
            "<strong>Cost per completed task, not per token.</strong> Tokens are the input the customer already owns. The thing worth pricing against is a finished piece of work."
          ]
        },
        {
          h: "The lesson I keep coming back to",
          type: "note",
          body: [
            "With software that acts on its own, <strong>cost visibility isn't a finance feature. It's trust.</strong> Ship it early, before anyone asks for it.",
            "And the uncomfortable part for anyone building here: the model is a commodity and gets cheaper every month. The defensible thing is the boring protocol underneath — how work gets claimed, handed over, and escalated to a human."
          ]
        }
      ],
      related: ["investor-agent", "alars", "eval-framework"]
    },

    /* ============ ALARS ============
       Written 2026-08-12 from the project's own SCRATCHPAD.md decision
       log. Every claim below traces to that file — nothing inferred. */
    {
      id: "alars",
      title: "Five agents, one page, thirty minutes",
      org: "ALARS",
      category: "agents",
      industry: "Multi-agent · Product discovery",
      year: "2026",
      status: "Pre-deployment",
      effortDays: 2,
      effortLabel: "Built over a weekend",
      tagline: "A product team for a founder who does not have one.",
      summary:
        "Five agents — head of product, PM, designer, data analyst, user researcher — run in sequence " +
        "and turn one messy sentence about a product into a ranked, traceable backlog. The analyst is " +
        "forbidden from inventing a number, and the system asks questions rather than guessing.",
      tags: ["Multi-agent", "Sequential handoff", "Anti-fabrication", "Convex", "Pre-deployment"],
      stats: [
        { v: "5",   l: "agents in sequence" },
        { v: "30",  l: "minutes to a backlog" },
        { v: "0",   l: "invented numbers" }
      ],
      gate: {
        rule: "Would answering require guessing what he sells or where the problem happens?",
        pass: "Produces the backlog, every item traced to a hypothesis",
        fail: "Returns three to five questions instead — never a hedge followed by a guess anyway"
      },
      repo: { name: "my-immersion-project", url: "" },
      sections: [
        {
          h: "What it does",
          type: "prose",
          body: [
            "The user is Jerry: a solo founder of an early-stage D2C company with no internal product team. He types one messy sentence about what is going wrong. He gets back one page he can act on today — what might be broken, where to find the data, three directions, the stories, and what to build first.",
            "The user considered and rejected was the PM at a larger company. The stack reads as built for a PM, but a PM already <em>is</em> the product team — for them this is as much threat as tool. Jerry has no team and wants one."
          ]
        },
        {
          h: "The five, in order",
          type: "list",
          body: [
            "<strong>Head of product</strong> — frames what could actually be broken.",
            "<strong>Data analyst</strong> — names the numbers needed, and labels every assumption as one.",
            "<strong>User researcher</strong> — separates what people are doing from why they are doing it.",
            "<strong>Designer</strong> — turns the directions into stories.",
            "<strong>PM</strong> — decides what gets built first, and what does not."
          ]
        },
        {
          h: "The rule that makes it a product",
          type: "note",
          body: [
            "The analyst never invents a number. It names the numbers the founder needs and labels every assumption. That single constraint is the whole difference between a product and a party trick — and it is the opposite of every UX-researcher prompt in the wild, which assumes analytics tooling and a thousand sessions."
          ]
        },
        {
          h: "Two things I built, then reversed",
          type: "list",
          body: [
            "<strong>One call with five personas became five separate calls.</strong> In one call the voices blurred into a single voice, and the founder stared at a blank page for 45 seconds waiting for it. Each agent is now its own call, handed everything said before it.",
            "<strong>A list of all five agents became one agent on screen at a time.</strong> The first version showed the other four greyed out, waiting their turn. It tested badly and the objection was right — nothing moves now until the founder reads the current one and clicks Continue."
          ]
        },
        {
          h: "What it refuses to do",
          type: "list",
          body: [
            "<strong>Guess.</strong> If it would have to assume what he sells or where the problem happens, it returns questions instead of a backlog. A speculative backlog is worse than no backlog.",
            "<strong>Run to twelve pages.</strong> It fits on one. The PRD nobody reads is a known failure mode, so short is the feature, not the compromise.",
            "<strong>Produce untraceable work.</strong> Every backlog item points back to a hypothesis. Nothing appears from nowhere.",
            "<strong>Write like a report.</strong> A banned-word list is enforced in the prompts — leverage, seamless, streamline, actionable, pain point and a dozen others. It says <em>people leave</em>, not <em>user drop-off is observed</em>."
          ]
        },
        {
          h: "The lesson worth keeping",
          type: "note",
          body: [
            "A rule stating that headings must be under twelve words produced 27-word headings. Adding one worked before-and-after example to the prompt took them to eight. If a writing rule is not being followed, show it rather than tell it."
          ]
        },
        {
          h: "Where it is",
          type: "prose",
          body: [
            "The MVP is built and the waitlist is live at <a href=\"https://alars.vercel.app\" target=\"_blank\" rel=\"noopener\">alars.vercel.app</a>, with real signups. Answers persist to Convex so nothing is lost; the model is reached through a single pinned config rather than an auto-router, because an unpinned router is how a side project quietly becomes a bill.",
            "Not built on purpose: integrations, login, history, export, RICE scoring, and the second mode. Each was cut to protect the thirty minutes."
          ]
        }
      ],
      related: ["investor-agent", "job-qualifier", "mission-control-hq"]
    },

    /* ============ 7. JOB QUALIFIER AGENT ============ */
    {
      id: "job-qualifier",
      title: "The Job Qualifier Agent",
      org: "Built on Hermes",
      category: "agents",
      industry: "Agentic AI · Retrieval · Evaluation",
      year: "2026",
      status: "Shipped",
      effortDays: 0,
      effortLabel: "Shipped and running",
      tagline: "An agent that refuses to say things it cannot prove.",
      summary:
        "A corpus-grounded reasoning loop with an anti-fabrication integrity guardrail and a two-layer " +
        "evaluation suite: deterministic citation-existence checks plus a scoped LLM faithfulness judge.",
      tags: ["RAG", "Guardrails", "LLM-as-judge", "Golden sets", "Shipped"],
      stats: [
        { v: "2",   l: "eval layers" },
        { v: "0",   l: "unbacked claims allowed" },
        { v: "Live", l: "status" }
      ],
      gate: {
        rule: "Is this claim backed by verified evidence in the corpus?",
        pass: "Asserted, with its citation attached",
        fail: "Flagged — the agent says it does not know"
      },
      sections: [
        {
          h: "What it does",
          type: "prose",
          body: [
            "The Job Qualifier reads a role and a candidate corpus and decides whether the match is real — grounding every judgement in retrieved evidence rather than plausible-sounding generation.",
            "The interesting part is not the retrieval. It is what happens when the evidence is not there."
          ]
        },
        {
          h: "The anti-fabrication guardrail",
          type: "prose",
          body: [
            "Language models are fluent by default and truthful only by construction. Left alone, the agent will produce a confident sentence about a qualification the candidate never claimed, because that sentence is statistically reasonable.",
            "So the guardrail flags any claim not backed by verified evidence. Not a soft instruction in the prompt — a check the output has to pass. An agent that says <em>I don't know</em> is more useful than one that is fluently wrong."
          ]
        },
        {
          h: "Two evaluation layers",
          type: "list",
          body: [
            "<strong>Deterministic citation-existence check</strong> — Does the cited source actually exist in the corpus, at that location, saying that thing? This is code, not a model. It cannot be talked out of its answer.",
            "<strong>Scoped LLM faithfulness judge</strong> — Given the retrieved evidence and the generated claim, is the claim faithful to the evidence? Deliberately scoped narrow, because a broad judge is a plausibility detector, not a truth detector."
          ]
        },
        {
          h: "Why the order matters",
          type: "note",
          body: [
            "The deterministic check runs first. A fabricated citation never reaches the judge, because a judge scoring on plausibility will happily pass a citation that reads correctly and does not exist. Cheap and certain before expensive and probabilistic — that ordering is the whole design.",
            "Rubric scoring is in place; eval calibration is ongoing. Saying otherwise would be the kind of unbacked claim this agent exists to catch."
          ]
        }
      ],
      related: ["eval-framework", "investor-agent", "alars"]
    },

    /* ============ 7. INVESTOR AGENT ============ */
    {
      id: "investor-agent",
      title: "Investor Research & Outreach Agent",
      org: "Built on Hermes",
      category: "agents",
      industry: "Multi-agent · Autonomy design",
      year: "2026",
      status: "Pre-deployment",
      effortDays: 0,
      effortLabel: "Built, pre-deployment",
      tagline: "Human-in-the-loop by design, not by patch.",
      summary:
        "A two-agent pipeline that turns a pitch deck into qualified, personalised investor outreach. " +
        "The product judgement is not in the drafting. It is in the routing: the fit score decides how " +
        "much autonomy the system gets.",
      tags: ["Multi-agent", "Autonomy tiers", "Approval gates", "Idempotency", "Irreversible actions"],
      stats: [
        { v: "≥ 80",  l: "auto-queues a draft" },
        { v: "60 days", l: "duplicate-contact suppression" },
        { v: "2",     l: "tokens required to send" }
      ],
      gate: {
        rule: "Investor fit score, out of 100",
        pass: "≥ 80 auto-queues a draft · 70–79 escalates to a human on Telegram",
        fail: "Below 70 never surfaces at all"
      },
      sections: [
        {
          h: "What it does",
          type: "prose",
          body: [
            "Agent 1 parses the pitch deck, derives investment themes, sources matched investors with verified professional emails, and scores fit out of 100. Agent 2 drafts, previews and sends.",
            "Two agents rather than one because sourcing and sending have different failure modes, and different consequences when they fail."
          ]
        },
        {
          h: "Autonomy is earned, not granted",
          type: "list",
          body: [
            "<strong>Score ≥ 80</strong> — Strong match. The system auto-queues a draft.",
            "<strong>Score 70–79</strong> — Genuinely uncertain, which is exactly when a human should look. Escalates via Telegram approval.",
            "<strong>Below 70</strong> — Never surfaces. Not queued for later, not shown as a maybe. A weak match that reaches a human is still a cost."
          ]
        },
        {
          h: "Sending is irreversible, so it is gated deterministically",
          type: "prose",
          body: [
            "You cannot un-email an investor. So the send path does not rely on the model behaving well. Preview issues a one-time token. A second, separate confirm command carrying that token is required before the send gate fires.",
            "Two tokens, two steps, one direction. The model can be wrong and the email still does not go out."
          ]
        },
        {
          h: "Duplicate-contact suppression",
          type: "prose",
          body: [
            "A 60-day suppression window per product prevents the same investor being contacted twice. This is the unglamorous half of agent design: agents run repeatedly, and a system with no memory of what it already did will cheerfully embarrass you at scale."
          ]
        },
        {
          h: "What I'd do differently",
          type: "note",
          body: [
            "The fit score is the load-bearing component and it is the least tested one. Before this goes live, the scoring needs a golden set with human-labelled matches — the same discipline applied in the eval framework — otherwise the autonomy tiers are gating on a number nobody has validated."
          ]
        }
      ],
      related: ["job-qualifier", "alars", "what-is-hot"]
    },

    /* ============ 8. EVAL FRAMEWORK ============ */
    {
      id: "eval-framework",
      title: "AI Evaluation Framework",
      org: "Methodology",
      category: "agents",
      industry: "Evaluation · LLMOps",
      year: "2026",
      status: "In build",
      effortDays: 0,
      effortLabel: "Write-up in progress",
      tagline: "A plausible citation and a real one look identical to a judge.",
      summary:
        "Standalone eval methodology built for The Job Qualifier: golden-set construction, LLM-as-judge " +
        "design with its failure modes mapped, and a deterministic guard against fabricated citations " +
        "that a rubric-judge would pass on plausibility alone.",
      tags: ["Golden sets", "LLM-as-judge", "Failure modes", "Deterministic checks", "In build"],
      stats: [
        { v: "3",  l: "components" },
        { v: "1",  l: "failure mode that matters most" },
        { v: "WIP", l: "write-up status" }
      ],
      gate: {
        rule: "Does the cited source exist in the corpus?",
        pass: "Passes to the faithfulness judge",
        fail: "Deterministic fail — the judge never sees it"
      },
      sections: [
        {
          h: "Why this exists as its own artefact",
          type: "prose",
          body: [
            "Building the Job Qualifier surfaced a problem that generalises: most eval suites measure whether output looks right. Very few measure whether it is true. Those are different questions and the gap between them is where AI products lose trust.",
            "So the methodology got pulled out of the agent and written up on its own."
          ]
        },
        {
          h: "Golden-set construction",
          type: "prose",
          body: [
            "A golden set is only as honest as its hardest cases. Sets built from typical inputs measure typical performance, which is the number least likely to hurt you. The construction method deliberately over-weights the edges — ambiguous evidence, partial matches, and cases where the correct answer is <em>insufficient information</em>."
          ]
        },
        {
          h: "LLM-as-judge, and its failure modes",
          type: "list",
          body: [
            "<strong>Plausibility bias</strong> — Judges reward fluent, well-formed answers. A confident fabrication outscores a hedged truth.",
            "<strong>Scope creep</strong> — A judge asked to assess everything assesses nothing reliably. Narrow the question and the signal improves.",
            "<strong>Self-preference</strong> — A judge from the same model family tends to favour its own generation patterns.",
            "<strong>No ground truth</strong> — A judge with no access to source evidence is scoring style. This is the failure the deterministic layer exists to close."
          ]
        },
        {
          h: "The deterministic guard",
          type: "note",
          body: [
            "Before any model judges anything, code checks that each cited source exists in the corpus and says what the claim says it says. A fabricated citation fails here and never reaches the judge.",
            "This is the whole argument in one line: <strong>a plausible citation and a real one look identical to a judge, and completely different to a lookup.</strong> Use the lookup first."
          ]
        }
      ],
      related: ["job-qualifier", "investor-agent", "alars"]
    },

    /* ============ 9. WHAT IS HOT? ============ */
    {
      id: "what-is-hot",
      title: "What Is Hot? — A Newspaper With No Buttons",
      org: "Built on webcmd",
      category: "builds",
      industry: "Agent Infrastructure · Scraping · Editorial AI",
      year: "2026",
      status: "Shipped",
      effortDays: 4,
      effortLabel: "Shipped, re-reports every 20 minutes",
      tagline: "The cheapest agent call is the one you designed out.",
      summary:
        "A daily broadsheet of what is actually hot across 16 tech sources, scraped without a model, " +
        "sub-edited by a single Claude call, and rendered as print — no buttons, no spinners, no chat " +
        "box. The design question was never how to make the AI better. It was how little AI the thing " +
        "needed.",
      tags: ["Agent infrastructure", "Cost measurement", "Schema-enforced grounding", "Scraping", "Shipped"],
      stats: [
        { v: "1",    l: "model call per edition" },
        { v: "0",    l: "tokens to fetch all 16 sources" },
        { v: "$0.47", l: "to set one whole edition" }
      ],
      repo: {
        name: "rishimunikesarwani-hub/what-is-hot",
        url: "https://github.com/rishimunikesarwani-hub/what-is-hot",
        public: false,
        note: "Working folder is still called ironman on disk"
      },
      gate: {
        rule: "Can this sentence be traced to something the app fetched itself?",
        pass: "It prints — headlines copied byte-for-byte from the publisher",
        fail: "It cannot be written at all; the model's output schema has no title field"
      },
      sections: [
        {
          h: "What it actually is",
          type: "prose",
          body: [
            "Sixteen tech sources — Hacker News, GitHub Trending, Product Hunt, Lobsters, dev.to, Stack Overflow, TechCrunch, Reddit, X, four RSS feeds and more — read every twenty minutes, ranked against each other, and laid out as a broadsheet front page.",
            "There is nothing to click. No refresh button, no filter chips, no loading spinner, no chat strip. The front room is print: it shows you a finished edition and nothing else. All the machinery — retries, caches, ranking, the sub-editor — happens in the back room and never surfaces.",
            "That constraint is the product. A page with controls is a tool you have to operate. A page with none is something you read."
          ]
        },
        {
          h: "Three rooms, and what each one is forbidden to do",
          type: "table",
          head: ["Room", "What it does", "What it is not allowed to do"],
          body: [
            ["The back room — ingest.js", "Spawns webcmd adapters and RSS parsers straight from Node. Retries, 15-minute cache, ranking, dedupe.", "Never calls a model. Not once, for any of the 16 sources."],
            ["The editor — edit-pass.js", "One Claude call. Writes the masthead headline, assigns sections, writes summaries and a 'why it matters' line.", "Cannot touch a headline. Its output schema contains no title field."],
            ["The paper — public/", "Renders the finished edition from digest.json.", "No controls, no logs, no machinery. It reads the file and stops."]
          ]
        },
        {
          h: "Why the model cannot rewrite a headline",
          type: "prose",
          body: [
            "Every printed headline is the publisher's own words, copied verbatim. That is not enforced by asking the model nicely in a prompt — it is enforced by the shape of what the model is allowed to return. The output schema has no <code>title</code> field. There is no slot to write a headline into, so there is no headline to hallucinate.",
            "This is the same discipline as the anti-fabrication guardrail in the Job Qualifier, applied one layer lower. A prompt instruction is a request. A schema with the field removed is a wall.",
            "<code>node app/verify-edition.js</code> then checks all 45 printed titles against the raw source caches byte-for-byte. On the verified 8 August run: <strong>all checks passed, 15 of 16 sources live, 0 failed</strong>."
          ]
        },
        {
          h: "The token experiment whose result I did not want",
          type: "table",
          head: ["Arm", "What it was", "Total tokens", "Cost"],
          body: [
            ["A", "No webcmd — generic WebFetch/WebSearch, the agent finds the page itself", "127,546", "$0.78"],
            ["B", "webcmd CLI plus its 7 agent skills — the agent works out the command", "885,518", "$6.63"],
            ["C", "Script-fed — data already on disk, the model only reads the cache file", "155,887", "$1.57"],
            ["D", "What this app does — Node spawns the adapter, no model at any point", "0", "$0.00"]
          ]
        },
        {
          h: "What that table cost me to publish",
          type: "prose",
          body: [
            "The tool this app is built on claims that its adapters cut browser-agent token spend by up to ~90%. On my task, adding its skills cost <strong>8.5× more</strong>, not less — $6.63 against $0.78. Tokens went up 594%.",
            "The reason is in the cache-write column. Arm B wrote 648,854 tokens of cache just loading skill files and an adapter registry describing 119 commands into context, before fetching a single story. Then it amortised all of that over one question.",
            "<strong>This does not refute the vendor's claim</strong>, and the write-up says so. Their number is about browser agents re-discovering a site by screenshot and DOM dump on every run. One query against Hacker News is the friendliest possible case for the arm with no webcmd — there was almost nothing to save. The measurement is fair for what it measures, and what it measures is narrow.",
            "I published it anyway, because arm D is the actual lesson and it only makes sense next to the others."
          ]
        },
        {
          h: "Arm D is the design",
          type: "note",
          body: [
            "Skills exist so an <em>agent</em> can work out what to do. Once you already know the command, you do not need the agent, the skills, or the tokens. So the app never asks a model to scrape — Node spawns the adapters directly and pays zero tokens for all 16 sources.",
            "The only model cost in the entire daily build is the sub-editor writing the headline and summaries: <strong>one call, ~29,000 tokens, $0.47 for the whole edition</strong> on the verified run.",
            "The token saving is real. It comes from removing the model, not from making the model cheaper. That sentence is the whole project."
          ]
        },
        {
          h: "Ranking — why 'buzz' is the only honest signal",
          type: "list",
          body: [
            "<strong>The problem:</strong> 232 Hacker News points and 7,299 GitHub stars cannot be sorted against each other. They are different units pretending to be the same one.",
            "<strong>Standing</strong> — position <em>within its own source</em>. A #1 is a #1 anywhere, and that comparison is legitimate.",
            "<strong>Weight</strong> — editorial trust in that source. My judgement, stated as mine.",
            "<strong>Freshness</strong> — an 18-hour half-life; unknown dates sit mid-scale rather than being guessed.",
            "<strong>Buzz</strong> — how many <em>different</em> sources carry the same story. This is the one that matters: a story running on three mastheads at once is the only real evidence of 'hot', and it is precisely what no single feed can ever show you. Those get boxed under <strong>Extra! Extra!</strong>"
          ]
        },
        {
          h: "No API key, by construction",
          type: "prose",
          body: [
            "The sub-editor is not built on an API key. It spawns the <code>claude</code> CLI already installed and signed in on the machine. There is no <code>.env</code>, and no key that could leak to the browser — because there is no key.",
            "A pleasant side effect of a decision made for a different reason: one less secret to rotate, and nothing to accidentally commit."
          ]
        },
        {
          h: "What I cut, and what is still wrong with it",
          type: "note",
          body: [
            "<strong>Seven feeds dropped.</strong> Four weekly newsletters repeat unchanged for seven days inside a daily paper. Syntax.fm served 1,027 back-catalogue episodes. DZone was low signal. Hashnode and Python Weekly are genuinely dead — Hashnode's API went paid, and Python Weekly returns a 404 page under an HTTP 200 status. Both verified rather than assumed.",
            "<strong>Dead code left standing.</strong> <code>app/parse.js</code> and <code>POST /api/upload</code> still work and are tested against real PDF, Word, CSV, XML and image files, but the chat strip that consumed them was removed. Nothing in the page reaches them. They are API-only until something does.",
            "<strong>The experiment is one sample per arm.</strong> No repeats, no error bars. An earlier version of it was outright invalid — a permission flag silently denied the fetch tools, so two arms measured a polite refusal and still reported plausible token counts. The harness now refuses to count a run that did not produce a numbered list. A run that refuses is not a result."
          ]
        }
      ],
      related: ["mission-control-hq", "job-qualifier", "tablink"]
    },

    /* ============ 10. TABLINK ============ */
    {
      id: "tablink",
      title: "TabLink — A Tablet That Dials Its Own Loopback",
      org: "Personal infrastructure",
      category: "builds",
      industry: "Windows · Android · Network design",
      year: "2026",
      status: "Shipped",
      effortDays: 2,
      effortLabel: "Two evenings, in daily use",
      tagline: "The safest port is the one that was never listening.",
      summary:
        "Open, edit and save the files on a Windows PC from an Android tablet, over the USB-C cable and " +
        "nothing else. No wifi, no cloud, no copies. The tablet connects to 127.0.0.1 — its own loopback " +
        "address — and lands on the desktop's disk.",
      tags: ["Network design", "Security by construction", "Windows", "adb", "Shipped"],
      stats: [
        { v: "0",   l: "network addresses listening" },
        { v: "2",   l: "approaches built, one kept" },
        { v: "USB", l: "the only route in" }
      ],
      repo: {
        name: "rishimunikesarwani-hub/TabLink",
        url: "https://github.com/rishimunikesarwani-hub/TabLink",
        public: false
      },
      gate: {
        rule: "Is the USB-C cable physically connected right now?",
        pass: "The tunnel exists and the tablet reaches the disk, read and write",
        fail: "There is no route in — not a blocked one, an absent one"
      },
      sections: [
        {
          h: "The one counter-intuitive bit",
          type: "prose",
          body: [
            "The tablet types <code>127.0.0.1</code> into its file manager — the address every device on earth understands as <em>me</em> — and arrives on a different machine's hard drive.",
            "That is the whole trick. Windows runs an SSH/SFTP server bound to <code>127.0.0.1:22</code> and nothing else. <code>adb reverse tcp:2222 tcp:22</code> then forwards a port on the tablet, down the physical cable, to that listener. <code>adb reverse</code> is what makes a local address resolve to a remote machine.",
            "<strong>ELI10:</strong> the tablet phones a number that normally means 'myself', and the cable quietly redirects the call to the computer. Pull the cable out and the number stops working."
          ]
        },
        {
          h: "Security by construction, not by rule",
          type: "table",
          head: ["Property", "Why it holds"],
          body: [
            ["Nothing listens on a network address", "sshd_config has ListenAddress 127.0.0.1 — loopback only"],
            ["The tablet is the only possible client", "The only route in is adb reverse, over the USB cable"],
            ["Access dies with the cable", "Unplugging drops the forward; so does the device re-enumerating"],
            ["No file ever leaves the PC", "SFTP edits in place — the tablet is a window, not a copy"]
          ]
        },
        {
          h: "Why that table matters more than a firewall rule",
          type: "prose",
          body: [
            "A firewall rule is a thing that says no. It can be misconfigured, overridden by a profile change, or quietly disabled by something else on the machine. It is a decision that has to keep being made correctly.",
            "A service bound to loopback is not saying no. There is no door to guard, because the address a remote attacker would have to reach does not exist on any interface they can route to. Take the cable out and there is no attack surface left to describe."
          ]
        },
        {
          h: "The version I built first and threw away",
          type: "prose",
          body: [
            "The first attempt shared the user folder over SMB, turned on Samsung USB tethering, and opened port 445 to the <code>192.168.42.0/24</code> tether network only. It worked. It is still in the repo.",
            "It was replaced because it needs Administrator, it creates a real SMB share that outlives the cable, and it pins its safety on a firewall rule scoped to a network range — three pieces of standing state that persist whether or not the tablet is anywhere nearby.",
            "The SFTP route needs no admin, creates nothing permanent, and is unreachable by construction rather than by rule. I kept the old script in the repo on purpose: the trade-off between the two is more interesting than either one alone."
          ]
        },
        {
          h: "The bug that cost an hour",
          type: "note",
          body: [
            "A Windows login name can be renamed independently of the profile folder, and on this machine they had diverged. The tablet kept rejecting the credentials with no useful error.",
            "<code>%USERNAME%</code> is frozen at sign-in and can be stale, so the script resolves the live account name from the SID instead — that is what SSH actually asks for. Then it <em>prints</em> the name rather than assuming you know it.",
            "There is also a <code>check-password.ps1</code>, which exists for one reason: when the tablet says the password is wrong there are two possible causes with opposite fixes — the password is wrong, or the tablet is mangling what you typed. The script asks Windows directly, so you find out which. It reads into a <code>SecureString</code> and never writes it anywhere."
          ]
        },
        {
          h: "What it deliberately does not do",
          type: "list",
          body: [
            "<strong>No sync.</strong> Nothing is copied to the tablet, so nothing can drift out of date or conflict. You are editing the real file.",
            "<strong>No wireless fallback.</strong> Adding one would undo the entire security model to save plugging in a cable.",
            "<strong>No persistent access.</strong> The tunnel is gone the moment the cable is. That is a feature I would not trade.",
            "<strong>No credentials stored anywhere.</strong> The Windows password is typed on the tablet and validated by Windows. Nothing in the repo holds it."
          ]
        }
      ],
      related: ["what-is-hot", "portfolio-site", "mission-control-hq"]
    },

    /* ============ 11. THIS SITE ============ */
    {
      id: "portfolio-site",
      title: "This Site — One Object, No Build Step",
      org: "Self",
      category: "builds",
      industry: "Static web · Content architecture",
      year: "2026",
      status: "Shipped",
      effortDays: 3,
      effortLabel: "Live, edited continuously",
      tagline: "Every page you are reading renders from a single JavaScript object.",
      summary:
        "The site you are on. No framework, no bundler, no build step, no deploy pipeline — five HTML " +
        "shells and one data file. Every page, card, filter, search result and detail view is generated " +
        "from one object, so content is edited in exactly one place and can never disagree with itself.",
      tags: ["Static site", "Content architecture", "No build step", "Progressive rendering", "Shipped"],
      stats: [
        { v: "1",  l: "file holds all content" },
        { v: "0",  l: "build steps to publish" },
        { v: "5",  l: "HTML shells, no duplication" }
      ],
      repo: {
        name: "rishimunikesarwani-hub/my-portfolio",
        url: "https://github.com/rishimunikesarwani-hub/my-portfolio",
        public: false
      },
      gate: {
        rule: "Does this change require a build, a bundler or a deploy step to see?",
        pass: "It goes in — edit the file, refresh the page",
        fail: "It does not ship, however good the feature is"
      },
      sections: [
        {
          h: "The one decision everything else follows from",
          type: "prose",
          body: [
            "All content lives in a single object in <code>assets/js/data.js</code> — person, categories, every project, experience, skills, education. The HTML files are shells. They contain a header, a footer and an empty div.",
            "That means the same project entry renders the card on the work page, the row in its category, the detail page, the previous/next pager, the related-work sidebar, and the search index. Write it once; it cannot fall out of sync with itself, because there is no second copy to fall out of sync with.",
            "The alternative — a page per project — is faster for the first three projects and worse for every one after that. I have thirteen."
          ]
        },
        {
          h: "What 'no build step' actually buys",
          type: "table",
          head: ["Decision", "What it costs", "What it buys"],
          body: [
            ["Plain script tags, no modules", "No npm ecosystem, no imports", "The site opens over file:// — double-click the HTML and it works, offline, on any machine"],
            ["No framework", "Everything is hand-rolled string templating", "Nothing to upgrade, and no dependency can break the site while I am not looking"],
            ["No bundler", "No tree-shaking, no minification", "The file I edit is the file that runs. Debugging is just reading."],
            ["One data object", "The file is long and getting longer", "Every consumer of a project entry is guaranteed to agree with every other one"]
          ]
        },
        {
          h: "Where the seams show",
          type: "prose",
          body: [
            "This is not free, and it would be dishonest to present it as free. <code>data.js</code> is over a thousand lines and growing — every new project makes it longer, and there is a point where one file stops being an advantage and starts being a scroll.",
            "Diagrams are the sharper limitation. Figures are hand-written inline SVG inside <code>site.js</code>, one function per drawing, so adding an illustration is a code change rather than a content change. That is exactly the coupling the data file was meant to avoid. The four architecture drawings on the Mission Control HQ breakdown are the only ones that exist, and that is why.",
            "Neither is worth fixing yet. Both are worth writing down before someone else notices them first."
          ]
        },
        {
          h: "Rendering rules I gave myself",
          type: "list",
          body: [
            "<strong>Escaping is inconsistent, and that is a real flaw.</strong> Table cells and headings go through <code>esc()</code>; prose, lists and notes render raw HTML so I can bold a phrase mid-sentence. Every string is mine, so nothing is exploitable — but 'trusted input' is the reasoning behind most injection bugs, and writing it down is the first step to fixing it.",
            "<strong>Sections are typed, not free-form.</strong> A section is <code>prose</code>, <code>list</code>, <code>table</code>, <code>note</code> or <code>figure</code>. Five shapes, and the renderer knows all of them — so a new project cannot invent a layout that the search index or the category page then fails to handle.",
            "<strong>Categories are data.</strong> Adding a fourth category is a four-line edit to one array; the nav, the work page, the filters and the search all pick it up with no other change. This section exists because of that.",
            "<strong>Private repos render as text, not links.</strong> A link to a private repo is a 404 for every visitor. One boolean per project flips it to a real link the day it goes public."
          ]
        },
        {
          h: "Honest status",
          type: "note",
          body: [
            "It runs from a local Python web server or straight off the filesystem. There is no hosting, no domain and no analytics on it yet — those are decisions I have not made rather than work I have finished.",
            "The source repo is private, so the link in the sidebar is deliberately not a link."
          ]
        }
      ],
      related: ["what-is-hot", "tablink", "mission-control-hq"]
    },

    /* ============ THE STRATEGY ROOM ============
       Written 2026-08-12 from the project's own LOG.md decision log.
       Status is deliberately "Designed, not built" — zero code exists
       and it is not yet a git repo. Do not soften that wording. */
    {
      id: "strategy-room",
      title: "A six-role firm that argues, then stops",
      org: "The Strategy Room",
      category: "builds",
      industry: "Multi-agent · Strategy",
      year: "2026",
      status: "Designed, not built",
      effortDays: 0,
      effortLabel: "Decisions locked, zero code",
      tagline: "Seven decisions, one reversal, and a room that stops talking when it runs out of things to say.",
      summary:
        "An agentic co-strategy team: six specialist roles plus an Engagement Lead, running as a " +
        "group-chat boardroom rather than a pipeline. Every architectural decision is locked and " +
        "logged, including the one that was made and reversed on the same day. No code yet.",
      tags: ["Multi-agent", "Boardroom", "Decision log", "Claude Agent SDK", "Designed"],
      stats: [
        { v: "6",  l: "specialist roles" },
        { v: "4",  l: "round hard cap" },
        { v: "0",  l: "lines of code so far" }
      ],
      gate: {
        rule: "Has this agent got something genuinely new to add this round?",
        pass: "It speaks, and the discussion continues",
        fail: "It says PASS — and when all five pass, the meeting is over"
      },
      sections: [
        {
          type: "prose",
          body: [
            "Most multi-agent demos are pipelines wearing a costume: each agent runs once, in order, and the output is a stack of monologues. The Strategy Room is built the other way round — a shared meeting transcript that every agent reads, and a rule that decides when the meeting ends.",
            "This entry is the design, not the product. Seven decisions are locked and the build sequence is agreed; nothing has been written yet. It is here because the decisions are the interesting part."
          ]
        },
        {
          h: "The firm",
          type: "list",
          body: [
            "<strong>Engagement Lead</strong> — orchestrates, assigns, synthesises. Chairs the room.",
            "<strong>Diagnostician</strong> — works out what is actually wrong.",
            "<strong>Market Analyst</strong> — maps the terrain.",
            "<strong>Strategist</strong> — chooses.",
            "<strong>Operator</strong> — makes it executable.",
            "<strong>Risk Officer</strong> — governs, and doubles as the Red Team.",
            "<strong>Communicator</strong> — writes the minutes and the action plan."
          ]
        },
        {
          h: "The boardroom rule",
          type: "note",
          body: [
            "Round one, all five specialists give their opening take <em>in parallel</em>, so nobody anchors on anybody. From round two it goes sequential, and each agent must add something new or say PASS. The meeting ends when all five pass in a single round, at a hard four-round cap, or when the chair calls it. The user can interject at any point."
          ]
        },
        {
          h: "Three modes, chosen by the user",
          type: "table",
          head: ["Mode", "What runs", "When"],
          body: [
            ["Full engagement", "All six roles in the boardroom", "The problem is not yet understood"],
            ["Sprint", "Diagnostician → Strategist → Risk Officer → one-pager", "A fast recommendation is needed"],
            ["Red team", "Risk Officer attacking a pasted plan", "A decision already exists and needs breaking"]
          ]
        },
        {
          h: "The decision I reversed the same day",
          type: "prose",
          body: [
            "Decision 6a chose a provider-agnostic engine: drop the Claude Agent SDK, build a custom agent loop on a LiteLLM router, pin every model in one registry. Freedom over ship-speed.",
            "Decision 6a-rev reversed it hours later. Once the plumbing cost was concrete rather than theoretical, it outweighed the flexibility it bought. The hedge moved to the boundary instead — the Agent SDK is engine v1, model IDs stay pinned in one registry file, and the API layer talks to an engine interface so a provider-agnostic engine can replace it later without touching the UI, the skills or the pipelines.",
            "The reversal is in the log with its reason, which is the point of keeping one."
          ]
        },
        {
          h: "Decided against, on purpose",
          type: "list",
          body: [
            "<strong>Self-learning prompts.</strong> No auto-updating instructions in v1 — file-based memory instead, so what the system remembers can be read and corrected by a human.",
            "<strong>A separate supervisor agent.</strong> The Lead orchestrates and the Risk Officer is the quality gate. Adding a supervisor over both buys process, not judgement.",
            "<strong>Full collaborative decomposition.</strong> Debate is embedded at exactly one point — the Strategist and Risk Officer challenge-and-revise loop. Everywhere else it is orchestrator-led delegation, on cost and control grounds.",
            "<strong>Folding in ALARS.</strong> Product teardown work belongs to ALARS; this stays general business strategy. The split is a decision, not an oversight."
          ]
        },
        {
          h: "What it costs",
          type: "note",
          body: [
            "The boardroom runs roughly two to four times a straight pipeline. That was accepted, not discovered — softened by prompt caching and by the PASS rule, which ends the meeting the moment the room stops adding anything."
          ]
        }
      ],
      related: ["alars", "investor-agent", "what-is-hot"]
    }
  ],

  /* ---------------------------------------------------------------
     Experience — for the About page.
     --------------------------------------------------------------- */
  /* -----------------------------------------------------------------
     EXPERIENCE

     Reworked 2026-08-12 against the master resume
     (07_Resume_JD_Job_Tracker\Master Resume\…_Master.md) and the live
     LinkedIn profile. Job titles and dates follow LinkedIn, because that
     is the record a recruiter cross-checks this page against. Nothing
     here is invented — it is reframed toward the product decision in
     each role rather than the sales activity.
     ----------------------------------------------------------------- */
  experience: [
    {
      role: "Founding Advisor & Business Consultant (pro bono)",
      org: "AayoApp — pre-seed event-discovery platform",
      place: "New Delhi",
      when: "Dec 2025 – present",
      points: [
        "Designed the revenue architecture — a 10% commission core plus five sub-streams (promoted listings, organiser plans, top placement, brand ads, venue partnerships). Adopted as the basis of the ₹1 Cr pre-seed ask.",
        "Sized the market through TAM-SAM-SOM against Luma, Meetup, Eventbrite and BookMyShow, and built the projections and valuation framework behind the raise.",
        "Cut MVP scope against real constraints — three engineers, nine months of runway. Protected velocity by removing features, not adding them.",
        "Platform reached 1,100+ organic users and 90+ events on zero paid spend."
      ]
    },
    {
      role: "Sales & GTM Manager",
      org: "VINCI Energies (Actemium)",
      place: "Bengaluru",
      when: "Jul 2024 – Nov 2025",
      points: [
        "Owned pan-South-India go-to-market for industrial automation across cement and steel.",
        "Ran end-to-end discovery cycles — interviewed buyers, synthesised requirements, translated pain into technical-commercial proposals.",
        "Revived 10+ dormant accounts into qualified pipeline through a re-engagement playbook built from win/loss analysis.",
        "Led across engineering, design, supply chain and operations with no line authority — influence without authority, which is most of the job."
      ]
    },
    {
      role: "Key Account Manager — Export Markets (US & Europe)",
      org: "TD Power Systems",
      place: "Bengaluru · USA + Europe markets",
      when: "Feb 2022 – Jul 2024",
      points: [
        "Grew Fincantieri revenue 70% year on year through structured requirements management and full spec-change traceability — a compliance bar that had disqualified most competing suppliers.",
        "Owned seven US and European key accounts including Solar Turbines, Siemens, Fincantieri, Turboden and Exergy.",
        "Acted as customer advocate: translated international requirements into product specifications and engineering roadmap inputs across time zones.",
        "Ran deals end to end across currencies, banking instruments and compliance regimes, in a matrixed org without explicit authority."
      ]
    },
    {
      role: "Sales & Estimation Head — new revenue stream launch",
      org: "JC Industries",
      place: "Bengaluru",
      when: "Feb 2018 – Feb 2022",
      points: [
        "Doubled company revenue in twelve months by identifying and launching an untapped government-tender segment.",
        "Owned the full product-market-fit loop — market discovery, requirement definition, pricing, delivery.",
        "Built the pricing, bidding and win/loss review system from scratch using competitor benchmarking; won and retained NTPC, UCIL and Midhani.",
        "Won a breakthrough NTPC Bijapur order — four draw-out control stations for an 8-star delta motor starter."
      ]
    },
    {
      role: "Co-Founder",
      org: "Siddhi Vinayak Infra-Ventures — concrete blocks, tiles, pavers",
      place: "Prayagraj, Uttar Pradesh",
      /* End date confirmed by Rishi 2026-08-12 as Feb 2018 (LinkedIn says
         May 2018 — LinkedIn is the one that needs fixing). Start date is
         still LinkedIn's Jul 2017, unconfirmed. */
      when: "Jul 2017 – Feb 2018",
      points: [
        "Ran the whole business loop before knowing what it was called: found the market, built the product, acquired the customers, managed the cash. Full P&L ownership. Won municipal-corporation and housing-society contracts.",
        "It ended badly — a critical project stalled on financial miscalculation, co-founder misalignment and customer payment delays, and I exited when funds were withheld.",
        "What it taught: financial control is not optional, founder alignment has to exist before execution starts, and risk mitigation is a product decision. That is why I now design where a system stops deciding on its own."
      ]
    },
    {
      role: "Graduate Engineer Trainee — automation & systems",
      org: "JBM Group — Maruti Suzuki tier-1 supplier",
      place: "Gurugram",
      when: "Oct 2016 – Jul 2017",
      points: [
        "Electrical automation systems, plant operations and cross-functional engineering coordination — the technical foundation the rest of the career sits on.",
        "Developed an intuition for how manufacturing systems fail and why, which maps directly onto reasoning about AI failure modes and production reliability."
      ]
    }
  ],

  /* -----------------------------------------------------------------
     SKILLS

     `tier` decides how a group renders, and the order below is the
     order on the page:

       hire   — what someone is actually hiring for. Rendered as a
                cyan-ruled card, brighter chips, given the most weight.
       craft  — supporting depth. Plain chips.
       use    — tools in daily use. Solid chips.
       learn  — tools being learned. Dashed chips, so "learning" is
                visible at a glance and never overstates itself.
     ----------------------------------------------------------------- */
  skills: [
    {
      group: "AI product — built and shipped",
      tier: "hire",
      hideGroupLabel: true,
      items: ["Agent design & agentic workflows", "RAG architecture & retrieval design", "Evaluation frameworks (golden sets, LLM-as-judge)", "Open-source AI usage", "Build-vs-buy reasoning"]
    },
    {
      group: "Core PM craft",
      tier: "craft",
      items: ["Problem discovery", "Requirement definition", "Prioritisation logic", "Trade-off decision making", "Metrics ownership"]
    },
    {
      group: "B2B & commercial",
      tier: "craft",
      items: ["Revenue ownership", "Enterprise & key account management"]
    },
    {
      group: "Tools I use",
      tier: "use",
      items: ["Claude Code", "Codex CLI", "LangChain", "Vector DBs", "Gradio", "Claude API / OpenAI Playground"]
    },
    {
      group: "Tools I'm learning",
      tier: "learn",
      items: ["Jira / Linear", "Figma", "SQL", "Mixpanel / Amplitude"]
    }
  ],

  /* -----------------------------------------------------------------
     EDUCATION & CERTIFICATIONS

     Order here is the order rendered — this is not sorted by date.
     `inProgress: true` renders a hollow timeline marker instead of the
     filled cyan one, so an unfinished course does not read as complete.
     ----------------------------------------------------------------- */
  education: [
    {
      title: "IBM RAG and Agentic AI",
      org: "Coursera",
      when: "Stopped at 30% · 2026",
      /* Drives the progress rail in the Skills section too — one number,
         one place. Update it here and both move together. */
      progress: 30,
      progressState: "stopped",
      note: "Stopped at 30% because completing this certification no longer added value after the retrieval and agent work already shipped."
    },
    {
      title: "IBM AI Product Manager Professional Certificate",
      org: "Coursera",
      when: "Completed 2026",
      note: "Product strategy and planning, stakeholder collaboration, new-product development, lifecycle management. Foundation models, prompt engineering, and building AI-powered products."
    },
    {
      title: "Global PGP in Startup Leadership",
      org: "LaunchPilot School of Business / Mentogram College (affiliate, Woolf University)",
      when: "Completed January 2026 · EQF (ECTS)",
      note: "Design thinking, lean startup, agile & MVP development, rapid prototyping, UI/UX, A/B testing, user research, growth & positioning, financial modelling, valuation, investor pitching."
    },
    {
      title: "B.E. Electrical & Electronics",
      org: "Visvesvaraya Technological University, Belgaum",
      when: "2012 – 2016 · 76%",
      note: ""
    }
  ],

  /* -----------------------------------------------------------------
     CERTIFICATES

     The individual course certificates behind the two Coursera tracks
     listed in `education` above. Rendered as the rotating ring on the
     About page — order here is the order around the circle, so keep it
     chronological and the ring reads as a timeline.

     thumb   the 560px render shown on the card. The rail draws each
             certificate twice, so the full-size one here would be
             ~67 MB of decoded bitmap and stalls the renderer.
     img     the 1100px render, opened when a card is clicked
     verify  the Coursera verification code; the URL is built from it
     track   groups the card by programme, and colours its tag
     ----------------------------------------------------------------- */
  certificates: [
    {
      title: "Product Management: An Introduction",
      org: "IBM",
      when: "Mar 2026",
      verify: "EC80ALCUVV19",
      track: "AI Product Manager",
      thumb: "assets/img/certs/thumb/cert-pm-introduction.jpg",
      img:   "assets/img/certs/cert-pm-introduction.jpg"
    },
    {
      title: "Product Management: Foundations & Stakeholder Collaboration",
      org: "SkillUp",
      when: "May 2026",
      verify: "5YAVBSINLDLE",
      track: "AI Product Manager",
      thumb: "assets/img/certs/thumb/cert-pm-foundations.jpg",
      img:   "assets/img/certs/cert-pm-foundations.jpg"
    },
    {
      title: "Product Management: Initial Product Strategy and Plan",
      org: "SkillUp",
      when: "Jun 2026",
      verify: "K5VNYXZPNITS",
      track: "AI Product Manager",
      thumb: "assets/img/certs/thumb/cert-pm-strategy-plan.jpg",
      img:   "assets/img/certs/cert-pm-strategy-plan.jpg"
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      org: "IBM",
      when: "Jun 2026",
      verify: "GOWWXWXVYERF",
      track: "AI Product Manager",
      thumb: "assets/img/certs/thumb/cert-intro-to-ai.jpg",
      img:   "assets/img/certs/cert-intro-to-ai.jpg"
    },
    {
      title: "Generative AI: Introduction and Applications",
      org: "IBM",
      when: "Jul 2026",
      verify: "M9WWUMVN597R",
      track: "AI Product Manager",
      thumb: "assets/img/certs/thumb/cert-genai-applications.jpg",
      img:   "assets/img/certs/cert-genai-applications.jpg"
    },
    {
      title: "Generative AI: Prompt Engineering Basics",
      org: "IBM",
      when: "Jul 2026",
      verify: "WQXO5P0DG6MP",
      track: "AI Product Manager",
      thumb: "assets/img/certs/thumb/cert-prompt-engineering.jpg",
      img:   "assets/img/certs/cert-prompt-engineering.jpg"
    },
    {
      title: "Generative AI: Foundation Models and Platforms",
      org: "IBM",
      when: "Jul 2026",
      verify: "1KTE3RO0UMHC",
      track: "AI Product Manager",
      thumb: "assets/img/certs/thumb/cert-foundation-models.jpg",
      img:   "assets/img/certs/cert-foundation-models.jpg"
    },
    {
      title: "Develop Generative AI Applications: Get Started",
      org: "IBM",
      when: "Aug 2026",
      verify: "MWCNARU1JN3K",
      track: "RAG & Agentic AI",
      thumb: "assets/img/certs/thumb/cert-develop-genai-apps.jpg",
      img:   "assets/img/certs/cert-develop-genai-apps.jpg"
    },
    {
      title: "Build RAG Applications: Get Started",
      org: "IBM",
      when: "Aug 2026",
      verify: "EPJJSWUL974F",
      track: "RAG & Agentic AI",
      thumb: "assets/img/certs/thumb/cert-build-rag-apps.jpg",
      img:   "assets/img/certs/cert-build-rag-apps.jpg"
    }
  ],

  /* -----------------------------------------------------------------
     READING

     Three groups, rendered in this order. Move a title between groups
     as it progresses — that movement is the point of showing it.
     ----------------------------------------------------------------- */
  reading: [
    {
      group: "Books read to acquire AI skills",
      items: [
        "Generative AI and LLMs for Dummies",
        "The AI Product Manager's Handbook — 2nd edition, Irene Bratsis",
        "Agentic AI For Dummies"
      ]
    },
    {
      group: "Actively reading",
      items: [
        "Agentic Architectural Patterns for Building Multi-Agent Systems — Ali Arsanjani & Juan Pablo Bustos, Packt, 2026",
        "Building AI-Powered Financial Products: Use Responsible AI",
        "30 Agents Every AI Engineer Must Build"
      ]
    },
    {
      group: "Lined up for reading",
      items: [
        "Evals for Engineers",
        "RAG with Python Cookbook: Practical Recipes — Dominik Polzer, 2026"
      ]
    }
  ],

  /* -----------------------------------------------------------------
     BLOG

     Newest first is handled in code — order here does not matter.

     id      becomes the URL: post.html?id=<id>
     date    must be YYYY-MM-DD, or sorting and the printed date break
     draft   true hides it from the blog index, home and search
     tags    optional, shown as small labels under the title

     sections use the same vocabulary as items above — prose, list,
     note, table, figure — except `h` is optional here, so a post can
     open with plain paragraphs before its first heading.
     ----------------------------------------------------------------- */
  posts: [
    /* ---- These five product-sense cases render in Work under Case
       studies. They remain here to retain their publishing metadata,
       while site.js routes them through the Work renderer. ---- */
    {
      id: "langsmith-is-the-pm-control-room",
      date: "2026-08-31",
      draft: false,
      title: "LangSmith Is the PM Control Room for AI Products",
      summary:
        "A PM-readable note on why AI observability matters: traces explain failures, metrics expose cost and latency, and eval datasets stop teams from shipping regressions.",
      tags: ["LangSmith", "Observability", "Evals", "AI PM", "RAG"],
      sections: [
        {
          h: "The useful question",
          type: "prose",
          body: [
            "Most people ask the wrong question about AI products: <em>is the AI good?</em> That is too vague to manage. The better question is: <em>which step made it bad, slow, expensive, or unsafe?</em>",
            "That is what LangSmith gives a product team. It is an observability and evaluation layer for LLM apps. Observability means the system leaves evidence behind: prompts, retrieved documents, tool calls, model responses, errors, latency, token usage, and cost. Evaluation means the team can test whether a new version is actually better before it reaches users."
          ]
        },
        {
          h: "Traces turn mystery into diagnosis",
          type: "prose",
          body: [
            "A trace is the flight recorder for one user request. If a customer support agent gives a bad billing answer, the trace lets the team inspect the chain: what did the user ask, which documents were retrieved, which prompt was sent, which model answered, which tool ran, how long each step took, and what it cost.",
            "Without traces, the team argues from vibes. With traces, the conversation becomes specific: retrieval pulled the wrong policy, the prompt buried the key instruction, the tool timed out, or the model ignored the source. Those are different fixes."
          ]
        },
        {
          h: "Cost and latency are product decisions",
          type: "prose",
          body: [
            "Every AI feature has a trade-off between quality, speed, and money. A large reasoning model may be worth it for refunds, legal risk, clinical facts, or angry customers. It is probably wasteful for routine FAQs. In a RAG assistant, retrieving twenty chunks may improve coverage, but it also increases tokens, latency, and noise. Five high-quality chunks might beat twenty average ones.",
            "A PM should not ask engineering for <em>the best model</em>. The sharper request is: route easy work to deterministic logic, normal work to a cheaper model, and high-risk judgment to a stronger model. Then measure cost per successful task, not cost per model call."
          ]
        },
        {
          h: "Evals turn failures into launch gates",
          type: "prose",
          body: [
            "The best use of production failures is not blame; it is a dataset. When the product fails, save the example, label what good would have looked like, and add it to the regression set. Regression means an old failure should not come back in a new version.",
            "Different judges fit different jobs. Use code evaluators for objective rules, like rejecting jobs that require US work authorization. Use LLM-as-judge for qualitative calls, like whether a role genuinely matches agentic AI PM work. Use pairwise evaluation when choosing the better of two drafts is easier than scoring one in isolation. Use a composite score when launch depends on several signals at once: relevance, faithfulness, latency, and cost."
          ]
        },
        {
          h: "The dashboard I would ask for",
          type: "note",
          body: [
            "For any serious AI product, I want five numbers visible before launch: P50 latency, P99 latency, error rate, fallback rate, and cost per successful task. Then I want a quality score beside them, especially faithfulness for RAG products. The launch rule should be explicit: do not ship if latency crosses the threshold, faithfulness drops, or cost rises without a quality gain.",
            "LangSmith is not just a dashboard. It is the evidence layer that lets a PM choose deliberately where the product should be fast, where it should be cheap, and where it must slow down to be right."
          ]
        }
      ]
    },

    {
      id: "ai-agents-need-control-systems",
      date: "2026-08-31",
      draft: false,
      title: "AI Agents Need Control Systems, Not Just Better Prompts",
      summary:
        "A PM note on what turns an agent from a demo into a product: cost limits, threat checks, compliance gates, evals, and traces that prove where the system failed.",
      tags: ["AI agents", "Observability", "Evals", "Product management", "Governance"],
      sections: [
        {
          h: "The real lesson",
          type: "prose",
          body: [
            "The easy way to talk about AI agents is to talk about autonomy: give the model a goal, a few tools, and let it work. The harder and more useful question is: what stops it?",
            "After studying agent control systems and LangSmith observability side by side, my answer is clearer. A serious agent is not one model call. It is a product system with five control loops around it: cost, security, compliance, quality, and improvement."
          ]
        },
        {
          h: "Control loop 1: cost",
          type: "prose",
          body: [
            "Every model call has a price. A production agent should record tokens, model choice, timestamp, and cost for each call, then degrade gracefully when the budget is hit. Graceful degradation means the product switches to a cheaper or narrower mode instead of silently burning money or failing in front of the user.",
            "For a PM, this changes the roadmap conversation. The question is not <em>can the model answer?</em> It is <em>which requests deserve the expensive answer?</em> Customer refunds, security issues, and clinical facts may justify a larger model. Routine FAQ work probably does not."
          ]
        },
        {
          h: "Control loop 2: safety",
          type: "prose",
          body: [
            "Agents need zero-trust input handling: treat every prompt, file, and tool instruction as untrusted until checked. Prompt injection, identity spoofing, scripts, shell commands, and suspicious URLs should be detected before the agent acts.",
            "This is not paranoia. It is product design. If an agent can send email, edit records, move money, or call APIs, then bad input is no longer just bad text. It can become bad action."
          ]
        },
        {
          h: "Control loop 3: compliance",
          type: "prose",
          body: [
            "Compliance cannot live in a slide deck after launch. It needs to be inside the workflow as a gate: scan the action, assign risk, approve low-risk cases, escalate uncertain ones, and reject clear violations. The important product habit is writing the decision down as an audit trail, not trusting memory."
          ]
        },
        {
          h: "Control loop 4: observability",
          type: "prose",
          body: [
            "LangSmith makes the hidden system visible through traces. A trace is the full record of one request: prompts, retrieval, tool calls, model calls, errors, latency, token use, and cost. That matters because <em>the AI was wrong</em> is not a useful diagnosis. Was retrieval bad? Was the prompt weak? Did the tool fail? Did the model ignore evidence?",
            "Good observability turns complaints into datasets. The failures from production become eval examples, and evals become the launch gate for the next version."
          ]
        },
        {
          h: "Control loop 5: improvement",
          type: "prose",
          body: [
            "The best agents do not just recover from failure; they learn what kind of failure happened. If task completion drops, cost spikes, or latency crosses the agreed threshold, the system should create a hypothesis: change the prompt, change retrieval, route to a different model, or ask for human review.",
            "That last part matters. Self-improvement without approval is just another uncontrolled agent. The safer version is versioned adaptation: propose the change, test it against evals, keep the old version available, and record who approved the new one. Improvement becomes a product process, not a mysterious behaviour."
          ]
        },
        {
          h: "The PM takeaway",
          type: "note",
          body: [
            "A demo proves the agent can act once. A control system proves it can act repeatedly without surprising the business. The PM job is to define the thresholds: when to spend more, when to slow down, when to ask a human, when to block, and which failures must never repeat."
          ]
        }
      ]
    },

    {
      id: "nestle-nesgpt",
      date: "2026-08-05",
      draft: false,
      title: "NesGPT & the Nescafé Content Engine",
      org: "Nestlé",
      category: "breakdowns",
      industry: "FMCG · Marketing · Agentic AI",
      year: "2026",
      status: "Breakdown",
      effortDays: 3,
      effortLabel: "3 days of engineering",
      tagline: "The AI worked perfectly. That was the problem.",
      summary:
        "A private ChatGPT for 30,000 employees cut campaign production time 60% across 15 markets — " +
        "and produced content that was technically correct and culturally flat. Not a model problem. " +
        "A decision-rights problem.",
      tags: ["Governance", "Decision rights", "Prompt engineering", "Human-in-the-loop", "Zero-cost"],
      showHeroIntro: false,
      stats: [
        { v: "60%",  l: "faster campaign production" },
        { v: "15",   l: "markets affected" },
        { v: "₹0",   l: "incremental cost of the fix" }
      ],
      gate: {
        rule: "Cultural confidence < 3 / 5",
        pass: "NesGPT publishes on schedule",
        fail: "Routes to the local brand manager's review queue"
      },
      sections: [
        {
          h: "The problem",
          type: "prose",
          body: [
            "Nestlé built NesGPT, a private ChatGPT deployed to 30,000 employees, to run content pipelines for Nescafé across 15 markets. Campaign production time dropped 60%. But local brand managers felt sidelined — the AI produced technically correct but culturally flat content.",
            "The core tension: who owns the brand voice, the AI system or the local human? This is not a technology problem. The AI works. The question is which decisions the AI should own globally, and which must stay with local managers."
          ]
        },
        {
          h: "Root cause",
          type: "prose",
          body: [
            "The AI was trained on global brand guidelines but lacked local cultural context — slang, humour, regional sentiment, festival-specific language. The system centralised creative control without building in local override mechanisms. Local managers had no structured way to inject cultural nuance back into the pipeline."
          ]
        },
        {
          h: "Frameworks applied",
          type: "list",
          body: [
            "<strong>70% global AI</strong> — A shared global brand core handles scale, consistency and reusable campaign structure.",
            "<strong>20% local AI</strong> — Each market uses AI trained on local taste, language, humour, festivals and social context to adapt the global core.",
            "<strong>10% human creativity</strong> — Local teams add the judgement, originality and cultural nuance that makes the work feel truly native."
          ]
        },
        {
          h: "Decision rights matrix",
          type: "table",
          head: ["Global AI owns", "Local AI owns", "Local human owns"],
          body: [
            ["Brand logo usage & visual guidelines", "Local language, idioms and humour", "Cultural judgement and final brand voice"],
            ["Grammar, spelling and formatting", "Festival and event-specific adaptations", "Final approval on sensitive content"],
            ["Content volume, scheduling and asset reuse", "Market-specific keywords and local search context", "Influencer partnerships and local endorsements"],
            ["Global campaign structure and performance patterns", "Local trend signals and cultural relevance scoring", "Original creative direction and escalation decisions"]
          ]
        },
        {
          h: "Success metrics",
          type: "table",
          head: ["Metric", "Target", "Measurement"],
          body: [
            ["Local manager satisfaction", "> 80% approval", "Quarterly survey"],
            ["Cultural relevance score", "> 4.2 / 5 per market", "Content audit sampling"],
            ["Content production speed", "No more than 10% slower", "Pipeline throughput logs"],
            ["Budget impact", "Zero incremental cost", "Quarterly budget review"]
          ]
        },
        {
          h: "Rollout",
          type: "list",
          body: [
            "<strong>Week 1–2</strong> — Pilot in India and Brazil, the two highest-variation markets. Local managers build the first prompt libraries. Baseline the satisfaction score.",
            "<strong>Week 3–4</strong> — Confidence scoring goes into the pipeline. Low-confidence content routes to review queues. Collect override data.",
            "<strong>Month 2</strong> — Expand to 5 markets. Feed overrides back into the libraries. Measure the satisfaction delta.",
            "<strong>Month 3</strong> — All 15 markets. Quarterly prompt-library refresh becomes a standing cycle."
          ]
        },
      ],
      related: ["swiggy-instamart", "zomato-ops", "job-qualifier"]
    },

    {
      id: "mckinsey-lilli",
      date: "2026-08-04",
      draft: false,
      title: "Lilli, and the Death of Hourly Billing",
      org: "McKinsey",
      category: "breakdowns",
      industry: "Professional Services · Business Model",
      year: "2026",
      status: "Breakdown",
      effortDays: 5,
      effortLabel: "1 analyst-week + 5 pilot clients",
      tagline: "Every minute Lilli saves is a minute you cannot bill for.",
      summary:
        "An internal AI that searches 100,000 documents in seconds turned two days of research into two " +
        "hours. Everyone read that as a workforce crisis. It is a business model crisis that shows up " +
        "first as a workforce question.",
      tags: ["Business model", "Pricing", "Outcome-based", "Workforce", "AI enablement"],
      showHeroIntro: false,
      stats: [
        { v: "2 days → 2 hrs", l: "junior research time" },
        { v: "25,000",         l: "employees working with agents" },
        { v: "50%",            l: "outcome-priced target, year 2" }
      ],
      gate: {
        rule: "Can the outcome be measured and co-defined upfront?",
        pass: "Fixed fee, priced on what it produces",
        fail: "Stays hour-billed — and stays exposed"
      },
      sections: [
        {
          h: "The problem",
          type: "prose",
          body: [
            "McKinsey built Lilli — an internal AI that searches 100,000 documents, past case studies and expert transcripts in seconds. Junior consultants using Lilli produce in two hours what previously took two days.",
            "The surface tension: if a first-year with Lilli can do the work of a third-year, what is the career path? Partners are asking whether they are training people or just training them to use the tool.",
            "The deeper problem everyone is avoiding: if AI helps you deliver 10× faster, clients will eventually ask for 10× cheaper."
          ]
        },
        {
          h: "Three things shift when AI eats execution",
          type: "list",
          body: [
            "<strong>Pricing</strong> — Hours lose ground, outcomes win. Three-week projects close in three days and clients can tell. If your billing model is hours-based, your most productive tool is actively destroying your revenue model.",
            "<strong>Teams</strong> — The old pyramid had armies of juniors at the bottom. The new shape is narrow top to bottom. Agents do the volume, humans do the judgement.",
            "<strong>Speed</strong> — Clients are living the same 10× in their own workflows. A sprint ships in an afternoon; a designer round-trip becomes twenty minutes. You cannot hide behind slow delivery any more."
          ]
        },
        {
          h: "Root cause",
          type: "prose",
          body: [
            "McKinsey's entire value chain — hiring, training, promotion, billing — was built on two assumptions: research takes time, and clients pay for time. Lilli collapsed the first overnight. The market is collapsing the second. If clients shift to outcome-based pricing, internal assessment of juniors has to become outcome-based too. Judgement, not hours."
          ]
        },
        {
          h: "New performance metrics",
          type: "table",
          head: ["Old metric", "New metric", "Why"],
          body: [
            ["Research hours logged", "Insight quality score", "Speed is commoditised; judgement is not"],
            ["Documents reviewed", "Synthesis depth rating", "Lilli finds docs; humans connect dots"],
            ["Utilisation rate", "Client outcome attribution", "Billed hours ≠ value delivered"],
            ["Years of experience", "Skill velocity & judgement accuracy", "AI compresses the learning curve"],
            ["Billable hours per week", "Outcomes delivered per engagement", "Hours are a cost metric, not a value metric"]
          ]
        },
        {
          h: "The pricing shift",
          type: "table",
          head: ["Old model", "New model", "Transition mechanism"],
          body: [
            ["Bill per consultant per week", "Fixed fee per outcome delivered", "Pilot 5 engagements this quarter"],
            ["Scope by time estimate", "Scope by outcome definition", "Client co-defines success upfront"],
            ["Partner comp = book of hours", "Comp = locked equity tied to results", "Deferred over 2–3 years"],
            ["Junior value = time on project", "Junior value = quality of judgement", "Decision audit trail replaces timesheet"]
          ]
        },
        {
          h: "Rollout",
          type: "list",
          body: [
            "<strong>Month 1</strong> — Instrument Lilli for usage metadata. Baseline current performance. Identify 5 clients willing to pilot outcome pricing.",
            "<strong>Month 2</strong> — Pilot new metrics in one practice area. Ask the uncomfortable question: are the old-metric top performers the same people as the new-metric top performers?",
            "<strong>Month 3</strong> — Calibrate rubrics with engagement managers. Measure whether outcome-priced work is more profitable.",
            "<strong>Month 4–6</strong> — Firm-wide. Align promotion criteria. Move 20% of new engagements to outcome pricing.",
            "<strong>Year 2</strong> — 50% outcome-priced. Partner comp includes deferred equity. Junior intake down 40% by natural attrition, with each remaining junior producing 3× output."
          ]
        },
      ],
      related: ["goldman-analysts", "nestle-nesgpt", "alars"]
    },

    {
      id: "zomato-ops",
      date: "2026-08-03",
      draft: false,
      title: "AI-Led Operations & the Human Delivery Manager",
      org: "Zomato",
      category: "breakdowns",
      industry: "Consumer Tech · Operations",
      year: "2026",
      status: "Breakdown",
      effortDays: 4,
      effortLabel: "3–4 days of engineering",
      tagline: "The system was doing its job perfectly, and causing harm.",
      summary:
        "50 million decisions a day. During a heat wave the AI optimised for speed and cost and routed " +
        "riders into unsafe conditions. The AI was not wrong — its objective function simply had no " +
        "safety constraint in it.",
      tags: ["Safety constraints", "Concept drift", "Gig workers", "Ethics", "Pre-processing"],
      showHeroIntro: false,
      stats: [
        { v: "50M",   l: "decisions per day" },
        { v: "42°C",  l: "heat index cut-off" },
        { v: "50", l: "lines of code to fix it", suffix: true }
      ],
      gate: {
        rule: "Heat index > 42°C, AQI > 300, or rider past 6 continuous hours",
        pass: "Assignment enters the optimiser",
        fail: "Removed before the optimiser ever sees it"
      },
      sections: [
        {
          type: "prose",
          body: [
            "Zomato deployed AI agents to manage delivery partner allocation, dynamic pricing and restaurant ranking in real time — 50 million decisions a day. During a heat wave, the AI optimised for speed and cost but routed delivery partners into unsafe conditions. No human had oversight of the real-time decision.",
            "The root cause is not that the AI was wrong. Its optimisation function had no safety constraint. Speed and cost were inputs; rider welfare was not. That is a system-architecture problem, not a human-oversight problem."
          ]
        },
        {
          h: "Frameworks applied",
          type: "list",
          body: [
            "<strong>Rider-safety system design</strong> — The system was never designed around rider safety. During a heat wave, live Weather API data must be part of the recommendation logic so safety constraints are applied before speed or cost optimisation."
          ]
        },
        {
          h: "Safety constraints, baked into the model",
          type: "table",
          head: ["Condition", "AI action", "Data source"],
          body: [
            ["Heat index > 42°C", "Suspend outdoor deliveries in zone", "Weather API"],
            ["Rider continuous hours > 6", "Force break, reassign pending orders", "Rider app login timestamp"],
            ["AQI > 300 (hazardous)", "Reduce delivery radius by 50%", "Government AQI API"],
            ["Flood or storm alert active", "Pause all deliveries in affected zones", "IMD weather alerts"],
            ["Rider declines 3+ in a row", "Auto-flag for welfare check", "App assignment logs"]
          ]
        },
        {
          h: "Rollout",
          type: "list",
          body: [
            "<strong>Week 1</strong> — Wire the weather and AQI APIs into the assignment pipeline. Add hard constraints as rules that run <em>before</em> the optimiser. Three to four days of engineering.",
            "<strong>Week 2–3</strong> — Shadow mode. Run constraints alongside the live system and log how many assignments would have been blocked. Measure the speed and cost impact honestly.",
            "<strong>Week 4</strong> — Activate in three cities. Watch delivery delays against safety blocks.",
            "<strong>Month 2</strong> — All cities. Add the rider-hours constraint. Weekly safety report generates itself."
          ]
        },
      ],
      related: ["swiggy-instamart", "nestle-nesgpt", "investor-agent"]
    },

    {
      id: "goldman-analysts",
      date: "2026-08-02",
      draft: false,
      title: "AI Coding & the Disappearing Analyst Class",
      org: "Goldman Sachs",
      category: "breakdowns",
      industry: "Finance · Workforce Strategy",
      year: "2026",
      status: "Breakdown",
      effortDays: 20,
      effortLabel: "policy change + 40-hour curriculum",
      tagline: "The analyst programme was always two things. AI only broke one of them.",
      summary:
        "AI cut equity research from four hours to 25 minutes. Goldman still recruits hundreds of " +
        "analysts a year. You cannot cut junior headcount without cutting your future Managing " +
        "Directors — the labour function and the leadership pipeline were never the same thing.",
      tags: ["Workforce", "AI enablement", "Role design", "Hiring", "Policy change"],
      showHeroIntro: false,
      stats: [
        { v: "4 hrs → 25 min", l: "per equity research report" },
        { v: "50%",            l: "headcount by year 3" },
        { v: "3×",             l: "output per remaining analyst" }
      ],
      gate: {
        rule: "Is the task AI-replaceable?",
        pass: "AI produces it, the analyst validates and adds proprietary insight",
        fail: "Human-essential: judgement, narrative, client advisory"
      },
      sections: [
        {
          h: "Frameworks applied",
          type: "list",
          body: [
            "<strong>Selling decisions and insights, not hours</strong> — The analyst's value shifts from producing outputs (reports) to producing insight (theses, advisory, risk judgement). The hard part is cerebral and emotional, not technical.",
            "<strong>AI-augmented workflow</strong> — Standardise the AI-augmented workflow so <em>analyst</em> means 100% AI-amplified decision-maker, not 70% AI-replaced worker."
          ]
        },
        {
          h: "Year 1: redefine the role",
          type: "table",
          head: ["Current role (AI does 70%)", "New role (AI amplifies)", "Hiring impact"],
          body: [
            ["Write equity research reports", "Validate AI research, add proprietary insight", "Hire for judgement, not speed"],
            ["Build financial models", "Stress-test AI models, find edge cases", "Hire for critical thinking"],
            ["Compile data for presentations", "Craft client narratives, present theses", "Hire for communication"],
            ["Process compliance checks", "Monitor AI compliance for false negatives", "Hire for regulatory knowledge"]
          ]
        },
        {
          h: "Headcount model",
          type: "list",
          body: [
            "<strong>Year 1</strong> — Cut new analyst intake 30%. Not firing; natural attrition. Redirect the saving into the training budget.",
            "<strong>Year 2</strong> — A further 20%. Those who remain are AI-augmented analysts with higher per-person output. Revenue per analyst should double.",
            "<strong>Year 3</strong> — Stabilise at 50% of original headcount, each producing 3× output. Division output holds or rises. Payroll down roughly 40% over three years.",
            "<strong>Token-cost check</strong> — Before changing headcount, track token cost per dollar of value delivered. Scale only when AI creates more value in revenue, time saved or risk avoided than it consumes in model spend."
          ]
        },
        {
          h: "The board pitch",
          type: "note",
          body: [
            "Current cost: 200 analysts × ₹80 LPA = ₹160 Cr a year. Year 3: 100 analysts × ₹1.2 Cr — higher salary for a higher-skilled role — = ₹120 Cr a year. Saving of ₹40 Cr a year at the same or better output.",
            "<em>AI replaces job descriptions, not jobs. It should create more opportunity and more roles—not fewer.</em>"
          ]
        },
        {
          h: "Rollout",
          type: "list",
          body: [
            "<strong>Q1</strong> — Audit analyst tasks. Sort into AI-replaceable and human-essential. Tell current analysts before they hear it elsewhere: transparency, not surprise.",
            "<strong>Q2</strong> — Launch the AI-augmented workflow training. Forty hours per analyst on tool use, prompting, and output validation.",
            "<strong>Q3</strong> — Pilot new hiring criteria for one recruiting cycle. Measure whether the new cohort is genuinely better at judgement tasks.",
            "<strong>Year 2–3</strong> — Scale. Track revenue per analyst quarterly and adjust headcount on measured productivity, not projections."
          ]
        },
      ],
      related: ["mckinsey-lilli", "zomato-ops", "job-qualifier"]
    },

    {
      id: "swiggy-instamart",
      date: "2026-08-01",
      draft: false,
      title: "Agentic AI in Supply Chain & Dark Store Management",
      org: "Swiggy Instamart",
      category: "breakdowns",
      industry: "Quick Commerce · Supply Chain",
      year: "2026",
      status: "Breakdown",
      effortDays: 10,
      effortLabel: "~10 days of engineering",
      tagline: "It treated tomatoes the same as rice.",
      showHeroIntro: false,
      summary:
        "During a festival surge the AI over-ordered perishables in 12 cities on last year's data. " +
        "₹2 crore spoiled before a human noticed. A forecasting model with no spoilage-aware ordering " +
        "strategy, and no continuous monitoring to catch it.",
      tags: ["Causal AI", "Data drift", "Continuous monitoring", "Config change", "Autonomy tiers"],
      stats: [
        { v: "₹2 Cr", l: "stock spoiled" },
        { v: "12",    l: "cities affected" },
        { v: "< 2%",  l: "target spoilage rate" }
      ],
      gate: {
        rule: "Shelf life < 5 days",
        pass: "Standard forecasting applies",
        fail: "Order capped at (shelf life − 1) days of supply"
      },
      sections: [
        {
          type: "prose",
          body: [
            "Swiggy Instamart uses AI agents to manage inventory replenishment, demand forecasting and dark store staffing across 500+ locations. During a festival surge, the AI over-ordered perishables in 12 cities based on last year's data. By the time a human noticed, ₹2 crore in stock had spoiled. The system was not wrong — it was working with the data it had.",
            "The diagnosis: the AI had no spoilage-aware constraint on ordering volume. It treated tomatoes the same as rice. And it had no mechanism to split large orders into smaller batches against real-time sales velocity."
          ]
        },
        {
          h: "Frameworks applied",
          type: "list",
          body: [
            "<strong>Festival surge resilience (Causal AI + data drift)</strong> — During a festival surge, last year's baseline becomes unreliable. Rather than replaying last year's volumes, analyse what caused the spike — which products, regions and timing drove it — then place orders against those real demand drivers.",
            "<strong>Continuous monitoring and throttling (MLOps)</strong> — Monitor orders against real-time sales continuously. When ordering diverges from live demand, automatically throttle or adjust the pipeline before excess inventory or stock-outs compound."
          ]
        },
        {
          h: "Feature 1 — batch ordering",
          type: "prose",
          body: [
            "Instead of one bulk order before a festival, split it into waves. Wave 1 is 40% of forecast. Wait 48 hours. Wave 2 adjusts on actual sales velocity. Wave 3 fine-tunes. The AI already tracks real-time sales — this just makes it act on that data between waves instead of committing everything upfront."
          ]
        },
        {
          h: "Feature 2 — shelf-life constraint",
          type: "table",
          head: ["Product category", "Shelf life", "Max order horizon", "Auto-discount trigger"],
          body: [
            ["Leafy greens", "2 days", "Max 2-day supply", "Day 1: 15% off"],
            ["Dairy & paneer", "4 days", "Max 3-day supply", "Day 3: 20% off"],
            ["Fruits (ripe)", "3 days", "Max 2-day supply", "Day 2: 15% off"],
            ["Dry staples (rice, dal)", "180+ days", "Standard forecasting", "—"]
          ]
        },
        {
          h: "Feature 3 — inter-store redistribution",
          type: "prose",
          body: [
            "If Store A over-ordered curd and Store B within 10km is running low, redistribute using the existing delivery fleet rather than letting it spoil in A and ordering fresh for B. The inventory data exists. The fleet exists. Connect the dots."
          ]
        },
        {
          h: "Decision architecture",
          type: "table",
          head: ["Decision type", "AI action", "Constraint"],
          body: [
            ["Routine daily replenishment", "Fully autonomous", "Shelf-life cap on perishables"],
            ["Festival / surge ordering", "Autonomous but batched", "Max 40% of forecast in wave 1"],
            ["Perishable past 70% of shelf life", "Auto-trigger discount", "Pushed to app as deals near you"],
            ["Forecast confidence < 60%", "Order conservatively at 50%", "Auto-logged for post-event review"],
            ["Adjacent store has excess", "Auto-trigger redistribution", "Within 10km radius only"]
          ]
        },
        {
          h: "Rollout",
          type: "list",
          body: [
            "<strong>Week 1</strong> — Tag products with shelf-life metadata; most of it already sits in supplier catalogues. Add the batch-ordering flag. Three days.",
            "<strong>Week 2</strong> — Implement the shelf-life cap in the ordering function. One day.",
            "<strong>Week 3–4</strong> — Shadow mode. How much spoilage would this have prevented? Put a number on it.",
            "<strong>Month 2</strong> — Three cities live. Add redistribution logic.",
            "<strong>Month 3</strong> — Full rollout with auto-discount triggers. Target under 2% spoilage on perishables, against an estimated 8–12% today."
          ]
        },
        {
          h: "How this actually ships",
          type: "note",
          body: [
            "<strong>Batch ordering:</strong> change <code>place_order(total_forecast)</code> to <code>place_order(total_forecast * 0.4)</code> and schedule a review trigger 48 hours later. One line of logic. Ship today.",
            "<strong>Shelf-life cap:</strong> add a <code>shelf_life_days</code> column, then cap order quantity at daily average × shelf life. One column and one if-statement. Two days.",
            "<strong>Redistribution:</strong> query nearby stores for excess before placing a supplier order. A SQL query and a transfer API call. One week.",
            "Ten days of engineering. Zero new cost. Estimated saving of ₹2 crore per festival season."
          ]
        }
      ],
      related: ["zomato-ops", "nestle-nesgpt", "investor-agent"]
    },

    {
      id: "how-to-add-a-post",
      title: "How to add a post (internal note)",
      date: "2026-08-12",
      summary: "Kept as a draft so it never shows publicly. Flip draft to false only if you want the world to read your own cheat sheet.",
      tags: ["Internal"],
      draft: true,
      sections: [
        { h: "Three steps", type: "list", body: [
          "Copy one of the entries in <code>posts</code> in <code>assets/js/data.js</code>.",
          "Change <code>id</code> — it becomes the URL, <code>post.html?id=your-id</code>. Lowercase, hyphens, no spaces.",
          "Write the <code>sections</code>. Save, refresh the browser. There is no build step."
        ]},
        { h: "Section types", type: "table",
          head: ["type", "What it renders", "body shape"],
          body: [
            ["prose", "Paragraphs", "array of strings"],
            ["list", "Bulleted list", "array of strings, HTML allowed"],
            ["note", "Cyan-ruled callout, for the punchline", "array of strings"],
            ["table", "A table", "needs head: [] and body: [[]]"],
            ["figure", "SVG diagram from the FIGURE map in site.js", "array of { key, tag, name, cap }"]
          ]
        },
        { h: "Two things that will catch you out", type: "list", body: [
          "<strong>Quotes.</strong> The text is JavaScript, so an apostrophe inside a double-quoted string is fine, but a double quote needs escaping as <code>\\\"</code>.",
          "<strong>The date.</strong> Must be <code>YYYY-MM-DD</code>. Any other format sorts wrongly and prints as <em>Invalid Date</em>."
        ]}
      ]
    }
  ]
};
