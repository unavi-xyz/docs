import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.unavi.xyz",

  integrations: [
    starlight({
      title: "UNAVI Docs",
      logo: {
        light: "./src/assets/block-logo-raw.png",
        dark: "./src/assets/block-logo-raw-light.png",
      },
      social: {
        discord: "https://discord.com/invite/VCsAEneUMn",
        github: "https://github.com/unavi-xyz/unavi",
        twitter: "https://twitter.com/unavi_xyz",
      },
      customCss: ["./src/tailwind.css", "./src/custom.css"],
      sidebar: [
        {
          label: "Overview",
          autogenerate: {
            directory: "overview",
          },
        },
        {
          label: "Content",
          autogenerate: {
            directory: "content",
          },
        },
        {
          label: "The Wired",
          autogenerate: {
            directory: "wired-protocol",
          },
        },
      ],
    }),
    tailwind(),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
