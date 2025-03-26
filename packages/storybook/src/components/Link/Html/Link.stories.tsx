import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import { IconArrowRight, IconCalendarEvent } from '@tabler/icons-react';
import { Link } from '@utrecht/component-library-react/dist/css-module';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes } from '../_Link';

const meta = {
  title: 'Components/Link/Html Implementation',
  id: 'html-link',
  component: Link,
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
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Link',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: 'Link',
  },
};

export const IconStart: Story = {
  name: 'Icon start',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: [
      <span className="utrecht-icon">
        <IconCalendarEvent stroke={2} />
      </span>,
      <span>Text</span>,
    ],
  },
};

export const IconEnd: Story = {
  name: 'Icon end',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: [
      <span>Text</span>,
      <span className="utrecht-icon">
        <IconArrowRight stroke={2} />
      </span>,
    ],
  },
};
