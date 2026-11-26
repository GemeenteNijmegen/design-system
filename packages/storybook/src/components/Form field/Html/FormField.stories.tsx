import { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, FormFieldStory } from '../_FormField';

const meta = {
  title: 'Components/Form field/Html Implementation',
  id: 'html-form-field',
  component: FormFieldStory,
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
} satisfies Meta<typeof FormFieldStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '7fcad79b-7b5a-496b-bc99-b33027924cf4',
    label: 'Username',
    description: 'Your username is your email address.',
    invalid: false,
    errorMessage: 'Enter a valid email address.',
    fieldType: 'Text input',
  },
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    invalid: true,
  },
};

export const NoDescription: Story = {
  args: {
    ...Default.args,
    description: '',
  },
};

export const InvalidNoDescription: Story = {
  args: {
    ...Default.args,
    description: '',
    invalid: true,
  },
};
