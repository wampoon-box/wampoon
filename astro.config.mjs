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
      favicon: "/favicon.svg",
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
            { label: "Installing Wampoon on a USB", slug: "guides/wampoon-usb" },
          ],
        },
        {
          label: "Guides",
          items: [
            // { label: "Guides", slug: "guides/index" },
            { label: "Control Panel", slug: "guides/wampoon-control" },
            { label: "Dashboard", slug: "guides/wampoon-dashboard" },
            { label: "Installer", slug: "guides/wampoon-installer" },
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
