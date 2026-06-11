export type Agent = {
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

export const agents: Agent[] = [
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
    slug: "survive-the-z",
    name: "Survive The Z",
    icon: "gamepad",
    shortDescription:
      "A browser-based zombie survival RPG with an AI Game Master that narrates your choices in real time.",
    tags: ["Game", "RPG", "AI"],
    github: "https://github.com/sayanrup/Survive_The_Z",
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
];

export const getAgent = (slug: string) => agents.find((a) => a.slug === slug);
