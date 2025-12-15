import { Heading1, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';
import { SearchStory } from '../Search/_Search';
import '@gemeentenijmegen/components-css';

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
  button_group: {
    name: 'Show button group',
    control: { type: 'boolean' },
  },
  type: {
    name: 'Type',
    control: { type: 'select' },
    options: ['home', 'category', 'image'],
  },
};

export const HeroStory = ({ title = '', text = '', image = '', image_alt = '', type = '', button_group = false }) => {
  return (
    <section
      className={clsx('nijmegen-hero', {
        'nijmegen-hero--home': type === 'home',
        'nijmegen-hero--background-image': type === 'image',
      })}
    >
      <div className="nijmegen-hero__container">
        <div className="nijmegen-hero__content">
          <div className="nijmegen-hero__content--heading">
            {title && <Heading1>{title}</Heading1>}
            {text && type === 'home' && <p className="utrecht-heading-2">{text}</p>}
          </div>
          {text && type !== 'home' && <Paragraph>{text}</Paragraph>}
          {type === 'home' && <SearchStory dark={true}></SearchStory>}

          {button_group === true && (
            <p role="group" className="utrecht-button-group">
              <button className="utrecht-button utrecht-button--primary-action" type="button">
                Button
              </button>
              <button className="utrecht-button utrecht-button--secondary-action" type="button">
                Button
              </button>
            </p>
          )}
        </div>
      </div>
      {image && (type === 'home' || type === 'image') && (
        <img className="nijmegen-hero__image" src={image} alt={image_alt} />
      )}
    </section>
  );
};
