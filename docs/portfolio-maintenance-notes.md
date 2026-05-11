# Portfolio Maintenance Notes

Operational maintenance notes for the static personal portfolio.

Production URL:

```txt
https://giordanap.github.io/portfolio/
```

Repository:

```txt
giordanap/portfolio
```

---

## 1. Maintenance objective

This document defines how to maintain the portfolio after the first production-ready release.

The portfolio should remain:

- Static.
- Fast.
- Premium.
- Backend-focused.
- Compatible with GitHub Pages.
- Easy to update through small commits.
- Free of unnecessary runtime complexity.

This document does not introduce tests, Storybook, backend services or runtime infrastructure.

---

## 2. Project positioning

The portfolio should continue presenting Giordan Arredondo as a Senior Backend Engineer.

Main positioning:

- Backend engineering.
- Node.js.
- NestJS.
- TypeScript.
- AWS.
- Microservices.
- APIs.
- Distributed systems.
- Production reliability.
- Performance.
- Incident resolution.
- Observability.
- SQS, DLQ and retries.
- Lambda, S3 and CloudWatch.
- Full-stack experience as supporting context.

Avoid shifting the portfolio toward:

- Frontend-only positioning.
- Generic full-stack messaging.
- Experimental UI without purpose.
- Over-focusing on Kong.
- Overloading the landing page with too much text.

---

## 3. Technical baseline

Current technical baseline:

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Framer Motion.
- Static export.
- GitHub Pages.
- pnpm 10.23.0.
- Node 20.x.

Maintenance rule:

```txt
Do not recommend pnpm@latest for this project.
```

Reason:

```txt
pnpm 11 caused issues with Corepack. The project currently uses pnpm 10.23.0.
```

---

## 4. Standard validation

Before merging any maintenance change, run:

```powershell
pnpm exec eslint .
pnpm build
```

Expected result:

- ESLint passes.
- Build passes.
- Static export remains compatible with GitHub Pages.
- No runtime server dependency is introduced.
- No API route dependency is introduced.
- No tests or Storybook are added unless the project direction changes later.

---

## 5. Standard maintenance flow

Use small, focused commits.

Recommended flow:

1. Create a branch from latest `main`.
2. Make one focused change.
3. Validate with lint and build.
4. Commit with a clear message.
5. Push the branch.
6. Create a PR.
7. Review the PR.
8. Squash merge.
9. Delete remote branch.
10. Update local `main`.
11. Delete local branch.

Do not use `git diff` in the assisted workflow.

Do not attempt to approve your own PR.

---

## 6. Content maintenance

When updating portfolio content, check:

- The hero still communicates backend seniority clearly.
- The core expertise section remains backend-first.
- Architecture examples stay practical and credible.
- Production experience remains visible.
- Featured projects support the backend positioning.
- Technical experience does not become too generic.
- Contact and CTA remain clear.
- There are no duplicated claims.
- There are no placeholders.
- There are no unfinished TODO notes.

Preferred content style:

- Clear.
- Direct.
- Senior.
- Technical but readable.
- Focused on business and production impact.
- Not exaggerated.
- Not too verbose.

---

## 7. Navigation maintenance

Current expected anchors:

- `#expertise`
- `#architecture`
- `#cloud-media`
- `#production`
- `#projects`
- `#technical-experience`
- `#contact`

When adding, removing or renaming sections:

- Update the section `id`.
- Update navigation data.
- Validate desktop navigation.
- Validate mobile navigation.
- Validate sticky header offset.
- Validate keyboard navigation.
- Validate that no old anchor remains.

---

## 8. SEO and metadata maintenance

When updating metadata, validate:

- Browser title.
- Description.
- Open Graph title.
- Open Graph description.
- Twitter metadata.
- Robots configuration.
- Sitemap output.
- Production URL references.
- No localhost references.

Expected metadata endpoints:

```txt
https://giordanap.github.io/portfolio/robots.txt
https://giordanap.github.io/portfolio/sitemap.xml
```

The sitemap should reference:

```txt
https://giordanap.github.io/portfolio/
```

---

## 9. Static assets maintenance

When updating images, icons or media assets:

- Keep file sizes reasonable.
- Use stable paths compatible with GitHub Pages.
- Validate assets under `/portfolio`.
- Avoid hardcoded localhost URLs.
- Avoid external dependencies unless necessary.
- Confirm images have useful alt text or are intentionally decorative.
- Confirm visual quality on mobile and desktop.

After deployment, check the browser Network tab for unexpected 404s.

---

## 10. Responsive maintenance

After visual changes, validate:

- Mobile width from 360px to 430px.
- Tablet width around 768px.
- Desktop width from 1280px and above.

Checklist:

- Header remains usable.
- Hero remains readable.
- Cards do not overflow.
- Grids adapt correctly.
- CTA section remains visible.
- No unexpected horizontal scroll appears.
- Text remains readable.
- Spacing remains premium.

---

## 11. Accessibility maintenance

For every UI change, verify:

- Skip link still works.
- Focus styles remain visible.
- Navigation is keyboard accessible.
- Buttons have accessible labels.
- Menu controls are understandable.
- Images have appropriate alt text.
- Semantic sections remain clear.
- Main content remains reachable.
- Color contrast remains readable.

This project should keep basic accessibility quality even without a full accessibility audit.

---

## 12. Deployment maintenance

After merging to `main`, validate:

```powershell
gh run list --limit 5
```

Expected result:

- Latest workflow completed successfully.
- GitHub Pages deployment completed successfully.
- Production URL loads correctly.

Production URL:

```txt
https://giordanap.github.io/portfolio/
```

If deployment fails:

- Check install step.
- Check Node.js version.
- Check pnpm version.
- Check build step.
- Check static output path.
- Check GitHub Pages settings.
- Check base path compatibility.

---

## 13. Dependency maintenance

Dependency updates should be conservative.

Before updating dependencies:

- Confirm the update is necessary.
- Review breaking changes.
- Keep pnpm at the known working version unless there is a clear reason to change.
- Validate with lint and build.
- Validate deployed GitHub Pages output.

Do not update dependencies just for novelty.

---

## 14. Recommended future improvements

Possible future improvements:

- Add real project screenshots.
- Add stronger case-study copy.
- Add downloadable CV link.
- Add social preview image.
- Add a lightweight changelog.
- Add analytics only if needed.
- Improve project cards with measurable impact.
- Add Spanish and English versions only if the scope is clearly defined.

Keep future improvements small and branch-based.

---

## 15. Maintenance status

Current status:

```txt
Production-ready static portfolio.
```

Maintenance rule:

```txt
Keep the project simple, static, premium and backend-focused.
```
