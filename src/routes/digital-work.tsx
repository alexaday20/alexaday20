import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetails, S } from "@/components/ProjectDetails";
import { IPhone, Laptop, media } from "@/components/Devices";
import reel1 from "@/assets/site/reel-1.mp4.asset.json";
import reel2 from "@/assets/site/reel-2.mp4.asset.json";
import reel1p from "@/assets/site/reel-1-poster.jpg.asset.json";
import reel2p from "@/assets/site/reel-2-poster.jpg.asset.json";
import mcm from "@/assets/site/mcmahon.mp4.asset.json";
import mcmp from "@/assets/site/mcmahon-poster.jpg.asset.json";
import g1 from "@/assets/site/graphic-1.jpg.asset.json";
import g2 from "@/assets/site/graphic-2.png.asset.json";
import g3 from "@/assets/site/graphic-3.jpg.asset.json";
import g4 from "@/assets/site/graphic-4.png.asset.json";
import g5 from "@/assets/site/graphic-5.jpg.asset.json";
import g6 from "@/assets/site/graphic-6.png.asset.json";
import s1 from "@/assets/site/saddle-1.png.asset.json";
import s2 from "@/assets/site/saddle-2.png.asset.json";

export const Route = createFileRoute("/digital-work")({
  head: () => ({
    meta: [
      { title: "Digital Work — Alexa Day" },
      { name: "description", content: "Social media, short-form video, and brand content by Alexa Day." },
      { property: "og:title", content: "Digital Work — Alexa Day" },
      { property: "og:description", content: "Reels, carousels, brand videos, and brand concepts for medical, lifestyle, food, and nonprofit clients." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DigitalWork,
});

const Phone = ({ src, poster, className = "" }: { src: string; poster: string; className?: string }) => (
  <IPhone className={`max-w-[250px] ${className}`}>
    <video src={src} poster={poster} controls playsInline preload="none" className="h-full w-full object-cover" />
  </IPhone>
);

function Gallery({ title, imgs }: { title: string; imgs: string[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-10 text-center text-3xl">{title}</h2>
      <div className="grid items-start gap-4 sm:grid-cols-3">
        {imgs.map((u) => (
          <img
            key={u}
            src={u}
            alt=""
            loading="lazy"
            className={`aspect-[4/5] w-full ${u === g3.url ? "bg-specials object-contain" : "object-cover object-top"}`}
          />
        ))}
      </div>
    </section>
  );
}

function DigitalWork() {
  return (
    <div className="overflow-x-clip">
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
        <ProjectDetails
          title={<>Cosmetic<br />Surgery<br />Affiliates</>}
          role="Social Media Coordinator"
          intro="I created and managed content across Instagram, TikTok, Facebook, and in-office displays for four surgeons and two medspa providers, in a patient-first voice that educates rather than sells."
          rows={[
            ["Video", "Scripted, filmed, and edited provider-led Reels, with filming guides so providers knew exactly what to capture."],
            ["Design", "Educational carousels built within the practice's brand kit."],
            ["Growth", "SEO-driven captions paired with comment-to-DM automation that turned engagement into consultation inquiries."],
          ]}
          note={<>Featured: <S>expert-led education</S> and <S>authority-driven trust.</S></>}
        />
        <div className="flex items-center justify-center gap-6 px-2 py-6 sm:gap-10">
          <Phone src={reel1.url} poster={reel1p.url} className="rotate-[5deg]" />
          <Phone src={reel2.url} poster={reel2p.url} className="-rotate-[5deg]" />
        </div>
      </section>

      <Gallery title="Graphics Designed to Engage" imgs={[g1.url, g2.url, g3.url]} />
      <Gallery title="Graphics Designed to Inform" imgs={[g4.url, g5.url, g6.url]} />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:py-20">
        <div className="order-2 flex justify-center gap-5 sm:gap-8 md:order-1">
          <IPhone className="max-w-[290px]">
            <div className="flex h-full w-full items-end bg-[#dddfdc] pt-[11%]">
              <img src={s1.url} alt="Saddle & Stone jewelry care graphic" className="h-full w-full object-cover object-top" />
            </div>
          </IPhone>
          <IPhone className="mt-12 max-w-[290px]">
            <div className="flex h-full w-full items-end bg-[#bfb09d] pt-[11%]">
              <img src={s2.url} alt="Saddle & Stone outfit graphic" className="h-full w-full object-cover object-top" />
            </div>
          </IPhone>
        </div>
        <div className="order-1 md:order-2">
          <ProjectDetails
            title="Saddle & Stone"
            role="Freelance Social Media & Digital Content"
            intro="Social content for an equestrian-inspired apparel and lifestyle brand, created to grow awareness, engagement, and online sales among riders and country lifestyle audiences."
            rows={[
              ["Pillars", "Built content pillars that keep the feed focused and on-brand."],
              ["Reels", "Created Instagram Reels and product graphics in the brand's Western style."],
              ["Engagement", "Ran audience engagement strategies, guided by performance insights."],
            ]}
            note={<>The result: <S>a cohesive feed</S> that brings the brand's <S>Western identity</S> to life on social.</>}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1fr_1.25fr] md:py-20">
        <ProjectDetails
          title="Paradise Spreads"
          role="Brand Rework Proposal"
          intro="A proposed brand rework for a woman-owned, allergen-friendly, plant-based food brand from Northwest Indiana that wanted a stronger online presence and new customers beyond its home market."
          rows={[
            ["Visuals", "Reimagined the brand's tropical aesthetic for social so it feels fresh, cohesive, and scroll-stopping."],
            ["Layout", "Rethought the layout and visual structure across the feed."],
            ["Rebrand", "Created sample rebranding concepts to help shape the brand's messaging."],
          ]}
          note={<>Balancing a <S>playful, laid-back personality</S> with a <S>clean-label, allergy-safe promise.</S></>}
        />
        <div className="grid grid-cols-[1fr_2.27fr] items-start gap-2.5 sm:gap-3">
          <img src={media("paradise-jar.jpg")} alt="Paradise Spreads chocolate jar concept" className="w-full rounded-2xl" />
          <img src={media("paradise-logo.jpg")} alt="Paradise Spreads logo concept" className="w-full rounded-2xl" />
          <div className="col-span-2 grid grid-cols-[326fr_314fr] items-start gap-2.5 sm:gap-3">
            <img src={media("paradise-tagline.jpg")} alt="The blissfully sweet, plant-based spread" className="w-full rounded-2xl" />
            <img src={media("paradise-smoothie.jpg")} alt="Chocolate smoothie with Paradise Spread" className="w-full rounded-2xl" />
          </div>
          <img src={media("paradise-strawberry.jpg")} alt="Paradise Spreads strawberry jar product graphic" className="col-span-2 w-full rounded-2xl" />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr] md:py-20">
        <div className="order-2 px-[4%] md:order-1">
          <Laptop>
            <video src={mcm.url} poster={mcmp.url} controls playsInline preload="none" className="block aspect-video w-full" />
          </Laptop>
        </div>
        <div className="order-1 md:order-2">
          <ProjectDetails
            title="McMahon Foundation"
            role="Creative Director"
            intro="I helped lead a team to finalize the brand identity of a Lawton-based foundation that has served Southwest Oklahoma since 1940, honoring its history, values, and regional legacy."
            rows={[
              ["Brand", "A comprehensive brand guide built on credibility, trust, and long-term impact."],
              ["Script", "Wrote the brand video script and directed its voiceover with a University of Oklahoma film professor."],
              ["Production", "With no production budget, combined existing footage with on-site filming in Lawton."],
            ]}
            note={<>The result: <S>a polished brand video</S> that brings the Foundation's story to life.</>}
          />
        </div>
      </section>
    </div>
  );
}
