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
  fieldType: {
    control: { type: 'select' },
    options: ['Text input', 'Text area', 'Select'],
  },
};

type FormFieldType = 'Text input' | 'Text area' | 'Select';

interface FormFieldStoryProps {
  id?: string;
  label?: string;
  description?: string;
  invalid?: boolean;
  errorMessage?: string;
  fieldType?: FormFieldType;
}

export const FormFieldStory = ({
  id,
  label,
  description,
  invalid,
  errorMessage,
  fieldType = 'Text input',
}: FormFieldStoryProps) => {
  const descriptionId = `${id}-description`;
  const errorMessageId = `${id}-error-message`;
  const showErrorMessage = invalid && errorMessage;
  const describedBy = [description && descriptionId, showErrorMessage && errorMessageId].filter(Boolean).join(' ');
  const className = ['nijmegen-form-field', invalid && 'nijmegen-form-field--invalid'].filter(Boolean).join(' ');
  const fieldProps = {
    id,
    'aria-describedby': describedBy || undefined,
    'aria-invalid': invalid || undefined,
  };

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
      {fieldType === 'Text input' && <input type="text" className="nijmegen-text-input" {...fieldProps} />}
      {fieldType === 'Text area' && <textarea className="nijmegen-text-area" rows={4} {...fieldProps} />}
      {fieldType === 'Select' && (
        <select className="nijmegen-select" {...fieldProps}>
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
      )}
    </div>
  );
};
