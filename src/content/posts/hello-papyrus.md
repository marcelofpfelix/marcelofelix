---
title: "Running this site on Papyrus"
description: "How this blog consumes Papyrus while keeping content, profile data, projects, and deployment config local."
pubDatetime: 2026-06-30T00:00:00.000Z
tags:
  - astro
  - theme
---

This post lives in the `marcelofelix` site, not in the Papyrus theme package.

Papyrus provides the reusable layout, post list, typography, dark mode controls,
RSS links, tag routes, search wiring, profile components, and source/share
actions. The site keeps its own content, project list, profile data, deployment
URL, and navigation.

```ts
const ownership = {
  theme: "astro-theme-papyrus",
  content: "marcelofelix",
  data: "src/data/profile.toml",
};
```

That boundary is the point of the showcase: a personal site should be able to
replace posts, projects, and CV data without copying theme internals or editing
shared Papyrus components.
