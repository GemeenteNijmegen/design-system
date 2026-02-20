import '@gemeentenijmegen/components-css';
import '@utrecht/component-library-react/dist/css-module';
import { Heading3, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import clsx from 'clsx';

export const argTypes = {
  reverse: {
    name: 'Reverse',
    control: 'boolean',
    table: {
      defaultValue: false,
    },
  },
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
  children: {
    name: 'Buttons',
    defaultValue: '',
  },
  imageSrc: {
    control: { type: 'text' },
    description: 'Image source URL',
  },
  imageAlt: {
    control: { type: 'text' },
    description: 'Alternative text for the image',
  },
  imageAspectRatio: {
    control: { type: 'select' },
    options: {
      None: '',
      '16:9': 'nijmegen-image--aspect-16-9',
      '1:1': 'nijmegen-image--aspect-1-1',
      '4:3': 'nijmegen-image--aspect-4-3',
    },
    description: 'Aspect ratio class for the image',
  },
};

export const ImageTextBlockStory = (args: any) => {
  const imageClassName = args.imageAspectRatio ? `nijmegen-image ${args.imageAspectRatio}` : 'nijmegen-image';

  const blockClassName = clsx('nijmegen-image-text-block', {
    'nijmegen-image-text-block--reverse': args.reverse,
  });

  return (
    <div className={blockClassName}>
      <div className="nijmegen-image-text-block__content">
        <div className="nijmegen-image-text-block__message">
          <Heading3>{args.title}</Heading3>
          <Paragraph>{args.text}</Paragraph>
        </div>
        <p role="group" className="utrecht-button-group">
          {args.children}
        </p>
      </div>
      <div className="nijmegen-image-text-block__image">
        <img className={imageClassName} src={args.imageSrc} alt={args.imageAlt} width="640" loading="lazy" />
      </div>
    </div>
  );
};
