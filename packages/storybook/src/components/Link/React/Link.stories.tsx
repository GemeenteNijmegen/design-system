import type { Meta, StoryObj } from '@storybook/react';
import { IconArrowRight, IconCalendarEvent } from '@tabler/icons-react';
import { Link } from '@utrecht/component-library-react/dist/css-module';
import { argTypes } from '../_Link';

const meta = {
  title: 'Components/Link/React Implementation',
  id: 'react-link',
  component: Link,
  argTypes: argTypes,
  args: {},
  parameters: {
    status: {
      type: 'BETA',
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Link',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: 'Link',
  },
};

export const IconStart: Story = {
  name: 'Icon start',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: [
      <span className="utrecht-icon">
        <IconCalendarEvent stroke={2} />
      </span>,
      <span>Text</span>,
    ],
  },
};

export const IconEnd: Story = {
  name: 'Icon end',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: [
      <span>Text</span>,
      <span className="utrecht-icon">
        <IconArrowRight stroke={2} />
      </span>,
    ],
  },
};
