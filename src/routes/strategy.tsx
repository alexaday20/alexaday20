import { createFileRoute } from "@tanstack/react-router";
import { CONTACT_URL } from "@/components/SiteNav";

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
  "Your goals",
  "Your current brand identity",
  "How we can grow your brand awareness on social",
  "Whether the focus is pushing sales or building a general social presence",
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
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We sit down together and establish:
          </p>
          <ul className="mt-4 border-t">
            {meeting.map((m) => (
              <li key={m} className="border-b py-3 text-lg">
                {m}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <div className="border p-7">
            <p className="eyebrow font-semibold text-sage">Packages</p>
            <h3 className="mt-3 text-2xl md:text-3xl">Three flexible options</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              Choose the package that fits your goals and budget. We'll find the right fit together in our first meeting.
            </p>
          </div>
          <div className="border p-7">
            <p className="eyebrow font-semibold text-sage">What Sets Me Apart</p>
            <h3 className="mt-3 text-2xl md:text-3xl">Decisions you can trust</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              Every strategic decision is backed by analytics and research. At the end of each month, you get a social
              report showing what's working and why, so you can feel confident in every move we make.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 text-center">
        <a href={CONTACT_URL} target="_blank" rel="noreferrer" className="pill">
          Let's Build Your Strategy ➔
        </a>
      </section>
    </div>
  );
}
