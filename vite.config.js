import { resolve } from "path"
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      /* options */
    }),
  ],
  resolve: {
    alias: [
      { find: 'pinyin', replacement: resolve('node_modules/pinyin/lib/pinyin-web.js') },
    ]
  },
  base: './',
  server: {
    open: true
  },
  esbuild: {
    drop: ['console', 'debugger']
  }
});
