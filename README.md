# MGC Freight Website

The public-facing marketing website for **MGC Freight (Mokal)** — the place where customers learn about our shipping services, request quotes, track shipments, apply to jobs, and become broker, carrier, or corporate partners.

This README is written for product, marketing, and operations stakeholders. It explains *what the site does*, *how the pieces fit together*, and *where to look* when something needs to change — without requiring you to read the code.

---

## Table of Contents

1. [What this project is](#1-what-this-project-is)
2. [How the system fits together](#2-how-the-system-fits-together)
3. [Site map — every page on the website](#3-site-map--every-page-on-the-website)
4. [How a page is built (the content block model)](#4-how-a-page-is-built-the-content-block-model)
5. [Forms — where submissions go](#5-forms--where-submissions-go)
6. [Repository layout](#6-repository-layout)
7. [Editing content vs. editing code](#7-editing-content-vs-editing-code)
8. [Running the site locally](#8-running-the-site-locally)
9. [Deployment & environment variables](#9-deployment--environment-variables)
10. [Glossary](#10-glossary)

---

## 1. What this project is

This repository (`mokal-front`) is **only the website you see at the public URL**. It does *not* contain customer accounts, the shipment dashboard, payment processing, or carrier integrations — those live in the **Mokal Backend** and the **Mokal Platform** apps.

The website's job is to:

| Responsibility | Example |
|---|---|
| Present marketing content | Service pages, blog, video library |
| Collect leads | Book a Demo, Get a Quote, Broker/Corporate Partner forms |
| Capture careers traffic | Jobs board, application form |
| Track public shipments | Tracking number lookup |
| Hand off to the platform | "Get Started" / "Login" buttons that send users to the Mokal app |

Everything customers see is editable by the marketing team via **Sanity Studio** (a separate sister project, `studio-mokal`). The website itself is mostly a renderer — it pulls content from Sanity and assembles it into pages.

---

## 2. How the system fits together

```
┌──────────────────┐        ┌──────────────────┐        ┌────────────────────┐
│  Sanity Studio   │        │  Public Website  │        │   Mokal Backend    │
│  (studio-mokal)  │──────▶│  (mokal-front)   │──────▶│                    │
│                  │ content│                  │  forms │                    │
│  Marketing edits │        │  Next.js renders │        │  Receives leads,   │
│  pages here      │        │  pages from CMS  │        │  quotes, tracking  │
└──────────────────┘        └──────────────────┘        └────────────────────┘
                                     │
                                     ▼
                            ┌──────────────────┐
                            │  Mokal Platform  │
                            │  (separate app)  │
                            │  Customer login, │
                            │  shipment mgmt   │
                            └──────────────────┘
```

**Three things to remember:**

- **Sanity Studio** is the CMS. Marketing logs in, edits headlines, swaps images, reorders sections, publishes blog posts, posts new jobs. No code change needed.
- **The website** reads from Sanity and presents it. Visual layout, fonts, colours, and animations live here.
- **The Mokal Backend** handles every form submission. The website itself never stores leads — it just forwards them.

---

## 3. Site map — every page on the website

Each entry below corresponds to a real URL. Most pages are fully content-managed: marketing controls the content, this codebase controls the visual treatment.

### Top-level

| URL | What it is |
|---|---|
| `/` | Home page |
| `/who-we-are` | Company story / about |
| `/contact-us` | Contact details and inquiry form |
| `/careers` | Jobs board with search and pagination |
| `/customer-spotlight` | Featured customer success stories |
| `/book-a-demo` | Demo request form |
| `/get-a-quote` | Quote request (LTL / FTL flows) |
| `/track-shipments` | Public tracking-number lookup |
| `/claims` | Claims information |
| `/blogs` | Blog index |
| `/blogs/[blogId]` | Individual blog post |
| `/video-library` | Video resources |
| `/shipping-guides` | Step-by-step shipping how-tos |
| `/privacy-policy` | Legal |
| `/terms-and-conditions` | Legal |

### Services

| URL | Service |
|---|---|
| `/LTL` | Less Than Truckload |
| `/truckload` | Full truckload |
| `/courier-services` | Parcel & courier |
| `/specialized-freight` | Oversized / sensitive cargo |
| `/international-shipping` | Cross-border |
| `/white-glove-services` | Premium handling |
| `/freight-forwarding` | Global freight |
| `/fulfillment-services` | Warehousing & order fulfillment |
| `/spot-quote` | Instant pricing for urgent shipments |

### Partnerships

| URL | Audience |
|---|---|
| `/broker-partner` | Freight brokers |
| `/corporate-partner` | Enterprise customers |
| `/carrier-partners` | Trucking carriers |

---

## 4. How a page is built (the content block model)

Almost every page on the site — including the home page and every service page — is composed of **stackable content blocks**, the same way you build a slide deck out of slides.

In Sanity Studio, marketing opens a page (e.g. "Home") and drags blocks into the order they want. The website then renders each block using the matching visual component.

### The block library

Each block is a self-contained section of the page. The site supports the following blocks today:

| Block name | What it shows |
|---|---|
| **Title** | Big hero headline + description + image + buttons |
| **Tabs** | Tabbed content with optional image carousels |
| **Content** | Rich-text content with images and lists |
| **Content 2** | Alternate content layout with images and video |
| **FAQs** | Expandable question/answer list |
| **Cards** | Grid of feature/benefit cards |
| **Slider** | Single-row image carousel |
| **Map** | World map showing service coverage |
| **Blog Component** | Latest blog teasers |
| **Testimonials** | Customer quotes and ratings |
| **Guide to Book** | Step-by-step "how it works" graphic |
| **Refine Transport** | Lead-gen mini form |
| **Grow Your Business** | Lead-gen mini form |
| **Career Opportunities** | Embedded jobs list |
| **Track Shipment** | Embedded tracking lookup |
| **Get A Quote Form** | Embedded quote form |
| **Book A Demo Form** | Embedded demo form |
| **Broker / Corporate Partner Form** | Partnership signup forms |
| **Reach Out / Position Form** | Generic inquiry forms |

### What this means in practice

- ✅ **Marketing can reorder, add, remove, or duplicate sections** on any page without engineering involvement.
- ✅ **The same block can be reused on multiple pages** (e.g. the testimonials block lives once and is referenced from many pages).
- ⚠️ **Inventing a new kind of block** (e.g. a brand-new layout) requires engineering — both a Sanity schema and a React component.

---

## 5. Forms — where submissions go

Every form on the site posts to the **Mokal Backend**. The website is just the messenger; nothing is stored in Sanity or in the website's own database (it doesn't have one).

| Form | Endpoint hit |
|---|---|
| Book a Demo | `POST /platform/book-a-demo` |
| Broker Partner application | `POST /platform/broker-partner` |
| Corporate Partner application | `POST /platform/corporate-partner` |
| Grow Your Business inquiry | `POST /platform/grow-business` |
| Refine Transport inquiry | `POST /platform/refine-transport` |
| Job Position inquiry (no current openings) | `POST /platform/job-position` |
| Job Application (apply to a posting) | `POST /platform/jobApply` |
| Quote Request — LTL | `POST /platform/quote-request/ltl` |
| Quote Request — FTL (truckload) | `POST /platform/quote-request/ftl` |
| Postal-code lookup (autocomplete) | `GET /location?postalCode=…` |
| Shipment tracking | `GET /shipment/track?trackingId=…` |

Two routes are served by the website itself (they read from Sanity, not from the Mokal Backend):

| Internal API | Purpose |
|---|---|
| `GET /api/blog?searchQuery=…` | Blog search |
| `GET /api/jobs?job=…&limit=…&page=…` | Jobs board search & pagination |

---

## 6. Repository layout

```
mokal-front/
├── public/                  Static images, icons, flags, vendor logos
├── src/
│   ├── app/                 Every page on the site (one folder per URL)
│   │   ├── api/             Internal API routes (blogs, jobs)
│   │   ├── layout.tsx       Site-wide shell: navbar, footer, providers
│   │   └── page.tsx         The home page
│   │
│   ├── components/
│   │   ├── common/          Reusable building blocks (buttons, accordions, sliders)
│   │   ├── forms/           All form components (book a demo, quote, etc.)
│   │   └── page-components/ The visual renderers for each Sanity content block
│   │
│   ├── providers/           App-wide React contexts (data fetching, mega-menu state)
│   └── utils/
│       ├── constants.tsx    Navigation menus, social icons, Sanity client setup
│       ├── types.ts         Shared TypeScript types and enums
│       └── axiosInstance.ts HTTP client pointed at the Mokal Backend
│
├── tailwind.config.ts       Brand colours and theme tokens
├── next.config.ts           Image domains and Next.js settings
└── package.json             Dependencies and scripts
```

### Where to look for common changes

| If you want to change… | Open this |
|---|---|
| Page content (headlines, copy, images) | **Sanity Studio** — not this repo |
| The order of sections on a page | **Sanity Studio** |
| Brand colours, fonts | `tailwind.config.ts`, `src/app/layout.tsx` |
| The top navigation menu | `src/utils/constants.tsx` |
| The footer | `src/components/page-components/footer.tsx` |
| A form's fields or behaviour | `src/components/forms/…` |
| Where a form's data is sent | `src/components/forms/…` (search for `axiosInstance.post`) |
| Add a brand-new URL | Create a folder in `src/app/<your-url>/` with `page.tsx` |

---

## 7. Editing content vs. editing code

A simple rule of thumb:

> **If a marketer wants it changed, it almost always belongs in Sanity Studio.**

| Change | Where | Who |
|---|---|---|
| Update a headline | Sanity Studio | Marketing |
| Swap a hero image | Sanity Studio | Marketing |
| Publish a new blog post | Sanity Studio | Marketing |
| Add a new job opening | Sanity Studio | HR / Marketing |
| Reorder sections on a service page | Sanity Studio | Marketing |
| Add a new testimonial | Sanity Studio | Marketing |
| Change brand purple to a new shade | This repo (`tailwind.config.ts`) | Engineering |
| Add a brand-new section type | This repo + Sanity schemas | Engineering |
| Rewire a form to a different backend endpoint | This repo | Engineering |
| Add a new top-level page | This repo + Sanity | Engineering |

---

## 8. Running the site locally

> Engineering-only section. Skip if you are not running the code.

**Prerequisites:** Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`. Hot reload is on — saving a file refreshes the browser.

**Other scripts:**

| Command | What it does |
|---|---|
| `npm run dev` | Local development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run the production build (port 4040) |
| `npm run lint` | Code quality check |

---

## 9. Deployment & environment variables

The site is a standard Next.js application and can be deployed to Vercel, Netlify, or any Node host.

The following environment variables must be set in the deployment environment:

| Variable | Purpose |
|---|---|
| `SANITY_PROJECT_ID` | Identifies which Sanity project to read content from |
| `SANITY_STUDIO_DATASET` | Which dataset (e.g. `production`, `staging`) |
| `NEXT_PUBLIC_BACKEND_API_URL` | Base URL of the Mokal Backend that receives form submissions |
| `GOOGLE_APIKEY` | Google Maps key for the office-location component |
| `NEXT_PUBLIC_BASE_URL` | The website's own public URL (used for assets and absolute links) |

When `SANITY_STUDIO_DATASET` is set to `staging`, the site uses Sanity's CDN; otherwise it goes direct for fresh content.

---

## 10. Glossary

| Term | Plain-English meaning |
|---|---|
| **Sanity / Sanity Studio** | The content management system marketing uses to edit the site |
| **Dataset** | A separate copy of all CMS content — usually one for production, one for staging |
| **Content block** | A reusable section type (hero, FAQ, testimonials, etc.) |
| **Schema** | The structural definition of a content type in Sanity |
| **GROQ** | Sanity's query language — how the website asks the CMS for content |
| **Next.js** | The web framework the site is built with |
| **Tailwind** | The styling system used for layout, colours, and spacing |
| **HeroUI** | The component library used for buttons, inputs, accordions, etc. |
| **React Query** | The library that manages data fetching (e.g. searching jobs and blogs) |
| **React Hook Form** | The library that powers form state and validation |
| **LTL** | Less Than Truckload — a shipment that doesn't fill a whole truck |
| **FTL / Truckload** | Full Truckload — a shipment that uses an entire truck |
| **Mokal Backend** | The server that receives every form submission and powers tracking lookups |
| **Mokal Platform** | The customer-facing Mokal application (separate from this site) |

---

## Tech stack at a glance

- **Framework:** Next.js 15 with the App Router
- **UI:** React 19, HeroUI, Tailwind CSS, Framer Motion
- **Content:** Sanity CMS (`next-sanity-client`)
- **Forms:** React Hook Form + React Query + Axios
- **Maps:** Mapbox GL, Leaflet, Google Maps
- **Toasts & UX:** React Toastify, React Multi Carousel, React Fast Marquee

---

*For CMS edits, see the `studio-mokal` repository. For backend/API behaviour, see the Mokal Backend.*
