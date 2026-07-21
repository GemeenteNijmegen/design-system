import '@gemeentenijmegen/components-css';

export const argTypes = {
  title: {
    name: 'Title',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  text: {
    name: 'Text',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  href: {
    name: 'Link URL',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  headingLevel: {
    name: 'Heading size',
    control: 'select',
    options: ['default', '2', '3', '4', '5'],
  },
};

export const ListOfLinksStory = ({ title = '', text = '', href = '/', headingSize = 'default' }) => {
  const headingClass = headingSize !== 'default' ? `utrecht-heading-${headingSize}` : '';

  return (
    <div className="nijmegen-list-of-links__item">
      <a
        className={`nijmegen-list-of-links__item__link utrecht-link utrecht-link--html-a ${headingClass}`.trim()}
        href={href}
      >
        {title}
      </a>
      <p className="utrecht-paragraph">{text}</p>
    </div>
  );
};
