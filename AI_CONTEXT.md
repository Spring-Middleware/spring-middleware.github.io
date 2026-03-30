# AI_CONTEXT — Spring Middleware Website

You are helping to build the official website for **Spring Middleware**, an open-source Java platform.

---

## Project Positioning

Spring Middleware is NOT:

* not a simple library
* not a wrapper over Spring Boot
* not a generic framework

Spring Middleware IS:

* a **platform layer for microservices**
* a **registry-driven architecture**
* a **control plane for service topology and metadata**
* a **standardization layer for infrastructure concerns**

Tone must reflect:

* senior engineering mindset
* architecture clarity
* production-grade thinking
* no marketing fluff

---

## Key Concepts to Reinforce

Always emphasize:

* Explicit architecture (no magic)
* Service autonomy
* Infrastructure consistency
* Discoverability (topology + metadata)
* Platform vs framework mindset

Core capabilities:

* service discovery (Registry)
* declarative HTTP clients
* GraphQL federation + gateway
* request context propagation
* distributed error model
* messaging (Kafka + RabbitMQ)
* Redis / Mongo / JPA utilities
* cache module on top of Redis
* security (HTTP + client-side)
* registry service as control plane
* core modules (`api`, `app`, `commons`, `view`) as the shared runtime foundation

---

## Writing Style

* concise but powerful
* technical but readable
* no buzzwords like "revolutionary", "cutting-edge"
* prefer clarity over hype
* think: Staff/Principal Engineer explaining system design

Good example:

> "Spring Middleware standardizes infrastructure concerns while keeping services autonomous and architecture explicit."

Bad example:

> "Spring Middleware is a revolutionary next-gen framework that transforms development."

---

## Website Goals

The website must:

1. Explain WHAT it is (platform layer)
2. Explain WHY it exists (avoid repeated infra work)
3. Show HOW it works (registry + federation + clients)
4. Build credibility (real-world origin, production mindset)
5. Be visually clean and professional
6. Support SEO for searches around **Spring Boot microservices**, not only the project name

---

## Current Pages (IMPORTANT CONTEXT)

Implemented or actively defined:

* index.html (Home)
* architecture.html
* graphql.html
* messaging.html
* kafka.html
* rabbitmq.html
* modules.html
* documentation.html
* getting-started.html
* registry.html
* communication.html
* errors.html
* logging.html
* security.html
* client-security.html
* redis.html
* cache.html
* mongo.html
* jpa.html
* core.html
* reference-service-example.html

Important:
* `documentation.html` is the entry point to all deep docs
* `modules.html` is the structural map of the platform
* `reference-service-example.html` is a concrete implementation walkthrough, not a general guide

---

## Documentation Strategy (CRITICAL)

We are NOT dumping README content.

We are:

* splitting documentation into **focused pages**
* each page explains **one concept clearly**
* each page is **short, structured, visual**
* using long docs as source material, but rewriting them into **website-ready pages**

Structure pattern:

1. Hero (what it is)
2. Short explanation (why it exists)
3. Key concepts (cards or bullets)
4. Diagram (visual understanding)
5. Minimal examples (if needed)
6. Code references / related docs where useful

Avoid:

* long walls of text
* full README replication
* excessive code blocks without structure

---

## Navigation Strategy

Header must include:

* Home
* Architecture
* GraphQL Federation
* Messaging
* Modules
* Documentation

Documentation page is the **entry point to all deep docs**.

Every concept must be reachable from at least one of:

* modules.html
* documentation.html
* a closely related capability page

No dead pages.

Examples:

* Registry → Architecture + Modules + Documentation
* Security → Documentation + Modules + related security pages
* Kafka/RabbitMQ → Messaging + Modules + Documentation
* Cache → Modules + Documentation + Redis
* Core → Modules + Documentation

---

## Linking Strategy (VERY IMPORTANT)

Internal linking is part of the information architecture.

Rules:

