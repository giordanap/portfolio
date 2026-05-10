import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type GlassCardProps = ComponentPropsWithoutRef<"div"> & {
  elevated?: boolean;
  gradientBorder?: boolean;
};

export function GlassCard({
  elevated = false,
  gradientBorder = false,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card",
        elevated && "soft-glow",
        gradientBorder && "border-gradient",
        className,
      )}
      {...props}
    />
  );
}
