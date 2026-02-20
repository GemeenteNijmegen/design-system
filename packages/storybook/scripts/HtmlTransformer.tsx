import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';

export default (src: string, storyContext: StoryContext<any>): string => {
  // Ensure valid HTML in the Preview source
  const render =
    typeof storyContext.component === 'function'
      ? storyContext.component
      : typeof storyContext.component?.render === 'function'
        ? storyContext.component?.render
        : null;

  if (render) {
    return prettier.format(ReactDOMServer.renderToStaticMarkup(render(storyContext.args)), {
      parser: 'babel',
      plugins: [prettierBabel],
    });
  }
  return src;
};