* every important page should be linked from `documentation.html`
* every module/deep capability should be linked from `modules.html` when appropriate
* related pages should link to each other when it improves understanding
* avoid isolated pages
* use meaningful anchor text, not raw code-style paths, in website copy

Examples:

* `communication.html` should be linked from architecture, documentation, modules, and client-security where relevant
* `errors.html` should be linked where remote failures or GraphQL errors are discussed
* `cache.html` should be linked from redis, modules, and documentation
* `core.html` should be linked from modules and documentation

---

## UI / Layout Consistency Rules

All pages must:

* use same header
* use same footer
* use same container width
* use same spacing system
* use same grid system (`grid-2`, `grid-3`, `grid-4`)
* use same card styles
* use same hero structure
* use same code zoom overlay behavior

Hero is ALWAYS:

```html
<section class="hero">
  <div class="container">
    <div class="eyebrow">...</div>
    <h1>...</h1>
    <p class="lead">...</p>
  </div>
</section>
```

Most pages also include:

```html
<div class="hero-actions">
  <a class="button button-primary" href="...">...</a>
  <a class="button button-secondary" href="...">...</a>
</div>
```

And usually a `chip-row`.

---

## Hero Actions Consistency (IMPORTANT)

Hero action behavior must be consistent.

Use this pattern:

* **Primary = main action**
  * if the page is onboarding / explainer with internal flow, primary may scroll to the main section
  * otherwise primary should usually be the strongest action on that page
* **Secondary = related page navigation**
  * usually another page such as architecture, modules, documentation, client-security, etc.

Verbs must stay consistent:

* **Start** → onboarding / setup action
* **Explore** → internal page exploration
* **View** → navigate to a specific related page
* **Read** / **Open** → documentation hub or broader docs page

Do not mix random verb styles on similar pages.

Examples already normalized:

* getting-started → `Start setup` / `View architecture`
* messaging → `Explore messaging` / `View architecture`
* modules → `Explore modules` / `Start setup`
* architecture → two navigation actions if there is no strong internal anchor worth using
* security → `Explore security` / `View client security`

---

## Visual Patterns

### 1. Diagram Cards

We replaced `<pre>` diagrams with visual diagram blocks.

Rules:

* must not overflow container
* must match style of topology diagrams
* must feel like architecture diagrams, not code
* text inside SVG must be short
* SVG text does **not** wrap automatically
* if a line is too long, split into multiple `<text>` elements or use very short labels
* prefer multiple `<text>` elements over complex `tspan` layouts when visual spacing matters

Use:

```html
<div class="diagram-card">
  <div class="diagram-svg-wrapper">
    <svg class="diagram-svg diagram-svg-wide" ...>
      ...
    </svg>
  </div>
</div>
```

### 2. Card Hover Behavior

Cards must feel interactive and professional.

Behavior:

* slight lift on hover
* soft shadow

### 3. Expandable Code

Problem solved:

* small cards with scroll = bad UX

Solution:

* click → zoomed code viewer
* centered overlay
* readable width/height
* no nested scrollbars

Use `card-zoomable` where code should open in modal.

### 4. Diagram Sizing Rules

Diagrams must:

* not be too small
* not be too large
* feel balanced with the surrounding content
* use less text inside the shapes
* keep explanatory copy outside the diagram if needed

### 5. Spacing & Air

Important adjustment:

* text inside cards must have breathing space
* avoid text touching borders
* keep padding consistent
* keep vertical spacing consistent between section heading, cards, diagrams, and code blocks

### 6. Code Reference Cards

For code reference grids, use this pattern:

```html
<article class="card code-ref">
    <h3>ClassName</h3>
    <span class="code-tag">module tag</span>
    <p class="code-path">.../path/ClassName.java</p>
</article>
```

Do not put huge raw paths without truncation or hierarchy.

---

## Final CTA / Page End Pattern

Not every page should have the same ending.

Rules:

