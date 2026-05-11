import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { TechPill } from "@/components/ui/tech-pill";

const expertiseItems = [
  {
    number: "01",
    title: "Backend Engineering",
    description:
      "Node.js, NestJS, TypeScript, REST, GraphQL, gRPC, Clean Architecture and SOLID principles for maintainable backend systems.",
    tags: ["Node.js", "NestJS", "TypeScript", "REST", "GraphQL", "gRPC"],
    tone: "cyan",
  },
  {
    number: "02",
    title: "Cloud & Async Processing",
    description:
      "AWS-based workflows using Lambda, S3, SQS, SNS, queues, DLQs, retries and background processing for high-volume workloads.",
    tags: ["AWS", "Lambda", "S3", "SQS", "SNS", "DLQ"],
    tone: "emerald",
  },
  {
    number: "03",
    title: "Microservices & APIs",
    description:
      "Distributed systems, API design, service communication, API Gateway patterns and scalable integrations across enterprise platforms.",
    tags: ["Microservices", "APIs", "API Gateway", "Distributed Systems"],
    tone: "violet",
  },
  {
    number: "04",
    title: "Production Reliability",
    description:
      "Incident resolution, memory leaks, timeouts, concurrency issues, monitoring, auditability and operational resilience.",
    tags: ["CloudWatch", "Retries", "Timeouts", "Observability"],
    tone: "cyan",
  },
  {
    number: "05",
    title: "Full-Stack Delivery",
    description:
      "React, Next.js and Angular experience to connect backend capabilities with polished, responsive and usable product workflows.",
    tags: ["React", "Next.js", "Angular", "UX Integration"],
    tone: "emerald",
  },
] as const;

const toneClasses = {
  cyan: "text-cyan-300 border-cyan-400/25 bg-cyan-400/10",
  emerald: "text-emerald-300 border-emerald-400/25 bg-emerald-400/10",
  violet: "text-violet-300 border-violet-400/25 bg-violet-400/10",
} as const;

export function ExpertiseSection() {
  return (
    <Section
      id="expertise"
      eyebrow="Core expertise"
      title="Backend-first engineering with cloud and product delivery range."
      description="The portfolio is intentionally weighted toward the strongest parts of the CV: backend systems, AWS workflows, APIs, microservices and production reliability."
    >
      <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {expertiseItems.map((item) => (
          <StaggerItem key={item.title}>
            <GlassCard className="group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35">
              <div className="mb-6 flex items-start justify-between gap-4">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border text-sm font-bold ${toneClasses[item.tone]}`}
                >
                  {item.number}
                </span>

                <Badge variant="muted">Expertise</Badge>
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-slate-100">
                {item.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <TechPill key={tag} tone={index < 2 ? "primary" : "secondary"}>
                    {tag}
                  </TechPill>
                ))}
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal direction="up" delay={0.1}>
        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950/50 p-5 text-sm leading-7 text-slate-400">
          <span className="font-semibold text-cyan-200">Positioning note:</span>{" "}
          This section avoids over-highlighting secondary tools and keeps the
          strongest signal on backend engineering, AWS, APIs, microservices and
          reliability.
        </div>
      </Reveal>
    </Section>
  );
}
