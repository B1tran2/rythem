import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // IMPORTANT for GitHub Pages project sites:
  // replace "/rythem/" if your repository name changes.
  base: '/rythem/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
});
