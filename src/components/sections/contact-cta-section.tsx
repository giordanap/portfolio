"use client";

import { FormEvent, useMemo, useState } from "react";

import { motion } from "framer-motion";

import {
  contactAvailability,
  contactCta,
  contactSignals,
} from "@/data/contact-cta";

export function ContactCtaSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappMessage = useMemo(() => {
    const normalizedFirstName = firstName.trim() || "[Nombre]";
    const normalizedLastName = lastName.trim() || "[Apellido]";
    const normalizedMessage =
      message.trim() || "Me gustaría conversar contigo sobre una oportunidad o proyecto.";

    return `Hola Giordan, soy ${normalizedFirstName} ${normalizedLastName}. Te contacto desde tu portfolio.\n\n${normalizedMessage}`;
  }, [firstName, lastName, message]);

  const whatsappHref = `https://wa.me/${contactCta.whatsapp.phone}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  };

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
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
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

              <div className="mt-8 flex flex-wrap gap-3">
                {contactAvailability.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 space-y-4">
                {contactSignals.map((signal, index) => (
                  <motion.article
                    key={signal.title}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-3xl border border-white/10 bg-slate-950/60 p-5"
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
            </div>

            <div className="border-t border-white/10 bg-slate-950/60 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                Quick WhatsApp message
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Send a predefined message.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Fill in your name and message. The button will open WhatsApp
                with the text ready to send.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-300">
                      First name
                    </span>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      placeholder="Your first name"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-300">
                      Last name
                    </span>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      placeholder="Your last name"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium text-slate-300">
                    Message
                  </span>
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell me briefly what you are looking for..."
                    rows={6}
                    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10"
                  />
                </label>

                <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                  <p className="text-sm font-semibold text-cyan-100">
                    Message preview
                  </p>

                  <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-300">
                    {whatsappMessage}
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200/70 hover:bg-cyan-300/15"
                >
                  {contactCta.whatsapp.buttonLabel}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
