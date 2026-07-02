# marcelofelix

Clean Astro blog site for `blog.marcelofelix.com`, consuming `paper-pure`.

During local-only development this repo uses:

```json
"paper-pure": "file:../../paper-pure/main"
```

After `paper-pure` is pushed, switch it to:

```sh
pnpm add github:marcelofpfelix/paper-pure
```

Local ownership:

- `src/content/`
- `src/pages/`
- `astro.config.mjs`

Theme ownership stays in `paper-pure`.

## Lighthouse

Run the same score gate locally and in GitHub Actions:

```sh
pnpm test:lighthouse
```

The check builds the static site, serves `dist`, and tests `/`, `/posts/`, `/search/`, and the markdown sample page. Reports are written to `lhci-report/`.
