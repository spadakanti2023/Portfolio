import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from "path" // 1. Add this import

export default defineConfig({
  logLevel: 'info', // 2. Change 'error' to 'info' temporarily to see what's actually breaking
  plugins: [
    base44({
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      visualEditAgent: true
    }),
    react(),
  ],
  resolve: {
    alias: {
      // 3. This tells Vite that @ means the src folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
});