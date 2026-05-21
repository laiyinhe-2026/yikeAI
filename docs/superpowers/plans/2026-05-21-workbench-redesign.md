# Workbench Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign `admissions.html` into a user-level SaaS workbench inspired by aiyou dashboard structure while keeping the site's own color and font style.

**Architecture:** Replace the old admissions generator page with a dashboard layout: top brand nav, left sidebar, central creation area, right account panel, and excellent works gallery. Keep shared nav behavior in `script.js` and place workbench-only mode switching/generation logic in `workbench.js`.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript.

---

### Task 1: Replace Workbench Markup

**Files:**
- Modify: `admissions.html`

- [ ] Replace old admissions page with dashboard shell using `body class="home-page workbench-page" data-page="workbench"`.
- [ ] Add top nav with 首页、社区、会员、课程活动中心、工作台.
- [ ] Add left sidebar menu: 创作首页、招生内容、教学内容、PPT 生成、作业点评、素材库、我的作品、积分记录、我的账户、会员方案、使用教程、邀请积分、用户协议.
- [ ] Add central creation area with mode chips, large textarea, and mock result panel.
- [ ] Add right user panel with points, membership, recent generated content, common templates.
- [ ] Add excellent works section with one large recent activity card and normal work cards.

### Task 2: Add Workbench Interaction

**Files:**
- Create: `workbench.js`

- [ ] Add mode config for 招生海报、招生文案、招生视频、美术教案、PPT 大纲、作业点评.
- [ ] Switching mode updates active chip, textarea placeholder, helper text, and mock result.
- [ ] Generate button shows `生成中...` and restores after 800ms.

### Task 3: Add Workbench Styles

**Files:**
- Modify: `styles.css`

- [ ] Add `.workbench-page` header, layout, sidebar, creation card, result card, right panel, and excellent works grid styles.
- [ ] Keep homepage color variables and light typography.
- [ ] Add responsive rules: three-column dashboard collapses to single-column; sidebar becomes horizontal chips on mobile.

### Task 4: Sync Docs

**Files:**
- Create: `页面设计稿/07-工作台.md`

- [ ] Document the workbench design, sidebar menu, creation area, account panel, and excellent works section.

### Task 5: Verify

**Files:**
- Read: `admissions.html`
- Read: `workbench.js`
- Read: `styles.css`

- [ ] Check key menu entries exist.
- [ ] Check excellent works large card exists.
- [ ] Check dashboard JS syntax if Node is available; otherwise report that Node is unavailable.
