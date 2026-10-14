import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait-cutout.png";
import { ContactButton, CountUp, Reveal } from "@/components/Interactive";
import { media } from "@/components/Devices";
import reelPoster from "@/assets/site/reel-1-poster.jpg.asset.json";
import mcmPoster from "@/assets/site/mcmahon-poster.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexa Day — Social Media & Digital Marketing, Oklahoma City" },
      { name: "description", content: "Social content, short-form video, and social media strategy that grow audiences." },
      { property: "og:title", content: "Alexa Day — Social Media & Digital Marketing" },
      { property: "og:description", content: "Social media strategy, short-form video, and content that grows audiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { to: 105, prefix: "+", suffix: "%", label: "monthly reach" },
  { to: 133, prefix: "+", suffix: "%", label: "follower growth" },
  { to: 17, suffix: "", label: "consultations from one organic campaign" },
  { to: 65, suffix: "", label: "pieces of content a month, at peak" },
];

const services = ["Social Media Strategy", "Short-Form Video", "Copywriting", "Brand Identity", "Content Creation", "Event Planning", "Analytics & Reporting"];

const featured = [
  { img: "", poster: true, title: "Cosmetic Surgery Affiliates", tag: "Social media · Video", href: "/digital-work#csa" },
  { img: "paradise-strawberry.jpg", title: "Paradise Spreads", tag: "Brand rework", href: "/digital-work#paradise" },
  { img: "", mcm: true, title: "McMahon Foundation", tag: "Brand video · Creative direction", href: "/digital-work#mcmahon" },
];

function Index() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="overflow-x-clip">
      {/* HERO */}
      <section className="relative grid md:min-h-[calc(100vh-57px)] md:grid-cols-[1fr_1.05fr]">
        <div className="relative flex items-end justify-center overflow-hidden pt-10">
          <div className="absolute bottom-0 left-1/2 h-[88%] w-[78%] -translate-x-1/2 rounded-t-full bg-gradient-to-b from-[#c9cdbd] to-[#b7bca8]" />
          <div className="absolute left-[8%] top-[14%] h-24 w-24 rounded-full border border-sage/50 floaty md:h-32 md:w-32" />
          <img
            src={portrait}
            alt="Portrait of Alexa Day"
            className="relative h-[56vh] w-auto max-w-none object-contain object-bottom md:h-[calc(100vh-57px-2.5rem)] md:max-h-[880px]"
          />
        </div>
        <div className="flex flex-col justify-center px-7 py-10 md:px-12 md:py-14">
          <p className="eyebrow text-sage">Social Media Strategist · Oklahoma City</p>
          <h1 className="mt-4 text-5xl leading-none tracking-wide text-stone lg:text-7xl">ALEXA DAY</h1>
          <p className="mt-6 font-display text-3xl leading-snug lg:text-[2.6rem] lg:leading-tight">
            Turning creative ideas into on‑brand, <em className="font-serif text-sage">memorable</em> visuals.
          </p>
          <div className="mt-9 grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-2xl bg-foreground/15 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.45)]">
            {stats.map((s) => (
              <div key={s.label} className="bg-card/80 px-5 py-4 backdrop-blur">
                <div className="font-display text-4xl text-foreground lg:text-[2.75rem]">
                  <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm leading-snug text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ContactButton className="bg-foreground text-background hover:bg-transparent hover:text-foreground">Let's Talk ➔</ContactButton>
            <Link to="/digital-work" className="border-b border-foreground/40 pb-0.5 text-base hover:border-foreground">
              See my work
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES MARQUEE */}
      <div className="overflow-hidden border-y border-foreground/15 bg-foreground py-4 text-background">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-xl md:text-2xl">
          {[...services, ...services].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              {s}
              <span className="text-sage">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <Reveal>
          <p className="eyebrow font-semibold text-sage">About Me</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
            Rooted in Oklahoma City, built on <em className="font-serif text-sage">people.</em>
          </h2>
        </Reveal>
        <Reveal delay={120} className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm an Oklahoma City native with a deep love for my community. I believe that when you invest in your community,
            it gives back, and that's where my passion for Oklahoma City businesses comes from.
          </p>
          <p>
            I'm people-oriented at heart. The best understanding and the strongest connections come from time spent together,
            so while my work can always be done remotely, I never want a client to miss the chance to meet, film, or
            collaborate with me in person.
          </p>
          <p>
            I'm also not afraid to be uncomfortable. It's why I've worked in so many different spaces, from bars and event
            planning to agencies and medical practices. Every one is a chance to meet new people and gain new experiences,
            and every one makes my work better.
          </p>
        </Reveal>
      </section>

      {/* FEATURED WORK */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow font-semibold text-sage">Selected Work</p>
              <h2 className="mt-3 text-4xl leading-tight md:text-5xl">A few favorites</h2>
            </div>
            <Link to="/digital-work" className="border-b border-foreground/40 pb-0.5 hover:border-foreground">
              View all work →
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((f, i) => {
              const src = f.poster ? reelPoster.url : f.mcm ? mcmPoster.url : media(f.img);
              return (
                <Reveal key={f.title} delay={i * 120}>
                  <a href={`${base}${f.href.slice(1)}`} className="group block">
                    <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-foreground/10">
                      <img src={src} alt={f.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <p className="eyebrow mt-4 text-muted-foreground">{f.tag}</p>
                    <p className="mt-1 font-display text-2xl">
                      {f.title} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </p>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
