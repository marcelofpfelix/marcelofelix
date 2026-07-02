module.exports = {
  ci: {
    collect: {
      startServerCommand: "pnpm preview --host 127.0.0.1 --port 4325",
      startServerReadyPattern: "Local",
      url: [
        "http://127.0.0.1:4325/",
        "http://127.0.0.1:4325/posts/",
        "http://127.0.0.1:4325/search/",
        "http://127.0.0.1:4325/posts/markdown-feature-sample/",
      ],
      numberOfRuns: 1,
      settings: {
        preset: "desktop",
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.95 }],
        "categories:seo": ["error", { minScore: 0.95 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./lhci-report",
    },
  },
};
