import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, ListOfLinksStory } from '../_ListOfLinks';

const meta = {
  title: 'Components/List of links/Html Implementation',
  id: 'html-listoflinks',
  argTypes: argTypes,
  component: ListOfLinksStory,
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
} satisfies Meta<typeof ListOfLinksStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'List of links item',
  args: {
    title: 'Hulp bij het huishouden',
    text: 'Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.',
    href: '/',
    headingSize: '4',
  },
};

export const None: Story = {
  name: 'Default',
  args: {
    title: 'Hulp bij het huishouden',
    text: 'Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.',
    href: '/',
    headingSize: 'default',
  },
};

export const SizeTwo: Story = {
  name: 'Heading 2',
  args: {
    title: 'Hulp bij het huishouden',
    text: 'Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.',
    href: '/',
    headingSize: '2',
  },
};

export const SizeThree: Story = {
  name: 'Heading 3',
  args: {
    title: 'Hulp bij het huishouden',
    text: 'Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.',
    href: '/',
    headingSize: '3',
  },
};

export const SizeFour: Story = {
  name: 'Heading 4',
  args: {
    title: 'Hulp bij het huishouden',
    text: 'Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.',
    href: '/',
    headingSize: '4',
  },
};

export const SizeFive: Story = {
  name: 'Heading 5',
  args: {
    title: 'Hulp bij het huishouden',
    text: 'Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.',
    href: '/',
    headingSize: '5',
  },
};
