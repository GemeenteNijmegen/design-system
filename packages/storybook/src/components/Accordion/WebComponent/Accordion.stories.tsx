import { Meta, StoryObj } from '@storybook/react';
import { IconChevronDown } from '@tabler/icons-react';
import HtmlTransformer from '../../../../scripts/HtmlTransformer';
import { accordionData, AccordionStoryWebComponent, argTypes } from '../_Accordion';
import '@utrecht/component-library-react/dist/css-module';
import '@gemeentenijmegen/web-components/src/accordion/accordion.js';

const meta = {
  title: 'Components/Accordion/Web Component Implementation',
  id: 'web-component-accordion',
  component: AccordionStoryWebComponent,
  argTypes: argTypes,
  args: {
    label: '',
    body: '',
    icon: (
      <span className="utrecht-icon">
        <IconChevronDown />
      </span>
    ),
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
} satisfies Meta<typeof AccordionStoryWebComponent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Title',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`,
  },
};

export const AccordionWithSections: Story = {
  name: 'Accordion with sections',
  args: {
    sections: accordionData,
  },
};
