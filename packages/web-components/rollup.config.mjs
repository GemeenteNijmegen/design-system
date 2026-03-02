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
  {
    input: "src/accordion/accordion.js",
    output: "dist/nijmegen-accordion.js",
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
      {
        name: "vite-compat",
        async resolveId(source, importer, options) {
          // Strip ?raw and ?inline suffix for compatibility with Vite imports
          if (source.includes("?raw") || source.includes("?inline")) {
            const cleanSource = source.replace(/\?(raw|inline)$/, "");
            return this.resolve(cleanSource, importer, {
              ...options,
              skipSelf: true,
            });
          }
          return null;
        },
      },
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
