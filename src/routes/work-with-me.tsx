import { createFileRoute, Link } from "@tanstack/react-router";

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

type Pkg = { name: string; price: string; unit: string; hours: string; items: string[] };
const packages: Pkg[] = [
  {
    name: "Starter",
    price: "$150",
    unit: "/ week",
    hours: "5 hours a week",
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
    items: ["Logo", "Brand guide", "Color palette and fonts", "Post templates", "Done before regular content begins"],
  },
];

const piece = ["Planning", "Gathering photos and video", "Editing", "Writing the caption", "Choosing the posting time", "Posting"];

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
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className="flex flex-col border border-foreground/25 p-7">
                <h3 className="text-2xl md:text-3xl">{p.name}</h3>
                <p className="mt-1 italic text-sage">{p.hours}</p>
                <p className="mt-5">
                  <span className="font-display text-4xl">{p.price}</span>{" "}
                  <span className="text-muted-foreground">{p.unit}</span>
                </p>
                <ul className="mt-5 flex-1 border-t">
                  {p.items.map((it) => (
                    <li key={it} className="border-b py-2.5 text-base leading-snug">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-base leading-relaxed text-muted-foreground">
            Every piece of content covers: {piece.join(" · ")}. Extra work outside your package is $35 an hour, always
            approved by you first.
          </p>
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
