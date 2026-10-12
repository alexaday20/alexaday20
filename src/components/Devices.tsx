import type { ReactNode } from "react";

/** Path to a file in public/media, respecting the site's base folder. */
export const media = (name: string) => `${import.meta.env.BASE_URL}media/${name}`;

const btn = "absolute w-[3px] bg-gradient-to-b from-[#4a4a4d] to-[#2c2c2e]";

/** iPhone-style frame: titanium edge, side buttons, black bezel, Dynamic Island. */
export function IPhone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative w-full ${className}`}>
      <span className={`${btn} -left-[2px] top-[16%] h-[5%] rounded-l-sm`} />
      <span className={`${btn} -left-[2px] top-[25%] h-[9%] rounded-l-sm`} />
      <span className={`${btn} -left-[2px] top-[36%] h-[9%] rounded-l-sm`} />
      <span className={`${btn} -right-[2px] top-[28%] h-[13%] rounded-r-sm`} />
      <div className="rounded-[18%/8.5%] bg-gradient-to-br from-[#5b5b5f] via-[#26262a] to-[#4a4a4e] p-[2.5px] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.55),0_10px_20px_-10px_rgba(0,0,0,0.3)]">
        <div className="rounded-[17%/8%] bg-black p-[4%]">
          <div className="relative aspect-[9/18] overflow-hidden rounded-[13%/6.5%] bg-black">
            {children}
            <div className="pointer-events-none absolute left-1/2 top-[2.2%] h-[3.6%] w-[31%] -translate-x-1/2 rounded-full bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Laptop with an angled keyboard deck below the screen. */
export function Laptop({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[640px]">
      {/* lid */}
      <div className="relative mx-auto w-[88%] rounded-t-[14px] bg-gradient-to-b from-[#2b2b2e] to-[#141416] p-[2.4%] pb-[3.2%] shadow-[0_0_0_1.5px_#8d8d92]">
        <span className="absolute left-1/2 top-[1%] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#3a3a3e]" />
        <div className="overflow-hidden rounded-[3px] bg-black">{children}</div>
      </div>
      {/* hinge */}
      <div className="mx-auto h-[7px] w-[90%] bg-gradient-to-b from-[#6e6e73] to-[#b9b9be]" />
      {/* keyboard deck, tilted away from the viewer */}
      <div className="[perspective:1400px]">
        <div className="origin-top rounded-b-[18px] bg-gradient-to-b from-[#d9d9de] via-[#c8c8cd] to-[#a9a9ae] px-[6%] pb-[3%] pt-[2.5%] shadow-[0_24px_40px_-18px_rgba(0,0,0,0.5)] [transform:rotateX(58deg)]">
          <div className="grid grid-cols-[repeat(14,minmax(0,1fr))] gap-[3px] rounded-md bg-[#1d1d1f] p-[4px]">
            {Array.from({ length: 56 }).map((_, i) => (
              <span
                key={i}
                className={`h-[14px] rounded-[2px] bg-[#2f2f33] ${i === 49 ? "col-span-6" : ""}`}
              />
            )).slice(0, 51)}
          </div>
          <div className="mx-auto mt-[4%] h-[46px] w-[38%] rounded-md border border-[#9d9da2] bg-[#cfcfd4]" />
        </div>
      </div>
    </div>
  );
}
