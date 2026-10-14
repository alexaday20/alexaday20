import { createFileRoute } from "@tanstack/react-router";
import { media } from "@/components/Devices";

export const Route = createFileRoute("/event-planning")({
  head: () => ({
    meta: [
      { title: "Event Planning — Alexa Day" },
      { name: "description", content: "Event planning add-on for freelance clients: venue, food, decor, and every detail in between." },
      { property: "og:title", content: "Event Planning — Alexa Day" },
      { property: "og:description", content: "Spring Family Weekend raised $5,261, surpassing a $5,000 goal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventPlanning,
});

const elements = ["Budget planning", "Venue sourcing", "Vendor coordination", "Catering & bar", "Décor & theme", "Invitations & RSVPs", "Timeline & run of show", "Day-of coordination", "Event promotion & social coverage"];

const stats: [string, string][] = [
  ["$3K", "Budget"],
  ["250", "Members"],
  ["30", "Volunteers"],
  ["10", "Vendors"],
];

function EventPlanning() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-16 text-center md:pt-20">
        <p className="eyebrow text-muted-foreground">Add-On Service</p>
        <h1 className="mt-4 text-4xl leading-tight md:text-6xl">Event Planning</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          For companies and individuals who don't need a full-time event planner, or who have a special event coming up, I
          gather every piece of your event: the right vendors, venue, invitations, and details,{" "}
          <em className="text-sage">all planned within your budget.</em>
        </p>
        <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {elements.map((e) => (
            <li key={e} className="rounded-full border border-foreground/40 px-4 py-1.5 text-base">
              {e}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl border-t border-foreground/20 pt-6 text-base leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">On-site management available.</span> I can also run your event
          day-of at my hourly rate, with advance notice and a signed agreement.
        </p>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="eyebrow text-center text-muted-foreground">Featured Event: Spring Family Weekend</p>
          <h2 className="mt-4 text-center text-3xl leading-tight md:text-5xl">Gamma Phi Beta Event Planning</h2>

          <div className="mt-12 grid items-center gap-12 md:grid-cols-[1fr_1.15fr]">
            <div>
              <p className="eyebrow text-center font-semibold md:text-left">
                Event Planning · Budgeting · Partnerships · Fundraising
              </p>
              <dl className="mt-6 grid grid-cols-4 border-y">
                {stats.map(([v, k], i) => (
                  <div key={k} className={`py-5 text-center ${i ? "border-l" : ""}`}>
                    <dt className="font-display text-2xl md:text-4xl">{v}</dt>
                    <dd className="eyebrow mt-1 text-[0.6rem] text-muted-foreground md:text-xs">{k}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                As Panhellenic Vice President and Event Coordinator for a 250-member chapter at an SEC university, I
                planned multiple events with member volunteers, including our Girls on the Run philanthropy, a chili
                cook-off, Fall and Spring Family Weekends, and smaller campus events.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Spring Family Weekend was a three-day, farmers market–themed event on a $3,000 budget. I secured free
                collaborations, attracted vendors by guaranteeing attendance through RSVPs, and traded promotion for
                catering discounts from local businesses. I led 30 volunteers alongside our parents club, designed the
                event materials, and organized a basket auction that raised{" "}
                <span className="text-sage">$5,261, surpassing our $5,000 goal.</span>
              </p>
            </div>

            <div className="relative pb-[30%]">
              <img
                src={media("event-auction.jpg")}
                alt="Gamma Phi Beta Spring Family Weekend auction page: $5,261 raised, 105% of goal"
                className="w-full rounded-xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.45)]"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center gap-[6%]">
                <img src={media("event-flyer-1.jpg")} alt="Spring Family Weekend flyer cover" className="w-[34%] shadow-[0_20px_35px_-15px_rgba(0,0,0,0.5)]" />
                <img src={media("event-flyer-2.jpg")} alt="Spring Family Weekend schedule" className="w-[34%] shadow-[0_20px_35px_-15px_rgba(0,0,0,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
