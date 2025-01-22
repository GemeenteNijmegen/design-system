import type { Meta, StoryObj } from '@storybook/react';
import '@utrecht/components/button/css/index.scss';
import '@utrecht/components/icon/css/index.scss';
import '@utrecht/button-group-css';
import { Button } from '@utrecht/component-library-react';
import { ButtonGroup } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  title: 'Components/Button Group/React Implementation',
  id: 'react-button-group',
  component: ButtonGroup,
  argTypes: {
    direction: {
      description: 'Layout of the button group',
      control: 'select',
      options: {
        '': undefined,
        column: 'column',
        row: 'row',
      },
      children: {
        name: 'Content',
        description: 'Button text',
        defaultValue: '',
      },
    },
  },
  args: {},
  parameters: {
    status: {
      type: 'BETA',
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Button key="1" appearance="primary-action-button">
        Save and continue
      </Button>,
      <Button key="2" appearance="secondary-action-button">
        Back
      </Button>,
    ],
  },
};
