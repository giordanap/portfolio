# Deployment Verification Checklist

Operational checklist for validating the static portfolio deployment on GitHub Pages.

Expected production URL:

```txt
https://giordanap.github.io/portfolio/
```

This checklist focuses on static export, GitHub Pages deployment, routing, assets, metadata, accessibility and final production review.

It does not add tests, Storybook or runtime infrastructure.

---

## 1. Local validation

Run the standard local validation before opening or merging a pull request.

```powershell
pnpm exec eslint .
pnpm build
```

Expected result:

- ESLint finishes without errors.
- Next.js build finishes successfully.
- Static export output is generated correctly.
- No runtime-only features are required.
- No server-side APIs are needed for the portfolio landing page.

---

## 2. Static export validation

Confirm that the project still supports GitHub Pages static hosting.

Checklist:

- `next.config.ts` keeps static export enabled.
- The project supports deployment under the `/portfolio` base path.
- Generated links, assets and metadata work correctly under:

```txt
https://giordanap.github.io/portfolio/
```

Validate after build:

- No missing asset warnings.
- No broken image paths.
- No broken font or CSS paths.
- No dynamic route dependency that requires a Node.js server.
- No API route dependency required for the landing page.

---

## 3. GitHub Actions and GitHub Pages validation

After merging to `main`, validate the deployment pipeline.

Checklist:

- The GitHub Actions workflow starts after the merge.
- The workflow completes successfully.
- GitHub Pages publishes from the expected branch or artifact.
- The deployed site URL is available.
- No failed deployment job remains in the Actions tab.

Useful checks:

```powershell
gh pr list --state merged --limit 5
gh run list --limit 5
```

If the latest workflow failed:

- Open the failed run.
- Check install, build and deploy steps.
- Confirm Node.js version is compatible with the project.
- Confirm pnpm is using the expected version.
- Confirm the static output path matches the GitHub Pages workflow.

---

## 4. Production URL validation

Open the production URL after deployment:

```txt
https://giordanap.github.io/portfolio/
```

Checklist:

- The page loads without a 404.
- The site works under `/portfolio/`.
- Refreshing the page does not break the route.
- The browser console does not show critical errors.
- CSS loads correctly.
- Images and media placeholders load correctly.
- The visual layout matches the expected premium portfolio style.

---

## 5. Navigation and anchor validation

Validate all header navigation anchors.

Expected anchors:

- `#expertise`
- `#architecture`
- `#cloud-media`
- `#production`
- `#projects`
- `#technical-experience`
- `#contact`

Checklist:

- Each navigation item scrolls to the correct section.
- No anchor points to an old placeholder section.
- Sticky header does not hide section titles.
- Scroll offset feels correct on desktop and mobile.
- Mobile menu closes after selecting an item.
- Keyboard navigation reaches the links correctly.

---

## 6. Content validation

Review the deployed page copy.

Checklist:

- The portfolio clearly presents Giordan as a Senior Backend Engineer.
- Backend experience is the main focus.
- Node.js, NestJS, TypeScript, AWS, microservices, APIs and distributed systems are visible.
- Production experience, reliability, performance, incidents and observability are emphasized.
- Full-stack experience appears as supporting experience, not as the main positioning.
- Kong may appear, but it is not the main protagonist.
- There are no old placeholders.
- There are no duplicated sections.
- There are no unfinished notes, TODOs or fake content.

---

## 7. Metadata, SEO and social preview validation

Validate metadata from the deployed site.

Checklist:

- Browser tab title is correct.
- Page description is aligned with the portfolio positioning.
- Open Graph metadata exists.
- Twitter metadata exists.
- Robots configuration is available.
- Sitemap is available.
- Canonical or metadata URLs point to the expected GitHub Pages URL when applicable.

Expected URLs:

```txt
https://giordanap.github.io/portfolio/robots.txt
https://giordanap.github.io/portfolio/sitemap.xml
```

Checklist:

- `robots.txt` loads correctly.
- `sitemap.xml` loads correctly.
- Sitemap references the expected production URL.
- Metadata does not point to localhost.

---

## 8. Responsive validation

Validate the deployed page in common viewport sizes.

Checklist:

- Mobile layout works correctly.
- Tablet layout works correctly.
- Desktop layout works correctly.
- Header navigation remains usable.
- Hero section remains readable.
- Cards and grids do not overflow.
- Long text does not break the layout.
- CTA section remains visible and usable.
- No horizontal scroll appears unexpectedly.

Suggested viewport checks:

- Mobile: 360px to 430px width.
- Tablet: 768px width.
- Desktop: 1280px and above.

---

## 9. Accessibility smoke check

Perform a basic accessibility review.

Checklist:

- Skip link works.
- Focus styles are visible.
- Header buttons have accessible labels.
- Navigation links are keyboard accessible.
- Interactive elements can be reached with Tab.
- Escape or menu interactions behave correctly where applicable.
- Images have appropriate alt text or are intentionally decorative.
- Text contrast is readable.
- Page structure uses semantic sections.
- Main content is reachable.

---

## 10. Final pre-merge checklist

Before merging the pull request:

- `pnpm exec eslint .` passed.
- `pnpm build` passed.
- Documentation changes are committed.
- PR summary explains the deployment verification checklist.
- No tests or Storybook were added.
- No unrelated files were changed.

---

## 11. Final post-merge checklist

After squash merging into `main`:

- Pull latest `main`.
- Confirm the branch was deleted remotely.
- Delete the local feature branch.
- Confirm GitHub Actions deployment completed successfully.
- Open the production URL.
- Validate assets, routes, metadata, sitemap, robots, anchors, responsive layout and accessibility smoke checks.

Production URL:

```txt
https://giordanap.github.io/portfolio/
```
