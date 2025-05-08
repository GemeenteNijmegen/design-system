import type { Meta, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import clsx from 'clsx';
import prettierBabel from 'prettier/parser-babel';
import * as prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';
import '@gemeentenijmegen/components-css';

const LinkList = ({ links = [{ children: '', href: '' }], state = '' }) => {
  return (
    <ul className="nijmegen-link-list">
      {links.map((link, index) => (
        <li key={index} className="nijmegen-link-list__item">
          <a
            className={clsx('nijmegen-link-list__link', {
              'nijmegen-link-list__link--active': state === 'active',
              'nijmegen-link-list__link--hover': state === 'hover',
              'nijmegen-link-list__link--focus': state === 'focus',
              'nijmegen-link-list__link--focus-visible': state === 'focus-visible',
              'nijmegen-link-list__link--visited': state === 'visited',
            })}
            href={link.href}
          >
            {link.children}
          </a>
        </li>
      ))}
    </ul>
  );
};

const argTypes = {
  links: {
    name: 'Links',
    description: 'Array of links to be displayed in the list',
    control: { type: 'object' },
    table: {
      type: {
        summary: 'Array<{ children: string, href: string }>',
      },
    },
  },
  state: {
    name: 'State',
    description:
      'State of the link list, in the example code a state class is set for simulating the state appearance. When implementing this component it is not needed to set a state class, the state will be set by the browser and the styles will automatic apply.',
    control: { type: 'select' },
    options: ['default', 'active', 'hover', 'focus', 'focus-visible', 'visited'],
  },
};

const meta = {
  title: 'Components/Link list/Custom Html Implementation',
  id: 'html-link-list-custom',
  component: LinkList,
  argTypes: argTypes,
  args: {
    links: [
      { children: 'Link 1', href: '#' },
      { children: 'Link 2', href: '#' },
      { children: 'Link 3', href: '#' },
    ],
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
} satisfies Meta<typeof LinkList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
