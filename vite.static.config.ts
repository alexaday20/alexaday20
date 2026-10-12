import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages. SITE_BASE is the folder the site lives in:
// "/" on the custom domain adaydigital.llc ("/alexaday20/" for the bare github.io address).
const base = process.env.SITE_BASE ?? "/";

export default defineConfig({
  nitro: false,
  vite: {
    base,
    plugins: [
      {
        name: "media-base",
        enforce: "pre",
        transform(code, id) {
          if (id.endsWith(".asset.json")) return code.replaceAll('"/media/', `"${base}media/`);
        },
      },
    ],
  },
  tanstackStart: {
    server: { entry: "server" },
    prerender: { enabled: true, crawlLinks: true, failOnError: true },
    pages: [{ path: "/" }, { path: "/strategy" }, { path: "/digital-work" }, { path: "/event-planning" }],
  },
});
