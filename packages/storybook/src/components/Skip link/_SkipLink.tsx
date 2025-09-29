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
  focusVisible: {
    name: 'focusVisible',
    control: { type: 'boolean' },
    description: 'Simulate :focus-visible',
  },
};

export const SkipLinkStory = ({ children = '', href = '', visibilty = false, focusVisible = false }) => {
  return (
    <a
      href={href}
      className={clsx(
        'nijmegen-skip-link',
        visibilty && 'nijmegen-skip-link--focus',
        focusVisible && 'nijmegen-skip-link--focus-visible',
      )}
    >
      {children}
    </a>
  );
};
