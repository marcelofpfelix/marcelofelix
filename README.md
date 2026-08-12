# marcelofelix

Clean Astro site for `marcelofelix.com`, consuming `papyrus`.

This repo consumes Papyrus from the pushed `0.2.1` branch until the npm package is published:

```json
"astro-theme-papyrus": "github:marcelofpfelix/papyrus#0.2.1"
```

After `astro-theme-papyrus@0.2.1` is published to npm, switch it to:

```sh
pnpm add astro-theme-papyrus@^0.2.1
```

Local ownership:

- `papyrus.config.toml` for site navigation, projects, theme, and feature flags
- `src/content/` for local posts
- `src/data/profile.toml` for profile/CV data
- `src/pages/` only for custom routes not injected by Papyrus
- `astro.config.mjs`

Theme ownership stays in `papyrus`.

## Lighthouse

Run the same score gate locally and in GitHub Actions:

```sh
pnpm test:lighthouse
```

The check builds the static site, serves `dist`, and tests `/`, `/posts/`, `/search/`, and `/posts/new-web/`. Reports are written to `lhci-report/`.
