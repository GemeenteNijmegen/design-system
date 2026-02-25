import type { Meta, StoryObj } from '@storybook/react';
import '@utrecht/components/button/css/index.scss';
import '@utrecht/components/icon/css/index.scss';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, ButtonStory, defaultArgs } from './Button';

const meta = {
  title: 'Components/Button/Html Implementation',
  id: 'css-button',
  component: ButtonStory,
  argTypes: argTypes,
  args: defaultArgs,
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
} satisfies Meta<typeof ButtonStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Primary',
  args: { children: 'Primaire button', appearance: 'Primary' },
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
};

export const Secondary: Story = {
  args: { children: 'Secundaire button', appearance: 'Secondary' },
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
};

export const Subtle: Story = {
  args: { children: 'Aanvullende button', appearance: 'Subtle' },
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
};

export const IconOnly: Story = {
  args: {
    children: '',
    appearance: 'Primary',
    iconBeginning: 'Tabler example',
    iconOnly: true,
  },
  argTypes: {
    appearance: {
      table: {
        disable: true,
      },
    },
  },
};
