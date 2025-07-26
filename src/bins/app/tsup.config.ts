import { defineConfig } from 'tsup';
import { baseOpts } from '../../../tsup.config.base';

export default defineConfig([
  {
    ...baseOpts,
    entry: ['src/main.ts'],
    outDir: 'dist',
    format: ['cjs'],
    clean: true,
    platform: 'node',
  },
  {
    ...baseOpts,
    entry: ['src/renderer.tsx'],
    outDir: 'dist',
    format: ['iife'],
    platform: 'browser',
    globalName: 'RendererApp',
    minify: false,
    sourcemap: true,
    outExtension: () => ({ js: '.js' }),
  },
]);
