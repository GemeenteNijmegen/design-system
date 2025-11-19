import type { Meta, StoryObj } from '@storybook/react';
import HtmlTransformer from '../../../../scripts/HtmlTransformer';
import { MobileMenuStoryHtml } from '../MobileMenu';

const meta = {
  title: 'Components/Mobile Menu/Html Implementation',
  id: 'html-mobile-menu',
  component: MobileMenuStoryHtml,
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
} satisfies Meta<typeof MobileMenuStoryHtml>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
