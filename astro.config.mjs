import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import starlightLinksValidatorPlugin from "starlight-links-validator";
import starlightImageZoomPlugin from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.unavi.xyz",
  integrations: [
    starlight({
      title: "UNAVI Docs",
      description: "An open-source VR social platform.",

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
          label: "Start Here",
          items: [
            {
              label: "Getting Started",
              link: "getting-started",
            },
          ],
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

      plugins: [starlightImageZoomPlugin(), starlightLinksValidatorPlugin()],
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
