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

export default function Home() {
  return (
    <div className="portfolio-shell min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main id="top" className="overflow-hidden">
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
