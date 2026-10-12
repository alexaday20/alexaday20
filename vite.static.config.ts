import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages. SITE_BASE is the folder the site lives in:
// "/alexaday20/" on alexaday20.github.io/alexaday20, or "/" on a custom domain.
const base = process.env.SITE_BASE ?? "/alexaday20/";

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
    pages: [{ path: "/" }, { path: "/digital-work" }, { path: "/event-planning" }, { path: "/campaign-proposals" }],
  },
});
