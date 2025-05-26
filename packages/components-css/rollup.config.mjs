import postcss from "rollup-plugin-postcss";
import discardDuplicates from "postcss-discard-duplicates";
import { cwd } from "node:process";
import { basename } from "node:path";
import terser from "@rollup/plugin-terser";

let components = [
  {
    input: "header/index.scss",
    output: "dist/header.css",
  },
];

let config = [];
components.forEach((component) => {
  config.push({
    input: component.input,
    output: {
      file: component.output,
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
  });
});

config.push({
  input: "index.scss",
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
});

export default config;