### Pages that SHOULD usually have a final “next steps” or related navigation block

* architecture.html
* registry.html
* documentation.html
* modules.html
* graphql.html

### Pages that usually do NOT need a generic final CTA

* kafka.html
* rabbitmq.html
* redis.html
* cache.html
* mongo.html
* jpa.html
* security.html
* client-security.html
* logging.html
* communication.html
* errors.html
* core.html

Registry already has a related-pages block and does not need an extra generic CTA underneath it.

For pages with a final CTA, keep one unified pattern:

```html
<section id="next-step">
    <div class="container">
        <div class="cta-box cta-box-final">
            <div class="cta-copy">
                <div class="eyebrow">Next steps</div>
                <h2>...</h2>
                <p>...</p>
            </div>
            <div class="cta-actions">
                <a class="button button-primary" href="...">...</a>
                <a class="button button-secondary" href="...">...</a>
            </div>
        </div>
    </div>
</section>
```

Do not stack multiple different ending patterns on the same page unless there is a very good reason.

For `getting-started.html`, prefer the **cards-based continuation block** and avoid an extra generic CTA if it feels repetitive.

---

## Infrastructure Message (IMPORTANT CONTENT)

A core message introduced on the Home page:

👉 Platform requires infrastructure

This must be communicated clearly.

Required runtime components:

* Registry (platform control plane)
* Redis infrastructure (used by Registry and coordination features)
* RabbitMQ infrastructure (cluster messaging / node-scoped messaging)
* optional Kafka (event streaming)

Important distinction:

* `Registry` is a **platform component**
* `Redis` and `RabbitMQ` are **infrastructure dependencies**
* these are not all the same thing and should not be presented as equivalent concepts

This reinforces:

👉 “this is a platform, not just a library”

---

## Modules Page Strategy

Modules are grouped into:

* Core
* Data
* Messaging
* Platform
* Cross-cutting guides

Refined grouping:

* **Core** → `api`, `app`, `commons`, `view`
* **Data** → Mongo, JPA, Redis, Cache
* **Messaging** → Kafka, RabbitMQ
* **Platform** → Registry, GraphQL
* **Cross-cutting** → Communication, Errors, Logging, Security, Client Security

Important:

* Registry must appear as a **first-class platform component**
* Cache belongs with **Data / infrastructure**, close to Redis
* Core is not just a submodule list; it is the **runtime foundation**

---

## Documentation Page Strategy

`documentation.html` is not just an index.

It is a **landing page for Spring Boot microservices documentation**.

It must group pages into:

* start here
* platform guides
* runtime capabilities
* data and infrastructure integrations
* security and observability

Important additions already made:

* cache belongs in data/infrastructure
* Redis and caching should be mentioned in SEO metadata and intro copy
* core.html should appear as part of runtime foundation / platform structure

---

## SEO Rules (VERY IMPORTANT)

The site should target searches around **Spring Boot** and **microservices**, not just “Spring Middleware”.

### General SEO rules

* page titles should target real search queries
* descriptions should include “Spring Boot”, “microservices”, and the actual capability
* H1 should be direct and keyword-aware
* avoid generic titles like “Modules | Spring Middleware”
* prefer titles like:
  * `Kafka Integration for Spring Boot Microservices | Spring Middleware`
  * `Error Handling in Spring Boot Microservices | Spring Middleware`
  * `Modular Architecture for Spring Boot Microservices | Spring Middleware`

### SEO phrasing patterns already established

* “for Spring Boot microservices”
* “dynamic search and aggregation”
* “request and response logging”
* “service-to-service communication”
* “client security”
* “modular architecture”
* “core modules”
* “reference service example”

### Important pages and SEO focus

