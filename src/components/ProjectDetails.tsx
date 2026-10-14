import type { ReactNode } from "react";
import { Reveal } from "@/components/Interactive";

export function ProjectDetails({
  title,
  role,
  chips = [],
  rows,
  note,
}: {
  title: ReactNode;
  role: string;
  chips?: string[];
  rows: [string, ReactNode][];
  note?: ReactNode;
}) {
  return (
    <Reveal>
      <h2 className="text-4xl leading-tight md:text-5xl">{title}</h2>
      <p className="mt-2 text-xl italic text-sage">{role}</p>
      {chips.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span key={c} className="rounded-full bg-foreground px-3.5 py-1 text-sm text-background">
              {c}
            </span>
          ))}
        </div>
      )}
      <dl className="mt-6 border-t">
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
