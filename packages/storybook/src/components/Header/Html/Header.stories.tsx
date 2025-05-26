import type { Meta, StoryObj } from '@storybook/react';
import { HeaderStory } from './Header';
import HtmlTransformer from '../../../../scripts/HtmlTransformer';

const meta = {
  title: 'Components/Header/Html Implementation',
  id: 'html-header',
  component: HeaderStory,
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
  },
  args: {
    state: 'default',
    expanded: 'false',
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
} satisfies Meta<typeof HeaderStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Header',
  //   args: {
  //     href: 'https://example.com',
  //     title: 'Link',
  //     children: 'Link',
  //   },
};
