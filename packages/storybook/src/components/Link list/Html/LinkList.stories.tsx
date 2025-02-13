import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import { LinkList } from '@utrecht/component-library-react';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes } from '../_LinkList';

const meta = {
  title: 'Components/Link list/Html Implementation',
  id: 'html-link-list',
  component: LinkList,
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
} satisfies Meta<typeof LinkList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { href: '#', children: 'Link 1' },
      { href: '#', children: 'Link 2' },
      { href: '#', children: 'Link 3' },
    ],
  },
};
