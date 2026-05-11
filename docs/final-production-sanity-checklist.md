# Final Production Sanity Checklist

Final sanity checklist for closing the first production-ready phase of the static portfolio.

Production URL:

```txt
https://giordanap.github.io/portfolio/
```

Repository:

```txt
giordanap/portfolio
```

---

## 1. Objective

This checklist is the final production sanity review before considering the portfolio ready to share.

The goal is to confirm that the portfolio is:

- Static.
- Production-ready.
- GitHub Pages compatible.
- Backend-focused.
- Visually polished.
- Easy to navigate.
- Correctly deployed.
- Free of placeholders that should not be visible as unfinished work.
- Ready to share with recruiters, hiring teams and engineering contacts.

---

## 2. Local validation

Run the standard validation:

```powershell
pnpm exec eslint .
pnpm build
```

Expected result:

- ESLint passes.
- Build passes.
- Static export works.
- No runtime server dependency exists.
- No API route dependency exists.
- No tests or Storybook are required for this phase.

---

## 3. GitHub state validation

Validate recent repository state:

```powershell
git status
git log --oneline -10
gh pr list --state merged --limit 10
```

Expected result:

- Local `main` is clean.
- Latest commits are present.
- Recent PRs are merged.
- No feature branch remains active locally unless intentionally kept.
- No remote feature branch remains after squash merge.

---

## 4. GitHub Actions validation

Validate deployment workflow:

```powershell
gh run list --limit 5
```

Expected result:

- Latest workflow completed successfully.
- GitHub Pages deployment completed successfully.
- No failed workflow remains unresolved.
- The deployed artifact matches the latest `main`.

If needed:

```powershell
gh run view --log
```

---

## 5. Production URL validation

Open:

```txt
https://giordanap.github.io/portfolio/
```

Checklist:

- Page loads successfully.
- Page does not return 404.
- Refreshing the page works.
- Browser console has no critical errors.
- Site works under `/portfolio/`.
- Styling loads correctly.
- No broken CSS.
- No broken fonts.
- No broken images.
- No unexpected horizontal scroll.

---

## 6. Static asset validation

Validate important public assets:

```powershell
Invoke-WebRequest -Uri "https://giordanap.github.io/portfolio/og/social-preview.png" -UseBasicParsing
Invoke-WebRequest -Uri "https://giordanap.github.io/portfolio/cv/giordan-arredondo-cv-placeholder.txt" -UseBasicParsing
Invoke-WebRequest -Uri "https://giordanap.github.io/portfolio/screenshots/projects/datatwin-gateway-placeholder.svg" -UseBasicParsing
Invoke-WebRequest -Uri "https://giordanap.github.io/portfolio/screenshots/projects/async-processing-placeholder.svg" -UseBasicParsing
Invoke-WebRequest -Uri "https://giordanap.github.io/portfolio/screenshots/projects/expiry-mate-placeholder.svg" -UseBasicParsing
```

Expected result:

- Social preview image loads.
- CV placeholder loads.
- Project screenshot placeholders load.
- Assets are served under `/portfolio`.
- No public asset returns 404.

---

## 7. Metadata validation

Validate metadata endpoints:

```powershell
Invoke-WebRequest -Uri "https://giordanap.github.io/portfolio/robots.txt" -UseBasicParsing
Invoke-WebRequest -Uri "https://giordanap.github.io/portfolio/sitemap.xml" -UseBasicParsing
```

Checklist:

- `robots.txt` loads.
- `sitemap.xml` loads.
- Sitemap references the production URL.
- Metadata does not point to localhost.
- Open Graph metadata uses the final social preview PNG.
- Twitter metadata uses the final social preview PNG.
- Browser title is correct.
- Description matches Senior Backend Engineer positioning.

Expected social preview image:

```txt
https://giordanap.github.io/portfolio/og/social-preview.png
```

---

## 8. Navigation validation

Expected anchors:

