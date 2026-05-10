import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { HeroSection } from "@/components/sections/hero-section";

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
        <HeroSection />

        {previewSections.map((section, index) => (
          <Reveal key={section.id} direction={index % 2 === 0 ? "up" : "left"}>
            <Section
              id={section.id}
              eyebrow="Portfolio section"
              title={section.title}
              description={section.description}
            >
              <div className="glass-card p-6 text-sm leading-6 text-slate-400">
                This section is reserved for the next implementation commits.
              </div>
            </Section>
          </Reveal>
        ))}
      </main>

      <Footer />
    </div>
  );
}
