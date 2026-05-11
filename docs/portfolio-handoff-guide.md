# Portfolio Handoff Guide

Handoff guide for continuing the static personal portfolio project without losing context.

Production URL:

```txt
https://giordanap.github.io/portfolio/
```

Repository:

```txt
giordanap/portfolio
```

Local path:

```txt
C:\Users\PC\Downloads\Telegram Desktop\gh\prsnl\prtfl\portfolio
```

Remote:

```txt
git@personal:giordanap/portfolio.git
```

SSH alias:

```txt
personal
```

---

## 1. Project purpose

This project is a static personal portfolio built with Next.js.

The portfolio presents Giordan Arredondo as a Senior Backend Engineer with strong experience in backend systems, cloud integrations, production reliability and distributed architectures.

The site is not intended to be a generic full-stack portfolio. Full-stack experience appears as supporting context, while the main positioning remains backend-first.

---

## 2. Current production status

Current status:

```txt
Production-ready static portfolio.
```

Deployment target:

```txt
GitHub Pages
```

Expected production URL:

```txt
https://giordanap.github.io/portfolio/
```

The project should continue working as a static export under the `/portfolio/` base path.

---

## 3. Technical stack

Current stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React if needed
- Static export
- GitHub Pages
- pnpm 10.23.0
- Node 20.x

Important rule:

```txt
Do not recommend pnpm@latest.
```

Reason:

```txt
pnpm 11 caused issues with Corepack. The project currently uses pnpm 10.23.0.
```

---

## 4. Core positioning

The portfolio should keep highlighting:

- Senior Backend Engineer positioning.
- Node.js.
- NestJS.
- TypeScript.
- AWS.
- Microservices.
- APIs.
- Distributed systems.
- SQS.
- DLQ.
- Retries.
- Lambda.
- S3.
- CloudWatch.
- Production support.
- Performance.
- Incident resolution.
- Reliability.
- Observability.
- Full-stack experience as supporting context.

Kong can appear as part of backend and gateway experience, but it should not become the main protagonist.

---

## 5. Current site structure

The homepage already renders real sections instead of old placeholders.

Expected sections:

- Hero
- Core expertise
- Architecture showcase
- Cloud media
- Production experience
- Featured projects
- Technical experience
- Contact and CTA

Expected navigation anchors:

- `#expertise`
- `#architecture`
- `#cloud-media`
- `#production`
- `#projects`
- `#technical-experience`
- `#contact`

When adding or renaming sections, update navigation data and validate the anchors.

---

## 6. Important existing files

Key files already created or updated during the project:

```txt
src/app/page.tsx
src/app/layout.tsx
src/app/globals.css
src/app/robots.ts
src/app/sitemap.ts
src/data/navigation.ts
src/components/layout/header.tsx
docs/deployment-verification-checklist.md
docs/final-production-release-notes.md
docs/production-deployment-verification.md
docs/portfolio-maintenance-notes.md
```

The project may contain additional section components, data files and visual components created in previous commits.

---

## 7. Completed commits

Completed and merged milestones:

- Bootstrap Commit 0: Create static Next.js portfolio shell
- Deploy Commit 0.1: Configure GitHub Pages deployment
- Commit 1: Add project foundation and design tokens
- Commit 2: Add static content data model
- Commit 3: Add layout shell and navigation
- Commit 4: Add reusable visual components
- Commit 5: Add motion foundation
- Commit 6: Build hero section
- Commit 7: Add profile image and media placeholders
- Commit 8: Build core expertise section
- Commit 9: Build architecture showcase section
- Commit 10: Add cloud media support
- Commit 11: Add production experience section
- Commit 12: Add featured projects section
- Commit 13: Add technical experience section
- Commit 14: Add contact and CTA section
- Commit 15: Polish responsive layout and final copy
- Commit 16: Add SEO metadata and accessibility polish
- Commit 17: Add deployment verification checklist
- Commit 18: Add final production release notes
- Commit 19: Verify production deployment
- Commit 20: Add portfolio maintenance notes
- Commit 21: Add portfolio handoff guide

---

## 8. Validation commands

Use these commands before every commit and PR merge:

```powershell
pnpm exec eslint .
pnpm build
```

Expected result:

- ESLint passes.
- Build passes.
- Static export remains valid for GitHub Pages.
- No tests are required.
- Storybook is not required.
- No runtime server dependency is introduced.

---

## 9. Standard branch and PR workflow

Use the following workflow for future changes:

1. Prepare branch from latest `main`.
2. Create folders if needed.
3. Create or modify files.
4. Validate files and Git status.
5. Run lint and build.
6. Stage with `git add .`.
7. Commit and push.
8. Create PR.
9. View PR.
10. Squash merge and delete remote branch.
11. Update `main` and delete local branch.

Assisted workflow rules:

