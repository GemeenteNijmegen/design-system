import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { HeaderStory } from './Header';

const meta = {
  title: 'Components/Header/Html Implementation',
  id: 'html-header',
  component: HeaderStory,
  argTypes: {
    state: {
      name: 'State',
      description: 'Simulation of the state of the header items.',
      control: { type: 'select' },
      options: ['default', 'active', 'hover', 'focus-visible'],
    },
    expanded: {
      name: 'Aria expanded',
      description: 'Simulation of the aria-expanded attribute of all items in the header which can expand.',
      control: { type: 'select' },
      options: ['false', 'true'],
    },
  },
  args: {
    state: 'default',
    expanded: 'false',
  },
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
} satisfies Meta<typeof HeaderStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Header',
  //   args: {
  //     href: 'https://example.com',
  //     title: 'Link',
  //     children: 'Link',
  //   },
};
