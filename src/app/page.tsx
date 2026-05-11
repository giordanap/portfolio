import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { CloudMediaSupportSection } from "@/components/sections/cloud-media-support-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductionExperienceSection } from "@/components/sections/production-experience-section";
import { TechnicalExperienceSection } from "@/components/sections/technical-experience-section";
import { profile } from "@/data/profile";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: profile.email,
  telephone: profile.phone,
  url: "https://giordanap.github.io/portfolio/",
  sameAs: [profile.links.github, profile.links.linkedin],
  knowsAbout: [
    "Node.js",
    "NestJS",
    "TypeScript",
    "AWS",
    "Microservices",
    "APIs",
    "Distributed Systems",
    "Production Reliability",
  ],
};

export default function Home() {
  return (
    <div className="portfolio-shell min-h-screen bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <Header />

      <main id="main-content" className="overflow-hidden" tabIndex={-1}>
        <HeroSection />
        <ExpertiseSection />
        <ArchitectureSection />
        <CloudMediaSupportSection />
        <ProductionExperienceSection />
        <FeaturedProjectsSection />
        <TechnicalExperienceSection />
        <ContactCtaSection />
      </main>

      <Footer />
    </div>
  );
}
