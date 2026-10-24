# jbcmarquez
Personal portfolio website for John Billy Marquez with image gallery, project showcase, about, and contact pages.

## Stack
Plain HTML, CSS and JavaScript — no build step. Pages: `index.html`, `about.html`, `projects.html`, `gallery.html`, `testimonials.html`, `contact.html`. Styles live in `assets/css/styles.css` (design tokens at the top), behaviour in `assets/js/main.js`.

## Run locally
```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Editing your content
- **Personal data / bio / skills:** `about.html` and `index.html`.
- **Projects:** `projects.html` (one `<article class="project">` each).
- **Testimonials:** `testimonials.html` (replace the clearly marked placeholders with genuine quotes and attribution).
- **Contact details & social links:** `contact.html`. The GitHub, LinkedIn and Facebook URLs are **placeholders** (`YOUR-USERNAME`, `YOUR-PROFILE`) — replace them.
- **Contact form:** frontend only. By default it opens your email app. To send via a service (e.g. Formspree), set the `data-endpoint` attribute on `#contact-form`.

## Replacing gallery images
Sample placeholders are in `assets/images/gallery/`. Each image has three widths (480, 800, 1200) in AVIF, WebP and JPEG named `<name>-<width>.<ext>`. Replace the files (keeping the same names/ratios), or add a `<figure>` in `gallery.html` following the existing `<picture>` pattern. Keep `width`/`height` matching the image aspect ratio to avoid layout shift. Images use `srcset`/`sizes`, AVIF/WebP with JPEG fallback, and lazy loading.

## Accessibility
Semantic landmarks, skip link, keyboard-focus styles, alt text, light/dark contrast-aware palette, and `prefers-reduced-motion` support.
