import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, ImageStory } from '../_Image';

const meta = {
  title: 'Components/Image/Html Implementation',
  id: 'html-image',
  component: ImageStory,
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
} satisfies Meta<typeof ImageStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Image',
  args: {
    src: 'https://picsum.photos/640/360/',
    alt: 'Example image description',
  },
};

export const Aspect_16_9: Story = {
  name: 'Image aspect ratio 16:9',
  args: {
    src: 'https://picsum.photos/640/360/',
    alt: 'Example image description',
    aspectRatio: 'nijmegen-image--aspect-16-9',
  },
};

export const Aspect_1_1: Story = {
  name: 'Image aspect ratio 1:1',
  args: {
    src: 'https://picsum.photos/640/360/',
    alt: 'Example image description',
    aspectRatio: 'nijmegen-image--aspect-1-1',
  },
};

export const Aspect_4_3: Story = {
  name: 'Image aspect ratio 4:3',
  args: {
    src: 'https://picsum.photos/640/360/',
    alt: 'Example image description',
    aspectRatio: 'nijmegen-image--aspect-4-3',
  },
};
