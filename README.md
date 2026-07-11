# marcelofelix

Clean Astro blog site for `blog.marcelofelix.com`, consuming `papyrus`.

This repo consumes Papyrus from the pushed `0.2.0` branch until the npm package is published:

```json
"astro-theme-papyrus": "github:marcelofpfelix/papyrus#0.2.0"
```

After `astro-theme-papyrus@0.2.0` is published to npm, switch it to:

```sh
pnpm add astro-theme-papyrus@^0.2.0
```

Local ownership:

- `src/content/`
- `src/pages/`
- `astro.config.mjs`

Theme ownership stays in `papyrus`.

## Lighthouse

Run the same score gate locally and in GitHub Actions:

```sh
pnpm test:lighthouse
```

The check builds the static site, serves `dist`, and tests `/`, `/posts/`, `/search/`, and `/posts/hello-papyrus/`. Reports are written to `lhci-report/`.
