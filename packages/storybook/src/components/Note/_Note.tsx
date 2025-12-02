import '@gemeentenijmegen/components-css';
import { Heading4, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';

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
  type: {
    description: 'Type',
    control: { type: 'select' },
    options: ['default', 'info', 'error', 'ok', 'warning'],
    table: {
      defaultValue: 'default',
    },
  },
};

export const NoteStory = ({ title = '', text = '', type = 'default' }) => {
  const className = clsx('utrecht-spotlight-section', {
    'utrecht-spotlight-section--info': type === 'info',
    'utrecht-spotlight-section--error': type === 'error',
    'utrecht-spotlight-section--ok': type === 'ok',
    'utrecht-spotlight-section--warning': type === 'warning',
  });

  return (
    <div className={className}>
      <Heading4>{title}</Heading4>
      <Paragraph>{text}</Paragraph>
    </div>
  );
};
