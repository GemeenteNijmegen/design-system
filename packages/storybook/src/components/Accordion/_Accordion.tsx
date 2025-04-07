export const argTypes = {
  label: {
    name: 'label',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  body: {
    name: 'body',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  expanded: {
    name: 'expanded',
    control: 'boolean',
    table: {
      defaultValue: '',
    },
  },
  icon: {
    name: 'icon',
    table: {
      disable: true,
    },
  },
};

export const accordionData = [
  {
    label: 'Title 1',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.`,
    expanded: false,
  },
  {
    label: 'Title 2',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.`,
    expanded: false,
  },
  {
    label: 'Title 3',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.`,
    expanded: false,
  },
];
