"use client";

import { motion } from "framer-motion";

import {
  technicalExperience,
  technicalOperatingStyle,
  technicalStackGroups,
} from "@/data/technical-experience";

export function TechnicalExperienceSection() {
  return (
    <section
      id="technical-experience"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(14,165,233,0.14),transparent_30%),radial-gradient(circle_at_78%_28%,rgba(99,102,241,0.14),transparent_30%),radial-gradient(circle_at_52%_88%,rgba(16,185,129,0.1),transparent_34%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-indigo-300">
              Technology map
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Technologies grouped by how they support backend systems.
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            The goal is not to show every tool as equally important. My core is
            backend engineering with Node.js, NestJS, TypeScript, AWS,
            microservices and production reliability. Frontend, .NET and Azure
            appear as complementary experience.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-4">
          {technicalExperience.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-white/10 bg-slate-900/75 p-7 shadow-2xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-indigo-300/40"
            >
              <span className="rounded-full border border-indigo-300/20 bg-indigo-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-200">
                {item.period}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
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

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
              Stack map
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              Main stack first, complementary tools clearly separated.
            </h3>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {technicalStackGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
                >
                  <h4 className="font-semibold text-white">{group.title}</h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {group.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-7 shadow-2xl shadow-slate-950/40"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
              Operating style
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              How I choose and apply technologies.
            </h3>

            <ul className="mt-8 space-y-4">
              {technicalOperatingStyle.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300"
                >
                  <span className="text-xs font-semibold text-indigo-300">
                    0{index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-3xl border border-indigo-300/20 bg-indigo-300/10 p-5">
              <p className="text-sm font-semibold text-indigo-100">
                Portfolio positioning
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Backend, cloud and architecture remain the main signal. Other
                technologies are shown as support for product delivery and
                platform integration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
