import { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, UnorderedListStory } from '../_UnorderedList';

const meta = {
  title: 'Components/Unordered list/Html Implementation',
  id: 'html-unordered-list',
  component: UnorderedListStory,
  argTypes: argTypes,
  args: {
    children: '',
  },
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
} satisfies Meta<typeof UnorderedListStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultUnorderedList: Story = {
  args: {
    children: [
      <li key="1" className="nijmegen-unordered-list__item">
        List item 1
      </li>,
      <li key="2" className="nijmegen-unordered-list__item">
        List item 2
      </li>,
      <li key="3" className="nijmegen-unordered-list__item">
        List item 3
      </li>,
    ],
  },
};

export const NestedUnorderedList: Story = {
  args: {
    children: [
      <li key="1" className="nijmegen-unordered-list__item">
        List item 1
      </li>,
      <li key="2" className="nijmegen-unordered-list__item">
        List item 2
        <ul role="list" className="nijmegen-unordered-list">
          <li key="nested-1" className="nijmegen-unordered-list__item">
            Nested List item 1
          </li>
          <li key="nested-2" className="nijmegen-unordered-list__item">
            Nested List item 2
          </li>
        </ul>
      </li>,
      <li key="3" className="nijmegen-unordered-list__item">
        List item 3
      </li>,
    ],
  },
};
