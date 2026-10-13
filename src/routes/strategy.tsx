import { createFileRoute, Link } from "@tanstack/react-router";

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

const steps: [string, string][] = [
  ["Your brand", "I pull out the unique pieces of your brand and identity: what makes you, you."],
  ["Your niche", "I analyze the specific industry you're in and what's working for the audience you want to reach."],
  ["The strategy", "I cross-compare the two with relevant research to build the strongest social presence possible."],
];

const meeting = [
  "Your goals: growing brand awareness, pushing sales, or building a general social presence",
  "Your audience, expectations, and preferences",
  "Your current brand identity and social presence",
  "The right content mix for you, whether that's mostly Reels, mostly posts, or a balance of both",
];

const onboarding = [
  "Starting content pillars: the recurring themes your content is built around",
  "My read of your current brand: colors, fonts, tone, and visual style",
  "The analytics behind the creative direction I recommend",
  "Your confirmed weekly hours",
];

function Strategy() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 pb-10 pt-16 text-center md:pt-20">
        <p className="eyebrow text-muted-foreground">How I Work</p>
        <h1 className="mt-4 text-4xl leading-tight md:text-6xl">Strategy</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Every brand gets a strategy built around what makes it different, grounded in research and{" "}
          <em className="text-sage">backed by analytics.</em>
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-px border-y bg-border md:grid-cols-3">
        {steps.map(([k, v], i) => (
          <div key={k} className="bg-background px-6 py-10 md:px-8">
            <p className="eyebrow font-semibold text-sage">0{i + 1}</p>
            <h2 className="mt-3 text-2xl md:text-3xl">{k}</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{v}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="text-3xl leading-tight md:text-4xl">It starts with a meeting</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Before any content is made, we meet by phone or in person to establish:
          </p>
          <ul className="mt-4 border-t">
            {meeting.map((m) => (
              <li key={m} className="border-b py-3 text-lg leading-snug">
                {m}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl leading-tight md:text-4xl">Then you get a plan</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Once we sign, I send you:</p>
          <ul className="mt-4 border-t">
            {onboarding.map((m) => (
              <li key={m} className="border-b py-3 text-lg leading-snug">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>


      <section className="border-t">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <p className="eyebrow font-semibold text-sage">What Sets Me Apart</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-5xl">Decisions you can trust</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Every strategic decision is backed by analytics and research. At the end of each month, you get a social
            report for each platform covering the key numbers, what performed well, what didn't, and the plan for the
            month ahead, so you can feel confident in every move we make.
          </p>
          <Link to="/work-with-me" className="pill mt-8">
            See Packages ➔
          </Link>
        </div>
      </section>
    </div>
  );
}
