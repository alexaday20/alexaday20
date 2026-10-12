import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetails, S } from "@/components/ProjectDetails";
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
      { property: "og:description", content: "Reels, carousels, and brand videos for medical, lifestyle, and nonprofit clients." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DigitalWork,
});

const Phone = ({ src, poster, className = "" }: { src: string; poster: string; className?: string }) => (
  <div className={`phone aspect-[9/16] w-full max-w-[260px] ${className}`}>
    <video src={src} poster={poster} controls playsInline preload="none" className="h-full w-full object-cover" />
  </div>
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
    <div>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <ProjectDetails
          title="Cosmetic Surgery Affiliates"
          role="Social Media Coordinator"
          intro="I created and managed content across Instagram, TikTok, Facebook, and in-office displays for four surgeons and two medspa providers, in a patient-first voice that educates rather than sells."
          rows={[
            ["Video", "Scripted, filmed, and edited provider-led Reels, with filming guides so providers knew exactly what to capture."],
            ["Design", "Educational carousels built within the practice's brand kit."],
            ["Growth", "SEO-driven captions paired with comment-to-DM automation that turned engagement into consultation inquiries."],
          ]}
          note={<>On the right: <S>expert-led education</S> and <S>authority-driven trust.</S></>}
        />
        <div className="flex justify-center gap-6">
          <Phone src={reel1.url} poster={reel1p.url} />
          <Phone src={reel2.url} poster={reel2p.url} className="mt-16" />
        </div>
      </section>

      <Gallery title="Graphics Designed to Engage" imgs={[g1.url, g2.url, g3.url]} />
      <Gallery title="Graphics Designed to Inform" imgs={[g4.url, g5.url, g6.url]} />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
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
        <div className="flex justify-center gap-6">
          <img src={s1.url} alt="Saddle & Stone jewelry care graphic" className="phone w-full max-w-[260px]" />
          <img src={s2.url} alt="Saddle & Stone outfit graphic" className="phone -mt-6 w-full max-w-[260px]" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1.3fr_1fr]">
        <div className="rounded-xl border-[12px] border-device bg-device shadow-2xl">
          <video src={mcm.url} poster={mcmp.url} controls playsInline preload="none" className="aspect-video w-full rounded-sm" />
        </div>
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
      </section>
    </div>
  );
}
