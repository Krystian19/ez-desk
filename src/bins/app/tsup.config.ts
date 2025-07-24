import { defineConfig } from 'tsup';
import { baseOpts } from '../../../tsup.config.base';

export default defineConfig({
  ...baseOpts,
  entry: ['src/main.ts'],
  outDir: 'dist',
  format: ['cjs'],
  sourcemap: true,
  clean: true,
  dts: false,
  target: 'node18',
  platform: 'node',
});
