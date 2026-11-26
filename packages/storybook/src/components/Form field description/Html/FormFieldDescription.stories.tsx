import { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, FormFieldDescriptionStory } from '../_FormFieldDescription';

const meta = {
  title: 'Components/Form field description/Html Implementation',
  id: 'html-form-field-description',
  component: FormFieldDescriptionStory,
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
} satisfies Meta<typeof FormFieldDescriptionStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultFormFieldDescription: Story = {
  args: {
    id: '0427f759-009c-43ad-8e1c-3d7b9982a133',
    children: 'Your password must contain at least 16 characters.',
  },
};
