import { navigationItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { withBasePath } from "@/lib/site-paths";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80">
      <div className="section-container py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="text-base font-semibold text-slate-100">
              {profile.name}
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              {profile.role} focused on resilient APIs, cloud workflows,
              distributed systems, AWS, microservices and production
              reliability.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-400 transition hover:text-cyan-200"
            >
              GitHub
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-400 transition hover:text-cyan-200"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-slate-400 transition hover:text-cyan-200"
            >
              Email
            </a>

            <a
              href={withBasePath(profile.links.cv)}
              download
              className="text-sm text-slate-400 transition hover:text-cyan-200"
            >
              CV
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {new Date().getFullYear()} Giordan Arredondo. Static portfolio
            built with Next.js, TypeScript and Tailwind CSS.
          </p>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-3">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-cyan-200">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
