import { navigationItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { withBasePath } from "@/lib/site-paths";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="section-container flex min-h-16 items-center justify-between gap-4 py-3">
        <a
          href="#main-content"
          aria-label="Go to main portfolio content"
          className="group flex min-w-0 items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.12)]"
          >
            GA
          </span>

          <span className="hidden min-w-0 leading-tight sm:block">
            <span className="block truncate text-sm font-semibold text-slate-100">
              {profile.name}
            </span>
            <span className="block truncate text-xs text-slate-400">
              {profile.role}
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-slate-400 transition hover:bg-white/[0.04] hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Giordan Arredondo GitHub profile"
            className="rounded-full border border-slate-700/80 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-200"
          >
            GitHub
          </a>

          <a
            href={withBasePath(profile.links.cv)}
            download
            aria-label="Download Giordan Arredondo CV"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-400/15"
          >
            Download CV
          </a>
        </div>

        <details className="group relative lg:hidden">
          <summary
            aria-label="Open portfolio navigation menu"
            className="list-none rounded-full border border-slate-700/80 px-4 py-2 text-sm text-slate-200 marker:hidden"
          >
            Menu
          </summary>

          <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/95 p-2 shadow-2xl backdrop-blur-xl">
            <nav aria-label="Mobile navigation">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.04] hover:text-cyan-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="my-2 border-t border-slate-800" />

            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Giordan Arredondo GitHub profile"
              className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.04] hover:text-cyan-200"
            >
              GitHub
            </a>

            <a
              href={withBasePath(profile.links.cv)}
              download
              aria-label="Download Giordan Arredondo CV"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/10"
            >
              Download CV
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
