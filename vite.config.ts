import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: './', // 🔥 ISSO AQUI É O MAIS SEGURO PRA VERCEL + SPA

    plugins: [
      react(),
      tailwindcss()
    ],

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    build: {
      outDir: 'dist',
      emptyOutDir: true, // 🔥 MUITO IMPORTANTE
      assetsDir: 'assets',
      sourcemap: false,
    },

    server: {
      hmr: true,
    },
  };
});
