import { defineConfig } from 'vite';
export default defineConfig({
  base: './',
  build: { target: 'es2022', chunkSizeWarningLimit: 600, rollupOptions: { output: { manualChunks: { three: ['three'], gsap: ['gsap'] } } } },
  server: { strictPort: true, port: 5173 },
});
