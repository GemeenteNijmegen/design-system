import { Meta, StoryObj } from '@storybook/react';
import { IconChevronDown } from '@tabler/icons-react';
import { AccordionProvider, AccordionSectionProps } from '@utrecht/component-library-react/dist/css-module';
import { ReactNode } from 'react';
import { accordionData, argTypes } from '../_Accordion';
import '@gemeentenijmegen/components-css';

interface AccordionStoryProps {
  label: string;
  body: ReactNode;
  expanded?: boolean;
  expandedAccordion?: boolean;
  icon?: ReactNode;
  sections?: AccordionSectionProps[];
}

const AccordionStory = ({ expanded, label, body, icon, sections }: AccordionStoryProps) => (
  <AccordionProvider icon={icon} sections={sections || [{ expanded, label, body }]} />
);

const meta = {
  title: 'Components/Accordion/React Implementation',
  id: 'react-accordion',
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
  },
  render: AccordionStory,
} satisfies Meta<AccordionStoryProps>;

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
  args: {
    sections: accordionData,
  },
  name: 'Accordion with sections',
};
