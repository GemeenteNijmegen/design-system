import { Heading1, Heading2, Paragraph } from '@utrecht/component-library-react/dist/css-module';
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
  type: {
    name: 'Type',
    control: { type: 'select' },
    options: ['home', 'category'],
  },
};

export const HeroStory = ({ title = '', text = '', image = '', image_alt = '', type = '' }) => {
  return (
    <section
      className={clsx('nijmegen-hero', {
        'nijmegen-hero--home': type === 'home',
      })}
    >
      <div className="nijmegen-hero__container">
        <div className="nijmegen-hero__content">
          <div className="nijmegen-hero__content--heading">
            {title && <Heading1>{title}</Heading1>}
            {text && type === 'home' && <Heading2>{text}</Heading2>}
          </div>
          {text && type === 'category' && <Paragraph>{text}</Paragraph>}
        </div>
      </div>
      {image && type === 'home' && <img className="nijmegen-hero__image" src={image} alt={image_alt} />}
    </section>
  );
};
