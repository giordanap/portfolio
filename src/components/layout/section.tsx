import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section-padding scroll-mt-24", className)}
      {...props}
    >
      <div className="section-container">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                {eyebrow}
              </p>
            )}

            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
