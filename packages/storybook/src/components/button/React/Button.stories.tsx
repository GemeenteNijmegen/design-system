import type { Meta, StoryObj } from '@storybook/react';
import { IconCalendarEvent } from '@tabler/icons-react';
import { Button, ButtonProps } from '@utrecht/component-library-react';
import '@utrecht/components/button/css/index.scss';

interface ButtonStoryProps extends ButtonProps {
  icon?: string;
  children: string;
  appearance?: string;
}

const ButtonStory = ({ children, icon, ...props }: ButtonStoryProps) => {
  const IconElement = () => {
    if (icon === 'Tabler example') {
      return <IconCalendarEvent stroke={2} />;
    } else if (icon === 'OpenGemeente example') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="currentColor"
          stroke="currentColor"
        >
          <path d="M29 34c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1Zm-6-5h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm0-6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm7 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm0 6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm-14 6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm0-12h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm0 6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm6.7 7.46c.37.32.93.31 1.29-.02l3.22-2.94c.41-.37.42-1.01.03-1.41-.38-.38-1-.38-1.38 0l-2.5 2.5-.73-.73a.966.966 0 0 0-1.37 0c-.4.39-.37 1.04.05 1.4l1.39 1.19ZM37.02 8h-5V6.99c0-.55-.44-.99-.99-.99H31c-.55 0-.99.44-.99.99V11c0 .55.45 1 1 1s1-.45 1-1v-1h5v4H11.03v-4h1.99c.55 0 1-.45 1-1s-.45-1-1-1h-2c-1.11 0-2 .89-2 1.99L9 38.02c0 2.2 1.78 3.99 3.98 3.99h22.04c2.21 0 4-1.79 4-4V10c0-1.1-.9-2-2-2ZM13.01 40c-1.1 0-1.99-.89-1.99-1.99V16h26v22c0 1.1-.9 2-2 2H13.01Zm3.02-29c0 .55.45 1 1 1s1-.45 1-1v-1h9c.55 0 1-.45 1-1s-.45-1-1-1h-9V6.99c0-.55-.44-.99-.99-.99s-.99.44-.99.99V8h-.02v3Z" />
        </svg>
      );
    }
    return null;
  };
  if (IconElement) {
    IconElement.displayName = 'IconElement';
  }
  return (
    <Button icon={IconElement ? <IconElement /> : null} {...props}>
      {children}
    </Button>
  );
};

const argTypes = {
  children: {
    name: 'Content',
    description: 'Button text',
    defaultValue: '',
  },
  appearance: {
    name: 'Variation',
    description: 'Button variations',
    control: { type: 'select' },
    options: ['primary-action-button', 'secondary-action-button', 'subtle-button'],
    defaultValue: '',
    table: {
      type: {
        summary: ['string'],
      },
    },
  },
  className: {
    name: 'State',
    description: 'Differt states of the button',
    control: { type: 'select' },
    defaultValue: '',
    table: {
      type: {
        summary: ['string'],
      },
    },
    options: [
      '',
      'utrecht-button--active',
      'utrecht-button--hover',
      'utrecht-button--hover utrecht-button--focus utrecht-button--focus-visible',
      'utrecht-button--focus',
      'utrecht-button--focus utrecht-button--focus-visible',
    ],
  },
  disabled: {
    name: 'Disabled',
    description: 'Disable the button',
    control: { type: 'boolean' },
    defaultValue: false,
    table: {
      type: {
        summary: ['boolean'],
      },
    },
  },
  icon: {
    name: 'Icon (start)',
    description: 'Icon at the start of the button (no end supported for the Utrecht Button React component)',
    control: { type: 'select' },
    defaultValue: '',
    options: ['', 'Tabler example', 'OpenGemeente example'],
  },
};

const meta = {
  title: 'Components/Button/React Implementation',
  id: 'button',
  component: ButtonStory,
  argTypes: argTypes,
  args: {},
  parameters: {
    status: {
      type: 'BETA',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Primary',
  args: { children: 'Button' },
};

export const Secondary: Story = {
  args: { children: 'Secundaire button', appearance: 'secondary-action-button' },
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
};

export const Subtle: Story = {
  args: { children: 'Aanvullende button', appearance: 'subtle-button' },
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
};
