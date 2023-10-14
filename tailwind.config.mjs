const starlightPlugin = require("@astrojs/starlight-tailwind");
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: colors.indigo,
        gray: colors.zinc,
      },
    },
  },
  plugins: [starlightPlugin()],
};
