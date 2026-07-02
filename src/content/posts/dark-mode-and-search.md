---
title: "Dark mode and search in Paper Pure"
description: "The theme keeps a Pure-like neutral background, then adds a small Paper-style search flow."
pubDatetime: 2026-06-30T11:15:00.000Z
tags:
  - astro
  - search
  - dark-mode
---

The light and dark backgrounds should feel close to the default Pure theme: neutral, quiet, and readable. Earlier versions used stronger theme colors, but that made the page look less like Pure and more like a custom palette experiment.

![Paper Pure dark mode search](/images/paper-pure-dark.svg)

The header now has a search icon. It links to a simple `/search/` page in the blog site. That keeps the package generic: Paper Pure exposes the header control, while the site decides how search is implemented.

For now the search page is a small client-side filter over the content collection. That is enough for a personal blog with a small number of posts. Later it can be replaced with Pagefind without changing the public header component.

```astro
<PaperBaseLayout searchHref="/search/" />
```

That is the important boundary. The icon belongs to the theme. The index strategy belongs to the site.
