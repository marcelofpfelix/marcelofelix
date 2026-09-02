import { definePapyrusAstroConfig } from "astro-papyrus/astro";
import { papyrusMdTxt } from "astro-papyrus/plugins";
import { remarkPapyrusEmoji } from "astro-papyrus-plugins";

export default definePapyrusAstroConfig({
  plugins: [papyrusMdTxt()],
  markdown: {
    remarkPlugins: [remarkPapyrusEmoji],
  },
  sitemapFilter: {
    excludeCollectionPosts: false,
  },
});
