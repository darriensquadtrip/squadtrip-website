# SquadTrip: WordPress → Vercel Migration Plan
> **For Claude Code:** Read this document fully, then enter planning mode. This doc captures goals, constraints, workstreams, and sequencing for a full site migration and growth optimization initiative. Your job is to propose a concrete execution plan with tasks, file targets, and automation scripts for each phase.

---

## Context

SquadTrip is migrating its marketing site from WordPress to Vercel. The primary motivations are:

- **Full control** — eliminate dependency on third-party plugins that require updates and introduce malware/security risks
- **Speed** — Vercel's architecture will significantly improve page load performance
- **Agility** — changes can be made rapidly using Claude Code without navigating WordPress's interface
- **Data ownership** — more control over tracking, analytics, and instrumentation to drive better decisions

The end goals of this initiative are:
1. **Increase traffic to the site** (SEO, AI search visibility, content quality)
2. **Increase conversions on the site** (account signups, demo requests, or equivalent CTAs)

---

## Phase 0: Pre-Cutover Preparation (Do Before DNS Switch)

### 0.1 — Redirect Map
- Crawl the live WordPress site and extract every public URL (pages, posts, category pages, tag pages, author pages)
- Map each WordPress URL to its corresponding Vercel route
- Flag any URL structure mismatches (trailing slashes, `/blog/category/` prefixes, slug differences)
- Output a `redirects.json` or `vercel.json` redirects config ready to deploy
- Prioritize URLs with the most Search Console impressions/clicks

### 0.2 — Automated Content Parity Check
Write a crawler/diff script that:
- Hits every URL on both the WordPress site and the Vercel staging URL
- Extracts and compares: page title, H1, meta description, body text (word count + key phrases), images (src, alt text), internal links, and CTAs
- Outputs a structured diff report (markdown or JSON) flagging missing or changed content
- Flags any pages where content was intentionally changed (maintain an explicit allowlist)

### 0.3 — Asset Audit
- Confirm all images are present on Vercel deployment and properly optimized (Next.js Image component or equivalent)
- Verify all image alt text is carried over
- Check all internal links resolve correctly (no 404s)
- Check all external links are still valid
- Check all downloadable assets (PDFs, etc.) are accessible

### 0.4 — Pre-Launch SEO Crawl
Run the staging URL through an SEO audit and fix:
- Missing or duplicate `<title>` tags
- Missing or duplicate meta descriptions
- Missing canonical tags
- Missing or malformed Open Graph / Twitter Card tags
- Missing `alt` attributes on images
- Broken internal links
- Pages returning non-200 status codes
- Thin content pages (under ~300 words)

---

## Phase 1: Technical SEO Instrumentation

### 1.1 — Canonical Tags
- Every page must render a correct `<link rel="canonical">` tag
- Validate across: homepage, blog index, individual blog posts, landing pages, and any paginated pages

### 1.2 — Open Graph & Twitter Cards
- Every page must have correct OG tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- Blog posts need `article` type with `og:published_time` and `og:author`
- Twitter card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

### 1.3 — Structured Data / Schema Markup
Implement the following schema types as appropriate:
- `Organization` on homepage
- `WebSite` with `SearchAction` on homepage
- `Article` or `BlogPosting` on all blog posts
- `BreadcrumbList` on all interior pages
- `FAQPage` on any FAQ sections
- `SoftwareApplication` on product/feature pages (if applicable)

> **Note:** Structured data is especially important for AI search visibility. LLMs and AI Overviews prioritize machine-readable, structured content.

### 1.4 — Sitemap
- Generate and deploy a dynamic `sitemap.xml` that includes all public pages
- Submit sitemap to Google Search Console after DNS cutover
- Confirm sitemap is referenced in `robots.txt`

### 1.5 — Robots.txt
- Confirm `robots.txt` is present and correct
- Ensure staging/dev environments are blocked; production is fully crawlable
- No accidental disallow rules blocking important pages

### 1.6 — AI SEO: llms.txt
- Create an `/llms.txt` file at the root that describes SquadTrip for LLM consumption
- Should include: what the product does, who it's for, key use cases, and links to key pages
- This improves visibility in AI-powered search and LLM citations

---

## Phase 2: Analytics & Tracking Instrumentation

### 2.1 — Google Analytics 4
- Confirm GA4 tag is firing on **all pages** (not just homepage)
- Confirm key events are tracked: page_view, CTA clicks, form submissions, account signup (conversion event)
- Set up GA4 conversion goals aligned to primary KPIs
- Link GA4 to Google Search Console for integrated reporting

### 2.2 — PostHog
- Confirm PostHog snippet is on all pages
- Set up PostHog to track: page views, CTA clicks, form interactions, signup funnel steps
- PostHog will own: product analytics, funnel analysis, and A/B test results
- Define the signup funnel as a PostHog funnel for ongoing monitoring

### 2.3 — UTM Tracking
- Audit all outbound links from other owned properties (email, social, ads) to ensure UTM params are present
- Ensure UTM parameters are passed through to GA4 and PostHog correctly
- Standardize UTM naming convention and document it

### 2.4 — Vercel Analytics
- Enable Vercel Web Analytics for Core Web Vitals monitoring
- Use Vercel Speed Insights to monitor LCP, CLS, FID/INP per page
- Vercel analytics owns: performance monitoring (not acquisition or behavior)

