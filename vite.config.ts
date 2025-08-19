import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,  // Forces Vite to pick up changes reliably
      interval: 100,     // Check for file changes every 100ms
    },
    hmr: {
      overlay: true,     // Show error overlay on the browser
    },
  },
});
