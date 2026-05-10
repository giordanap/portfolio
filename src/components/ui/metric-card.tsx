import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type MetricCardProps = ComponentPropsWithoutRef<"article"> & {
  value: string;
  label: string;
  description?: string;
};

export function MetricCard({
  value,
  label,
  description,
  className,
  ...props
}: MetricCardProps) {
  return (
    <article
      className={cn("glass-card p-6 transition hover:border-cyan-400/35", className)}
      {...props}
    >
      <p className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
        {value}
      </p>

      <h3 className="mt-3 text-base font-semibold text-slate-100">{label}</h3>

      {description && (
        <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      )}
    </article>
  );
}
