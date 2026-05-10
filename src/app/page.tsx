const highlights = [
  "Node.js",
  "NestJS",
  "AWS",
  "Microservices",
  "APIs",
  "Production Reliability",
];

export default function Home() {
  return (
    <main className="portfolio-shell min-h-screen text-slate-100">
      <section className="section-container flex min-h-screen items-center py-20">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Static portfolio foundation ready
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Giordan Arredondo
            </h1>

            <p className="mt-5 max-w-3xl text-xl text-slate-300 sm:text-2xl">
              Senior Backend Engineer | Node.js | NestJS | AWS | Microservices
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Initial design foundation created for a premium static portfolio
              focused on resilient APIs, cloud workflows, distributed systems
              and production reliability.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
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
    </main>
  );
}
