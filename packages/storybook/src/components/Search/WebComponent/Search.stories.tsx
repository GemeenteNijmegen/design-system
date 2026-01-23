import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, SearchStoryWebComponent } from '../_Search';

const meta = {
  title: 'Components/Search/Web Component Implementation',
  id: 'web-component-search',
  argTypes: argTypes,
  component: SearchStoryWebComponent,
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
} satisfies Meta<typeof SearchStoryWebComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Search',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: false,
    full: false,
    readOnly: false,
    autocomplete: true,
    staticAutocomplete: false,
  },
};

export const Disabled: Story = {
  name: 'Search disabled',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: true,
    dark: false,
    full: false,
    readOnly: false,
    autocomplete: true,
    staticAutocomplete: false,
  },
};

export const ReadOnly: Story = {
  name: 'Search read only',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: false,
    full: false,
    readOnly: true,
    autocomplete: true,
    staticAutocomplete: false,
  },
};

export const Dark: Story = {
  name: 'Search dark mode',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: true,
    readOnly: false,
    autocomplete: true,
    staticAutocomplete: false,
  },
};
