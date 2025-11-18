import type { Meta, StoryObj } from '@storybook/react';
import HtmlTransformer from '../../../../scripts/HtmlTransformer';
import { MobileMenuStoryWebComponent } from '../MobileMenu';

const meta = {
  title: 'Components/Mobile Menu/Web Component Implementation',
  id: 'web-component-mobile-menu',
  component: MobileMenuStoryWebComponent,
  argTypes: {},
  args: {},
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
} satisfies Meta<typeof MobileMenuStoryWebComponent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
