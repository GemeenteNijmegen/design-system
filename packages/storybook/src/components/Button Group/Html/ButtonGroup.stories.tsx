import type { Meta, StoryObj } from '@storybook/react';
import '@utrecht/components/button/css/index.scss';
import '@utrecht/components/icon/css/index.scss';
import '@utrecht/button-group-css';
import type { StoryContext } from '@storybook/types';
import { Button } from '@utrecht/component-library-react';
import { ButtonGroup } from '@utrecht/component-library-react/dist/css-module';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';

const meta = {
  title: 'Components/Button Group/Html Implementation',
  id: 'css-button-group',
  component: ButtonGroup,
  argTypes: {
    direction: {
      description: 'Layout of the button group',
      control: 'select',
      options: {
        '': undefined,
        column: 'column',
        row: 'row',
      },
      children: {
        name: 'Content',
        description: 'Button text',
        defaultValue: '',
      },
    },
  },
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
        Save and continue
      </Button>,
      <Button key="2" appearance="secondary-action-button">
        Back
      </Button>,
    ],
  },
};
