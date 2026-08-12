import { loadPapyrusConfig } from "astro-theme-papyrus/config";

const papyrusConfig = await loadPapyrusConfig();

export const site = {
  ...papyrusConfig,
  title: papyrusConfig.title,
  description: papyrusConfig.description ?? "",
  headerTitle: papyrusConfig.brandTitle,
  defaultThemeProfile: papyrusConfig.defaultThemeProfile,
  defaultFontProfile: papyrusConfig.defaultFontProfile,
  nav: papyrusConfig.nav,
  socialLinks: papyrusConfig.socialLinks,
  homePostLimit: 3,
  homeProjectLimit: 3,
  postListLimit: papyrusConfig.postCard.limit ?? 20,
  post_card: {
    tags: papyrusConfig.postCard.tags,
    read_time: papyrusConfig.postCard.readTime,
    fresh_indicators: papyrusConfig.postCard.freshIndicators,
    fresh_indicator_text: papyrusConfig.postCard.freshIndicatorText,
    updated_date_only: papyrusConfig.postCard.updatedDateOnly,
  },
};
