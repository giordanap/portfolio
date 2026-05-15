"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  featuredProjects,
  projectPrinciples,
} from "@/data/featured-projects";

export function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(168,85,247,0.12),transparent_34%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-sky-300">
              Selected systems
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Systems that show backend judgment, not a resume timeline.
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            This section highlights representative systems and architecture
            patterns: gateway platforms, cloud async processing and
            contract-first product backends. The goal is to show how I think
            about technical boundaries, reliability and delivery.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group flex min-h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/75 shadow-2xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-sky-300/40"
            >
              <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-slate-950">
                <Image
                  src={project.screenshot.src}
                  alt={project.screenshot.alt}
                  width={960}
                  height={540}
                  className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
                    {project.label}
                  </span>

                  <span className="text-sm text-slate-500">0{index + 1}</span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm font-medium text-sky-200">
                  {project.role}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-sm font-semibold text-white">
                    What this system shows
                  </p>

                  <ul className="mt-4 space-y-3">
                    {project.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex gap-3 text-sm leading-6 text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
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
                Selection criteria
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                I highlight systems where engineering decisions matter.
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {projectPrinciples.map((principle) => (
                <span
                  key={principle}
                  className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-300"
                >
                  {principle}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
