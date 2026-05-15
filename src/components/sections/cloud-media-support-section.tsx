"use client";

import { motion } from "framer-motion";

import {
  cloudMediaPillars,
  cloudMediaPipeline,
  cloudMediaSignals,
} from "@/data/cloud-media";

export function CloudMediaSupportSection() {
  return (
    <section
      id="cloud-media"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_80%_40%,rgba(129,140,248,0.12),transparent_34%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
            Cloud & async architecture
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Heavy workloads should not block critical APIs.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            I design backend flows where queues, workers, storage, retries and
            observability protect the main API while background operations keep
            moving safely under real production conditions.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-4">
          {cloudMediaSignals.map((signal, index) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/40 backdrop-blur"
            >
              <div className="text-3xl font-semibold text-white">
                {signal.value}
              </div>
              <p className="mt-2 text-sm text-slate-400">{signal.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {cloudMediaPillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 shadow-2xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                {pillar.label}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {pillar.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {pillar.description}
              </p>

              <ul className="mt-6 space-y-3">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                Async production path
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                From API request to observable background processing.
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {cloudMediaPipeline.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                >
                  <div className="text-xs font-semibold text-cyan-300">
                    0{index + 1}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
