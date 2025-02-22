import { defineConfig } from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react-swc'
import env from "vite-plugin-env-compatible";
// https://vite.dev/config/
export default defineConfig({
	build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404.html'),
      }
    }
  },
	base: process.env.GITHUB_PAGES  // この行を追加
	? "homepage"          // この行を追加
	: "./",                     // この行を追加
  plugins: [react(),env({ prefix: "REACT_APP", mountedPath: "process.env" })],
})