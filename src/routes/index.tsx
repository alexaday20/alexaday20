import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait-cutout.png";
import { ContactButton, CountUp } from "@/components/Interactive";

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
  { to: 17, suffix: "K", label: "views on a single Reel" },
];

function Index() {
  return (
    <section className="grid md:min-h-[calc(100vh-57px)] md:grid-cols-2">
      <div className="flex items-end justify-center overflow-hidden bg-secondary pt-6">
        <img src={portrait} alt="Portrait of Alexa Day" className="h-[58vh] md:h-[calc(100vh-57px-1.5rem)] max-h-[900px] w-auto max-w-none object-contain object-bottom" />
      </div>
      <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-14">
        <h1 className="text-5xl tracking-wide text-stone lg:text-7xl">ALEXA DAY</h1>
        <p className="eyebrow mt-5 text-muted-foreground">Social Media Strategist · Oklahoma City</p>
        <p className="mt-5 font-display text-3xl leading-snug lg:text-4xl">
          Turning creative ideas into on‑brand, <em className="font-serif text-sage">memorable</em> visuals.
        </p>

        <div className="mt-9 grid max-w-lg grid-cols-2 border-t border-foreground/25">
          {stats.map((s, i) => (
            <div key={s.label} className={`border-b border-foreground/25 py-4 ${i % 2 ? "pl-5" : "border-r pr-5"}`}>
              <div className="font-display text-4xl text-foreground lg:text-5xl">
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm leading-snug text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <ContactButton>Let's Talk ➔</ContactButton>
          <Link to="/digital-work" className="border-b border-foreground/40 pb-0.5 text-base hover:border-foreground">
            See my work
          </Link>
        </div>
      </div>
    </section>
  );
}
