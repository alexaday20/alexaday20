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
  ["Is there a contract?", "Yes. Every client signs a Social Media Services Agreement that outlines deliverables, timelines, and expectations for both parties. Service runs week to week with no minimum commitment. Clients may end the agreement with 30 days' written notice."],
  ["Which platforms do you manage?", "Instagram, Facebook, and TikTok, individually or together. Content is tailored to each platform you select, within your package hours."],
  ["Do you post on my behalf?", "Yes, if you prefer. I can publish directly to your accounts or deliver finished, ready-to-post content for you to share. Access is set up however you're most comfortable, such as through Meta Business Suite, and you keep full ownership of your accounts."],
  ["Will I approve content before it goes live?", "Always. You'll have the opportunity to review content before it posts, and two rounds of revisions are included with every piece."],
  ["How does billing work?", "Packages are invoiced every two weeks, in advance, with payment due within 7 days. I accept Venmo, Zelle, Cash App, cash, or check."],
  ["Do you film on-site?", "Yes. On-site content filming and B-roll can be included in your package hours. Travel within 10 miles of my Oklahoma City base is included; travel beyond that is billed at the IRS standard mileage rate."],
  ["What if I need more than my package includes?", "Additional work is billed at $35 per hour, and I'll provide a written estimate for your approval before any work begins."],
  ["How will I know it's working?", "At the end of each month, you'll receive a social report for every platform covering key performance metrics, what's working, what isn't, and the plan for the month ahead."],
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
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="mt-5 flex items-center justify-between border-t pt-4 text-left font-semibold outline-none focus-visible:underline focus-visible:decoration-sage focus-visible:underline-offset-4">
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
            <h3 className="text-2xl md:text-3xl">Open to part-time and full-time positions</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              Contact me at{" "}
              <a href="mailto:alexaday2003@gmail.com" className="text-foreground underline decoration-sage underline-offset-4">
                alexaday2003@gmail.com
              </a>
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
            <h2 className="mt-3 text-3xl leading-tight md:text-5xl">Frequently asked questions</h2>
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
            <ContactButton className="pill-solid mt-3">Ask Me ➔</ContactButton>
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <p className="eyebrow font-semibold text-sage">Add-On</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-4xl">Event planning</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            I source the vendors, venue, invitations, and every element of your event, working within your budget. On-site
            management is available at my hourly rate with advance notice and a signed agreement.
          </p>
          <Link to="/event-planning" className="pill pill-solid mt-8">
            See Event Planning ➔
          </Link>
        </div>
      </section>
    </div>
  );
}
