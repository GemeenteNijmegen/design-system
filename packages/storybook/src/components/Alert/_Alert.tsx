import { IconAlertCircle, IconAlertTriangle, IconCircleCheck, IconInfoCircle } from '@tabler/icons-react';
import { Alert, Heading4, Paragraph } from '@utrecht/component-library-react/dist/css-module';

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
};

export const defaultArgs = {
  title: 'Heading',
  text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
  type: 'info',
};

export const AlertStory = ({ title = defaultArgs.title, text = defaultArgs.text, type = defaultArgs.type }) => {
  let icon = <IconCircleCheck />;
  switch (type) {
    case 'error':
      icon = (
        <span className="utrecht-icon">
          <IconAlertCircle />
        </span>
      );
      break;
    case 'info':
      icon = (
        <span className="utrecht-icon">
          <IconInfoCircle />
        </span>
      );
      break;
    case 'ok':
      icon = (
        <span className="utrecht-icon">
          <IconCircleCheck />
        </span>
      );
      break;
    case 'warning':
      icon = (
        <span className="utrecht-icon">
          <IconAlertTriangle />
        </span>
      );
      break;
  }

  return (
    <Alert icon={icon} type={type}>
      <Heading4>{title}</Heading4>
      <Paragraph>{text}</Paragraph>
    </Alert>
  );
};
