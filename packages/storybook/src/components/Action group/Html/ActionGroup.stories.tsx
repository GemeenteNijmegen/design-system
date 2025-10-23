import type { Meta, StoryObj } from '@storybook/react';
import '@utrecht/button-group-css';
import type { StoryContext } from '@storybook/types';
import { IconExternalLink } from '@tabler/icons-react';
import { Button } from '@utrecht/component-library-react';
import { ButtonGroup } from '@utrecht/component-library-react/dist/css-module';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import { argTypes } from '../_ActionGroup';

const meta = {
  title: 'Components/Action Group/Html Implementation',
  id: 'css-action-group',
  component: ButtonGroup,
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
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Button key="1" appearance="primary-action-button">
        Opslaan en doorgaan
      </Button>,
      <Button key="2" appearance="secondary-action-button">
        Terug
      </Button>,
    ],
  },
};

export const DefaultVariant: Story = {
  args: {
    children: [
      <Button key="1" appearance="primary-action-button" iconBeginning="Tabler example">
        Afspraak maken
        <IconExternalLink stroke={2} />
      </Button>,
      <Button key="2" appearance="subtle-button">
        Annuleren
      </Button>,
    ],
  },
};
