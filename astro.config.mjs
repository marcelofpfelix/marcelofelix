import { definePapyrusAstroConfig } from "astro-papyrus/astro";
import { remarkPapyrusEmoji } from "astro-papyrus-plugins";

export default definePapyrusAstroConfig({
  markdown: {
    remarkPlugins: [remarkPapyrusEmoji],
  },
  sitemapFilter: {
    excludeCollectionPosts: false,
  },
});
