import { build } from 'esbuild';

await build({
  entryPoints: ['src/main.ts'],
  outfile: 'plugin/main.js',
  bundle: true,
  minify: true,
  format: 'esm',
});
