import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts'
import pkg from './package.json';
// const packageJson = require('./package.json');
const name = 'mymui-react-select';
export default defineConfig([{
            input: 'types/index.d.ts',
            output: [{ file: 'dist/index.d.ts', format: "esm" }],
            plugins: [dts()],
        },
        {
            input: 'src/index.ts',
            output: [{
                    file: pkg.main,
                    format: 'cjs',
                    sourcemap: true,
                    name
                },
                {
                    file: pkg.module,
                    format: 'esm',
                    sourcemap: true,
                    name
                }
            ],
            plugins: [
                typescript({ tsconfig: './tsconfig.json', sourceMap: true }),
                postcss({ extensions: [".css"] }),
                resolve(),
                commonjs(),
                external(),
                terser()
            ]
        }

    ])
    // import dts from 'rollup-plugin-dts'
    // import esbuild from 'rollup-plugin-esbuild'

// const name = require('./package.json').main.replace(/\.js$/, '')

// const bundle = config => ({
//     ...config,
//     input: 'src/index.ts',
//     external: id => !/^[./]/.test(id),
// })

// export default [
//     bundle({
//         plugins: [esbuild()],
//         output: [{
//                 file: `${name}.js`,
//                 format: 'cjs',
//                 sourcemap: true,
//             },
//             {
//                 file: `${name}.mjs`,
//                 format: 'es',
//                 sourcemap: true,
//             },
//         ],
//     }),
//     bundle({
//         plugins: [dts()],
//         output: {
//             file: `${name}.d.ts`,
//             format: 'es',
//         },
//     }),
// ]