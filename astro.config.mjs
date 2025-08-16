// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://wampoon-box.github.io",
  base: "/",
  integrations: [
    starlight({
      title: "Wampoon Website",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/wampoon-box/wampoon-box.github.io",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
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
