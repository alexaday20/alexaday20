import { Link } from "@tanstack/react-router";
import { ContactButton, useContact } from "@/components/Interactive";

const links = [
  { to: "/", label: "Home" },
  { to: "/strategy", label: "Strategy" },
  { to: "/digital-work", label: "Digital Work" },
  { to: "/event-planning", label: "Event Planning" },
  { to: "/work-with-me", label: "Work With Me" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-3 text-sm sm:justify-end">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "font-semibold text-foreground" }}
            activeOptions={{ exact: true }}
          >
            {l.label}
          </Link>
        ))}
        <TalkLink />
      </nav>
    </header>
  );
}

function TalkLink() {
  const open = useContact();
  return (
    <button
      type="button"
      onClick={open}
      className="hidden rounded-full border border-foreground px-4 py-1 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background sm:inline-block"
    >
      Let's Talk
    </button>
  );
}

export function MobileTalk() {
  const open = useContact();
  return (
    <button
      type="button"
      onClick={open}
      className="fixed bottom-4 right-4 z-40 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-xl sm:hidden"
    >
      Let's Talk
    </button>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t py-12 text-center">
      <p className="font-display text-2xl md:text-3xl">Ready to grow your brand?</p>
      <ContactButton className="pill-solid mt-5" />
      <p className="mt-5 text-sm text-muted-foreground">© {new Date().getFullYear()} Alexa Day · Oklahoma City</p>
    </footer>
  );
}
