import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@utrecht/component-library-react/dist/css-module';

const SeparatorDiv = () => <div role="separator" aria-hidden="true" className="utrecht-separator"></div>;

interface SeparatorStoryProps {
  element?: 'div' | 'separator';
}

const SeparatorStory = ({ element }: SeparatorStoryProps) => (element === 'div' ? <SeparatorDiv /> : <Separator />);

const meta = {
  title: 'Components/Separator/React Implementation',
  id: 'react-separator',
  component: SeparatorStory,
  argTypes: {
    element: {
      control: { type: 'select' },
      options: ['div', 'separator'],
    },
  },
  args: {
    element: 'separator',
  },
  parameters: {
    status: {
      type: 'BETA',
    },
  },
} satisfies Meta<typeof SeparatorStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Separator',
};

export const SeparatorDivSupport: Story = {
  args: {
    element: 'div',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Markup with a `<div>` element, with additional attributes to give the correct ARIA role. Styling via `utrecht-separator` class name.',
      },
    },
  },
};
