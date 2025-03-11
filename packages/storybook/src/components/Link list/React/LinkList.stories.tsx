import type { Meta, StoryObj } from '@storybook/react';
import { IconChevronRight } from '@tabler/icons-react';
import { LinkList } from '@utrecht/component-library-react/dist/css-module';
import { argTypes } from '../_LinkList';

const meta = {
  title: 'Components/Link list/React Implementation',
  id: 'react-link-list',
  component: LinkList,
  argTypes: argTypes,
  args: {},
  parameters: {
    status: {
      type: 'BETA',
    },
  },
} satisfies Meta<typeof LinkList>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Link list',
  args: {
    icon: () => <IconChevronRight stroke={2} />,
    links: [
      { children: 'Link 1', href: '#' },
      { children: 'Link 2', href: '#' },
      { children: 'Link 3', href: '#' },
    ],
  },
};
