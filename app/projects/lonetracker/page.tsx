import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lönetracker — Abboud Said",
  description:
    "Pay calculator for hourly-paid retail staff in Sweden — OB supplements, sick pay and holiday pay from a schedule export.",
};

export default function Lonetracker() {
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
        <div className="mb-4 font-mono text-sm text-accent">$ cd projects/lonetracker</div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">Lönetracker</h1>
        <p className="mb-8 max-w-[560px] text-base leading-relaxed text-[oklch(0.4_0.01_250)]">
          A web app for hourly-paid retail workers in Sweden. Upload the schedule, get what the
          month actually pays — OB supplements, tax and net pay, with every hour attributed to the
          rule that paid for it.
        </p>

        <div className="mb-10 flex flex-wrap gap-1.5">
          {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((t) => (
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
            src="/assets/lonetracker-1.png"
            alt="Lönetracker — OB tiers from Detaljhandelsavtalet"
            width={1200}
            height={820}
            className="w-full"
          />
        </div>

        <div className="flex max-w-[620px] flex-col gap-4 text-[15px] leading-[1.7] text-[oklch(0.35_0.01_250)]">
          <p>
            Someone on a monthly salary roughly knows what lands in their account. Someone paid by the
            hour, on a schedule that shifts week to week with OB spread unevenly across it, does not.
            That second group — part-time store staff, which is most of Swedish retail — is who this
            is for.
          </p>
          <p>
            A schedule gets in three ways, because every employer runs a different scheduling system:
            a .csv or .xlsx export, text pasted from a PDF or an email, or shifts typed in by hand.
            Columns are matched by their headings in Swedish or English, and an unfamiliar file is not
            rejected — the columns are listed with sample values so the user can point out which is the
            date, the start and the end.
          </p>
          <p>
            Every shift is split across OB tiers by day type and time of day, taken verbatim from
            section 8.1 of Detaljhandelsavtalet. Shifts running past midnight get the next day rules
            for the hours after 00:00; Swedish public holidays are computed per year, including the
            Easter-derived ones. Breaks are deducted proportionally across tiers rather than off the
            end, so they do not silently eat the best-paid hours. Sick pay and holiday pay are handled
            separately, and where the agreement cannot be modelled honestly the app says so rather
            than guessing.
          </p>
          <p>
            The rules are data, not code: a rule set is a list of tiers and time windows, so a
            different agreement or a local addition can be entered by hand. Checked against two real
            time exports and the payslips they produced, landing within 1.30 kr on the month with every
            OB tier exact.
          </p>
          <p>
            There is no backend, no account and no analytics — the schedule is parsed in the browser
            and the results never leave it. Colleagues use it. The .xlsx reader is hand-rolled, walking
            the zip central directory and inflating entries with the browser built-in
            DecompressionStream, so the app ships no spreadsheet dependency.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3.5">
          <a
            href="https://lonetracker-xv47.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[3px] bg-foreground px-[22px] py-3 font-mono text-sm text-white"
          >
            Open the app ↗
          </a>
          <a
            href="https://github.com/abboud-said/lonetracker"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[3px] border border-[oklch(0.85_0.006_250)] px-[22px] py-3 font-mono text-sm"
          >
            Source on GitHub ↗
          </a>
          <Link
            href="/#projects"
            className="rounded-[3px] border border-[oklch(0.85_0.006_250)] px-[22px] py-3 font-mono text-sm"
          >
            ← Back to projects
          </Link>
        </div>
      </section>
    </div>
  );
}
