import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, DataSummaryStory } from '../_DataSummary';

const meta = {
  title: 'Components/Data summary/Html Implementation',
  id: 'html-datasummary',
  argTypes: argTypes,
  component: DataSummaryStory,
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
} satisfies Meta<typeof DataSummaryStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Data summary',
  args: {
    items: [
      {
        title: 'Heading',
        details: ['Lorem ipsum dolor sit amet'],
        link: {
          href: '#',
          text: 'Aanpassen',
          title: 'Link to adjust',
        },
      },
      {
        title: 'Heading',
        details: ['Consectetur adipiscing elit'],
      },
      {
        title: 'Heading',
        details: ['Sed do eiusmod'],
      },
    ],
  },
};
