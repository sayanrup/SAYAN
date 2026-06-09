import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sayan Samanta" },
      {
        name: "description",
        content:
          "Product Manager with 5+ years at IndiaMART — AI, growth, and marketplace products at 22M+ MAU scale.",
      },
      { property: "og:title", content: "About — Sayan Samanta" },
      {
        property: "og:description",
        content:
          "Product Manager with 5+ years at IndiaMART — AI, growth, and marketplace products at 22M+ MAU scale.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const experience = [
  {
    company: "IndiaMART",
    period: "Apr 2022 – Present",
    note: "Promoted from APM to PM within 2 years.",
    roles: [
      {
        title: "Product Manager — Omnichannel Product Pages",
        bullets: [
          "Owning product, growth, SEO, and platform initiatives across App, Desktop, and Mobile spanning 45M+ indexed product pages and 22M+ MAU.",
          "Spearheaded next-gen product page redesign across all platforms — 10% MoM uplift in engagement funnel metrics through stronger trust systems and AI-assisted design workflows.",
          "Led technical SEO, API optimisation, and performance architecture — cutting HTML payload by 50% and reducing response latency.",
          "Drove 5× GEO traffic growth through LLM-native discovery, structured content, and semantic SEO initiatives.",
        ],
      },
      {
        title: "Product Manager — Mobile Website Product Pages",
        bullets: [
          "Reduced customer churn by 7% via geo-personalised buyer-seller matchmaking and stronger local-intent detection — driving 2× growth in local introductions.",
          "Reimagined buyer intent capture with multimodal RFQ inputs (voice, image, contextual comments) — improving lead quality and fulfilment by 15%.",
          "Built an AI-driven journey analytics framework using MS Clarity and GA4 signals to accelerate experimentation cycles.",
          "Launched automated product moderation and duplicate-detection workflows across large-scale seller catalogs.",
          "Reduced Core Web Vitals, SEO, and code-quality issues by 98% via an AI-powered governance system integrated into CI/CD.",
        ],
      },
      {
        title: "Assistant Product Manager — Buy Leads",
        bullets: [
          "Delivered ₹4 Cr+ annual cost savings by building a 0-to-1 automated buyer-lead approval platform powered by WhatsApp and voicebot workflows.",
          "Increased lead transactions by 10% through a 30% uplift in specification fill rates and correcting unit/spec mappings across 22K+ low-quality categories.",
          "Built a fraud-detection and profile enrichment system using government-verified identity signals to automate buyer validation.",
          "Designed near real-time performance dashboards integrating Data Warehouse, Looker, and PowerBI.",
        ],
      },
    ],
  },
  {
    company: "Motherson Sumi Infotech & Designs",
    period: "Jun 2021 – Apr 2022",
    note: "",
    roles: [
      {
        title: "Management Trainee (Pre-Sales)",
        bullets: [
          "Consulted with enterprise clients to analyse core business needs and value drivers, translating operational bottlenecks into tailored, high-impact software solution proposals.",
        ],
      },
    ],
  },
];

const education = [
  { degree: "MBA", institution: "IMT Ghaziabad", score: "CGPA 6.5", period: "2019 – 2021" },
  {
    degree: "B.Tech (Computer Science)",
    institution: "Kalyani Govt. Engineering College",
    score: "CGPA 8",
    period: "2015 – 2019",
  },
  { degree: "12th — WBCHSE", institution: "", score: "90%", period: "2015" },
  { degree: "10th — WBBSE", institution: "", score: "94%", period: "2013" },
];

const coreSkills = [
  "Product Strategy",
  "Product Roadmap",
  "PRD Writing",
  "OKRs",
  "Backlog Prioritization",
  "Stakeholder Management",
  "Agile / Scrum",
  "User Research",
  "A/B Testing",
  "Growth Strategy",
  "Product-led Growth",
  "Marketplace Platforms",
  "AI Product Development",
  "Experimentation Frameworks",
  "Technical SEO",
  "Product Analytics",
  "Cross-functional Leadership",
];

const tools = [
  "Google Analytics (GA4)",
  "MS Clarity",
  "Looker",
  "PowerBI",
  "Data Warehouse",
  "SQL",
  "Jira",
  "Figma",
];

const achievements = [
  { metric: "₹4 Cr+", label: "Annual cost savings via 0-to-1 approval automation" },
  { metric: "5×", label: "GEO traffic growth through LLM-native discovery" },
  { metric: "7%", label: "Churn reduction via geo-personalised matchmaking" },
  { metric: "4×", label: "Employee of the Year — IndiaMART (2022–2025)" },
];

function About() {
  return (
    <div className="container-page py-20 space-y-24">

      {/* Header */}
      <section className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-6">
          <div className="surface-card flex aspect-square max-w-xs items-center justify-center text-sm text-muted-foreground">
            Photo coming soon
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://linkedin.com/in/sayan-samanta-b92792131"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-surface/40 px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sayanrup"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-surface/40 px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
            >
              GitHub
            </a>
            <a
              href="mailto:sayan.samanta2015@gmail.com"
              className="rounded-lg border border-border bg-surface/40 px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
            >
              Email
            </a>
          </div>
        </div>
        <div>
          <div className="text-sm font-medium text-primary">
            Product Manager · AI, Growth &amp; Platform Products · Marketplace Experience
          </div>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Sayan Samanta</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Product Manager with 5+ years of experience building growth, platform, and marketplace
            products at IndiaMART across 45M+ indexed pages and 22M+ MAU. Proven track record of
            owning product strategy, roadmap execution, and 0-to-1 scalability initiatives
            delivering measurable business impact. Experienced in AI-native product development,
            marketplace optimisation, and cross-functional leadership across Product, Engineering,
            Analytics, and Design.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section>
        <h2 className="font-display text-2xl font-semibold">Key Achievements</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a) => (
            <div key={a.metric} className="surface-card p-6">
              <div className="font-display text-3xl font-semibold text-primary">{a.metric}</div>
              <p className="mt-2 text-sm text-muted-foreground">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="font-display text-2xl font-semibold">Work Experience</h2>
        <div className="mt-8 space-y-12">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold">{job.company}</h3>
                <span className="text-sm text-muted-foreground">{job.period}</span>
              </div>
              {job.note && (
                <p className="mt-1 text-sm italic text-muted-foreground">{job.note}</p>
              )}
              <div className="mt-6 space-y-8">
                {job.roles.map((role) => (
                  <div key={role.title}>
                    <h4 className="font-semibold text-foreground">{role.title}</h4>
                    <ul className="mt-3 space-y-2">
                      {role.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold">Core Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {coreSkills.map((s) => (
              <span key={s} className="tag-chip">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold">Tools &amp; Analytics</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="tag-chip">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="font-display text-2xl font-semibold">Education</h2>
        <div className="mt-6 divide-y divide-border">
          {education.map((e) => (
            <div key={e.degree} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
              <div>
                <span className="font-semibold">{e.degree}</span>
                {e.institution && (
                  <span className="ml-2 text-sm text-muted-foreground">— {e.institution}</span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-primary">{e.score}</span>
                <span className="text-sm text-muted-foreground">{e.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="font-display text-2xl font-semibold">Certifications &amp; Awards</h2>
        <ul className="mt-4 space-y-2">
          {[
            "Certified Scrum Product Owner [2023]",
            "Employee of the Year — IndiaMART [2022, 2023, 2024, 2025]",
          ].map((c) => (
            <li key={c} className="flex gap-3 text-sm text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
