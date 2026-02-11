import fs from "fs";
import path from "path";
import spacingMatrix from "./spacing-matrix.json" assert { type: "json" };
import semanticSpacingMatrix from "./semantic-spacing-matrix.json" assert { type: "json" };

const spaceMap = {
  NVT: undefined,
  Onbekenden: "stranger",
  Kennissen: "acquaintance",
  Vrienden: "friend",
  Besties: "best-friend",
  Kind: "confidant",
};

const getSpacings = (spacingMatrix) => {
  return spacingMatrix
    .map((spacing) => {
      const entries = Object.entries(spacing);
      const [, component] = entries.shift();
      return entries
        .map(([sibling, space]) => {
          const spacing = spaceMap[space];
          return spacing && { component, sibling, spacing };
        })
        .filter(Boolean);
    })
    .filter((arr) => arr.length);
};

const getSpacingMixins = (components) =>
  components.map((mixinGroup) => {
    const componentName = mixinGroup[0].component;

    const mixins = mixinGroup.map(
      ({ component, sibling, spacing }) =>
        `.${component}:has(+ .${sibling}) {
  --${component}-margin-block-end: var(--utrecht-rich-text-${spacing}-margin-block-end);
}`,
    );
    return `@mixin spacing-${componentName} {
  .${componentName}:first-child {
    --${componentName}-margin-block-start: 0;
  }
 ${mixins.join(";\n")}
}`;
  });

const getSpacingMixinsSemantic = (components) =>
  components.map((mixinGroup) => {
    var componentName = mixinGroup[0].component;
    componentName = componentName.replace(/^\./, "");

    const mixins = mixinGroup.map(({ component, sibling, spacing }) => {
      let resp = `${component}:has(+ ${sibling}) {
    margin-block-end: var(--utrecht-rich-text-${spacing}-margin-block-end);`;
      if (component == "button" && component == sibling) {
        resp += `
    margin-inline-end: var(--utrecht-rich-text-${spacing}-margin-block-end);
    }`;
      } else {
        resp += `
  }`;
      }
      return resp;
    });
    return `@mixin spacing-${componentName} {
  ${componentName}:first-child {
    --${componentName}-margin-block-start: 0;
  }
 ${mixins.join(";\n")}
}`;
  });

const getRichTextStyles = (components, parentclass = "nijmegen-spacing") => `
@import "./mixin";

.${parentclass} .utrecht-page-body__content {
  --utrecht-space-around: 1;
  ${components.map((mixinGroup) => `@include spacing-${mixinGroup[0].component}`).join(";\n")}
}
 @import "./nested";`;

const spacings = getSpacings(spacingMatrix);
const semanticSpacings = getSpacings(semanticSpacingMatrix);

fs.writeFileSync(
  path.resolve("./spacing/src/_mixin.scss"),
  getSpacingMixins(spacings).join("\n"),
  {
    override: true,
  },
);

fs.writeFileSync(
  path.resolve("./spacing/src/semantic/_mixin.scss"),
  getSpacingMixinsSemantic(semanticSpacings).join("\n"),
  {
    override: true,
  },
);

fs.writeFileSync(
  path.resolve("./spacing/src/index.scss"),
  getRichTextStyles(spacings),
  {
    override: true,
  },
);

fs.writeFileSync(
  path.resolve("./spacing/src/semantic/index.scss"),
  getRichTextStyles(semanticSpacings, "nijmegen-html"),
  {
    override: true,
  },
);
