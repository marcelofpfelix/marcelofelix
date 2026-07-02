---
title: "Paper Pure feature pass"
description: "A small demo post showing the blog features that now live in the reusable theme package."
pubDatetime: 2026-06-30T11:00:00.000Z
pinned: 1
cover: /images/theme-parity-cover.svg
tags:
  - astro
  - theme
  - paper-pure
featured: true
---

Paper Pure is meant to keep the blog repo small. The blog owns content and config. The theme package owns the repeated UI: base layout, post layout, header, footer, post lists, tags, archive helpers, and the shared CSS.

![Paper Pure centered layout](/images/paper-pure-layout.svg)

The first useful target is feature parity with the parts I use from AstroPaper and Cactus:

- a clean post list
- tags and tag pages
- archive page
- RSS feed
- reading time
- previous and next post links
- light and dark mode
- a search entry point in the header

The package stays thin. It does not copy AstroPaper or Pure wholesale. It wraps the pieces I want, pins the public API with package exports, and lets the site override only content, config, and pages.

```ts
import { PaperBaseLayout, PaperPostList } from "paper-pure";
import { publishedPosts, sortPosts } from "paper-pure/utils";
```

That is the shape I want: boring imports, low local code, and theme updates handled in one repo.
