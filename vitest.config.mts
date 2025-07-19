import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    setupFiles: './src/setupTests.ts',
    environment: 'jsdom',
  },
});
