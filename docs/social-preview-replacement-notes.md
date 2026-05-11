# Social Preview Replacement Notes

Operational notes for replacing the temporary social preview image with a final production image.

Production URL:

```txt
https://giordanap.github.io/portfolio/
```

Current placeholder path:

```txt
https://giordanap.github.io/portfolio/og/social-preview-placeholder.svg
```

Recommended final path:

```txt
https://giordanap.github.io/portfolio/og/social-preview.png
```

---

## 1. Objective

The current social preview image is a lightweight SVG placeholder.

The goal of the final replacement is to provide a polished production image for:

- Open Graph previews.
- Twitter summary large image previews.
- Messaging app link previews.
- Recruiter-facing shared links.
- Portfolio presentation consistency.

The final image should reinforce Giordan Arredondo's positioning as a Senior Backend Engineer.

---

## 2. Current implementation

Current placeholder file:

```txt
public/og/social-preview-placeholder.svg
```

Current metadata file:

```txt
src/app/layout.tsx
```

Current metadata constant:

```ts
const socialPreviewImageUrl = `${siteUrl}og/social-preview-placeholder.svg`;
```

The placeholder is connected to:

- `metadata.openGraph.images`
- `metadata.twitter.images`

---

## 3. Recommended final image

Recommended final file:

```txt
public/og/social-preview.png
```

Recommended public URL:

```txt
https://giordanap.github.io/portfolio/og/social-preview.png
```

Recommended dimensions:

```txt
1200 x 630
```

Recommended format:

```txt
PNG
```

Reason:

```txt
PNG is widely supported for social preview cards and avoids compatibility issues that some platforms may have with SVG previews.
```

---

## 4. Final image content direction

The final social preview should communicate:

- Giordan Arredondo.
- Senior Backend Engineer.
- Backend-first positioning.
- Node.js, NestJS and TypeScript.
- AWS and cloud workflows.
- APIs and microservices.
- Distributed systems.
- Production reliability.
- Performance and incident resolution.

Suggested short copy:

```txt
Giordan Arredondo
Senior Backend Engineer
Node.js · NestJS · TypeScript · AWS · Microservices · APIs
Production reliability · Distributed systems · Cloud workflows
```

Avoid:

- Too much text.
- Generic full-stack positioning.
- Frontend-only visual language.
- Making Kong the main topic.
- Overcrowded diagrams.
- Tiny text that becomes unreadable in previews.

---

## 5. Replacement steps

When the final image is ready:

1. Add the final image at:

```txt
public/og/social-preview.png
```

2. Update `src/app/layout.tsx`.

Replace:

```ts
const socialPreviewImageUrl = `${siteUrl}og/social-preview-placeholder.svg`;
```

With:

```ts
const socialPreviewImageUrl = `${siteUrl}og/social-preview.png`;
```

3. Keep Open Graph dimensions aligned with the final image:

```ts
width: 1200,
height: 630,
```

4. Keep the alt text descriptive:

```txt
Giordan Arredondo Senior Backend Engineer portfolio preview
```

5. Run validation:

```powershell
pnpm exec eslint .
pnpm build
```

6. Merge through the standard PR flow.

---

## 6. Post-deployment verification

After merging the final image replacement:

- Confirm GitHub Actions deployment passed.
- Open the production URL.
- Confirm the final image is publicly reachable.
- Confirm metadata references the final PNG path.
- Confirm metadata does not point to localhost.
- Confirm the old SVG placeholder is no longer referenced in metadata.
- Confirm the image loads under the `/portfolio/` base path.

Expected final image URL:

```txt
https://giordanap.github.io/portfolio/og/social-preview.png
```

Expected metadata endpoints:

```txt
https://giordanap.github.io/portfolio/
https://giordanap.github.io/portfolio/sitemap.xml
https://giordanap.github.io/portfolio/robots.txt
```

---

## 7. Cache notes

Social platforms may cache previews.

After replacing the image:

- Give crawlers time to refresh.
- Re-share the production URL after deployment.
- Confirm that the metadata points to the final PNG.
- If a platform still shows the old preview, it may be using cached metadata.
- A future filename change can force a fresh preview if needed.

Possible cache-busting replacement path:

```txt
https://giordanap.github.io/portfolio/og/social-preview-v2.png
```

Only use a versioned filename if the final image needs to be refreshed after being cached.

---

## 8. Validation checklist

Before merging a final image replacement PR:

- Final image exists in `public/og`.
- Final image uses the expected 1200x630 size.
- `src/app/layout.tsx` points to the final image.
- Open Graph metadata includes the final image.
- Twitter metadata includes the final image.
- Alt text remains descriptive.
- `pnpm exec eslint .` passes.
- `pnpm build` passes.
- No tests or Storybook are added.
- No unrelated files are changed.

---

## 9. Current status

Current status:

```txt
Social preview placeholder is active.
```

Next expected status:

```txt
Final social preview PNG added and connected to metadata.
```
