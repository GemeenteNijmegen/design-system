import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  title: 'Components/Separator/React Implementation',
  id: 'react-separator',
  component: Separator,
  argTypes: {},
  args: {},
  parameters: {
    status: {
      type: 'BETA',
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Separator',
};
