import type { Meta, StoryObj } from '@storybook/react';
import { AlertStory, argTypes } from '../_Alert';

const meta = {
  title: 'Components/Alert/React Implementation',
  id: 'react-alert',
  component: AlertStory,
  argTypes: argTypes,
  args: {},
  parameters: {
    status: {
      type: 'BETA',
    },
  },
} satisfies Meta<typeof AlertStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Negative: Story = {
  args: { ...Default.args, type: 'error' },
};

export const Positive: Story = {
  args: { ...Default.args, type: 'ok' },
};

export const Warning: Story = {
  args: { ...Default.args, type: 'warning' },
};
