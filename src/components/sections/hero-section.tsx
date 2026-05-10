import { FloatingCard } from "@/components/motion/floating-card";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { TechPill } from "@/components/ui/tech-pill";
import { profile } from "@/data/profile";
import { withBasePath } from "@/lib/site-paths";

const heroTechCards = [
  {
    title: "API Layer",
    value: "REST / GraphQL / gRPC",
    tone: "cyan",
  },
  {
    title: "Async Workflows",
    value: "SQS / DLQ / Retry",
    tone: "emerald",
  },
  {
    title: "Cloud Processing",
    value: "Lambda / S3 / ECS",
    tone: "violet",
  },
] as const;

const codeLines = [
  {
    key: "profile",
    object: "profile",
    property: "focus",
    value: "backend",
  },
  {
    key: "cloud",
    object: "cloud",
    property: "provider",
    value: "aws",
  },
  {
    key: "systems",
    object: "systems",
    property: "qualities",
    value: "reliable, scalable, observable",
  },
] as const;

export function HeroSection() {
  return (
    <section
      id="top"
      className="section-container relative flex min-h-[calc(100vh-4rem)] items-center py-20"
    >
      <div className="grid w-full gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal direction="up">
          <div>
            <Badge variant="cyan" className="mb-6">
              Backend-focused full-stack engineer
            </Badge>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">{profile.name}</span>
              <span className="text-gradient mt-2 block">
                Senior Backend Engineer
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300 sm:text-2xl">
              {profile.headline}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              {profile.subheadline}
            </p>

            <Stagger className="mt-8 flex flex-wrap gap-3">
              {profile.badges.map((item) => (
                <StaggerItem key={item}>
                  <TechPill tone="primary">{item}</TechPill>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#projects" size="lg">
                View Projects
              </Button>

              <Button
                href={withBasePath(profile.links.cv)}
                variant="secondary"
                size="lg"
                download
              >
                Download CV
              </Button>

              <Button href={`mailto:${profile.email}`} variant="ghost" size="lg">
                Contact Me
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-400">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-200"
              >
                GitHub
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-200"
              >
                LinkedIn
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="transition hover:text-cyan-200"
              >
                Email
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.12}>
          <div className="relative">
            <div className="absolute -left-6 top-8 hidden lg:block">
              <FloatingCard delay={0.2} floatY={8}>
                <GlassCard className="w-44 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                    API
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-100">
                    High-throughput contracts
                  </p>
                </GlassCard>
              </FloatingCard>
            </div>

            <div className="absolute -right-4 bottom-14 hidden lg:block">
              <FloatingCard delay={0.8} floatY={12} duration={6}>
                <GlassCard className="w-48 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-300">
                    Reliability
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-100">
                    Timeouts, retries and observability
                  </p>
                </GlassCard>
              </FloatingCard>
            </div>

            <div className="glass-panel border-gradient p-5 sm:p-6">
              <div className="grid gap-5">
                <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 text-center">
                  <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-[2rem] border border-cyan-400/25 bg-cyan-400/10 text-5xl font-bold text-cyan-100 shadow-[0_0_60px_rgba(34,211,238,0.16)]">
                    GA
                  </div>

                  <h2 className="mt-5 text-xl font-semibold text-slate-100">
                    {profile.role}
                  </h2>

                  <p className="mt-2 text-sm text-slate-400">
                    Node.js | NestJS | AWS | Microservices
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {heroTechCards.map((card) => (
                    <GlassCard key={card.title} className="p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        {card.title}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-100">
                        {card.value}
                      </p>
                    </GlassCard>
                  ))}
                </div>

                <BrowserFrame title="backend.system.ts">
                  <div className="space-y-4 p-5 font-mono text-sm text-slate-300">
                    {codeLines.map((line) => (
                      <p key={line.key}>
                        <span className="text-cyan-300">{line.object}</span>
                        <span className="text-slate-500">.</span>
                        <span className="text-violet-300">{line.property}</span>
                        <span className="text-slate-500"> = </span>
                        <span className="text-emerald-300">{line.value}</span>
                      </p>
                    ))}
                  </div>
                </BrowserFrame>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
