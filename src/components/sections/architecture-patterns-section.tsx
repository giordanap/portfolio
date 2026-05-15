"use client";

import { motion } from "framer-motion";

import { architecturePatterns } from "@/data/architecture-patterns";

export function ArchitecturePatternsSection() {
  return (
    <section
      id="patterns"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.14),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(16,185,129,0.1),transparent_28%),radial-gradient(circle_at_50%_92%,rgba(168,85,247,0.12),transparent_34%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
              Architecture patterns
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Patterns I use to make backend systems safer to operate.
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            These are the recurring architecture patterns behind the systems I
            build: gateways, queues, DLQs, retries, background jobs, events,
            service communication, audit trails and observability.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {architecturePatterns.map((pattern, index) => (
            <motion.article
              key={pattern.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex min-h-full flex-col rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-2xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  {pattern.label}
                </span>

                <span className="text-sm text-slate-500">0{index + 1}</span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {pattern.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                {pattern.description}
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  {pattern.flow.map((step, stepIndex) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                        {step}
                      </span>

                      {stepIndex < pattern.flow.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="text-xs text-slate-500"
                        >
                          →
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {pattern.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tag}
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
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                Why patterns matter
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Tools change, but production problems repeat.
              </h3>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              This section connects technologies to reusable decisions. The
              goal is to show how I approach backend architecture beyond a list
              of frameworks or cloud services.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
