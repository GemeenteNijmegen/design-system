import { html } from 'lit';
import '@gemeentenijmegen/web-components/src/toolbar-button/toolbar-button.js';

const toolbarButton = ({ label, type }) => {
  return html` <nijmegen-toolbar-button type="${type}">${label}</nijmegen-toolbar-button> `;
};

export default {
  title: 'Toolbar Button',
  tags: ['autodocs'],
  argTypes: {
    label: {
      name: 'Content',
      description: 'Button text',
    },
    type: {
      name: 'Type',
      description: 'Button type',
      control: { type: 'select' },
      options: ['', 'menu', 'search'],
    },
  },
  args: {
    label: 'Toolbar button',
    type: '',
  },
  parameters: {
    status: {
      type: 'BETA',
    },
  },
  id: 'web-components-nijmegen-toolbar-button',
  render: (args) => toolbarButton(args),
};

export const Default = {
  args: {
    label: 'Toolbar button',
    type: '',
  },
};
export const Menu = {
  args: {
    label: 'Menu',
    type: 'menu',
  },
};

export const Search = {
  args: {
    label: 'Zoeken',
    type: 'search',
  },
};
