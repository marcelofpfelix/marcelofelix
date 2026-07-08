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
    `${base}/`,
    `${base}/posts/`,
    `${base}/projects/`,
    `${base}/about/`,
    `${base}/profile/`,
    `${base}/docs/`,
    `${base}/timeline/`,
    `${base}/search/`,
    ...posts.map(post => `${base}${postHref(post)}`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