- `#expertise`
- `#architecture`
- `#cloud-media`
- `#production`
- `#projects`
- `#technical-experience`
- `#contact`

Checklist:

- Every navigation item scrolls to the correct section.
- No anchor points to an old placeholder.
- Sticky header does not hide section titles.
- Mobile navigation works.
- Mobile menu closes after selecting a link.
- Keyboard navigation reaches all navigation links.

---

## 9. Section validation

Expected homepage sections:

- Hero
- Core expertise
- Architecture showcase
- Cloud media
- Production experience
- Featured projects
- Technical experience
- Contact and CTA

Checklist:

- All sections are visible.
- No duplicated sections exist.
- No old placeholder sections remain.
- No unfinished TODO notes are visible.
- Each section supports the backend-first positioning.
- Contact CTA is visible.
- CV download CTA is visible.
- Featured project screenshots render correctly.
- Social preview image is not shown in the page unless intentionally used as metadata.

---

## 10. Content positioning validation

The portfolio should clearly communicate:

- Giordan Arredondo.
- Senior Backend Engineer.
- Node.js.
- NestJS.
- TypeScript.
- AWS.
- APIs.
- Microservices.
- Distributed systems.
- SQS, DLQ and retries.
- Lambda, S3 and CloudWatch.
- Production reliability.
- Performance.
- Incident resolution.
- Observability.
- Full-stack experience as supporting context.

Avoid:

- Generic full-stack positioning.
- Frontend-only positioning.
- Making Kong the main protagonist.
- Overstating project scope.
- Showing private or sensitive information.
- Leaving placeholder text that looks unfinished.

---

## 11. Responsive validation

Validate in browser device mode:

- Mobile: 360px to 430px.
- Tablet: 768px.
- Desktop: 1280px and above.

Checklist:

- Header remains usable.
- Hero remains readable.
- Cards do not overflow.
- Project screenshots scale correctly.
- CTA section remains usable.
- Text remains readable.
- Spacing remains premium.
- No unexpected horizontal scroll appears.

---

## 12. Accessibility smoke validation

Checklist:

- Skip link works.
- Main content is reachable.
- Focus styles are visible.
- Navigation is keyboard accessible.
- Buttons and links have clear labels.
- Images have meaningful alt text or are intentionally decorative.
- Text contrast is readable.
- Semantic sections remain clear.
- Interactive elements are reachable with Tab.

This is a smoke check, not a full accessibility audit.

---

## 13. Share-readiness validation

Before sharing the portfolio:

- Open the production URL in a clean browser tab.
- Confirm the first impression is strong.
- Confirm the hero communicates backend seniority.
- Confirm the project section looks complete.
- Confirm the contact section provides clear actions.
- Confirm the CV CTA works, even if it currently points to a placeholder.
- Confirm the social preview image is connected.
- Confirm there are no obvious visual bugs.

Production URL:

```txt
https://giordanap.github.io/portfolio/
```

---

## 14. Final closeout status

Use this final status after validation:

```txt
Local lint: Pending / Passed
Local build: Pending / Passed
GitHub Actions: Pending / Passed
GitHub Pages deployment: Pending / Passed
Production URL: Pending / Passed
Static assets: Pending / Passed
Metadata: Pending / Passed
Sitemap: Pending / Passed
Robots: Pending / Passed
Navigation: Pending / Passed
Responsive layout: Pending / Passed
Accessibility smoke check: Pending / Passed
Content review: Pending / Passed
Share readiness: Pending / Passed
```

Final expected status:

```txt
Portfolio ready to share.
```

---

## 15. Recommended stopping point

After this checklist is merged and validated, this phase can be considered closed.

Recommended next work should only happen when there is a concrete asset or content improvement, such as:

- Replacing the CV placeholder with a real PDF.
- Replacing project screenshot placeholders with real production screenshots.
- Improving case study details with measurable impact.
- Adding bilingual support if clearly scoped.

Until then, the portfolio is ready to share as a production-ready static landing page.
