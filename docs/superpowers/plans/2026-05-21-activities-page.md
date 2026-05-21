# Activities Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an independent 活动页面 with 沙龙、线上课程、线下课程 tabs and matching event/course cards.

**Architecture:** This is a static prototype page matching the existing homepage/community/pricing layout. `activities.html` owns the activity content markup, `styles.css` owns page styling, and a small inline script handles tab switching without changing shared page behavior.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript.

---

### Task 1: Save Design Draft

**Files:**
- Create: `页面设计稿/06-活动页面.md`

- [ ] **Step 1: Add the activity page design document**

Create the Markdown design稿 with page positioning, navigation, hero copy, three category tabs, card content for 沙龙、线上课程、线下课程, visual rules, and CTA text.

### Task 2: Create Activity Page

**Files:**
- Create: `activities.html`

- [ ] **Step 1: Add page shell**

Use the same `home-page` header structure as `pricing.html`, set `body data-page="activities"`, mark the 活动 nav with `data-nav="activities"`, and create `main.activities-main`.

- [ ] **Step 2: Add activity content**

Add hero copy, three tab buttons, and three tab panels. Each panel contains three cards with title, description, time, format, audience, status, and CTA.

- [ ] **Step 3: Add tab interaction**

Add a small script in `activities.html` that toggles `.active` on tab buttons and `.is-active` on the matching panel.

### Task 3: Style Activity Page

**Files:**
- Modify: `styles.css`

- [ ] **Step 1: Add activity page layout styles**

Add `.activities-page`, sticky light header overrides, `.activities-main`, `.activities-hero`, `.activity-tabs`, `.activity-panel`, `.activity-grid`, `.activity-card`, `.activity-meta`, `.activity-status`, and `.activities-cta`.

- [ ] **Step 2: Add responsive rules**

At widths below `960px`, render two columns. At widths below `720px`, render one column and keep tabs wrapping cleanly.

### Task 4: Update Navigation

**Files:**
- Modify: `index.html`
- Modify: `community.html`
- Modify: `pricing.html`

- [ ] **Step 1: Change activity nav links**

Change existing activity links from `#home-cta` / `./index.html#home-cta` to `./activities.html`.

### Task 5: Verify

**Files:**
- Read: `activities.html`
- Read: `styles.css`
- Read: existing nav files

- [ ] **Step 1: Check key content exists**

Run `Select-String` for `沙龙`, `线上课程`, `线下课程`, `activity-panel`, and `data-nav="activities"`.

- [ ] **Step 2: Check old activity nav anchors are gone**

Run `Select-String` across `index.html`, `community.html`, and `pricing.html` for `#home-cta` and confirm the top nav no longer uses it for 活动.
