import profileSource from "./profile.toml?raw";
import { profileDataFromJekyllCvToml } from "astro-theme-papyrus/utils";

const profileData = profileDataFromJekyllCvToml(profileSource, [
  {
    repo: "marcelofpfelix/papyrus",
    description: "Reusable Astro theme package wrapping Pure with a Paper-like blog surface.",
  },
  {
    repo: "marcelofpfelix/astrocv",
    description: "Astro CV theme direction inspired by jekyllcv, with data-driven sections and A4 print output.",
  },
  {
    repo: "marcelofpfelix/tmx",
    description: "Rust replacement idea for local tmux helper scripts and terminal workflow glue.",
  },
]);

export const { profile, profileLinks, printProfileLinks, cvSections, profilePages, timelineEvents, profileProjects } = profileData;
