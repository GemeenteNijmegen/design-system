import '@gemeentenijmegen/components-css';
import '@utrecht/components/button/css/index.scss';
import { IconAlertTriangle } from '@tabler/icons-react';

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

export const TaskCardStory = ({ title = '', link = '', href = '', date = '', dateTime = '', dateWarning = false }) => {
  return (
    <a className="nijmegen-task-card" href={href}>
      <div className="nijmegen-task-card__content">
        <strong>{title}</strong>
      </div>
      <div className="nijmegen-task-card__context">
        <div className="nijmegen-task-card__details">
          <div className={`nijmegen-task-card__date ${dateWarning ? 'nijmegen-task-card__date--warning' : ''}`}>
            {dateWarning && <IconAlertTriangle />}
            <time dateTime={dateTime}>{date}</time>
          </div>
        </div>
        {link && (
          <div className="nijmegen-task-card__actions">
            <span className="utrecht-button utrecht-button--primary-action">{link}</span>
          </div>
        )}
      </div>
    </a>
  );
};
