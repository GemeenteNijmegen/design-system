import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconCalendarEvent,
  IconClock,
  IconMail,
  IconMapPin,
  IconPencil,
  IconPhone,
  IconShieldCheck,
  IconUser,
} from '@tabler/icons-react';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, MetadataStory } from '../_Metadata';

const meta = {
  title: 'Components/Metadata/Html Implementation',
  id: 'html-metadata',
  argTypes: argTypes,
  component: MetadataStory,
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
} satisfies Meta<typeof MetadataStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Metadata vertical',
  args: {
    layout: 'vertical',
    meta: [
      { children: '15 maart 2025', icon: <IconCalendarEvent aria-label="Datum: " /> },
      { children: '08:30 uur', icon: <IconClock aria-label="Tijd: " /> },
      { children: 'Gemeente Nijmegen, vergaderzaal 3', icon: <IconMapPin aria-label="Locatie: " /> },
    ] as Array<{ children: string; icon: any }>,
  },
};

export const DefaultHorizontal: Story = {
  name: 'Metadata horizontal',
  args: {
    layout: 'horizontal',
    meta: [
      { children: '15 maart 2025', icon: <IconCalendarEvent aria-label="Datum: " /> },
      { children: '08:30 uur', icon: <IconClock aria-label="Tijd: " /> },
      { children: 'Gemeente Nijmegen, vergaderzaal 3', icon: <IconMapPin aria-label="Locatie: " /> },
    ] as Array<{ children: string; icon: any }>,
  },
};

export const Multiple: Story = {
  name: 'Metadata vertical 10 items',
  args: {
    layout: 'vertical',
    meta: [
      { children: '15 maart 2025', icon: <IconCalendarEvent aria-label="Datum: " /> },
      { children: '08:30 uur', icon: <IconClock aria-label="Tijd: " /> },
      { children: 'Gemeente Nijmegen, vergaderzaal 3', icon: <IconMapPin aria-label="Locatie: " /> },

      { children: 'Contactpersoon: Sophie de Vries', icon: <IconUser /> },
      { children: 'Bewerkt door Thomas op 20 maart', icon: <IconPencil /> },

      { children: 'Alleen intern zichtbaar', icon: <IconShieldCheck /> },
      { children: '14 024 (werkdagen 09.00 - 17.00)', icon: <IconPhone aria-label="Telefoonnummer: " /> },

      { children: 'info@nijmegen.nl', icon: <IconMail aria-label="E-mailadres: " /> },
      { children: '/gem_nijmegen', icon: <IconBrandTwitter aria-label="Twitter: " /> },
      { children: '/gemeentenijmegen', icon: <IconBrandInstagram aria-label="Instagram: " /> },
    ] as Array<{ children: string; icon: any }>,
  },
};

export const MultipleHorizontal: Story = {
  name: 'Metadata horizontal 10 items',
  args: {
    layout: 'horizontal',
    meta: [
      { children: '15 maart 2025', icon: <IconCalendarEvent aria-label="Datum: " /> },
      { children: '08:30 uur', icon: <IconClock aria-label="Tijd: " /> },
      { children: 'Gemeente Nijmegen, vergaderzaal 3', icon: <IconMapPin aria-label="Locatie: " /> },

      { children: 'Contactpersoon: Sophie de Vries', icon: <IconUser /> },
      { children: 'Bewerkt door Thomas op 20 maart', icon: <IconPencil /> },

      { children: 'Alleen intern zichtbaar', icon: <IconShieldCheck /> },
      { children: '14 024 (werkdagen 09.00 - 17.00)', icon: <IconPhone aria-label="Telefoonnummer: " /> },

      { children: 'info@nijmegen.nl', icon: <IconMail aria-label="E-mailadres: " /> },
      { children: '/gem_nijmegen', icon: <IconBrandTwitter aria-label="Twitter: " /> },
      { children: '/gemeentenijmegen', icon: <IconBrandInstagram aria-label="Instagram: " /> },
    ] as Array<{ children: string; icon: any }>,
  },
};
