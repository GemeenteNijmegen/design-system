import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, SideNavigationStory } from '../_SideNavigation';

const meta = {
  title: 'Components/Side navigation/Html Implementation',
  id: 'html-side-navigation',
  component: SideNavigationStory,
  argTypes: argTypes,
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
} satisfies Meta<typeof SideNavigationStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    items: [
      { text: 'Option #1', href: '#' },
      { text: 'Option #2', href: '#' },
      { text: 'Option #3', href: '#' },
    ],
  },
};
