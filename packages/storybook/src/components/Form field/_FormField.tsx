import '@gemeentenijmegen/components-css';
import '@utrecht/component-library-react/dist/css-module';

export const argTypes = {
  id: {
    control: 'text',
  },
  label: {
    control: 'text',
  },
  description: {
    control: 'text',
  },
  invalid: {
    control: 'boolean',
  },
  errorMessage: {
    control: 'text',
  },
};

interface FormFieldStoryProps {
  id?: string;
  label?: string;
  description?: string;
  invalid?: boolean;
  errorMessage?: string;
}

export const FormFieldStory = ({ id, label, description, invalid, errorMessage }: FormFieldStoryProps) => {
  const descriptionId = `${id}-description`;
  const errorMessageId = `${id}-error-message`;
  const showErrorMessage = invalid && errorMessage;
  const describedBy = [description && descriptionId, showErrorMessage && errorMessageId].filter(Boolean).join(' ');
  const className = ['nijmegen-form-field', invalid && 'nijmegen-form-field--invalid'].filter(Boolean).join(' ');

  return (
    <div className={className}>
      <label htmlFor={id} className="nijmegen-form-field-label">
        {label}
      </label>
      {description && (
        <div id={descriptionId} className="nijmegen-form-field-description">
          {description}
        </div>
      )}
      {showErrorMessage && (
        <div id={errorMessageId} className="nijmegen-form-field-error-message">
          {errorMessage}
        </div>
      )}
      <input
        type="text"
        id={id}
        className="nijmegen-text-input"
        aria-describedby={describedBy || undefined}
        aria-invalid={invalid || undefined}
      />
    </div>
  );
};
