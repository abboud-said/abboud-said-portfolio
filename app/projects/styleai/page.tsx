import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StyleAI — Abboud Said",
  description:
    "Clothing price comparison app that compares prices across multiple online stores to help users find the best deal.",
};

export default function StyleAI() {
  return (
    <div className="min-h-screen font-sans text-foreground">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-background/90 px-6 py-4 backdrop-blur-sm sm:px-12">
        <Link href="/" className="font-mono text-[15px] font-semibold">
          abboud@said<span className="text-accent">:~$</span>
        </Link>
        <Link href="/#projects" className="font-mono text-[13px] text-[oklch(0.4_0.01_250)]">
          ← back
        </Link>
      </div>

      <section className="mx-auto max-w-[1040px] px-6 py-16 sm:px-12">
        <div className="mb-4 font-mono text-sm text-accent">$ cd projects/styleai</div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">StyleAI</h1>
        <p className="mb-8 max-w-[560px] text-base leading-relaxed text-[oklch(0.4_0.01_250)]">
          Clothing price comparison app — compares prices across multiple online stores to help
          users find the best deal.
        </p>

        <div className="mb-10 flex flex-wrap gap-1.5">
          {["Node.js", "Express.js", "SQLite3", "JavaScript ES6+"].map((t) => (
            <span
              key={t}
              className="rounded-[3px] border border-black/10 bg-[oklch(0.96_0.004_250)] px-2 py-0.5 font-mono text-[11.5px] text-[oklch(0.4_0.01_250)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mb-10 overflow-hidden rounded-lg border border-black/10">
          <Image
            src="/assets/styleai-3.png"
            alt="StyleAI price comparison screenshot"
            width={1440}
            height={751}
            className="w-full"
          />
        </div>

        <p className="max-w-[560px] text-[15px] leading-[1.7] text-[oklch(0.35_0.01_250)]">
          Full case study write-up is in progress. In the meantime, reach out directly or check
          the source.
        </p>
        <div className="mt-6 flex flex-wrap gap-3.5">
          <a
            href="mailto:abboudsaid6@gmail.com?subject=StyleAI%20case%20study"
            className="rounded-[3px] border border-[oklch(0.85_0.006_250)] px-[22px] py-3 font-mono text-sm"
          >
            Ask about StyleAI
          </a>
          <Link
            href="/#projects"
            className="rounded-[3px] bg-foreground px-[22px] py-3 font-mono text-sm text-white"
          >
            ← Back to projects
          </Link>
        </div>
      </section>
    </div>
  );
}
