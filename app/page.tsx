import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "education", href: "#education" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

const skillLines = ["java, c#, .net", "javascript, react, node.js", "sql, sqlite3"];

const experience = [
  {
    role: "Sales Associate & Warehouse Manager",
    company: "Jack & Jones",
    period: "Jul 2025 – Present",
    location: "Stockholm, Sweden",
    bullets: [
      "Ranked #1 seller nationally among all Jack & Jones sales staff in Sweden.",
      "Managed warehouse operations alongside sales duties, including stock accuracy, replenishment, and inventory organization.",
    ],
  },
  {
    role: "Software Development Intern — React.js / Full Stack",
    company: "DunderDog AB",
    period: "Jan 2023 – Jun 2023",
    location: "Stockholm, Sweden",
    bullets: [
      "Developed frontend components using React.js and modern JavaScript, integrating with client-facing backend services.",
      "Built data pipelines and managed frontend-backend communication using RESTful API concepts and async data flow.",
      "Optimized database queries and modeled relational schemas to improve data storage and retrieval efficiency.",
      "Contributed to sprint planning, daily stand-ups, and peer code reviews within an Agile Scrum team.",
    ],
  },
];

const projects = [
  {
    title: "StyleAI",
    tagline:
      "Clothing price comparison app — compares prices across multiple online stores to help users find the best deal.",
    year: "2026",
    tech: ["Node.js", "Express.js", "SQLite3", "JavaScript ES6+"],
    status: "View case study",
    href: "/projects/styleai",
  },
];

const repos = [
  {
    name: "Abboud-Said-Portfolio",
    desc: "React portfolio site.",
    href: "https://github.com/abboud-said/Abboud-Said-Portfolio",
  },
  {
    name: "Portfolio-AbboudSaid",
    desc: "Earlier portfolio, built at university.",
    href: "https://github.com/abboud-said/Portfolio-AbboudSaid",
  },
  {
    name: "prompt-lab",
    desc: "React 19 + Vite dashboard using useReducer and the Gemini API to experiment with prompt engineering.",
    href: "https://github.com/abboud-said/prompt-lab",
  },
  {
    name: "Split-bill-with-friends",
    desc: "React split-bill practice app.",
    href: "https://github.com/abboud-said/Split-bill-with-friends",
  },
];

const skillGroups = [
  {
    title: "Languages & Frameworks",
    items: [
      "Java",
      "C#",
      ".NET",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "HTML5",
      "CSS3",
      "Python",
      "SQL",
      "SQLite3",
    ],
  },
  {
    title: "Tools & Practices",
    items: ["Git/GitHub", "npm", "CI/CD", "Code Reviews", "Scrum/Agile", "Data Modeling", "VS Code"],
  },
  {
    title: "AI-Assisted Dev",
    items: ["Claude Code", "Claude (Cowork)", "Gemini", "Windsurf", "Cursor"],
  },
];

const languages = ["Swedish", "English", "Arabic"];

