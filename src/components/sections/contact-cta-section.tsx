"use client";

import { motion } from "framer-motion";

import {
  contactAvailability,
  contactCta,
  contactSignals,
} from "@/data/contact-cta";

export function ContactCtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(14,165,233,0.18),transparent_32%),radial-gradient(circle_at_78%_24%,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.16),transparent_36%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-slate-950/50 backdrop-blur"
        >
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
                {contactCta.eyebrow}
              </p>

              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-6xl">
                {contactCta.title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {contactCta.description}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={contactCta.primaryAction.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
                >
                  {contactCta.primaryAction.label}
                </a>

                <a
                  href={contactCta.secondaryAction.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/50"
                >
                  {contactCta.secondaryAction.label}
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {contactAvailability.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 bg-slate-950/60 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                Best fit
              </p>

              <div className="mt-7 space-y-4">
                {contactSignals.map((signal, index) => (
                  <motion.article
                    key={signal.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-xs font-semibold text-cyan-200">
                        0{index + 1}
                      </span>

                      <div>
                        <h3 className="font-semibold text-white">
                          {signal.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {signal.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                <p className="text-sm font-semibold text-cyan-100">
                  Portfolio focus
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Backend systems with full-stack range, cloud delivery
                  experience and a practical mindset for systems that must work
                  reliably in production.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
