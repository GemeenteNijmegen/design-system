import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import clsx from 'clsx';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import '@gemeentenijmegen/components-css';

const icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M16 3l0 4" />
      <path d="M8 3l0 4" />
      <path d="M4 11l16 0" />
      <path d="M8 15h2v2h-2z" />
    </svg>
  );
};

const ToolbarButton = ({ children = '', state = '' }) => {
  return (
    <button
      className={clsx('nijmegen-toolbar-button', {
        'nijmegen-toolbar-button--active': state === 'active',
        'nijmegen-toolbar-button--hover': state === 'hover',
        'nijmegen-toolbar-button--focus-visible': state === 'focus-visible',
      })}
    >
      {icon()}
      {children}
    </button>
  );
};

const argTypes = {
  state: {
    name: 'State',
    description:
      'State of the toolbar button, in the example code a state class is set for simulating the state appearance. When implementing this component it is not needed to set a state class, the state will be set by the browser and the styles will automatic apply.',
    control: { type: 'select' },
    options: ['default', 'active', 'hover', 'focus-visible'],
  },
  children: {
    name: 'Children',
    description: 'The content of the button, in this case a menu icon and text.',
    control: { type: 'text' },
  },
};

const meta = {
  title: 'Components/Toolbar button/Html Implementation',
  id: 'html-toolbar-button',
  component: ToolbarButton,
  argTypes: argTypes,
  args: {
    children: 'Text',
  },
  parameters: {
    status: {
      type: 'BETA',
    },
    docs: {
      source: {
        transform: (src: string, storyContext: StoryContext<any>): string => {
          // Ensure valid HTML in the Preview source
          const render =
            typeof storyContext.component === 'function'
              ? storyContext.component
              : typeof storyContext.component?.render === 'function'
                ? storyContext.component?.render
                : null;

          if (render) {
            return prettier.format(ReactDOMServer.renderToStaticMarkup(render(storyContext.args)), {
              parser: 'babel',
              plugins: [prettierBabel],
            });
          }
          return src;
        },
      },
    },
  },
} satisfies Meta<typeof ToolbarButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