* architecture → Spring Boot microservices architecture
* graphql → GraphQL federation for Spring Boot microservices
* messaging → messaging for Spring Boot microservices
* kafka → Kafka integration for Spring Boot microservices
* rabbitmq → RabbitMQ integration for Spring Boot microservices
* communication → service-to-service communication in Spring Boot microservices
* errors → error handling in Spring Boot microservices
* security → Spring Boot security for microservices
* client-security → client security for Spring Boot microservices
* logging → request and response logging in Spring Boot
* modules → modular architecture for Spring Boot microservices
* documentation → Spring Boot microservices guide and architecture documentation
* getting-started → Spring Boot microservices getting started guide
* redis → Redis integration for Spring Boot microservices
* cache → Redis cache for Spring Boot microservices
* mongo → MongoDB dynamic search and aggregation for Spring Boot
* jpa → dynamic JPA queries for Spring Boot microservices
* core → Spring Boot core modules (API, App, Commons, View)
* reference-service-example → Spring Boot microservices example / reference service

---

## Pages Added After Original Context

These pages were added after the initial AI context and must be treated as part of the current site:

* communication.html
* errors.html
* logging.html
* redis.html
* cache.html
* mongo.html
* jpa.html
* core.html
* reference-service-example.html

Important relationships:

* `cache.html` builds on Redis
* `core.html` supports communication, logging, security, and runtime wiring
* `reference-service-example.html` is linked from `getting-started.html`
* `reference-service-example.html` is a concrete implementation guide, not a generic module page

---

## Getting Started Page Strategy

`getting-started.html` should stay focused on onboarding.

It should:

* explain minimal service setup
* show service structure
* explain startup flow
* show dependency management
* show minimal configuration
* link to deeper pages for architecture, security, communication, etc.

The **reference example section** belongs in `getting-started.html`, but **after the core onboarding flow is already explained**, not too early.

Best placement:

* after the sections that explain the minimal setup / startup / configuration flow
* before the later continuation or platform navigation sections

`reference-service-example.html` is the full concrete walkthrough.

---

## README / GitHub Documentation Rules

When fixing Markdown docs:

* do **not** remove content
* do **not** summarize with `...`
* do **not** shorten the file unless explicitly asked
* preserve the line count or increase it if needed
* only make the requested changes

For README links:

* backticked paths like `` `docs/graphql.md` `` are **not acceptable** when the goal is a clickable link
* use Markdown links like `[GraphQL](docs/graphql.md)` or `[docs/graphql.md](docs/graphql.md)`
* do not replace large parts of the README when only links must be fixed

---

## What you (assistant) must do

When I provide documentation:

1. Extract key ideas
2. Simplify without losing depth
3. Align with platform narrative
4. Convert into **website-ready content**
5. Keep sections short and structured
6. Preserve technical accuracy
7. Preserve important distinctions (platform component vs infrastructure dependency, module vs guide, etc.)

When generating UI:

* reuse existing CSS classes
* keep visual consistency
* improve UX if something feels off
* avoid introducing random new styles
* keep hero-actions, CTA patterns, and end-of-page patterns consistent

When modifying Markdown docs:

* do not delete content unless explicitly requested
* do not replace content with placeholders
* preserve all substantive text

---

## Important

Do NOT:

* copy README verbatim into pages
* overload pages with text
* lose architectural clarity
* introduce marketing fluff
* invent arbitrary new layout patterns for one page only
* collapse long user-provided content into `...`
* silently delete content in Markdown edits

DO:

* structure content
* highlight key ideas
* think like a platform architect
* prioritize readability + clarity
* keep output copy-paste ready
* preserve all user-provided content when asked to correct only specific parts

---

## Output Format (HTML / Markdown)

For website work, return:

* clean HTML
* full page or section as requested
* ready to paste
* consistent with existing design

For Markdown deliverables:

* return full explicit content
* no placeholders
* preserve all original text unless asked to rewrite it

---

## Context

This project is created by a senior backend architect with real production experience.

The website should reflect:

→ credibility  
→ clarity  
→ architectural depth  
→ system thinking  
→ production realism

Not a tutorial project.

---
