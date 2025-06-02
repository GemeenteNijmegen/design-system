import '@utrecht/heading-1-css';
import '@utrecht/heading-2-css';
import '@utrecht/heading-3-css';
import '@utrecht/heading-4-css';
import '@utrecht/heading-5-css';
import '@utrecht/heading-6-css';
import { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';

const HeadingStory = ({ level, children, ...props }: { level: 1 | 2 | 3 | 4 | 5 | 6; children: React.ReactNode }) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  const className = `utrecht-heading-${level}`;
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
};

const meta = {
  title: 'Components/Heading/Html Implementation',
  id: 'css-heading',
  component: HeadingStory,
  argTypes: {
    children: {
      name: 'Content',
      description: 'Heading text',
      defaultValue: 'Heading text',
      control: { type: 'text' },
    },
    level: {
      name: 'Level',
      description: 'Heading level',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      defaultValue: 1,
      table: {
        type: {
          summary: ['number'],
        },
      },
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    level: 1,
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
} satisfies Meta<typeof HeadingStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Heading',
};

export const Heading2: Story = {
  name: 'Heading 2',
  args: { level: 2 },
  argTypes: {
    level: {
      control: false,
    },
  },
};
export const Heading3: Story = {
  name: 'Heading 3',
  args: { level: 3 },
  argTypes: {
    level: {
      control: false,
    },
  },
};
export const Heading4: Story = {
  name: 'Heading 4',
  args: { level: 4 },
  argTypes: {
    level: {
      control: false,
    },
  },
};
export const Heading5: Story = {
  name: 'Heading 5',
  args: { level: 5 },
  argTypes: {
    level: {
      control: false,
    },
  },
};
export const Heading6: Story = {
  name: 'Heading 6',
  args: { level: 6 },
  argTypes: {
    level: {
      control: false,
    },
  },
};
