import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: {
    index: 'src/index.ts',
    'translation/i18n': 'src/translation/i18n.ts',
  },
  output: [
    {
      dir: 'dist',
      format: 'es',
      sourcemap: true,
      exports: 'named',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    external(),
    resolve({ dedupe: ['react', 'react-dom'] }),
    typescript({}),
    commonjs(),
  ],
};
