import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginBasicSsl } from "@rsbuild/plugin-basic-ssl";

export default defineConfig({
  plugins: [pluginVue(), pluginBasicSsl()],
  html: {
    template: './index.html',
    inject: false
  },
  performance: {
    chunkSplit: {
      strategy: 'all-in-one',
    },
  },
  output: {
    cleanDistPath: false,
    injectStyles: true,
    copy: [
      { 
        from: '../../manifests/manifest.prod.json', 
        to: () => {
          return 'manifest.json'
        }
      },
      { 
        from: './assets/logo.png', 
        to: 'logo.png'
      }
    ],
    distPath: {
      root: '../../dist'
    },
    filename: {
      js: '../../js/config.js',
      css: '../../js/config.js',
    }
  },
  dev: {
    hmr: false,
    liveReload: false
  },
  server: {
    port: 5000,
  },
});
