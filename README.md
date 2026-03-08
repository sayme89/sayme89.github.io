# PT Adu Konstruksi Utama - Landing Page

Corporate landing page for PT Adu Konstruksi Utama, hosted on GitHub Pages.

## Overview

- This repository contains static production artifacts (build output), not raw React/Tailwind source code.
- The main entry point is `index.html`.
- JS/CSS files in `assets/` are minified and use hashed filenames.
- Deployment runs automatically when pushing to the `main` branch.

## Tech Stack

- React 18 (compiled bundle)
- Tailwind CSS (compiled bundle)
- GitHub Pages
- Open Graph, Twitter Card, and JSON-LD for SEO

## Repository Structure

```text
.
|- index.html
|- README.md
`- assets/
	|- index-nCAJsshH.js
	`- index-BfQ04KG5.css
```

## What You Can and Cannot Edit in This Repo

### Safe to edit directly

- SEO metadata in `index.html` (title, description, og tags, twitter tags)
- JSON-LD structured data
- Static HTML content that exists in `index.html`

### Not recommended to edit directly

- App logic in `assets/index-*.js`
- Primary styling in `assets/index-*.css`

If you need major component/layout/styling changes, make them in the source repository, rebuild, and publish the latest artifacts to this repo.

## Run Locally

Because this is a static site, run a simple static server from the project root.

Example using Python:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Deployment

Deployment to GitHub Pages is automatic from the `main` branch.

```bash
git add .
git commit -m "Update content/SEO"
git push origin main
```

Changes are usually live within about 1-2 minutes after push.

## Pre-Push Checklist

- Ensure HTML tags are valid and typo-free
- Ensure JSON-LD is valid (check at https://validator.schema.org/)
- Ensure SEO meta tags are correct (title/description/og/twitter)
- Ensure all URLs use `https://`
- Check mobile and desktop layouts

## Business Information

- Name: PT Adu Konstruksi Utama
- Phone: +6285213000763
- Location: Jakarta, DKI Jakarta, Indonesia
- Website: https://www.adukontruksi.com

## Important Notes

- Filenames in `assets/` are hashed. Do not rename them manually.
- If asset hashes change after a new build, update file references in `index.html`.
