import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  
  // ✅ CRITICAL FOR DEPLOYMENT - Add this base configuration
  base: './', // Use relative paths for assets
  
  // ✅ Optional: Configure build output
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disable sourcemaps for smaller build size
  },
});