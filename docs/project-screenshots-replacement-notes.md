# Project Screenshots Replacement Notes

Operational notes for replacing the featured project screenshot placeholders with final production screenshots.

Production URL:

```txt
https://giordanap.github.io/portfolio/
```

Current screenshot placeholder paths:

```txt
https://giordanap.github.io/portfolio/screenshots/projects/datatwin-gateway-placeholder.svg
https://giordanap.github.io/portfolio/screenshots/projects/async-processing-placeholder.svg
https://giordanap.github.io/portfolio/screenshots/projects/expiry-mate-placeholder.svg
```

Recommended final screenshot paths:

```txt
https://giordanap.github.io/portfolio/screenshots/projects/datatwin-gateway.png
https://giordanap.github.io/portfolio/screenshots/projects/async-processing.png
https://giordanap.github.io/portfolio/screenshots/projects/expiry-mate.png
```

---

## 1. Objective

The current featured project visuals are placeholder SVG files.

The goal of the final replacement is to use real or production-ready screenshots that improve credibility while keeping the portfolio backend-focused.

The screenshots should support the project story without turning the portfolio into a frontend-only showcase.

---

## 2. Current implementation

Current project data file:

```txt
src/data/featured-projects.ts
```

Current project section file:

```txt
src/components/sections/featured-projects-section.tsx
```

Current public asset folder:

```txt
public/screenshots/projects
```

Current placeholder files:

```txt
public/screenshots/projects/datatwin-gateway-placeholder.svg
public/screenshots/projects/async-processing-placeholder.svg
public/screenshots/projects/expiry-mate-placeholder.svg
```

The project cards already render screenshots through the `screenshot` object in each project entry.

Current structure:

```ts
screenshot: {
  src: "/screenshots/projects/example-placeholder.svg",
  alt: "Project screenshot placeholder",
}
```

---

## 3. Recommended final assets

Use production-ready PNG images.

Recommended dimensions:

```txt
960 x 540
```

Recommended aspect ratio:

```txt
16:9
```

Recommended format:

```txt
PNG
```

Recommended final files:

```txt
public/screenshots/projects/datatwin-gateway.png
public/screenshots/projects/async-processing.png
public/screenshots/projects/expiry-mate.png
```

Reason:

```txt
PNG provides stable rendering for diagrams, UI screenshots and architecture-style visuals across browsers and static hosting.
```

---

## 4. Screenshot content direction

### DataTwin API Gateway modernization

Recommended visual direction:

- Architecture diagram.
- Gateway routing flow.
- Frontend to Kong to upstream services.
- JWT, routes, services and smoke validation.
- Backend modernization emphasis.

Suggested final filename:

```txt
datatwin-gateway.png
```

Avoid:

- Exposing private company data.
- Showing secrets, tokens or internal URLs.
- Making Kong the only focus.
- Overcrowding the diagram with too many services.

---

### Reliable async processing patterns

Recommended visual direction:

- Queue-based backend flow.
- API request to SQS.
- Worker or Lambda processing.
- Retry behavior.
- DLQ failure path.
- CloudWatch or observability signal.

Suggested final filename:

```txt
async-processing.png
```

Avoid:

- Showing real AWS account information.
- Showing private logs.
- Showing production identifiers.
- Making the visual too abstract.

---

### ExpiryMate contract-first MVP

Recommended visual direction:

- Product UI screenshot.
- Contract-first architecture diagram.
- Product, ItemLot, Category, Location and NotificationRule model.
- Expiry buckets such as today, this week and expired.
- Frontend and backend alignment.

Suggested final filename:

```txt
expiry-mate.png
```

Avoid:

- Unfinished wireframes that look too rough.
- Fake metrics.
- Overloading the screenshot with too much text.
- Making the project look more complete than it really is.

---

## 5. Replacement steps

When final screenshots are ready:

1. Add the final PNG files:

```txt
public/screenshots/projects/datatwin-gateway.png
public/screenshots/projects/async-processing.png
public/screenshots/projects/expiry-mate.png
```

