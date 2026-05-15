"use client";

import { motion } from "framer-motion";

import {
  productionAreas,
  productionHighlights,
  productionTimeline,
} from "@/data/production-experience";

export function ProductionExperienceSection() {
  return (
    <section
      id="production"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.12),transparent_35%),radial-gradient(circle_at_75%_15%,rgba(34,197,94,0.12),transparent_28%),radial-gradient(circle_at_25%_85%,rgba(99,102,241,0.14),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:sticky lg:top-28"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-emerald-300">
            Problems I solve
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Production problems need architecture, not only patches.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            I work on backend systems where failure behavior matters: timeouts,
            memory leaks, concurrency issues, high-volume batches, fragile
            integrations and missing traceability.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {productionHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-slate-950/40 backdrop-blur"
              >
                <div className="text-3xl font-semibold text-white">
                  {highlight.metric}
                </div>

                <div className="mt-2 text-sm font-semibold text-emerald-200">
                  {highlight.label}
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            {productionAreas.map((area, index) => (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-7 shadow-2xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-emerald-300/40"
              >
                <h3 className="text-xl font-semibold text-white">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {area.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {area.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
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
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                Reliability workflow
              </p>

              <h3 className="text-2xl font-semibold text-white">
                From production signal to stronger system design.
              </h3>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {productionTimeline.map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-2xl border border-white/10 bg-slate-950/70 p-5"
                >
                  <div className="text-xs font-semibold text-emerald-300">
                    {item.step}
                  </div>

                  <h4 className="mt-3 text-base font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
