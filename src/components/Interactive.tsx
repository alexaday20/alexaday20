import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- reveal on scroll ---------- */
export function useInView<T extends Element>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (typeof IntersectionObserver === "undefined") return setSeen(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen, threshold]);
  return [ref, seen] as const;
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.12);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${seen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- animated number ---------- */
export function CountUp({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [ref, seen] = useInView<HTMLSpanElement>(0.4);
  const [v, setV] = useState(to);
  const started = useRef(false);
  useEffect(() => {
    if (!seen || started.current) return;
    started.current = true;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    setV(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return (
    <span ref={ref}>
      {prefix}
      {v.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ---------- accordion ---------- */
export function Expand({ title, children, defaultOpen = false, className = "" }: { title: ReactNode; children: ReactNode; defaultOpen?: boolean; className?: string }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`border-b ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-lg"
      >
        <span>{title}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-foreground/40 text-base transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="pb-5 text-base leading-relaxed text-muted-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- lightbox ---------- */
export function Lightbox({ src, alt, onClose }: { src: string | null; alt?: string; onClose: () => void }) {
  useEffect(() => {
    if (!src) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [src, onClose]);
  if (!src) return null;
  return (
    <div onClick={onClose} className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-sm">
      <img src={src} alt={alt ?? ""} className="max-h-[88vh] max-w-full rounded-lg shadow-2xl" />
      <button type="button" aria-label="Close" className="absolute right-5 top-4 text-3xl text-white">
        ×
      </button>
    </div>
  );
}

/* ---------- contact panel ---------- */
export const EMAIL = "alexaday2003@gmail.com";
const Ctx = createContext<() => void>(() => {});
export const useContact = () => useContext(Ctx);

const needs = ["Social media package", "Branding", "Event planning", "Full-time role", "Something else"];

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [biz, setBiz] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  const send = () => {
    const subject = `Let's work together${biz ? ` — ${biz}` : ""}`;
    const body = [
      `Hi Alexa,`,
      ``,
      msg || `I'd love to talk about working together.`,
      ``,
      picked.length ? `Interested in: ${picked.join(", ")}` : "",
      name ? `— ${name}${biz ? `, ${biz}` : ""}` : "",
    ]
      .filter((l, i) => l !== "" || i < 3)
      .join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const field = "w-full border-b border-foreground/30 bg-transparent py-2 text-base outline-none placeholder:text-muted-foreground/70 focus:border-sage";

  return (
    <Ctx.Provider value={() => setOpen(true)}>
      {children}
      <div
        className={`fixed inset-0 z-[90] ${open ? "pointer-events-auto visible" : "pointer-events-none invisible delay-300"}`}
        aria-hidden={!open}
      >
        {open && <div className="absolute inset-0 animate-in fade-in bg-black/40 duration-300" onClick={() => setOpen(false)} />}
        <aside
          role="dialog"
          aria-label="Contact Alexa"
          className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col overflow-y-auto bg-background px-7 py-8 shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="eyebrow font-semibold text-sage">Let's Talk</p>
              <h2 className="mt-2 text-3xl leading-tight">Tell me about your brand</h2>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="text-3xl leading-none text-muted-foreground hover:text-foreground">
              ×
            </button>
          </div>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Pick what you're interested in and add a note. It opens a ready-to-send email, and I'll get back to you within a day or two.
          </p>

          <div className="mt-6">
            <p className="eyebrow mb-3 font-semibold">I'm interested in</p>
            <div className="flex flex-wrap gap-2">
              {needs.map((n) => {
                const on = picked.includes(n);
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setPicked(on ? picked.filter((x) => x !== n) : [...picked, n])}
                    className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${on ? "border-foreground bg-foreground text-background" : "border-foreground/30 hover:border-foreground"}`}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <input className={field} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className={field} placeholder="Business or brand" value={biz} onChange={(e) => setBiz(e.target.value)} />
            <textarea className={`${field} min-h-[96px] resize-none`} placeholder="What are you hoping social media can do for you?" value={msg} onChange={(e) => setMsg(e.target.value)} />
          </div>

          <button type="button" onClick={send} className="pill mt-7 justify-center">
            Send My Note ➔
          </button>

          <div className="mt-8 border-t pt-6">
            <p className="text-sm text-muted-foreground">Prefer to email directly?</p>
            <button type="button" onClick={copy} className="mt-2 flex w-full items-center justify-between rounded-md border border-foreground/25 px-4 py-3 text-left transition-colors hover:border-foreground">
              <span>{EMAIL}</span>
              <span className="eyebrow font-semibold text-sage">{copied ? "Copied ✓" : "Copy"}</span>
            </button>
          </div>
        </aside>
      </div>
    </Ctx.Provider>
  );
}

export function ContactButton({ children = "Let's Build Your Strategy ➔", className = "" }: { children?: ReactNode; className?: string }) {
  const open = useContact();
  return (
    <button type="button" onClick={open} className={`pill ${className}`}>
      {children}
    </button>
  );
}
