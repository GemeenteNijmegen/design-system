import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import {
  IconArchive,
  IconBuildingCommunity,
  IconCurrencyEuro,
  IconHome,
  IconInbox,
  IconLayoutGrid,
  IconParking,
  IconUser,
} from '@tabler/icons-react';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, SideNavigationStory } from '../_SideNavigation';

const meta = {
  title: 'Components/Side navigation/Html Implementation',
  id: 'html-side-navigation',
  component: SideNavigationStory,
  argTypes: argTypes,
  args: {},
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
} satisfies Meta<typeof SideNavigationStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    lists: [
      {
        items: [
          { text: 'Overzicht', href: '#', icon: <IconLayoutGrid />, current: true },
          { text: 'Berichten', href: '#', icon: <IconInbox />, badge: 9 },
          { text: 'Lopende zaken', href: '#', icon: <IconArchive /> },
          { text: 'Belastingzaken', href: '#', icon: <IconCurrencyEuro /> },
          { text: 'WOZ', href: '#', icon: <IconHome /> },
          { text: 'Parkeren', href: '#', icon: <IconParking /> },
          { text: 'Erfpacht', href: '#', icon: <IconBuildingCommunity /> },
          { text: 'Gegevens', href: '#', icon: <IconUser /> },
        ],
      },
    ],
  },
};

export const Grouped: Story = {
  args: {
    lists: [
      {
        items: [{ text: 'Overzicht', href: '#', icon: <IconLayoutGrid />, current: true }],
      },
      {
        items: [
          { text: 'Berichten', href: '#', icon: <IconInbox />, badge: 9 },
          { text: 'Lopende zaken', href: '#', icon: <IconArchive /> },
        ],
      },
      {
        items: [
          { text: 'Belastingzaken', href: '#', icon: <IconCurrencyEuro /> },
          { text: 'WOZ', href: '#', icon: <IconHome /> },
          { text: 'Parkeren', href: '#', icon: <IconParking /> },
          { text: 'Erfpacht', href: '#', icon: <IconBuildingCommunity /> },
        ],
      },
      {
        items: [{ text: 'Gegevens', href: '#', icon: <IconUser /> }],
      },
    ],
  },
};
