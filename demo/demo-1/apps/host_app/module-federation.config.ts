import path from "path";
import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

const REMOTE_HOME_PAGE_URL =
  process.env.PUBLIC_REMOTE_HOME_PAGE_URL || "http://localhost:4001";
const REMOTE_ABOUT_US_URL =
  process.env.PUBLIC_REMOTE_ABOUT_US_URL || "http://localhost:4002";

export default createModuleFederationConfig({
  name: "host_app",
  remotes: {
    home_page: `home_page@${REMOTE_HOME_PAGE_URL}/mf-manifest.json`,
    about_us: `about_us@${REMOTE_ABOUT_US_URL}/mf-manifest.json`,
  },
  dts: false,
  shareStrategy: "loaded-first",
  runtimePlugins: [
    path.resolve(process.cwd(), "src/runtime-plugin/fallback.ts"),
  ],
  shared: {
    react: { singleton: true, requiredVersion: "^18.3.1" },
    "react-dom": { singleton: true, requiredVersion: "^18.3.1" },
  },
});
