import { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, TextAreaStory } from '../_TextArea';

const meta = {
  title: 'Components/Text area/Html Implementation',
  id: 'html-text-area',
  component: TextAreaStory,
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
} satisfies Meta<typeof TextAreaStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'c12c4a13-345c-4573-8f55-e5dba6a0bad7',
    placeholder: '',
    rows: 4,
    state: 'default',
  },
};

export const Hover: Story = {
  args: { ...Default.args, state: 'hover' },
};

export const FocusVisible: Story = {
  args: { ...Default.args, state: 'focus-visible' },
};

export const Disabled: Story = {
  args: { ...Default.args, state: 'disabled' },
};

export const Invalid: Story = {
  args: { ...Default.args, state: 'invalid' },
};

export const ReadOnly: Story = {
  args: { ...Default.args, state: 'read-only' },
};
