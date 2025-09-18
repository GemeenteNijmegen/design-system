import type { Meta, StoryObj } from '@storybook/react';
import { HeaderStoryHtml } from './Header';
import HtmlTransformer from '../../../../scripts/HtmlTransformer';

const meta = {
  title: 'Components/Header/Html Implementation',
  id: 'html-header',
  component: HeaderStoryHtml,
  argTypes: {
    state: {
      name: 'State',
      description: 'Simulation of the state of the header items.',
      control: { type: 'select' },
      options: ['default', 'active', 'hover', 'focus-visible'],
    },
    expanded: {
      name: 'Aria expanded',
      description: 'Simulation of the aria-expanded attribute of all items in the header which can expand.',
      control: { type: 'select' },
      options: ['false', 'true'],
    },
    variant: {
      name: 'Variant',
      control: { type: 'select' },
      options: ['default', 'funnel', 'account'],
      table: { disable: true },
    },
    account: {
      name: 'Account',
      control: { type: 'boolean' },
      table: { disable: true },
    },
  },
  args: {
    state: 'default',
    expanded: 'false',
    variant: '',
  },
  parameters: {
    status: {
      type: 'BETA',
    },
    docs: {
      source: {
        transform: HtmlTransformer,
      },
    },
  },
} satisfies Meta<typeof HeaderStoryHtml>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Header',
  args: {
    variant: 'default',
  },
};

export const Funnel: Story = {
  name: 'Funnel',
  args: {
    variant: 'funnel',
    account: false,
  },
};

export const FunnelAccount: Story = {
  name: 'Funnel ingelogd',
  args: {
    variant: 'funnel',
    account: true,
  },
};

export const Account: Story = {
  name: 'Mijn omgeving',
  args: {
    variant: 'account',
    account: true,
  },
};
