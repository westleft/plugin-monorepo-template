import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginBasicSsl } from "@rsbuild/plugin-basic-ssl";

export default defineConfig({
  plugins: [pluginVue(), pluginBasicSsl()],
  performance: {
    chunkSplit: {
      strategy: 'all-in-one',
    },
  },
  output: {
    cleanDistPath: false,
    injectStyles: true,
    distPath: {
      root: '../../dist'
    },
    filename: {
      js: '../../js/customize.js'
    }
  },
  dev: {
    hmr: false,
    liveReload: false
  },
  server: {
    port: 5100,
  },
});
