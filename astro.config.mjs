import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import remarkDefinitionList, { defListHastHandlers } from "remark-definition-list";
import remarkGithubAlerts from "remark-github-blockquote-alert";
import remarkArtifactLinks from "paper-pure/remark-artifact-links";
import remarkCodeMeta from "paper-pure/remark-code-meta";
import rehypePaperCode from "paper-pure/rehype-paper-code";
import remarkMermaidBlocks from "./src/markdown/remark-mermaid-blocks.mjs";
import rehypeTaskListLabels from "./src/markdown/rehype-task-list-labels.mjs";

export default defineConfig({
  site: "https://blog.marcelofelix.com",
  markdown: {
    processor: unified({
      remarkPlugins: [remarkGithubAlerts, remarkDefinitionList, remarkCodeMeta, remarkMermaidBlocks, remarkArtifactLinks],
      remarkRehype: {
        handlers: {
          ...defListHastHandlers,
        },
      },
      rehypePlugins: [rehypePaperCode, rehypeTaskListLabels],
    }),
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
