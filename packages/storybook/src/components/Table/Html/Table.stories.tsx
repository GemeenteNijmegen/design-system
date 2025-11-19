import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, TableStory } from '../_Table';

const meta = {
  title: 'Components/Table/Html Implementation',
  id: 'html-table',
  argTypes: argTypes,
  component: TableStory,
  args: {},
  parameters: {
    status: {
      type: 'BETA',
    },
    docs: {
      source: {
        transform: (src: string, storyContext: StoryContext<any>): string => {
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
        },
      },
    },
  },
} satisfies Meta<typeof TableStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Table',
  args: {
    fullTable: true,
    columns: [
      {
        title: 'Wijk',
        alignEnd: false,
        children: ['Nijmegen-Oost', 'Dukenburg', 'Lindenholt', 'Nijmegen-Noord'],
      },
      {
        title: 'Afvalsoort',
        alignEnd: false,
        children: ['Restafval', 'Papier & karton', 'GFT', 'Grofvuil'],
      },
      {
        title: 'Ophaaldag',
        alignEnd: false,
        children: ['Maandag', 'Woensdag', 'Donderdag', 'Maandag'],
      },
    ],
  },
};

export const Content: Story = {
  name: 'Table content',
  args: {
    fullTable: true,
    columns: [
      {
        title: 'Wijk',
        alignEnd: false,
        children: [
          '<a href="/" class="utrecht-link utrecht-link--html-a" title="link">Nijmegen-Oost</a>',
          '<a href="/" class="utrecht-link utrecht-link--html-a" title="link">Dukenburg</a>',
          '<a href="/" class="utrecht-link utrecht-link--html-a" title="link">Lindenholt</a>',
          '<a href="/" class="utrecht-link utrecht-link--html-a" title="link">Nijmegen-Noord</a>',
        ],
      },
      {
        title: 'Afvalsoort',
        alignEnd: false,
        children: ['Restafval', 'Papier & karton', 'GFT', 'Grofvuil'],
      },
      {
        title: 'Ophaaldag',
        alignEnd: false,
        children: ['Maandag', 'Woensdag', 'Donderdag', 'Maandag'],
      },
    ],
  },
};

export const End: Story = {
  name: 'Table alignment',
  args: {
    fullTable: true,
    columns: [
      {
        title: 'Wijk',
        alignEnd: false,
        children: ['Nijmegen-Oost', 'Dukenburg', 'Lindenholt', 'Nijmegen-Noord'],
      },
      {
        title: 'Afvalsoort',
        alignEnd: false,
        children: ['Restafval', 'Papier & karton', 'GFT', 'Grofvuil'],
      },
      {
        title: 'Ophaaldag',
        alignEnd: true,
        children: ['Maandag', 'Woensdag', 'Donderdag', 'Maandag'],
      },
    ],
  },
};
