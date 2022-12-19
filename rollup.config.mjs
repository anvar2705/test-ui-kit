import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import del from 'rollup-plugin-delete'
import postcss from 'rollup-plugin-postcss'
import uglify from '@lopatnov/rollup-plugin-uglify'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

import packageJson from './package.json' assert { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      peerDepsExternal(),
      resolve({ browser: true }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      uglify(),
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
]
