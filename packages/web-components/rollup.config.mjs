import resolve from "rollup-plugin-node-resolve";
import html from "rollup-plugin-html";
import postcss from "rollup-plugin-postcss";
import discardDuplicates from "postcss-discard-duplicates";
import { cwd } from "node:process";
import { basename } from "node:path";

let components = [
  {
    input: "src/header/header.js",
    output: "dist/nijmegen-header.js",
  },
  {
    input: "src/mobile-menu/mobile-menu.js",
    output: "dist/nijmegen-mobile-menu.js",
  },
  {
    input: "src/toolbar-button/toolbar-button.js",
    output: "dist/nijmegen-toolbar-button.js",
  },
  {
    input: "src/search/search.js",
    output: "dist/nijmegen-search.js",
  },
];

let config = [];
components.forEach((component) => {
  config.push({
    input: component.input,
    output: {
      file: component.output,
      format: "iife",
    },
    plugins: [
      resolve({ browser: true }),
      html({
        include: "**/*.html",
      }),
      postcss({
        extensions: [".css", ".scss"],
        plugins: [discardDuplicates()],
        inject: true,
      }),
    ],
  });
});

export default config;
