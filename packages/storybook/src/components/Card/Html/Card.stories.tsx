import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import { IconCalendarEvent, IconClock, IconMapPin } from '@tabler/icons-react';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, CardStory } from '../_Card';

const meta = {
  title: 'Components/Card/Html Implementation',
  id: 'html-card',
  argTypes: argTypes,
  component: CardStory,
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
} satisfies Meta<typeof CardStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Card news',
  args: {
    title: 'Ondernemers opgelet',
    text: 'Ondernemers en bedrijven uit Nijmegen opgelet!',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description',
    date: '7 februari 2024',
    meta: [
      { children: 'Meta 1', icon: <IconCalendarEvent /> },
      { children: 'Meta 2', icon: <IconClock /> },
      { children: 'Meta 3', icon: <IconMapPin /> },
    ] as Array<{ children: string; icon: any }>,
  },
};

export const Event: Story = {
  name: 'Card event',
  args: {
    title: 'Bevrijdingsdag 2025',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description',
    meta: [
      { children: 'Meta 1', icon: <IconCalendarEvent /> },
      { children: 'Meta 2', icon: <IconClock /> },
      { children: 'Meta 3', icon: <IconMapPin /> },
    ] as Array<{ children: string; icon: any }>,
  },
};

export const Persona: Story = {
  name: 'Card persona',
  args: {
    title: 'Hubert Bruls',
    text: 'Burgemeester',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description',
  },
};

export const NoImage: Story = {
  name: 'Card no image',
  args: {
    title: 'Ondernemers opgelet',
    text: 'Ondernemers en bedrijven uit Nijmegen opgelet!',
    image: '',
    image_alt: '',
  },
};
