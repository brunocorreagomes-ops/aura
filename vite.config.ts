import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // 🚨 ESSENCIAL: nunca dinâmico em produção
    base: '/',

    plugins: [
      react(),
      tailwindcss(),
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    define: {
      // seguro para build (não quebra se undefined)
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY ?? ''),
    },

    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  };
});
