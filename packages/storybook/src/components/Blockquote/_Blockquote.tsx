import '@gemeentenijmegen/components-css';

export const argTypes = {
  text: {
    name: 'Text',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  caption: {
    name: 'Text',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
};

export const BlockquoteStory = ({ text = '', caption = '' }) => {
  return (
    <figure className="nijmegen-blockquote">
      <blockquote className="nijmegen-blockquote__quote">
        <p className="nijmegen-paragraph">{text}</p>
      </blockquote>
      <figcaption className="nijmegen-blockquote__caption">{caption}</figcaption>
    </figure>
  );
};
