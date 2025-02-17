import '@gemeentenijmegen/design-tokens/dist/index.css';
import '@gemeentenijmegen/font/src/index.scss';
import './global.scss';
import { defineCustomElements } from '@gemeentenijmegen/web-components-stencil/loader/index.js';
import type { Preview, StoryContext } from '@storybook/react';

defineCustomElements();

const preview: Preview = {
  decorators: [
    (Story: any, storyContext: StoryContext<any>) => {
      // Hack to make current args for a story available in the transformSource of the docs addon
      storyContext.parameters['args'] = storyContext.args;

      return (
        <div className="utrecht-document nijmegen-theme">
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    controls: { expanded: false },
    status: {
      statuses: {
        PRODUCTION: {
          background: '#088008',
          color: '#ffffff',
          description:
            'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
        },
        BETA: {
          background: '#3065ee',
          color: '#ffffff',
          description:
            'Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely.',
        },
        ALPHA: {
          background: '#e0bc2e',
          color: '#000000',
          description:
            'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
        },
        'WORK IN PROGRESS': {
          background: '#cc0000',
          color: '#ffffff',
          description:
            'Do not use in production. Does not follow semantic versioning and any published packages are for internal use only.',
        },
      },
    },
    options: {
      storySort: {
        method: 'configure',
        includeNames: true,
        order: [
          'introduction',
          ['Introductie', 'Developer introduction'],
          'foundations',
          ['Icons', ['Documentatie', 'Developer documentation']],
          'Components',
          'Templates',
        ],
      },
    },
  },
};

export default preview;
