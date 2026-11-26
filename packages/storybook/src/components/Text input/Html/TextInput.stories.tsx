import { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, TextInputStory } from '../_TextInput';

const meta = {
  title: 'Components/Text input/Html Implementation',
  id: 'html-text-input',
  component: TextInputStory,
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
} satisfies Meta<typeof TextInputStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultTextInput: Story = {
  args: {
    id: '06c51b81-480a-46bb-938d-e20a4540a9c1',
    placeholder: '',
    state: 'default',
  },
};

export const HoverTextInput: Story = {
  args: { ...DefaultTextInput.args, state: 'hover' },
};

export const FocusVisibleTextInput: Story = {
  args: { ...DefaultTextInput.args, state: 'focus-visible' },
};

export const DisabledTextInput: Story = {
  args: { ...DefaultTextInput.args, state: 'disabled' },
};

export const InvalidTextInput: Story = {
  args: { ...DefaultTextInput.args, state: 'invalid' },
};

export const ReadOnlyTextInput: Story = {
  args: { ...DefaultTextInput.args, state: 'read-only' },
};
