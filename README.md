# marcelofelix

Clean Astro blog site for `blog.marcelofelix.com`, consuming `papyrus`.

During local-only development this repo uses:

```json
"papyrus": "file:../../papyrus/main"
```

After `papyrus` is pushed, switch it to:

```sh
pnpm add github:marcelofpfelix/papyrus
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

The check builds the static site, serves `dist`, and tests `/`, `/posts/`, `/search/`, and the markdown sample page. Reports are written to `lhci-report/`.
