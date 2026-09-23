export type Project = {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  tags: string[];
  github: string;
  liveUrls?: { label: string; url: string }[];
  problem: string;
  howItWorks: { title: string; description: string }[];
  techStack: string[];
};

export const projects: Project[] = [
  {
    slug: "anvaya",
    name: "Anvaya — Self-Composing Landing Page",
    icon: "palette",
    shortDescription:
      "A guardrailed, self-composing landing page that personalizes itself per visitor from URL signals — an AI-PM case study on segmentation, content guardrails, and zero-click search.",
    tags: ["PM Case Study", "Personalization", "Growth"],
    github: "https://github.com/sayanrup/Anvaya",
    liveUrls: [
      {
        label: "Launch (GitHub Pages)",
        url: "https://sayanrup.github.io/Anvaya/",
      },
    ],
    problem:
      "Search is going zero-click — a growing share of buyers now form their first impression of a brand from an AI assistant's summary, not from the page itself. That changes the brief two ways: the page now has two readers (the human deciding on a high-consideration purchase, and the machine deciding what to say about the brand) who must reach the same correct understanding, and the classic 'page A vs page B for everyone' experiment quietly breaks once the page composes itself per visitor. This project is an AI-PM exercise that takes both consequences seriously instead of hand-waving past them.",
    howItWorks: [
      {
        title: "Compose",
        description:
          "Reads four signals straight from the URL — intent, source, city, and connection speed — and recomposes the headline, primary answer block, and CTA for that specific visitor, with zero backend, build step, or bundler.",
      },
      {
        title: "Guard",
        description:
          "Every piece of copy is drawn from one frozen, human-approved content library; a canRender() guardrail layer validates pricing, timelines, and claims before anything renders — so personalization can compose and reorder approved claims, but never fabricate a new one.",
      },
      {
        title: "Measure",
        description:
          "Reframes the experiment as segmented testing — comparing composition-rule v1 vs v2 within a segment, not generic vs personalized across everyone — with qualified-consultation-booking rate per segment as the single leading metric, since the real sales cycle runs too long to power fast iteration.",
      },
    ],
    techStack: ["Vanilla JavaScript", "HTML", "CSS", "No framework or bundler"],
  },
  {
    slug: "filter-genie",
    name: "Search Filter Generator",
    icon: "search",
    shortDescription:
      "Turns SERP keywords, internal search data, and category research into a tiered, evidence-backed set of search page filters — the way a marketplace PM would derive them by hand, at scale.",
    tags: ["Search", "Marketplace", "AI"],
    github: "https://github.com/sayanrup/filter-genie",
    problem:
      "Designing search filters for a marketplace category is normally a slow, judgment-heavy exercise — mining SERP and internal search keywords, weighing a category manager's spec rankings, and checking whether sellers actually fill in the fields a filter would depend on. It doesn't scale past a handful of categories a year. This tool encodes that exact analyst process into a repeatable, auditable LLM workflow so it can run against any category's data on demand.",
    howItWorks: [
      {
        title: "Feed",
        description:
          "Paste or upload up to five evidence sources per category: Google SERP keywords, internal search keywords, category context notes, a category manager's spec importance ranking, and sample product listings.",
      },
      {
        title: "Analyze",
        description:
          "An LLM (your own OpenRouter or LiteLLM key) mines every keyword into filter-dimension buckets, scores each dimension's discriminating power against real volume, and cross-checks proposed filters against actual listing fill-rates before recommending them.",
      },
      {
        title: "Recommend",
        description:
          "Outputs a ranked Tier 1 / Tier 2 / Tier 3 filter set — each with a UI pattern, buyer-facing values, a confidence score, and a rationale that must cite a real number from the data. A self-check pass catches unsupported claims before the result is shown.",
      },
    ],
    techStack: ["React", "TanStack Start", "TypeScript", "OpenRouter / LiteLLM"],
  },
  {
    slug: "crypto-trading-bot",
    name: "Crypto Trading Bot (CoinDCX)",
    icon: "target",
    shortDescription:
      "A support/resistance + structure-shift trading bot for CoinDCX INR futures — fully rule-based live execution, with a DeepSeek backtest filter to measure whether an LLM adds edge.",
    tags: ["Trading", "Automation", "Python"],
    github: "https://github.com/sayanrup/Crypto-Trading-Bot",
    problem:
      "Most retail algo-trading setups either rely on black-box signals or apply indicators without managing the full trade lifecycle. This bot separates concerns cleanly across isolated modules — zone detection, signal confirmation, risk management, and execution — while keeping the live path 100% deterministic. The LLM is wired only into the backtest to answer a specific research question: would a confidence filter have added edge on top of the mechanical strategy?",
    howItWorks: [
      {
        title: "Detect",
        description:
          "zones.py builds support/resistance zones from 4h pivot highs/lows. signals.py scans 5m candles for a valid setup — zone touch, structure shift, trigger candle, and overextension check — and outputs a candidate signal.",
      },
      {
        title: "Execute",
        description:
          "risk.py sizes the position and manages stop, breakeven, and trailing mechanically. exchange.py places the order via hand-rolled HMAC-signed CoinDCX REST calls with 3-attempt retry and confirmation. Leverage is hard-locked at 1x — every trade is measured by win rate and R-multiple, never a P&L target.",
      },
      {
        title: "Research",
        description:
          "backtest.py replays history through the same signal and risk logic. With --use-filter, filter.py scores each candidate via DeepSeek (OpenRouter) to measure whether an LLM confidence layer improves outcomes. Every trade logs source (rule_only vs filtered) and origin (live vs backtest) so dashboard.html can compare them directly.",
      },
    ],
    techStack: ["Python", "CoinDCX REST API", "DeepSeek via OpenRouter", "Chart.js", "HMAC Auth"],
  },
  {
    slug: "stock-trading-bot",
    name: "Stock Trading Bot (NSE)",
    icon: "target",
    shortDescription:
      "A rule-based intraday support/resistance bot for NSE equity cash via Dhan's API — the crypto bot's architecture rebuilt for a broker with real margin limits and a mandatory square-off.",
    tags: ["Trading", "Automation", "Python"],
    github: "https://github.com/sayanrup/Stock-Trading-Bot",
    problem:
      "Intraday equity trading demands the same discipline as crypto — deterministic execution, disciplined risk management, rigorous backtesting — but a completely different broker API, market calendar, and risk model: real fund and margin limits instead of an assumed leverage multiplier, and a hard mandatory square-off before every close since no position may carry overnight. This bot reuses the proven zones/signals/risk architecture from the crypto bot, rebuilt directly on Dhan's official SDK.",
    howItWorks: [
      {
        title: "Detect",
        description:
          "zones.py clusters 1-day swing highs/lows into support/resistance zones. signals.py looks for a structure shift — price breaking the last confirmed swing high/low — combined with a strong trigger candle at an HTF zone on the 15-minute timeframe.",
      },
      {
        title: "Execute",
        description:
          "risk.py sizes positions against Dhan's real fund limit and margin-calculator response for that symbol — never an assumed leverage multiplier — then bot-manages every stop, breakeven, and ATR-trailing exit itself by polling price and sending explicit market orders, rather than trusting Dhan's server-side SL triggers.",
      },
      {
        title: "Square off",
        description:
          "bot.py force-closes every open position as market close approaches, overriding the strategy's own exit logic entirely — no overnight positions, ever. DeepSeek (via OpenRouter) scores confidence only in offline backtesting against a rule-only baseline; it is never imported by the live bot.",
      },
    ],
    techStack: ["Python", "Dhan API (dhanhq SDK)", "DeepSeek via OpenRouter", "Chart.js"],
  },
  {
    slug: "quality-audit-agent",
    name: "Quality Audit Agent",
    icon: "target",
    shortDescription:
      "An AI auditor that checks buy leads and product listings for quality issues using vision-capable models.",
    tags: ["Leads", "Quality", "AI"],
    github: "https://github.com/sayanrup/Lead-Quality-Audit-Agent",
    liveUrls: [
      {
        label: "Launch (GitHub Pages)",
        url: "https://sayanrup.github.io/Lead-Quality-Audit-Agent/",
      },
    ],
    problem:
      "Marketplaces collect leads and product listings faster than anyone can manually review them for quality. Mismatched specs, vague single-word titles, leaked PII, off-platform selling intent, and implausible quantities or prices slip through — degrading buyer trust and wasting sales effort on bad leads.",
    howItWorks: [
      {
        title: "Input",
        description:
          "Paste a JSON lead object, upload a screenshot, or provide a product URL — no setup beyond an OpenRouter API key stored locally in the browser.",
      },
      {
        title: "Audit",
        description:
          "Runs 5 lead-quality checks (spec/title mismatch, single-word title enrichment, PII detection, selling-intent flagging, implausible quantity) and 3 product-quality checks using vision analysis against product imagery — with rule-based gating to minimise API calls.",
      },
      {
        title: "Flag",
        description:
          "Returns structured, per-check results so low-quality leads and listings can be triaged or rejected before they reach a human reviewer.",
      },
    ],
    techStack: ["JavaScript", "HTML", "CSS", "OpenRouter Vision API"],
  },
  {
    slug: "survive-the-z",
    name: "Vibe Coded RPG Game",
    icon: "gamepad",
    shortDescription:
      "A browser-based zombie survival RPG with an AI Game Master that narrates your choices in real time.",
    tags: ["Game", "RPG", "AI"],
    github: "https://github.com/sayanrup/Survive_The_Z",
    liveUrls: [
      {
        label: "Launch (GitHub Pages)",
        url: "https://sayanrup.github.io/Survive_The_Z/",
      },
    ],
    problem:
      "Most browser games are static — the same encounters and outcomes for every player, with no room for the unexpected actions people actually want to try. Survive The Z explores what happens when an LLM sits inside the game loop itself, turning free-text player actions into narrated consequences instead of a fixed menu of choices.",
    howItWorks: [
      {
        title: "Survive",
        description:
          "Scavenge for supplies, craft weapons and medical kits, and manage hunger, thirst, stamina, and health while exploring a map of risk/reward locations.",
      },
      {
        title: "Fight",
        description:
          "Turn-based combat against different zombie types, with equippable weapons and armor that change your odds.",
      },
      {
        title: "Narrate",
        description:
          "An AI Game Master panel takes free-text actions and uses a live LLM (via OpenRouter, with a choice of models or your own API key) to dynamically narrate outcomes and adjust game state — with a classic offline mode for play without an API key.",
      },
    ],
    techStack: ["JavaScript (ES Modules)", "HTML", "CSS", "OpenRouter LLM API"],
  },
  {
    slug: "youtube-audio-story",
    name: "AI YouTube Story Pipeline",
    icon: "message",
    shortDescription:
      "An end-to-end AI pipeline that turns episode outlines into narrated YouTube videos — scripts, images, voice, subtitles, and upload, fully automated.",
    tags: ["AI", "Automation", "YouTube"],
    github: "https://github.com/sayanrup/Youtube_Audio_Story",
    problem:
      "Producing a consistent AI-narrated YouTube channel means coordinating LLMs, image generators, TTS engines, video editors, and upload tools — each with different inputs and failure modes. One broken step means a half-assembled episode. This pipeline collapses all seven stages into a single orchestrated run driven by an Excel workbook per episode.",
    howItWorks: [
      {
        title: "Write",
        description:
          "Takes an episode outline from an Excel workbook, generates a full script via LLM (OpenRouter), and creates matching AI images using Flux Schnell on fal.ai.",
      },
      {
        title: "Produce",
        description:
          "Converts the script to narration with Kokoro TTS (local ONNX execution), auto-generates SRT and ASS subtitles, and assembles the full video with Ken Burns effects and color grading — plus a 9:16 YouTube Shorts cut.",
      },
      {
        title: "Publish",
        description:
          "Generates an AI thumbnail (background + text overlay) and SEO-optimized metadata, then uploads the long-form video and Short to YouTube automatically. Individual stages can be skipped or resumed.",
      },
    ],
    techStack: ["Python", "OpenRouter API", "Flux Schnell (fal.ai)", "Kokoro TTS", "FFmpeg", "YouTube API"],
  },
  {
    slug: "html-audit-agent",
    name: "HTML Audit Agent",
    icon: "search",
    shortDescription:
      "Audits any URL for HTML quality, SEO issues, and accessibility violations — full report in seconds.",
    tags: ["SEO", "HTML", "Automation"],
    github: "https://github.com/sayanrup/HTML_Auditor_Agent",
    liveUrls: [
      {
        label: "Launch (Railway)",
        url: "https://htmlauditoragent-production.up.railway.app/",
      },
      {
        label: "Launch (GitHub Pages)",
        url: "https://sayanrup.github.io/HTML_Auditor_Agent/html-audit-agent.html",
      },
    ],
    problem:
      "Engineering and marketing teams ship pages faster than anyone can review them manually. Missing meta tags, broken canonicals, slow Core Web Vitals, and malformed headings slip into production silently — eroding organic rankings and user experience without anyone noticing until the traffic drop shows up in a dashboard weeks later.",
    howItWorks: [
      {
        title: "Submit",
        description:
          "Paste any URL into the agent. No crawl config needed — it works on a single page or a full-site endpoint.",
      },
      {
        title: "Audit",
        description:
          "The agent fetches the rendered HTML, parses semantic structure, checks meta tags, headings, links, image alt text, and schema markup against 40+ rules.",
      },
      {
        title: "Report",
        description:
          "Produces a prioritised, human-readable report with issue severity, impacted elements, and specific fix recommendations.",
      },
    ],
    techStack: ["HTML", "JavaScript", "CSS", "SEO Rules Engine"],
  },
  {
    slug: "kpi-analyzer-agent",
    name: "KPI Analyzer Dashboard",
    icon: "target",
    shortDescription:
      "Upload your KPI data and get instant AI-driven analysis, trend detection, and actionable insights.",
    tags: ["Analytics", "KPI", "AI"],
    github: "https://github.com/sayanrup/KPI_Analyzer_Dashboard",
    liveUrls: [
      {
        label: "Launch (GitHub Pages)",
        url: "https://sayanrup.github.io/KPI_Analyzer_Dashboard/KPI_dashboard.html",
      },
    ],
    problem:
      "Business teams sit on dashboards full of KPI data but struggle to move from numbers to decisions. Identifying the metric that actually moved, why it moved, and what to do next typically requires an analyst, a BI query, and a meeting — when the answer is often already in the data.",
    howItWorks: [
      {
        title: "Upload",
        description:
          "Paste or upload your KPI dataset — revenue, conversions, churn, engagement, or any business metric you track.",
      },
      {
        title: "Analyze",
        description:
          "The agent detects trends, outliers, period-on-period changes, and correlations across your metrics automatically.",
      },
      {
        title: "Insight",
        description:
          "Surfaces the 3–5 most actionable findings with plain-language explanations — no SQL, no BI tool required.",
      },
    ],
    techStack: ["JavaScript", "HTML", "CSS", "Data Visualization", "AI Analysis"],
  },
  {
    slug: "job-hunt",
    name: "Job Search Automation",
    icon: "target",
    shortDescription:
      "Automates job applications end-to-end — scans Gmail for leads, generates tailored CVs and cover letters via AI, and saves everything to Drive, Gmail, and Sheets.",
    tags: ["Automation", "AI", "Jobs"],
    github: "https://github.com/sayanrup/Job_Hunt",
    liveUrls: [
      {
        label: "Launch (GitHub Pages)",
        url: "https://sayanrup.github.io/Job_Hunt",
      },
      {
        label: "Launch (AppScript)",
        url: "https://script.google.com/macros/s/AKfycbzi6fzezTyeyT_BiW4AQnVWCkc5JxWlTbyAZxvfwcOS6CnwjkFoNXc9g2kOGbRjmu2L/exec",
      },
    ],
    problem:
      "Job hunting at scale means repeating the same manual loop for every opening: open the email, read the JD, rewrite your CV, draft a cover letter, send an outreach message, log it in a tracker. The work isn't skilled — it's just slow. This tool collapses that loop into a single browser session with no backend and no data leaving your Google account.",
    howItWorks: [
      {
        title: "Scan",
        description:
          "Connects to Gmail via OAuth 2.0 and scans for job suggestion emails from Naukri, LinkedIn, and Instahyre over a 1, 3, or 7-day window — no server, no data stored outside your browser.",
      },
      {
        title: "Generate",
        description:
          "Uses Claude (via OpenRouter) to create a tailored CV, cover letter, and LinkedIn outreach message for each opportunity — customised to the job description automatically.",
      },
      {
        title: "Save",
        description:
          "Uploads CVs to Google Drive, creates Gmail drafts, and logs every application in Google Sheets. Mark an application as Sent and the CV is auto-deleted on the next run.",
      },
    ],
    techStack: [
      "JavaScript (ES Modules)",
      "HTML",
      "CSS",
      "OpenRouter API",
      "Gmail API",
      "Google Drive API",
      "Google Sheets API",
    ],
  },
  {
    slug: "mafia-life",
    name: "Underworld: Mafia Life",
    icon: "gamepad",
    shortDescription:
      "A crime syndicate management RPG — rise from Associate to Boss while Claude generates noir narrative flavor for every event.",
    tags: ["Game", "RPG", "AI"],
    github: "https://github.com/sayanrup/Mafia_Life",
    liveUrls: [
      {
        label: "Launch (GitHub Pages)",
        url: "https://sayanrup.github.io/Mafia_Life/",
      },
    ],
    problem:
      "Crime syndicate management games are usually either deep simulations with dry, repetitive text, or narrative-heavy games with shallow systems. Underworld explores what happens when a deterministic management sim — territory, crew, money, heat — is paired with an LLM that writes only the atmosphere, so every operation, shakedown, and turf war reads like its own scene without ever touching the underlying numbers.",
    howItWorks: [
      {
        title: "Build",
        description:
          "Create your character and climb the ranks from Associate to Boss in a procedurally named city, managing three actions per day across crew, territory, and finances.",
      },
      {
        title: "Manage",
        description:
          "Run businesses, extortion rackets, and money laundering while balancing reputation against heat from police, detectives, and federal agents — recruit and equip crew, and navigate gang and cartel relationships.",
      },
      {
        title: "Narrate",
        description:
          "A Claude-powered module (via the Anthropic API, with your own key stored locally) generates short noir flavor text for events while every outcome stays fully deterministic — and the game degrades gracefully to plain text without a key.",
      },
    ],
    techStack: ["JavaScript", "HTML", "CSS", "Claude API"],
  },
  {
    slug: "bug-tracker",
    name: "Bug Tracker Dashboard",
    icon: "search",
    shortDescription:
      "Upload your bug export and instantly track SLA breach rates by priority, manage exceptions, and monitor closure performance — fully client-side.",
    tags: ["Analytics", "SLA", "Dashboard"],
    github: "https://github.com/sayanrup/Bug_Tracker",
    liveUrls: [
      {
        label: "Launch (GitHub Pages)",
        url: "https://sayanrup.github.io/Bug_Tracker/",
      },
    ],
    problem:
      "Bug closure SLA tracking typically lives in a shared spreadsheet that goes stale, or in a BI tool that needs a query every time. Teams lack a fast, filterable view of which bugs are breaching their TAT windows and why — so breach counts get reported but exceptions never get documented.",
    howItWorks: [
      {
        title: "Upload",
        description:
          "Upload any bug export in Excel or CSV format — the dashboard auto-detects and maps column headers with no manual config needed.",
      },
      {
        title: "Track",
        description:
          "Calculates closure deadlines using working-day rules (Mon–Fri, excluding holidays) and priority-based TAT windows: High (2 days), Medium (7 days), Low (30 days).",
      },
      {
        title: "Manage",
        description:
          "Flag breached bugs, mark exceptions as Accepted with notes, and filter by date, priority, status, project, or assignee. All settings and accepted exceptions persist in localStorage — no backend required.",
      },
    ],
    techStack: ["JavaScript", "HTML", "CSS", "Chart.js", "SheetJS"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
