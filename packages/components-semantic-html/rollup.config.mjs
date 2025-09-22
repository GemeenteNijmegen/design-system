import postcss from "rollup-plugin-postcss";
import discardDuplicates from "postcss-discard-duplicates";

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
