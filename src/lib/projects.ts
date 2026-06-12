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
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
