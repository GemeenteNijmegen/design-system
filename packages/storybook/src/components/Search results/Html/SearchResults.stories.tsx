import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import { IconCalendarEvent } from '@tabler/icons-react';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, SearchResultsStory } from '../_SearchResults';

const meta = {
  title: 'Components/Search results/Html Implementation',
  id: 'html-searchResults',
  argTypes: argTypes,
  component: SearchResultsStory,
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
} satisfies Meta<typeof SearchResultsStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Search results',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    link: 'Text',
    url: '#',
    layout: 'horizontal',
    meta: [
      { children: 'Metadata', icon: <IconCalendarEvent aria-label="Metadata: " /> },
      { children: 'Metadata', icon: <IconCalendarEvent aria-label="Metadata: " /> },
      { children: 'Metadata', icon: <IconCalendarEvent aria-label="Metadata: " /> },
    ] as Array<{ children: string; icon: any }>,
  },
};

export const NoMeta: Story = {
  name: 'Search results - no metadata',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    link: 'Text',
    url: '#',
    layout: 'horizontal',
  },
};
