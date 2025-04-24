import { Meta, StoryObj } from '@storybook/react';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react/dist/css-module';
import { argTypes } from '../_UnorderedList';

const meta = {
  title: 'Components/Unordered list/React Implementation',
  id: 'react-unordered-list',
  component: UnorderedList,
  argTypes: argTypes,
  args: {
    children: '',
  },
  parameters: {
    status: {
      type: 'BETA',
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
