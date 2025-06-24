import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { AlertStory, argTypes } from '../_Alert';

const meta = {
  title: 'Components/Alert/Html Implementation',
  id: 'html-alert',
  component: AlertStory,
  argTypes: argTypes,
  args: {},
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
} satisfies Meta<typeof AlertStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Negative: Story = {
  args: { ...Default.args, type: 'error' },
};

export const Positive: Story = {
  args: { ...Default.args, type: 'ok' },
};

export const Warning: Story = {
  args: { ...Default.args, type: 'warning' },
};
