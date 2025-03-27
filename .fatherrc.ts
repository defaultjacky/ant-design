import { defineConfig } from 'father';

export default defineConfig({
  plugins: ['@rc-component/father-plugin'],
  esm: {
    input: 'components/',
  },
  cjs: {
    input: 'components/',
  },
});
