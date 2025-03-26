import designTokens from '@gemeentenijmegen/design-tokens/dist/index.tokens.json';

function formatToken(token) {
  return {
    value: getDeepValue(designTokens, token),
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

export const TokenValue = ({ token }) => {
  const formatted = formatToken(token);
  return formatted.value;
};
