import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://unavi.xyz",
  integrations: [
    starlight({
      title: "UNAVI Docs",
      description: "An open-source 3D social platform with seamless multiplayer spaces, dynamic user content, and self-sovereign identity.",
  
      editLink: {
        baseUrl: "https://github.com/unavi-xyz/docs/edit/main/",
      },
      logo: {
        light: "./src/assets/block-logo-raw.png",
        dark: "./src/assets/block-logo-raw-light.png",
      },
      social: {
        discord: "https://discord.com/invite/cazUfCCgHJ",
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
          label: "Guides",
          autogenerate: {
            directory: "guides",
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
