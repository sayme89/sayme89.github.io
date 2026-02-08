# Copilot Instructions for sayme89.github.io

**Repository Metadata**: PT Adu Konstruksi Utama | Landing Page | Github Pages | React 18 | Tailwind CSS | SEO Optimized | Indonesian Construction Company

---

## Table of Contents
1. [Executive Summary](#1-executive-summary) - Project overview and key characteristics
2. [Repository Structure & Architecture](#2-repository-structure--architecture) - File layout, components, dependencies
3. [Development Workflow](#3-development-workflow) - Content updates, styling changes, external assets
4. [Deployment & Continuous Delivery](#4-deployment--continuous-delivery) - GitHub Pages automation, checklists, troubleshooting
5. [Code Patterns & Conventions](#5-code-patterns--conventions) - Tailwind CSS, React components, form fields
6. [Critical URLs & References](#6-critical-urls--references) - Contact info, CDN sources, asset management
7. [Debugging & Troubleshooting](#7-debugging--troubleshooting) - Common issues, validation tools, SEO verification

---

## 1. Executive Summary

**Repository:** PT Adu Konstruksi Utama Corporate Website  
**Type:** Static, pre-compiled single-page application  
**Hosting:** GitHub Pages (automatic deployment from `main` branch)  
**Language:** Indonesian  
**Technology Stack:** React 18 + React Query + Radix UI + Tailwind CSS + Vite

This repository contains **only compiled/minified production assets**. No source code is present. Modifications are limited to HTML structure, meta tags, and content references.

### Key Characteristics
- Pre-built artifacts only (source code in separate repository)
- Single-file HTML entry point with external JavaScript/CSS bundles
- Fully responsive design with mobile-first approach
- SEO-optimized with OpenGraph, Twitter Cards, and JSON-LD structured data
- Automatic deployment pipeline: `git push main` → GitHub Pages rebuild (~60 seconds)

## 2. Repository Structure & Architecture

### Directory Layout
```
sayme89.github.io/
├── index.html                    # Single entry point with embedded meta tags & asset references
├── assets/
│   ├── index-nCAJsshH.js        # Minified React bundle (hashed filename)
│   └── index-BfQ04KG5.css       # Minified Tailwind styles (hashed filename)
├── .github/
│   └── copilot-instructions.md  # This file
└── README.md
```

### File Descriptions

#### `index.html`
Primary markup file containing:
- **Metadata & SEO**: Google Site Verification, OpenGraph tags, Twitter Card meta, page title/description
- **Structured Data**: JSON-LD schema (`GeneralContractor` type) with business contact, services, address
- **Asset References**: Links to minified JavaScript and CSS bundles (with cache-busting hash filenames)
- **External Resources**: Google Fonts (Inter), FontAwesome CDN
- **Root Container**: Single `<div id="root">` for React hydration

#### `assets/index-*.js`
Minified React application containing:
- React 18 components (Hero, Services, Portfolio, ContactForm)
- React Query (TanStack Query) for state management
- Radix UI primitives (Select, TextArea, Label, Select options)
- Form validation and submission logic
- Component lifecycle and event handlers

#### `assets/index-*.css`
Compiled Tailwind CSS stylesheet featuring:
- Custom brand color definitions: `brand-navy`, `brand-orange`, `brand-slate`
- Responsive utility classes (mobile-first: `md:`, `lg:` breakpoints)
- Spacing, typography, shadows, borders, transitions
- **Status**: Minified/hashed—cannot be edited directly without source code access

### Brand Identity & Design System

| Element | Values | Notes |
|---------|--------|-------|
| **Primary Colors** | `brand-navy`, `brand-orange` | CTAs, acc­ents, hero text |
| **Secondary Color** | `brand-slate` | Body text, descriptive content |
| **Typography** | Google Fonts: Inter 300–800 | Clean, professional, web-optimized |
| **Spacing** | Tailwind defaults: `px-8`, `py-4`, `gap-4` | Consistent rhythm, mobile-responsive |
| **Icons** | FontAwesome 6.4.0 | Service cards, feature indicators |
| **Images** | Unsplash (cached) | Hero, portfolio items, testimonial placeholders |

### Business Information (Embedded in Metadata)
- **Company Name**: PT Adu Konstruksi Utama
- **Phone**: +6285213000763
- **Location**: Jakarta, DKI Jakarta, Indonesia
- **Website**: https://www.adukontruksi.com
- **Area Served**: Indonesia

### Client-Side Dependencies
| Library | Version | Purpose |
|---------|---------|---------|
| React | 18.x | UI framework |
| React DOM | 18.x | DOM rendering |
| React Query (TanStack Query) | Latest | State & data management |
| Radix UI | Latest | Accessible headless components |
| Tailwind CSS | Latest | Utility-first styling |
| FontAwesome | 6.4.0 | Icon library (CDN) |

## 3. Development Workflow

### Constraints & Limitations
This repository is a **deployment-only, pre-compiled artifact repository**. The source code (React components, Tailwind config, Vite configuration) exists in a separate repository with restricted access. This requires a discipline-based approach to modifications:

| Scope | Capability | Method | Deployment |
|-------|-----------|--------|-----------|
| **HTML Content** | ✅ Full access | Direct edit `index.html` | Auto (60s) |
| **Meta Tags** | ✅ Full access | Edit `<head>` section | Auto (60s) |
| **Styling** | ❌ Read-only | Cannot edit minified CSS | Requires rebuild |
| **JavaScript Logic** | ❌ Read-only | Cannot edit minified JS | Requires rebuild |
| **External Assets** | ⚠️ Limited | Update CDN URLs only | Auto (60s) |

### Workflow A: Content & Metadata Updates (Most Common)

**When to use**: Updating text, company info, meta tags, or OpenGraph images

**Steps**:
1. Open `index.html` in editor
2. Locate target section:
   - Meta tags: `<head>` section (lines 5–50)
   - Company info: JSON-LD `<script>` block (lines ~40–60)
   - Page content: Search for Indonesian text or component class names
3. Apply changes (text, URLs, alt text)
4. **Validation**: 
   - Verify HTML syntax (balanced tags, proper quotes)
   - Verify JSON-LD (no trailing commas, valid JSON structure)
   - Test OG preview: https://www.opengraph.app/
5. Commit: `git add index.html && git commit -m "Update [section]: [description]"`
6. Deploy: `git push origin main`
7. **Monitor**: Check site (~1–2 min for GitHub Pages propagation)

### Workflow B: Styling/Component Changes (Requires Rebuild)

**When needed**: Color changes, layout adjustments, new component structures

**Limitation**: CSS and JavaScript are minified with hashed filenames. Direct editing is unsafe.

**Solution**: 
- Require access to source repository (separate from sayme89.github.io)
- Modify source Tailwind config, Vite config, or React components there
- Run local build: `npm run build` or `yarn build`
- New hashed bundles automatically generated
- Push rebuild to this repository

**For quick style overrides** (if emergency):
- Create inline `<style>` tags in `<head>` of index.html (CSS only)
- Note: This bypasses Tailwind's design system and is **not recommended** for maintenance

### Workflow C: External Resource Updates

**When needed**: Update CDN versions, image URLs, font tweaks

**Process**:
1. Identify resource in `<head>` or inline:
   - FontAwesome: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/...`
   - Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:...`
   - Unsplash images: Specific image IDs in `<img src>`
2. Update URL/version carefully (test for CORS, availability)
3. Test: Clear browser cache, verify asset loads
4. Commit & push as per Workflow A

### Code Review Checklist (Before Commit)

Before pushing any changes, verify:

- [ ] **HTML Syntax**
  - [ ] All tags properly closed (`<meta>`, `<link>`, `<script>`)
  - [ ] Quotes balanced and consistent
  - [ ] No trailing whitespace introduced
  
- [ ] **Meta & SEO**
  - [ ] `<title>` reflects current content
  - [ ] `<meta description>` up to date
  - [ ] `og:image` and `twitter:image` valid and accessible
  - [ ] JSON-LD schema valid (no syntax errors, correct @type)
  
- [ ] **Accessibility**
  - [ ] All `<img>` tags have descriptive `alt` attributes
  - [ ] Links have proper `href` targets
  - [ ] Form labels present and properly linked (`htmlFor`)
  
- [ ] **Language**
  - [ ] All user-facing text in Indonesian (except proper nouns)
  - [ ] No English text in UI unless intentional
  
- [ ] **Links & URLs**
  - [ ] Phone: `+6285213000763`
  - [ ] Website: `https://www.adukontruksi.com`
  - [ ] All external URLs use `https://` (CORS/security)
  
- [ ] **Testing**
  - [ ] Local testing in browser (console for errors)
  - [ ] Mobile responsive test (DevTools: 375px, 768px, 1024px)
  - [ ] OG preview test if changed sharing images
  - [ ] Form validation (try submitting contact form)

## 4. Deployment & Continuous Delivery

### Automated Deployment Pipeline

This site uses **GitHub Pages automatic deployment** with SEO propagation:

```
Commit → git push main → GitHub Actions (automatic) → Pages rebuild → 
Live site (~1 min) → Search engine indexing (24-48 hrs)
```

**No manual build steps required.** Simply commit and push to the `main` branch.

### Pre-Deployment SEO Checklist

**Meta Tags & Structured Data** (critical for search ranking):
- [ ] Page `<title>` updated and keyword-optimized (60 chars max)
- [ ] `<meta description>` accurate and compelling (155-160 chars)
- [ ] `og:title`, `og:description`, `og:image` for social sharing
- [ ] `twitter:card`, `twitter:title`, `twitter:description` for Twitter
- [ ] JSON-LD schema valid (test with https://validator.schema.org/)
- [ ] Keywords naturally included in content and headings
- [ ] All internal links valid and descriptive (not "click here")

### Full Deployment Checklist

**Before pushing:**
- [ ] All changes committed with descriptive message
- [ ] Local HTML validation passed (no console errors)
- [ ] SEO elements verified (see Pre-Deployment SEO Checklist above)
- [ ] Mobile responsive verified (375px, 768px, 1024px widths)
- [ ] All links and images verified working

**After pushing:**
- [ ] Wait 60–90 seconds for GitHub Pages rebuild
- [ ] Visit production URL: `https://sayme89.github.io` (or custom domain)
- [ ] Clear browser cache (Ctrl+Shift+Delete, then refresh)
- [ ] Check browser console (F12 → Console tab) for errors
- [ ] **SEO verification**:
  - [ ] Open Graph preview correct (test with https://www.opengraph.app/)
  - [ ] JSON-LD schema renders correctly
  - [ ] Page title and description appear in browser tab
- [ ] Test critical paths:
  - [ ] Page loads without console errors
  - [ ] Navigation scrolls to form section
  - [ ] Contact form inputs accept data
  - [ ] Images load (hero, portfolio, icons)
  - [ ] Mobile breakpoints display correctly

### Search Engine Indexing Process

Once deployed, the site follows this indexing timeline:

| Timeline | Action | Notes |
|----------|--------|-------|
| **1 min** | GitHub Pages live | Site accessible globally |
| **1-7 days** | Google crawl detected | Google Bot discovers changes |
| **24-48 hrs** | Indexing (faster with updates) | Use Google Search Console to request reindex |
| **1-2 weeks** | Ranking adjustment | Search results reflect meta tag & content changes |

**Accelerate indexing**: Use Google Search Console → URL Inspection → "Request Indexing" for critical changes

### Troubleshooting SEO & Deployment Issues

| Issue | Root Cause | Resolution |
|-------|-----------|-----------|
| Changes not live (1+ min) | Cache or DNS propagation | Hard refresh (Ctrl+Shift+R), wait 2–3 min |
| SEO content not indexed | Google hasn't crawled yet | Wait 24-48 hrs, verify in Google Search Console |
| Rich snippets not showing | JSON-LD syntax error | Validate at https://validator.schema.org/ |
| 404 errors on assets | Hashed filename mismatch | Don't rename assets; verify paths in `index.html` |
| Layout broken/styling gone | CSS file path incorrect | Check `link rel="stylesheet"` in `<head>` |
| Form not working | JS bundle missing/corrupt | Verify `script type="module"` tag, check console errors |
| OG preview incorrect | Meta tags outdated or cached | Use https://www.opengraph.app/ to force refresh

## 5. Code Patterns & Conventions

### SEO Best Practices (HTML & Meta Tags)

**Page Metadata Structure** (critical ranking factors):
```html
<!-- Title: Keyword-focused, 50-60 characters, matches page content -->
<title>PT Adu Konstruksi Utama - Kontraktor Profesional Terpercaya</title>

<!-- Meta Description: Compelling, 155-160 chars, call-to-action included -->
<meta name="description" content="Kontraktor profesional dengan pengalaman 20+ tahun. Spesialis pembangunan gedung, infrastruktur, renovasi di Jakarta. Konsultasi gratis sekarang.">

<!-- Keywords: Relevant long-tail keywords for construction industry -->
<meta name="keywords" content="kontraktor jakarta, pembangunan gedung, jasa renovasi, infrastruktur">

<!-- Language declaration: Important for international SEO -->
<html lang="id">

<!-- Open Graph: Controls social media sharing appearance -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://sayme89.github.io">
<meta property="og:title" content="PT Adu Konstruksi Utama - Kontraktor Profesional">
<meta property="og:description" content="...">
<meta property="og:image" content="https://images.unsplash.com/.../w=1200&h=630"> <!-- Min 1200x630px -->

<!-- Structured Data: Google uses for rich snippets & knowledge panels -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "PT Adu Konstruksi Utama",
  "description": "Company description for search results",
  "url": "https://sayme89.github.io",
  "telephone": "+6285213000763",
  "areaServed": "Indonesia"
}
</script>
```

**Image SEO** (crucial for visual search & ranking):
- All `<img>` tags must have unique, descriptive `alt` text (keyword-rich when relevant)
- Use semantic `figure/figcaption` for important images
- Optimize image file sizes (< 100KB for web; use JPEG for photos, PNG for graphics)
- Example: `alt="Kontraktor pembangunan gedung modern Jakarta dengan sertifikat internasional"`

**Content & Heading Structure** (H1 hierarchy for search engines):
```html
<h1>PT Adu Konstruksi Utama - Jasa Konstruksi Terpercaya</h1> <!-- One per page -->
<h2>Layanan Pembangun Profesional</h2>
<h3>Pembangunan Gedung Komersial & Residensial</h3>
```

**Link Optimization** (internal & external):
- Use descriptive anchor text: ❌ "click here" → ✅ "Hubungi tim konstruksi kami"
- Internal links to related services improve crawlability
- External links to authority sites (Schema.org, company resources) build credibility

### Tailwind CSS Class Structure
All styling uses Tailwind's utility-first methodology. Common patterns:

**Layout & Spacing:**
```
Layout modes:     flex, grid, container, mx-auto, w-full, h-full
Padding/Margin:   px-8, py-4, space-y-4, gap-4
Responsive prefix: md:, lg: (mobile-first design)
```

**Color Palette:**
```
Brand Primary:    bg-brand-navy, text-brand-navy
Brand Accent:     bg-brand-orange, text-brand-orange
Brand Secondary:  text-brand-slate (descriptive text, body copy)
Neutral:          text-white, bg-white, text-gray-700
```

**Component States & Effects:**
```
Hover states:     hover:bg-white, hover:text-brand-navy
Transitions:      transition-colors, transition-opacity
Shadows:          shadow-lg, shadow-2xl
Borders:          border-2, border-white, rounded-lg, rounded-2xl
```

### React Component Patterns

Components visible in minified JS bundle follow these patterns:

**Hero Section:**
- Full-width image background with semi-transparent overlay
- Large heading + subheading (brand-navy text)
- Two CTA buttons: "Hubungi Kami" (primary), "Lihat Proyek Kami" (secondary)
- Responsive image sizing

**Service Cards:**
- FontAwesome icon (brand-orange background)
- Title (brand-navy, bold)
- Description text (brand-slate)
- Feature list with checkmarks
- Hover states: background lightening, shadow increase

**Portfolio/Project Gallery:**
- Grid layout (1 column mobile, 2+ columns on larger screens)
- Image + title + location overlay
- Consistent aspect ratios (recommended: 4:3)
- Lazy-loaded via Unsplash CDN

**Contact Form:**
- Input types: text (name), email, tel (phone)
- Select dropdown (Radix UI `SelectRoot` component)
- TextArea for message
- Submit button (brand-orange background)
- Client-side validation (required fields)
- Form state managed via React hooks

**Form Field Reference:**
```
Input IDs:    name, email, phone
Select ID:    service
TextArea ID:  message
Select Options: building, infrastructure, renovation, planning, consultation
```

## 6. Critical URLs & References

### Company Contact Information
- **Phone**: +6285213000763
- **Location**: Jakarta, DKI Jakarta, Indonesia
- **Domain**: https://www.adukontruksi.com (referenced in JSON-LD schema)

### External Asset Sources
| Asset Type | Source | Notes |
|-----------|--------|-------|
| **Images** | Unsplash | Pre-cached URLs; don't modify hash parameters unless updating image |
| **Icons** | FontAwesome 6.4.0 CDN | Ensure version consistency across references |
| **Fonts** | Google Fonts (Inter) | Loaded via CDN; weights 300–800 available |
| **Metadata** | Schema.org | GeneralContractor type used for structured data |

## 7. Debugging & Troubleshooting

### Common Issues & Resolutions

**Page fails to render or throws JS errors:**
1. Check browser DevTools console (F12 → Console tab)
2. Verify React bundle loaded: Network tab → `index-*.js` should be 200 OK
3. Verify CSS loaded: `index-*.css` should be present in Network tab
4. Clear browser cache and hard refresh (Ctrl+Shift+R on Windows/Linux)
5. Check for HTML syntax errors (unclosed tags, mismatched quotes)

**Images not loading:**
- Unsplash URLs require exact image ID parameters; don't truncate URLs
- Verify CORS headers are valid (all CDN requests should be HTTPS)
- Test image URL directly in new browser tab
- Check browser's Network tab for 404 or CORS errors

**Contact form not responding:**
1. Check browser console for form submission errors
2. Do not alter input field IDs (`name`, `email`, `phone`, `service`, `message`)
3. Verify select dropdown options match expected values: `building`, `infrastructure`, `renovation`, `planning`, `consultation`
4. Test form submission in browser DevTools Network tab for any HTTP errors

**Mobile layout broken/unresponsive:**
1. Verify viewport meta tag present: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
2. Test at standard breakpoints: 375px (mobile), 768px (tablet), 1024px+ (desktop)
3. Use DevTools Device Emulation (F12 → Device Toolbar)
4. Check for inline styles that override responsive Tailwind classes

### SEO Verification & Troubleshooting

**Meta Tags Not Appearing in Search Results:**
1. **Title & Description**: Open browser DevTools → Right-click → View Page Source → Search for `<title>` and `<meta name="description">`
2. **Character Limits**: Title should be 50-60 chars, description 155-160 chars (Google truncates longer text)
3. **Validation**: Use Google Search Console → URL Inspection → "Test live URL" to see how Google renders page
4. **Fix**: Edit `index.html` `<head>` section directly; changes appear within 1-2 min on live site

**Rich Snippets Missing (Structured Data)**:
1. **Validate JSON-LD**: https://validator.schema.org/
   - Paste `<script type="application/ld+json">` block content
   - Look for errors: trailing commas, invalid types, missing required fields
2. **Missing Fields**: Ensure `GeneralContractor` schema includes:
   - `name`, `description`, `url`, `telephone`, `address`, `areaServed`
3. **Fix**: Correct JSON syntax in `index.html`; Google reindexes within 24-48 hrs
4. **Accelerate**: Use Google Search Console → Request Indexing for faster updates

**Open Graph / Twitter Card Not Sharing Correctly**:
1. **Test OG Preview**: https://www.opengraph.app/ - enter site URL
2. **Check Meta Tags**: DevTools → View Source → Look for `og:title`, `og:description`, `og:image`
3. **Image Issues**:
   - Must be HTTPS URL (not HTTP)
   - Minimum size: 1200x630px (recommended: 1.91:1 aspect ratio)
   - Common formats: JPG, PNG, GIF
   - Test image URL directly in browser to confirm accessibility
4. **Fix**: Update `og:image` and `twitter:image` in `index.html`
5. **Force Refresh**: Social platforms cache previews; use:
   - Facebook: https://developers.facebook.com/tools/debug/ → Scrape Again
   - Twitter: https://cards-dev.twitter.com/validator
   - LinkedIn: https://www.linkedin.com/inspector/

**Page Not Indexed by Google**:
1. **Check Coverage**: Google Search Console → Coverage → Look for `index.html`
2. **Common Blocks** (in coverage report):
   - "Discovered - currently not indexed" → Wait 7-14 days, or request reindex
   - "Excluded by noindex tag" → Remove `<meta name="robots" content="noindex">`
   - "Crawled - currently not indexed" → Content quality issue; improve copy, add unique value
3. **Request Reindex**: Google Search Console → URL Inspection → Request Indexing
4. **Speed Issues**: Page speed affects ranking; test with https://pagespeed.web.dev/
5. **Fix**: Ensure page loads in < 3 seconds; optimize images (< 100KB for web)

**Ranking Not Improving After Updates**:
1. **Timeline**: Allow 2-4 weeks for ranking changes after content updates
2. **Keyword Research**: Use Google Search Console → Performance → Queries to see what keywords already rank
3. **Content Quality**: 
   - Is content unique (not just company name repeated)?
   - Do headings match search intent?
   - Are keywords naturally incorporated (not stuffed)?
4. **Backlinks**: Construction Industry directories (Yellow Pages, Google Maps, industry associat

ions) improve credibility
5. **Monitor**: Track rankings weekly with free tools: https://www.google.com/search?q=pt+adu+konstruksi

### Validation Tools

**SEO & Metadata Validation:**
- **HTML Syntax**: https://validator.w3.org/
- **JSON-LD Schema**: https://validator.schema.org/
- **Open Graph Preview**: https://www.opengraph.app/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Google Search Console**: https://search.google.com/search-console/ (primary SEO tool)
- **Page Speed**: https://pagespeed.web.dev/
- **Mobile Responsiveness**: Chrome DevTools Device Mode (F12)
