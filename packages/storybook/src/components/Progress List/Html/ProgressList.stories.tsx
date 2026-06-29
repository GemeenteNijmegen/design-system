import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes, ProgressListStory } from '../_ProgressList';

const meta = {
  title: 'Components/Progress list/Html Implementation',
  id: 'html-progresslist',
  argTypes: argTypes,
  component: ProgressListStory,
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
} satisfies Meta<typeof ProgressListStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    steps: [
      {
        heading: 'Component ontwerpen',
        status: 'checked',
        enableToggle: true,
        subSteps: [
          {
            text: 'Atomen van het component zijn geïdentificeerd.',
            status: 'checked',
          },
          {
            text: 'Stijlkenmerken van elk atoom zijn vastgesteld.',
            status: 'checked',
          },
        ],
      },
      {
        heading: 'Component opbouwen met design tokens',
        status: 'checked',
        enableToggle: true,
        subSteps: [
          {
            text: 'Design tokens zijn aangemaakt.',
            status: 'checked',
          },
          {
            text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.',
            status: 'checked',
          },
        ],
      },
      {
        heading: 'Component documenteren',
        status: 'current',
      },
      {
        heading: 'Component beschikbaar stellen',
        meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
        metaDate: 'Uiterlijk op 1 juni 2024',
      },
    ],
  },
};

export const Warning: Story = {
  name: 'Warning',
  args: {
    steps: [
      {
        heading: 'Component ontwerpen',
        status: 'checked',
        enableToggle: true,
        subSteps: [
          {
            text: 'Atomen van het component zijn geïdentificeerd.',
            status: 'checked',
          },
          {
            text: 'Stijlkenmerken van elk atoom zijn vastgesteld.',
            status: 'checked',
          },
        ],
      },
      {
        heading: 'Component opbouwen met design tokens',
        status: 'warning',
        enableToggle: true,
        subSteps: [
          {
            text: 'Design tokens zijn aangemaakt.',
            status: 'warning',
          },
          {
            text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.',
          },
        ],
      },
      {
        heading: 'Component documenteren',
      },
      {
        heading: 'Component beschikbaar stellen',
        meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
        metaDate: 'Uiterlijk op 1 juni 2024',
      },
    ],
  },
};

export const Error: Story = {
  name: 'Error',
  args: {
    steps: [
      {
        heading: 'Component ontwerpen',
        status: 'checked',
        enableToggle: true,
        subSteps: [
          {
            text: 'Atomen van het component zijn geïdentificeerd.',
            status: 'checked',
          },
          {
            text: 'Stijlkenmerken van elk atoom zijn vastgesteld.',
            status: 'checked',
          },
        ],
      },
      {
        heading: 'Component opbouwen met design tokens',
        status: 'error',
        enableToggle: true,
        subSteps: [
          {
            text: 'Design tokens zijn aangemaakt.',
            status: 'error',
          },
          {
            text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.',
          },
        ],
      },
      {
        heading: 'Component documenteren',
      },
      {
        heading: 'Component beschikbaar stellen',
        meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
        metaDate: 'Uiterlijk op 1 juni 2024',
      },
    ],
  },
};

export const Shecked: Story = {
  name: 'Alles afgerond',
  args: {
    steps: [
      {
        heading: 'Component ontwerpen',
        status: 'checked',
        enableToggle: true,
        subSteps: [
          {
            text: 'Atomen van het component zijn geïdentificeerd.',
            status: 'checked',
          },
          {
            text: 'Stijlkenmerken van elk atoom zijn vastgesteld.',
            status: 'checked',
          },
        ],
      },
      {
        heading: 'Component opbouwen met design tokens',
        status: 'checked',
        enableToggle: true,
        subSteps: [
          {
            text: 'Design tokens zijn aangemaakt.',
            status: 'checked',
          },
          {
            text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.',
            status: 'checked',
          },
        ],
      },
      {
        heading: 'Component documenteren',
        status: 'checked',
      },
      {
        heading: 'Component beschikbaar stellen',
        status: 'checked',
        meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
        metaDate: 'Uiterlijk op 1 juni 2024',
      },
    ],
  },
};

export const Open: Story = {
  name: 'Alles geopend',
  args: {
    steps: [
      {
        heading: 'Component ontwerpen',
        status: 'checked',
        subSteps: [
          {
            text: 'Atomen van het component zijn geïdentificeerd.',
            status: 'checked',
          },
          {
            text: 'Stijlkenmerken van elk atoom zijn vastgesteld.',
            status: 'checked',
          },
        ],
      },
      {
        heading: 'Component opbouwen met design tokens',
        status: 'checked',
        subSteps: [
          {
            text: 'Design tokens zijn aangemaakt.',
            status: 'checked',
          },
          {
            text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.',
            status: 'checked',
          },
        ],
      },
      {
        heading: 'Component documenteren',
        status: 'current',
      },
      {
        heading: 'Component beschikbaar stellen',
        meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
        metaDate: 'Uiterlijk op 1 juni 2024',
      },
    ],
  },
};

export const Closed: Story = {
  name: 'Alles gesloten',
  args: {
    steps: [
      {
        heading: 'Component ontwerpen',
        status: 'checked',
        enableToggle: true,
        subSteps: [
          {
            text: 'Atomen van het component zijn geïdentificeerd.',
            status: 'checked',
          },
          {
            text: 'Stijlkenmerken van elk atoom zijn vastgesteld.',
            status: 'checked',
          },
        ],
      },
      {
        heading: 'Component opbouwen met design tokens',
        status: 'checked',
        enableToggle: true,
        subSteps: [
          {
            text: 'Design tokens zijn aangemaakt.',
            status: 'checked',
          },
          {
            text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.',
            status: 'checked',
          },
        ],
      },
      {
        heading: 'Component documenteren',
        status: 'current',
        enableToggle: true,
      },
      {
        heading: 'Component beschikbaar stellen',
        enableToggle: true,
        meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
        metaDate: 'Uiterlijk op 1 juni 2024',
      },
    ],
  },
};
