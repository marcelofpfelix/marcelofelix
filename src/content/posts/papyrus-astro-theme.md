---
title: "Papyrus, an Astro theme"
description: "Why I built Papyrus to move my blog and CV from Jekyll to Astro."
date: 2026-08-24T08:00:00.000Z
tags:
  - tech
  - blog
---

My old site used the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) Jekyll theme.
It can do almost everything: hero pages, portfolios, and multi-author sites. I used very little of that.

For Astro, I wanted something leaner and mostly focused on text.

## Weblog and docs

I started with four themes that looked interesting:

- [chrismwilliams/astro-theme-cactus](https://github.com/chrismwilliams/astro-theme-cactus)
- [satnaing/astro-paper](https://github.com/satnaing/astro-paper)
- [arthelokyo/astrowind](https://github.com/arthelokyo/astrowind)
- [cworld1/astro-theme-pure](https://github.com/cworld1/astro-theme-pure)

*AstroWind* is the closest to *Minimal Mistakes*, but it still does more than I need.
*Cactus* and *AstroPaper* are simpler, and **AstroPaper was my favorite** because it stays out of the way of the posts.

I had another requirement: I also wanted to migrate my [JekyllCV](https://github.com/marcelofpfelix/jekyllcv) theme.
For that work, *Pure* was easier to take apart and reuse than the other themes.

**Papyrus** is the result: *Pure* underneath, with styling closer to *AstroPaper*.

I added the parts I wanted for my own site:

- post pages, a date-based timeline, tags, and ordered collections
- `Pagefind` search, per-tag RSS feeds, social cards, and comments
- selectable color themes and the metadata needed by search engines and link previews

`astro-papyrus` is a reusable package instead of a theme copied into every website.
The site repository keeps the posts, TOML configuration, and images; the shared layouts, routes, and build code stay in the package.

### Astro pains

Jekyll got this part right.
A Jekyll site can inherit layouts and includes from a theme while keeping little more than `_config.yml`, content, and a few overrides.
Markdown files can become pages simply by selecting a layout in their front matter, and collections provide a familiar way to organize different kinds of content.

The same idea takes more plumbing in *Astro*.
A reusable theme needs routes, integrations, build scripts, package exports, and compatibility checks.
Dependency upgrades can also create `package.json` conflicts and framework-version problems that were less visible with Jekyll.

*Papyrus* tries to hide most of that plumbing. Start from a small template, write Markdown posts, edit one TOML configuration file, and override only what is specific to the website.
The defaults stay in `astro-papyrus` instead of being repeated in every site.

### Collections

I wanted the same posts to work both as a normal blog and as ordered documentation.
A collection starts with a TOML file inside a folder under `src/content/posts/`. Papyrus then includes the published posts stored beneath that folder.

The TOML file defines the collection’s name, description, and ordered list of sections.
Each section maps to a subfolder, and posts inside it follow filename order. Prefixes such as `00-`, `01-`, and `02-` make the reading order explicit without changing publication dates.

The same Markdown file still appears under `/posts/`, where posts are sorted by date.
The collection route presents it as part of a guide, documentation set, or course, with previous and next links that follow the collection order.

## Resume

I have used [JekyllCV](https://github.com/marcelofpfelix/jekyllcv) for years.
I created it because I wanted to edit my CV as **plain text**, keep its history in Git, and render it as a webpage that looks like an A4 sheet of paper.
The data lives in a YAML file, while Jekyll and `paper.css` turn it into a printable webpage that can also be saved as a PDF.

The CV is source code rather than a document edited by hand.
Every change is readable in a diff and stored in Git. The website and PDF come from the same source, so I do not need separate versions in a word processor, a PDF editor, and the website.

I wanted to keep that workflow after moving to Astro. Papyrus reads `src/data/profile.toml` and uses it for the web profile and both printable layouts.
`/profile/print/` keeps the site styling, while `/profile/ast/` is deliberately plain for printing and ATS parsers.

The same TOML file can also generate Markdown and a JSON Resume-compatible file. I can edit one plain-text source and use it as a webpage, an A4 PDF, Markdown, or structured JSON.
