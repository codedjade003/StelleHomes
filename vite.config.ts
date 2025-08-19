import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  
  return {
    plugins: [react()],
    
    // ✅ Base path configuration
    base: isProduction ? './' : '/',
    
    // ✅ Build configuration for production
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: !isProduction, // Only enable sourcemaps in development
    },
    
    // ✅ Development-only configuration
    server: isProduction ? undefined : {
      watch: {
        usePolling: true,
        interval: 100,
      },
      hmr: {
        overlay: true,
      },
    },
  };
});