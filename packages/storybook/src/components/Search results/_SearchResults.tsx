import '@gemeentenijmegen/components-css';
import { Heading, Link, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';

export const argTypes = {
  title: {
    name: 'Title',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  text: {
    name: 'Text',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  link: {
    name: 'Link',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  url: {
    name: 'Url',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  meta: {
    name: 'Meta',
    control: { type: 'object' },
    table: {
      defaultValue: '',
    },
  },
  layout: {
    name: 'Meta layout',
    description: 'Layout of the metadata',
    control: { type: 'select' },
    options: ['vertical', 'horizontal'],
  },
};

export const SearchResultsStory = ({
  meta = [] as { children: string; icon: any }[],
  layout = 'horizontal',
  title = '',
  text = '',
  link = '',
  url = '',
}) => {
  return (
    <div className="nijmegen-search-results">
      <Heading appearance="utrecht-heading-4" level={4}>
        <a className="nijmegen-search-results__heading" href={url}>
          {title}
        </a>
      </Heading>

      <div className="nijmegen-search-results__content">
        <div className="nijmegen-search-results__summary">
          <ul className={clsx('nijmegen-metadata', layout === 'horizontal' && 'nijmegen-metadata__horizontal')}>
            {meta.map((item, index) => (
              <li key={index} className="nijmegen-metadata__item">
                {item.icon}
                {item.children}
              </li>
            ))}
          </ul>
          <Paragraph>{text}</Paragraph>
        </div>

        <Link href={url}>{link}</Link>
      </div>
    </div>
  );
};
