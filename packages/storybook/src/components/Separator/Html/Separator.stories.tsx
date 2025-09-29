import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import { Separator } from '@utrecht/component-library-react/dist/css-module';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';

const SeparatorDiv = () => <div role="separator" aria-hidden="true" className="utrecht-separator"></div>;

interface SeparatorStoryProps {
  element?: 'div' | 'separator';
}

const SeparatorStory = ({ element }: SeparatorStoryProps) => (element === 'div' ? <SeparatorDiv /> : <Separator />);

const meta = {
  title: 'Components/Separator/Html Implementation',
  id: 'html-separator',
  component: SeparatorStory,
  argTypes: {
    element: {
      control: { type: 'select' },
      options: ['div', 'separator'],
    },
  },
  args: {
    element: 'separator',
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
} satisfies Meta<typeof SeparatorStory>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Separator',
};

export const SeparatorDivSupport: Story = {
  args: {
    element: 'div',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Markup with a `<div>` element, with additional attributes to give the correct ARIA role. Styling via `utrecht-separator` class name.',
      },
    },
  },
};
