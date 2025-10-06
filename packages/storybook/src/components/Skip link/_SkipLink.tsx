import '@gemeentenijmegen/components-css';
import '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';

export const argTypes = {
  children: {
    name: 'Children',
    control: 'text',
    description: 'Link text',
  },
  href: {
    name: 'rel',
    control: 'text',
  },
  visibilty: {
    name: 'Visibilty',
    control: { type: 'boolean' },
    description: 'Visibilty',
  },
};

export const SkipLinkStory = ({ children = '', href = '', visibilty = false }) => {
  return (
    <a
      href={href}
      aria-label="Skip link"
      className={clsx('nijmegen-skip-link', visibilty && 'nijmegen-skip-link--focus')}
    >
      {children}
    </a>
  );
};
