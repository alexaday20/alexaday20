import type { ReactNode } from "react";
import { Reveal } from "@/components/Interactive";

export function ProjectDetails({
  title,
  role,
  chips = [],
  rows,
  note,
}: {
  title?: ReactNode;
  role?: string;
  chips?: string[];
  rows: [string, ReactNode][];
  note?: ReactNode;
}) {
  return (
    <Reveal>
      {title && <h2 className="text-4xl leading-tight md:text-5xl">{title}</h2>}
      {role && <p className="mt-2 text-xl italic text-sage">{role}</p>}
      {chips.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span key={c} className="rounded-full bg-foreground px-3.5 py-1 text-sm text-background">
              {c}
            </span>
          ))}
        </div>
      )}
      <dl className={title || chips.length ? "mt-6 border-t" : "md:border-t"}>
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b py-4">
            <dt className="eyebrow pt-1 font-semibold">{k}</dt>
            <dd className="text-base leading-snug">{v}</dd>
          </div>
        ))}
      </dl>
      {note && <p className="mt-5 text-sm italic text-muted-foreground">{note}</p>}
    </Reveal>
  );
}

export const S = ({ children }: { children: ReactNode }) => <span className="text-sage">{children}</span>;

export function CaseHeader({ n, kind, title, tags }: { n: string; kind: string; title: string; tags: string[] }) {
  return (
    <Reveal className="mb-10 flex flex-col gap-5 border-b border-foreground/25 pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow font-semibold text-sage">
          {n} <span className="mx-1 text-foreground/30">/</span> {kind}
        </p>
        <h2 className="mt-3 text-4xl leading-tight md:text-5xl">{title}</h2>
      </div>
      <div className="flex flex-wrap gap-2 md:justify-end">
        {tags.map((c) => (
          <span key={c} className="rounded-full border border-foreground/30 px-3.5 py-1 text-sm">
            {c}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
