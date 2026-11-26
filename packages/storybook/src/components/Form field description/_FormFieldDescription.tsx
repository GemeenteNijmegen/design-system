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
    description: 'Set the content of the description',
  },
};

interface FormFieldDescriptionStoryProps {
  id?: string;
  children?: ReactNode;
}

export const FormFieldDescriptionStory = ({ id, children }: FormFieldDescriptionStoryProps) => {
  return (
    <div id={id} className="nijmegen-form-field-description">
      {children}
    </div>
  );
};
