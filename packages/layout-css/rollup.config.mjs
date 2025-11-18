import postcss from "rollup-plugin-postcss";
import discardDuplicates from "postcss-discard-duplicates";
import { cwd } from "node:process";
import { basename } from "node:path";

let components = [
  {
    input: "src/grid.scss",
    output: "dist/grid.css",
  },
  {
    input: "src/container.scss",
    output: "dist/container.css",
  },
  {
    input: "src/spacing.scss",
    output: "dist/spacing.css",
  },
  {
    input: "src/layout.scss",
    output: "dist/layout.css",
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
  input: "src/layout.scss",
  output: {
    file: "dist/layout.min.css",
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
