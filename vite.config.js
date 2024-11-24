import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import env from "vite-plugin-env-compatible";
// https://vite.dev/config/
export default defineConfig({
	base: process.env.GITHUB_PAGES  // この行を追加
	? "homepage"          // この行を追加
	: "./",                     // この行を追加
  plugins: [react(),env({ prefix: "REACT_APP", mountedPath: "process.env" })],
})
