import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  resolve: {
    alias: {
      // Adicione alias para resolver pacotes e caminhos corretamente
      '@': '/src',
    },
  },
});
