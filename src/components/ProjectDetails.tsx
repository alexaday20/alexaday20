import type { ReactNode } from "react";

export function ProjectDetails({
  title,
  role,
  intro,
  rows,
  note,
}: {
  title: ReactNode;
  role: string;
  intro: string;
  rows: [string, string][];
  note: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-4xl leading-tight md:text-5xl">{title}</h2>
      <p className="mt-2 text-xl italic text-sage">{role}</p>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>
      <dl className="mt-6 border-t">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[8rem_1fr] gap-4 border-b py-4">
            <dt className="eyebrow pt-1 font-semibold">{k}</dt>
            <dd className="text-base leading-snug">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 text-sm italic text-muted-foreground">{note}</p>
    </div>
  );
}

export const S = ({ children }: { children: ReactNode }) => (
  <span className="text-sage">{children}</span>
);
