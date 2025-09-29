import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, SkipLinkStory } from '../_SkipLink';

const meta = {
  title: 'Components/Skip link/Html Implementation',
  id: 'html-skiplink',
  component: SkipLinkStory,
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
} satisfies Meta<typeof SkipLinkStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    href: '#main',
    children: 'Ga naar hoofdinhoud',
    visibilty: true,
    focusVisible: false,
  },
};

export const Focus: Story = {
  name: 'Default focus',
  args: {
    href: '#main',
    children: 'Ga naar hoofdinhoud',
    visibilty: true,
    focusVisible: true,
  },
};

export const VisibleOnFocus: Story = {
  name: 'Visible on focus',
  args: {
    href: '#main',
    children: 'Ga naar hoofdinhoud',
    visibilty: false,
    focusVisible: false,
  },
};
