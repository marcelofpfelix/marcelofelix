---
title: "A new web"
description: "What I used to build my new personal website."
date: 2026-08-17T08:00:00.000Z
tags:
  - tech
  - blog
---

I finally got `marcelofelix.com`.

I have used different domains over the years, but this is the one I always
wanted for my personal site, and it was finally available. It is a good chance
to clean up the stack too. My old site was running with Namecheap, Jekyll, and
GitHub Pages. It was stable, simple, and good enough for a long time, but it
also started to feel limited.

The goal for the new site is still simple:

- keep the site static
- keep writing in Markdown, plain text is the best
- no CMS, git, a terminal, and Vim are enough
- keep automatic deploys
- add custom JavaScript only when it is useful

## Domain

This part is straightforward. *Namecheap* worked well for me before, but
**Cloudflare** is now a better fit for this domain because it is cheaper and I
already use it for other homelab-related features.

Porkbun would also be a good option. It is a registrar with simple domain
management and useful bundled features. I just prefer to keep this domain close
to the rest of the Cloudflare setup.

## Hosting

The main hosting options were GitHub Pages, Netlify, and Cloudflare Pages.

I used *GitHub Pages* before, and it is still the easiest option when the source
is already on GitHub. It has a native workflow and works very well for simple
Jekyll sites. The tradeoff is that it is more limited when the site moves away
from plain Jekyll or needs more custom build behavior.

Netlify is still a strong option for static sites. Its previews and review flow
make it easy to test changes before publishing.

**Cloudflare** Pages is the best fit for me. It gives me static hosting, preview
deploys, custom domains, a fast CDN, and a path to Workers later if I need small
dynamic features.

## Static site generator

I used *Jekyll* because it was the native GitHub Pages path. It still works, but
I wanted to try something with better performance, a larger modern ecosystem,
and more room for interactive pages when I need them.

The main options were Hugo, Eleventy, and Astro.

Hugo is very fast and developer friendly, but its template system is a bigger
change from my current workflow.

Eleventy is simple and close to the Markdown-first approach I already like. It
would probably be the easiest migration if I wanted to keep the old structure
with small changes.

**Astro** is the choice for this version. It has a large community, good
performance, many themes, and a simple way to add JavaScript only where the page
needs it.

## The stack

The new public site lives in
[`marcelofelix`](https://github.com/marcelofpfelix/marcelofelix). It is an Astro
site deployed with Cloudflare Pages.

The site repo stays close to plain files:

- Markdown for posts
- TOML for site and profile data
- GitHub for source history
- Cloudflare Pages for deployment

That is enough for now. The theme details deserve their own post.
