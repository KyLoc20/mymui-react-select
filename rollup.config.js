import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts'
const packageJson = require('./package.json');
export default [{
    input: 'lib/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "esm" }],
    plugins: [dts()],
}, {
    input: 'lib/index.js',
    output: [{
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            name: 'mymui-react-select'
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        postcss({ extensions: [".css"] }),
        external(),
        resolve(),
        commonjs(),
        terser()
    ]
}]
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