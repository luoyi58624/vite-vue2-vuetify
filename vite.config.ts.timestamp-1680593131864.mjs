// vite.config.ts
import * as path from "path";
import { defineConfig } from "file:///F:/luoyi/my/vite-vue2-vuetify/node_modules/vite/dist/node/index.js";
import vue from "file:///F:/luoyi/my/vite-vue2-vuetify/node_modules/@vitejs/plugin-vue2/dist/index.mjs";
import AutoImport from "file:///F:/luoyi/my/vite-vue2-vuetify/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///F:/luoyi/my/vite-vue2-vuetify/node_modules/unplugin-vue-components/dist/vite.mjs";
var __vite_injected_original_dirname = "F:\\luoyi\\my\\vite-vue2-vuetify";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "pinia",
        {
          "vue-property-decorator": ["Component", "Prop", "Emit", "Watch", "Model", "Mixins", "Ref", "Provide", "Inject"]
        }
      ],
      dirs: ["./src/store", "./src/utils", "./src/mixins"],
      dts: true
    }),
    Components({
      extensions: ["vue", "tsx"],
      deep: true,
      directoryAsNamespace: false,
      dirs: ["src/components"],
      dts: true
    })
  ],
  server: {
    host: "0.0.0.0",
    port: 8079,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/api/, "")
      }
    }
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
    reportCompressedSize: true,
    // 禁止输出压缩尺寸
    cssCodeSplit: true,
    // css代码分割，true启用、false禁止
    chunkSizeWarningLimit: 2e3,
    // 文件大小超出警告，单位kb
    rollupOptions: {
      output: {
        entryFileNames: `js/App.${(/* @__PURE__ */ new Date()).getTime()}.js`,
        chunkFileNames: `js/[name].${(/* @__PURE__ */ new Date()).getTime()}.js`,
        assetFileNames: `assets/[name].${(/* @__PURE__ */ new Date()).getTime()}.[ext]`,
        compact: true,
        manualChunks: {
          "vendors/vue": ["vue", "vue-router", "pinia"],
          "vendors/element-plus": ["vuetify"],
          "vendors/common": ["axios"]
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxsdW95aVxcXFxteVxcXFx2aXRlLXZ1ZTItdnVldGlmeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbHVveWlcXFxcbXlcXFxcdml0ZS12dWUyLXZ1ZXRpZnlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L2x1b3lpL215L3ZpdGUtdnVlMi12dWV0aWZ5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlMidcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRyZXNvbHZlOiB7XG5cdFx0YWxpYXM6IHtcblx0XHRcdCdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpXG5cdFx0fVxuXHR9LFxuXHRwbHVnaW5zOiBbXG5cdFx0dnVlKCksXG5cdFx0QXV0b0ltcG9ydCh7XG5cdFx0XHRpbXBvcnRzOiBbXG5cdFx0XHRcdCdwaW5pYScsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQndnVlLXByb3BlcnR5LWRlY29yYXRvcic6IFsnQ29tcG9uZW50JywgJ1Byb3AnLCAnRW1pdCcsICdXYXRjaCcsICdNb2RlbCcsICdNaXhpbnMnLCAnUmVmJywgJ1Byb3ZpZGUnLCAnSW5qZWN0J11cblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdGRpcnM6IFsnLi9zcmMvc3RvcmUnLCAnLi9zcmMvdXRpbHMnLCAnLi9zcmMvbWl4aW5zJ10sXG5cdFx0XHRkdHM6IHRydWVcblx0XHR9KSxcblx0XHRDb21wb25lbnRzKHtcblx0XHRcdGV4dGVuc2lvbnM6IFsndnVlJywgJ3RzeCddLFxuXHRcdFx0ZGVlcDogdHJ1ZSxcblx0XHRcdGRpcmVjdG9yeUFzTmFtZXNwYWNlOiBmYWxzZSxcblx0XHRcdGRpcnM6IFsnc3JjL2NvbXBvbmVudHMnXSxcblx0XHRcdGR0czogdHJ1ZVxuXHRcdH0pXG5cdF0sXG5cdHNlcnZlcjoge1xuXHRcdGhvc3Q6ICcwLjAuMC4wJyxcblx0XHRwb3J0OiA4MDc5LFxuXHRcdHByb3h5OiB7XG5cdFx0XHQnL2FwaSc6IHtcblx0XHRcdFx0dGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcblx0XHRcdFx0Y2hhbmdlT3JpZ2luOiB0cnVlLFxuXHRcdFx0XHRyZXdyaXRlOiBwYXRoID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0YnVpbGQ6IHtcblx0XHR0YXJnZXQ6ICdlc25leHQnLFxuXHRcdG1pbmlmeTogJ2VzYnVpbGQnLFxuXHRcdHNvdXJjZW1hcDogZmFsc2UsXG5cdFx0cmVwb3J0Q29tcHJlc3NlZFNpemU6IHRydWUsIC8vIFx1Nzk4MVx1NkI2Mlx1OEY5M1x1NTFGQVx1NTM4Qlx1N0YyOVx1NUMzQVx1NUJGOFxuXHRcdGNzc0NvZGVTcGxpdDogdHJ1ZSwgLy8gY3NzXHU0RUUzXHU3ODAxXHU1MjA2XHU1MjcyXHVGRjBDdHJ1ZVx1NTQyRlx1NzUyOFx1MzAwMWZhbHNlXHU3OTgxXHU2QjYyXG5cdFx0Y2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDAwLCAvLyBcdTY1ODdcdTRFRjZcdTU5MjdcdTVDMEZcdThEODVcdTUxRkFcdThCNjZcdTU0NEFcdUZGMENcdTUzNTVcdTRGNERrYlxuXHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdG91dHB1dDoge1xuXHRcdFx0XHRlbnRyeUZpbGVOYW1lczogYGpzL0FwcC4ke25ldyBEYXRlKCkuZ2V0VGltZSgpfS5qc2AsXG5cdFx0XHRcdGNodW5rRmlsZU5hbWVzOiBganMvW25hbWVdLiR7bmV3IERhdGUoKS5nZXRUaW1lKCl9LmpzYCxcblx0XHRcdFx0YXNzZXRGaWxlTmFtZXM6IGBhc3NldHMvW25hbWVdLiR7bmV3IERhdGUoKS5nZXRUaW1lKCl9LltleHRdYCxcblx0XHRcdFx0Y29tcGFjdDogdHJ1ZSxcblx0XHRcdFx0bWFudWFsQ2h1bmtzOiB7XG5cdFx0XHRcdFx0J3ZlbmRvcnMvdnVlJzogWyd2dWUnLCAndnVlLXJvdXRlcicsICdwaW5pYSddLFxuXHRcdFx0XHRcdCd2ZW5kb3JzL2VsZW1lbnQtcGx1cyc6IFsndnVldGlmeSddLFxuXHRcdFx0XHRcdCd2ZW5kb3JzL2NvbW1vbic6IFsnYXhpb3MnXVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUixZQUFZLFVBQVU7QUFDdlMsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBSnZCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLEtBQVUsYUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDbkM7QUFBQSxFQUNEO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNDLDBCQUEwQixDQUFDLGFBQWEsUUFBUSxRQUFRLFNBQVMsU0FBUyxVQUFVLE9BQU8sV0FBVyxRQUFRO0FBQUEsUUFDL0c7QUFBQSxNQUNEO0FBQUEsTUFDQSxNQUFNLENBQUMsZUFBZSxlQUFlLGNBQWM7QUFBQSxNQUNuRCxLQUFLO0FBQUEsSUFDTixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVixZQUFZLENBQUMsT0FBTyxLQUFLO0FBQUEsTUFDekIsTUFBTTtBQUFBLE1BQ04sc0JBQXNCO0FBQUEsTUFDdEIsTUFBTSxDQUFDLGdCQUFnQjtBQUFBLE1BQ3ZCLEtBQUs7QUFBQSxJQUNOLENBQUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTixRQUFRO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUFBLFVBQVFBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUMzQztBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxzQkFBc0I7QUFBQTtBQUFBLElBQ3RCLGNBQWM7QUFBQTtBQUFBLElBQ2QsdUJBQXVCO0FBQUE7QUFBQSxJQUN2QixlQUFlO0FBQUEsTUFDZCxRQUFRO0FBQUEsUUFDUCxnQkFBZ0IsV0FBVSxvQkFBSSxLQUFLLEdBQUUsUUFBUTtBQUFBLFFBQzdDLGdCQUFnQixjQUFhLG9CQUFJLEtBQUssR0FBRSxRQUFRO0FBQUEsUUFDaEQsZ0JBQWdCLGtCQUFpQixvQkFBSSxLQUFLLEdBQUUsUUFBUTtBQUFBLFFBQ3BELFNBQVM7QUFBQSxRQUNULGNBQWM7QUFBQSxVQUNiLGVBQWUsQ0FBQyxPQUFPLGNBQWMsT0FBTztBQUFBLFVBQzVDLHdCQUF3QixDQUFDLFNBQVM7QUFBQSxVQUNsQyxrQkFBa0IsQ0FBQyxPQUFPO0FBQUEsUUFDM0I7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=
