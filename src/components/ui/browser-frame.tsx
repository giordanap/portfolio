import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

type BrowserFrameProps = ComponentPropsWithoutRef<"div"> & {
  title?: string;
  children: ReactNode;
};

export function BrowserFrame({
  title = "portfolio.preview",
  children,
  className,
  ...props
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>

        <p className="hidden rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 font-mono text-xs text-slate-500 sm:block">
          {title}
        </p>

        <div className="h-3 w-12 rounded-full bg-slate-800" />
      </div>

      <div>{children}</div>
    </div>
  );
}
