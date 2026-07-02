---
title: "Folder tags for nested posts"
description: "A short sample post showing stable slugs with automatic tags from source folders."
slug: folder-tags-demo
pubDatetime: 2026-06-30T11:00:00.000Z
tags:
  - astro
---

This post lives in `src/content/posts/telecom/sip-routing/`.

The public URL uses the explicit `slug`, so the route can stay stable even if
the file moves later.

The tags should still include:

- `astro` from frontmatter
- `telecom` from the parent folder
- `sip-routing` from the nested folder

```console
blog$ pnpm content:outline
blog$ pnpm build
```

