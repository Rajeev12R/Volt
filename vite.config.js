import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg'],
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        // Allow CSS imports from node_modules
        includePaths: ['./node_modules'],
      },
    },
  },
  resolve: {
    alias: {
      // Add any path aliases if needed
    },
  },
});
