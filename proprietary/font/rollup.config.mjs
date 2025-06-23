import postcss from "rollup-plugin-postcss";
import discardDuplicates from "postcss-discard-duplicates";
import copy from 'rollup-plugin-copy'

export default [
  {
    input: "src/index.scss",
    output: {
      file: "dist/index.css",
      sourcemap: false,
      format: "esm",
      compact: true,
    },
    plugins: [
      postcss({
        extensions: [".css", ".scss"],
        plugins: [discardDuplicates()],
        extract: true,
      }),
      copy({
        targets: [
           { src: 'node_modules/@fontsource/source-sans-pro/400.css', dest: 'dist/@fontsource/source-sans-pro' },
           { src: 'node_modules/@fontsource/source-sans-pro/600.css', dest: 'dist/@fontsource/source-sans-pro' },
           { src: 'node_modules/@fontsource/source-sans-pro/700.css', dest: 'dist/@fontsource/source-sans-pro' },
        ]
      })
    ],
  },
  {
    input: "src/index.scss",
    output: {
      file: "dist/index.min.css",
      sourcemap: false,
      format: "esm",
      compact: true,
    },
    plugins: [
      postcss({
        extensions: [".css", ".scss"],
        plugins: [discardDuplicates()],
        extract: true,
        minimize: true,
      }),
    ],
  },
];