- Use PowerShell commands.
- Keep operational commands in one line using `;`.
- Use PowerShell here-strings for file content.
- After creating or modifying a file, open it with `code <archivo>`.
- Do not use `git diff`.
- Do not attempt to approve your own PR.
- After validating lint and build, use `git add .`.

---

## 10. Standard validation checklist

Before merging any future PR:

- `pnpm exec eslint .` passes.
- `pnpm build` passes.
- `git status` only shows expected changes before commit.
- PR summary is clear.
- PR validation section includes lint and build.
- No unrelated files are changed.
- No tests or Storybook are added unless explicitly planned later.

---

## 11. Deployment checklist

After merging to `main`:

```powershell
gh run list --limit 5
```

Validate:

- Latest GitHub Actions workflow passed.
- GitHub Pages deployment completed successfully.
- Production URL loads correctly.
- Static assets load correctly.
- Metadata, sitemap and robots are available.
- Navigation anchors work.
- Responsive layout remains correct.
- Accessibility smoke checks still pass.

Production URL:

```txt
https://giordanap.github.io/portfolio/
```

Metadata endpoints:

```txt
https://giordanap.github.io/portfolio/robots.txt
https://giordanap.github.io/portfolio/sitemap.xml
```

---

## 12. Content maintenance rules

When updating content, keep the writing:

- Clear.
- Senior.
- Practical.
- Backend-focused.
- Production-oriented.
- Credible.
- Not exaggerated.
- Not too generic.

Avoid:

- Placeholder text.
- Duplicate sections.
- Unfinished TODO notes.
- Too much frontend-only framing.
- Too much emphasis on Kong.
- Overloading the page with excessive copy.

---

## 13. Visual maintenance rules

When updating UI or visual sections:

- Keep the premium landing-page style.
- Maintain responsive spacing.
- Avoid unexpected horizontal scroll.
- Keep cards readable.
- Keep the hero strong and direct.
- Keep the CTA visible and useful.
- Validate mobile, tablet and desktop.
- Validate focus styles and keyboard navigation.

Suggested viewport checks:

- Mobile: 360px to 430px.
- Tablet: 768px.
- Desktop: 1280px and above.

---

## 14. SEO and accessibility rules

When updating SEO or accessibility:

- Keep metadata aligned with Senior Backend Engineer positioning.
- Keep production URLs aligned with GitHub Pages.
- Do not point metadata to localhost.
- Validate `robots.txt`.
- Validate `sitemap.xml`.
- Keep skip link working.
- Keep focus styles visible.
- Keep semantic sections clear.
- Keep navigation keyboard accessible.
- Keep images with appropriate alt text or intentionally decorative treatment.

---

## 15. Recommended next improvements

Possible future commits:

- Add real project screenshots.
- Add stronger case studies.
- Add downloadable CV.
- Add social preview image.
- Add lightweight changelog.
- Add bilingual Spanish and English support only if clearly scoped.
- Improve project cards with measurable impact.
- Add analytics only if needed.

Keep future work small and commit-based.

---

## 16. Handoff prompt for a new chat

Use this prompt to continue the project in a new chat:

```txt
Estoy trabajando en mi proyecto de portfolio personal estático en Next.js.

Repositorio:
giordanap/portfolio

URL esperada:
https://giordanap.github.io/portfolio/

Path local:
C:\Users\PC\Downloads\Telegram Desktop\gh\prsnl\prtfl\portfolio

SSH alias:
personal

Remote:
git@personal:giordanap/portfolio.git

Stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React si hace falta
- Static export
- GitHub Pages
- pnpm 10.23.0
- Node 20.x

Reglas:
- Responder en español.
- Dar comandos listos para copiar y pegar en PowerShell.
- Los comandos operativos deben ir en una sola línea usando `;`.
- Para contenido de archivos usar here-strings de PowerShell.
- Después de crear o modificar un archivo, terminar el comando con `; code <archivo>`.
- No usar `git diff`.
- No intentar aprobar PRs.
- Después de validar lint y build usar `git add .`.
- Crear rama, validar, commit, push, crear PR, ver PR, squash merge, borrar rama remota, actualizar main y borrar rama local.
- No recomendar pnpm@latest.

Contexto:
El portfolio es una landing estática premium que presenta a Giordan Arredondo como Senior Backend Engineer. Debe resaltar backend, Node.js, NestJS, TypeScript, AWS, microservicios, APIs, sistemas distribuidos, SQS, DLQ, retries, Lambda, S3, CloudWatch, producción, performance, incidentes y confiabilidad. La experiencia full-stack es soporte. Kong puede aparecer, pero no debe ser protagonista.

No necesito testing ni Storybook.
```

---

## 17. Handoff status

Current handoff status:

```txt
Ready for future maintenance and incremental improvements.
```

Production URL:

```txt
https://giordanap.github.io/portfolio/
```
