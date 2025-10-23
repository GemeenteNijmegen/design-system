import { Meta, StoryObj } from '@storybook/react';
import { OrderedList, OrderedListItem } from '@utrecht/component-library-react/dist/css-module';
import { argTypes } from '../_OrderedList';
import '@gemeentenijmegen/components-css';

const meta = {
  title: 'Components/Ordered list/React Implementation',
  id: 'react-ordered-list',
  component: OrderedList,
  argTypes: argTypes,
  args: {
    children: '',
  },
  parameters: {
    status: {
      type: 'BETA',
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