const contactLinks = [
  { label: "abboudsaid6@gmail.com", href: "mailto:abboudsaid6@gmail.com" },
  { label: "+46 72 868 17 85", href: "tel:+46728681785" },
  { label: "GitHub ↗", href: "https://github.com/abboud-said" },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/abboud-said-81818828a/" },
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-foreground">
      {/* Nav */}
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 overflow-x-auto border-b border-black/10 bg-background/90 px-6 py-4 backdrop-blur-sm sm:px-12">
        <a href="#top" className="shrink-0 font-mono text-[15px] font-semibold">
          abboud@said<span className="text-accent">:~$</span>
        </a>
        <div className="flex shrink-0 items-center gap-5 sm:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[13px] text-[oklch(0.4_0.01_250)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section
        id="top"
        className="mx-auto grid max-w-[1040px] grid-cols-1 items-center gap-10 px-6 py-16 sm:px-12 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:py-24"
      >
        <div>
          <div className="mb-4 font-mono text-sm text-accent">$ whoami</div>
          <h1 className="mb-3 text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl">
            Abboud Said
          </h1>
          <div className="mb-6 font-mono text-lg text-[oklch(0.45_0.01_250)]">
            Junior Software Developer
            <span className="cursor-blink ml-0.5 inline-block w-[9px] border-b-2 border-accent">
              &nbsp;
            </span>
          </div>
          <p className="mb-8 max-w-[480px] text-base leading-relaxed text-[oklch(0.4_0.01_250)]">
            Full-stack developer with a CS degree from Örebro University and a React/Node
            internship building data-driven web apps. Currently shipping side projects while
            sharpening skills with AI-assisted dev tools.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#projects"
              className="inline-block rounded-[3px] bg-foreground px-[22px] py-3 font-mono text-sm text-white"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-block rounded-[3px] border border-[oklch(0.85_0.006_250)] px-[22px] py-3 font-mono text-sm"
            >
              Contact
            </a>
            <a
              href="mailto:abboudsaid6@gmail.com?subject=Resume%20request"
              className="inline-block rounded-[3px] border border-[oklch(0.85_0.006_250)] px-[22px] py-3 font-mono text-sm"
            >
              ↓ Resume
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-[oklch(0.16_0.006_250)] shadow-[0_20px_50px_-20px_oklch(0.2_0.01_250_/_0.4)]">
          <div className="flex gap-[7px] bg-[oklch(0.12_0.006_250)] px-3.5 py-3">
            <div className="h-[11px] w-[11px] rounded-full bg-[oklch(0.6_0.15_25)]" />
            <div className="h-[11px] w-[11px] rounded-full bg-[oklch(0.7_0.13_80)]" />
            <div className="h-[11px] w-[11px] rounded-full bg-[oklch(0.65_0.15_150)]" />
          </div>
          <div className="px-6 pt-5 pb-7 font-mono text-[13.5px] leading-[1.85] text-[oklch(0.85_0.01_250)]">
            <div>
              <span className="text-accent">$</span> cat skills.txt
            </div>
            {skillLines.map((line) => (
              <div key={line} className="pl-3.5 text-[oklch(0.75_0.01_250)]">
                {line}
              </div>
            ))}
            <div className="mt-2.5">
              <span className="text-accent">$</span> status --current
            </div>
            <div className="pl-3.5 text-[oklch(0.75_0.01_250)]">
              Stockholm, Sweden · open to junior/dev roles
            </div>
            <div className="mt-2.5">
              <span className="text-accent">$</span>{" "}
              <span className="cursor-blink inline-block w-2 border-b-2 border-accent">
                &nbsp;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-[1040px] border-t border-black/10 px-6 py-14 sm:px-12"
      >
        <div className="mb-2.5 font-mono text-[13px] text-accent">01 · About</div>
        <div className="flex max-w-[700px] flex-col gap-4">
          <p className="text-base leading-[1.7] text-[oklch(0.32_0.01_250)]">
            Junior Software Developer with a Bachelor&apos;s degree in Computer and Information
            Sciences from Örebro University (2025) and a full-stack internship building
            React/JavaScript applications with SQL-backed data pipelines. Comfortable across
            Java, C#, .NET, React, Node.js/Express, and relational databases, with hands-on
            Agile/Scrum experience from both academic and internship settings.
          </p>
          <p className="text-base leading-[1.7] text-[oklch(0.32_0.01_250)]">
            I&apos;m social and a fast learner — rather than dwell on how hard the market is for
            new grads, I chose to work on myself to fit it. I built out a home office and show up
            there daily to get better, and right now that means going deep on mastering
            AI-assisted dev tools. But it&apos;s not only code I&apos;m working on — it&apos;s
            connections. I believe the fastest way to learn is from people who&apos;ve already
            done it, which is why I&apos;m increasingly active on LinkedIn, reaching out and
            building relationships with experienced developers.
          </p>
        </div>
        <div className="mt-7 rounded border border-black/10 bg-[oklch(0.975_0.004_250)] px-4.5 py-3.5 font-mono text-[13px]">
          <span className="text-accent">$</span> echo $fun_fact
          <br />
          <span className="text-[oklch(0.4_0.01_250)]">
            Ranked #1 seller nationally at Jack &amp; Jones, Sweden — same drive, now aimed at
            code.
          </span>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="mx-auto max-w-[1040px] border-t border-black/10 px-6 py-14 sm:px-12"
      >
        <div className="mb-7 font-mono text-[13px] text-accent">02 · Education</div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
          <div className="font-mono text-[13px] text-[oklch(0.5_0.01_250)]">
            2021 – 2025
            <br />
            Örebro, Sweden
          </div>
          <div>
            <div className="mb-0.5 text-lg font-semibold">BSc, Systems Science Programme</div>
            <div className="mb-2.5 font-mono text-[13px] text-accent">
              Örebro University · 180 credits (3 years)
            </div>
            <p className="mb-3 max-w-[620px] text-[14.5px] leading-[1.7] text-[oklch(0.35_0.01_250)]">
              A systems science degree focused on designing IT systems for people and
              organizations — bridging the human/organizational side of technology with hands-on
              development. Coursework spanned agile methods, interaction design, frontend
              development, database management, and programming in C# and Java, plus building
              responsive, interactive web-based information systems.
            </p>
            <a
              href="mailto:abboudsaid6@gmail.com?subject=Diploma%20request"
              className="font-mono text-[13px] text-accent"
            >
              ↓ request degree (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="mx-auto max-w-[1040px] border-t border-black/10 px-6 py-14 sm:px-12"
      >
        <div className="mb-7 font-mono text-[13px] text-accent">03 · Experience</div>
        <div className="flex flex-col gap-8">
          {experience.map((job) => (
            <div
              key={job.company}
              className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]"
            >
              <div className="font-mono text-[13px] text-[oklch(0.5_0.01_250)]">
                {job.period}
                <br />
                {job.location}
              </div>
              <div>
                <div className="mb-0.5 text-lg font-semibold">{job.role}</div>
                <div className="mb-2.5 font-mono text-[13px] text-accent">{job.company}</div>
                <ul className="list-disc space-y-1 pl-[18px] text-[14.5px] leading-[1.7] text-[oklch(0.35_0.01_250)]">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-[1040px] border-t border-black/10 px-6 py-14 sm:px-12"
      >
        <div className="mb-7 font-mono text-[13px] text-accent">04 · Projects</div>
        {projects.map((proj) => (
          <Link
            key={proj.title}
            href={proj.href}
            className="grid grid-cols-1 overflow-hidden rounded-md border border-black/10 text-inherit no-underline md:grid-cols-[1fr_1.1fr]"
          >
            <div className="relative min-h-[200px] overflow-hidden bg-[oklch(0.97_0.003_250)]">
              <Image
                src="/assets/styleai-3.png"
                alt="StyleAI price comparison"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-2.5 px-7 py-7 sm:px-8">
              <div className="flex items-baseline justify-between">
                <div className="text-[19px] font-semibold">{proj.title}</div>
                <div className="font-mono text-xs text-[oklch(0.55_0.01_250)]">{proj.year}</div>
              </div>
              <div className="text-[14.5px] leading-[1.6] text-[oklch(0.35_0.01_250)]">
                {proj.tagline}
              </div>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-[3px] border border-black/10 bg-[oklch(0.96_0.004_250)] px-2 py-0.5 font-mono text-[11.5px] text-[oklch(0.4_0.01_250)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-1.5 font-mono text-[12.5px] text-accent">{proj.status} →</div>
            </div>
          </Link>
        ))}

        <a
          href="https://github.com/abboud-said?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="my-10 inline-block font-mono text-[13px] text-[oklch(0.5_0.01_250)]"
        >
          More on GitHub ↗
        </a>
        <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1.5 rounded border border-black/10 p-4 text-inherit"
            >
              <div className="font-mono text-[13.5px] font-semibold">{repo.name}</div>
              <div className="text-[12.5px] leading-[1.5] text-[oklch(0.5_0.01_250)]">
                {repo.desc}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-auto max-w-[1040px] border-t border-black/10 px-6 py-14 sm:px-12"
      >
        <div className="mb-7 font-mono text-[13px] text-accent">05 · Skills</div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-3 font-mono text-[13px] font-semibold text-[oklch(0.28_0.01_250)]">
                {group.title}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-[3px] border border-black/10 bg-[oklch(0.975_0.004_250)] px-2.5 py-1 text-[13px] text-[oklch(0.32_0.01_250)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <div className="mx-auto max-w-[1040px] border-t border-black/10 px-6 pt-10 sm:px-12">
        <div className="mb-3.5 font-mono text-[13px] text-[oklch(0.5_0.01_250)]">Languages</div>
        <div className="flex flex-wrap gap-3.5">
          {languages.map((lang) => (
            <span
              key={lang}
              className="rounded-[3px] border border-[oklch(0.85_0.006_250)] px-[22px] py-3 font-mono text-sm"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-[1040px] border-t border-black/10 px-6 py-16 sm:px-12 sm:py-24"
      >
        <div className="mb-5 font-mono text-[13px] text-accent">06 · Contact</div>
        <h2 className="mb-3.5 text-3xl font-bold tracking-tight">Let&apos;s build something.</h2>
        <p className="mb-7 max-w-[480px] text-[15.5px] text-[oklch(0.4_0.01_250)]">
          Based in Stockholm, Sweden. Open to junior developer roles — reach out on either
          platform below.
        </p>
        <div className="flex flex-wrap gap-3.5">
          {contactLinks.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[3px] border border-[oklch(0.85_0.006_250)] px-[22px] py-3 font-mono text-sm"
            >
              {c.label}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="mx-auto flex max-w-[1040px] justify-between border-t border-black/10 px-6 py-6 font-mono text-xs text-[oklch(0.55_0.01_250)] sm:px-12">
        <span>© 2026 Abboud Said</span>
      </div>
    </div>
  );
}
