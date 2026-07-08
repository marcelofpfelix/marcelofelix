module.exports = {
  ci: {
    collect: {
      startServerCommand: "pnpm preview --host 127.0.0.1 --port 4325",
      startServerReadyPattern: "Local",
      url: [
        "http://127.0.0.1:4325/",
        "http://127.0.0.1:4325/posts/",
        "http://127.0.0.1:4325/search/",
        "http://127.0.0.1:4325/posts/hello-papyrus/",
      ],
      numberOfRuns: 1,
      settings: {
        chromePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        preset: "desktop",
        throttlingMethod: "provided",
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 1 }],
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:best-practices": ["error", { minScore: 1 }],
        "categories:seo": ["error", { minScore: 1 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./lhci-report",
    },
  },
};
