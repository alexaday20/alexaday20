import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait-cutout.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexa Day — PR & Marketing Specialist, Oklahoma City" },
      { name: "description", content: "Social content, short-form video, and PR campaigns that grow audiences." },
      { property: "og:title", content: "Alexa Day — PR & Marketing Specialist" },
      { property: "og:description", content: "Turning creative ideas into on-brand, memorable visuals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="grid md:min-h-[calc(100vh-49px)] md:grid-cols-2">
      <div className="flex items-end justify-center overflow-hidden bg-secondary pt-6">
        <img src={portrait} alt="Portrait of Alexa Day" className="h-[62vh] md:h-[calc(100vh-49px-1.5rem)] max-h-[900px] w-auto max-w-none object-contain object-bottom" />
      </div>
      <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-16">
        <h1 className="text-5xl tracking-wide text-stone lg:text-7xl">ALEXA DAY</h1>
        <p className="eyebrow mt-6 text-muted-foreground">Digital Marketing Consultant · Oklahoma City</p>
        <p className="mt-6 font-display text-3xl leading-snug lg:text-4xl">
          Turning creative ideas into on‑brand, <em className="font-serif text-sage">memorable</em> visuals.
        </p>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
          Social content, short-form video, and PR campaigns that grow audiences.
        </p>
      </div>
    </section>
  );
}
