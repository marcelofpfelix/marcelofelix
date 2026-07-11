import { loadPaperConfig } from "astro-theme-papyrus/config";

const paperConfig = await loadPaperConfig();

export const site = {
  ...paperConfig,
  title: paperConfig.title,
  description: paperConfig.description ?? "",
  headerTitle: paperConfig.brandTitle,
  defaultThemeProfile: paperConfig.defaultThemeProfile,
  defaultFontProfile: paperConfig.defaultFontProfile,
  nav: paperConfig.nav,
  socialLinks: paperConfig.socialLinks,
  homePostLimit: 3,
  homeProjectLimit: 3,
  postListLimit: paperConfig.postCard.limit ?? 20,
  post_card: {
    tags: paperConfig.postCard.tags,
    read_time: paperConfig.postCard.readTime,
    fresh_indicators: paperConfig.postCard.freshIndicators,
    fresh_indicator_text: paperConfig.postCard.freshIndicatorText,
    updated_date_only: paperConfig.postCard.updatedDateOnly,
  },
};
