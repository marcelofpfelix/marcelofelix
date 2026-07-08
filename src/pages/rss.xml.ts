import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { postHref, publishedPosts } from "astro-theme-papyrus/utils";
import { site } from "../site.config";

export const GET: APIRoute = async context => {
  const posts = publishedPosts(await getCollection("posts"));

  return rss({
    title: site.title,
    description: site.description,
    site: context.site ?? new URL("https://blog.marcelofelix.com"),
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.pubDatetime),
      link: postHref(post),
    })),
  });
};
