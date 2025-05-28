import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import '@gemeentenijmegen/web-components/src/toolbar-button/toolbar-button.js';

const ToolbarButton = ({ label = '', type = '' }) => {
  return <nijmegen-toolbar-button type={type}>{label}</nijmegen-toolbar-button>;
};

/**
 * The toolbar button menu and search options implement JS for toggling multiple `aria-` attributes and is therefore available as web component.
 */
const meta = {
  title: 'Components/Toolbar button/Web Component Implementation',
  id: 'web-component-toolbar-button',
  component: ToolbarButton,
  argTypes: {
    label: {
      name: 'Content',
      description: 'Button text',
    },
    type: {
      name: 'Type',
      description: 'Button type',
      control: { type: 'select' },
      options: ['', 'menu', 'search'],
    },
  },
  args: {
    label: 'Toolbar button',
    type: '',
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

export const Default: Story = {
  args: {
    label: 'Toolbar button',
    type: '',
  },
};
export const Menu: Story = {
  args: {
    label: 'Menu',
    type: 'menu',
  },
};

export const Search: Story = {
  args: {
    label: 'Zoeken',
    type: 'search',
  },
};
