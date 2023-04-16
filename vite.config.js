import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES  // この行を追加
  ? "Vite-login"            // この行を追加
  : "./",  
  plugins: [react(), viteSingleFile()],
  build:{
    //outDir: "server/hosting",
    outDir: "./docs"
  }
})
