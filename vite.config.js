import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Required for GitHub Pages project site at:
  // https://b1tran2.github.io/rythem/
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
