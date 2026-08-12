import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['lib/**/*.ts'],
  format: ['cjs', 'esm'],
  dts: false,
  clean: true,
  sourcemap: false,
  splitting: false,
  treeshake: true,
  outDir: 'dist',
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.mjs' : '.cjs'
  }),
})
