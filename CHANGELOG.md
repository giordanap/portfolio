# Changelog

Lightweight changelog for the static personal portfolio.

Production URL:

```txt
https://giordanap.github.io/portfolio/
```

Repository:

```txt
giordanap/portfolio
```

---

## Production-ready portfolio release

Status:

```txt
Production-ready static portfolio.
```

This release establishes the first complete version of the personal portfolio, focused on presenting Giordan Arredondo as a Senior Backend Engineer.

The portfolio highlights:

- Backend engineering.
- Node.js.
- NestJS.
- TypeScript.
- AWS.
- Microservices.
- APIs.
- Distributed systems.
- SQS, DLQ and retries.
- Lambda, S3 and CloudWatch.
- Production reliability.
- Performance.
- Incident resolution.
- Observability.
- Full-stack experience as supporting context.

---

## Completed milestones

### Bootstrap and deployment foundation

- Bootstrap Commit 0: Create static Next.js portfolio shell
- Deploy Commit 0.1: Configure GitHub Pages deployment

### Project foundation

- Commit 1: Add project foundation and design tokens
- Commit 2: Add static content data model
- Commit 3: Add layout shell and navigation
- Commit 4: Add reusable visual components
- Commit 5: Add motion foundation

### Portfolio sections

- Commit 6: Build hero section
- Commit 7: Add profile image and media placeholders
- Commit 8: Build core expertise section
- Commit 9: Build architecture showcase section
- Commit 10: Add cloud media support
- Commit 11: Add production experience section
- Commit 12: Add featured projects section
- Commit 13: Add technical experience section
- Commit 14: Add contact and CTA section

### Production polish

- Commit 15: Polish responsive layout and final copy
- Commit 16: Add SEO metadata and accessibility polish

### Documentation and release readiness

- Commit 17: Add deployment verification checklist
- Commit 18: Add final production release notes
- Commit 19: Verify production deployment
- Commit 20: Add portfolio maintenance notes
- Commit 21: Add portfolio handoff guide
- Commit 22: Add lightweight changelog

---

## Current production scope

The current portfolio includes:

- Static Next.js App Router landing page.
- GitHub Pages deployment.
- Responsive premium layout.
- Backend-first content positioning.
- Real homepage sections instead of placeholders.
- Navigation anchors for all main sections.
- SEO metadata.
- Open Graph and Twitter metadata.
- Robots route.
- Sitemap route.
- Accessibility smoke polish.
- Deployment verification documentation.
- Maintenance and handoff documentation.
- Lightweight changelog.

---

## Current expected sections

The homepage currently includes:

- Hero
- Core expertise
- Architecture showcase
- Cloud media
- Production experience
- Featured projects
- Technical experience
- Contact and CTA

Expected anchors:

- `#expertise`
- `#architecture`
- `#cloud-media`
- `#production`
- `#projects`
- `#technical-experience`
- `#contact`

---

## Validation standard

Every future change should continue validating with:

```powershell
pnpm exec eslint .
pnpm build
```

Expected result:

- ESLint passes.
- Build passes.
- Static export remains compatible with GitHub Pages.
- No runtime server dependency is introduced.
- No tests or Storybook are required for the current project scope.

---

## Deployment target

The project is deployed as a static portfolio on GitHub Pages.

Expected production URL:

```txt
https://giordanap.github.io/portfolio/
```

Expected metadata endpoints:

```txt
https://giordanap.github.io/portfolio/robots.txt
https://giordanap.github.io/portfolio/sitemap.xml
```

---

## Maintenance note

Keep the portfolio:

- Static.
- Fast.
- Premium.
- Backend-focused.
- Production-oriented.
- Easy to maintain through small commits.

Avoid:

- Placeholder content.
- Duplicated sections.
- Unfinished TODO notes.
- Generic full-stack positioning.
- Too much frontend-only emphasis.
- Making Kong the main protagonist.
- Adding tests or Storybook unless the project direction changes later.

---

## Recommended next changes

Possible future improvements:

- Add real project screenshots.
- Add a downloadable CV.
- Add a social preview image.
- Add stronger case-study details.
- Add measurable impact to project cards.
- Add analytics only if needed.
- Add bilingual support only if clearly scoped.

Each improvement should be handled as a small, focused PR.

---

## Commit 24: Add CV download CTA link

Added a CV download CTA link to the contact section.

Public placeholder path:

```txt
https://giordanap.github.io/portfolio/cv/giordan-arredondo-cv-placeholder.txt
```

Updated behavior:

- The contact CTA now includes a `Download CV` action.
- The link points to the current public CV placeholder.
- The path is relative so it remains compatible with the `/portfolio/` GitHub Pages base path.
- The final placeholder can later be replaced with the production PDF CV.

Future replacement target:

```txt
https://giordanap.github.io/portfolio/cv/giordan-arredondo-cv.pdf
```

---

## Commit 25: Add social preview image placeholder

Added a social preview image placeholder for Open Graph and Twitter metadata.

Public placeholder path:

```txt
https://giordanap.github.io/portfolio/og/social-preview-placeholder.svg
```

Updated behavior:

- Added a 1200x630 social preview placeholder under `public/og`.
- Connected the placeholder to Open Graph metadata.
- Connected the placeholder to Twitter summary large image metadata.
- Kept the image path compatible with the GitHub Pages `/portfolio/` base path.

Future replacement target:

```txt
https://giordanap.github.io/portfolio/og/social-preview.png
```

Note:

Some social platforms prefer PNG or JPG for final previews. This SVG is a lightweight placeholder until the final production social image is created.

---

## Commit 26: Add social preview replacement notes

Added documentation for replacing the temporary social preview placeholder with a final production image.

Current placeholder path:

```txt
https://giordanap.github.io/portfolio/og/social-preview-placeholder.svg
```

Recommended final path:

```txt
https://giordanap.github.io/portfolio/og/social-preview.png
```

Documented:

- Recommended final image format and dimensions.
- Metadata replacement steps.
- Open Graph and Twitter image validation.
- GitHub Pages base path compatibility.
- Social preview cache notes.
- Final post-deployment verification checklist.

---

## Commit 27: Add final social preview image

Added the final production social preview image.

Final public image path:

```txt
https://giordanap.github.io/portfolio/og/social-preview.png
```

Updated behavior:

- Generated a 1200x630 PNG social preview image.
- Updated Open Graph metadata to use the final PNG.
- Updated Twitter summary large image metadata to use the final PNG.
- Kept metadata compatible with the GitHub Pages `/portfolio/` base path.
- Preserved the previous SVG placeholder as a reference asset.

Validation:

```powershell
pnpm exec eslint .
pnpm build
```

---

## Commit 28: Add social preview validation checklist

Added an operational checklist for validating the final social preview image.

Final social preview image:

```txt
https://giordanap.github.io/portfolio/og/social-preview.png
```

Documented:

- Local file validation.
- Metadata validation.
- Open Graph checks.
- Twitter card checks.
- Production image URL checks.
- GitHub Pages deployment validation.
- Visual preview checks.
- Social platform cache notes.
- Final completion checklist.
