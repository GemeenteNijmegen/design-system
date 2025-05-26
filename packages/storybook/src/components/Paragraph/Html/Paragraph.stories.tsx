import { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import { Paragraph } from '@utrecht/component-library-react';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';

const meta = {
  title: 'Components/Paragraph/Html Implementation',
  id: 'css-paragraph',
  component: Paragraph,
  argTypes: {
    children: {
      description: 'Content of the paragraph.',
      control: 'text',
    },
    lead: {
      description: 'Lead paragraph',
      control: 'boolean',
    },
    small: {
      description: 'Paragraph with small print',
      control: 'boolean',
    },
  },
  args: {
    children: '',
    lead: false,
    small: false,
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
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-paragraph` class name.',
      },
    },
  },
};

export const Lead: Story = {
  args: {
    ...Default.args,
    lead: true,
  },
};

export const SmallPrint: Story = {
  args: {
    ...Default.args,
    small: true,
  },
  name: 'Small print',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-paragraph` and `.utrecht-paragraph--small` modifier class name',
      },
    },
  },
};
