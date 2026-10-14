import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Interactive";

export const Route = createFileRoute("/strategy")({
  head: () => ({
    meta: [
      { title: "Strategy — Alexa Day" },
      { name: "description", content: "How Alexa Day builds social strategy: your brand, your niche, and research-backed decisions." },
      { property: "og:title", content: "Strategy — Alexa Day" },
      { property: "og:description", content: "Research-backed social strategy with a social report at the end of every month." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Strategy,
});

const steps: { n: string; title: string; lead: string; items: string[] }[] = [
  {
    n: "01",
    title: "Discover",
    lead: "Before any content is made, we meet by phone or in person.",
    items: [
      "Your goals: brand awareness, sales, or a general social presence",
      "Your audience, expectations, and preferences",
      "Your current brand identity and social presence",
    ],
  },
  {
    n: "02",
    title: "Strategize",
    lead: "I pull the unique pieces of your brand and cross-compare them with research on your niche.",
    items: [
      "Starting content pillars: the themes everything is built around",
      "My read of your brand: colors, fonts, tone, and visual style",
      "The right mix for you: mostly Reels, mostly posts, or a balance",
    ],
  },
  {
    n: "03",
    title: "Create",
    lead: "Every piece of content covers all the work behind it, not just the final post.",
    items: [
      "Planning, filming on-site, and gathering photos and video",
      "Editing and writing captions in your voice",
      "Choosing the best posting time, then posting or handing it off",
    ],
  },
  {
    n: "04",
    title: "Report",
    lead: "At the end of each month, you get a social report for every platform.",
    items: [
      "The key numbers and what moved them",
      "What performed well, and what didn't",
      "The plan for the month ahead",
    ],
  },
];

function Process() {
  const [active, setActive] = useState(0);
  const s = steps[active];
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
      <div className="relative grid grid-cols-4">
        <div className="absolute left-[12.5%] right-[12.5%] top-6 h-px bg-foreground/20" />
        <div
          className="absolute left-[12.5%] top-6 h-px bg-sage transition-all duration-500"
          style={{ width: `${active * 25}%` }}
        />
        {steps.map((st, i) => (
          <button key={st.n} type="button" onClick={() => setActive(i)} className="group relative flex flex-col items-center gap-3 text-center">
            <span
              className={`grid h-12 w-12 place-items-center rounded-full border text-sm font-semibold transition-all duration-300 ${
                i <= active ? "border-sage bg-sage text-background" : "border-foreground/30 bg-background text-muted-foreground group-hover:border-foreground"
              } ${i === active ? "scale-110 shadow-lg" : ""}`}
            >
              {st.n}
            </span>
            <span className={`font-display text-lg md:text-2xl ${i === active ? "text-foreground" : "text-muted-foreground"}`}>{st.title}</span>
          </button>
        ))}
      </div>

      <div key={active} className="mx-auto mt-10 max-w-3xl animate-in fade-in slide-in-from-bottom-2 border border-foreground/20 bg-card/50 px-7 py-8 duration-500 md:px-10">
        <p className="eyebrow font-semibold text-sage">
          Step {s.n} · {s.title}
        </p>
        <p className="mt-3 font-display text-2xl leading-snug md:text-3xl">{s.lead}</p>
        <ul className="mt-5 border-t">
          {s.items.map((it) => (
            <li key={it} className="border-b py-3 text-lg leading-snug">
              {it}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-between text-sm">
          <button type="button" disabled={active === 0} onClick={() => setActive(active - 1)} className="text-muted-foreground hover:text-foreground disabled:opacity-0">
            ← Back
          </button>
          <button type="button" disabled={active === 3} onClick={() => setActive(active + 1)} className="font-semibold hover:text-sage disabled:opacity-0">
            Next: {steps[Math.min(active + 1, 3)].title} →
          </button>
        </div>
      </div>
    </section>
  );
}

function Strategy() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 pb-10 pt-16 text-center md:pt-20">
        <p className="eyebrow text-muted-foreground">How I Work</p>
        <h1 className="mt-4 text-4xl leading-tight md:text-6xl">Strategy</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          I pull the unique pieces of your brand, study the niche you're in, and cross-compare the two to build the strongest
          social presence possible, <em className="text-sage">backed by analytics.</em>
        </p>
      </section>

      <Reveal>
        <Process />
      </Reveal>

      <section className="border-t">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <p className="eyebrow font-semibold text-sage">What Sets Me Apart</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-5xl">Decisions you can trust</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Every strategic decision is backed by analytics and research. At the end of each month, you get a social
            report for each platform covering the key numbers, what performed well, what didn't, and the plan for the
            month ahead, so you can feel confident in every move we make.
          </p>
          <Link to="/work-with-me" className="pill pill-solid mt-8">
            See Packages ➔
          </Link>
        </div>
      </section>
    </div>
  );
}
