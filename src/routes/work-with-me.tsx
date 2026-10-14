import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ContactButton, Expand, Reveal } from "@/components/Interactive";

export const Route = createFileRoute("/work-with-me")({
  head: () => ({
    meta: [
      { title: "Work With Me — Alexa Day" },
      { name: "description", content: "Social media packages, branding, event planning, and full-time roles with Alexa Day." },
      { property: "og:title", content: "Work With Me — Alexa Day" },
      { property: "og:description", content: "Flexible social media packages, plus openness to full-time and W-2 roles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkWithMe,
});

type Pkg = { name: string; price: string; unit: string; hours: string; pitch: string; items: string[] };
const packages: Pkg[] = [
  {
    name: "Starter",
    price: "$150",
    unit: "/ week",
    hours: "5 hours a week",
    pitch: "A steady, professional presence for a growing brand.",
    items: [
      "3 finished pieces of content a week",
      "Analytics tracking with a monthly social report",
      "Highlight updates",
      "On-site B-roll filming as needed",
      "Message and comment management, optional",
    ],
  },
  {
    name: "Growth",
    price: "$300",
    unit: "/ week",
    hours: "10 hours a week",
    pitch: "More content, plus Stories, for brands ready to scale.",
    items: [
      "5 finished posts a week, plus Stories",
      "Analytics tracking with a monthly social report",
      "Highlight updates",
      "On-site B-roll filming as needed",
      "Message and comment management, optional",
    ],
  },
  {
    name: "Branding",
    price: "$100",
    unit: "flat",
    hours: "For new pages or a brand refresh",
    pitch: "A look and voice to build everything else on.",
    items: ["Logo", "Brand guide", "Color palette and fonts", "Post templates", "Done before regular content begins"],
  },
];

const piece = ["Planning", "Gathering photos and video", "Editing", "Writing the caption", "Choosing the posting time", "Posting"];

const faqs: [string, string][] = [
  ["Do I need to sign a contract?", "Yes, a simple agreement so we both know what to expect. It runs week to week with no minimum commitment, and either of us can end it with written notice."],
  ["Which platforms do you cover?", "Instagram, Facebook, TikTok, or all three. Content is adapted to each platform you choose, within your package hours."],
  ["Will you post for me?", "Either way works. I can post directly to your page, or send everything finished and ready for you to post."],
  ["How does billing work?", "Packages are invoiced every two weeks, in advance. I accept Venmo, Zelle, Cash App, cash, or check."],
  ["Do you film on-site?", "Yes. B-roll sessions usually run 2 to 3 hours, and travel within 10 miles of Oklahoma City is included."],
  ["What if I need more than my package?", "Extra work is $35 an hour, and I always send you an estimate to approve first. Need 10+ hours a week? I'm open to full-time roles too."],
  ["How will I know it's working?", "At the end of each month, you get a social report for every platform: the key numbers, what performed well, what didn't, and the plan ahead."],
];

function PackageCard({ p, featured }: { p: Pkg; featured?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`flex flex-col border p-7 transition-shadow duration-300 hover:shadow-xl ${featured ? "border-foreground bg-card/60" : "border-foreground/25"}`}>
      <h3 className="text-2xl md:text-3xl">{p.name}</h3>
      <p className="mt-1 italic text-sage">{p.hours}</p>
      <p className="mt-5">
        <span className="font-display text-4xl">{p.price}</span> <span className="text-muted-foreground">{p.unit}</span>
      </p>
      <p className="mt-3 text-base leading-snug text-muted-foreground">{p.pitch}</p>
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="mt-5 flex items-center justify-between border-t pt-4 text-left font-semibold">
        <span>{open ? "Hide details" : "See what's included"}</span>
        <span className={`grid h-7 w-7 place-items-center rounded-full border border-foreground/40 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <ul className="overflow-hidden">
          {p.items.map((it) => (
            <li key={it} className="border-b py-2.5 text-base leading-snug first:mt-3">
              {it}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function WorkWithMe() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 pb-10 pt-16 text-center md:pt-20">
        <p className="eyebrow text-muted-foreground">Hire Me</p>
        <h1 className="mt-4 text-4xl leading-tight md:text-6xl">Work With Me</h1>
      </section>

      <section className="px-6 pb-14">
          <div className="mx-auto max-w-3xl border-l-2 border-sage bg-card/60 px-7 py-6">
            <p className="eyebrow font-semibold text-sage">Looking for More Than Freelance?</p>
            <h3 className="mt-2 text-2xl md:text-3xl">Open to full-time roles</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              If your team needs more than 10 hours a week, I'm open to part-time or full-time positions,
              including formal W-2 employment. Hours and terms are open to discussion, so reach out and we'll find what
              fits.
            </p>
          </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="text-center">
            <p className="eyebrow font-semibold text-sage">Packages</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-5xl">Three flexible options</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Social packages are $30 an hour and can cover Instagram, Facebook, TikTok, or all three. I post directly to
              your page or send everything ready for you to post.
            </p>
          </div>
          <div className="mt-10 grid items-start gap-5 md:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <PackageCard p={p} featured={p.name === "Growth"} />
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-base leading-relaxed text-muted-foreground">
            Every piece of content covers: {piece.join(" · ")}. Extra work outside your package is $35 an hour, always
            approved by you first.
          </p>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <div className="text-center">
            <p className="eyebrow font-semibold text-sage">FAQ</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-5xl">Good questions</h2>
          </div>
          <div className="mt-8 border-t">
            {faqs.map(([q, a]) => (
              <Expand key={q} title={q}>
                {a}
              </Expand>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">Still have a question?</p>
            <ContactButton className="mt-3">Ask Me ➔</ContactButton>
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <p className="eyebrow font-semibold text-sage">Add-On</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-4xl">Event planning</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Have an event coming up? I can pull it together at my hourly rate, from the venue to the food, decor, and
            vendors.
          </p>
          <Link to="/event-planning" className="pill mt-8">
            See Event Planning ➔
          </Link>
        </div>
      </section>
    </div>
  );
}
