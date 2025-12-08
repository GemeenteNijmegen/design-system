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

  const ariaLabel =
    type === 'info'
      ? 'Notitie type Informatie'
      : type === 'error'
        ? 'Notitie type Foutmelding'
        : type === 'ok'
          ? 'Notitie type Succes'
          : type === 'warning'
            ? 'Notitie type Waarschuwing'
            : 'Notitie';

  return (
    <div className={className} aria-label={ariaLabel}>
      <Heading4>{title}</Heading4>
      <Paragraph>{text}</Paragraph>
    </div>
  );
};
