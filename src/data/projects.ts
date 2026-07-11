export const projects = [
  {
    title: "papyrus",
    description: "Reusable Astro theme package used by this site for posts, docs, profile pages, projects, RSS, search, and tags.",
    href: "/posts/hello-papyrus/",
    links: [
      { label: "package", href: "/posts/hello-papyrus/" },
      { label: "docs", href: "/docs/" },
      { label: "website", href: "/" },
      { label: "repo", text: "marcelofpfelix/papyrus", href: "https://github.com/marcelofpfelix/papyrus" },
    ],
    repo: "https://github.com/marcelofpfelix/papyrus",
    image: "/images/papyrus-layout.svg",
    pinned: true,
    status: "active",
  },
  {
    title: "tmx",
    description: "Rust replacement idea for local tmux helper scripts and terminal workflow glue.",
    href: "https://github.com/marcelofpfelix/tmx",
    links: [
      { label: "repo", text: "marcelofpfelix/tmx", href: "https://github.com/marcelofpfelix/tmx" },
    ],
    repo: "https://github.com/marcelofpfelix/tmx",
    image: "/images/papyrus-dark.svg",
    pinned: false,
    status: "planned",
  },
];
