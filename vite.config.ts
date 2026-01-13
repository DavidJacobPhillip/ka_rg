import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/ka_rg/', // this must match your repository name
  base: '/', // this must match your repository name
});