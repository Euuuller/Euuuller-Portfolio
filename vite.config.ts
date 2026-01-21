import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        viteCompression({
          algorithm: 'brotliCompress',
          ext: '.br',
          threshold: 1024,
        }),
        viteCompression({
          algorithm: 'gzip',
          ext: '.gz',
          threshold: 1024,
        }),
        visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true,
        }) as any,
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || '')
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              animations: ['framer-motion'],
              icons: ['lucide-react']
            }
          }
        },
        chunkSizeWarningLimit: 1000
      }
    };
});
