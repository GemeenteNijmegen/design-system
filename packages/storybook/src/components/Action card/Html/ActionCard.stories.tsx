import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import { Button } from '@utrecht/component-library-react';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { ActioncardStory, argTypes } from '../_ActionCard';

const meta = {
  title: 'Components/Action Card/Html Implementation',
  id: 'css-action-card',
  component: ActioncardStory,
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
} satisfies Meta<typeof ActioncardStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    children: [
      <Button key="1" appearance="primary-action-button">
        Text
      </Button>,
      <Button key="2" appearance="subtle-button">
        Text
      </Button>,
    ],
  },
};
