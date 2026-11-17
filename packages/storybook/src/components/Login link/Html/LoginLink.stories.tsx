import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, defaultArgs, LoginLinkStory } from '../_LoginLink';

const meta = {
  title: 'Components/Login link/Html Implementation',
  id: 'html-loginlink',
  component: LoginLinkStory,
  argTypes: argTypes,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'BETA',
    },
    docs: {
      source: {
        transform: (src: string, storyContext: StoryContext<any>): string => {
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
} satisfies Meta<typeof LoginLinkStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'digid',
  },
};

export const EHerkenning: Story = {
  args: {
    variant: 'eherkenning',
  },
};

export const EIDAS: Story = {
  args: {
    variant: 'eidas',
  },
};
