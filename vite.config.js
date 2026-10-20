import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' lets the build run from any sub-path (GitHub Pages included)
export default defineConfig({
  plugins: [react()],
  base: './',
});
