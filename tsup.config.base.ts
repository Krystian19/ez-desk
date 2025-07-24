import { Options } from 'tsup';

export const baseOpts: Options = {
  entry: ['src', '!src/**/*.spec.*'],
  splitting: false,
  sourcemap: true,
  clean: false,
  dts: true,
  silent: true,
};
