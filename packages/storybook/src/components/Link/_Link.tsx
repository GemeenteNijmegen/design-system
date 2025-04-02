export const argTypes = {
  title: {
    name: 'Title',
    control: 'text',
  },
  children: {
    name: 'Children',
    control: 'text',
  },
  rel: {
    name: 'rel',
    control: 'text',
  },
  target: {
    name: 'Target',
    description: 'Link target',
    control: { type: 'select' },
    options: ['_self', '_blank', '_parent', '_top'],
  },
  placeholder: {
    name: 'Placeholder',
    description: 'Disable the link',
    control: { type: 'boolean' },
    table: {
      type: {
        summary: ['boolean'],
      },
    },
  },
};
