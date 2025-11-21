import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // Use relative paths so the built site works correctly when served from GitHub Pages
      base: './',
      server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: {
          '/api/openrouter': {
            target: 'https://openrouter.io/api/v1',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api\/openrouter/, ''),
          }
        }
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
