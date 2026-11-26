import '@gemeentenijmegen/components-css';
import '@utrecht/component-library-react/dist/css-module';
import { ReactNode } from 'react';

export const argTypes = {
  htmlFor: {
    control: 'text',
    description: 'Id of the form input this label belongs to',
  },
  children: {
    control: 'text',
    description: 'Set the content of the label',
  },
  type: {
    control: { type: 'radio' },
    options: ['', 'checkbox', 'radio'],
  },
  checked: {
    control: 'boolean',
  },
  disabled: {
    control: 'boolean',
  },
};

interface FormFieldLabelStoryProps {
  htmlFor?: string;
  children?: ReactNode;
  type?: '' | 'checkbox' | 'radio';
  checked?: boolean;
  disabled?: boolean;
}

export const FormFieldLabelStory = ({ htmlFor, children, type, checked, disabled }: FormFieldLabelStoryProps) => {
  const className = [
    'nijmegen-form-field-label',
    type && `nijmegen-form-field-label--${type}`,
    checked && 'nijmegen-form-field-label--checked',
    disabled && 'nijmegen-form-field-label--disabled',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};
