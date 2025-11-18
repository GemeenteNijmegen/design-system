export const argTypes = {
  direction: {
    description: 'Layout of the action group',
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
};
