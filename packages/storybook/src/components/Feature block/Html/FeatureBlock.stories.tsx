import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, FeatureBlockStory } from '../_FeatureBlock';

const meta = {
  title: 'Components/Feature block/Html Implementation',
  id: 'html-FeatureBlock',
  argTypes: argTypes,
  component: FeatureBlockStory,
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
} satisfies Meta<typeof FeatureBlockStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Feature block',
  args: {
    preHeading: 'Pre-heading',
    heading: 'Heading',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Placeholder image',
    show_button: true,
    button_text: 'Button',
    button_href: '#',
  },
};

export const NoButton: Story = {
  name: 'Feature block - no button',
  args: {
    preHeading: 'Pre-heading',
    heading: 'Heading',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Placeholder image',
    show_button: false,
    button_text: 'Button',
    button_href: '#',
  },
};
