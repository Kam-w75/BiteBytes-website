import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// NOTE: API keys must NEVER be injected into the client bundle.
// Any Gemini / AI calls should be proxied through a backend or serverless function.
export default defineConfig({
  base: './',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react(), viteSingleFile()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  build: {
    // Inline everything so the output is a single file that works via file://
    assetsInlineLimit: 100_000_000,
    chunkSizeWarningLimit: 100_000_000,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      }
    }
  }
});
