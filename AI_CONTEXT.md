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
* security (HTTP + client-side)
* registry service as control plane

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

---

## Current Pages (IMPORTANT CONTEXT)

Already implemented or in progress:

* index.html (Home)
* architecture.html
* graphql.html
* messaging.html
* kafka.html
* rabbitmq.html
* modules.html
* documentation.html

New documentation pages being added:

* registry.html
* security.html
* client-security.html
* (pending: communication, errors, logging, mongo, redis, jpa)

---

## Documentation Strategy (CRITICAL)

We are NOT dumping README content.

We are:

* splitting documentation into **focused pages**
* each page explains **one concept clearly**
* each page is **short, structured, visual**

Structure pattern:

1. Hero (what it is)
2. Short explanation (why it exists)
3. Key concepts (cards or bullets)
4. Diagram (visual understanding)
5. Minimal examples (if needed)

Avoid:

* long walls of text
* full README replication
* excessive code blocks

---

## Navigation Strategy

Header must include:

* Home
* Architecture
* GraphQL Federation
* Messaging
* Modules
* Documentation (IMPORTANT — must exist)

Documentation page is the **entry point to all deep docs**.

---

## Linking Strategy (VERY IMPORTANT)

Every concept must be reachable from at least one of:

* modules.html (grouped by domain)
* documentation.html (full index)

Examples:

* Registry → from Architecture + Modules + Documentation
* Security → from Modules + Documentation
* Kafka/RabbitMQ → from Messaging + Modules + Documentation

No dead pages.

---

## UI / Layout Consistency Rules

All pages must:

* Use same header
* Use same footer
* Use same container width
* Use same spacing system
* Use same grid system (grid-2, grid-3)
* Use same card styles

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

---

## Visual Patterns (ADDED TODAY)

### 1. Diagram Cards (IMPORTANT)

We replaced `<pre>` diagrams with **visual diagram blocks**.

Rules:

* Must not overflow container
* Must match style of topology diagrams
* Must feel like "architecture diagrams", not code

Use:

```html
<div class="diagram-card">
  <div class="diagram-flow">
    ...
  </div>
</div>
```

---

### 2. Card Hover Behavior

Cards must feel interactive and "professional".

Current behavior:

* slight lift on hover (translateY)
* soft shadow

Advanced behavior added:

👉 **Code cards can expand into centered modal (zoom effect)**

Pattern:

* click → opens overlay
* centered large code block
* no scroll issues
* must feel smooth and clean

---

### 3. Expandable Code (CRITICAL UX)

Problem solved:

Small cards with scroll = BAD UX

Solution:

* click → "zoomed" code viewer
* centered overlay
* readable width/height
* no nested scrollbars

---

### 4. Diagram Sizing Rules

Diagrams must:

* not be too small (look weak)
* not be too large (break layout)
* match proportions of:
  → "Registry-driven GraphQL topology"

Golden rule:

👉 diagrams should feel **balanced with surrounding cards**

---

### 5. Spacing & Air

Important adjustment:

* text inside cards MUST have breathing space
* avoid "text touching borders"
* consistent padding everywhere

---

## Infrastructure Message (IMPORTANT CONTENT)

We introduced a key concept:

👉 Platform requires infrastructure

Must communicate clearly (especially in Home):

Required components:

* Registry (control plane)
* Redis (state / coordination)
* RabbitMQ (cluster messaging)

Optional:

* Kafka (event streaming)

This reinforces:

👉 "this is a platform, not just a library"

---

## Modules Page Strategy

Modules are grouped into:

* Core
* Data (Mongo, JPA, Redis)
* Messaging (Kafka, RabbitMQ)
* Platform (Registry, GraphQL)
* Cross-cutting (Security, Errors, Communication, Logging)

IMPORTANT:

Registry must appear as:

👉 **first-class platform component**
(not hidden under messaging or data)

---

## What you (assistant) must do

When I provide documentation:

1. Extract key ideas
2. Simplify without losing depth
3. Align with platform narrative
4. Convert into **website-ready content**
5. Keep sections short and structured

When generating UI:

* reuse existing CSS classes
* keep visual consistency
* improve UX if something feels off
* avoid introducing random new styles

---

## Important

Do NOT:

* copy README verbatim
* overload with text
* lose architectural clarity
* introduce marketing fluff

DO:

* structure content
* highlight key ideas
* think like a platform architect
* prioritize readability + clarity

---

## Output Format (HTML)

Return:

* clean HTML (section or full page)
* ready to paste
* consistent with existing design

---

## Context

This project is created by a senior backend architect with real production experience.

The website should reflect:

→ credibility  
→ clarity  
→ architectural depth

Not a tutorial project.

---

READY.
~~~~markdown

