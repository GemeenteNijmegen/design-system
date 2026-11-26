import '@gemeentenijmegen/components-css';
import '@utrecht/component-library-react/dist/css-module';

type TextInputState = 'default' | 'hover' | 'focus-visible' | 'disabled' | 'invalid' | 'read-only';

export const argTypes = {
  id: {
    control: 'text',
    description: 'Unique identifier to associate it with a form field label',
  },
  placeholder: {
    control: 'text',
    description: 'Placeholder text shown when the input is empty',
  },
  state: {
    control: { type: 'select' },
    options: ['default', 'hover', 'focus-visible', 'disabled', 'invalid', 'read-only'],
    description: 'Show the text input in a specific state',
  },
};

interface TextInputStoryProps {
  id?: string;
  placeholder?: string;
  state?: TextInputState;
}

export const TextInputStory = ({ id, placeholder, state = 'default' }: TextInputStoryProps) => {
  const className = ['nijmegen-text-input', state !== 'default' && `nijmegen-text-input--${state}`]
    .filter(Boolean)
    .join(' ');

  return (
    <input
      type="text"
      id={id}
      className={className}
      placeholder={placeholder || undefined}
      disabled={state === 'disabled' || undefined}
      aria-invalid={state === 'invalid' || undefined}
      readOnly={state === 'read-only' || undefined}
    />
  );
};
