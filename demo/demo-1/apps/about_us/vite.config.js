import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Fix Windows path bug in @module-federation/vite: the plugin injects hostAutoInit
 * script with absolute path (e.g. /Code/... from C:\Code\...) causing 404.
 * - transformIndexHtml: fix script src in HTML so browser requests correct URL
 * - middleware: rewrite wrong requests (e.g. cached) to correct path
 */
function mfWindowsPathFix() {
  const WRONG_PATH_RE = /[^"']*?node_modules[/\\]__mf__virtual[/\\]([^"'\s]+)/g;
  const CORRECT_PREFIX = "/node_modules/__mf__virtual/";

  return {
    name: "mf-windows-path-fix",
    enforce: "post",
    transformIndexHtml(html) {
      return html.replace(WRONG_PATH_RE, (match, filePart) => CORRECT_PREFIX + filePart.replace(/\\/g, '/'))
    },
    configureServer(server) {
      const fixMfPath = (req, res, next) => {
        const url = (req.url || '').split('?')[0]
        const mfMatch = url.match(/\/[A-Za-z][^/]*\/.*?(node_modules\/__mf__virtual\/.*)/)
        if (mfMatch) {
          const q = (req.url || '').includes('?') ? '?' + req.url.split('?')[1] : ''
          req.url = '/' + mfMatch[1].replace(/\\/g, '/') + q
        }
        next()
      }
      server.middlewares.stack.unshift({ route: "", handle: fixMfPath });
    },
  };
}

// For production: use full URL so manifest assets load from remote origin, not host.
// Vercel sets VERCEL_URL (e.g. demo-1-home-page.vercel.app); use VITE_PUBLIC_URL if set.
const getBase = () => {
  if (process.env.VITE_PUBLIC_URL)
    return process.env.VITE_PUBLIC_URL.replace(/\/$/, "") + "/";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}/`;
  return "/";
};

// https://vite.dev/config/
export default defineConfig({
  root: __dirname,
  base: getBase(),
  plugins: [
    react(),
    federation({
      name: "about_us",
      filename: "remoteEntry.js",
      manifest: true,
      exposes: {
        "./AboutUs": "./src/components/pages/AboutUs.jsx",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.3.1" },
        "react-dom": { singleton: true, requiredVersion: "^18.3.1" },
      },
    }),
    mfWindowsPathFix(),
  ],
  server: {
    port: 4002,
    strictPort: true,
    origin: "http://localhost:4002",
  },
  preview: {
    port: 4002,
  },
  build: {
    target: "chrome89",
  },
});
