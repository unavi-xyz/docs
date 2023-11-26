import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://unavi.xyz",
  integrations: [
    starlight({
      title: "UNAVI",
      description: "An open source VR social platform.",
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
      components: {
        Header: "./src/components/Header.astro",
      },
      customCss: ["./src/tailwind.css", "./src/custom.css"],
      sidebar: [
        {
          label: "Overview",
          autogenerate: {
            directory: "docs/overview",
          },
        },
        {
          label: "Content",
          autogenerate: {
            directory: "docs/content",
          },
        },
        {
          label: "Guides",
          autogenerate: {
            directory: "docs/guides",
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
