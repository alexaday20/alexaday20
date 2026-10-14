import { createFileRoute } from "@tanstack/react-router";
import { CaseHeader, ProjectDetails, S } from "@/components/ProjectDetails";
import { IPhone, Laptop, media } from "@/components/Devices";
import { Lightbox, Reveal } from "@/components/Interactive";
import { useState } from "react";
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

function Gallery({ title, sub, imgs }: { title: string; sub: string; imgs: { src: string; label: string }[] }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal className="mb-10 text-center">
        <h2 className="text-3xl">{title}</h2>
        <p className="mt-2 text-muted-foreground">{sub}</p>
      </Reveal>
      <div className="grid items-start gap-4 sm:grid-cols-3">
        {imgs.map((im, i) => (
          <Reveal key={im.src} delay={i * 120}>
            <button type="button" onClick={() => setOpen(im.src)} className="group relative block w-full overflow-hidden text-left">
              <img
                src={im.src}
                alt={im.label}
                loading="lazy"
                className={`aspect-[4/5] w-full transition-transform duration-500 group-hover:scale-[1.03] object-cover object-top`}
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-12 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {im.label} <span className="opacity-70">· tap to enlarge</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <Lightbox src={open} onClose={() => setOpen(null)} />
    </section>
  );
}

const jump = [
  ["#csa", "Cosmetic Surgery Affiliates"],
  ["#saddle", "Saddle & Stone"],
  ["#paradise", "Paradise Spreads"],
  ["#mcmahon", "McMahon Foundation"],
  ["#phillips", "Phillips 66"],
];

function DigitalWork() {
  return (
    <div className="overflow-x-clip">
      <section className="mx-auto max-w-4xl px-6 pb-2 pt-16 text-center md:pt-20">
        <p className="eyebrow text-muted-foreground">Selected Work</p>
        <h1 className="mt-4 text-4xl leading-tight md:text-6xl">Digital Work</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Every project starts with a real challenge. Here's how I approached each one, and what came of it.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {jump.map(([h, l]) => (
            <a key={h} href={h} className="rounded-full border border-foreground/30 px-4 py-1.5 text-sm transition-colors hover:border-foreground hover:bg-foreground hover:text-background">
              {l}
            </a>
          ))}
        </div>
      </section>

      <section id="csa" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:py-20">
        <CaseHeader n="01" kind="In-House Social Media" title="Cosmetic Surgery Affiliates" tags={["Reels", "Carousels", "SEO captions", "DM automation"]} />
        <div className="grid items-center gap-12 md:grid-cols-2">
        <ProjectDetails
          rows={[
            ["Challenge", "Six providers, three platforms, and one person to run it all, in a field where content has to educate before it can sell."],
            ["Approach", "Built a patient-first content system: provider-led Reels with filming guides, educational carousels in the brand kit, SEO captions, and comment-to-DM automation."],
            ["Results", <>Monthly reach grew 105% and followers 133%. One organic campaign booked 17 consultations, and my creative direction on Dr. Smith's "This or That" Reel reached <S>17K views</S>.</>],
          ]}
        />
        <div className="flex items-center justify-center gap-6 px-2 py-6 sm:gap-10">
          <Phone src={reel1.url} poster={reel1p.url} className="rotate-[5deg]" />
          <Phone src={reel2.url} poster={reel2p.url} className="-rotate-[5deg]" />
        </div>
        </div>
      </section>

      <Gallery
        title="Graphics Designed to Engage"
        sub="Scroll-stopping posts that start conversations and drive comments."
        imgs={[
          { src: g1.url, label: "\"Zoom in\" product tease" },
          { src: g2.url, label: "Brand voice quote graphic" },
          { src: g3.url, label: "Monthly specials with comment-to-DM" },
        ]}
      />
      <Gallery
        title="Graphics Designed to Inform"
        sub="Educational carousels that answer patients' questions before they ask."
        imgs={[
          { src: g4.url, label: "Recovery timeline carousel" },
          { src: g5.url, label: "Procedure results carousel" },
          { src: g6.url, label: "Facelift technique explainer" },
        ]}
      />

      <section id="saddle" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:py-20">
        <CaseHeader n="02" kind="Freelance Client" title="Saddle & Stone" tags={["Content pillars", "Reels", "Product graphics"]} />
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
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
            rows={[
              ["Challenge", "An equestrian-inspired apparel and jewelry brand needed a feed as polished and Western as its products, to reach riders and country lifestyle shoppers."],
              ["Approach", "Built content pillars to keep every post on-brand, then created Reels and product graphics in its Western style, guided by performance insights."],
              ["Results", <>A <S>cohesive feed</S> that brings the brand's <S>Western identity</S> to life and points shoppers to its products.</>],
            ]}
          />
        </div>
        </div>
      </section>

      <section id="paradise" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:py-20">
        <CaseHeader n="03" kind="Brand Rework Proposal" title="Paradise Spreads" tags={["Rebrand concepts", "Feed layout", "Messaging"]} />
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.25fr]">
        <ProjectDetails
          rows={[
            ["Challenge", "A woman-owned, allergen-friendly spread brand from Northwest Indiana wanted a stronger online presence and customers beyond its home market."],
            ["Approach", "Reimagined its tropical look for social, rethought the feed's layout, and built sample rebrand concepts to shape the messaging."],
            ["Results", <>A proposed identity that balances a <S>playful, laid-back personality</S> with a <S>clean-label, allergy-safe promise.</S></>],
          ]}
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
        </div>
      </section>

      <section id="mcmahon" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:py-20">
        <CaseHeader n="04" kind="Creative Direction · Team Project" title="McMahon Foundation" tags={["Brand guide", "Video script", "Voiceover direction"]} />
        <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="order-2 px-[4%] md:order-1">
          <Laptop>
            <video src={mcm.url} poster={mcmp.url} controls playsInline preload="none" className="block aspect-video w-full" />
          </Laptop>
        </div>
        <div className="order-1 md:order-2">
          <ProjectDetails
            rows={[
              ["Challenge", "Finalize the brand identity of a Lawton foundation that has served Southwest Oklahoma since 1940, with no production budget."],
              ["Approach", "Led the team on a brand guide built on trust and impact, wrote the video script, and directed its voiceover with an OU film professor, mixing existing footage with on-site filming."],
              ["Results", <>A <S>polished brand video</S> and printed brand guide that tell the Foundation's story with one consistent voice.</>],
            ]}
          />
        </div>
        </div>
      </section>

      <section id="phillips" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:py-20">
        <CaseHeader n="05" kind="Campaign Proposal · Team Capstone" title="Phillips 66" tags={["Influencer strategy", "UGC campaign", "Audience research"]} />
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr]">
          <ProjectDetails
            rows={[
              ["Challenge", "Phillips 66 is celebrating the Route 66 Centennial and wanted to connect the road's nostalgia with its modern brands (Phillips 66, Conoco, and 76) while driving awareness and app downloads."],
              ["Research", <>Our survey of <S>422 travelers</S> showed convenience drives the decision: 282 said convenient locations would bring them to a Phillips 66 brand, and 116 pointed to a positive past experience.</>],
              ["My Role", <>I created the <S>#FuelYourJourneyWithPhillips66</S> challenge: travelers post road trip content with the hashtag, top entries are featured on Phillips 66, 76, and Conoco socials, and winners earn fuel discounts. I also built the influencer strategy to amplify it with travel creators.</>],
              ["Projected Results", <>Travel creator partnerships to spread the challenge, user-generated content built on social proof to grow trust and engagement, and paid social across YouTube, Instagram, Facebook, and TikTok. Pitched to the Phillips 66 marketing team.</>],
            ]}
          />
          <div className="flex flex-col gap-8">
            <Reveal>
              <img src={media("p66-ugc.jpg")} alt="Tactic 5: Share user-generated content" loading="lazy" className="w-full rounded-xl shadow-[0_18px_35px_-20px_rgba(0,0,0,0.5)]" />
            </Reveal>
          </div>
        </div>
        <div className="mt-10 text-center">
          <a href="https://canva.link/9x1mud0j0z6sfau" target="_blank" rel="noreferrer" className="pill">
            View Full Presentation ➔
          </a>
        </div>
      </section>
    </div>
  );
}
