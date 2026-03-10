import '@gemeentenijmegen/components-css';

export const argTypes = {
  number: {
    control: 'number',
  },
};

export const NumberBadgeStory = ({ number = 0 }) => {
  return <span className="nijmegen-number-badge">{number}</span>;
};
