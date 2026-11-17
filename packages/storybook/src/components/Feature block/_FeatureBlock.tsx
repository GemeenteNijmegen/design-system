import { Heading2, HeadingGroup, Paragraph, PreHeading } from '@utrecht/component-library-react/dist/css-module';
import '@gemeentenijmegen/components-css';

export const argTypes = {
  preHeading: {
    name: 'Pre-heading',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  heading: {
    name: 'Heading',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  content: {
    name: 'Content',
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
  show_button: {
    name: 'Show button',
    control: { type: 'boolean' },
  },
  button_text: {
    name: 'Button text',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  button_href: {
    name: 'Button href',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
};

export const FeatureBlockStory = ({
  preHeading = '',
  heading = '',
  content = '',
  image = '',
  image_alt = '',
  show_button = false,
  button_text = '',
  button_href = '#',
}) => {
  return (
    <div className="nijmegen-feature-block">
      <div className="nijmegen-feature-block__container">
        <div className="nijmegen-feature-block__content">
          <div className="nijmegen-feature-block__message">
            {(preHeading || heading) && (
              <HeadingGroup>
                {preHeading && <PreHeading>{preHeading}</PreHeading>}
                {heading && <Heading2>{heading}</Heading2>}
              </HeadingGroup>
            )}
            {content && <Paragraph>{content}</Paragraph>}
          </div>
          {show_button === true && (
            <a className="utrecht-button utrecht-button--primary-action" href={button_href}>
              {button_text}
            </a>
          )}
        </div>
        {image && (
          <figure className="nijmegen-feature-block__figure">
            <img loading="lazy" src={image} alt={image_alt} />
          </figure>
        )}
      </div>
    </div>
  );
};
