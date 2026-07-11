import { getCollection } from "astro:content";
import { postHref, publishedPosts } from "astro-theme-papyrus/utils";
import { site } from "../site.config";

export async function GET({ site: astroSite }: { site?: URL }) {
  const base = astroSite?.toString().replace(/\/$/, "") ?? "https://blog.marcelofelix.com";
  const posts = publishedPosts(await getCollection("posts"));
  const lines = [
    `# ${site.title}`,
    "",
    site.description,
    "",
    "## URLs",
    `- [Home](${base}/)`,
    `- [Posts](${base}/posts/)`,
    `- [Projects](${base}/projects/)`,
    `- [About](${base}/about/)`,
    `- [Profile](${base}/profile/)`,
    `- [Docs](${base}/docs/)`,
    `- [Timeline](${base}/timeline/)`,
    `- [Search](${base}/search/)`,
    ...posts.map(post => `- [${post.data.title}](${base}${postHref(post)})`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
