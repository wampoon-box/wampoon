// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeGalaxy from "starlight-theme-galaxy";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  site: "https://wampoon-box.github.io",
  base: "/",
  integrations: [
    starlight({
      title: "Wampoon Box",            
      customCss: [
        "/src/styles/docs-custom.css",
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/wampoon-box/wampoon-box.github.io",
        },
      ],
      plugins: [
        starlightThemeGalaxy(),
        starlightImageZoom(),
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Getting Started", slug: "getting-started" },
          ],
        },
        {
          label: "Guides",
          items: [
            // { label: "Guides", slug: "guides/index" },
            { label: "Wampoon Control Panel", slug: "guides/wampoon-control" },
            { label: "Wampoon Dashboard", slug: "guides/wampoon-dashboard" },
            { label: "Wampoon Installer", slug: "guides/wampoon-installer" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
