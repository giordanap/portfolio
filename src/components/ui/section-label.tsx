import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type SectionLabelProps = ComponentPropsWithoutRef<"p">;

export function SectionLabel({ className, ...props }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300",
        className,
      )}
      {...props}
    />
  );
}
