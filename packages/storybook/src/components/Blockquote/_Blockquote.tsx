import '@gemeentenijmegen/components-css';

export const argTypes = {
  text: {
    name: 'Text',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
};

export const BlockquoteStory = ({ text = '' }) => {
  return (
    <figure className="utrecht-blockquote">
      <blockquote className="utrecht-blockquote__quote">
        <p className="utrecht-paragraph">{text}</p>
      </blockquote>
      <figcaption className="utrecht-blockquote__caption">L. Ipsum</figcaption>
    </figure>
  );
};
