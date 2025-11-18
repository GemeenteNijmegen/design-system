import designTokens from '@gemeentenijmegen/design-tokens/dist/index.tokens.json';
import designTokensDark from '@gemeentenijmegen/design-tokens-dark/dist/index.tokens.json';
import { ColorItem, ColorPalette } from '@storybook/addon-docs';

function formatToken(token) {
  return {
    tokenColor: getDeepValue(designTokens, token),
    tokenColorDark: getDeepValue(designTokensDark, token),
    cssvar: token.replaceAll('.', '-').replaceAll('[', '-').replaceAll(']', '').replaceAll('`', ''),
    tokenName: token.replaceAll('[', '.').replaceAll(']', '').replaceAll('`', ''),
  };
}

function getDeepValue(obj, path) {
  /* eslint-disable */
  for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
    obj = obj[path[i]];
  }
  return obj;
  /* eslint-enable */
}

export const CustomColorItem = ({ token }) => {
  let tokenObject = formatToken(token);
  return (
    <ColorItem
      title={tokenObject.tokenName}
      subtitle={`var(--${tokenObject.cssvar})`}
      colors={{ hex: tokenObject.tokenColor }}
    />
  );
};

export const ThemedColorItem = ({ token }) => {
  let tokenObject = formatToken(token);
  return (
    <ColorItem
      title={tokenObject.tokenName}
      subtitle={`var(--${tokenObject.cssvar})`}
      colors={{ light: tokenObject.tokenColor, 'dark (beta)': tokenObject.tokenColorDark }}
    />
  );
};
export const BaseColorPalette = ({ color }) => {
  return (
    <ColorPalette>
      {Object.entries(designTokens.nijmegen.color[color]).map((colorObject, i) => (
        <ColorItem
          key={i}
          title={`nijmegen.color.${color}.${colorObject[0]}`}
          subtitle={`var(--nijmegen-color-${color}-${colorObject[0]})`}
          colors={{ hex: colorObject[1] }}
        />
      ))}
    </ColorPalette>
  );
};
