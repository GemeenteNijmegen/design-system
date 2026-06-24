import '@gemeentenijmegen/components-css';
import '@gemeentenijmegen/web-components/dist/progress-list.js';
import { IconChevronDown } from '@tabler/icons-react';
import { ReactNode } from 'react';

export const argTypes = {
  steps: {
    name: 'Steps',
    description: 'Array of steps to display in the progress list',
    control: { type: 'object' },
    table: {
      defaultValue: { summary: '[]' },
    },
  },
};

type StepStatus = 'current' | 'checked' | 'not-checked' | 'warning' | 'error';

interface SubStep {
  text: string | ReactNode;
  status?: StepStatus;
}

interface Step {
  heading: string;
  status?: StepStatus;
  body?: string | ReactNode;
  subSteps?: SubStep[];
}

const getStatusText = (status: StepStatus | undefined): string => {
  switch (status) {
    case 'checked':
      return 'afgerond';
    case 'current':
      return 'huidige stap';
    case 'not-checked':
      return 'nog niet gestart';
    case 'warning':
      return 'waarschuwing in stap';
    case 'error':
      return 'fout in stap';
    default:
      return 'nog niet gestart';
  }
};

export const ProgressListStoryWebComponent = ({ steps = [] as Step[] }) => {
  return (
    <nijmegen-progress-list>
      {steps.map((step, index) => (
        <li
          key={index}
          className={`nijmegen-progress-list__step${
            step.status ? ` nijmegen-progress-list__step--${step.status}` : ''
          }`}
        >
          <div className="nijmegen-progress-list__header">
            {step.subSteps?.length ? (
              <button
                className="nijmegen-progress-list__button"
                aria-expanded="false"
                aria-controls={`progress-details-${index}`}
                aria-label={`Stap ${index + 1} ${getStatusText(step.status)}: `}
              >
                {step.heading}
                <IconChevronDown></IconChevronDown>
              </button>
            ) : (
              <span>
                <span className="nijmegen-sr-only">
                  Stap {index + 1} {getStatusText(step.status)}:{' '}
                </span>
                {step.heading}
              </span>
            )}
          </div>

          <div className="nijmegen-progress-list__body">
            {step.body &&
              (typeof step.body === 'string' ? <p className="utrecht-paragraph">{step.body}</p> : step.body)}
          </div>

          {step.subSteps?.length && (
            <ul className="nijmegen-progress-list__details" id={`progress-details-${index}`} hidden>
              {step.subSteps.map((subStep, subIndex) => (
                <li
                  key={subIndex}
                  className={`nijmegen-progress-list__sub-step${
                    subStep.status ? ` nijmegen-progress-list__sub-step--${subStep.status}` : ''
                  }`}
                >
                  {subStep.text}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </nijmegen-progress-list>
  );
};

export const ProgressListStory = ({ steps = [] as Step[] }) => {
  return (
    <ol className="nijmegen-progress-list">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`nijmegen-progress-list__step${
            step.status ? ` nijmegen-progress-list__step--${step.status}` : ''
          }`}
        >
          <div className="nijmegen-progress-list__header">
            {step.subSteps?.length ? (
              <button
                className="nijmegen-progress-list__button"
                aria-expanded="false"
                aria-controls={`progress-details-${index}`}
                aria-label={`Stap ${index + 1} ${getStatusText(step.status)}: `}
              >
                {step.heading}
                <IconChevronDown></IconChevronDown>
              </button>
            ) : (
              <span>
                <span className="nijmegen-sr-only">
                  Stap {index + 1} {getStatusText(step.status)}:{' '}
                </span>
                {step.heading}
              </span>
            )}
          </div>

          <div className="nijmegen-progress-list__body">
            {step.body &&
              (typeof step.body === 'string' ? <p className="utrecht-paragraph">{step.body}</p> : step.body)}
          </div>

          {step.subSteps?.length && (
            <ul className="nijmegen-progress-list__details" id={`progress-details-${index}`} hidden>
              {step.subSteps.map((subStep, subIndex) => (
                <li
                  key={subIndex}
                  className={`nijmegen-progress-list__sub-step${
                    subStep.status ? ` nijmegen-progress-list__sub-step--${subStep.status}` : ''
                  }`}
                >
                  {subStep.text}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
};