### Tool Ownership Summary
| Tool | Owns |
|---|---|
| Vercel Analytics | Performance, Core Web Vitals |
| Google Analytics 4 | Acquisition, traffic sources, behavior |
| Google Search Console | Organic search performance, crawl health |
| PostHog | Product analytics, funnels, A/B testing |

---

## Phase 3: Manual QA Pass

### 3.1 — Top Pages by Search Console Traffic
- Pull top 20–30 URLs by impressions and clicks from Search Console
- Manually review each for: content accuracy, image rendering, link functionality, mobile layout, CTA presence

### 3.2 — Visual & Brand QA
- Fonts match brand spec on all pages and breakpoints
- Colors match brand spec (check buttons, headings, backgrounds, links)
- Header and footer are consistent across all page types
- Logo renders correctly (SVG preferred, check both light and dark contexts)

### 3.3 — Mobile & Desktop Experience
- Test all key pages on: mobile (375px, 390px), tablet (768px), desktop (1280px, 1440px)
- Check navigation, CTA buttons, image scaling, font sizing, and form usability on mobile

### 3.4 — Blog Page Template
- Confirm blog index and individual post templates are correct
- Check: author, date, category tags, related posts, social share (if applicable)
- Confirm reading time, structured data, and OG image are all rendering

---

## Phase 4: DNS Cutover & Post-Launch Monitoring

### Cutover Checklist
- [ ] Redirect map deployed and tested on staging
- [ ] All parity checks passed or exceptions documented
- [ ] GA4, PostHog, Vercel Analytics confirmed firing
- [ ] Sitemap generated and ready to submit
- [ ] `robots.txt` verified
- [ ] Canonical and OG tags verified
- [ ] No broken links or missing images

### Post-Cutover (First 72 Hours)
- Monitor Google Search Console for: crawl errors, coverage issues, manual actions
- Monitor GA4 for: traffic continuity (compare vs. prior period), zero-traffic pages
- Monitor Vercel logs for: 404s, 500s, redirect loops
- Run a fresh Semrush or Ahrefs crawl on the live domain to catch anything missed

---

## Phase 5: SEO Error Remediation

Using data from Semrush, Ahrefs, Search Console, and the pre-launch audit:
- Fix all crawl errors (4xx, 5xx, redirect chains)
- Fix all on-page SEO warnings (missing tags, duplicate content, thin pages)
- Fix all Core Web Vitals issues (LCP, CLS, INP)
- Prioritize fixes by: pages with existing impressions > pages with high-intent keywords > all others

---

## Phase 6: Conversion Rate Optimization

### 6.1 — CTA Standardization
- Audit all pages for CTA presence
- Define CTA placement standards: above the fold, mid-page, end of content, sticky (where appropriate)
- Standardize CTA copy and button design across all page types
- Ensure every page has at least one clear path to signup or demo

### 6.2 — Copy, Layout & Image Improvements
- Identify pages with high impressions but low CTR (Search Console) → improve title/meta
- Identify pages with high traffic but low conversion (GA4/PostHog) → improve on-page copy and CTA
- Identify pages where images are weak or missing → update with higher-quality visuals

### 6.3 — A/B Testing Setup
- Use PostHog Feature Flags + Vercel Edge Middleware to run experiments at the CDN layer
- Initial test candidates:
  - Homepage headline copy
  - CTA button text ("Get Started" vs "Start Free" vs "Plan Your Trip")
  - Hero image or illustration
  - Social proof placement (testimonials, logos, stats)
- Define success metric for each test before launching (primary: signup rate)

---

## Phase 7: AI Search Visibility

Beyond standard SEO, optimize for AI-powered search (ChatGPT, Perplexity, Google AI Overviews):

- **Content structure:** Lead each page/post with a direct, factual answer to the primary question the page targets
- **JTBD-aligned copy:** Frame content around jobs-to-be-done, not just keywords
- **Schema markup:** Fully implemented (see Phase 1.3)
- **`llms.txt`:** Deployed (see Phase 1.6)
- **Entity clarity:** Make it unambiguous what SquadTrip is, who it serves, and what problem it solves — on every page
- **Citations:** Publish original data, stats, or insights that other sites (and LLMs) will reference

---

## Automation Priorities

| Task | Automation Approach |
|---|---|
| Content parity check | Node.js or Python crawler comparing both site URLs |
| Link validation | Crawl all internal + external links, report 404s |
| SEO tag audit | Parse HTML of all pages, check for required meta tags |
| Redirect map generation | Crawl WordPress sitemap → map to Vercel routes |
| Sitemap generation | Dynamic generation via Next.js or build script |
| Post-launch 404 monitoring | Vercel log drain → alert on error spike |
| GA4 / PostHog event validation | Automated test that fires pages and confirms events |

---

## What Claude Code Should Do Next

1. **Read this document fully**
2. **Enter planning mode** — produce a phased execution plan with:
   - Specific files to create or modify in the Vercel project
   - Scripts to write for automation tasks
   - Order of operations with dependencies noted
   - Estimated complexity per task (simple / medium / complex)
3. **Ask clarifying questions** before executing if any of the following are unclear:
   - Current Vercel project structure and framework (Next.js version, app router vs pages router)
   - WordPress site URL (for crawling)
   - Vercel staging URL
   - Which analytics tools are already partially set up
   - Whether a CMS (Contentlayer, Sanity, MDX, etc.) is being used for blog content

---

*Document prepared: March 2026. Owner: Darrien — Co-Founder & Acting CTO, SquadTrip.*
