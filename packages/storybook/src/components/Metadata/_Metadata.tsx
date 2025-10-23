import '@gemeentenijmegen/components-css';
import clsx from 'clsx';

export const argTypes = {
  meta: {
    name: 'Meta',
    control: { type: 'object' },
    table: {
      defaultValue: '',
    },
  },
  layout: {
    name: 'Layout',
    description: 'Layout of the metadata',
    control: { type: 'select' },
    options: ['vertical', 'horizontal'],
  },
};

export const MetadataStory = ({ meta = [] as { children: string; icon: any }[], layout = 'vertical' }) => {
  return (
    <ul className={clsx('nijmegen-metadata', layout === 'horizontal' && 'nijmegen-metadata__horizontal')}>
      {meta.map((item, index) => (
        <li key={index} className="nijmegen-metadata__item">
          {item.icon}
          {item.children}
        </li>
      ))}
    </ul>
  );
};
