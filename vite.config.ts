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
        target: 'es2015',
        minify: 'terser',  // Switched from esbuild to terser for better compression
        cssMinify: true,
        terserOptions: {
          compress: {
            drop_console: true,  // Remove all console.* in production
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug']
          },
          mangle: {
            safari10: true  // Fix Safari 10 issues
          }
        },
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              // More granular code splitting
              if (id.includes('node_modules')) {
                if (id.includes('framer-motion')) {
                  return 'framer';
                }
                if (id.includes('lucide-react')) {
                  return 'icons';
                }
                if (id.includes('react') || id.includes('react-dom')) {
                  return 'vendor';
                }
              }
              // Split components by section
              if (id.includes('/components/sections/')) {
                return 'sections';
              }
              if (id.includes('/components/common/')) {
                return 'common';
              }
            }
          }
        },
        chunkSizeWarningLimit: 500,  // Warn if chunks exceed 500KB
        reportCompressedSize: true,  // Show compressed sizes
        sourcemap: false  // Disable source maps in production
      }
    };
});
