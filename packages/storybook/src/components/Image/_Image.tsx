import '@gemeentenijmegen/components-css';

export const argTypes = {
  src: {
    control: { type: 'text' },
    description: 'Image source URL',
  },
  alt: {
    control: { type: 'text' },
    description: 'Alternative text for the image',
  },
  aspectRatio: {
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

export const ImageStory = (args: any) => {
  const className = args.aspectRatio ? `nijmegen-image ${args.aspectRatio}` : 'nijmegen-image';

  return <img className={className} src={args.src} alt={args.alt} width="640" loading="lazy" />;
};
