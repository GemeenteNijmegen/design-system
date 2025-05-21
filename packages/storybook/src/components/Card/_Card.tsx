import { IconArrowRight, IconCalendarEvent } from '@tabler/icons-react';
import { Heading4, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import '@gemeentenijmegen/components-css';
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
  image: {
    name: 'Image',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  image_alt: {
    name: 'Image alt',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  date: {
    name: 'Date',
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
  state: {
    name: 'State',
    description:
      'State of the card, in the example code a state class is set for simulating the state appearance. When implementing this component it is not needed to set a state class, the state will be set by the browser and the styles will automatic apply.',
    control: { type: 'select' },
    options: ['default', 'active', 'hover', 'focus', 'focus-visible'],
  },
};

export const CardStory = ({
  title = '',
  text = '',
  meta = [{ children: '', icon: null as any }],
  image = '',
  image_alt = '',
  date = '',
  state = '',
}) => {
  return (
    <div
      className={clsx('nijmegen-card', {
        'nijmegen-card--active': state === 'active',
        'nijmegen-card--hover': state === 'hover',
        'nijmegen-card--focus': state === 'focus',
        'nijmegen-card--focus-visible': state === 'focus-visible',
      })}
    >
      <div className="nijmegen-card__inner">
        <div className="nijmegen-card__content">
          <Heading4>
            <a className="nijmegen-card__link" href="/">
              {title}
            </a>
          </Heading4>
          {text && <Paragraph>{text}</Paragraph>}
        </div>

        {meta.length > 0 && (
          <ul className="nijmegen-card__meta">
            {meta.map((item, index) => (
              <li key={index} className="nijmegen-card__meta-item">
                {item.icon}
                {item.children}
              </li>
            ))}
          </ul>
        )}
      </div>

      {image && (
        <figure className="nijmegen-card__figure">
          <img loading="lazy" src={image} alt={image_alt} />
        </figure>
      )}

      <div className="nijmegen-card__footer">
        <IconArrowRight />
        {date && (
          <div className="nijmegen-card__meta-item">
            <IconCalendarEvent />
            <span>{date}</span>
          </div>
        )}
      </div>
    </div>
  );
};
