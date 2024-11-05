import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@tensorflow/tfjs', '@tensorflow-models/coco-ssd'], // Add @tensorflow-models/coco-ssd
    },
  },
});
