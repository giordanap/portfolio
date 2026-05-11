import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { GlassCard } from "@/components/ui/glass-card";
import { TechPill } from "@/components/ui/tech-pill";

const architectureLayers = [
  {
    title: "Client Apps",
    subtitle: "Web / Mobile / Admin",
    description: "Frontend applications consuming stable backend contracts.",
    tags: ["React", "Next.js", "Angular"],
  },
  {
    title: "API Layer",
    subtitle: "REST / GraphQL / gRPC",
    description: "Typed contracts, predictable integrations and API Gateway patterns.",
    tags: ["REST", "GraphQL", "gRPC"],
  },
  {
    title: "Services",
    subtitle: "Business capabilities",
    description: "Microservices, domain modules and maintainable service boundaries.",
    tags: ["NestJS", "Node.js", ".NET"],
  },
  {
    title: "Queue / Events",
    subtitle: "Async processing",
    description: "Decoupled workflows using queues, retries, DLQs and background jobs.",
    tags: ["SQS", "SNS", "DLQ"],
  },
  {
    title: "Cloud Processing",
    subtitle: "AWS workflows",
    description: "Serverless and cloud modules for scalable processing and storage.",
    tags: ["Lambda", "S3", "ECS"],
  },
  {
    title: "Observability",
    subtitle: "Reliability loop",
    description: "Logs, audits, metrics and incident visibility for production systems.",
    tags: ["CloudWatch", "Audits", "Alerts"],
  },
] as const;

const backendFlowLines = [
  "Client request enters through a stable API contract.",
  "The API layer routes work to focused backend services.",
  "Heavy work is decoupled through queues and retry strategies.",
  "Cloud services process, store and observe the workflow.",
  "Failures are traced through logs, audits and operational signals.",
] as const;

export function ArchitectureSection() {
  return (
    <Section
      id="architecture"
      eyebrow="Architecture showcase"
      title="Backend systems designed around APIs, async workflows and reliability."
      description="A visual representation of the kind of systems emphasized in the CV: API-first services, cloud workflows, queues, retries, storage and observability."
    >
      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
        <Reveal direction="up">
          <div className="glass-panel border-gradient overflow-hidden p-5 sm:p-6">
            <div className="relative rounded-3xl border border-slate-800 bg-slate-950/70 p-5 sm:p-6">
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(167,139,250,0.1),transparent_26%)]" />

              <div className="relative">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <Badge variant="cyan">System flow</Badge>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    frontend → backend → cloud
                  </p>
                </div>

                <Stagger className="grid gap-4 md:grid-cols-2">
                  {architectureLayers.map((layer, index) => (
                    <StaggerItem key={layer.title}>
                      <GlassCard className="relative h-full p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35">
                        <div className="mb-5 flex items-start justify-between gap-4">
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-sm font-bold text-cyan-200">
                            {index + 1}
                          </span>

                          <span className="rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 text-xs text-slate-500">
                            {layer.subtitle}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold text-slate-100">
                          {layer.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                          {layer.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {layer.tags.map((tag, tagIndex) => (
                            <TechPill
                              key={tag}
                              tone={tagIndex === 0 ? "primary" : "secondary"}
                            >
                              {tag}
                            </TechPill>
                          ))}
                        </div>
                      </GlassCard>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal direction="left" delay={0.08}>
            <BrowserFrame title="architecture.flow.ts">
              <div className="space-y-4 p-5 font-mono text-sm leading-6 text-slate-300">
                <p>
                  <span className="text-cyan-300">system</span>
                  <span className="text-slate-500">.</span>
                  <span className="text-violet-300">entrypoint</span>
                  <span className="text-slate-500"> = </span>
                  <span className="text-emerald-300">api-layer</span>
                </p>
                <p>
                  <span className="text-cyan-300">workflow</span>
                  <span className="text-slate-500">.</span>
                  <span className="text-violet-300">mode</span>
                  <span className="text-slate-500"> = </span>
                  <span className="text-emerald-300">sync + async</span>
                </p>
                <p>
                  <span className="text-cyan-300">failure</span>
                  <span className="text-slate-500">.</span>
                  <span className="text-violet-300">strategy</span>
                  <span className="text-slate-500"> = </span>
                  <span className="text-emerald-300">retry + dlq + audit</span>
                </p>
                <p>
                  <span className="text-cyan-300">ops</span>
                  <span className="text-slate-500">.</span>
                  <span className="text-violet-300">visibility</span>
                  <span className="text-slate-500"> = </span>
                  <span className="text-emerald-300">logs + metrics</span>
                </p>
              </div>
            </BrowserFrame>
          </Reveal>

          <Reveal direction="left" delay={0.16}>
            <GlassCard className="p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                    Reliability path
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-100">
                    From request to observable workflow
                  </h3>
                </div>
              </div>

              <ol className="space-y-4">
                {backendFlowLines.map((line, index) => (
                  <li key={line} className="flex gap-3 text-sm leading-6 text-slate-400">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 text-xs font-bold text-cyan-200">
                      {index + 1}
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ol>
            </GlassCard>
          </Reveal>

          <Reveal direction="left" delay={0.24}>
            <GlassCard className="p-6">
              <p className="text-sm leading-7 text-slate-400">
                <span className="font-semibold text-cyan-200">CV alignment:</span>{" "}
                this section supports the strongest profile signals: Node.js,
                NestJS, AWS, microservices, SQS, DLQs, retries, high-volume
                processing, incident resolution and production reliability.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
