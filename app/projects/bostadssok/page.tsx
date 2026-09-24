import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bostadssök Companion — Abboud Said",
  description:
    "Chrome extension that shows the real monthly cost and the distances that matter on Hemnet and Booli listings.",
};

export default function BostadssokCompanion() {
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
        <div className="mb-4 font-mono text-sm text-accent">$ cd projects/bostadssok</div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">Bostadssök Companion</h1>
        <p className="mb-8 max-w-[560px] text-base leading-relaxed text-[oklch(0.4_0.01_250)]">
          A Chrome extension for Swedish home search. It adds two things to a Hemnet or Booli
          listing that neither site shows: what the home would actually cost per month, and how
          far it is to the places you go every day.
        </p>

        <div className="mb-10 flex flex-wrap gap-1.5">
          {["Chrome MV3", "JavaScript", "Nominatim", "Overpass API"].map((t) => (
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
            src="/assets/bostadssok-1.png"
            alt="Bostadssök Companion panel on a Hemnet listing"
            width={1280}
            height={800}
            className="w-full"
          />
        </div>

        <div className="flex max-w-[620px] flex-col gap-4 text-[15px] leading-[1.7] text-[oklch(0.35_0.01_250)]">
          <p>
            Hemnet shows the monthly avgift, which is not what the home costs you. The mortgage is,
            and that depends on assumptions the listing knows nothing about. The extension takes your
            own ränta, amortering and kontantinsats and computes interest and amortisation on the loan
            portion on top of avgift and driftkostnad.
          </p>
          <p>
            Hemnet also shows distance to water. What decides whether a place works day to day is the
            distance to a preschool, a grocery shop and a bus stop, so the extension geocodes the
            address through Nominatim and queries Overpass for the nearest of each, caching the result
            for 30 days.
          </p>
          <p>
            The listing is read by its visible text rather than its CSS class names, so a redesign at
            Hemnet or Booli does not silently break it. Ratings and notes are stored locally and shared
            between the two sites when the same address appears on both. There is no account, no
            backend and no analytics; the only thing that leaves the browser is the address.
          </p>
          <p>
            Published free on the Chrome Web Store under Tellra. The geocoding runs on the free
            OpenStreetMap services, which carry firm fair-use limits — it would have to move to a paid
            provider before the extension could carry real user numbers.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3.5">
          <a
            href="https://chromewebstore.google.com/detail/jillkpkjhjnkkmjknkianlkhmmlkifgn"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[3px] bg-foreground px-[22px] py-3 font-mono text-sm text-white"
          >
            Chrome Web Store ↗
          </a>
          <a
            href="https://github.com/abboud-said/bostadssok-companion"
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
