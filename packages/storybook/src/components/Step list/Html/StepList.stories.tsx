import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import { Button, Link, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, StepListStory } from '../_StepList';

const meta = {
  title: 'Components/Step list/Html Implementation',
  id: 'html-steplist',
  argTypes: argTypes,
  component: StepListStory,
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
} satisfies Meta<typeof StepListStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Ordered Step list',
  args: {
    type: 'ol',
    items: [
      {
        title: 'Heading',
        content: [<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Paragraph>],
      },
      {
        title: 'Heading',
        content: [
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Paragraph>,
          <Button key="1" appearance="primary-action-button">
            Text
          </Button>,
          <Button key="2" appearance="secondary-action-button">
            Text
          </Button>,
        ],
      },
      {
        title: 'Heading',
        content: [
          <Paragraph>Different content for the third step. This can be any text you want.</Paragraph>,
          <Link href="#">Text</Link>,
        ],
      },
    ],
  },
};

export const Unordered: Story = {
  name: 'Unordered Step list',
  args: {
    type: 'ul',
    items: [
      {
        title: 'Heading',
        content: [<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Paragraph>],
      },
      {
        title: 'Heading',
        content: [
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Paragraph>,
          <Button key="1" appearance="primary-action-button">
            Text
          </Button>,
          <Button key="2" appearance="secondary-action-button">
            Text
          </Button>,
        ],
      },
      {
        title: 'Heading',
        content: [
          <Paragraph>Different content for the third step. This can be any text you want.</Paragraph>,
          <Link href="#">Text</Link>,
        ],
      },
    ],
  },
};
