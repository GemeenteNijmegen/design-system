import '@gemeentenijmegen/components-css';
import '@utrecht/components/button/css/index.scss';
import { IconAlertTriangle, IconArrowRight } from '@tabler/icons-react';

export const argTypes = {
  title: {
    name: 'Title',
    control: 'text',
  },
  link: {
    name: 'Link Text',
    control: 'text',
  },
  href: {
    name: 'URL',
    control: 'text',
  },
  date: {
    name: 'Date',
    control: 'text',
  },
  dateTime: {
    name: 'DateTime',
    control: 'text',
  },
  dateWarning: {
    name: 'Date Warning',
    control: 'boolean',
  },
};

export const TaskNavigationStory = ({
  title = '',
  link = '',
  href = '',
  date = '',
  dateTime = '',
  dateWarning = false,
}) => {
  return (
    <a className="nijmegen-task-navigation" href={href}>
      <div className="nijmegen-task-navigation__content">
        <strong>{title}</strong>
      </div>
      <div className="nijmegen-task-navigation__context">
        <div className="nijmegen-task-navigation__details">
          <div
            className={`nijmegen-task-navigation__date ${dateWarning ? 'nijmegen-task-navigation__date--warning' : ''}`}
          >
            {dateWarning && <IconAlertTriangle />}
            <time dateTime={dateTime}>{date}</time>
          </div>
        </div>
        {link && (
          <div className="nijmegen-task-navigation__actions">
            <IconArrowRight />
          </div>
        )}
      </div>
    </a>
  );
};
