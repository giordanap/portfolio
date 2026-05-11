# Social Preview Validation Checklist

Operational checklist for validating the final social preview image in production.

Production URL:

```txt
https://giordanap.github.io/portfolio/
```

Final social preview image:

```txt
https://giordanap.github.io/portfolio/og/social-preview.png
```

Metadata file:

```txt
src/app/layout.tsx
```

---

## 1. Objective

This checklist validates that the final social preview image is correctly published and connected to the portfolio metadata.

The goal is to confirm that:

- The final PNG exists.
- The image is reachable in production.
- Open Graph metadata points to the final image.
- Twitter metadata points to the final image.
- The image path works under the GitHub Pages `/portfolio/` base path.
- The previous SVG placeholder is not used as the active metadata image.
- The preview is suitable for sharing the portfolio with recruiters and engineering teams.

---

## 2. Local file validation

Validate that the final image exists locally:

```powershell
Test-Path public/og/social-preview.png
Get-Item public/og/social-preview.png
```

Expected result:

- `public/og/social-preview.png` exists.
- File size is greater than zero.
- The image is a PNG.
- The image is intended to be 1200x630.

Optional local metadata check:

```powershell
Select-String -Path src/app/layout.tsx -Pattern "social-preview.png|socialPreviewImageUrl|openGraph|twitter|summary_large_image"
```

Expected result:

- `socialPreviewImageUrl` points to `og/social-preview.png`.
- Open Graph metadata includes the final image.
- Twitter metadata includes the final image.
- Twitter card is `summary_large_image`.

---

## 3. Standard validation

Run the standard validation before merging:

```powershell
pnpm exec eslint .
pnpm build
```

Expected result:

- ESLint passes.
- Production build passes.
- Static export remains compatible with GitHub Pages.
- No tests or Storybook are added.
- No runtime server dependency is introduced.

---

## 4. GitHub Actions validation

After merging to `main`, validate the latest workflow:

```powershell
gh run list --limit 5
```

Expected result:

- Latest workflow completed successfully.
- Build job completed successfully.
- GitHub Pages deployment completed successfully.
- No failed deployment job remains unresolved.

If needed, inspect the latest workflow run:

```powershell
gh run view --log
```

---

## 5. Production image URL validation

Validate the final image URL:

```powershell
Invoke-WebRequest -Uri "https://giordanap.github.io/portfolio/og/social-preview.png" -UseBasicParsing
```

Expected result:

- The request succeeds.
- The response is not a 404.
- The image is reachable under `/portfolio/og/social-preview.png`.
- The content is served from GitHub Pages.

Production image URL:

```txt
https://giordanap.github.io/portfolio/og/social-preview.png
```

---

## 6. Production page metadata validation

Open the production portfolio URL:

```txt
https://giordanap.github.io/portfolio/
```

Checklist:

- Page loads correctly.
- Browser console has no critical errors.
- Metadata does not point to localhost.
- Metadata uses the final PNG image.
- Metadata does not use the SVG placeholder as the active social image.

Expected active image:

```txt
https://giordanap.github.io/portfolio/og/social-preview.png
```

Deprecated placeholder image:

```txt
https://giordanap.github.io/portfolio/og/social-preview-placeholder.svg
```

The placeholder may remain in the repository as a reference asset, but it should not be the active Open Graph or Twitter image.

---

## 7. Open Graph validation

Validate Open Graph metadata from the deployed page.

Expected values:

- `og:type` should describe a website.
- `og:url` should point to the production portfolio URL.
- `og:title` should identify Giordan Arredondo as a Senior Backend Engineer.
- `og:description` should describe backend, Node.js, NestJS, TypeScript, AWS, microservices, distributed systems and production reliability.
- `og:image` should point to the final PNG.
- `og:image:width` should be `1200`.
- `og:image:height` should be `630`.
- `og:image:alt` should describe the portfolio preview.

Expected image:

```txt
https://giordanap.github.io/portfolio/og/social-preview.png
```

---

## 8. Twitter metadata validation

Validate Twitter metadata from the deployed page.

Expected values:

- `twitter:card` should be `summary_large_image`.
- `twitter:title` should identify Giordan Arredondo as a Senior Backend Engineer.
- `twitter:description` should describe resilient APIs, cloud workflows and production-grade distributed systems.
- `twitter:image` should point to the final PNG.
- `twitter:image:alt` should describe the portfolio preview.

Expected image:

```txt
https://giordanap.github.io/portfolio/og/social-preview.png
```

---

## 9. Visual preview validation

When the social image is opened directly, validate:

- Image dimensions are 1200x630.
- Text is readable at preview size.
- Giordan Arredondo's name is visible.
- Senior Backend Engineer positioning is clear.
- Backend-first technologies are visible.
- AWS, microservices, APIs and production reliability are represented.
- The design matches the premium portfolio identity.
- The image does not look like a temporary placeholder.

---

## 10. Sharing validation

After deployment, share or preview the production URL where possible:

```txt
https://giordanap.github.io/portfolio/
```

Checklist:

- Link preview uses the final PNG.
- Title is correct.
- Description is correct.
- Image crop looks acceptable.
- Text remains readable.
- No old placeholder appears.
- No localhost metadata appears.

Note:

Some platforms cache previews. If an old preview appears, it may be a platform cache issue rather than a deployment issue.

---

## 11. Cache notes

Social preview caches may delay the visible update.

If the old preview is still shown:

- Confirm production metadata points to the final PNG.
- Confirm the final PNG URL is reachable.
- Wait for the platform cache to refresh.
- Re-share the production URL.
- Use a versioned image path only if cache refresh becomes a real issue.

Possible future cache-busting path:

```txt
https://giordanap.github.io/portfolio/og/social-preview-v2.png
```

Do not introduce a versioned image path unless necessary.

---

## 12. Final checklist

Before considering the social preview complete:

- `public/og/social-preview.png` exists.
- `src/app/layout.tsx` references `og/social-preview.png`.
- Open Graph metadata references the final PNG.
- Twitter metadata references the final PNG.
- `pnpm exec eslint .` passes.
- `pnpm build` passes.
- GitHub Actions deployment passes.
- Production image URL loads.
- Production portfolio URL loads.
- Link preview is visually acceptable.
- The SVG placeholder is not the active metadata image.
- No tests or Storybook were added.

---

## 13. Current status

Current expected status:

```txt
Final social preview image active and ready for production validation.
```
