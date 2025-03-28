import { defineConfig } from 'father';

export default defineConfig({
  plugins: ['@rc-component/father-plugin'],
  esm: {
    ignores: ['**/demo/**', '**/__tests/**'],
    input: 'components/',
    parallel: true,
  },
  cjs: {
    ignores: ['**/demo/**', '**/__tests/**'],
    input: 'components/',
    parallel: true,
  },
});
