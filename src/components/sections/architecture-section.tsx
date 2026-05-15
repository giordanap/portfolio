"use client";

import { useState } from "react";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { GlassCard } from "@/components/ui/glass-card";
import { TechPill } from "@/components/ui/tech-pill";
import {
  architectureCarouselSlides,
  type ArchitectureCarouselSlide,
} from "@/data/architecture-carousel";

const toneClasses: Record<
  ArchitectureCarouselSlide["visualTone"],
  {
    badge: "cyan" | "emerald" | "violet";
    accent: string;
    border: string;
    node: string;
    glow: string;
    text: string;
  }
> = {
  cyan: {
    badge: "cyan",
    accent: "text-cyan-300",
    border: "border-cyan-400/30",
    node: "border-cyan-400/25 bg-cyan-400/10 text-cyan-100",
    glow: "shadow-[0_0_70px_rgba(34,211,238,0.16)]",
    text: "text-cyan-200",
  },
  emerald: {
    badge: "emerald",
    accent: "text-emerald-300",
    border: "border-emerald-400/30",
    node: "border-emerald-400/25 bg-emerald-400/10 text-emerald-100",
    glow: "shadow-[0_0_70px_rgba(52,211,153,0.14)]",
    text: "text-emerald-200",
  },
  violet: {
    badge: "violet",
    accent: "text-violet-300",
    border: "border-violet-400/30",
    node: "border-violet-400/25 bg-violet-400/10 text-violet-100",
    glow: "shadow-[0_0_70px_rgba(167,139,250,0.14)]",
    text: "text-violet-200",
  },
};

export function ArchitectureSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = architectureCarouselSlides[activeIndex];
  const activeTone = toneClasses[activeSlide.visualTone];

  const goToPreviousSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? architectureCarouselSlides.length - 1
        : currentIndex - 1,
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === architectureCarouselSlides.length - 1
        ? 0
        : currentIndex + 1,
    );
  };

  return (
    <Section
      id="architecture"
      eyebrow="Architecture carousel"
      title="Backend architecture patterns shown as controlled system flows."
      description="Explore the backend systems I work with: API gateways, async processing, gRPC microservices, file pipelines and production reliability loops."
    >
      <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
        <Reveal direction="up">
          <div className="glass-panel border-gradient overflow-hidden p-5 sm:p-6">
            <div
              className={`relative overflow-hidden rounded-3xl border ${activeTone.border} bg-slate-950/70 p-5 sm:p-6 ${activeTone.glow}`}
            >
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(167,139,250,0.12),transparent_28%),radial-gradient(circle_at_50%_92%,rgba(52,211,153,0.08),transparent_34%)]" />

              <div className="relative">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <Badge variant={activeTone.badge}>{activeSlide.eyebrow}</Badge>

                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    {activeSlide.flowLabel}
                  </p>
                </div>

                <div aria-live="polite">
                  <p
                    className={`mb-3 text-sm font-semibold uppercase tracking-[0.28em] ${activeTone.accent}`}
                  >
                    0{activeIndex + 1} / 0{architectureCarouselSlides.length}
                  </p>

                  <h3 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                    {activeSlide.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                    {activeSlide.description}
                  </p>
                </div>

                <div className="mt-8 rounded-[2rem] border border-slate-800 bg-slate-950/70 p-5">
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {activeSlide.flow.map((step, index) => (
                      <div
                        key={step}
                        className={`relative min-h-28 rounded-2xl border p-4 ${activeTone.node}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-xs font-bold opacity-70">
                            0{index + 1}
                          </span>

                          {index < activeSlide.flow.length - 1 ? (
                            <span
                              aria-hidden="true"
                              className="text-sm opacity-60"
                            >
                              →
                            </span>
                          ) : (
                            <span
                              aria-hidden="true"
                              className="text-sm opacity-60"
                            >
                              ✓
                            </span>
                          )}
                        </div>

                        <p className="mt-5 text-base font-semibold leading-6">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeSlide.tags.map((tag, index) => (
                    <TechPill
                      key={tag}
                      tone={index < 2 ? "primary" : "secondary"}
                    >
                      {tag}
                    </TechPill>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={goToPreviousSlide}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:text-cyan-100"
                    >
                      Previous
                    </button>

                    <button
                      type="button"
                      onClick={goToNextSlide}
                      className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200/70 hover:bg-cyan-300/15"
                    >
                      Next
                    </button>
                  </div>

                  <div
                    aria-label="Architecture carousel slide selector"
                    className="flex flex-wrap gap-2"
                  >
                    {architectureCarouselSlides.map((slide, index) => (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Show ${slide.title}`}
                        aria-current={activeIndex === index ? "true" : undefined}
                        className={`h-2.5 rounded-full transition ${
                          activeIndex === index
                            ? "w-8 bg-cyan-300"
                            : "w-2.5 bg-slate-700 hover:bg-slate-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal direction="left" delay={0.08}>
            <BrowserFrame title="architecture.flow.ts">
              <div className="space-y-4 p-5 font-mono text-sm leading-6 text-slate-300">
                <p>
                  <span className="text-cyan-300">architecture</span>
                  <span className="text-slate-500">.</span>
                  <span className="text-violet-300">pattern</span>
                  <span className="text-slate-500"> = </span>
                  <span className="text-emerald-300">{activeSlide.id}</span>
                </p>
                <p>
                  <span className="text-cyan-300">entrypoint</span>
                  <span className="text-slate-500">.</span>
                  <span className="text-violet-300">flow</span>
                  <span className="text-slate-500"> = </span>
                  <span className="text-emerald-300">
                    {activeSlide.flowLabel}
                  </span>
                </p>
                <p>
                  <span className="text-cyan-300">failure</span>
                  <span className="text-slate-500">.</span>
                  <span className="text-violet-300">strategy</span>
                  <span className="text-slate-500"> = </span>
                  <span className="text-emerald-300">retry + isolate + observe</span>
                </p>
                <p>
                  <span className="text-cyan-300">ops</span>
                  <span className="text-slate-500">.</span>
                  <span className="text-violet-300">visibility</span>
                  <span className="text-slate-500"> = </span>
                  <span className="text-emerald-300">logs + audits + metrics</span>
                </p>
              </div>
            </BrowserFrame>
          </Reveal>

          <Reveal direction="left" delay={0.16}>
            <GlassCard className="p-6">
              <div className="mb-5">
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.24em] ${activeTone.accent}`}
                >
                  Why this matters
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-100">
                  {activeSlide.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {activeSlide.highlights.map((highlight, index) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-slate-400"
                  >
                    <span
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${activeTone.node}`}
                    >
                      {index + 1}
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal direction="left" delay={0.24}>
            <GlassCard className="p-6">
              <p className="text-sm leading-7 text-slate-400">
                <span className={`font-semibold ${activeTone.text}`}>
                  Portfolio focus:
                </span>{" "}
                this carousel shows systems and architecture decisions instead
                of a resume-style technology list. Each slide connects tools to
                a concrete backend flow.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
