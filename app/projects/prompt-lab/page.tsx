import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Prompt Lab — Abboud Said",
  description:
    "A small React 19 dashboard for trying one prompt at different Gemini temperatures, with run history kept in the browser.",
};

export default function PromptLab() {
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
        <div className="mb-4 font-mono text-sm text-accent">$ cd projects/prompt-lab</div>
        <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">AI Prompt Lab</h1>
        <p className="mb-8 max-w-[560px] text-base leading-relaxed text-[oklch(0.4_0.01_250)]">
          A small dashboard for prompt experiments. You write a prompt, set how precise or creative
          the model should be, run it against Gemini, and keep a history of what you tried.
        </p>

        <div className="mb-10 flex flex-wrap gap-1.5">
          {["React 19", "Vite", "Tailwind CSS v4", "Gemini API", "useReducer"].map((t) => (
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
            src="/assets/prompt-lab-1.png"
            alt="AI Prompt Lab with a prompt typed in and the temperature slider set to 0.3"
            width={1280}
            height={800}
            className="w-full"
          />
        </div>

        <div className="flex max-w-[620px] flex-col gap-4 text-[15px] leading-[1.7] text-[oklch(0.35_0.01_250)]">
          <p>
            I built it to learn two things at once: how a language model behaves when the same prompt
            runs at different temperatures, and how to keep a screen with several states readable in
            React. The temperature slider runs from 0 to 1 in steps of 0.1 and is passed straight
            into the Gemini request, so you can run one prompt twice and compare.
          </p>
          <p>
            The screen has four states: idle, loading, success and error. A single reducer owns all
            of them, along with the prompt text, the answer, the settings and the history, so a run
            is a short sequence of actions rather than several pieces of state updated by hand.
            The Gemini call lives in its own small module and the component only dispatches.
          </p>
          <p>
            Every finished run is added to the top of a history list, which is written to
            localStorage and loaded again on startup, so it survives a refresh. There is no account
            and no backend.
          </p>
          <p>
            It is a learning prototype, and it has limits I know about. The API key is a Vite
            environment variable, which means it is compiled into the browser bundle: anyone who
            deploys it with a real key exposes that key, and a real version would send the request
            through a server. The history list shows only the prompts, not the saved answers, and
            the error state is a single generic message.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3.5">
          <a
            href="https://github.com/abboud-said/prompt-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[3px] bg-foreground px-[22px] py-3 font-mono text-sm text-white"
          >
            Source on GitHub ↗
          </a>
          <a
            href="https://prompt-lab-32bp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[3px] border border-[oklch(0.85_0.006_250)] px-[22px] py-3 font-mono text-sm"
          >
            Live demo ↗
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
