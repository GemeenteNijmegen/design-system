import { IconAlertCircle, IconAlertTriangle, IconCircleCheck, IconInfoCircle, IconX } from '@tabler/icons-react';
import { Heading4, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import '@gemeentenijmegen/components-css';

export const argTypes = {
  title: {
    name: 'title',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  text: {
    name: 'text',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  type: {
    description: 'Type',
    control: { type: 'select' },
    options: ['info', 'error', 'ok', 'warning'],
    table: {
      defaultValue: '',
    },
  },
  global: {
    name: 'global',
    control: 'boolean',
    table: {
      defaultValue: { summary: false },
    },
  },
};

export const defaultArgs = {
  title: 'Heading',
  text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  type: 'info',
  global: false,
};

export const AlertStory = ({
  title = defaultArgs.title,
  text = defaultArgs.text,
  type = defaultArgs.type,
  global = defaultArgs.global,
}) => {
  let icon = <IconCircleCheck />;
  let ariaLabel = 'Alert type Succes';

  switch (type) {
    case 'error':
      icon = <IconAlertCircle />;
      ariaLabel = 'Alert type Foutmelding';
      break;
    case 'info':
      icon = <IconInfoCircle />;
      ariaLabel = 'Alert type Informatie';
      break;
    case 'ok':
      icon = <IconCircleCheck />;
      ariaLabel = 'Alert type Succes';
      break;
    case 'warning':
      icon = <IconAlertTriangle />;
      ariaLabel = 'Alert type Waarschuwing';
      break;
  }

  return (
    <div className={`nijmegen-alert nijmegen-alert--${type}`}>
      <div className="nijmegen-alert__icon">
        <span className="utrecht-icon" role="img" aria-label={ariaLabel}>
          {icon}
        </span>
      </div>
      <div className="nijmegen-alert__content">
        <div className="nijmegen-alert__message" role="status">
          <Heading4>{title}</Heading4>
          <Paragraph>{text}</Paragraph>
        </div>
      </div>
      {global && (
        <div className="nijmegen-alert__icon">
          <button className="nijmegen-alert__close">
            <span className="utrecht-icon" role="img" aria-label="Sluiten">
              <IconX></IconX>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};
