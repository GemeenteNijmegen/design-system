import '@gemeentenijmegen/components-css';
import '@utrecht/component-library-react/dist/css-module';
import { ReactNode } from 'react';

export const argTypes = {
  id: {
    control: 'text',
    description: 'Unique identifier to associate it with a form input',
  },
  children: {
    control: 'text',
    description: 'Set the content of the error message',
  },
};

interface FormFieldErrorMessageStoryProps {
  id?: string;
  children?: ReactNode;
}

export const FormFieldErrorMessageStory = ({ id, children }: FormFieldErrorMessageStoryProps) => {
  return (
    <div id={id} className="nijmegen-form-field-error-message">
      {children}
    </div>
  );
};
