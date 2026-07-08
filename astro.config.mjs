import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import remarkDefinitionList, { defListHastHandlers } from "remark-definition-list";
import rehypeCallouts from "rehype-callouts";
import remarkArtifactLinks from "astro-theme-papyrus/remark-artifact-links";
import {
  addCollapse,
  addCopyButton,
  addLanguage,
  addTitle,
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerRemoveNotationEscape,
  updateStyle,
} from "astro-theme-papyrus/shiki";
import remarkMermaidBlocks from "./src/markdown/remark-mermaid-blocks.mjs";
import rehypeTaskListLabels from "./src/markdown/rehype-task-list-labels.mjs";

export default defineConfig({
  site: "https://blog.marcelofelix.com",
  markdown: {
    processor: unified({
      remarkPlugins: [remarkDefinitionList, remarkMermaidBlocks, remarkArtifactLinks],
      remarkRehype: {
        handlers: {
          ...defListHastHandlers,
        },
      },
      rehypePlugins: [rehypeCallouts, rehypeTaskListLabels],
    }),
    shikiConfig: {
      theme: "css-variables",
      transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerRemoveNotationEscape(),
        updateStyle(),
        addTitle(),
        addLanguage(),
        addCopyButton(2000),
        addCollapse(15),
      ],
    },
  },
});
