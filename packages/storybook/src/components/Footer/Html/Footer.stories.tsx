import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, FooterStory } from '../_Footer';

const meta = {
  title: 'Components/Footer/Html Implementation',
  id: 'html-footer',
  argTypes: argTypes,
  component: FooterStory,
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
} satisfies Meta<typeof FooterStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Footer',
  args: {
    show_main: true,
    show_sub: true,
  },
};

export const Main: Story = {
  name: 'Main footer',
  args: {
    show_main: true,
    show_sub: false,
  },
};

export const Sub: Story = {
  name: 'Sub footer',
  args: {
    show_main: false,
    show_sub: true,
  },
};
