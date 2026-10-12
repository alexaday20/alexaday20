import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/site/event-planning.png.asset.json";

export const Route = createFileRoute("/event-planning")({
  head: () => ({
    meta: [
      { title: "Event Planning — Alexa Day" },
      { name: "description", content: "Gamma Phi Beta event planning: budgeting, partnerships, and fundraising." },
      { property: "og:title", content: "Event Planning — Alexa Day" },
      { property: "og:description", content: "Spring Family Weekend raised $5,261, surpassing a $5,000 goal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-[1600px] px-4 py-10">
      <img
        src={img.url}
        alt="Gamma Phi Beta Event Planning — $3K budget, 250 members, 30 volunteers, 10 vendors. Spring Family Weekend auction raised $5,261."
        className="w-full"
      />
    </section>
  ),
});