2. Update `src/data/featured-projects.ts`.

Replace:

```ts
src: "/screenshots/projects/datatwin-gateway-placeholder.svg"
```

With:

```ts
src: "/screenshots/projects/datatwin-gateway.png"
```

Replace:

```ts
src: "/screenshots/projects/async-processing-placeholder.svg"
```

With:

```ts
src: "/screenshots/projects/async-processing.png"
```

Replace:

```ts
src: "/screenshots/projects/expiry-mate-placeholder.svg"
```

With:

```ts
src: "/screenshots/projects/expiry-mate.png"
```

3. Update alt text if the final image content changes.

4. Keep screenshot dimensions aligned with the existing render:

```tsx
width={960}
height={540}
```

5. Run validation:

```powershell
pnpm exec eslint .
pnpm build
```

6. Merge using the standard PR flow.

---

## 6. Public URL validation

After deployment, validate final screenshot URLs:

```powershell
Invoke-WebRequest -Uri "https://giordanap.github.io/portfolio/screenshots/projects/datatwin-gateway.png" -UseBasicParsing
Invoke-WebRequest -Uri "https://giordanap.github.io/portfolio/screenshots/projects/async-processing.png" -UseBasicParsing
Invoke-WebRequest -Uri "https://giordanap.github.io/portfolio/screenshots/projects/expiry-mate.png" -UseBasicParsing
```

Expected result:

- Each image URL loads.
- No image returns 404.
- Images are served under `/portfolio`.
- Images render clearly in the featured project cards.

---

## 7. Visual validation checklist

After replacing placeholders, validate:

- Project cards remain balanced.
- Screenshot aspect ratio stays consistent.
- No image is blurry.
- Text inside images is readable.
- The section still feels backend-focused.
- The visuals support the project story.
- Images do not expose private information.
- Mobile layout remains clean.
- Tablet layout remains clean.
- Desktop layout remains premium.

---

## 8. Privacy and safety checklist

Before using real screenshots:

- Remove secrets.
- Remove tokens.
- Remove private URLs.
- Remove internal IDs.
- Remove private customer data.
- Remove sensitive company names unless safe to disclose.
- Remove account IDs.
- Remove credentials.
- Remove real logs if they contain private information.
- Avoid showing unreleased internal systems.

When in doubt, use a recreated diagram instead of a raw screenshot.

---

## 9. Content alignment checklist

The final visuals should reinforce:

- Backend ownership.
- Architecture judgment.
- API thinking.
- Cloud reliability.
- Production operations.
- Observability.
- Contract-first product design.
- Full-stack experience as supporting context.

The final visuals should not shift the portfolio toward:

- Generic UI design portfolio.
- Frontend-only positioning.
- Overly decorative screenshots.
- Unclear diagrams.
- Unverified claims.

---

## 10. Placeholder lifecycle

The current placeholder SVG files may remain temporarily as fallback reference assets.

Once final screenshots are validated, consider whether to remove:

```txt
public/screenshots/projects/datatwin-gateway-placeholder.svg
public/screenshots/projects/async-processing-placeholder.svg
public/screenshots/projects/expiry-mate-placeholder.svg
```

Only remove them if:

- Final PNG screenshots are committed.
- Final PNG screenshots are referenced by `src/data/featured-projects.ts`.
- Production deployment works.
- There is no need to keep placeholders as documentation references.

---

## 11. Final validation checklist

Before merging a final screenshot replacement PR:

- Final PNG files exist.
- `src/data/featured-projects.ts` references final PNG paths.
- Alt text is accurate.
- Featured project cards render correctly.
- `pnpm exec eslint .` passes.
- `pnpm build` passes.
- No tests or Storybook are added.
- No unrelated files are changed.
- Production deployment passes.
- Final URLs load under `/portfolio`.
- The portfolio remains backend-focused.

---

## 12. Current status

Current status:

```txt
Project screenshot placeholders are active.
```

Next expected status:

```txt
Final project screenshots added and connected to featured project cards.
```
