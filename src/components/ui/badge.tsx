import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type BadgeVariant = "default" | "cyan" | "violet" | "emerald" | "muted";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "border-slate-700/80 bg-slate-900/60 text-slate-300",
  cyan: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  violet: "border-violet-400/30 bg-violet-400/10 text-violet-200",
  emerald: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  muted: "border-slate-800 bg-slate-950/60 text-slate-500",
};

export function Badge({
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
