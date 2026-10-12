import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/strategy", label: "Strategy" },
  { to: "/digital-work", label: "Digital Work" },
  { to: "/event-planning", label: "Event Planning" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-2 px-6 py-3 text-sm sm:justify-end">
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
      </nav>
    </header>
  );
}

export const CONTACT_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=alexaday2003@gmail.com&su=Let%27s%20Work%20Together";

export function SiteFooter() {
  return (
    <footer className="border-t py-10 text-center">
      <a href={CONTACT_URL} target="_blank" rel="noreferrer" className="pill">
        Let's Build Your Strategy ➔
      </a>
      <p className="mt-4 text-sm text-muted-foreground">© {new Date().getFullYear()} Alexa Day</p>
    </footer>
  );
}
