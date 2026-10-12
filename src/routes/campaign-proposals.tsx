import { createFileRoute } from "@tanstack/react-router";
import paradise from "@/assets/site/paradise.png.asset.json";

export const Route = createFileRoute("/campaign-proposals")({
  head: () => ({
    meta: [
      { title: "Campaign Proposals — Alexa Day" },
      { name: "description", content: "Paradise Spreads digital marketing campaign proposal." },
      { property: "og:title", content: "Campaign Proposals — Alexa Day" },
      { property: "og:description", content: "Paradise Spreads rebrand concepts for a plant-based food brand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-[1600px] px-4 py-10">
      <img src={paradise.url} alt="Paradise Spreads — Digital Marketing Campaign Proposal" className="w-full" />
      <div className="mt-6 text-center">
        <a href="https://canva.link/9x1mud0j0z6sfau" target="_blank" rel="noreferrer" className="pill">
          View Full Presentation ➔
        </a>
      </div>
    </section>
  ),
});
