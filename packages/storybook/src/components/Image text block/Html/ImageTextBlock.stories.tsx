import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, ImageTextBlockStory } from '../_ImageTextBlock';
import '@utrecht/component-library-react/dist/css-module';

const meta = {
  title: 'Components/Image text block/Html Implementation',
  id: 'html-imagetextblock',
  component: ImageTextBlockStory,
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
} satisfies Meta<typeof ImageTextBlockStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Image text block',
  args: {
    reverse: false,
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    children: [
      <Button key="1" appearance="primary-action-button">
        Text
      </Button>,
      <Button key="2" appearance="secondary-action-button">
        Text
      </Button>,
    ],
    imageSrc: 'https://picsum.photos/640/360/',
    imageAlt: 'Example image description',
    imageAspectRatio: 'nijmegen-image--aspect-4-3',
  },
};

export const Reverse: Story = {
  name: 'Image text block reverse',
  args: {
    reverse: true,
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    children: [
      <Button key="1" appearance="primary-action-button">
        Text
      </Button>,
      <Button key="2" appearance="secondary-action-button">
        Text
      </Button>,
    ],
    imageSrc: 'https://picsum.photos/640/360/',
    imageAlt: 'Example image description',
    imageAspectRatio: 'nijmegen-image--aspect-4-3',
  },
};
