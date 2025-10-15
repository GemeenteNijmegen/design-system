import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, PaginationStory } from '../_Pagination';

const meta = {
  title: 'Components/Pagination/Html Implementation',
  id: 'html-pagination',
  argTypes: argTypes,
  component: PaginationStory,
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
} satisfies Meta<typeof PaginationStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Pagination',
  args: {
    next: {
      href: '',
      disabled: false,
    },
    prev: {
      href: '',
      disabled: true,
    },
    ellipses: false,
  },
};

export const Ellipses: Story = {
  name: 'Pagination with ellipses',
  args: {
    next: {
      href: '',
      disabled: false,
    },
    prev: {
      href: '',
      disabled: true,
    },
    ellipses: true,
  },
};
