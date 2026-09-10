# Complete On-Page SEO Across the Website

## Goal
Make every public page technically complete, search-friendly, medically responsible, and internally consistent using only verified information already present on the site.

## Changes

### 1. Page titles and social metadata
- Give Home, About, Treatments, Contact, Privacy Policy, Medical Disclaimer, and Terms of Use concise, unique titles and descriptions.
- Add matching Open Graph and X/Twitter title, description, card, URL, and page type metadata to every page.
- Keep each canonical URL self-referencing.
- Mark the three legal/information-only pages `noindex, follow` so search results focus on the doctor, treatments, and appointment pages.

### 2. Structured search data
- Complete the sitewide physician data with the verified phone number, email, Max Saket affiliation, address, location served, and surgical specialty.
- Add WebSite data and strengthen page-specific physician/profile, treatment-list, contact, and breadcrumb data.
- Keep claims limited to the verified qualifications, experience, roles, and treatments already supplied.

### 3. Search-focused page content and navigation
- Make the homepage H1 identify Dr. Sinha and his cardiac-surgery specialty in Delhi while preserving the existing visual style.
- Improve headings and introductory wording on key pages for clear search intent: doctor profile, cardiac procedures, and appointment booking.
- Remove visible testimonial placeholders, stale second-opinion links, broken placeholder social links, and outdated placeholder notices that weaken trust or lead nowhere.
- Preserve the medical disclaimer and avoid treatment guarantees, invented outcomes, rankings, or patient claims.

### 4. Crawlability and accessibility
- Keep search crawlers allowed in `robots.txt`.
- Confirm one H1 per page, descriptive image text, semantic headings, working internal links, and accessible form/map labels.
- Do not create a sitemap yet because no published or custom domain exists; add it after the first publish so it contains the final public URLs.

### 5. Verification
- Check every route in the running preview, including titles, descriptions, canonical links, structured data, headings, images, and console errors.
- Re-run the available SEO foundations review after implementation and resolve any findings caused by the current pages.

## Technical details
- Update route-level `head()` metadata in each TanStack route.
- Keep sitewide defaults and physician/WebSite JSON-LD in the root route only.
- Add page-level JSON-LD where it accurately represents visible content.
- Use relative canonical and structured-data URLs until a public domain exists.
