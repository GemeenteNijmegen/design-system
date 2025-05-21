import '@gemeentenijmegen/design-tokens/dist/index.css';
import '@gemeentenijmegen/font/src/index.scss';
import { html } from 'lit';

/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story, storyContext) => {
      storyContext.parameters['args'] = storyContext.args;
      return html` <div class="utrecht-document nijmegen-theme">${story()}</div> `;
    },
  ],
};

export default preview;
