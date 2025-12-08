import type { Meta, StoryObj } from '@storybook/react';
import '@utrecht/button-group-css';
import { IconExternalLink } from '@tabler/icons-react';
import { Button } from '@utrecht/component-library-react';
import { ButtonGroup } from '@utrecht/component-library-react/dist/css-module';
import '@gemeentenijmegen/components-css';
import { argTypes } from '../_ActionGroup';

const meta = {
  title: 'Components/Action Group/React Implementation',
  id: 'react-action-group',
  component: ButtonGroup,
  argTypes: argTypes,
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
        Opslaan en doorgaan
      </Button>,
      <Button key="2" appearance="secondary-action-button">
        Terug
      </Button>,
    ],
  },
};

export const DefaultVariant: Story = {
  args: {
    children: [
      <Button key="1" appearance="primary-action-button">
        Afspraak maken
        <IconExternalLink stroke={2} />
      </Button>,
      <Button key="2" appearance="subtle-button">
        Annuleren
      </Button>,
    ],
  },
};
