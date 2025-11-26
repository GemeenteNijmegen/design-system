import '@gemeentenijmegen/components-css';
import { Paragraph } from '@utrecht/component-library-react/dist/css-module';

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
};

export const NoteStory = ({ title = '', text = '' }) => {
  return (
    <div className="nijmegen-note">
      <span className="nijmegen-note--heading">{title}</span>
      <Paragraph>{text}</Paragraph>
    </div>
  );
};
