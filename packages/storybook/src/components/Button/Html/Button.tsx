import clsx from 'clsx';

export const argTypes = {
  children: {
    control: { type: 'object' },
    name: 'Content',
    description: 'Button text',
  },
  appearance: {
    name: 'Variation',
    description: 'Button variations',
    control: { type: 'select' },
    options: ['Default', 'Primary', 'Secondary', 'Subtle'],
    table: {
      type: {
        summary: ['string'],
      },
    },
  },
  state: {
    name: 'State',
    description: 'Button states',
    control: { type: 'select' },
    options: ['Default', 'Active', 'Hover', 'Hover + focus-visible', 'Focus', 'Focus-visible'],
  },
  disabled: {
    name: 'Disabled',
    description: 'Disable the button',
    control: { type: 'boolean' },
    table: {
      type: {
        summary: ['boolean'],
      },
    },
  },
  iconBeginning: {
    name: 'Icon beginning',
    description: 'Icon at the beginning of the button',
    control: { type: 'select' },
    options: ['None', 'Tabler example', 'OpenGemeente example'],
    table: {
      type: {
        summary: ['string'],
      },
    },
  },
  iconEnding: {
    name: 'Icon ending',
    description: 'Icon at the ending of the button',
    control: { type: 'select' },
    options: ['None', 'Tabler example', 'OpenGemeente example'],
    table: {
      type: {
        summary: ['string'],
      },
    },
  },
};

export const defaultArgs = {
  children: 'Button text',
  appearance: 'Default',
  state: 'Default',
  disabled: false,
  iconBeginning: 'None',
  iconEnding: 'None',
};

export const ButtonStory = ({
  children = '',
  appearance = defaultArgs.appearance,
  state = defaultArgs.state,
  disabled = defaultArgs.disabled,
  iconBeginning = defaultArgs.iconBeginning,
  iconEnding = defaultArgs.iconEnding,
}) => {
  return (
    <button
      className={clsx('utrecht-button', {
        'utrecht-button--primary-action': appearance === 'Primary',
        'utrecht-button--secondary-action': appearance === 'Secondary',
        'utrecht-button--subtle': appearance === 'Subtle',
        'utrecht-button--active': state === 'Active',
        'utrecht-button--hover': state === 'Hover',
        'utrecht-button--hover utrecht-button--focus utrecht-button--focus-visible': state === 'Hover + focus-visible',
        'utrecht-button--focus': state === 'Focus',
        'utrecht-button--focus utrecht-button--focus-visible': state === 'Focus-visible',
      })}
      disabled={disabled}
      type="button"
    >
      {iconBeginning === 'Tabler example' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M16 3l0 4" />
          <path d="M8 3l0 4" />
          <path d="M4 11l16 0" />
          <path d="M8 15h2v2h-2z" />
        </svg>
      )}
      {iconBeginning === 'OpenGemeente example' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="currentColor"
          stroke="currentColor"
        >
          <title>Agenda</title>
          <path d="M29 34c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1Zm-6-5h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm0-6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm7 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm0 6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm-14 6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm0-12h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm0 6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm6.7 7.46c.37.32.93.31 1.29-.02l3.22-2.94c.41-.37.42-1.01.03-1.41-.38-.38-1-.38-1.38 0l-2.5 2.5-.73-.73a.966.966 0 0 0-1.37 0c-.4.39-.37 1.04.05 1.4l1.39 1.19ZM37.02 8h-5V6.99c0-.55-.44-.99-.99-.99H31c-.55 0-.99.44-.99.99V11c0 .55.45 1 1 1s1-.45 1-1v-1h5v4H11.03v-4h1.99c.55 0 1-.45 1-1s-.45-1-1-1h-2c-1.11 0-2 .89-2 1.99L9 38.02c0 2.2 1.78 3.99 3.98 3.99h22.04c2.21 0 4-1.79 4-4V10c0-1.1-.9-2-2-2ZM13.01 40c-1.1 0-1.99-.89-1.99-1.99V16h26v22c0 1.1-.9 2-2 2H13.01Zm3.02-29c0 .55.45 1 1 1s1-.45 1-1v-1h9c.55 0 1-.45 1-1s-.45-1-1-1h-9V6.99c0-.55-.44-.99-.99-.99s-.99.44-.99.99V8h-.02v3Z" />
        </svg>
      )}
      {children}
      {iconEnding === 'Tabler example' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </svg>
      )}
      {iconEnding === 'OpenGemeente example' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="currentColor"
          stroke="currentColor"
        >
          <title>Let op</title>
          <path d="M25.07 29.42c.28.28.42.64.42 1.08s-.14.8-.42 1.08c-.28.28-.64.42-1.08.42s-.8-.14-1.08-.42c-.28-.28-.42-.64-.42-1.08s.14-.8.42-1.08.64-.42 1.08-.42.8.14 1.08.42ZM24 25c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1Zm16-1c0 8.82-7.18 16-16 16S8 32.82 8 24 15.18 8 24 8s16 7.18 16 16Zm-2 0c0-7.72-6.28-14-14-14s-14 6.28-14 14 6.28 14 14 14 14-6.28 14-14Z" />
        </svg>
      )}
    </button>
  );
};
