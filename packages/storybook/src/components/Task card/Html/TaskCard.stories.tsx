import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, TaskCardStory } from '../_TaskCard';

const meta = {
  title: 'Components/Task card/Html Implementation',
  id: 'html-taskCard',
  argTypes: argTypes,
  component: TaskCardStory,
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
} satisfies Meta<typeof TaskCardStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'TaskCard',
  args: {
    title: 'Task',
    link: 'Text',
    href: '#example',
  },
};

export const Date: Story = {
  name: 'With date',
  args: {
    title: 'Task',
    link: 'Text',
    href: '#example',
    date: '29-09-2026',
    dateTime: '2026-07-15T13:42:10.348Z',
  },
};

export const DateReletave: Story = {
  name: 'With date relative',
  args: {
    title: 'Task',
    link: 'Text',
    href: '#example',
    date: 'vóór 2 oktober 2026',
    dateTime: '2026-07-15T13:42:10.348Z',
  },
};

export const DateWarning: Story = {
  name: 'With date warning',
  args: {
    title: 'Task',
    link: 'Text',
    href: '#example',
    date: 'nog 2 dagen',
    dateTime: '2026-07-15T13:42:10.348Z',
    dateWarning: true,
  },
};
