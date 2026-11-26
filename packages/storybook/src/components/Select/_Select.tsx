import '@gemeentenijmegen/components-css';
import '@utrecht/component-library-react/dist/css-module';

type SelectState = 'default' | 'hover' | 'focus-visible' | 'disabled' | 'invalid';

export const argTypes = {
  id: {
    control: 'text',
    description: 'Unique identifier to associate it with a form field label',
  },
  state: {
    control: { type: 'select' },
    options: ['default', 'hover', 'focus-visible', 'disabled', 'invalid'],
    description: 'Show the select in a specific state',
  },
};

interface SelectStoryProps {
  id?: string;
  state?: SelectState;
}

export const SelectStory = ({ id, state = 'default' }: SelectStoryProps) => {
  const className = ['nijmegen-select', state !== 'default' && `nijmegen-select--${state}`].filter(Boolean).join(' ');

  return (
    <select
      id={id}
      className={className}
      disabled={state === 'disabled' || undefined}
      aria-invalid={state === 'invalid' || undefined}
    >
      <option value="1" className="nijmegen-select__option">
        Option 1
      </option>
      <option value="2" className="nijmegen-select__option">
        Option 2
      </option>
      <option value="3" className="nijmegen-select__option">
        Option 3
      </option>
    </select>
  );
};
