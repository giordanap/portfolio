import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { TechPill } from "@/components/ui/tech-pill";

const buildItems = [
  {
    number: "01",
    title: "High-throughput APIs",
    description:
      "REST, GraphQL and gRPC APIs designed around clear contracts, scalable service boundaries and predictable integrations.",
    tags: ["REST", "GraphQL", "gRPC", "API Contracts", "TypeScript"],
    tone: "cyan",
  },
  {
    number: "02",
    title: "Cloud workflows",
    description:
      "AWS Lambda, S3, SQS, SNS and SES workflows for background processing, file handling and business-critical async workloads.",
    tags: ["AWS", "Lambda", "S3", "SQS", "SNS", "SES"],
    tone: "emerald",
  },
  {
    number: "03",
    title: "Microservice platforms",
    description:
      "Distributed backend platforms with API Gateway patterns, Kong routing, service-to-service communication and operational boundaries.",
    tags: ["Microservices", "Kong", "API Gateway", "gRPC", "Services"],
    tone: "violet",
  },
  {
    number: "04",
    title: "Production reliability",
    description:
      "Systems designed with retries, DLQs, audit trails, logs, observability and safer failure paths for real production conditions.",
    tags: ["Retries", "DLQ", "CloudWatch", "Audits", "Observability"],
    tone: "cyan",
  },
  {
    number: "05",
    title: "Frontend support",
    description:
      "React, Next.js and Angular support when product delivery needs frontend integration with backend workflows and APIs.",
    tags: ["React", "Next.js", "Angular", "API Integration"],
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
      eyebrow="What I build"
      title="Backend systems designed for APIs, cloud workflows and production reliability."
      description="This portfolio focuses on the systems I help build: API layers, async processing, microservice platforms, cloud workflows and operationally reliable backend architecture."
    >
      <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {buildItems.map((item) => (
          <StaggerItem key={item.title}>
            <GlassCard className="group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35">
              <div className="mb-6 flex items-start justify-between gap-4">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border text-sm font-bold ${toneClasses[item.tone]}`}
                >
                  {item.number}
                </span>

                <Badge variant="muted">System</Badge>
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
          <span className="font-semibold text-cyan-200">Focus:</span>{" "}
          The goal is not to list every technology equally, but to show how they
          work together to build backend systems that are scalable, observable
          and easier to operate.
        </div>
      </Reveal>
    </Section>
  );
}
