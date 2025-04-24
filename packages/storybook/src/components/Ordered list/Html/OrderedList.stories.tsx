import { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import { OrderedList, OrderedListItem } from '@utrecht/component-library-react/dist/css-module';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes } from '../_OrderedList';

const meta = {
  title: 'Components/Ordered list/Html Implementation',
  id: 'html-ordered-list',
  component: OrderedList,
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
} satisfies Meta<typeof OrderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultOrderedList: Story = {
  args: {
    children: [
      <OrderedListItem key="li-1">List item 1</OrderedListItem>,
      <OrderedListItem key="li-2">List item 2</OrderedListItem>,
      <OrderedListItem key="li-3">List item 3</OrderedListItem>,
    ],
  },
};

export const NestedOrderedList: Story = {
  args: {
    children: [
      <OrderedListItem key="li-4">List item 1</OrderedListItem>,
      <OrderedListItem key="li-5">
        List item 2
        <OrderedList>
          <OrderedListItem>Nested List item 1</OrderedListItem>
          <OrderedListItem>Nested List item 2</OrderedListItem>
        </OrderedList>
      </OrderedListItem>,
      <OrderedListItem key="li-6">List item 3</OrderedListItem>,
    ],
  },
};
