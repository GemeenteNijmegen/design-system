import { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react/dist/css-module';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes } from '../_UnorderedList';

const meta = {
  title: 'Components/Unordered list/Html Implementation',
  id: 'html-unordered-list',
  component: UnorderedList,
  argTypes: argTypes,
  args: {
    children: '',
  },
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
} satisfies Meta<typeof UnorderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultUnorderedList: Story = {
  args: {
    children: [
      <UnorderedListItem key="li-1">List item 1</UnorderedListItem>,
      <UnorderedListItem key="li-2">List item 2</UnorderedListItem>,
      <UnorderedListItem key="li-3">List item 3</UnorderedListItem>,
    ],
  },
};

export const NestedUnorderedList: Story = {
  args: {
    children: [
      <UnorderedListItem key="li-4">List item 1</UnorderedListItem>,
      <UnorderedListItem key="li-5">
        List item 2
        <UnorderedList>
          <UnorderedListItem>Nested List item 1</UnorderedListItem>
          <UnorderedListItem>Nested List item 2</UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>,
      <UnorderedListItem key="li-6">List item 3</UnorderedListItem>,
    ],
  },
};
