import type { Meta, StoryObj } from '@storybook/react';
import HtmlTransformer from '../../../../scripts/HtmlTransformer';
import { HeaderStoryWebComponent } from '../Html/Header';

/**
 * When an `aria-expanded` attribute is set on the header items, the web component will automatically toggle the `expanded` state of the header items on click. So if you have a header item with a following mega-menu make sure you set the `aria-expanded="false"` attribute on the button and make sure that a div with the `nijmegen-header__panel` class is the next sibling of the button.
 */
const meta = {
  title: 'Components/Header/Web Component Implementation',
  id: 'web-component-header',
  component: HeaderStoryWebComponent,
  argTypes: {
    state: {
      name: 'State',
      description: 'Simulation of the state of the header items.',
      control: { type: 'select' },
      options: ['default', 'active', 'hover', 'focus-visible'],
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
} satisfies Meta<typeof HeaderStoryWebComponent>;

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
