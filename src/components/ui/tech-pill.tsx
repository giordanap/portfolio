import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type TechPillTone = "primary" | "secondary";

type TechPillProps = ComponentPropsWithoutRef<"span"> & {
  tone?: TechPillTone;
};

const toneClasses: Record<TechPillTone, string> = {
  primary: "border-cyan-400/25 bg-cyan-400/10 text-cyan-100",
  secondary: "border-slate-700/80 bg-slate-900/60 text-slate-300",
};

export function TechPill({
  tone = "secondary",
  className,
  ...props
}: TechPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition hover:border-cyan-400/45 hover:text-cyan-100",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
