import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/', // fix obrigatório para Vercel

    plugins: [
      react(),
      tailwindcss(),
    ],

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
      },
    },

    build: {
      outDir: 'dist',
      emptyOutDir: true, // 🔥 evita lixo de build antigo
      assetsDir: 'assets',
      sourcemap: false,
      cssCodeSplit: true,
    },

    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },

    preview: {
      port: 4173,
    },
  };
});
