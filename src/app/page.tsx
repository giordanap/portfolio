import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Section } from "@/components/layout/section";
import { profile } from "@/data/profile";

const previewSections = [
  {
    id: "expertise",
    title: "Core expertise",
    description:
      "Backend engineering, cloud workflows, microservices, APIs and production reliability.",
  },
  {
    id: "architecture",
    title: "Architecture showcase",
    description:
      "A visual backend architecture section will connect APIs, services, queues, cloud processing and observability.",
  },
  {
    id: "projects",
    title: "Featured projects",
    description:
      "A premium project carousel will showcase ShopLite, TravelScope, ExpiryMate and backend architecture concepts.",
  },
  {
    id: "impact",
    title: "Engineering impact",
    description:
      "Real CV metrics will highlight performance improvements, cloud optimization and high-volume system experience.",
  },
  {
    id: "experience",
    title: "Professional experience",
    description:
      "A refined timeline will present your strongest backend, AWS, microservices and reliability achievements.",
  },
  {
    id: "stack",
    title: "Technical stack",
    description:
      "The stack will be weighted to emphasize Node.js, NestJS, TypeScript, AWS, microservices and APIs.",
  },
  {
    id: "contact",
    title: "Contact",
    description:
      "A final CTA will connect visitors to your email, GitHub, LinkedIn and CV.",
  },
];

export default function Home() {
  return (
    <div className="portfolio-shell min-h-screen text-slate-100">
      <Header />

      <main>
        <section id="top" className="section-container flex min-h-[calc(100vh-4rem)] items-center py-20">
          <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
                Static portfolio layout shell ready
              </div>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>

              <p className="mt-5 max-w-3xl text-xl text-slate-300 sm:text-2xl">
                {profile.role} | Node.js | NestJS | AWS | Microservices
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                {profile.subheadline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {profile.badges.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel border-gradient p-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <div className="space-y-4 font-mono text-sm text-slate-300">
                  <p>
                    <span className="text-cyan-300">profile</span>
                    <span className="text-slate-500">.</span>
                    <span className="text-violet-300">focus</span>
                    <span className="text-slate-500"> = </span>
                    <span className="text-emerald-300">backend</span>
                  </p>
                  <p>
                    <span className="text-cyan-300">cloud</span>
                    <span className="text-slate-500">.</span>
                    <span className="text-violet-300">provider</span>
                    <span className="text-slate-500"> = </span>
                    <span className="text-emerald-300">aws</span>
                  </p>
                  <p>
                    <span className="text-cyan-300">systems</span>
                    <span className="text-slate-500">.</span>
                    <span className="text-violet-300">qualities</span>
                    <span className="text-slate-500"> = </span>
                    <span className="text-emerald-300">
                      reliable, scalable, observable
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {previewSections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            eyebrow="Portfolio section"
            title={section.title}
            description={section.description}
          >
            <div className="glass-card p-6 text-sm leading-6 text-slate-400">
              This section is reserved for the next implementation commits.
            </div>
          </Section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
