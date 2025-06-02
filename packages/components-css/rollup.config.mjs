import postcss from "rollup-plugin-postcss";
import discardDuplicates from "postcss-discard-duplicates";
import { cwd } from "node:process";
import { basename } from "node:path";

let config = [];

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
