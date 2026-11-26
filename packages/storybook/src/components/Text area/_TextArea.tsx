import '@gemeentenijmegen/components-css';
import '@utrecht/component-library-react/dist/css-module';

type TextAreaState = 'default' | 'hover' | 'focus-visible' | 'disabled' | 'invalid' | 'read-only';

export const argTypes = {
  id: {
    control: 'text',
    description: 'Unique identifier to associate it with a form field label',
  },
  placeholder: {
    control: 'text',
    description: 'Placeholder text shown when the text area is empty',
  },
  state: {
    control: { type: 'select' },
    options: ['default', 'hover', 'focus-visible', 'disabled', 'invalid', 'read-only'],
    description: 'Show the text area in a specific state',
  },
};

interface TextAreaStoryProps {
  id?: string;
  placeholder?: string;
  rows?: number;
  state?: TextAreaState;
}

export const TextAreaStory = ({ id, placeholder, rows, state = 'default' }: TextAreaStoryProps) => {
  const className = ['nijmegen-text-area', state !== 'default' && `nijmegen-text-area--${state}`]
    .filter(Boolean)
    .join(' ');

  return (
    <textarea
      id={id}
      className={className}
      placeholder={placeholder || undefined}
      rows={rows || undefined}
      disabled={state === 'disabled' || undefined}
      aria-invalid={state === 'invalid' || undefined}
      readOnly={state === 'read-only' || undefined}
    />
  );
};
