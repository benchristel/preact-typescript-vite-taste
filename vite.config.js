import {defineConfig} from "vite"

export default defineConfig({
  // Base path for references to asset files in the built code.
  // Setting this to empty causes assets to be imported from a
  // relative path, which is necessary if your app is deployed
  // to a subdirectory (e.g. https://benchristel.github.io/my-app/)
  base: "",
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
})
