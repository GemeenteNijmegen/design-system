/* eslint-disable */
const StyleDictionary = require('style-dictionary').extend('style-dictionary.config.json');
/* eslint-enable */

StyleDictionary.registerTransform({
  name: 'size/customPxToRem',
  type: 'value',
  matcher: function (prop) {
    return prop.type === 'spacing' && prop.original.value.includes('px');
  },
  transformer: function (prop) {
    const px = parseInt(prop.original.value, 10);
    const ratio = 1 / 16;
    const rem = px * ratio;
    return `${rem}rem`;
  },
});

StyleDictionary.buildAllPlatforms();
